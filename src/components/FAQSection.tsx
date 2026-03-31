import { FAQ } from '@/lib/types';

export function FAQSection({ title = 'Frequently Asked Questions', faqs }: { title?: string; faqs: FAQ[] }) {
  return (
    <section className="space-y-6">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">{title}</h2>
      <div className="grid gap-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-slate-950">{faq.question}</h3>
            <p className="mt-3 text-slate-700">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
