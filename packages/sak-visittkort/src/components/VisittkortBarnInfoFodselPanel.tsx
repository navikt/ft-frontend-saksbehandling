import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { Tag, BodyShort } from '@navikt/ds-react/esm';
import { FlexColumn } from '@navikt/ft-ui-komponenter';
import { FagsakHendelse } from '@navikt/ft-types';
import { FamilieHendelseType } from '@navikt/ft-kodeverk';
import { dateFormat, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import styles from './visittkortBarnInfoFodselPanel.module.css';

const finnFodselsdatoTekstkode = (antallBarn: number): string => {
  if (antallBarn === 1) {
    return 'VisittkortBarnInfoFodselPanel.Fodt';
  }
  return antallBarn === 2 ? 'VisittkortBarnInfoFodselPanel.Tvillinger' : 'VisittkortBarnInfoFodselPanel.Flerlinger';
};

const finnAlderTekstProps = (fødselsdato: string) => {
  const ar = moment().diff(fødselsdato, 'years');
  const maneder = moment().diff(fødselsdato, 'months');
  const dager = moment().diff(fødselsdato, 'days');

  if (ar < 0 || maneder < 0 || dager < 0) {
    throw new Error('Fødselsdato kan ikke være i fremtiden');
  }

  let tekstkode;
  if (ar > 0) {
    tekstkode = 'VisittkortBarnInfoFodselPanel.Ar.Fodt';
  } else if (maneder > 0) {
    tekstkode = 'VisittkortBarnInfoFodselPanel.Maned.Fodt';
  } else if (dager >= 0) {
    if (dager === 1) {
      tekstkode = 'VisittkortBarnInfoFodselPanel.Dag.Fodt';
    }
    if (dager === 0 || dager > 1) {
      tekstkode = 'VisittkortBarnInfoFodselPanel.Dager.Fodt';
    }
  }

  return {
    id: tekstkode,
    values: {
      value: ar || maneder || dager,
    },
  };
};

interface OwnProps {
  familiehendelse: FagsakHendelse;
}

const VisittkortBarnInfoFodselPanel: FunctionComponent<OwnProps> = ({ familiehendelse }) => {
  const intl = useIntl();
  const { hendelseType, hendelseDato, antallBarn, dødfødsel } = familiehendelse;

  const visFødselsdato = hendelseType === FamilieHendelseType.FODSEL;

  return (
    <>
      <FlexColumn className={styles.text}>
        <BodyShort size="small">
          {visFødselsdato && !!hendelseDato && antallBarn > 0 && (
            <>
              <FormattedMessage
                id={finnFodselsdatoTekstkode(antallBarn)}
                values={{ dato: moment(hendelseDato).format(DDMMYYYY_DATE_FORMAT) }}
              />
              {!dødfødsel && <FormattedMessage {...finnAlderTekstProps(hendelseDato)} />}
            </>
          )}
          {visFødselsdato && (!hendelseDato || antallBarn === 0) && (
            <FormattedMessage id="VisittkortBarnInfoFodselPanel.ManglerFodselOpplysninger" />
          )}
          {!visFødselsdato && (
            <FormattedMessage id="VisittkortBarnInfoFodselPanel.Termin" values={{ dato: dateFormat(hendelseDato) }} />
          )}
        </BodyShort>
      </FlexColumn>
      {dødfødsel && (
        <FlexColumn className={styles.etikett}>
          <Tag variant="info" title={intl.formatMessage({ id: 'VisittkortBarnInfoFodselPanel.DodTittel' })}>
            <FormattedMessage id="VisittkortBarnInfoFodselPanel.Dod" />
          </Tag>
        </FlexColumn>
      )}
    </>
  );
};

export default VisittkortBarnInfoFodselPanel;
