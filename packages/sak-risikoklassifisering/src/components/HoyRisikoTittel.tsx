import React, { FunctionComponent } from 'react';
import { Accordion } from '@navikt/ds-react';

import { Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn } from '@navikt/ft-types';

import risikoIkon from '../images/avslaatt_hover.svg';
import HoyRisikoPanel from './HoyRisikoPanel';
import TittelMedDivider from './TittelMedDivider';
import AvklartRisikoklassifiseringAp from '../types/AvklartRisikoklassifiseringAp';

import styles from './hoyRisikoTittel.less';

interface OwnProps {
  risikoklassifisering: Risikoklassifisering;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  submitCallback: (data: AvklartRisikoklassifiseringAp) => Promise<void>;
  isRiskPanelOpen: boolean;
  toggleRiskPanel: () => void;
  faresignalVurderinger: KodeverkMedNavn[];
}

/**
 * HoyRisikoTittel
 *
 * Statisk visning av tittel i utvidbart panel dersom faresignaler er funnet.
 */
const HoyRisikoTittel: FunctionComponent<OwnProps> = ({
  risikoklassifisering,
  aksjonspunkt,
  readOnly,
  submitCallback,
  isRiskPanelOpen,
  toggleRiskPanel,
  faresignalVurderinger,
}) => (
  <Accordion className={styles.hoyRisikoPanel}>
    <Accordion.Item open={isRiskPanelOpen} className={isRiskPanelOpen ? undefined : styles.hoyRisikoPanelHeader}>
      <Accordion.Header onClick={toggleRiskPanel}>
        <TittelMedDivider imageSrc={risikoIkon} tittel="Risikopanel.Tittel.Faresignaler" />
      </Accordion.Header>
      <Accordion.Content>
        <HoyRisikoPanel
          risikoklassifisering={risikoklassifisering}
          aksjonspunkt={aksjonspunkt}
          readOnly={readOnly}
          submitCallback={submitCallback}
          faresignalVurderinger={faresignalVurderinger}
        />
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

export default HoyRisikoTittel;
