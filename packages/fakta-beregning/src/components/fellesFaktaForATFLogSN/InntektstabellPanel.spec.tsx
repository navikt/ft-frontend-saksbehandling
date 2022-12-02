import { render, screen } from '@testing-library/react';
import React from 'react';
import { IntlProvider } from 'react-intl';
import FaktaBeregningAvklaringsbehovCode from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { InntektstabellPanelImpl } from './InntektstabellPanel';
import messages from '../../../i18n/nb_NO.json';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG } = FaktaBeregningAvklaringsbehovCode;

describe('<InntektstabellPanel>', () => {
  it('skal vise checkbox for overstyring', () => {
    render(
      <IntlProvider locale="nb-NO" messages={messages}>
        <InntektstabellPanelImpl
          key="inntektstabell"
          hjelpeTekstId=""
          tabell={<span> tabell </span>}
          avklaringsbehov={[]}
          readOnly={false}
          erOverstyrer
          updateOverstyring={jest.fn()}
          erOverstyrt={false}
        >
          <span>test1</span>
          <span>test2</span>
        </InntektstabellPanelImpl>
      </IntlProvider>,
    );
    expect(screen.getByTestId('overstyringsknapp')).toBeInTheDocument();
  });

  it('checkbox skal vere readOnly når man har overstyring aksjonspunkt', () => {
    render(
      <IntlProvider locale="nb-NO" messages={messages}>
        <InntektstabellPanelImpl
          key="inntektstabell"
          hjelpeTekstId=""
          tabell={<span> tabell </span>}
          avklaringsbehov={[
            {
              definisjon: OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
              status: 'OPPR',
              kanLoses: true,
            },
          ]}
          readOnly={false}
          erOverstyrer
          updateOverstyring={jest.fn()}
          erOverstyrt={false}
        >
          <span>test1</span>
          <span>test2</span>
        </InntektstabellPanelImpl>
      </IntlProvider>,
    );
    const overstyringsknapp = screen.getByTestId('overstyringsknapp');
    expect(overstyringsknapp).toBeInTheDocument();
    expect(overstyringsknapp).toHaveAttribute('aria-disabled', 'true');
  });
});
