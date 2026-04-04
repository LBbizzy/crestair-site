#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const projectRoot = path.resolve(__dirname, '..');
const imagesDir = path.join(projectRoot, 'public', 'images');
const registryPath = '/Users/openclaw/.openclaw/secure/image_registry.json';
const logoRegistryPath = '/Users/openclaw/.openclaw/secure/logo_registry.json';

function exitWithError(message, errors) {
  console.error('\nIMAGE VALIDATION FAILED');
  if (message) console.error(message);
  errors.forEach((err) => console.error('-', err));
  process.exit(1);
}

if (!fs.existsSync(registryPath)) {
  exitWithError(`Registry file not found at ${registryPath}`, []);
}

let registry;
try {
  registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
} catch (err) {
  exitWithError('Unable to parse image registry JSON.', [err.message]);
}

let logoRegistry = {}
if (fs.existsSync(logoRegistryPath)) {
  try {
    logoRegistry = JSON.parse(fs.readFileSync(logoRegistryPath, 'utf8'));
  } catch (err) {
    exitWithError('Unable to parse logo registry JSON.', [err.message]);
  }
}
const approvedLogos = [];
for (const [company, logos] of Object.entries(logoRegistry)) {
  for (const [name, info] of Object.entries(logos || {})) {
    if (info && info.approved) {
      approvedLogos.push({
        company,
        name,
        path: path.resolve(info.file).replace(/\\/g, '/'),
        hash: info.sha256
      });
    }
  }
}
const approvedLogoPaths = new Set(approvedLogos.map((logo) => logo.path));
const allowedLogoFilenames = new Set(['crest-air-logo-primary-horizontal.png', 'crest-air-logo-badge-arizona.png']);
const registryMap = new Map();
(registry.images || []).forEach((entry) => {
  if (!entry || !entry.path) return;
  const normalized = entry.path.replace(/\\/g, '/');
  registryMap.set(normalized, entry);
});

const errors = [];
const filenamePattern = /^[a-z0-9]+(?:-[a-z0-9]+)+\.(?:jpg|jpeg|png|webp|avif)$/;

function getFileHash(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(data).digest('hex');
}
function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach((item) => {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      walk(fullPath);
    } else {
      validateFile(fullPath);
    }
  });
}

function validateFile(fullPath) {
  const relPath = path.relative(projectRoot, fullPath).replace(/\\/g, '/');
  const entry = registryMap.get(relPath);
  const fileName = path.basename(fullPath);
  const normalized = relPath;

  if (!entry) {
    errors.push(`Missing registry entry for ${normalized}`);
    return;
  }

  if (!entry.approved) {
    errors.push(`Image not approved: ${normalized}`);
  }
  if (!entry.logo_verified) {
    errors.push(`Logo verification missing: ${normalized}`);
  }

  const isLogoFile = normalized.startsWith('public/images/logos/approved/');
  if (isLogoFile) {
    const filename = path.basename(normalized);
    if (!allowedLogoFilenames.has(filename)) {
      errors.push(`Unauthorized logo filename: ${normalized}`);
    }
    const stat = fs.lstatSync(fullPath);
    if (!stat.isSymbolicLink()) {
      errors.push(`Logo files must be symlinks to the branding kit: ${normalized}`);
    } else {
      const symlinkTarget = path.resolve(path.dirname(fullPath), fs.readlinkSync(fullPath)).replace(/\\/g, '/');
      if (!approvedLogoPaths.has(symlinkTarget)) {
        errors.push(`Logo symlink target is not an approved branding-kit asset: ${normalized}`);
      } else {
        const hash = getFileHash(fullPath);
        const approved = approvedLogos.find((logo) => logo.path === symlinkTarget);
        if (!approved) {
          errors.push(`Logo missing registry entry: ${normalized}`);
        } else if (hash !== approved.hash) {
          errors.push(`Logo hash mismatch for ${normalized}`);
        }
      }
    }
  }

  if (!filenamePattern.test(fileName)) {
    errors.push(`Filename does not match required schema: ${fileName}`);
  } else {
    const segments = fileName.replace(/\.[^.]+$/, '').split('-');
    if (segments.length < 4) {
      errors.push(`Filename must include page/section/service context (min 4 hyphenated segments): ${fileName}`);
    }
  }

  if (!entry.page || !entry.section) {
    errors.push(`Metadata (page/section) missing in registry for ${normalized}`);
  }

  if (fileName.includes('logo') && !normalized.startsWith('public/images/logos/approved/')) {
    errors.push(`Logo-like filename must be stored under /public/images/logos/approved: ${normalized}`);
  }
}

if (!fs.existsSync(imagesDir)) {
  exitWithError(`Images directory not found at ${imagesDir}`, []);
}

walk(imagesDir);

if (errors.length) {
  exitWithError('', errors);
}

console.log('IMAGE VALIDATION PASS');