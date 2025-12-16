import { createIntl, TIDENES_ENDE } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidsgivere';
import { arbeidstakerFPFlereArbeidsforhold } from '../../../testdata/arbeidstakerFPFlereArbeidsforhold';
import { formaterArbeidsgiverNullable } from '../../utils/arbeidsgiverUtils';
import { formaterStillingsprosenter, mapBeregningsgrunnlagTilArbeidsinntektVisning } from './arbeidsinntektUtils';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('arbeidsinntektUtils', () => {
  describe('mapBeregningsgrunnlagTilArbeidsinntektVisning', () => {
    it('skal mappe inntektsrader for andelene', () => {
      const formatArbeidsgiver = formaterArbeidsgiverNullable(arbeidsgiverOpplysningerPerId, intl);

      const resultat = mapBeregningsgrunnlagTilArbeidsinntektVisning(
        arbeidstakerFPFlereArbeidsforhold,
        formatArbeidsgiver,
      );

      expect(resultat).toHaveLength(2);
      expect(resultat[0]).toEqual({
        andelsnr: 1,
        arbeidsgiverLabel: 'INTERESSANT INTUITIV KATT DIAMETER (444444444)',
        beregningsgrunnlagÅrsinntekt: 31776,
        ansattPeriode: {
          fom: '2005-12-15',
          tom: undefined,
        },
        inntektsmeldingÅrsinntekt: 600000,
        sammenligningsgrunnlagÅrsinntekt: 78054,
        formatertStillingsprosenter: undefined,
      });
      expect(resultat[1]).toEqual({
        andelsnr: 2,
        arbeidsgiverLabel: 'TROSSIG NATURSTRIDIG TIGER AS (222222222)',
        beregningsgrunnlagÅrsinntekt: 90000,
        ansattPeriode: {
          fom: '2010-10-01',
          tom: undefined,
        },
        inntektsmeldingÅrsinntekt: 480000,
        sammenligningsgrunnlagÅrsinntekt: 180000,
        formatertStillingsprosenter: undefined,
      });
    });
  });
  describe('formaterStillingsprosenter', () => {
    it('skal formatere stillingsprosenter med ett innslag', () => {
      const resultat = formaterStillingsprosenter([{ fomDato: '2022-01-01', tomDato: TIDENES_ENDE, prosent: 80 }]);
      expect(resultat).toBe('80%');
    });

    it('skal formatere stillingsprosenter med flere innslag', () => {
      const resultat = formaterStillingsprosenter([
        { fomDato: '2023-01-01', tomDato: TIDENES_ENDE, prosent: 30 },
        { fomDato: '2022-01-01', tomDato: '2023-01-01', prosent: 80 },
        { fomDato: '2021-11-01', tomDato: '2022-01-01', prosent: 10 },
      ]);
      expect(resultat).toBe('Fra 80% til 30%');
    });
  });
});
