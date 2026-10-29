import type { AksjonspunktStatus, AksjonspunktTilBekreftelse } from '@navikt/ft-types';

import type { UtfallÅrsak } from './dataTypes';

export type AksjonspunktRefusjon = {
  kode: 'AVKLAR_REFUSJONSKRAV' | 'OVERSTYR_REFUSJONSKRAV';
  status: AksjonspunktStatus;
  begrunnelse?: string;
};

export type AksjonspunktSubmitType = AksjonspunktTilBekreftelse<AksjonspunktRefusjon['kode']> & {
  refusjonskrav: {
    arbeidsgiverIdent: string;
    perioder: {
      kilde: string;
      fom: string;
      tom: string;
      refusjonsbeløpPrMnd: number;
      utfall: 'INNVILGET' | 'AVSLÅTT' | 'REDUSERT';
      utfallÅrsak?: UtfallÅrsak;
    }[];
  }[];
  begrunnelse: string;
};
