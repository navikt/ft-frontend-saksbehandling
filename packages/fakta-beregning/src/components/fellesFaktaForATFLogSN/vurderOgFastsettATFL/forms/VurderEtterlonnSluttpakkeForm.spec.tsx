import React from 'react';

import { shallowWithIntl } from '@navikt/ft-utils-test';

import { Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import VurderEtterlonnSluttpakkeForm from './VurderEtterlonnSluttpakkeForm';
import messages from '../../../../../i18n/nb_NO.json';

describe('<VurderEtterlonnSluttpakkeForm>', () => {
  it.skip('Skal teste at komponenten vises korrekt', () => {
    const wrapper = shallowWithIntl(<VurderEtterlonnSluttpakkeForm readOnly={false} />, messages);
    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);
  });
  it('Skal teste at buildInitialvalues bygges korrekt når det er tidligere fastsatt etterlønn eller sluttpakke', () => {
    const ap = {
      status: 'OPPRETTET',
      definisjon: '5058',
      kanLoses: true,
      erAktivt: true,
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              arbeidsforhold: {
                arbeidsforholdType: 'ETTERLØNN_SLUTTPAKKE',
              },
              beregnetPrAar: 120000,
            } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    } as Beregningsgrunnlag;
    const values = VurderEtterlonnSluttpakkeForm.buildInitialValues(bg, ap);
    const testobj = {
      vurderEtterlønnSluttpakke: true,
    };
    expect(values).toEqual(testobj);
  });

  it('Skal teste at buildInitialvalues bygges korrekt når det ikke er tidligere fastsatt etterlønn eller sluttpakke', () => {
    const ap = {
      status: 'OPPRETTET',
      definisjon: '5058',
      kanLoses: true,
      erAktivt: true,
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              arbeidsforhold: {
                arbeidsforholdType: 'ETTERLØNN_SLUTTPAKKE',
              },
              beregnetPrAar: null,
            } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    } as Beregningsgrunnlag;
    const values = VurderEtterlonnSluttpakkeForm.buildInitialValues(bg, ap);
    const testobj = {
      vurderEtterlønnSluttpakke: false,
    };
    expect(values).toEqual(testobj);
  });
});
