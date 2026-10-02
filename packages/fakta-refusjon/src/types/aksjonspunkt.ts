import type { AksjonspunktStatus } from '@navikt/ft-types';

export type AksjonspunktRefusjon = {
  kode: 'AVKLAR_REFUSJONSKRAV' | 'OVERSTYR_REFUSJONSKRAV';
  status: AksjonspunktStatus;
  begrunnelse?: string;
};

export type AksjonspunktSubmitType = {
  refusjonskrav: {
    arbeidsgiverIdent: string;
    perioder: {
      kilde: string;
      fom: string;
      tom: string;
      refusjonsbeløpPrMnd: number;
      utfall: 'INNVILGET' | 'AVSLÅTT' | 'REDUSERT';
      utfallÅrsak?: string;
    }[];
  }[];
  begrunnelse: string;
};
