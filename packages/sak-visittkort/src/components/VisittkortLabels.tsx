import React, { useMemo, FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { useIntl, FormattedMessage } from 'react-intl';
import { Tag, Tooltip } from '@navikt/ds-react';
import { DiskresjonskodeType } from '@navikt/ft-kodeverk';
import { FagsakPerson } from '@navikt/ft-types';
import { dateFormat } from '@navikt/ft-utils';

interface Props {
  fagsakPerson: FagsakPerson;
  harVerge: boolean;
}

const VisittkortLabels: FunctionComponent<Props> = ({ fagsakPerson, harVerge }) => {
  const intl = useIntl();
  const erSokerUnder18 = useMemo(() => dayjs().diff(fagsakPerson.fødselsdato, 'years') < 18, [fagsakPerson]);
  return (
    <>
      {fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.DodTittel' })} placement="bottom">
          <Tag variant="neutral" size="small">
            <FormattedMessage id="VisittkortLabels.Dod" values={{ dato: dateFormat(fagsakPerson.dodsdato) }} />
          </Tag>
        </Tooltip>
      )}
      {fagsakPerson.diskresjonskode === DiskresjonskodeType.KODE6 && !fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Diskresjon6Tittel' })} placement="bottom">
          <Tag variant="error" size="small">
            <FormattedMessage id="VisittkortLabels.Diskresjon6" />
          </Tag>
        </Tooltip>
      )}
      {fagsakPerson.diskresjonskode === DiskresjonskodeType.KODE7 && !fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Diskresjon7Tittel' })} placement="bottom">
          <Tag variant="warning" size="small">
            <FormattedMessage id="VisittkortLabels.Diskresjon7" />
          </Tag>
        </Tooltip>
      )}
      {harVerge && !fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.VergeTittel' })} placement="bottom">
          <Tag variant="info" size="small">
            <FormattedMessage id="VisittkortLabels.Verge" />
          </Tag>
        </Tooltip>
      )}
      {erSokerUnder18 && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Under18Tittel' })} placement="bottom">
          <Tag variant="info" size="small">
            <FormattedMessage id="VisittkortLabels.Under18" />
          </Tag>
        </Tooltip>
      )}
    </>
  );
};

export default VisittkortLabels;
