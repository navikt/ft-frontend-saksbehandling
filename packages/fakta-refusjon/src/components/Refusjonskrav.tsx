import { FormattedMessage } from 'react-intl';

import { Heading, Table, VStack } from '@navikt/ds-react';

export const Refusjonskrav = () => (
  <VStack gap="space-20">
    <Heading size="xsmall" level="3">
      <FormattedMessage id="Refusjonskrav.Tittel" />
    </Heading>

    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <FormattedMessage id="Refusjonskrav.Tabell.Arbeidsgiver" />
          </Table.HeaderCell>
          <Table.HeaderCell>
            <FormattedMessage id="Refusjonskrav.Tabell.RefusjonFra" />
          </Table.HeaderCell>
          <Table.HeaderCell align="right">
            <FormattedMessage id="Refusjonskrav.Tabell.RefusjonbeløpPrMnd" />
          </Table.HeaderCell>
          <Table.HeaderCell>
            <FormattedMessage id="Refusjonskrav.Tabell.SendtInnEndret" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{/* tabell rader */}</Table.Body>
    </Table>
  </VStack>
);
