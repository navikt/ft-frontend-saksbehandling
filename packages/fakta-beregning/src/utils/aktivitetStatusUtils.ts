import { AktivitetStatus, BeregningsgrunnlagAndelType } from '@navikt/ft-kodeverk';

export const aktivitetstatusTilAndeltypeMap: Record<string, string> = {
  [AktivitetStatus.BRUKERS_ANDEL]: BeregningsgrunnlagAndelType.BRUKERS_ANDEL,
  [AktivitetStatus.FRILANSER]: BeregningsgrunnlagAndelType.FRILANS,
  [AktivitetStatus.SELVSTENDIG_NÆRINGSDRIVENDE]: BeregningsgrunnlagAndelType.EGEN_NÆRING,
};
