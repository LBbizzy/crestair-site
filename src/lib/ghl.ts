const GHL_API_BASE_URL = process.env.GHL_API_BASE_URL;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_PRIVATE_INTEGRATION_TOKEN = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;

export type GhlConversionPayload = {
  name: string;
  email?: string;
  phone: string;
  source_page: string;
  service_type: string;
  location: string;
  action_type: 'form' | 'call';
  page_type: string;
};

function requireEnv(name: string, value: string | undefined) {
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

function splitName(name: string) {
  const trimmed = name.trim();
  if (!trimmed) return { firstName: 'Website', lastName: 'Lead' };
  const parts = trimmed.split(/\s+/);
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' ') || 'Lead',
  };
}

export async function upsertGhlContact(payload: GhlConversionPayload) {
  const baseUrl = requireEnv('GHL_API_BASE_URL', GHL_API_BASE_URL);
  const locationId = requireEnv('GHL_LOCATION_ID', GHL_LOCATION_ID);
  const token = requireEnv('GHL_PRIVATE_INTEGRATION_TOKEN', GHL_PRIVATE_INTEGRATION_TOKEN);

  const { firstName, lastName } = splitName(payload.name);

  const response = await fetch(`${baseUrl}/contacts/upsert`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Version: '2021-07-28',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      locationId,
      firstName,
      lastName,
      email: payload.email || undefined,
      phone: payload.phone,
      source: 'crestair-site',
      tags: [
        'crestair-site',
        `source_page:${payload.source_page}`,
        `service_type:${payload.service_type}`,
        `location:${payload.location}`,
        `action_type:${payload.action_type}`,
        `page_type:${payload.page_type}`,
      ],
    }),
    cache: 'no-store',
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.message || data?.error || `GHL upsert failed with status ${response.status}`);
  }

  return data;
}
