import React, { FunctionComponent } from 'react';
import { EkspanderbartpanelBase } from 'nav-frontend-ekspanderbartpanel';

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
  <EkspanderbartpanelBase
    className={styles.hoyRisikoPanelTittel}
    apen={isRiskPanelOpen}
    onClick={toggleRiskPanel}
    tittel={<TittelMedDivider imageSrc={risikoIkon} tittel="Risikopanel.Tittel.Faresignaler" />}
    border
  >
    <HoyRisikoPanel
      risikoklassifisering={risikoklassifisering}
      aksjonspunkt={aksjonspunkt}
      readOnly={readOnly}
      submitCallback={submitCallback}
      faresignalVurderinger={faresignalVurderinger}
    />
  </EkspanderbartpanelBase>
);

export default HoyRisikoTittel;
