import type { AksjonspunktStatus, AksjonspunktTilBekreftelse } from '@navikt/ft-types';

import type { UtfallÅrsak } from './dataTypes';

export type AksjonspunktRefusjon = {
  kode: 'OVERSTYR_REFUSJONSKRAV';
  status: AksjonspunktStatus;
  begrunnelse?: string;
  vurdertAv?: string;
  vurdertTidspunkt?: string;
};

export type OverstyrRefusjonskravSubmitType = AksjonspunktTilBekreftelse<'OVERSTYR_REFUSJONSKRAV'> & {
  refusjonskrav: {
    arbeidsgiverIdent: string;
    perioder: {
      fom: string;
      tom: string;
      refusjonsbeløpPrMnd: number;
      utfallÅrsak?: UtfallÅrsak;
    }[];
  }[];
  begrunnelse: string;
};
