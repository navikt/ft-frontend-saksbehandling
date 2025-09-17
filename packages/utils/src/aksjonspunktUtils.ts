export const isAksjonspunktOpen = (ap: { status: string } | undefined): boolean => ap?.status === 'OPPR';
