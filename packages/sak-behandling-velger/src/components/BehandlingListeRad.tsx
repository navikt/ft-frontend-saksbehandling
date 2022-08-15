import React, { FunctionComponent, ReactElement } from 'react';
import { KodeverkMedNavn, BehandlingAppKontekst } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import BehandlingInformasjon from './BehandlingInformasjon';

import styles from './behandlingListeRad.less';

interface OwnProps {
  behandling: BehandlingAppKontekst;
  erKunEnBehandling: boolean;
  erAktiv: boolean;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: () => void;
  renderRadSomLenke: (className: string, behandlingInfoKomponent: ReactElement) => ReactElement;
  getKodeverkMedNavn: (kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined;
}

const BehandlingListeRad: FunctionComponent<OwnProps> = ({
  behandling,
  erKunEnBehandling,
  erAktiv,
  skalViseAlleBehandlinger,
  toggleVisAlleBehandlinger,
  renderRadSomLenke,
  getKodeverkMedNavn,
}) => {
  if (erKunEnBehandling && erAktiv) {
    return (
      <BehandlingInformasjon
        behandling={behandling}
        withChevronDown={false}
        withChevronUp={false}
        getKodeverkMedNavn={getKodeverkMedNavn}
      />
    );
  }
  if (erKunEnBehandling || skalViseAlleBehandlinger) {
    return renderRadSomLenke(
      styles.linkToBehandling,
      <BehandlingInformasjon
        behandling={behandling}
        withChevronDown={false}
        withChevronUp={skalViseAlleBehandlinger && erAktiv}
        getKodeverkMedNavn={getKodeverkMedNavn}
      />,
    );
  }
  if (erAktiv) {
    return (
      <button type="button" className={styles.toggleShowAllButton} onClick={toggleVisAlleBehandlinger}>
        <BehandlingInformasjon
          behandling={behandling}
          withChevronDown={!skalViseAlleBehandlinger}
          withChevronUp={skalViseAlleBehandlinger}
          getKodeverkMedNavn={getKodeverkMedNavn}
        />
      </button>
    );
  }
  return null;
};

export default BehandlingListeRad;
