import { createIntl } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidsgivere';
import { arbeidstakerFPFlereArbeidsforhold } from '../../../testdata/arbeidstakerFPFlereArbeidsforhold';
import { formaterArbeidsgiverNullable } from '../../utils/arbeidsgiverUtils';
import { mapBeregningsgrunnlagTilArbeidsinntektVisning } from './arbeidsinntektUtils';

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
        beregningsperiodeFom: '2025-09-01',
        beregningsperiodeTom: '2025-11-30',
        inntektsmeldingÅrsinntekt: 600000,
        sammenligningsgrunnlagÅrsinntekt: 78054,
        stillingsProsent: undefined,
      });
      expect(resultat[1]).toEqual({
        andelsnr: 2,
        arbeidsgiverLabel: 'TROSSIG NATURSTRIDIG TIGER AS (222222222)',
        beregningsgrunnlagÅrsinntekt: 90000,
        beregningsperiodeFom: '2025-09-01',
        beregningsperiodeTom: '2025-11-30',
        inntektsmeldingÅrsinntekt: 480000,
        sammenligningsgrunnlagÅrsinntekt: 180000,
        stillingsProsent: undefined,
      });
    });
  });
});
