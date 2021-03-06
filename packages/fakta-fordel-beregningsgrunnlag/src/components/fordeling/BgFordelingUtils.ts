import { UseFormGetValues } from 'react-hook-form';
import { AktivitetStatus, Inntektskategori, KodeverkType } from '@navikt/ft-kodeverk';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysningerPerId, FordelBeregningsgrunnlagAndel } from '@navikt/ft-types';
import { createVisningsnavnForAktivitetFordeling } from '../util/visningsnavnHelper';
import {
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagArbeidAndelValues,
  FordelBeregningsgrunnlagFormValues,
  FordelBeregningsgrunnlagGenerellAndelValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';

export const GRADERING_RANGE_DENOMINATOR = ' - ';

const nullOrUndefined = (value: number): boolean => value === null || value === undefined;

export const settAndelIArbeid = (andelerIArbeid: number[]): string => {
  if (andelerIArbeid.length === 0) {
    return '';
  }
  if (andelerIArbeid.length === 1) {
    // @ts-ignore fiks
    return `${parseFloat(andelerIArbeid[0]).toFixed(2)}`;
  }
  const minAndel = Math.min(...andelerIArbeid);
  const maxAndel = Math.max(...andelerIArbeid);
  return `${minAndel}${GRADERING_RANGE_DENOMINATOR}${maxAndel}`;
};

const finnnInntektskategorikode = (andel: FordelBeregningsgrunnlagAndel): string =>
  andel.inntektskategori && andel.inntektskategori !== Inntektskategori.UDEFINERT ? andel.inntektskategori : '';

const createAndelnavn = (
  andel: FordelBeregningsgrunnlagAndel,
  harKunYtelse: boolean,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  if (!andel.aktivitetStatus || andel.aktivitetStatus === AktivitetStatus.UDEFINERT) {
    return '';
  }
  if (andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER && andel.arbeidsforhold) {
    const agOpplysninger = arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent];
    if (!agOpplysninger) {
      return andel.arbeidsforhold.arbeidsforholdType
        ? getKodeverknavn(andel.arbeidsforhold.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE)
        : '';
    }
    return createVisningsnavnForAktivitetFordeling(agOpplysninger, andel.arbeidsforhold.eksternArbeidsforholdId);
  }
  if (harKunYtelse && andel.aktivitetStatus === AktivitetStatus.BRUKERS_ANDEL) {
    return 'Ytelse';
  }
  return getKodeverknavn(andel.aktivitetStatus, KodeverkType.AKTIVITET_STATUS);
};

export const finnFastsattPrAar = (fordeltPrAar: number): number | null =>
  nullOrUndefined(fordeltPrAar) ? null : fordeltPrAar;

export const settFastsattBelop = (
  fordeltPrAar: number,
  bruttoPrAar: number,
  skalPreutfyllesMedBeregningsgrunnlag: boolean,
): string => {
  const fastsatt = finnFastsattPrAar(fordeltPrAar);
  if (fastsatt !== null) {
    return formatCurrencyNoKr(fastsatt);
  }
  return skalPreutfyllesMedBeregningsgrunnlag && !nullOrUndefined(bruttoPrAar) ? formatCurrencyNoKr(bruttoPrAar) : '';
};

export const setArbeidsforholdInitialValues = (
  andel: FordelBeregningsgrunnlagAndel,
): FordelBeregningsgrunnlagArbeidAndelValues => ({
  arbeidsgiverNavn:
    andel.arbeidsforhold && andel.arbeidsforhold.arbeidsgiverNavn ? andel.arbeidsforhold.arbeidsgiverNavn : '',
  arbeidsgiverId:
    andel.arbeidsforhold && andel.arbeidsforhold.arbeidsgiverIdent ? andel.arbeidsforhold.arbeidsgiverIdent : '',
  eksternArbeidsforholdId:
    andel.arbeidsforhold && andel.arbeidsforhold.eksternArbeidsforholdId
      ? andel.arbeidsforhold.eksternArbeidsforholdId
      : '',
  arbeidsforholdId:
    andel.arbeidsforhold && andel.arbeidsforhold.arbeidsforholdId ? andel.arbeidsforhold.arbeidsforholdId : '',
  arbeidsperiodeFom: andel.arbeidsforhold ? andel.arbeidsforhold.startdato : '',
  arbeidsperiodeTom:
    andel.arbeidsforhold && andel.arbeidsforhold.opphoersdato !== null ? andel.arbeidsforhold.opphoersdato : '',
  arbeidsforholdType: andel.arbeidsforholdType,
});

export const setGenerellAndelsinfo = (
  andel: FordelBeregningsgrunnlagAndel,
  harKunYtelse: boolean,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FordelBeregningsgrunnlagGenerellAndelValues => ({
  andel: createAndelnavn(andel, harKunYtelse, getKodeverknavn, arbeidsgiverOpplysningerPerId),
  aktivitetStatus: andel.aktivitetStatus,
  andelsnr: andel.andelsnr,
  nyAndel: false,
  kilde: andel.kilde == null ? null : andel.kilde,
  lagtTilAvSaksbehandler: andel.lagtTilAvSaksbehandler === true,
  inntektskategori: finnnInntektskategorikode(andel),
  forrigeInntektskategori:
    !andel.inntektskategori || andel.inntektskategori === Inntektskategori.UDEFINERT ? null : andel.inntektskategori,
});

export const mapToBelop = (
  vilk??rperiodeFieldIndex: number,
  field: FordelBeregningsgrunnlagAndelValues,
  fieldname: string,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  index: number,
): number => {
  if (field.skalRedigereInntekt) {
    const fastsattBel??p = getValues(
      `FORDEL_BEREGNING_FORM.${vilk??rperiodeFieldIndex}.${fieldname}.${index}.fastsattBelop`,
    );
    return fastsattBel??p ? removeSpacesFromNumber(fastsattBel??p) : 0;
  }
  return field.readOnlyBelop ? removeSpacesFromNumber(field.readOnlyBelop) : 0;
};
