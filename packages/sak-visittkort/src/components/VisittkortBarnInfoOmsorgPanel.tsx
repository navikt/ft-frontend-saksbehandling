import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { FagsakHendelse } from '@navikt/ft-types';
import { FamilieHendelseType } from '@navikt/ft-kodeverk';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

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
    <BodyShort>
      <FormattedMessage
        id={erAdopsjon ? adopsjonTekstkode : foreldreansvarTekstkode}
        values={{ antall: antallBarn, dato: dayjs(hendelseDato).format(DDMMYYYY_DATE_FORMAT) }}
      />
    </BodyShort>
  );
};

export default VisittkortBarnInfoOmsorgPanel;
