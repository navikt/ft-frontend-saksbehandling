import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import { FamilieHendelseType } from '@navikt/ft-kodeverk';
import { createIntl } from '@navikt/ft-utils';
import VisittkortBarnInfoOmsorgPanel from './VisittkortBarnInfoOmsorgPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<VisittkortBarnInfoOmsorgPanel>', () => {
  const familiehendelse = {
    hendelseType: FamilieHendelseType.ADOPSJON,
    hendelseDato: '2020-01-21',
    antallBarn: 1,
    dødfødsel: false,
  };

  it('skal vise adopsjonsinformasjon', async () => {
    render(
      <RawIntlProvider value={intl}>
        <VisittkortBarnInfoOmsorgPanel familiehendelse={familiehendelse} />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Adopsjon 21.01.2020')).toBeInTheDocument();
  });

  it('skal vise foreldreansvarsinformasjon', async () => {
    render(
      <RawIntlProvider value={intl}>
        <VisittkortBarnInfoOmsorgPanel
          familiehendelse={{
            ...familiehendelse,
            hendelseType: FamilieHendelseType.OMSORG,
          }}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Foreldreansvar 21.01.2020')).toBeInTheDocument();
  });
});
