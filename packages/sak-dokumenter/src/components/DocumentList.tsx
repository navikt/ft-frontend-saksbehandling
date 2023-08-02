import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import {
  StarFillIcon,
  ChevronRightDoubleIcon,
  ChevronLeftDoubleIcon,
  ChevronDownDoubleIcon,
} from '@navikt/aksel-icons';

import { DateTimeLabel, Table, TableColumn, TableRow, Tooltip } from '@navikt/ft-ui-komponenter';
import { Kommunikasjonsretning } from '@navikt/ft-kodeverk';
import { Dokument } from '@navikt/ft-types';

import styles from './documentList.module.css';

const headerTextCodes = [
  'DocumentList.Direction',
  'DocumentList.DocumentType',
  'DocumentList.Gjelder',
  'DocumentList.DateTime',
];

const isTextMoreThan25char = (text: string): boolean => !!text && text.length > 25;
const trimText = (text: string): string => `${text.substring(0, 24)}...`;

const markerSomValgtEllerÅpneDokumenter = (
  event: React.SyntheticEvent,
  setValgteDokumentIder: (ider: any) => void,
  erIMarkeringsmodus: boolean,
  id: string,
  valgteDokumentIder: string[],
  selectDocumentCallback: (e: React.SyntheticEvent, id?: number | string, dokument?: Dokument) => void,
  documents: Dokument[],
): void => {
  setValgteDokumentIder((ider: string[]) => {
    if (erIMarkeringsmodus) {
      return ider.includes(id) ? ider.filter(i => i !== id) : ider.concat([id]);
    }
    return ider.includes(id) ? ider : [id];
  });
  if (!erIMarkeringsmodus) {
    const dokumentIderSomSkalÅpnes = valgteDokumentIder.includes(id) ? valgteDokumentIder : [id];
    dokumentIderSomSkalÅpnes.forEach(dId =>
      selectDocumentCallback(
        event,
        dId,
        documents.find(d => d.dokumentId === dId),
      ),
    );
  }
};

export interface OwnProps {
  documents: Dokument[];
  behandlingUuid?: string;
  selectDocumentCallback: (e: React.SyntheticEvent, id?: number | string, dokument?: Dokument) => void;
}

type Timeout = ReturnType<typeof setTimeout>;

/**
 * DocumentList
 *
 * Presentasjonskomponent. Viser dokumenter i en liste. Tar også inn en callback-funksjon som blir
 * trigget når saksbehandler velger et dokument. Finnes ingen dokumenter blir det kun vist en label
 * som viser at ingen dokumenter finnes på fagsak.
 */
const DocumentList: FunctionComponent<OwnProps> = ({ documents, behandlingUuid, selectDocumentCallback }) => {
  const intl = useIntl();

  const [isShiftPressed, setShiftPressed] = useState(false);
  const [valgteDokumentIder, setValgteDokumentIder] = useState<string[]>([]);
  const timeoutMapRef = React.useRef<Record<string, Timeout | undefined>>({});

  useEffect(
    () => () => Object.values(timeoutMapRef).forEach((timeout?: Timeout) => timeout && clearTimeout(timeout)),
    [timeoutMapRef],
  );

  const dokumentKeyHandler = useCallback(
    (event: React.KeyboardEvent, id?: string) => {
      if (id === undefined) {
        return;
      }
      const isShiftKey = event.key === 'Shift';
      if (isShiftKey) {
        setShiftPressed(event.type === 'keydown');
      }

      if (!isShiftKey) {
        markerSomValgtEllerÅpneDokumenter(
          event,
          setValgteDokumentIder,
          isShiftPressed,
          id,
          valgteDokumentIder,
          selectDocumentCallback,
          documents,
        );
      }
    },
    [valgteDokumentIder, isShiftPressed],
  );

  const dokumentMouseHandler = useCallback(
    (event: React.MouseEvent, id?: string) => {
      if (id === undefined) {
        return;
      }
      const currentTimeout = timeoutMapRef.current[id];
      if (currentTimeout) {
        clearTimeout(currentTimeout);
        timeoutMapRef.current = { [id]: undefined };
        markerSomValgtEllerÅpneDokumenter(
          event,
          setValgteDokumentIder,
          false,
          id,
          valgteDokumentIder,
          selectDocumentCallback,
          documents,
        );
      } else {
        const callback = () => {
          const cTimeout = timeoutMapRef.current[id];
          if (cTimeout) {
            clearTimeout(cTimeout);
          }
          timeoutMapRef.current = { [id]: undefined };
          markerSomValgtEllerÅpneDokumenter(
            event,
            setValgteDokumentIder,
            true,
            id,
            valgteDokumentIder,
            selectDocumentCallback,
            documents,
          );
        };
        timeoutMapRef.current = { [id]: setTimeout(callback, 500) };
      }
    },
    [valgteDokumentIder],
  );

  if (documents.length === 0) {
    return (
      <BodyShort size="small" className={styles.noDocuments}>
        <FormattedMessage id="DocumentList.NoDocuments" />
      </BodyShort>
    );
  }
  return (
    <Table headerTextCodes={headerTextCodes}>
      {documents.map(document => (
        <TableRow<string>
          key={document.dokumentId}
          id={document.dokumentId}
          onMouseDown={dokumentMouseHandler}
          onKeyDown={dokumentKeyHandler}
          isSelected={valgteDokumentIder.some(dokId => dokId === document.dokumentId)}
          useMultiselect
        >
          <TableColumn>
            {document.kommunikasjonsretning === Kommunikasjonsretning.INN && (
              <ChevronRightDoubleIcon
                title={intl.formatMessage({ id: 'DocumentList.Motta' })}
                height={25}
                width={25}
                color="var(--a-surface-success)"
              />
            )}
            {document.kommunikasjonsretning === Kommunikasjonsretning.UT && (
              <ChevronLeftDoubleIcon
                title={intl.formatMessage({ id: 'DocumentList.Send' })}
                height={25}
                width={25}
                color="var(--a-orange-500)"
              />
            )}
            {document.kommunikasjonsretning !== Kommunikasjonsretning.INN &&
              document.kommunikasjonsretning !== Kommunikasjonsretning.UT && (
                <ChevronDownDoubleIcon
                  title={intl.formatMessage({ id: 'DocumentList.Intern' })}
                  height={25}
                  width={25}
                  color="var(--a-blue-400)"
                />
              )}
          </TableColumn>
          <TableColumn>
            {document.tittel}
            {document.behandlingUuidList && behandlingUuid && document.behandlingUuidList.includes(behandlingUuid) && (
              <StarFillIcon className={styles.image} title={intl.formatMessage({ id: 'DocumentList.IBruk' })} />
            )}
          </TableColumn>
          <TableColumn>
            {document.gjelderFor && isTextMoreThan25char(document.gjelderFor) && (
              <Tooltip content={<BodyShort size="small">{document.gjelderFor}</BodyShort>} alignLeft>
                {trimText(document.gjelderFor)}
              </Tooltip>
            )}
            {document.gjelderFor && !isTextMoreThan25char(document.gjelderFor) && document.gjelderFor}
          </TableColumn>
          <TableColumn>
            {document.tidspunkt ? (
              <DateTimeLabel dateTimeString={document.tidspunkt} />
            ) : (
              <BodyShort size="small">
                <FormattedMessage id="DocumentList.IProduksjon" />
              </BodyShort>
            )}
          </TableColumn>
        </TableRow>
      ))}
    </Table>
  );
};

export default DocumentList;
