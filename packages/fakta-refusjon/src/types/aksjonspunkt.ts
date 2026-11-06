import type { AksjonspunktStatus, AksjonspunktTilBekreftelse } from '@navikt/ft-types';

export type UtfallÅrsak = 'AVTALT_MED_ARBEIDSGIVER' | 'KONKURS' | 'UTMELDT';

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
    arbeidsgiverId?: string;
    perioder: {
      fom: string;
      tom: string;
      refusjonsbeløpPrMnd: number;
      utfallÅrsak?: UtfallÅrsak;
    }[];
  }[];
  begrunnelse: string;
};
