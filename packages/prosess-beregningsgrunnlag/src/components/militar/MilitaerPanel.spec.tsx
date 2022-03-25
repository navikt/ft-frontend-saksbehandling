import React from 'react';
import { FormattedMessage } from 'react-intl';

import { aktivitetStatus } from '@ft-frontend-saksbehandling/kodeverk';
import { formatCurrencyNoKr } from '@ft-frontend-saksbehandling/utils';
import { BeregningsgrunnlagAndel } from '@ft-frontend-saksbehandling/types';
import { shallowWithIntl } from '@ft-frontend-saksbehandling/utils-test/src/intl-enzyme-test-helper';

import { MilitaerPanel as UnwrappedForm } from './MilitaerPanel';
import messages from '../../../i18n/nb_NO.json';

const periode = {
  bruttoPrAar: 300000,
  beregningsgrunnlagPrStatusOgAndel: [
    {
      aktivitetStatus: aktivitetStatus.MILITAER_ELLER_SIVIL,
      beregnetPrAar: 290000,
    },
  ],
};

describe('<MilitaerPanel>', () => {
  it('skal teste at korrekt brutto vises for militær', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      alleAndeler={periode.beregningsgrunnlagPrStatusOgAndel as BeregningsgrunnlagAndel[]}
    />, messages);
    const elements = wrapper.find('Element');
    expect(elements).toHaveLength(2);
    expect(elements.at(1).children().text()).toBe(formatCurrencyNoKr(290000));
    const formattedMessages = wrapper.find(FormattedMessage);
    expect(formattedMessages.prop('id')).toEqual('Beregningsgrunnlag.AarsinntektPanel.Militær');
  });
});
