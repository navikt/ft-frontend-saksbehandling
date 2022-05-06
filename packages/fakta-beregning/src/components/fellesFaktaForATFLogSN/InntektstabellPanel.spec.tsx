import React from 'react';
import { shallow } from 'enzyme';

import { OverstyringKnapp } from '@navikt/ft-ui-komponenter';

import { InntektstabellPanelImpl } from './InntektstabellPanel';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG } = FaktaBeregningAksjonspunktCode;

describe('<InntektstabellPanel>', () => {
  it('skal vise checkbox for overstyring', () => {
    const wrapper = shallow(
      <InntektstabellPanelImpl
        key="inntektstabell"
        hjelpeTekstId="hjelpetekst"
        tabell={<span> tabell </span>}
        kanOverstyre
        aksjonspunkter={[]}
        readOnly={false}
        erOverstyrer={false}
        reduxFormChange={() => undefined}
      >
        <span>test1</span>
        <span>test2</span>
      </InntektstabellPanelImpl>,
    );
    expect(wrapper.find(OverstyringKnapp)).toHaveLength(1);
  });

  it('checkbox skal vere readOnly når man har overstyring aksjonspunkt', () => {
    const wrapper = shallow(
      <InntektstabellPanelImpl
        key="inntektstabell"
        hjelpeTekstId="hjelpetekst"
        tabell={<span> tabell </span>}
        kanOverstyre
        aksjonspunkter={[
          {
            definisjon: OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
            status: 'OPPR',
            erAktivt: true,
            kanLoses: true,
          },
        ]}
        readOnly={false}
        erOverstyrer={false}
        reduxFormChange={() => undefined}
      >
        <span>test1</span>
        <span>test2</span>
      </InntektstabellPanelImpl>,
    );
    const knapp = wrapper.find(OverstyringKnapp);
    expect(knapp).toHaveLength(1);
    expect(knapp.first().prop('erOverstyrt')).toBe(true);
  });
});
