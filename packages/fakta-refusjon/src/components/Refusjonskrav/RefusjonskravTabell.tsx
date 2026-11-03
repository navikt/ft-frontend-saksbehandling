import type { ReactNode } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { PersonPencilFillIcon } from '@navikt/aksel-icons';
import { Button, Heading, Table, VStack } from '@navikt/ds-react';

import { BeløpLabel, DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { Saksdokument } from '../../types/dataTypes';
import type { RefusjonsAndelFormValues } from './formValues';

interface Props {
  rader: RefusjonsAndelFormValues[];
  dokumenter: Saksdokument[];
  åpneDokument: (journalpostId: string, dokumentId: string) => void;
  renderRowContent: (andel: RefusjonsAndelFormValues, andelIndex: number) => ReactNode;
  åpneRader: Set<number>;
  onOpenChange: (index: number, open: boolean) => void;
}

export const RefusjonskravTabell = ({
  rader,
  dokumenter,
  åpneDokument,
  renderRowContent,
  åpneRader,
  onOpenChange,
}: Props) => {
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
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravTabell.RefusjonsbeløpPrMnd" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravTabell.SendtInn" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravTabell.Inntektsmelding" />
            </Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rader.map((andel, index) => {
            const { refusjonsperioder, journalpostId, arbeidsgiverIdent, arbeidsgiverNavn } = andel;
            const content = renderRowContent(andel, index);
            const dokument = dokumenter.find(d => d.journalpostId === journalpostId);

            return (
              <Table.ExpandableRow
                key={arbeidsgiverIdent}
                content={content}
                togglePlacement="right"
                open={åpneRader.has(index)}
                onOpenChange={open => onOpenChange(index, open)}
                expandOnRowClick
                expansionDisabled={content == null}
              >
                <Table.DataCell>{arbeidsgiverNavn}</Table.DataCell>

                <Table.DataCell>
                  <VStack gap="space-8">
                    {refusjonsperioder.map(krav => (
                      <div key={`${krav.fom}-${krav.tom}`}>
                        <PeriodLabel dateStringFom={krav.fom} dateStringTom={krav.tom} />
                      </div>
                    ))}
                  </VStack>
                </Table.DataCell>

                <Table.DataCell>
                  <VStack gap="space-8">
                    {refusjonsperioder.map(krav => (
                      <div key={`${krav.fom}-${krav.tom}`}>
                        <BeløpLabel beløp={krav.refusjonsbeløpPrMnd} kr />
                      </div>
                    ))}
                  </VStack>
                </Table.DataCell>

                <Table.DataCell>
                  <VStack gap="space-8">
                    {refusjonsperioder.map(krav => (
                      <div key={`${krav.fom}-${krav.tom}`}>
                        <DateLabel dateString={krav.datoForInnsendtEllerEndretIM} />
                      </div>
                    ))}
                  </VStack>
                </Table.DataCell>

                <Table.DataCell>
                  {dokument && (
                    <Button
                      type="button"
                      variant="tertiary"
                      size="small"
                      aria-label={intl.formatMessage(
                        { id: 'RefusjonskravTabell.ÅpneInntektsmeldingFra' },
                        { arbeidsgiver: andel.arbeidsgiverNavn },
                      )}
                      onClick={event => {
                        event.stopPropagation();
                        åpneDokument(dokument.journalpostId, dokument.dokumentId);
                      }}
                    >
                      <FormattedMessage id="RefusjonskravTabell.ÅpneInntektsmelding" />
                    </Button>
                  )}
                </Table.DataCell>
                <Table.DataCell>
                  {andel.kilde === 'SAKSBEHANDLER' && (
                    <PersonPencilFillIcon
                      title={intl.formatMessage({ id: 'RefusjonskravTabell.EndretAvSaksbehandler' })}
                      fontSize="1.5rem"
                      color="var(--ax-text-warning-decoration)"
                    />
                  )}
                </Table.DataCell>
              </Table.ExpandableRow>
            );
          })}
        </Table.Body>
      </Table>
    </VStack>
  );
};
