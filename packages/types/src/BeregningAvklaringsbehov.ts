import type { AksjonspunktStatus } from './AksjonspunktStatus';

export type BeregningAvklaringsbehov = Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  kanLoses: boolean;
  erTrukket?: boolean;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
}>;
