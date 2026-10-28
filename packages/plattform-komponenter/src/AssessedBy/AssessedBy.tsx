import { use } from 'react';

import { PersonPencilFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack } from '@navikt/ds-react';

import { createIntl, dateFormat } from '@navikt/ft-utils';

import { SaksbehandlernavnContext } from './SaksbehandlernavnContext';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  date?: string;
  ident?: string;
}

export const AssessedBy = ({ ident, date }: Props) => {
  const saksbehandlernavn = use(SaksbehandlernavnContext);
  if (!ident) {
    return null;
  }
  const name = saksbehandlernavn[ident] ?? ident;
  const formattedDate = date ? `, ${dateFormat(date)}` : '';

  return (
    <HStack gap="space-8" wrap={false} marginBlock="space-8">
      <span>
        <PersonPencilFillIcon fontSize="1rem" aria-hidden />
      </span>
      <BodyShort size="small" as="span">
        {intl.formatMessage({ id: 'AssessedBy.VurderingAv' }, { name, date: formattedDate })}
      </BodyShort>
    </HStack>
  );
};
