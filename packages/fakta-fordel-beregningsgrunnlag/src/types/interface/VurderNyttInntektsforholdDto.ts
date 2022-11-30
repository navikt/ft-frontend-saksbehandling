import { AktivitetStatus } from '@navikt/ft-kodeverk';

interface InntektsforholdDto {
  aktivitetStatus: AktivitetStatus;
  arbeidsgiverIdentifikator: string;
  arbeidsforholdId: string;
  eksternArbeidsforholdId: string;
  bruttoInntektPrÅr: number;
  skalRedusereUtbetaling: boolean;
}

interface VurderInntektsforholdPeriodeDto {
  fom: string;
  tom: string;
  inntektsforholdListe: InntektsforholdDto[];
}

interface VurderNyttInntektsforholdDto {
  vurderInntektsforholdPerioder: VurderInntektsforholdPeriodeDto[];
}

export default VurderNyttInntektsforholdDto;
