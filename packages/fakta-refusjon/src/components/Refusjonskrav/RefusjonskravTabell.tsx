import type { ReactNode } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon, PersonPencilFillIcon } from '@navikt/aksel-icons';
import { Heading, HStack, Table, VStack } from '@navikt/ds-react';

import { BeløpLabel, DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { RefusjonskravFormRad } from './formValues';

import styles from './RefusjonskravTabell.module.css';

interface Props {
  rader: RefusjonskravFormRad[];
  renderRowContent: (krav: RefusjonskravFormRad, index: number) => ReactNode;
  åpneRader: Set<number>;
  onOpenChange: (index: number, open: boolean) => void;
}

export const RefusjonskravTabell = ({ rader, renderRowContent, åpneRader, onOpenChange }: Props) => {
  const intl = useIntl();

  return (
    <VStack gap="space-20">
      <Heading size="xsmall" level="3">
        <FormattedMessage id="RefusjonskravTabell.Tittel" />
      </Heading>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravTabell.Arbeidsgiver" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravTabell.RefusjonFra" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right">
              <FormattedMessage id="RefusjonskravTabell.RefusjonsbeløpPrMnd" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravTabell.SendtInnEndret" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravTabell.Utfall" />
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rader.map((krav, index) => {
            const content = renderRowContent(krav, index);

            return (
              <Table.ExpandableRow
                key={`${krav.arbeidsgiverIdent}-${krav.fom}-${krav.tom}`}
                content={content}
                togglePlacement="right"
                className={krav.utfall ? undefined : styles.warningRow}
                open={åpneRader.has(index)}
                onOpenChange={open => onOpenChange(index, open)}
                expandOnRowClick
                expansionDisabled={content == null}
              >
                <Table.DataCell>
                  <HStack gap="space-8" wrap={false}>
                    {!krav.utfall && (
                      <ExclamationmarkTriangleFillIcon
                        title={intl.formatMessage({ id: 'RefusjonskravTabell.UtfallMangler' })}
                        color="var(--ax-text-warning-decoration)"
                        fontSize="1.25rem"
                      />
                    )}
                    {krav.arbeidsgiverNavn}
                  </HStack>
                </Table.DataCell>

                <Table.DataCell>
                  <PeriodLabel dateStringFom={krav.fom} dateStringTom={krav.tom} />
                </Table.DataCell>

                <Table.DataCell align="right">
                  <BeløpLabel beløp={krav.refusjonsbeløpPrMnd} kr />
                </Table.DataCell>

                <Table.DataCell>
                  <DateLabel dateString={krav.datoForInnsendtEllerEndretIM} />
                </Table.DataCell>

                <Table.DataCell>
                  <HStack gap="space-8" wrap={false}>
                    {krav.kilde === 'SAKSBEHANDLER' && (
                      <PersonPencilFillIcon
                        title={intl.formatMessage({ id: 'RefusjonskravTabell.EndretAvSaksbehandler' })}
                        fontSize="1.5rem"
                        color="var(--ax-text-warning-decoration)"
                      />
                    )}
                    {krav.utfall && getUtfallTekst(krav.utfall)}
                  </HStack>
                </Table.DataCell>
              </Table.ExpandableRow>
            );
          })}
        </Table.Body>
      </Table>
    </VStack>
  );
};

const getUtfallTekst = (utfall: NonNullable<RefusjonskravFormRad['utfall']>) => {
  switch (utfall) {
    case 'INNVILGET':
      return <FormattedMessage id="RefusjonskravTabell.Utfall.INNVILGET" />;
    case 'AVSLÅTT':
      return <FormattedMessage id="RefusjonskravTabell.Utfall.AVSLÅTT" />;
    case 'REDUSERT':
      return <FormattedMessage id="RefusjonskravTabell.Utfall.REDUSERT" />;
  }
};
