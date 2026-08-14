// Sends a website lead into the War Room so it lands in this company's own
// Rolodex (and texts the owner). Kept separate from the GoHighLevel push so
// either destination can be removed without touching the other.
const WARROOM_LEAD_URL = process.env.WARROOM_LEAD_URL ?? 'https://api.warroom.lmbhub.com/leads/capture';
const WARROOM_LEAD_KEY = process.env.WARROOM_LEAD_KEY;
const WARROOM_COMPANY_ID = process.env.WARROOM_COMPANY_ID ?? 'crestair';

export type WarRoomLead = {
  name: string;
  email?: string;
  phone: string;
  service_type?: string;
  service_request?: string;
  source_page?: string;
  page_type?: string;
  location?: string;
};

export async function sendWarRoomLead(lead: WarRoomLead) {
  if (!WARROOM_LEAD_KEY) {
    console.warn('[warroom] WARROOM_LEAD_KEY is not set - skipping War Room lead push');
    return { ok: false, skipped: true };
  }
  const body = {
    company_id: WARROOM_COMPANY_ID,
    name: lead.name,
    email: lead.email ?? '',
    phone: lead.phone,
    source: lead.source_page ? 'form:' + (lead.page_type ?? 'page') + ':' + lead.source_page : 'website',
    form_data: {
      page_type: lead.page_type ?? '',
      service_type: lead.service_type ?? '',
      service_request: lead.service_request ?? '',
      location: lead.location ?? '',
      source_page: lead.source_page ?? '',
    },
  };
  const response = await fetch(WARROOM_LEAD_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-lead-key': WARROOM_LEAD_KEY,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error('War Room lead capture failed with status ' + response.status);
  }
  return response.json();
}
