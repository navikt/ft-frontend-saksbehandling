import { describe, expect, it } from 'vitest';

import { InntektAktivitetType } from '@navikt/ft-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidsgivere';
import {
  lagArbeidInntekt,
  lagFrilansInntekt,
  lagInntektsgrunnlagMåned,
  lagYtelseInntekt,
} from '../../../testdata/utils/lagInntektsgrunnlag';
import { transformerSammenligningsgrunnlag } from './sammenligningsgrunnlagUtils';

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

      const { periodeData, totalInntekt } = transformerSammenligningsgrunnlag(
        inntekter,
        SAMMENLIGNINGSGRUNNLAG_FOM,
        {},
        intl,
      );

      expect(periodeData).toEqual([
        'Jan 25',
        'Feb 25',
        'Mars 25',
        'April 25',
        'Mai 25',
        'Juni 25',
        'Juli 25',
        'Aug 25',
        'Sep 25',
        'Okt 25',
        'Nov 25',
        'Des 25',
      ]);
      expect(totalInntekt).toEqual(25000);
    });

    it('skal håndtere arbeidsinntekt fra flere arbeidsgivere', () => {
      const inntekter = [
        lagInntektsgrunnlagMåned('2025-01-01', [lagArbeidInntekt(30000, ARBEIDSGIVER_A)]),
        lagInntektsgrunnlagMåned('2025-03-01', [lagArbeidInntekt(20000, ARBEIDSGIVER_B)]),
      ];

      const { periodeData, alleInntektskilder, totalInntekt } = transformerSammenligningsgrunnlag(
        inntekter,
        SAMMENLIGNINGSGRUNNLAG_FOM,
        arbeidsgiverOpplysningerPerId,
        intl,
      );

      expect(alleInntektskilder).toEqual([
        {
          label: BEDRIFT_A_MED_IDENT,
          datapunkter: [30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          inntektAktivitetType: InntektAktivitetType.ARBEID,
        },
        {
          label: BEDRIFT_B_MED_IDENT,
          datapunkter: [0, 0, 20000, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          inntektAktivitetType: InntektAktivitetType.ARBEID,
        },
      ]);
      expect(periodeData).toHaveLength(12);
      expect(totalInntekt).toEqual(50000);
    });

    it('skal returnere 0 for måneder uten inntekt for blandet inntektstyper', () => {
      const inntekter = [INNTEKTER_MAI];

      const { periodeData, alleInntektskilder, totalInntekt } = transformerSammenligningsgrunnlag(
        inntekter,
        SAMMENLIGNINGSGRUNNLAG_FOM,
        arbeidsgiverOpplysningerPerId,
        intl,
      );

      expect(alleInntektskilder).toEqual([
        {
          label: BEDRIFT_A_MED_IDENT,
          datapunkter: [0, 0, 0, 0, 30000, 0, 0, 0, 0, 0, 0, 0],
          inntektAktivitetType: InntektAktivitetType.ARBEID,
        },
        {
          label: FRILANS_LABEL,
          datapunkter: [0, 0, 0, 0, 10000, 0, 0, 0, 0, 0, 0, 0],
          inntektAktivitetType: InntektAktivitetType.FRILANS,
        },
        {
          label: YTELSE_LABEL,
          datapunkter: [0, 0, 0, 0, 5000, 0, 0, 0, 0, 0, 0, 0],
          inntektAktivitetType: InntektAktivitetType.YTELSE,
        },
      ]);
      expect(periodeData).toHaveLength(12);
      expect(totalInntekt).toEqual(45000);
    });

    it('skal beregne og sortere perioder basert på sammenligningsgrunnlagFom', () => {
      const inntekter = [
        lagInntektsgrunnlagMåned('2025-04-01', [lagFrilansInntekt(3)]),
        lagInntektsgrunnlagMåned('2024-09-01', [lagFrilansInntekt(1)]),
        lagInntektsgrunnlagMåned('2025-01-01', [lagFrilansInntekt(2)]),
      ];

      const { periodeData, alleInntektskilder, totalInntekt } = transformerSammenligningsgrunnlag(
        inntekter,
        '2024-07-01',
        {},
        intl,
      );

      expect(periodeData[0]).toBe('Juli 24');
      expect(periodeData[11]).toBe('Juni 25');

      expect(alleInntektskilder).toEqual([
        {
          label: FRILANS_LABEL,
          datapunkter: [0, 0, 1, 0, 0, 0, 2, 0, 0, 3, 0, 0],
          inntektAktivitetType: InntektAktivitetType.FRILANS,
        },
      ]);
      expect(totalInntekt).toEqual(6);
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

      const { periodeData, alleInntektskilder, totalInntekt } = transformerSammenligningsgrunnlag(
        inntekter,
        SAMMENLIGNINGSGRUNNLAG_FOM,
        arbeidsgiverOpplysningerPerId,
        intl,
      );

      expect(alleInntektskilder).toEqual([
        {
          label: BEDRIFT_A_MED_IDENT,
          datapunkter: [27000, 25000, 27000, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          inntektAktivitetType: InntektAktivitetType.ARBEID,
        },
        {
          label: BEDRIFT_B_MED_IDENT,
          datapunkter: [15000, 18000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          inntektAktivitetType: InntektAktivitetType.ARBEID,
        },
      ]);
      expect(periodeData).toHaveLength(12);
      expect(totalInntekt).toEqual(112000);
    });

    it('skal returnere tomme datastrukturer når inntektsgrunnlaget er tomt', () => {
      const { periodeData, alleInntektskilder, totalInntekt } = transformerSammenligningsgrunnlag(
        [],
        SAMMENLIGNINGSGRUNNLAG_FOM,
        {},
        intl,
      );

      expect(periodeData).toHaveLength(12);
      expect(alleInntektskilder).toEqual([]);
      expect(totalInntekt).toEqual(0);
    });

    it('skal ikke inkludere inntektstyper som ikke finnes i inntektsgrunnlaget', () => {
      const inntekter = [lagInntektsgrunnlagMåned('2025-01-01', [])];

      const { periodeData, alleInntektskilder, totalInntekt } = transformerSammenligningsgrunnlag(
        inntekter,
        SAMMENLIGNINGSGRUNNLAG_FOM,
        {},
        intl,
      );

      expect(periodeData).toHaveLength(12);
      expect(alleInntektskilder).toEqual([]);
      expect(totalInntekt).toEqual(0);
    });
  });
});
