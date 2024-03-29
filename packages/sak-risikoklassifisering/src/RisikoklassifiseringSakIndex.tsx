import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';
import AvklartRisikoklassifiseringAp from './types/AvklartRisikoklassifiseringAp';

import kontrollresultatKode from './kodeverk/kontrollresultatKode';
import ManglendeKlassifiseringPanel from './components/ManglendeKlassifiseringPanel';
import IngenRisikoPanel from './components/IngenRisikoPanel';
import HoyRisikoTittel from './components/HoyRisikoTittel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const harResultatkode = (resultatkode: string, risikoklassifisering?: Risikoklassifisering): boolean => {
  if (!risikoklassifisering || !risikoklassifisering.kontrollresultat) {
    return false;
  }
  return risikoklassifisering.kontrollresultat === resultatkode;
};

export interface OwnProps {
  aksjonspunkt?: Aksjonspunkt;
  risikoklassifisering?: Risikoklassifisering;
  isPanelOpen: boolean;
  readOnly: boolean;
  submitAksjonspunkt: (data: AvklartRisikoklassifiseringAp) => Promise<void>;
  toggleRiskPanel: () => void;
  faresignalVurderinger: KodeverkMedNavn[];
}

/**
 * RisikoklassifiseringSakIndex
 *
 * Har ansvar for å vise risikoklassifisering for valgt behandling
 * Viser en av tre komponenter avhengig av: Om ingen klassifisering er utført,
 * om klassifisering er utført og ingen faresignaler er funnet og om klassifisering er utført og faresignaler er funnet
 */
const RisikoklassifiseringSakIndex: FunctionComponent<OwnProps> = ({
  aksjonspunkt,
  risikoklassifisering,
  isPanelOpen,
  readOnly,
  submitAksjonspunkt,
  toggleRiskPanel,
  faresignalVurderinger,
}) => {
  const harIkkeHoyRisikoklassifisering = harResultatkode(kontrollresultatKode.IKKE_HOY, risikoklassifisering);
  const harHoyRisikoklassifisering = harResultatkode(kontrollresultatKode.HOY, risikoklassifisering);

  return (
    <RawIntlProvider value={intl}>
      {harIkkeHoyRisikoklassifisering && <IngenRisikoPanel />}
      {risikoklassifisering && harHoyRisikoklassifisering && (
        <HoyRisikoTittel
          risikoklassifisering={risikoklassifisering}
          aksjonspunkt={aksjonspunkt}
          readOnly={readOnly}
          isRiskPanelOpen={isPanelOpen}
          submitCallback={submitAksjonspunkt}
          toggleRiskPanel={toggleRiskPanel}
          faresignalVurderinger={faresignalVurderinger}
        />
      )}
      {!harIkkeHoyRisikoklassifisering && !harHoyRisikoklassifisering && <ManglendeKlassifiseringPanel />}
    </RawIntlProvider>
  );
};

export default RisikoklassifiseringSakIndex;
