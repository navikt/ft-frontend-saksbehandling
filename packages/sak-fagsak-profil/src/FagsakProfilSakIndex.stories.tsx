import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { FagsakStatus, FagsakYtelseType } from '@navikt/ft-kodeverk';

import FagsakProfilSakIndex from './FagsakProfilSakIndex';

import '@navikt/ft-ui-komponenter/dist/style.css';

export default {
  title: 'sak/sak-fagsak-profil',
  component: FagsakProfilSakIndex,
};

const FAGSAK_STATUS_KODEVERK = 'FAGSAK_STATUS';
const FAGSAK_YTELSE_KODEVERK = 'FAGSAK_YTELSE';

const Template: StoryFn = () => (
  <div style={{ width: '600px', backgroundColor: 'white', padding: '30px' }}>
    <FagsakProfilSakIndex
      saksnummer="232341251"
      fagsakYtelseType={{
        kode: FagsakYtelseType.FORELDREPENGER,
        kodeverk: FAGSAK_YTELSE_KODEVERK,
        navn: 'Foreldrepenger',
      }}
      fagsakMarkeringTekst={['Næring']}
      fagsakStatus={{ kode: FagsakStatus.OPPRETTET, kodeverk: FAGSAK_STATUS_KODEVERK, navn: 'Opprettet' }}
      dekningsgrad={100}
    />
  </div>
);

export const Default = Template.bind({});
