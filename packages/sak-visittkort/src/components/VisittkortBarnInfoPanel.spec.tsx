import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import { FamilieHendelseType } from '@navikt/ft-kodeverk';
import { createIntl } from '@navikt/ft-utils';
import VisittkortBarnInfoPanel from './VisittkortBarnInfoPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<VisittkortBarnInfoPanel>', () => {
  const familiehendelse = {
    hendelseType: FamilieHendelseType.FODSEL,
    hendelseDato: '2020-01-01',
    antallBarn: 1,
    dødfødsel: false,
  };

  it('skal vise panel for fødsel', async () => {
    render(
      <RawIntlProvider value={intl}>
        <VisittkortBarnInfoPanel familiehendelse={familiehendelse} />
      </RawIntlProvider>,
    );

    expect(await screen.findByText(/Født 01.01.2020/)).toBeInTheDocument();
  });

  it('skal vise panel for omsorg', async () => {
    render(
      <RawIntlProvider value={intl}>
        <VisittkortBarnInfoPanel
          familiehendelse={{
            ...familiehendelse,
            hendelseType: FamilieHendelseType.OMSORG,
          }}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Foreldreansvar 01.01.2020')).toBeInTheDocument();
  });
});
