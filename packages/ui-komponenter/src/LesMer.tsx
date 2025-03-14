import { useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import styles from './lesMer.module.css';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  tekst: string;
  maksLengde: number;
}

export const LesMer = ({ tekst, maksLengde }: Props) => {
  const [visHeleTeksten, setVisHeleTeksten] = useState(false);

  return tekst.length <= maksLengde ? (
    <BodyShort size="small">{tekst}</BodyShort>
  ) : (
    <HStack justify="space-between" align="start" wrap={false}>
      <BodyShort size="small">{visHeleTeksten ? tekst : `${tekst.substring(0, maksLengde)}...`}</BodyShort>
      <Button
        className={styles.button}
        variant="tertiary"
        size="xsmall"
        type="button"
        icon={visHeleTeksten ? <ChevronUpIcon aria-hidden /> : <ChevronDownIcon aria-hidden />}
        onClick={() => setVisHeleTeksten(!visHeleTeksten)}
      >
        {visHeleTeksten ? intl.formatMessage({ id: 'LesMer.Skjul' }) : intl.formatMessage({ id: 'LesMer.LesMer' })}
      </Button>
    </HStack>
  );
};
