import React, { FunctionComponent } from 'react';
import { ExpansionCard } from '@navikt/ds-react';

import { XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn } from '@navikt/ft-types';

import { useIntl } from 'react-intl';
import HoyRisikoPanel from './HoyRisikoPanel';
import TittelMedDivider from './TittelMedDivider';
import AvklartRisikoklassifiseringAp from '../types/AvklartRisikoklassifiseringAp';

import styles from './hoyRisikoTittel.module.css';

export interface OwnProps {
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
}) => {
  const intl = useIntl();
  return (
    <ExpansionCard
      aria-label={intl.formatMessage({ id: 'Risikopanel.Tittel' })}
      open={isRiskPanelOpen}
      className={styles.hoyRisikoPanel}
    >
      <ExpansionCard.Header onClick={toggleRiskPanel}>
        <ExpansionCard.Title>
          <TittelMedDivider
            ikon={
              <XMarkOctagonFillIcon
                title={intl.formatMessage({ id: 'Risikopanel.Tittel' })}
                color="var(--a-nav-red)"
                height={30}
                width={30}
              />
            }
            tittel="Risikopanel.Tittel.Faresignaler"
          />
        </ExpansionCard.Title>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <HoyRisikoPanel
          risikoklassifisering={risikoklassifisering}
          aksjonspunkt={aksjonspunkt}
          readOnly={readOnly}
          submitCallback={submitCallback}
          faresignalVurderinger={faresignalVurderinger}
        />
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};

export default HoyRisikoTittel;
