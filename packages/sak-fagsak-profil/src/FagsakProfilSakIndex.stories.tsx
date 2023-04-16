import React from 'react';
import { Button } from '@navikt/ds-react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { FagsakStatus, FagsakYtelseType } from '@navikt/ft-kodeverk';

import FagsakProfilSakIndex from './FagsakProfilSakIndex';

import '@navikt/ft-ui-komponenter/dist/style.css';

export default {
  title: 'sak/sak-fagsak-profil',
  component: FagsakProfilSakIndex,
};

const FAGSAK_STATUS_KODEVERK = 'FAGSAK_STATUS';
const FAGSAK_YTELSE_KODEVERK = 'FAGSAK_YTELSE';

const Template: Story = () => (
  <div style={{ width: '600px', backgroundColor: 'white', padding: '30px' }}>
    <FagsakProfilSakIndex
      saksnummer="232341251"
      fagsakYtelseType={{
        kode: FagsakYtelseType.FORELDREPENGER,
        kodeverk: FAGSAK_YTELSE_KODEVERK,
        navn: 'Foreldrepenger',
      }}
      fagsakStatus={{ kode: FagsakStatus.OPPRETTET, kodeverk: FAGSAK_STATUS_KODEVERK, navn: 'Opprettet' }}
      renderBehandlingMeny={() => <Button>Meny (Placeholder)</Button>}
      renderBehandlingVelger={() => <div>Liste (placeholder)</div>}
      dekningsgrad={100}
    />
  </div>
);

export const Default = Template.bind({});
