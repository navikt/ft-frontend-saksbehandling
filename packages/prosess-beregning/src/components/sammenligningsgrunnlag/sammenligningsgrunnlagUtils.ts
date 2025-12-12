import type { IntlShape } from 'react-intl';

import dayjs from 'dayjs';
import norskFormat from 'dayjs/locale/nb';

import { InntektAktivitetType } from '@navikt/ft-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, InntektsgrunnlagInntekt, InntektsgrunnlagMåned } from '@navikt/ft-types';
import { capitalizeFirstLetter, formaterArbeidsgiver, ISO_DATE_FORMAT } from '@navikt/ft-utils';

const mapDataPunkt =
  (inntektAType: InntektAktivitetType, arbeidsgiverIdent?: string) =>
  ({ inntekter }: InntektsgrunnlagMåned): number => {
    if (!inntekter || inntekter.length === 0) {
      return 0;
    }

    return inntekter
      .filter(erRelevantType(inntektAType, arbeidsgiverIdent))
      .reduce((previousValue, currentValue) => previousValue + currentValue.beløp, 0);
  };

const erRelevantType =
  (inntektAktivitetType: InntektAktivitetType, arbeidsgiverIdent?: string) =>
  (inntekt: InntektsgrunnlagInntekt): boolean =>
    inntekt.inntektAktivitetType === inntektAktivitetType &&
    (arbeidsgiverIdent === undefined ||
      ('arbeidsgiverIdent' in inntekt && arbeidsgiverIdent === inntekt.arbeidsgiverIdent));

const utvidInntektsgrunnlagTil12Mnd = (
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[],
  sammenligningsgrunnlagFom: string,
): InntektsgrunnlagMåned[] => {
  const inntekterPerFom = Map.groupBy(sammenligningsgrunnlagInntekter, a => a.fom);

  for (let step = 0; step < 12; step += 1) {
    const dato = dayjs(sammenligningsgrunnlagFom, ISO_DATE_FORMAT).add(step, 'M');
    const fom = dato.format(ISO_DATE_FORMAT);
    const tom = dato.endOf('M').format(ISO_DATE_FORMAT);
    if (!inntekterPerFom.has(fom)) {
      inntekterPerFom.set(fom, [{ fom, tom, inntekter: [] }]);
    }
  }

  return inntekterPerFom
    .values()
    .toArray()
    .flat()
    .sort((a, b) => (dayjs(a.fom).isBefore(dayjs(b.fom)) ? -1 : 1));
};

const finnesInntektAvType = (
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[],
  inntektAktivitetType: InntektAktivitetType,
): boolean =>
  sammenligningsgrunnlagInntekter
    .flatMap(p => p.inntekter)
    .some(inntekt => inntekt.inntektAktivitetType === inntektAktivitetType);

const mapDataForFrilansEllerYtelse = (
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[],
  inntektAType: InntektAktivitetType.FRILANS | InntektAktivitetType.YTELSE,
  intl: IntlShape,
): { [label: string]: number[] } => {
  if (!finnesInntektAvType(sammenligningsgrunnlagInntekter, inntektAType)) {
    return {};
  }

  const label =
    inntektAType === 'FRILANSINNTEKT'
      ? intl.formatMessage({ id: 'SammenligningsgrunnlagGraf.Frilans' })
      : intl.formatMessage({ id: 'SammenligningsgrunnlagGraf.Ytelse' });

  return {
    [label]: sammenligningsgrunnlagInntekter.map(mapDataPunkt(inntektAType)),
  };
};

const mapDataForArbeid = (
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  intl: IntlShape,
) => {
  const inntektAType = InntektAktivitetType.ARBEID;

  if (!finnesInntektAvType(sammenligningsgrunnlagInntekter, inntektAType)) {
    return {};
  }

  const arbeidsgiverer = new Set(
    sammenligningsgrunnlagInntekter
      .flatMap(a => a.inntekter)
      .flatMap(i => ('arbeidsgiverIdent' in i ? [i.arbeidsgiverIdent] : [])),
  );

  const inntektPerAg = new Map<string, number[]>();

  for (const arbeidsgiverIdent of arbeidsgiverer) {
    const opplysning = arbeidsgiverOpplysningerPerId[arbeidsgiverIdent];
    const label = opplysning
      ? formaterArbeidsgiver(opplysning)
      : intl.formatMessage({ id: 'SammenligningsgrunnlagGraf.UkjentArbeidsgiver' }, { arbeidsgiverIdent });
    inntektPerAg.set(label, sammenligningsgrunnlagInntekter.map(mapDataPunkt(inntektAType, arbeidsgiverIdent)));
  }
  return Object.fromEntries(inntektPerAg);
};

export const transformerGrafData = (
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[],
  sammenligningsgrunnlagFom: string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  intl: IntlShape,
) => {
  const utvidetSammenligningsgrunnlag = utvidInntektsgrunnlagTil12Mnd(
    sammenligningsgrunnlagInntekter,
    sammenligningsgrunnlagFom,
  );

  const dataForFrilans = mapDataForFrilansEllerYtelse(
    utvidetSammenligningsgrunnlag,
    InntektAktivitetType.FRILANS,
    intl,
  );
  const dataForYtelse = mapDataForFrilansEllerYtelse(utvidetSammenligningsgrunnlag, InntektAktivitetType.YTELSE, intl);
  const dataForArbeid = mapDataForArbeid(utvidetSammenligningsgrunnlag, arbeidsgiverOpplysningerPerId, intl);
  const periodeData = utvidetSammenligningsgrunnlag.map(periode => periode.fom);
  return { periodeData, dataForFrilans, dataForYtelse, dataForArbeid };
};

export const formaterMåned = (dato: string): string =>
  capitalizeFirstLetter(dayjs(dato).locale(norskFormat).format('MMM YY').replace('.', ''));
