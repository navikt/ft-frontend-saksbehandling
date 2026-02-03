import type { IntlShape } from 'react-intl';

import dayjs from 'dayjs';

import { InntektAktivitetType } from '@navikt/ft-kodeverk';
import type {
  ArbeidsgiverOpplysningerPerId,
  Inntektsgrunnlag,
  InntektsgrunnlagInntekt,
  InntektsgrunnlagMåned,
} from '@navikt/ft-types';
import {
  capitalizeFirstLetter,
  formaterArbeidsgiver,
  ISO_DATE_FORMAT,
  TIDENES_ENDE,
  TIDENES_MORGEN,
} from '@navikt/ft-utils';

export type RegisterinntekterPerKilde = {
  typeGrunnlag: '8-30' | '8-28';
  label: string;
  inntektAktivitetType: InntektsgrunnlagInntekt['inntektAktivitetType'];
  datapunkter: (number | undefined)[];
};

const sumBeløp = (sum: number, beløp: number): number => sum + beløp;

const fjernDuplisertKilder = (kilder: string[]): string[] => [...new Set(kilder)];

const beregnSubtotalPerKilde = (inntekter: RegisterinntekteMedDato[]): Map<string, number> => {
  const subTotalPerKilde = new Map<string, number>();
  Map.groupBy(inntekter, i => i.label).forEach((inntekterForKilde, kilde) => {
    subTotalPerKilde.set(kilde, inntekterForKilde.map(i => i.beløp).reduce(sumBeløp, 0));
  });

  return subTotalPerKilde;
};

const finnAlleMåneder = (inntekter: InntektsgrunnlagMåned[]): string[] => {
  const { maxDato, minDato } = inntekter.reduce(
    (acc, periode) => ({
      maxDato: dayjs(periode.fom).isAfter(dayjs(acc.maxDato)) ? periode.fom : acc.maxDato,
      minDato: dayjs(periode.fom).isBefore(dayjs(acc.minDato)) ? periode.fom : acc.minDato,
    }),
    { maxDato: TIDENES_MORGEN, minDato: TIDENES_ENDE },
  );

  const perioderFraMinTilMax: string[] = [];
  let current = dayjs(minDato);
  const end = dayjs(maxDato);
  while (current.isBefore(end) || current.isSame(end, 'month')) {
    perioderFraMinTilMax.push(current.startOf('month').format(ISO_DATE_FORMAT));
    current = current.add(1, 'month');
  }
  return perioderFraMinTilMax;
};

export type TransformertRegisterinntekter = ReturnType<typeof transformerRegisterinntekter>;

type RegisterinntekteMedDato = {
  beløp: number;
  fom: string;
  label: string;
  inntektAktivitetType: InntektsgrunnlagInntekt['inntektAktivitetType'];
};

const mapInntekterMedPeriode = (
  inntekter: InntektsgrunnlagMåned[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  intl: IntlShape,
): RegisterinntekteMedDato[] =>
  inntekter.flatMap(inntektsPeriode =>
    inntektsPeriode.inntekter.map<RegisterinntekteMedDato>(inntekt => ({
      beløp: inntekt.beløp,
      fom: inntektsPeriode.fom,
      ...formaterAkivitetLabel(arbeidsgiverOpplysningerPerId, intl)(inntekt),
    })),
  );

const buildRegisterinntekterPerKilde = (
  kilder: RegisterinntekteMedDato[],
  inntekter: RegisterinntekteMedDato[],
  perioder: string[],
  typeGrunnlag: '8-30' | '8-28',
): RegisterinntekterPerKilde[] =>
  kilder.map(kilde => {
    const inntekterForKilde = inntekter.filter(i => i.label === kilde.label);
    return {
      label: kilde.label,
      inntektAktivitetType: kilde.inntektAktivitetType,
      typeGrunnlag,
      datapunkter: perioder.map(periode => inntekterForKilde.find(i => i.fom === periode)?.beløp),
    };
  });

const buildGrunnlagForType = (
  inntekter: RegisterinntekteMedDato[],
  kilder: RegisterinntekteMedDato[],
  perioder: string[],
  typeGrunnlag: '8-30' | '8-28',
) => {
  const subtotal = beregnSubtotalPerKilde(inntekter);
  const total = Array.from(subtotal.values()).reduce(sumBeløp, 0);

  return {
    inntektskilder: buildRegisterinntekterPerKilde(kilder, inntekter, perioder, typeGrunnlag),
    tabellData: perioder.toReversed().map(periode => ({
      formatertPeriode: formaterMåned(periode),
      månedinntekt: Object.fromEntries(inntekter.filter(i => i.fom === periode).map(i => [i.label, i])),
    })),
    subtotal,
    total,
  };
};

export const transformerRegisterinntekter = (
  inntektsgrunnlag: Inntektsgrunnlag,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  intl: IntlShape,
  vis_8_28: boolean,
) => {
  const perioder = finnAlleMåneder(
    inntektsgrunnlag.sammenligningsgrunnlagInntekter.concat(inntektsgrunnlag.beregningsgrunnlagInntekter),
  );

  const inntekterMedPeriode_8_30 = mapInntekterMedPeriode(
    inntektsgrunnlag.sammenligningsgrunnlagInntekter,
    arbeidsgiverOpplysningerPerId,
    intl,
  );
  const inntekterMedPeriode_8_28 = mapInntekterMedPeriode(
    inntektsgrunnlag.beregningsgrunnlagInntekter,
    arbeidsgiverOpplysningerPerId,
    intl,
  );

  const kilder = Array.from(
    new Map(
      inntekterMedPeriode_8_30.concat(inntekterMedPeriode_8_28).map(inntekt => [inntekt.label, inntekt]),
    ).values(),
  ).sort((a, b) => a.inntektAktivitetType.localeCompare(b.inntektAktivitetType));

  const grunnlag_8_30 = buildGrunnlagForType(inntekterMedPeriode_8_30, kilder, perioder, '8-30');
  const grunnlag_8_28 = buildGrunnlagForType(inntekterMedPeriode_8_28, kilder, perioder, '8-28');

  // Build combined tabellData with both 8-30 and 8-28 data
  // Build combined tabellData with both 8-30 and 8-28 data
  const tabellData = perioder.toReversed().map(periode => {
    const kilderForRad = fjernDuplisertKilder(
      Object.keys({
        ...grunnlag_8_30.tabellData.find(t => t.formatertPeriode === formaterMåned(periode))?.månedinntekt,
        ...grunnlag_8_28.tabellData.find(t => t.formatertPeriode === formaterMåned(periode))?.månedinntekt,
      }),
    );

    return {
      formatertPeriode: formaterMåned(periode),
      kilderForRad,
      månedinntekt_8_30:
        grunnlag_8_30.tabellData.find(t => t.formatertPeriode === formaterMåned(periode))?.månedinntekt ?? {},
      månedinntekt_8_28:
        grunnlag_8_28.tabellData.find(t => t.formatertPeriode === formaterMåned(periode))?.månedinntekt ?? {},
    };
  });

  return {
    tabellData,
    kilder,
    periodeData: perioder.map(formaterMåned),
    transformertGrunnlag_8_28: {
      inntektskilder: grunnlag_8_28.inntektskilder,
      subtotal: grunnlag_8_28.subtotal,
      total: grunnlag_8_28.total,
    },
    transformertGrunnlag_8_30: {
      inntektskilder: grunnlag_8_30.inntektskilder,
      subtotal: grunnlag_8_30.subtotal,
      total: grunnlag_8_30.total,
    },
    vis_8_28,
  };
};
const formaterAkivitetLabel =
  (arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId, intl: IntlShape) =>
  (inntekt: InntektsgrunnlagInntekt) => {
    if (inntekt.inntektAktivitetType === InntektAktivitetType.ARBEID) {
      return {
        label: formaterArbeidsgiver(arbeidsgiverOpplysningerPerId[inntekt.arbeidsgiverIdent]),
        inntektAktivitetType: inntekt.inntektAktivitetType,
      };
    } else if (inntekt.inntektAktivitetType === InntektAktivitetType.FRILANS) {
      return {
        label: intl.formatMessage({ id: 'Registerinntekt.Frilans' }),
        inntektAktivitetType: inntekt.inntektAktivitetType,
      };
    } else {
      return {
        label: intl.formatMessage({ id: 'Registerinntekt.Ytelse' }),
        inntektAktivitetType: inntekt.inntektAktivitetType,
      };
    }
  };

const formaterMåned = (dato: string): string => capitalizeFirstLetter(dayjs(dato).format('MMM YY').replace('.', ''));
