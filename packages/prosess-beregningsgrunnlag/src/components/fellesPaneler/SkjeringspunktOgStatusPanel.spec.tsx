import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import aktivitetStatus from '@ft-frontend-saksbehandling/kodeverk/src/aktivitetStatus';
import { DateLabel } from '@ft-frontend-saksbehandling/shared-components';
import { AlleKodeverk } from '@ft-frontend-saksbehandling/types';
import { SkjeringspunktOgStatusPanelImpl } from './SkjeringspunktOgStatusPanel';

const skjeringstidspunktDato = '2017-12-12';
const aktivitetstatusList = [aktivitetStatus.ARBEIDSTAKER, aktivitetStatus.FRILANSER];

const getKodeverknavn = (kode) => {
  if (kode === aktivitetStatus.ARBEIDSTAKER) {
    return 'Arbeidstaker';
  }
  if (kode === aktivitetStatus.FRILANSER) {
    return 'Frilanser';
  }

  return '';
};

describe('<SkjeringspunktOgStatusPanel>', () => {
  it('Skal teste at komponenten renderer riktig skjeringstidspunkt', () => {
    const wrapper = shallow(<SkjeringspunktOgStatusPanelImpl
      aktivitetStatusList={aktivitetstatusList}
      skjeringstidspunktDato={skjeringstidspunktDato}
      getKodeverknavn={getKodeverknavn}
      alleKodeverk={{} as AlleKodeverk}
    />);

    const messages = wrapper.find(FormattedMessage);
    expect(messages).toHaveLength(1);
    expect(messages.first().props().id).toBe('Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning');
    const dato = wrapper.find(DateLabel);
    expect(dato.first().props().dateString).toBe(skjeringstidspunktDato);
  });
});
