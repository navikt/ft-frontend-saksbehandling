export enum AksjonspunktStatus {
  OPPRETTET = 'OPPR',
  UTFORT = 'UTFO',
  AVBRUTT = 'AVBR',
}

export const isAksjonspunktOpen = (ap: { status: string } | undefined): boolean =>
  ap?.status === AksjonspunktStatus.OPPRETTET;
