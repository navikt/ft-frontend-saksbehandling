import React from 'react';

import { shallowWithIntl } from '@navikt/ft-utils-test';

import NyIArbeidslivetSNForm from './NyIArbeidslivetSNForm';
import messages from '../../../../i18n/nb_NO.json';

describe.skip('<NyIArbeidslivetSNForm>', () => {
  it('skal teste at korrekt antall radioknapper vises med korrekte props', () => {
    const wrapper = shallowWithIntl(<NyIArbeidslivetSNForm readOnly={false} />, messages);
    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);
    expect(radios.last().prop('disabled')).toEqual(false);
  });
});
