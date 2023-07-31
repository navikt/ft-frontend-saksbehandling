import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { FlexColumn } from '@navikt/ft-ui-komponenter';
import { FagsakHendelse } from '@navikt/ft-types';
import { FamilieHendelseType } from '@navikt/ft-kodeverk';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import styles from './visittkortBarnInfoOmsorgPanel.module.css';

export interface OwnProps {
  familiehendelse: FagsakHendelse;
}

const VisittkortBarnInfoOmsorgPanel: FunctionComponent<OwnProps> = ({ familiehendelse }) => {
  const { hendelseType, hendelseDato, antallBarn } = familiehendelse;

  const erAdopsjon = hendelseType === FamilieHendelseType.ADOPSJON;

  const foreldreansvarTekstkode =
    antallBarn === 1
      ? 'VisittkortBarnInfoOmsorgPanel.Foreldreansvar'
      : 'VisittkortBarnInfoOmsorgPanel.ForeldreansvarAntallBarn';
  const adopsjonTekstkode =
    antallBarn === 1 ? 'VisittkortBarnInfoOmsorgPanel.Adopsjon' : 'VisittkortBarnInfoOmsorgPanel.AdopsjonAntallBarn';

  return (
    <FlexColumn className={styles.text}>
      <BodyShort size="small">
        <FormattedMessage
          id={erAdopsjon ? adopsjonTekstkode : foreldreansvarTekstkode}
          values={{ antall: antallBarn, dato: moment(hendelseDato).format(DDMMYYYY_DATE_FORMAT) }}
        />
      </BodyShort>
    </FlexColumn>
  );
};

export default VisittkortBarnInfoOmsorgPanel;
