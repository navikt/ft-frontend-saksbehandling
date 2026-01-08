import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidsgivere';
import { arbeidstakerFPFlereArbeidsforhold } from '../../../testdata/arbeidstakerFPFlereArbeidsforhold';
import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { createVisningsnavnForAndel } from '../../utils/createVisningsnavnForAktivitet';
import { formaterStillingsprosenter, mapBeregningsgrunnlagTilArbeidsinntektVisning } from './arbeidsinntektUtils';

describe('arbeidsinntektUtils', () => {
  describe('mapBeregningsgrunnlagTilArbeidsinntektVisning', () => {
    it('skal mappe inntektsrader for andelene', () => {
      const formaterAndel = createVisningsnavnForAndel(arbeidsgiverOpplysningerPerId, alleKodeverk as KodeverkForPanel);

      const resultat = mapBeregningsgrunnlagTilArbeidsinntektVisning(
        arbeidstakerFPFlereArbeidsforhold.beregningsgrunnlagListe[0],
        formaterAndel,
      );

      expect(resultat).toHaveLength(2);
      expect(resultat[0]).toEqual({
        andelsnr: 1,
        andelsLabel: 'INTERESSANT INTUITIV KATT DIAMETER (444444444)',
        beregningsgrunnlagMånedinntekt: 10592,
        beregningsgrunnlagÅrsinntekt: 127104,
        ansattPeriode: {
          fom: '2005-12-15',
          tom: undefined,
        },
        inntektsmeldingMånedinntekt: 50000,
        inntektsmeldingÅrsinntekt: 600000,
        formatertStillingsprosenter: '61%',
        sisteLønnsendringsdato: '2005-12-15',
      });
      expect(resultat[1]).toEqual({
        andelsnr: 2,
        andelsLabel: 'TROSSIG NATURSTRIDIG TIGER AS (222222222)',
        beregningsgrunnlagMånedinntekt: 30000,
        beregningsgrunnlagÅrsinntekt: 360000,
        ansattPeriode: {
          fom: '2010-10-01',
          tom: undefined,
        },
        inntektsmeldingMånedinntekt: 40000,
        inntektsmeldingÅrsinntekt: 480000,
        formatertStillingsprosenter: '100%',
        sisteLønnsendringsdato: '2010-10-01',
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
      expect(resultat).toBe('Fra 80% til 30% (01.01.2023)');
    });
  });
});
