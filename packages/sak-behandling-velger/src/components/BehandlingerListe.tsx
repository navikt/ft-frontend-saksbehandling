import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Label, Box } from '@navikt/ds-react';
import { BehandlingAppKontekst, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import BehandlingListeRad from './BehandlingListeRad';

import styles from './behandlingerListe.module.css';

const sorterBehandlinger = (behandlinger: BehandlingAppKontekst[]): BehandlingAppKontekst[] =>
  [...behandlinger].sort((b1, b2) => {
    if (b1.avsluttet && !b2.avsluttet) {
      return 1;
    }
    if (!b1.avsluttet && b2.avsluttet) {
      return -1;
    }
    if (b1.avsluttet && b2.avsluttet) {
      return moment(b2.avsluttet).diff(moment(b1.avsluttet));
    }
    return moment(b2.opprettet).diff(moment(b1.opprettet));
  });

export interface OwnProps {
  behandlinger: BehandlingAppKontekst[];
  renderRadSomLenke: (className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement;
  behandlingUuid?: string;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: () => void;
  getKodeverkMedNavn: (kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined;
}

/**
 * BehandlingerListe
 *
 * Viser behandlinger knyttet til fagsak,
 */
const BehandlingerListe: FunctionComponent<OwnProps> = ({
  behandlinger,
  renderRadSomLenke,
  behandlingUuid,
  skalViseAlleBehandlinger,
  toggleVisAlleBehandlinger,
  getKodeverkMedNavn,
}) => {
  const sorterteOgFiltrerteBehandlinger = useMemo(
    () =>
      sorterBehandlinger(behandlinger).filter(
        behandling => skalViseAlleBehandlinger || behandling.uuid === behandlingUuid,
      ),
    [skalViseAlleBehandlinger, behandlingUuid, behandlinger],
  );

  return (
    <ul className={styles.behandlingList}>
      {behandlinger.length === 0 && (
        <Box borderWidth="2" borderColor="border-divider" borderRadius="large" padding="3">
          <Label size="small">
            <FormattedMessage id="BehandlingList.ZeroBehandlinger" />
          </Label>
        </Box>
      )}
      {behandlinger.length > 0 &&
        sorterteOgFiltrerteBehandlinger.map(behandling => (
          <li key={behandling.uuid} data-testid={`behandling-${behandling.uuid}`}>
            <BehandlingListeRad
              erKunEnBehandling={behandlinger.length === 1}
              behandling={behandling}
              renderRadSomLenke={renderRadSomLenke}
              erAktiv={behandling.uuid === behandlingUuid}
              skalViseAlleBehandlinger={skalViseAlleBehandlinger}
              toggleVisAlleBehandlinger={toggleVisAlleBehandlinger}
              getKodeverkMedNavn={getKodeverkMedNavn}
            />
          </li>
        ))}
    </ul>
  );
};

export default BehandlingerListe;
