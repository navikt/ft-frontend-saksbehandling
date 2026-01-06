export const isAksjonspunktOpen = (ap: { status: string } | undefined): boolean => ap?.status === 'OPPR';

export const hasAksjonspunkt = (aksjonspunktKode: string, aksjonspunkter: { definisjon: string }[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === aksjonspunktKode);
