import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { FamilieHendelseType } from '@navikt/ft-kodeverk';
import { FagsakHendelse } from '@navikt/ft-types';
import { StrollerIcon } from '@navikt/aksel-icons';

import { HStack } from '@navikt/ds-react';
import VisittkortBarnInfoFodselPanel from './VisittkortBarnInfoFodselPanel';
import VisittkortBarnInfoOmsorgPanel from './VisittkortBarnInfoOmsorgPanel';

import styles from './visittkortBarnInfoPanel.module.css';

export interface OwnProps {
  familiehendelse: FagsakHendelse;
}

const VisittkortBarnInfoPanel: FunctionComponent<OwnProps> = ({ familiehendelse }) => {
  const intl = useIntl();

  const erFodselEllerTerminSoknad =
    familiehendelse.hendelseType === FamilieHendelseType.FODSEL ||
    familiehendelse.hendelseType === FamilieHendelseType.TERMIN;

  return (
    <div className={styles.container}>
      <HStack>
        <div className={styles.image}>
          <StrollerIcon title={intl.formatMessage({ id: 'VisittkortBarnInfoPanel.Barnevogn' })} fontSize="1.5rem" />
        </div>
        {erFodselEllerTerminSoknad && <VisittkortBarnInfoFodselPanel familiehendelse={familiehendelse} />}
        {!erFodselEllerTerminSoknad && <VisittkortBarnInfoOmsorgPanel familiehendelse={familiehendelse} />}
      </HStack>
    </div>
  );
};

export default VisittkortBarnInfoPanel;
