const GHL_API_BASE_URL = process.env.GHL_API_BASE_URL;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_PRIVATE_INTEGRATION_TOKEN = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;

const TRACKING_FIELDS = ['source_page', 'service_type', 'location', 'action_type', 'page_type', 'service_request', 'funnel_identifier'] as const;

type TrackingFieldName = (typeof TRACKING_FIELDS)[number];

type GhlCustomField = {
  id?: string;
  name?: string;
  fieldKey?: string;
  key?: string;
  dataType?: string;
};

export type GhlConversionPayload = {
  name: string;
  email?: string;
  phone: string;
  source_page: string;
  service_type: string;
  location: string;
  action_type: 'form' | 'call';
  page_type: string;
  service_request?: string;
  funnel_identifier?: string;
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

async function ghlRequest<T>(path: string, init: RequestInit = {}) {
  const baseUrl = requireEnv('GHL_API_BASE_URL', GHL_API_BASE_URL);
  const token = requireEnv('GHL_PRIVATE_INTEGRATION_TOKEN', GHL_PRIVATE_INTEGRATION_TOKEN);

  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: '2021-07-28',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(init.headers || {}),
    },
    cache: 'no-store',
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.message || data?.error || `GHL request failed for ${path} with status ${response.status}`);
  }

  return data as T;
}

function extractCustomFieldList(data: unknown): GhlCustomField[] {
  if (Array.isArray(data)) return data as GhlCustomField[];
  if (data && typeof data === 'object') {
    const record = data as Record<string, unknown>;
    if (Array.isArray(record.customFields)) return record.customFields as GhlCustomField[];
    if (Array.isArray(record.fields)) return record.fields as GhlCustomField[];
    if (Array.isArray(record.data)) return record.data as GhlCustomField[];
  }
  return [];
}

async function ensureTrackingCustomFields(locationId: string) {
  try {
    const list = extractCustomFieldList(await ghlRequest<unknown>(`/locations/${locationId}/customFields`));
    const mapping = new Map<TrackingFieldName, string>();

    for (const fieldName of TRACKING_FIELDS) {
      const found = list.find((field) => {
        const candidates = [field.name, field.fieldKey, field.key]
          .filter(Boolean)
          .map((value) => String(value).toLowerCase());
        return candidates.includes(fieldName) || candidates.includes(`contact.${fieldName}`);
      });

      if (found?.id) {
        mapping.set(fieldName, found.id);
        continue;
      }

      const created = await ghlRequest<GhlCustomField>(`/locations/${locationId}/customFields`, {
        method: 'POST',
        body: JSON.stringify({
          name: fieldName,
          fieldKey: fieldName,
          dataType: 'TEXT',
          model: 'contact',
          placeholder: fieldName,
        }),
      });

      if (created?.id) {
        mapping.set(fieldName, created.id);
      }
    }

    return mapping;
  } catch (error) {
    console.error('Unable to ensure GHL tracking custom fields', error);
    return new Map<TrackingFieldName, string>();
  }
}

export async function upsertGhlContact(payload: GhlConversionPayload) {
  const locationId = requireEnv('GHL_LOCATION_ID', GHL_LOCATION_ID);
  const { firstName, lastName } = splitName(payload.name);
  const fieldIds = await ensureTrackingCustomFields(locationId);

  const customFields = TRACKING_FIELDS.flatMap((fieldName) => {
    const id = fieldIds.get(fieldName);
    const value = payload[fieldName];
    if (!id || value === undefined || value === null || value === '') return [];
    return [{ id, field_value: String(value) }];
  });

  return ghlRequest(`/contacts/upsert`, {
    method: 'POST',
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
        ...(payload.funnel_identifier ? [`funnel_identifier:${payload.funnel_identifier}`] : []),
      ],
      customFields,
    }),
  });
}
