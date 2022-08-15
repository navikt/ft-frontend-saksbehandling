import React, { FunctionComponent } from 'react';
import { FlexColumn, FlexContainer, FlexRow, Image } from '@navikt/ft-ui-komponenter';
import { FamilieHendelseType } from '@navikt/ft-kodeverk';
import { FagsakHendelse } from '@navikt/ft-types';

import barnevognImage from '../images/barnevogn.svg';
import VisittkortBarnInfoFodselPanel from './VisittkortBarnInfoFodselPanel';
import VisittkortBarnInfoOmsorgPanel from './VisittkortBarnInfoOmsorgPanel';

import styles from './visittkortBarnInfoPanel.less';

interface OwnProps {
  familiehendelse: FagsakHendelse;
}

const VisittkortBarnInfoPanel: FunctionComponent<OwnProps> = ({ familiehendelse }) => {
  const erFodselEllerTerminSoknad =
    familiehendelse.hendelseType === FamilieHendelseType.FODSEL ||
    familiehendelse.hendelseType === FamilieHendelseType.TERMIN;

  return (
    <div className={styles.container}>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.image}>
            <Image src={barnevognImage} />
          </FlexColumn>
          {erFodselEllerTerminSoknad && <VisittkortBarnInfoFodselPanel familiehendelse={familiehendelse} />}
          {!erFodselEllerTerminSoknad && <VisittkortBarnInfoOmsorgPanel familiehendelse={familiehendelse} />}
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default VisittkortBarnInfoPanel;
