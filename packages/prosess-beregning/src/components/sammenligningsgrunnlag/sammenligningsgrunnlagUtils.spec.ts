import { describe, expect, it } from 'vitest';

import { createIntl } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidsgivere';
import {
  lagArbeidInntekt,
  lagFrilansInntekt,
  lagInntektsgrunnlagMåned,
  lagYtelseInntekt,
} from '../../../testdata/utils/lagInntektsgrunnlag';
import { formaterMåned, transformerGrafData } from './sammenligningsgrunnlagUtils';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const ARBEIDSGIVER_A = arbeidsgiverOpplysningerPerId['222222222'].identifikator;
const ARBEIDSGIVER_B = arbeidsgiverOpplysningerPerId['333333333'].identifikator;

const BEDRIFT_A_NAVN = arbeidsgiverOpplysningerPerId['222222222'].navn;
const BEDRIFT_B_NAVN = arbeidsgiverOpplysningerPerId['333333333'].navn;

const BEDRIFT_A_MED_IDENT = `${BEDRIFT_A_NAVN} (${ARBEIDSGIVER_A})`;
const BEDRIFT_B_MED_IDENT = `${BEDRIFT_B_NAVN} (${ARBEIDSGIVER_B})`;

const SAMMENLIGNINGSGRUNNLAG_FOM = '2025-01-01';

const FRILANS_LABEL = 'Frilans';
const YTELSE_LABEL = 'Ytelse';

const INNTEKTER_MAI = lagInntektsgrunnlagMåned('2025-05-01', [
  lagArbeidInntekt(30000, ARBEIDSGIVER_A),
  lagFrilansInntekt(10000),
  lagYtelseInntekt(5000),
]);

describe('sammenligningsgrunnlagUtils', () => {
  describe('transformerGrafData', () => {
    it('skal utvide inntekter til 12 måneder når grunnlaget ikke er 12 mnd', () => {
      const inntekter = [
        lagInntektsgrunnlagMåned('2025-01-01', [lagFrilansInntekt(10000)]),
        lagInntektsgrunnlagMåned('2025-02-01', [lagFrilansInntekt(15000)]),
      ];

      const { periodeData } = transformerGrafData(inntekter, SAMMENLIGNINGSGRUNNLAG_FOM, {}, intl);

      expect(periodeData).toEqual([
        '2025-01-01',
        '2025-02-01',
        '2025-03-01',
        '2025-04-01',
        '2025-05-01',
        '2025-06-01',
        '2025-07-01',
        '2025-08-01',
        '2025-09-01',
        '2025-10-01',
        '2025-11-01',
        '2025-12-01',
      ]);
    });

    it('skal håndtere arbeidsinntekt fra flere arbeidsgivere', () => {
      const inntekter = [
        lagInntektsgrunnlagMåned('2025-01-01', [lagArbeidInntekt(30000, ARBEIDSGIVER_A)]),
        lagInntektsgrunnlagMåned('2025-03-01', [lagArbeidInntekt(20000, ARBEIDSGIVER_B)]),
      ];

      const { dataForArbeid } = transformerGrafData(
        inntekter,
        SAMMENLIGNINGSGRUNNLAG_FOM,
        arbeidsgiverOpplysningerPerId,
        intl,
      );

      expect(Object.keys(dataForArbeid)).toHaveLength(2);
      expect(dataForArbeid[BEDRIFT_A_MED_IDENT]).toEqual([30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(dataForArbeid[BEDRIFT_B_MED_IDENT]).toEqual([0, 0, 20000, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

    it('skal returnere 0 for måneder uten inntekt for blandet inntektstyper', () => {
      const inntekter = [INNTEKTER_MAI];

      const { dataForArbeid, dataForFrilans, dataForYtelse } = transformerGrafData(
        inntekter,
        SAMMENLIGNINGSGRUNNLAG_FOM,
        arbeidsgiverOpplysningerPerId,
        intl,
      );

      expect(dataForArbeid[BEDRIFT_A_MED_IDENT]).toEqual([0, 0, 0, 0, 30000, 0, 0, 0, 0, 0, 0, 0]);
      expect(dataForFrilans[FRILANS_LABEL]).toEqual([0, 0, 0, 0, 10000, 0, 0, 0, 0, 0, 0, 0]);
      expect(dataForYtelse[YTELSE_LABEL]).toEqual([0, 0, 0, 0, 5000, 0, 0, 0, 0, 0, 0, 0]);
    });

    it('skal beregne og sortere perioder basert på sammenligningsgrunnlagFom', () => {
      const inntekter = [
        lagInntektsgrunnlagMåned('2025-04-01', [lagFrilansInntekt(3)]),
        lagInntektsgrunnlagMåned('2024-09-01', [lagFrilansInntekt(1)]),
        lagInntektsgrunnlagMåned('2025-01-01', [lagFrilansInntekt(2)]),
      ];

      const { periodeData, dataForFrilans } = transformerGrafData(inntekter, '2024-07-01', {}, intl);

      expect(periodeData[0]).toBe('2024-07-01');
      expect(periodeData[11]).toBe('2025-06-01');

      expect(dataForFrilans[FRILANS_LABEL]).toEqual([0, 0, 1, 0, 0, 0, 2, 0, 0, 3, 0, 0]);
    });

    it('skal summere arbeidsinntekt korrekt for flere arbeidsgivere over flere måneder', () => {
      const inntekter = [
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
      ];

      const { dataForArbeid } = transformerGrafData(
        inntekter,
        SAMMENLIGNINGSGRUNNLAG_FOM,
        arbeidsgiverOpplysningerPerId,
        intl,
      );

      expect(dataForArbeid[BEDRIFT_A_MED_IDENT]).toEqual([27000, 25000, 27000, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(dataForArbeid[BEDRIFT_B_MED_IDENT]).toEqual([15000, 18000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

    it('skal returnere tomme datastrukturer når inntektsgrunnlaget er tomt', () => {
      const { periodeData, dataForFrilans, dataForYtelse, dataForArbeid } = transformerGrafData(
        [],
        SAMMENLIGNINGSGRUNNLAG_FOM,
        {},
        intl,
      );

      expect(periodeData).toHaveLength(12);
      expect(dataForFrilans).toEqual({});
      expect(dataForYtelse).toEqual({});
      expect(dataForArbeid).toEqual({});
    });

    it('skal ikke inkludere inntektstyper som ikke finnes i inntektsgrunnlaget', () => {
      const inntekter = [lagInntektsgrunnlagMåned('2025-01-01', [])];

      const { periodeData, dataForFrilans, dataForYtelse, dataForArbeid } = transformerGrafData(
        inntekter,
        SAMMENLIGNINGSGRUNNLAG_FOM,
        {},
        intl,
      );

      expect(periodeData).toHaveLength(12);
      expect(dataForFrilans).toEqual({});
      expect(dataForYtelse).toEqual({});
      expect(dataForArbeid).toEqual({});
    });
  });

  describe('formaterMåned', () => {
    it('skal formatere måned og år korrekt', () => {
      const formatertDato = formaterMåned('2025-01-01');
      expect(formatertDato).toBe('Jan 25');
    });
  });
});
