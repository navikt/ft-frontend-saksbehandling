import { type UseFormGetValues } from 'react-hook-form';
import { type IntlShape } from 'react-intl';

import type { AktivitetStatus, ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { formatCurrencyNoKr, formaterArbeidsgiver, removeSpacesFromNumber } from '@navikt/ft-utils';

import type {
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagFormValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import type { KodeverkForPanel } from '../../types/kodeverkForPanel';
import { GRADERING_RANGE_DENOMINATOR, mapToBelop } from './bgFordelingUtils';

const convertToNumber = (n?: string): number => (!n ? 0 : Number(removeSpacesFromNumber(n)));

type Refusjonsinfo = {
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  arbeidsgiverId?: string;
  refusjonskravFraInntektsmelding?: number;
  totalRefusjon: number;
};

const ulikeAndelerErrorMessage = (intl: IntlShape): string =>
  intl.formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.UlikeAndeler' });

type Andelsnøkkel = {
  erNyAndel: boolean;
  aktivitetstatus?: string;
  arbeidsgiverIdent?: string;
  arbeidsforholdId?: string;
  inntektskategori?: string;
};

const erLikeFields = (field1: Andelsnøkkel, field2: Andelsnøkkel): boolean =>
  field1.inntektskategori === field2.inntektskategori &&
  field1.arbeidsgiverIdent === field2.arbeidsgiverIdent &&
  field1.aktivitetstatus === field2.aktivitetstatus &&
  field1.arbeidsforholdId === field2.arbeidsforholdId;

const erIListe = (andelerÅSjekkeMot: Andelsnøkkel[], andelÅSjekke: Andelsnøkkel): boolean =>
  andelerÅSjekkeMot.some(andel => erLikeFields(andelÅSjekke, andel));

const finnEksisterendeField = (
  fields: FordelBeregningsgrunnlagAndelValues[],
  andelsnr: number,
): FordelBeregningsgrunnlagAndelValues => {
  const matchetField = fields.find(f => f.andelsnr === andelsnr);
  if (!matchetField) {
    throw new Error(`Finner ikke field med andelsnr ${andelsnr}`);
  }
  return matchetField;
};

const lagAndelsnøkler = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldName: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
): Andelsnøkkel[] => {
  const liste: Andelsnøkkel[] = [];
  fields.forEach((field, index) => {
    if (field.nyAndel && (field.andelsnrRef || field.andelsnrRef === 0)) {
      const eksisterendeField = finnEksisterendeField(fields, field.andelsnrRef);
      liste.push({
        erNyAndel: field.nyAndel,
        aktivitetstatus: field.aktivitetStatus,
        inntektskategori: getValues(
          `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldName}.${index}.inntektskategori`,
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
  });
  return liste;
};

export const validateUlikeAndeler = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  intl: IntlShape,
): string | undefined => {
  const nøklerAvAndeler = lagAndelsnøkler(vilkårperiodeFieldIndex, getValues, fieldname, fields);
  const andelerSomErSjekket: Andelsnøkkel[] = [];
  let finnesFeil = false;
  nøklerAvAndeler.forEach(nøkkel => {
    if (erIListe(andelerSomErSjekket, nøkkel)) {
      finnesFeil = true;
    }
    andelerSomErSjekket.push(nøkkel);
  });
  return finnesFeil ? ulikeAndelerErrorMessage(intl) : undefined;
};

const sattBeløpErLavereEnnField = (field: FordelBeregningsgrunnlagAndelValues, belopsInfo: Refusjonsinfo): boolean =>
  (!!field.refusjonskravFraInntektsmelding || field.refusjonskravFraInntektsmelding === 0) &&
  (!!belopsInfo.refusjonskravFraInntektsmelding || belopsInfo.refusjonskravFraInntektsmelding === 0) &&
  belopsInfo.refusjonskravFraInntektsmelding < field.refusjonskravFraInntektsmelding;

const oppdaterInfoListe = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  field: FordelBeregningsgrunnlagAndelValues,
  fieldIndex: number,
  arbeidsforholdRefusjonsbelop: Refusjonsinfo[],
): void => {
  const infoIndex = arbeidsforholdRefusjonsbelop.findIndex(
    ({ arbeidsforholdId, arbeidsgiverId }) =>
      arbeidsforholdId === field.arbeidsforholdId && arbeidsgiverId === field.arbeidsgiverId,
  );
  const refusjon = getValues(
    `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${fieldIndex}.refusjonskrav`,
  );
  if (infoIndex >= 0) {
    const belopsInfo = arbeidsforholdRefusjonsbelop[infoIndex];
    if (sattBeløpErLavereEnnField(field, belopsInfo)) {
      belopsInfo.refusjonskravFraInntektsmelding = field.refusjonskravFraInntektsmelding;
    }
    if (refusjon !== null && refusjon !== undefined) {
      belopsInfo.totalRefusjon += Number(removeSpacesFromNumber(refusjon));
    }
  } else {
    const { refusjonskravFraInntektsmelding, arbeidsforholdId, arbeidsgiverId, eksternArbeidsforholdId } = field;
    let totalRefusjon = 0;
    if (refusjon !== null && refusjon !== undefined) {
      totalRefusjon = Number(removeSpacesFromNumber(refusjon));
    }
    arbeidsforholdRefusjonsbelop.push({
      arbeidsforholdId,
      eksternArbeidsforholdId,
      arbeidsgiverId,
      refusjonskravFraInntektsmelding,
      totalRefusjon,
    });
  }
};

const finnArbeidsforholdRefusjonsinfoListe = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
): Refusjonsinfo[] => {
  const arbeidsforholdRefusjonsbelop: Refusjonsinfo[] = [];
  fields.forEach((field, index) => {
    if (field.arbeidsforholdId !== '') {
      oppdaterInfoListe(vilkårperiodeFieldIndex, getValues, fieldname, field, index, arbeidsforholdRefusjonsbelop);
    }
  });
  return arbeidsforholdRefusjonsbelop;
};

const skalIkkjeVereHoegereEnnRefusjonFraInntektsmelding = (arbeidsgiver: string, intl: IntlShape): string =>
  intl.formatMessage(
    { id: 'BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding' },
    { arbeidsgiver },
  );

export const validateTotalRefusjonPrArbeidsforhold = (
  vilkårperiodeFieldIndex: number,
  fields: FordelBeregningsgrunnlagAndelValues[],
  fieldname: string,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  intl: IntlShape,
): string | undefined => {
  const arbeidsforholdRefusjonsinfo = finnArbeidsforholdRefusjonsinfoListe(
    vilkårperiodeFieldIndex,
    getValues,
    fieldname,
    fields,
  );
  const arbeidsforholdMedForHogRefusjon = arbeidsforholdRefusjonsinfo.filter(
    refusjonsInfo =>
      (refusjonsInfo.refusjonskravFraInntektsmelding || refusjonsInfo.refusjonskravFraInntektsmelding === 0) &&
      refusjonsInfo.totalRefusjon > refusjonsInfo.refusjonskravFraInntektsmelding,
  );
  if (arbeidsforholdMedForHogRefusjon.length > 0) {
    const agOpplysninger = arbeidsforholdMedForHogRefusjon[0].arbeidsgiverId
      ? arbeidsgiverOpplysningerPerId[arbeidsforholdMedForHogRefusjon[0].arbeidsgiverId]
      : undefined;
    let arbeidsgiverString;
    if (!agOpplysninger) {
      arbeidsgiverString = arbeidsforholdMedForHogRefusjon[0].arbeidsgiverId || '';
    } else {
      arbeidsgiverString = formaterArbeidsgiver(
        agOpplysninger,
        arbeidsforholdMedForHogRefusjon[0].eksternArbeidsforholdId,
      );
    }
    return skalIkkjeVereHoegereEnnRefusjonFraInntektsmelding(arbeidsgiverString, intl);
  }
  return undefined;
};

const skalVereLikFordelingMessage = (fordeling: string | undefined, intl: IntlShape): string | undefined =>
  fordeling
    ? intl.formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.LikFordeling' }, { fordeling })
    : undefined;

const kanIkkjeHaNullBeregningsgrunnlagError = (intl: IntlShape): string =>
  intl.formatMessage({ id: 'FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag' });

const totalRefusjonMåVereLavereEnn = (seksG: string | undefined, intl: IntlShape): string | undefined =>
  seksG
    ? intl.formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige' }, { seksG })
    : undefined;

const totalRefusjonSkalVereLavereEnn = (value: number, seksG: number, intl: IntlShape): string | undefined =>
  value >= Math.round(seksG) ? totalRefusjonMåVereLavereEnn(formatCurrencyNoKr(seksG), intl) : undefined;

const totalFordelingForMåVæreLavereEnn = (seksG: string, andelsliste: string, intl: IntlShape): string =>
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
): string | undefined =>
  value >= Math.round(seksG) ? errorMessage(formatCurrencyNoKr(seksG) as string, beskrivendeString, intl) : undefined;

const likFordeling = (value: number, fordeling: number, intl: IntlShape): string | undefined =>
  value !== Math.round(fordeling)
    ? skalVereLikFordelingMessage(formatCurrencyNoKr(Math.round(fordeling)), intl)
    : undefined;

const validateFordelingForGradertAndel = (
  vilkårperiodeFieldIndex: number,
  andel: FordelBeregningsgrunnlagAndelValues,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  index: number,
): boolean => {
  if (!andel.andelIArbeid) {
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

export const validerBGGraderteAndeler = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  intl: IntlShape,
): string | undefined => {
  const finnesUgyldigAndel = fields.some((field, index) =>
    validateFordelingForGradertAndel(vilkårperiodeFieldIndex, field, getValues, fieldname, index),
  );
  return finnesUgyldigAndel ? kanIkkjeHaNullBeregningsgrunnlagError(intl) : undefined;
};

export const validateSumFastsattBelop = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  fordeling: number,
  intl: IntlShape,
): string | undefined => {
  const sumFastsattBelop = fields
    .map((field, index) => mapToBelop(vilkårperiodeFieldIndex, field, fieldname, getValues, index))
    .reduce((sum, fastsattBelop) => sum + fastsattBelop, 0);
  return fordeling !== undefined && fordeling !== null ? likFordeling(sumFastsattBelop, fordeling, intl) : undefined;
};

const finnFastsattRefusjon = (
  vilkårperiodeFieldIndex: number,
  fieldname: string,
  index: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
): number => {
  const refusjonskrav = getValues(
    `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldname}.${index}.refusjonskrav`,
  );
  return convertToNumber(refusjonskrav);
};

export const validateSumRefusjon = (
  vilkårperiodeFieldIndex: number,
  fields: FordelBeregningsgrunnlagAndelValues[],
  fieldname: string,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  grunnbeløp: number,
  intl: IntlShape,
): string | undefined => {
  const harGraderingUtenRefusjon = !!fields.find(
    (v, index) =>
      v.andelIArbeid !== '0.00' && finnFastsattRefusjon(vilkårperiodeFieldIndex, fieldname, index, getValues) === 0,
  );
  const sumRefusjon = fields
    .map((_field, index) => finnFastsattRefusjon(vilkårperiodeFieldIndex, fieldname, index, getValues))
    .reduce((sum, refusjonskrav) => sum + refusjonskrav, 0);
  const seksG = 6 * grunnbeløp;
  return harGraderingUtenRefusjon ? totalRefusjonSkalVereLavereEnn(sumRefusjon, seksG, intl) : undefined;
};

const lagBeskrivendeStringAvStatuser = (statuser: string[], kodeverkSamling: KodeverkForPanel): string => {
  const liste = statuser.map(status => kodeverkSamling['AktivitetStatus'].find(as => as.kode === status)?.navn || '');
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
      if (field.aktivitetStatus && !statuser.includes(field.aktivitetStatus)) {
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
  kodeverkSamling: KodeverkForPanel,
  intl: IntlShape,
): string | undefined => {
  const statuserSomValideres = ['AT'];
  const sumFastsattBelop = finnFastsattBeløpForStatus(
    vilkårperiodeFieldIndex,
    getValues,
    fieldname,
    fields,
    statuserSomValideres,
  );
  const beskrivendeString = lagBeskrivendeStringAvStatuser(statuserSomValideres, kodeverkSamling);
  return totalFordelingSkalVereLavereEnn(
    sumFastsattBelop,
    seksG,
    beskrivendeString,
    totalFordelingForMåVæreLavereEnn,
    intl,
  );
};

const statuserSomPrioriteresOverSN = new Set<AktivitetStatus>(['AT', 'FL', 'DP', 'AAP']);
const validateSumFastsattArbeidstakerOgFrilanser = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  seksG: number,
  kodeverkSamling: KodeverkForPanel,
  intl: IntlShape,
): string | undefined => {
  const statuserSomValideres = fields
    .map(field => field.aktivitetStatus)
    .filter((item): item is AktivitetStatus => !!item && statuserSomPrioriteresOverSN.has(item));

  const sumFastsattBelop = finnFastsattBeløpForStatus(
    vilkårperiodeFieldIndex,
    getValues,
    fieldname,
    fields,
    statuserSomValideres,
  );
  const beskrivendeString = lagBeskrivendeStringAvStatuser(statuserSomValideres, kodeverkSamling);
  return totalFordelingSkalVereLavereEnn(
    sumFastsattBelop,
    seksG,
    beskrivendeString,
    totalFordelingForMåVæreLavereEnn,
    intl,
  );
};

export const validateSumFastsattForUgraderteAktiviteter = (
  vilkårperiodeFieldIndex: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagFormValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  intl: IntlShape,
  grunnbeløp: number,
  kodeverkSamling: KodeverkForPanel,
): string | undefined => {
  const skalGradereFL = !!fields.find(v => v.andelIArbeid !== '0.00' && v.aktivitetStatus === 'FL');
  const seksG = 6 * grunnbeløp;
  if (skalGradereFL) {
    return validateSumFastsattArbeidstaker(
      vilkårperiodeFieldIndex,
      getValues,
      fieldname,
      fields,
      seksG,
      kodeverkSamling,
      intl,
    );
  }
  const skalGradereSN = !!fields.find(v => v.andelIArbeid !== '0.00' && v.aktivitetStatus === 'SN');
  if (skalGradereSN) {
    return validateSumFastsattArbeidstakerOgFrilanser(
      vilkårperiodeFieldIndex,
      getValues,
      fieldname,
      fields,
      seksG,
      kodeverkSamling,
      intl,
    );
  }
  return undefined;
};
