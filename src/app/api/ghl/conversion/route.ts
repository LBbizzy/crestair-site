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
