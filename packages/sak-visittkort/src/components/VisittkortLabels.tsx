import React, { useMemo, FunctionComponent } from 'react';
import moment from 'moment';
import { useIntl, FormattedMessage } from 'react-intl';
import { Tag } from '@navikt/ds-react/esm';
import { Tooltip } from '@navikt/ft-ui-komponenter';
import { DiskresjonskodeType } from '@navikt/ft-kodeverk';
import { FagsakPerson } from '@navikt/ft-types';
import { dateFormat } from '@navikt/ft-utils';

import styles from './visittkortLabels.module.css';

interface OwnProps {
  fagsakPerson: FagsakPerson;
  harVerge: boolean;
}

const VisittkortLabels: FunctionComponent<OwnProps> = ({ fagsakPerson, harVerge }) => {
  const intl = useIntl();
  const erSokerUnder18 = useMemo(() => moment().diff(fagsakPerson.fødselsdato, 'years') < 18, [fagsakPerson]);
  return (
    <>
      {fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.DodTittel' })} alignBottom>
          <Tag variant="info" className={styles.etikett}>
            <FormattedMessage id="VisittkortLabels.Dod" values={{ dato: dateFormat(fagsakPerson.dodsdato) }} />
          </Tag>
        </Tooltip>
      )}
      {fagsakPerson.diskresjonskode === DiskresjonskodeType.KODE6 && !fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Diskresjon6Tittel' })} alignBottom>
          <Tag variant="error" className={styles.etikett}>
            <FormattedMessage id="VisittkortLabels.Diskresjon6" />
          </Tag>
        </Tooltip>
      )}
      {fagsakPerson.diskresjonskode === DiskresjonskodeType.KODE7 && !fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Diskresjon7Tittel' })} alignBottom>
          <Tag variant="warning" className={styles.etikett}>
            <FormattedMessage id="VisittkortLabels.Diskresjon7" />
          </Tag>
        </Tooltip>
      )}
      {harVerge && !fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.VergeTittel' })} alignBottom>
          <Tag variant="info" className={styles.etikett}>
            <FormattedMessage id="VisittkortLabels.Verge" />
          </Tag>
        </Tooltip>
      )}
      {erSokerUnder18 && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Under18Tittel' })} alignBottom>
          <Tag variant="info" className={styles.etikett}>
            <FormattedMessage id="VisittkortLabels.Under18" />
          </Tag>
        </Tooltip>
      )}
    </>
  );
};

export default VisittkortLabels;
