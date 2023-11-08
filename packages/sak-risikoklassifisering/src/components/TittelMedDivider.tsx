import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, HStack } from '@navikt/ds-react';

export interface OwnProps {
  ikon: ReactElement;
  tittel: string;
}

/**
 * TittelMedDivider
 *
 * Viser et ikon og en tittel skilt med en vertikal grå linje.
 */
const TittelMedDivider: FunctionComponent<OwnProps> = ({ ikon, tittel }) => (
  <HStack gap="4" align="center">
    {ikon}
    <Label size="small">
      <FormattedMessage id={tittel} />
    </Label>
  </HStack>
);

export default TittelMedDivider;
