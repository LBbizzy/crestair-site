import { NextResponse } from 'next/server';
import { upsertGhlContact } from '@/lib/ghl';
import { sendWarRoomLead } from '@/lib/warroom';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload: {
      name: string;
      email: string;
      phone: string;
      source_page: string;
      service_type: string;
      location: string;
      action_type: 'form' | 'call';
      page_type: string;
      service_request?: string;
      funnel_identifier?: string;
      utm_source?: string;
      utm_medium?: string;
      utm_campaign?: string;
      utm_content?: string;
    } = {
      name: String(body.name || '').trim(),
      email: String(body.email || '').trim(),
      phone: String(body.phone || '').trim(),
      source_page: String(body.source_page || '').trim(),
      service_type: String(body.service_type || '').trim(),
      location: String(body.location || '').trim(),
      action_type: body.action_type === 'call' ? 'call' : 'form',
      page_type: String(body.page_type || 'service').trim(),
      service_request: body.service_request ? String(body.service_request).trim() : undefined,
      funnel_identifier: body.funnel_identifier ? String(body.funnel_identifier).trim() : undefined,
      // FunnelForm has been sending these on every paid-traffic submission and
      // this route silently discarded them, so no lead in GoHighLevel could be
      // traced back to the campaign that bought it.
      utm_source: body.utm_source ? String(body.utm_source).trim() : undefined,
      utm_medium: body.utm_medium ? String(body.utm_medium).trim() : undefined,
      utm_campaign: body.utm_campaign ? String(body.utm_campaign).trim() : undefined,
      utm_content: body.utm_content ? String(body.utm_content).trim() : undefined,
    };

    if (!payload.name || !payload.phone || !payload.source_page || !payload.service_type || !payload.location || !payload.page_type) {
      return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
    }

    if (payload.action_type === 'form' && !payload.service_request) {
      return NextResponse.json({ ok: false, error: 'Missing required service request.' }, { status: 400 });
    }

    const result = await upsertGhlContact(payload);

    // Also push the lead into the War Room so it lands in Crest Air's own
    // Rolodex under company_id 'crestair'. GoHighLevel already succeeded above,
    // so a failure here must never fail the customer's submission.
    if (payload.action_type === 'form') {
      try {
        await sendWarRoomLead(payload);
      } catch (warRoomError) {
        console.error('War Room lead push failed', warRoomError);
      }
    }

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    console.error('GHL conversion error', error);
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
