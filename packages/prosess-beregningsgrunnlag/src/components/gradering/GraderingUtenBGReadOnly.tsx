import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, VStack } from '@navikt/ds-react';

import type { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { EditedIcon } from '@navikt/ft-ui-komponenter';

import styles from './graderingUtenBGReadOnly.module.css';

type Props = {
  avklaringsbehov: BeregningAvklaringsbehov;
};

/**
 * Visning av begrunnelse for aksjonspunkt 5050 som ble avviklet i 2019.
 * Vil ikke lenger oppstå men vi må kunne vise begrunnelsen som ble
 * oppgitt av saksbehandler og en kort beskrivelse av aksjonspunktet.
 */
export const GraderingUtenBGReadOnly = ({ avklaringsbehov }: Props) => {
  if (!avklaringsbehov || !avklaringsbehov.begrunnelse) {
    return null;
  }
  return (
    <VStack gap="4">
      <Label size="small">
        <FormattedMessage id="GraderingUtenBGReadOnly.Label" />
      </Label>
      <BodyShort size="small" className={styles.readOnlyBlokk}>
        {avklaringsbehov.begrunnelse} <EditedIcon />
      </BodyShort>
    </VStack>
  );
};
