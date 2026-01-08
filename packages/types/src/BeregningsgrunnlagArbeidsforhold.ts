import type { OpptjeningAktivitetType } from './OpptjeningAktivitetType';
import type { Stillingsprosent } from './Stillingsprosent';

export type BeregningsgrunnlagArbeidsforhold = Readonly<{
  arbeidsgiverIdent?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: string;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType: OpptjeningAktivitetType;
  sisteLønnsendringsdato?: string;
  stillingsprosenter?: Stillingsprosent[];

  // Felter som brukes hvis de er satt men mappes ikke backend, løses i TFP-2044
  stillingsNavn?: string;
  stillingsProsent?: number;
}>;
