export const trackingReadiness = {
  ctaIdentifiers: true,
  sourceTrackingPrepared: true,
  notes: [
    'CTA objects support unique IDs for per-page and per-placement tracking.',
    'Hero and CTA sections now accept data-cta-id values so source/click attribution can be layered in without redesigning page structure.',
    'This supports future form/call origin mapping into GHL or another tracking sink.',
  ],
};

export const commercialStructure = {
  separateFromResidential: true,
  plannedRoutes: [
    '/commercial',
    '/commercial/hvac-services-tucson',
    '/commercial/rooftop-unit-service-tucson',
    '/commercial/maintenance-plans-tucson',
  ],
  templateSections: [
    'Commercial hero',
    'Business-type fit',
    'Service capabilities',
    'Downtime-risk section',
    'Proof/credibility',
    'Commercial CTA band',
    'FAQ',
    'Final CTA',
  ],
};

export const landingPageSystem = {
  separateFromMainSeoRoutes: true,
  plannedRouteGroup: '/lp/[offer-slug]',
  rules: [
    'Single offer only',
    'Single primary CTA only',
    'Ad-intent headline',
    'Minimal navigation',
    'Tracking source preserved',
    'GHL-ready CTA mapping',
  ],
};
