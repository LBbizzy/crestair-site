import { FunnelPage } from '@/components/FunnelPage';

export default function FunnelAcRepairPage() {
  return (
    <FunnelPage
      title="Fast AC Repair in Tucson"
      offer="Phone-first paid traffic funnel for urgent AC repair leads who need a quick next step, stronger trust, and less friction before requesting service."
      urgency="Use this path for no-cool calls, weak airflow, hot-room complaints, and repair intent where delay turns into higher drop-off."
      trustPoints={[
        'Review-style proof blocks positioned next to conversion asks',
        'Urgency language built for same-day repair intent',
        'Minimal outbound paths and repeated CTA sections',
        'Campaign-ready funnel identifier for paid traffic attribution',
      ]}
      sourcePage="/funnels/ac-repair"
      serviceType="funnel-ac-repair"
      funnelIdentifier="funnel-ac-repair"
    />
  );
}
