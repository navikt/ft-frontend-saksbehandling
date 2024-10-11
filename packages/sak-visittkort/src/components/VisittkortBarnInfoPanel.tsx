import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { FamilieHendelseType } from '@navikt/ft-kodeverk';
import { FagsakHendelse } from '@navikt/ft-types';
import { StrollerIcon } from '@navikt/aksel-icons';
import { VisittKort } from '@navikt/ft-plattform-komponenter';

import VisittkortBarnInfoFodselPanel from './VisittkortBarnInfoFodselPanel';
import VisittkortBarnInfoOmsorgPanel from './VisittkortBarnInfoOmsorgPanel';

export interface OwnProps {
  familiehendelse: FagsakHendelse;
}
const VisittkortBarnInfoPanel: FunctionComponent<OwnProps> = ({ familiehendelse }) => {
  const intl = useIntl();
  const ikon = (
    <StrollerIcon
      title={intl.formatMessage({ id: 'VisittkortBarnInfoPanel.Barnevogn' })}
      height={24}
      width={24}
      color="white"
      style={{ backgroundColor: 'var(--a-gray-400)', borderRadius: '50%', padding: '2px' }}
    />
  );

  const erFodselEllerTerminSoknad =
    familiehendelse.hendelseType === FamilieHendelseType.FODSEL ||
    familiehendelse.hendelseType === FamilieHendelseType.TERMIN;

  return (
    <VisittKort icon={ikon}>
      {erFodselEllerTerminSoknad && <VisittkortBarnInfoFodselPanel familiehendelse={familiehendelse} />}
      {!erFodselEllerTerminSoknad && <VisittkortBarnInfoOmsorgPanel familiehendelse={familiehendelse} />}
    </VisittKort>
  );
};

export default VisittkortBarnInfoPanel;
