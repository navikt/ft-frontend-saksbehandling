import type { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { ArrowForwardIcon } from '@navikt/aksel-icons';
import { Button, Table, Tag } from '@navikt/ds-react';

import { BeløpLabel, DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { Saksdokument } from '../../types/dataTypes';
import type { RefusjonsAndelTilVisning } from './formValues';
import { refusjonsandelNøkkel } from './refusjonsandelNøkkel';

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
}: Props) => (
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
          <FormattedMessage id="RefusjonskravForm.RefusjonsbeløpPrMnd" />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <FormattedMessage id="RefusjonskravTabell.SendtInn" />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <FormattedMessage id="RefusjonskravTabell.Merknad" />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <FormattedMessage id="RefusjonskravTabell.Inntektsmelding" />
        </Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {rader.map((andel, index) => {
        const { refusjonsperioder, journalpostId, arbeidsgiverTittel } = andel;
        const content = renderRowContent(andel, index);
        const dokument = dokumenter.find(d => d.journalpostId === journalpostId);

        return (
          <Table.ExpandableRow
            key={refusjonsandelNøkkel(andel)}
            content={content}
            togglePlacement="right"
            open={åpneRader.has(index)}
            onOpenChange={open => onOpenChange(index, open)}
            expandOnRowClick
            expansionDisabled={content == null}
          >
            <Table.DataCell>{arbeidsgiverTittel}</Table.DataCell>

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
                  <BeløpLabel beløp={krav.refusjonPrMnd} kr />
                </div>
              ))}
            </Table.DataCell>

            <Table.DataCell>{dokument?.tidspunkt && <DateLabel dateString={dokument.tidspunkt} />}</Table.DataCell>

            <Table.DataCell>
              {andel.kilde === 'SAKSBEHANDLER' && (
                <Tag size="small" variant="moderate" data-color="warning">
                  <FormattedMessage id="RefusjonskravTabell.Overstyrt" />
                </Tag>
              )}
            </Table.DataCell>

            <Table.DataCell>
              {dokument && (
                <Button
                  type="button"
                  variant="secondary"
                  size="small"
                  icon={<ArrowForwardIcon aria-hidden />}
                  onClick={event => {
                    event.stopPropagation();
                    åpneDokument(dokument.journalpostId, dokument.dokumentId);
                  }}
                >
                  <FormattedMessage id="RefusjonskravTabell.ÅpnePDF" />
                </Button>
              )}
            </Table.DataCell>
          </Table.ExpandableRow>
        );
      })}
    </Table.Body>
  </Table>
);
