import { describe, expect, it } from 'vitest';

import { InntektAktivitetType } from '@navikt/ft-kodeverk';
import type { Inntektsgrunnlag, InntektsgrunnlagMåned } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidsgivere';
import {
  lagArbeidInntekt,
  lagFrilansInntekt,
  lagInntektsgrunnlagMåned,
  lagYtelseInntekt,
} from '../../../testdata/utils/lagInntektsgrunnlag';
import { transformerRegisterinntekter } from './registerinntekterUtils';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const ARBEIDSGIVER_A = arbeidsgiverOpplysningerPerId['222222222'].identifikator;
const ARBEIDSGIVER_B = arbeidsgiverOpplysningerPerId['333333333'].identifikator;

const BEDRIFT_A_NAVN = arbeidsgiverOpplysningerPerId['222222222'].navn;
const BEDRIFT_B_NAVN = arbeidsgiverOpplysningerPerId['333333333'].navn;

const BEDRIFT_A_MED_IDENT = `${BEDRIFT_A_NAVN} (${ARBEIDSGIVER_A})`;
const BEDRIFT_B_MED_IDENT = `${BEDRIFT_B_NAVN} (${ARBEIDSGIVER_B})`;

const FRILANS_LABEL = 'Frilans';
const YTELSE_LABEL = 'Ytelse';

const lagInntektsgrunnlag = (
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[],
  beregningsgrunnlagInntekter: InntektsgrunnlagMåned[] = [],
): Inntektsgrunnlag => ({
  sammenligningsgrunnlagInntekter,
  beregningsgrunnlagInntekter,
  pgiGrunnlag: [],
});

describe('registerinntekterUtils', () => {
  describe('transformerRegisterinntekter', () => {
    it('skal sortere perioder basert på maks og min dato i grunnlag', () => {
      const inntektsgrunnlag = lagInntektsgrunnlag([
        lagInntektsgrunnlagMåned('2025-04-01', [lagFrilansInntekt(3)]),
        lagInntektsgrunnlagMåned('2024-09-01', [lagFrilansInntekt(1)]),
        lagInntektsgrunnlagMåned('2025-01-01', [lagFrilansInntekt(2)]),
      ]);

      const { periodeData, transformertGrunnlag_8_30 } = transformerRegisterinntekter(inntektsgrunnlag, {}, intl, true);

      expect(periodeData[0]).toBe('Sep 24');
      expect(periodeData[7]).toBe('April 25');

      expect(transformertGrunnlag_8_30.inntektskilder).toEqual([
        {
          label: FRILANS_LABEL,
          datapunkter: [1, undefined, undefined, undefined, 2, undefined, undefined, 3],
          inntektAktivitetType: InntektAktivitetType.FRILANS,
          typeGrunnlag: '8-30',
        },
      ]);
      expect(transformertGrunnlag_8_30.total).toEqual(6);
    });
    it('skal utvide og sortere perioder til antall måneder for maks og min datoer i grunnlag', () => {
      const inntektsgrunnlag = lagInntektsgrunnlag(
        [
          lagInntektsgrunnlagMåned('2026-04-01', [lagFrilansInntekt(3)]),
          lagInntektsgrunnlagMåned('2025-12-01', [lagFrilansInntekt(1)]),
          lagInntektsgrunnlagMåned('2026-01-01', [lagFrilansInntekt(2)]),
        ],
        [
          lagInntektsgrunnlagMåned('2026-06-01', [lagFrilansInntekt(30)]),
          lagInntektsgrunnlagMåned('2025-12-01', [lagFrilansInntekt(10)]),
          lagInntektsgrunnlagMåned('2026-01-01', [lagFrilansInntekt(20)]),
        ],
      );

      const { periodeData, transformertGrunnlag_8_28, transformertGrunnlag_8_30, tabellData } =
        transformerRegisterinntekter(inntektsgrunnlag, {}, intl, true);

      expect(periodeData).toEqual(['Des 25', 'Jan 26', 'Feb 26', 'Mars 26', 'April 26', 'Mai 26', 'Juni 26']);
      expect(tabellData).toHaveLength(7);

      expect(tabellData).toEqual([
        {
          formatertPeriode: 'Juni 26',
          kilderForRad: [FRILANS_LABEL],
          månedinntekt_8_28: {
            Frilans: {
              beløp: 30,
              fom: '2026-06-01',
              inntektAktivitetType: InntektAktivitetType.FRILANS,
              label: FRILANS_LABEL,
            },
          },
          månedinntekt_8_30: {},
        },
        {
          formatertPeriode: 'Mai 26',
          kilderForRad: [],
          månedinntekt_8_28: {},
          månedinntekt_8_30: {},
        },
        {
          formatertPeriode: 'April 26',
          kilderForRad: [FRILANS_LABEL],
          månedinntekt_8_28: {},
          månedinntekt_8_30: {
            Frilans: {
              beløp: 3,
              fom: '2026-04-01',
              inntektAktivitetType: InntektAktivitetType.FRILANS,
              label: FRILANS_LABEL,
            },
          },
        },
        {
          formatertPeriode: 'Mars 26',
          kilderForRad: [],
          månedinntekt_8_28: {},
          månedinntekt_8_30: {},
        },
        {
          formatertPeriode: 'Feb 26',
          kilderForRad: [],
          månedinntekt_8_28: {},
          månedinntekt_8_30: {},
        },
        {
          formatertPeriode: 'Jan 26',
          kilderForRad: [FRILANS_LABEL],
          månedinntekt_8_28: {
            Frilans: {
              beløp: 20,
              fom: '2026-01-01',
              inntektAktivitetType: InntektAktivitetType.FRILANS,
              label: FRILANS_LABEL,
            },
          },
          månedinntekt_8_30: {
            Frilans: {
              beløp: 2,
              fom: '2026-01-01',
              inntektAktivitetType: InntektAktivitetType.FRILANS,
              label: FRILANS_LABEL,
            },
          },
        },
        {
          formatertPeriode: 'Des 25',
          kilderForRad: [FRILANS_LABEL],
          månedinntekt_8_28: {
            Frilans: {
              beløp: 10,
              fom: '2025-12-01',
              inntektAktivitetType: InntektAktivitetType.FRILANS,
              label: FRILANS_LABEL,
            },
          },
          månedinntekt_8_30: {
            Frilans: {
              beløp: 1,
              fom: '2025-12-01',
              inntektAktivitetType: InntektAktivitetType.FRILANS,
              label: FRILANS_LABEL,
            },
          },
        },
      ]);
      expect(transformertGrunnlag_8_28.total).toEqual(60);
      expect(transformertGrunnlag_8_30.total).toEqual(6);
    });

    it('skal håndtere arbeidsinntekt fra flere arbeidsgivere', () => {
      const inntektsgrunnlag = lagInntektsgrunnlag([
        lagInntektsgrunnlagMåned('2025-01-01', [lagArbeidInntekt(30000, ARBEIDSGIVER_A)]),
        lagInntektsgrunnlagMåned('2025-03-01', [lagArbeidInntekt(20000, ARBEIDSGIVER_B)]),
      ]);

      const { periodeData, transformertGrunnlag_8_30 } = transformerRegisterinntekter(
        inntektsgrunnlag,
        arbeidsgiverOpplysningerPerId,
        intl,
        true,
      );

      expect(periodeData).toHaveLength(3);
      expect(transformertGrunnlag_8_30.inntektskilder).toEqual([
        {
          label: BEDRIFT_A_MED_IDENT,
          datapunkter: [30000, undefined, undefined],
          inntektAktivitetType: InntektAktivitetType.ARBEID,
          typeGrunnlag: '8-30',
        },
        {
          label: BEDRIFT_B_MED_IDENT,
          datapunkter: [undefined, undefined, 20000],
          inntektAktivitetType: InntektAktivitetType.ARBEID,
          typeGrunnlag: '8-30',
        },
      ]);
      expect(transformertGrunnlag_8_30.total).toEqual(50000);
    });

    it('skal returnere undefined for måneder uten inntekt for blandet inntektstyper', () => {
      const inntektsgrunnlag = lagInntektsgrunnlag(
        [
          lagInntektsgrunnlagMåned('2025-04-01', []),
          lagInntektsgrunnlagMåned('2025-05-01', [
            lagArbeidInntekt(30000, ARBEIDSGIVER_A),
            lagFrilansInntekt(10000),
            lagYtelseInntekt(5000),
          ]),
        ],
        [
          lagInntektsgrunnlagMåned('2025-06-01', [
            lagArbeidInntekt(26000, ARBEIDSGIVER_A),
            lagFrilansInntekt(6000),
            lagYtelseInntekt(1000),
          ]),
        ],
      );

      const { transformertGrunnlag_8_28, transformertGrunnlag_8_30, tabellData } = transformerRegisterinntekter(
        inntektsgrunnlag,
        arbeidsgiverOpplysningerPerId,
        intl,
        true,
      );

      expect(transformertGrunnlag_8_30.inntektskilder).toEqual([
        {
          label: BEDRIFT_A_MED_IDENT,
          datapunkter: [undefined, 30000, undefined],
          inntektAktivitetType: InntektAktivitetType.ARBEID,
          typeGrunnlag: '8-30',
        },
        {
          label: FRILANS_LABEL,
          datapunkter: [undefined, 10000, undefined],
          inntektAktivitetType: InntektAktivitetType.FRILANS,
          typeGrunnlag: '8-30',
        },
        {
          label: YTELSE_LABEL,
          datapunkter: [undefined, 5000, undefined],
          inntektAktivitetType: InntektAktivitetType.YTELSE,
          typeGrunnlag: '8-30',
        },
      ]);
      expect(transformertGrunnlag_8_28.inntektskilder).toEqual([
        {
          label: BEDRIFT_A_MED_IDENT,
          datapunkter: [undefined, undefined, 26000],
          inntektAktivitetType: InntektAktivitetType.ARBEID,
          typeGrunnlag: '8-28',
        },
        {
          label: FRILANS_LABEL,
          datapunkter: [undefined, undefined, 6000],
          inntektAktivitetType: InntektAktivitetType.FRILANS,
          typeGrunnlag: '8-28',
        },
        {
          label: YTELSE_LABEL,
          datapunkter: [undefined, undefined, 1000],
          inntektAktivitetType: InntektAktivitetType.YTELSE,
          typeGrunnlag: '8-28',
        },
      ]);
      expect(tabellData).toEqual([
        {
          formatertPeriode: 'Juni 25',
          kilderForRad: [BEDRIFT_A_MED_IDENT, FRILANS_LABEL, YTELSE_LABEL],
          månedinntekt_8_28: {
            Frilans: {
              label: FRILANS_LABEL,
              beløp: 6000,
              fom: '2025-06-01',
              inntektAktivitetType: InntektAktivitetType.FRILANS,
            },
            [BEDRIFT_A_MED_IDENT]: {
              label: BEDRIFT_A_MED_IDENT,
              beløp: 26000,
              fom: '2025-06-01',
              inntektAktivitetType: InntektAktivitetType.ARBEID,
            },
            Ytelse: {
              label: YTELSE_LABEL,
              beløp: 1000,
              fom: '2025-06-01',
              inntektAktivitetType: InntektAktivitetType.YTELSE,
            },
          },
          månedinntekt_8_30: {},
        },
        {
          formatertPeriode: 'Mai 25',
          kilderForRad: [BEDRIFT_A_MED_IDENT, FRILANS_LABEL, YTELSE_LABEL],
          månedinntekt_8_28: {},
          månedinntekt_8_30: {
            Frilans: {
              label: FRILANS_LABEL,
              beløp: 10000,
              fom: '2025-05-01',
              inntektAktivitetType: InntektAktivitetType.FRILANS,
            },
            [BEDRIFT_A_MED_IDENT]: {
              label: BEDRIFT_A_MED_IDENT,
              beløp: 30000,
              fom: '2025-05-01',
              inntektAktivitetType: InntektAktivitetType.ARBEID,
            },
            Ytelse: {
              label: YTELSE_LABEL,
              beløp: 5000,
              fom: '2025-05-01',
              inntektAktivitetType: InntektAktivitetType.YTELSE,
            },
          },
        },
        {
          formatertPeriode: 'April 25',
          kilderForRad: [],
          månedinntekt_8_28: {},
          månedinntekt_8_30: {},
        },
      ]);
      expect(Object.fromEntries(transformertGrunnlag_8_30.subtotal)).toEqual({
        [BEDRIFT_A_MED_IDENT]: 30000,
        [FRILANS_LABEL]: 10000,
        [YTELSE_LABEL]: 5000,
      });
      expect(transformertGrunnlag_8_30.total).toEqual(45000);
    });

    it('skal summere arbeidsinntekt korrekt for flere arbeidsgivere over flere måneder', () => {
      const inntektsgrunnlag = lagInntektsgrunnlag([
        lagInntektsgrunnlagMåned('2025-01-01', [
          lagArbeidInntekt(25000, ARBEIDSGIVER_A),
          lagArbeidInntekt(2000, ARBEIDSGIVER_A),
          lagArbeidInntekt(15000, ARBEIDSGIVER_B),
        ]),
        lagInntektsgrunnlagMåned('2025-02-01', [
          lagArbeidInntekt(25000, ARBEIDSGIVER_A),
          lagArbeidInntekt(18000, ARBEIDSGIVER_B),
        ]),
        lagInntektsgrunnlagMåned('2025-03-01', [lagArbeidInntekt(27000, ARBEIDSGIVER_A)]),
        lagInntektsgrunnlagMåned('2025-04-01', []),
        lagInntektsgrunnlagMåned('2025-05-01', []),
      ]);

      const { transformertGrunnlag_8_30 } = transformerRegisterinntekter(
        inntektsgrunnlag,
        arbeidsgiverOpplysningerPerId,
        intl,
        true,
      );

      expect(transformertGrunnlag_8_30.inntektskilder).toEqual([
        {
          label: BEDRIFT_A_MED_IDENT,
          datapunkter: [25000, 25000, 27000, undefined, undefined],
          inntektAktivitetType: InntektAktivitetType.ARBEID,
          typeGrunnlag: '8-30',
        },
        {
          label: BEDRIFT_B_MED_IDENT,
          datapunkter: [15000, 18000, undefined, undefined, undefined],
          inntektAktivitetType: InntektAktivitetType.ARBEID,
          typeGrunnlag: '8-30',
        },
      ]);
      expect(transformertGrunnlag_8_30.total).toEqual(112000);
    });

    it('skal returnere tomme datastrukturer når inntektsgrunnlaget er tomt', () => {
      const { transformertGrunnlag_8_30 } = transformerRegisterinntekter(lagInntektsgrunnlag([]), {}, intl, true);

      expect(transformertGrunnlag_8_30.inntektskilder).toEqual([]);
      expect(transformertGrunnlag_8_30.total).toEqual(0);
    });

    it('skal ikke inkludere inntektstyper som ikke finnes i inntektsgrunnlaget', () => {
      const inntektsgrunnlag = lagInntektsgrunnlag([lagInntektsgrunnlagMåned('2025-01-01', [])]);

      const { transformertGrunnlag_8_30 } = transformerRegisterinntekter(inntektsgrunnlag, {}, intl, true);

      expect(transformertGrunnlag_8_30.inntektskilder).toEqual([]);
      expect(transformertGrunnlag_8_30.total).toEqual(0);
    });
  });
});
