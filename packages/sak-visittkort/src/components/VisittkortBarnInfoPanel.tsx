import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { FamilieHendelseType } from '@navikt/ft-kodeverk';
import { FagsakHendelse } from '@navikt/ft-types';
import { StrollerIcon } from '@navikt/aksel-icons';

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
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.image}>
            <StrollerIcon title={intl.formatMessage({ id: 'VisittkortBarnInfoPanel.Barnevogn' })} fontSize="1.5rem" />
          </FlexColumn>
          {erFodselEllerTerminSoknad && <VisittkortBarnInfoFodselPanel familiehendelse={familiehendelse} />}
          {!erFodselEllerTerminSoknad && <VisittkortBarnInfoOmsorgPanel familiehendelse={familiehendelse} />}
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default VisittkortBarnInfoPanel;
