import { IntlShape } from 'react-intl';
import { UseFormGetValues } from 'react-hook-form';

import { dateIsAfter } from '@navikt/ft-form-validators';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';
import { AktivitetStatus, KodeverkType } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';

import { GRADERING_RANGE_DENOMINATOR, mapToBelop } from './BgFordelingUtils';
import { createVisningsnavnForAktivitetFordeling } from '../util/visningsnavnHelper';
import {
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagFormValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';

const convertToNumber = (n: string): number =>
  n === null || n === undefined ? null : Number(removeSpacesFromNumber(n));

type Refusjonsinfo = {
  arbeidsforholdId: string;
  eksternArbeidsforholdId: string;
  arbeidsgiverNavn: string;
  arbeidsgiverId: string;
  refusjonskravFraInntektsmelding: number;
  totalRefusjon: number;
};

export const ulikeAndelerErrorMessage = (intl: IntlShape): string =>
  intl.formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.UlikeAndeler' });

type Andelsnøkkel = {
  erNyAndel: boolean;
  aktivitetstatus: string;
  arbeidsgiverIdent: string;
  arbeidsforholdId: string;
  inntektskategori: string;
};

const erLikeFields = (field1: Andelsnøkkel, field2: Andelsnøkkel): boolean =>
  field1.inntektskategori === field2.inntektskategori &&
  field1.arbeidsgiverIdent === field2.arbeidsgiverIdent &&
  field1.aktivitetstatus === field2.aktivitetstatus &&
  field1.arbeidsforholdId === field2.arbeidsforholdId;

const erIListe = (andelerÅSjekkeMot: Andelsnøkkel[], andelÅSjekke: Andelsnøkkel): boolean => {
  for (let i = 0; i < andelerÅSjekkeMot.length; i += 1) {
    const andel = andelerÅSjekkeMot[i];
    if (erLikeFields(andelÅSjekke, andel)) {
      return true;
    }
  }
  return false;
};

const finnEksisterendeField = (fields: FordelBeregningsgrunnlagAndelValues[], andelsnr: number) =>
  fields.find(f => f.andelsnr === andelsnr);

const lagAndelsnøkler = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldName: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
): Andelsnøkkel[] => {
  const liste = [];
  for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex += 1) {
    const field = fields[fieldIndex];
    if (field.nyAndel) {
      const eksisterendeField = finnEksisterendeField(fields, field.andelsnrRef);
      liste.push({
        erNyAndel: field.nyAndel,
        aktivitetstatus: field.aktivitetStatus,
        inntektskategori: getValues(
          `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldName}.${fieldIndex}.inntektskategori`,
        ),
        arbeidsgiverIdent: eksisterendeField.arbeidsgiverId,
        arbeidsforholdId: eksisterendeField.arbeidsforholdId,
      });
    } else {
      liste.push({
        erNyAndel: field.nyAndel,
        aktivitetstatus: field.aktivitetStatus,
        inntektskategori: field.inntektskategori,
        arbeidsgiverIdent: field.arbeidsgiverId,
        arbeidsforholdId: field.arbeidsforholdId,
      });
    }
  }
  return liste;
};

export const validateUlikeAndeler =
  (
    vilkårperiodeFieldIndex: number,
    getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
    fieldname: string,
    fields: FordelBeregningsgrunnlagAndelValues[],
    intl: IntlShape,
  ) =>
  () => {
    const nøklerAvAndeler = lagAndelsnøkler(vilkårperiodeFieldIndex, getValues, fieldname, fields);
    const andelerSomErSjekket = [];
    for (let i = 0; i < nøklerAvAndeler.length; i += 1) {
      const andel = nøklerAvAndeler[i];
      if (erIListe(andelerSomErSjekket, andel)) {
        return ulikeAndelerErrorMessage(intl);
      }
      andelerSomErSjekket.push(andel);
    }
    return null;
  };

const finnArbeidsforholdRefusjonsinfoListe = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
): Refusjonsinfo[] => {
  const andelerMedArbeidsforhold = fields.filter(field => field.arbeidsforholdId !== '');
  const arbeidsforholdRefusjonsbelop = [];
  andelerMedArbeidsforhold.forEach((field, index) => {
    const infoIndex = arbeidsforholdRefusjonsbelop.findIndex(
      ({ arbeidsforholdId, arbeidsgiverId }) =>
        arbeidsforholdId === field.arbeidsforholdId && arbeidsgiverId === field.arbeidsgiverId,
    );
    const refusjon = getValues(`FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.refusjonskrav`);
    if (infoIndex >= 0) {
      const belopsInfo = arbeidsforholdRefusjonsbelop[infoIndex];
      if (belopsInfo.refusjonskravFraInntektsmelding < field.refusjonskravFraInntektsmelding) {
        arbeidsforholdRefusjonsbelop[infoIndex].refusjonskravFraInntektsmelding = field.refusjonskravFraInntektsmelding;
      }
      if (refusjon !== null && refusjon !== undefined) {
        arbeidsforholdRefusjonsbelop[infoIndex].totalRefusjon =
          belopsInfo.totalRefusjon + Number(removeSpacesFromNumber(refusjon));
      }
    } else {
      const {
        refusjonskravFraInntektsmelding,
        arbeidsforholdId,
        arbeidsgiverNavn,
        arbeidsgiverId,
        eksternArbeidsforholdId,
      } = field;
      let totalRefusjon = 0;
      if (refusjon !== null && refusjon !== undefined) {
        totalRefusjon = Number(removeSpacesFromNumber(refusjon));
      }
      arbeidsforholdRefusjonsbelop.push({
        arbeidsforholdId,
        eksternArbeidsforholdId,
        arbeidsgiverNavn,
        arbeidsgiverId,
        refusjonskravFraInntektsmelding,
        totalRefusjon,
      });
    }
  });
  return arbeidsforholdRefusjonsbelop;
};

export const skalIkkjeVereHoegereEnnRefusjonFraInntektsmelding = (arbeidsgiver: string, intl: IntlShape): string =>
  intl.formatMessage(
    { id: 'BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding' },
    { arbeidsgiver },
  );

export const validateTotalRefusjonPrArbeidsforhold =
  (
    vilkårperiodeFieldIndex: number,
    fields: FordelBeregningsgrunnlagAndelValues[],
    fieldname: string,
    getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
    getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
    intl: IntlShape,
  ) =>
  () => {
    const arbeidsforholdRefusjonsinfo = finnArbeidsforholdRefusjonsinfoListe(
      vilkårperiodeFieldIndex,
      getValues,
      fieldname,
      fields,
    );
    const arbeidsforholdMedForHogRefusjon = arbeidsforholdRefusjonsinfo.filter(
      refusjonsInfo => refusjonsInfo.totalRefusjon > refusjonsInfo.refusjonskravFraInntektsmelding,
    );
    if (arbeidsforholdMedForHogRefusjon.length > 0) {
      const agOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforholdMedForHogRefusjon[0].arbeidsgiverId];
      let arbeidsgiverString;
      if (!agOpplysninger) {
        arbeidsgiverString = arbeidsforholdMedForHogRefusjon[0].arbeidsgiverNavn;
      } else {
        arbeidsgiverString = createVisningsnavnForAktivitetFordeling(
          agOpplysninger,
          arbeidsforholdMedForHogRefusjon[0].eksternArbeidsforholdId,
        );
      }
      return skalIkkjeVereHoegereEnnRefusjonFraInntektsmelding(arbeidsgiverString, intl);
    }
    return null;
  };

export const skalVereLikFordelingMessage = (fordeling: string, intl: IntlShape): string =>
  intl.formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.LikFordeling' }, { fordeling });

export const kanIkkjeHaNullBeregningsgrunnlagError = (intl: IntlShape): string =>
  intl.formatMessage({ id: 'FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag' });

export const totalRefusjonMåVereLavereEnn = (seksG: string, intl: IntlShape): string =>
  intl.formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige' }, { seksG });

const totalRefusjonSkalVereLavereEnn = (value: number, seksG: number, intl: IntlShape): string =>
  value >= Math.round(seksG) ? totalRefusjonMåVereLavereEnn(formatCurrencyNoKr(seksG), intl) : undefined;

export const totalFordelingForMåVæreLavereEnn = (seksG: string, andelsliste: string, intl: IntlShape): string =>
  intl.formatMessage(
    { id: 'BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn' },
    {
      seksG,
      andelsliste,
    },
  );

const totalFordelingSkalVereLavereEnn = (
  value: number,
  seksG: number,
  beskrivendeString: string,
  errorMessage: (seksG: string, andelsliste: string, intl: IntlShape) => string,
  intl: IntlShape,
): string =>
  value >= Math.round(seksG) ? errorMessage(formatCurrencyNoKr(seksG), beskrivendeString, intl) : undefined;

export const likFordeling = (value: number, fordeling: number, intl: IntlShape): string =>
  value !== Math.round(fordeling) ? skalVereLikFordelingMessage(formatCurrencyNoKr(Math.round(fordeling)), intl) : null;

const validateFordelingForGradertAndel = (
  vilkårperiodeFieldIndex: number,
  intl: IntlShape,
  andel: FordelBeregningsgrunnlagAndelValues,
  periodeFom: string,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  index: number,
): boolean => {
  const arbeidsforholdIkkeOpphørt = !andel.arbeidsperiodeTom || dateIsAfter(andel.arbeidsperiodeTom, periodeFom);
  if (!andel.andelIArbeid || !arbeidsforholdIkkeOpphørt) {
    return false;
  }
  const beløpFraSaksbehandler = getValues(
    `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.fastsattBelop`,
  );
  const fastsattBeløp = beløpFraSaksbehandler ? removeSpacesFromNumber(beløpFraSaksbehandler) : 0;
  if (!Number.isNaN(Number(andel.andelIArbeid))) {
    const arbeidsprosent = Number(andel.andelIArbeid);
    if (arbeidsprosent > 0 && fastsattBeløp <= 0) {
      return true;
    }
  }
  const arbeidsprosenter = andel.andelIArbeid.split(GRADERING_RANGE_DENOMINATOR);
  const arbeidsprosenterOverNull = arbeidsprosenter.filter(val => Number(val) > 0);
  return arbeidsprosenterOverNull.length > 0 && fastsattBeløp === 0;
};

export const validerBGGraderteAndeler =
  (
    vilkårperiodeFieldIndex: number,
    getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
    fieldname: string,
    fields: FordelBeregningsgrunnlagAndelValues[],
    periodeFom: string,
    intl: IntlShape,
  ) =>
  () => {
    const finnesUgyldigAndel = fields.some((field, index) =>
      validateFordelingForGradertAndel(vilkårperiodeFieldIndex, intl, field, periodeFom, getValues, fieldname, index),
    );
    return finnesUgyldigAndel ? kanIkkjeHaNullBeregningsgrunnlagError(intl) : null;
  };

export const validateSumFastsattBelop =
  (
    vilkårperiodeFieldIndex: number,
    getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
    fieldname: string,
    fields: FordelBeregningsgrunnlagAndelValues[],
    fordeling: number,
    intl: IntlShape,
  ) =>
  () => {
    const sumFastsattBelop = fields
      .map((field, index) => mapToBelop(vilkårperiodeFieldIndex, field, fieldname, getValues, index))
      .reduce((sum, fastsattBelop) => sum + fastsattBelop, 0);
    return fordeling !== undefined && fordeling !== null ? likFordeling(sumFastsattBelop, fordeling, intl) : null;
  };

const finnFastsattRefusjon = (
  vilkårperiodeFieldIndex: number,
  field: FordelBeregningsgrunnlagAndelValues,
  fieldname: string,
  index: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
): number => {
  const refusjonskrav = getValues(
    `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.refusjonskrav`,
  );
  return convertToNumber(refusjonskrav);
};

export const validateSumRefusjon =
  (
    vilkårperiodeFieldIndex: number,
    fields: FordelBeregningsgrunnlagAndelValues[],
    fieldname: string,
    getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
    grunnbeløp: number,
    intl: IntlShape,
  ) =>
  () => {
    const harGraderingUtenRefusjon = !!fields.find(
      (v, index) =>
        v.andelIArbeid !== '0.00' &&
        finnFastsattRefusjon(vilkårperiodeFieldIndex, v, fieldname, index, getValues) === 0,
    );
    const sumRefusjon = fields
      .map((field, index) => finnFastsattRefusjon(vilkårperiodeFieldIndex, field, fieldname, index, getValues))
      .reduce((sum, refusjonskrav) => sum + refusjonskrav, 0);
    const seksG = 6 * grunnbeløp;
    return harGraderingUtenRefusjon ? totalRefusjonSkalVereLavereEnn(sumRefusjon, seksG, intl) : null;
  };

const lagBeskrivendeStringAvStatuser = (
  statuser: string[],
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
): string => {
  const liste = statuser.map(status => getKodeverknavn(status, KodeverkType.AKTIVITET_STATUS));
  liste.sort((a, b) => a.localeCompare(b));
  const unikListe = [...new Set(liste)];
  return unikListe.join(', ');
};

const finnFastsattBeløpForStatus = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  statuser: string[],
): number =>
  fields
    .map((field, index) => {
      if (!statuser.includes(field.aktivitetStatus)) {
        return 0;
      }
      return mapToBelop(vilkårperiodeFieldIndex, field, fieldname, getValues, index);
    })
    .reduce((sum, fastsattBelop) => sum + fastsattBelop, 0);

const validateSumFastsattArbeidstaker = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  seksG: number,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  intl: IntlShape,
): string => {
  const statuserSomValideres = [AktivitetStatus.ARBEIDSTAKER];
  const sumFastsattBelop = finnFastsattBeløpForStatus(
    vilkårperiodeFieldIndex,
    getValues,
    fieldname,
    fields,
    statuserSomValideres,
  );
  const beskrivendeString = lagBeskrivendeStringAvStatuser(statuserSomValideres, getKodeverknavn);
  return totalFordelingSkalVereLavereEnn(
    sumFastsattBelop,
    seksG,
    beskrivendeString,
    totalFordelingForMåVæreLavereEnn,
    intl,
  );
};

const validateSumFastsattArbeidstakerOgFrilanser = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  seksG: number,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  intl: IntlShape,
): string => {
  const statuserSomPrioriteresOverSN = [
    AktivitetStatus.ARBEIDSTAKER,
    AktivitetStatus.FRILANSER,
    AktivitetStatus.DAGPENGER,
    AktivitetStatus.ARBEIDSAVKLARINGSPENGER,
  ] as string[];
  const statuserSomValideres = fields
    .filter(v => statuserSomPrioriteresOverSN.includes(v.aktivitetStatus))
    .map(v => v.aktivitetStatus);
  const sumFastsattBelop = finnFastsattBeløpForStatus(
    vilkårperiodeFieldIndex,
    getValues,
    fieldname,
    fields,
    statuserSomValideres,
  );
  const beskrivendeString = lagBeskrivendeStringAvStatuser(statuserSomValideres, getKodeverknavn);
  return totalFordelingSkalVereLavereEnn(
    sumFastsattBelop,
    seksG,
    beskrivendeString,
    totalFordelingForMåVæreLavereEnn,
    intl,
  );
};

export const validateSumFastsattForUgraderteAktiviteter =
  (
    vilkårperiodeFieldIndex: number,
    getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
    fieldname: string,
    fields: FordelBeregningsgrunnlagAndelValues[],
    intl: IntlShape,
    grunnbeløp: number,
    getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  ) =>
  () => {
    const skalGradereFL = !!fields.find(
      v => v.andelIArbeid !== '0.00' && v.aktivitetStatus === AktivitetStatus.FRILANSER,
    );
    const seksG = 6 * grunnbeløp;
    if (skalGradereFL) {
      return validateSumFastsattArbeidstaker(
        vilkårperiodeFieldIndex,
        getValues,
        fieldname,
        fields,
        seksG,
        getKodeverknavn,
        intl,
      );
    }
    const skalGradereSN = !!fields.find(
      v => v.andelIArbeid !== '0.00' && v.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    );
    if (skalGradereSN) {
      return validateSumFastsattArbeidstakerOgFrilanser(
        vilkårperiodeFieldIndex,
        getValues,
        fieldname,
        fields,
        seksG,
        getKodeverknavn,
        intl,
      );
    }
    return null;
  };
