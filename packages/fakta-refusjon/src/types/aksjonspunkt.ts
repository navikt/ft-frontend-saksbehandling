import type { AksjonspunktStatus } from '@navikt/ft-types';

export type AksjonspunktRefusjon = {
  kode: 'AVKLAR_REFUSJONSKRAV' | 'OVERSTYR_REFUSJONSKRAV';
  status: AksjonspunktStatus;
  begrunnelse?: string;
};
