import React from 'react';
import { FormattedMessage } from 'react-intl';

import { shallowWithIntl } from '@ft-frontend-saksbehandling/utils-test/src/intl-enzyme-test-helper';
import diskresjonskodeType from '@ft-frontend-saksbehandling/kodeverk/src/diskresjonskodeType';

import MerkePanel from './Merkepanel';
import messages from '../../i18n/nb_NO.json';

describe('<MerkePanel>', () => {
  it('skal sjekke at kun merking om død vises når fpsak.person er død', () => {
    const wrapper = shallowWithIntl(<MerkePanel
      erDod
      erNAVAnsatt
      erVerge
      diskresjonskode={diskresjonskodeType.KODE6}
    />, messages);
    expect(wrapper.find(FormattedMessage).prop('id')).toBe('MerkePanel.Dod');
  });
});
