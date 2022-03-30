import React from 'react';
import { shallow } from 'enzyme';
import { getIntlMock } from '@navikt/ft-utils-test';
import { Aksjonspunkt, Beregningsgrunnlag } from '@navikt/ft-types';
import { dekningsgrad, AksjonspunktCode, aksjonspunktStatus } from '@navikt/ft-kodeverk';
import { RadioOption, RadioGroupField } from '@navikt/ft-form-redux-legacy';
import { DekningsgradAksjonspunktPanelImpl } from './DekningsgradAksjonspunktPanel';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<DekningsgradAksjonspunktPanel>', () => {
  it('Skal teste at komponenten renderes', () => {
    const wrapper = shallow(<DekningsgradAksjonspunktPanelImpl
      intl={intlMock}
      readOnly={false}
    />);
    const radioField = wrapper.find(RadioGroupField);
    expect(radioField).toHaveLength(1);
    const radioOption = wrapper.find(RadioOption);
    expect(radioOption).toHaveLength(2);
    expect(radioOption.at(0).first().props().value).toBe(dekningsgrad.ATTI);
    expect(radioOption.at(1).first().props().value).toBe(dekningsgrad.HUNDRE);
  });

  it('Skal teste buildInitialValues når aksjonspunkt ikke er løst før', () => {
    const ap = {
      definisjon: AksjonspunktCode.VURDER_DEKNINGSGRAD,
      status: aksjonspunktStatus.OPPRETTET,
    } as Aksjonspunkt;
    const bg = {
      dekningsgrad: 100,
    } as Beregningsgrunnlag;
    const initialValues = DekningsgradAksjonspunktPanelImpl.buildInitialValues(bg, [ap]);
    expect(initialValues.dekningsgrad).toBeUndefined();
  });

  it('Skal teste buildInitialValues når aksjonspunkt er løst', () => {
    const ap = {
      definisjon: AksjonspunktCode.VURDER_DEKNINGSGRAD,
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: 'Testing testing',
    } as Aksjonspunkt;
    const bg = {
      dekningsgrad: 100,
    } as Beregningsgrunnlag;
    const initialValues = DekningsgradAksjonspunktPanelImpl.buildInitialValues(bg, [ap]);
    expect(initialValues.dekningsgrad).toBe(100);
    expect(initialValues.begrunnDekningsgradEndring).toBe('Testing testing');
  });

  it('Skal teste transformValues ved løst aksjonspunkt', () => {
    const values = {
      dekningsgrad: 80,
      begrunnDekningsgradEndring: 'Dette er en test',
    };
    const transformedValues = DekningsgradAksjonspunktPanelImpl.transformValues(values);
    expect(transformedValues.begrunnelse).toBe('Dette er en test');
    expect(transformedValues.kode).toBe(AksjonspunktCode.VURDER_DEKNINGSGRAD);
    expect(transformedValues.dekningsgrad).toBe(80);
  });
});
