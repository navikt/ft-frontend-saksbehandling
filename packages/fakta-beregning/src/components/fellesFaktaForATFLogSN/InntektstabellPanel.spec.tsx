import { IntlProvider } from 'react-intl';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { InntektstabellPanel } from './InntektstabellPanel';

import messages from '../../../i18n/nb_NO.json';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG } = FaktaBeregningAvklaringsbehovCode;

describe('InntektstabellPanel', () => {
  it('skal vise checkbox for overstyring', () => {
    render(
      <IntlProvider locale="nb-NO" messages={messages}>
        <InntektstabellPanel
          key="inntektstabell"
          hjelpeTekstId=""
          tabell={<span> tabell </span>}
          avklaringsbehov={[]}
          readOnly={false}
          erOverstyrer
          updateOverstyring={vi.fn()}
          erOverstyrt={false}
        />
      </IntlProvider>,
    );
    expect(screen.getByTestId('overstyringsknapp')).toBeInTheDocument();
  });

  it('checkbox skal vere readOnly når man har overstyring aksjonspunkt', () => {
    render(
      <IntlProvider locale="nb-NO" messages={messages}>
        <InntektstabellPanel
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
          updateOverstyring={vi.fn()}
          erOverstyrt={false}
        />
      </IntlProvider>,
    );
    const overstyringsknapp = screen.getByTestId('overstyringsknapp');
    expect(overstyringsknapp).toBeInTheDocument();
    expect(overstyringsknapp).toHaveAttribute('aria-disabled', 'true');
  });

  it('skal ikkje vise avbryt-knapp når overstyring allereie er løyst', () => {
    render(
      <IntlProvider locale="nb-NO" messages={messages}>
        <InntektstabellPanel
          key="inntektstabell"
          hjelpeTekstId=""
          tabell={<span> tabell </span>}
          avklaringsbehov={[
            {
              definisjon: OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
              status: 'UTFO',
              kanLoses: false,
            },
          ]}
          readOnly={false}
          erOverstyrer
          updateOverstyring={vi.fn()}
          erOverstyrt
        />
      </IntlProvider>,
    );

    expect(screen.queryByRole('button', { name: 'Avbryt overstyring' })).not.toBeInTheDocument();
  });

  it('skal vise avbryt-knapp når overstyring kan avbrytast', async () => {
    const user = userEvent.setup();

    render(
      <IntlProvider locale="nb-NO" messages={messages}>
        <InntektstabellPanel
          key="inntektstabell"
          hjelpeTekstId=""
          tabell={<span> tabell </span>}
          avklaringsbehov={[]}
          readOnly={false}
          erOverstyrer
          updateOverstyring={vi.fn()}
          erOverstyrt={false}
        />
      </IntlProvider>,
    );

    await user.click(screen.getByTestId('overstyringsknapp'));

    expect(screen.getByRole('button', { name: 'Avbryt overstyring' })).toBeInTheDocument();
  });
});
