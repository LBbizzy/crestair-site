'use client';

import { FormEvent, useState } from 'react';
import { site } from '@/lib/site';

type ServiceConversionSectionProps = {
  sourcePage: string;
  serviceType: string;
  location: string;
  pageType: string;
  title: string;
  callCtaId: string;
  formCtaId: string;
  funnelIdentifier?: string;
  contextLabel?: string;
};

export function ServiceConversionSection({
  sourcePage,
  serviceType,
  location,
  pageType,
  title,
  callCtaId,
  formCtaId,
  funnelIdentifier,
  contextLabel = 'service page',
}: ServiceConversionSectionProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      source_page: sourcePage,
      service_type: serviceType,
      location,
      action_type: 'form',
      page_type: pageType,
      funnel_identifier: funnelIdentifier,
    };

    const response = await fetch('/api/ghl/conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      setStatus('error');
      setMessage(data.error || 'We could not submit your request right now. Please call instead.');
      return;
    }

    setStatus('success');
    setMessage(`Thanks — your request was sent from ${title}.`);
    event.currentTarget.reset();
  }

  return (
    <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Live Conversion Path</p>
        <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Request service or call now</h2>
        <p className="mt-4 text-slate-700">
          This {contextLabel} routes form submissions server-side into GoHighLevel using secure environment variables only.
        </p>
        <a
          className="mt-6 inline-flex rounded-full bg-[#041B34] px-6 py-3 font-semibold text-white transition hover:bg-[#06284d]"
          href={`tel:${site.phone}`}
          data-cta-id={callCtaId}
        >
          Call {site.phone}
        </a>
        <p className="mt-4 text-sm text-slate-500">
          Call CTA stays phone-first. Form CTA creates the lead server-side with normalized tracking custom fields and matching attribution tags.
          {funnelIdentifier ? ` Funnel: ${funnelIdentifier}.` : ''}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 p-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor={`${formCtaId}-name`}>Name</label>
          <input required id={`${formCtaId}-name`} name="name" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor={`${formCtaId}-email`}>Email</label>
          <input id={`${formCtaId}-email`} name="email" type="email" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor={`${formCtaId}-phone`}>Phone</label>
          <input required id={`${formCtaId}-phone`} name="phone" type="tel" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0" />
        </div>
        <button
          type="submit"
          data-cta-id={formCtaId}
          disabled={status === 'submitting'}
          className="inline-flex rounded-full bg-[#F4911D] px-6 py-3 font-semibold text-white transition hover:bg-[#D97F16] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? 'Submitting…' : 'Request Service'}
        </button>
        {message ? <p className={`text-sm ${status === 'success' ? 'text-emerald-700' : 'text-red-700'}`}>{message}</p> : null}
      </form>
    </section>
  );
}
