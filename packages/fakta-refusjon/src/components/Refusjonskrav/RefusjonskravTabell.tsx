import type { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { FileTextIcon } from '@navikt/aksel-icons';
import { Button, Heading, Table, Tag, VStack } from '@navikt/ds-react';

import { BeløpLabel, DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { Saksdokument } from '../../types/dataTypes';
import type { RefusjonsAndelTilVisning } from './formValues';

interface Props {
  rader: RefusjonsAndelTilVisning[];
  dokumenter: Saksdokument[];
  åpneDokument: (journalpostId: string, dokumentId: string) => void;
  renderRowContent: (andel: RefusjonsAndelTilVisning, andelIndex: number) => ReactNode;
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
  const harOverstyrteRader = rader.some(andel => andel.kilde === 'SAKSBEHANDLER');

  return (
    <VStack gap="space-20">
      <Heading size="xsmall" level="3">
        <FormattedMessage id="RefusjonskravTabell.Tittel" />
      </Heading>

      <Table style={{ width: 'fit-content' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravTabell.Arbeidsgiver" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravTabell.RefusjonFra" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravForm.RefusjonsbeløpPrMnd" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravTabell.SendtInn" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="RefusjonskravTabell.Inntektsmelding" />
            </Table.HeaderCell>
            {harOverstyrteRader && <Table.HeaderCell />}
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
                  {refusjonsperioder.map(krav => (
                    <div key={`${krav.fom}-${krav.tom}`}>
                      <PeriodLabel dateStringFom={krav.fom} dateStringTom={krav.tom} />
                    </div>
                  ))}
                </Table.DataCell>

                <Table.DataCell>
                  {refusjonsperioder.map(krav => (
                    <div key={`${krav.fom}-${krav.tom}`}>
                      <BeløpLabel beløp={krav.refusjonsbeløpPrMnd} kr />
                    </div>
                  ))}
                </Table.DataCell>

                <Table.DataCell>
                  {refusjonsperioder.map(krav => (
                    <div key={`${krav.fom}-${krav.tom}`}>
                      <DateLabel dateString={krav.datoForInnsendtEllerEndretIM} />
                    </div>
                  ))}
                </Table.DataCell>

                <Table.DataCell>
                  {dokument && (
                    <Button
                      type="button"
                      variant="tertiary"
                      size="small"
                      icon={<FileTextIcon aria-hidden />}
                      onClick={event => {
                        event.stopPropagation();
                        åpneDokument(dokument.journalpostId, dokument.dokumentId);
                      }}
                    >
                      <FormattedMessage id="RefusjonskravTabell.ÅpneInntektsmelding" />
                    </Button>
                  )}
                </Table.DataCell>
                {harOverstyrteRader && (
                  <Table.DataCell>
                    {andel.kilde === 'SAKSBEHANDLER' && (
                      <Tag size="small" variant="moderate" data-color="warning">
                        <FormattedMessage id="RefusjonskravTabell.Overstyrt" />
                      </Tag>
                    )}
                  </Table.DataCell>
                )}
              </Table.ExpandableRow>
            );
          })}
        </Table.Body>
      </Table>
    </VStack>
  );
};
