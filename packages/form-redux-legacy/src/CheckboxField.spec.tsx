import React from 'react';
import { mountFieldComponent } from '@navikt/ft-utils-test/src/redux-form-test-helper';
import sinon from 'sinon';

import { RenderCheckboxField } from './CheckboxField';

describe('<CheckboxField>', () => {
  it('skal kalle onChange med boolsk verdi for checked', () => {
    const onChange = sinon.spy();
    // @ts-ignore Fiks
    const wrapper = mountFieldComponent(<RenderCheckboxField />, { onChange });
    const checkbox = wrapper.find('input');

    checkbox.simulate('change', { target: { checked: true } });

    expect(onChange.called).toBe(true);
    const { args } = onChange.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toBe(true);

    checkbox.simulate('change', { target: { checked: false } });

    const args2 = onChange.getCalls()[0].args;
    expect(args2).toHaveLength(1);
    expect(args2[0]).toBe(true);
  });

  it('skal initialisere checked med verdi fra input', () => {
    // @ts-ignore Fiks
    const wrapperTrue = mountFieldComponent(<RenderCheckboxField />, { value: true });
    const checkboxTrue = wrapperTrue.find('input');

    expect(checkboxTrue.props().checked).toBe(true);

    // @ts-ignore Fiks
    const wrapperFalse = mountFieldComponent(<RenderCheckboxField />, { value: false });
    const checkboxFalse = wrapperFalse.find('input');

    expect(checkboxFalse.props().checked).toBe(false);
  });
});
