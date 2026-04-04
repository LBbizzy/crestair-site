'use client';

import { FormEvent, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

type FunnelFormProps = {
  sourcePage: string;
  serviceType: string;
  funnelIdentifier: string;
  formCtaId: string;
  submitLabel?: string;
};

export function FunnelForm({
  sourcePage,
  serviceType,
  funnelIdentifier,
  formCtaId,
  submitLabel = 'Get My Free Estimate',
}: FunnelFormProps) {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
  });

  useEffect(() => {
    setUtmParams({
      utm_source: searchParams.get('utm_source') || '',
      utm_medium: searchParams.get('utm_medium') || '',
      utm_campaign: searchParams.get('utm_campaign') || '',
      utm_content: searchParams.get('utm_content') || '',
    });
  }, [searchParams]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    const formData = new FormData(event.currentTarget);

    // Honeypot check — bots fill the hidden "company" field
    const honeypot = String(formData.get('company') || '');
    if (honeypot) {
      // Fake success so bots think it worked
      setStatus('success');
      setMessage("Thanks! We'll be in touch shortly.");
      return;
    }

    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      service_request: String(formData.get('service_request') || '').trim(),
      source_page: sourcePage,
      service_type: serviceType,
      location: 'tucson-az',
      action_type: 'form' as const,
      page_type: 'funnel',
      funnel_identifier: funnelIdentifier,
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      utm_content: utmParams.utm_content,
    };

    try {
      const response = await fetch('/api/ghl/conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please call us instead at (520) 751-8888.');
        return;
      }

      setStatus('success');
      setMessage('Thanks! A Crest Air team member will contact you shortly.');
      event.currentTarget.reset();
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please call us instead at (520) 751-8888.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-emerald-800">Request Received!</h3>
        <p className="mt-2 text-emerald-700">{message}</p>
        <p className="mt-4 text-sm text-emerald-600">
          Need immediate help? Call{' '}
          <a href="tel:+15207518888" className="font-semibold underline">
            (520) 751-8888
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from humans, bots fill it */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {/* UTM hidden fields */}
      <input type="hidden" name="utm_source" value={utmParams.utm_source} />
      <input type="hidden" name="utm_medium" value={utmParams.utm_medium} />
      <input type="hidden" name="utm_campaign" value={utmParams.utm_campaign} />
      <input type="hidden" name="utm_content" value={utmParams.utm_content} />

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-slate-700" htmlFor={`${formCtaId}-name`}>
          Full Name *
        </label>
        <input
          required
          id={`${formCtaId}-name`}
          name="name"
          placeholder="Your full name"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-[#F4911D] focus:ring-2 focus:ring-[#F4911D]/20"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-slate-700" htmlFor={`${formCtaId}-phone`}>
          Phone Number *
        </label>
        <input
          required
          id={`${formCtaId}-phone`}
          name="phone"
          type="tel"
          placeholder="(520) 555-0123"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-[#F4911D] focus:ring-2 focus:ring-[#F4911D]/20"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-slate-700" htmlFor={`${formCtaId}-email`}>
          Email
        </label>
        <input
          id={`${formCtaId}-email`}
          name="email"
          type="email"
          placeholder="you@email.com"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-[#F4911D] focus:ring-2 focus:ring-[#F4911D]/20"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-slate-700" htmlFor={`${formCtaId}-request`}>
          How Can We Help? *
        </label>
        <textarea
          required
          id={`${formCtaId}-request`}
          name="service_request"
          rows={3}
          placeholder="Briefly describe what you need..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-[#F4911D] focus:ring-2 focus:ring-[#F4911D]/20"
        />
      </div>

      <button
        type="submit"
        data-cta-id={formCtaId}
        disabled={status === 'submitting'}
        className="w-full rounded-lg bg-[#F4911D] px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#D97F16] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? 'Submitting…' : submitLabel}
      </button>

      {status === 'error' && message && (
        <p className="text-center text-sm text-red-600">{message}</p>
      )}

      <p className="text-center text-xs text-slate-500">
        Your information is safe. We never spam or share your data.
      </p>
    </form>
  );
}
