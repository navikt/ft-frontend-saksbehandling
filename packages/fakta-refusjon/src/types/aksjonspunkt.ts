import type { AksjonspunktStatus, AksjonspunktTilBekreftelse } from '@navikt/ft-types';

import type { RefusjonKilde, RefusjonUtfallÅrsak } from './dataTypes';

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
    arbeidsforholdId?: string;
    kilde: RefusjonKilde;
    refusjonsperioder: {
      fom: string;
      tom: string;
      refusjonPrMnd: number;
      utfallÅrsak?: RefusjonUtfallÅrsak;
    }[];
  }[];
  begrunnelse: string;
};
