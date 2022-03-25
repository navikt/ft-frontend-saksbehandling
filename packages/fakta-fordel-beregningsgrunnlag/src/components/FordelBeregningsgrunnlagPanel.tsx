import React, { Component } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { AksjonspunktCode } from '@ft-frontend-saksbehandling/kodeverk';
import Aksjonspunkt from '@ft-frontend-saksbehandling/types/src/aksjonspunktTsType';
import Beregningsgrunnlag from '@ft-frontend-saksbehandling/types/src/beregningsgrunnlagTsType';
import { ArbeidsgiverOpplysningerPerId, AlleKodeverk } from '@ft-frontend-saksbehandling/types';

import FordelBeregningsgrunnlagAP
  from '@ft-frontend-saksbehandling/types-avklar-aksjonspunkter/src/fakta/FordelBeregningsgrunnlagAP';
import VurderRefusjonBeregningsgrunnlagAP
  from '@ft-frontend-saksbehandling/types-avklar-aksjonspunkter/src/fakta/VurderRefusjonBeregningsgrunnlagAP';
import VurderEndringRefusjonForm from './refusjon/VurderEndringRefusjonForm';
import FordelingForm from './FordelingForm';

const {
  FORDEL_BEREGNINGSGRUNNLAG,
  VURDER_REFUSJON_BERGRUNN,
} = AksjonspunktCode;

const harFordelInfo = (bg: Beregningsgrunnlag): boolean => (bg && bg.faktaOmFordeling ? !!bg.faktaOmFordeling.fordelBeregningsgrunnlag : false);

const harRefusjonInfo = (bg: Beregningsgrunnlag): boolean => !!(bg && bg.refusjonTilVurdering);

const getAksjonspunkt = (aksjonspunkter: Aksjonspunkt[],
  def: string): Aksjonspunkt | undefined => (aksjonspunkter && def ? aksjonspunkter.find((ap) => ap.definisjon === def) : undefined);

interface OwnProps {
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP) => Promise<void>;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  behandlingType: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface OwnState {
  submitEnabled: boolean;
}

/**
 * FordelBeregningsgrunnlagPanel
 *
 * Har ansvar for å sette opp Redux Formen for "avklar fakta om fordeling" panel.
 */
export class FordelBeregningsgrunnlagPanel extends Component<OwnProps & WrappedComponentProps, OwnState> {
  constructor(props: OwnProps & WrappedComponentProps) {
    super(props);
    this.state = {
      submitEnabled: false,
    };
  }

  componentDidMount() {
    const { submitEnabled } = this.state;
    if (!submitEnabled) {
      this.setState({
        submitEnabled: true,
      });
    }
  }

  render() {
    const {
      props: {
        intl,
        readOnly,
        aksjonspunkter,
        submitCallback,
        beregningsgrunnlag,
        alleKodeverk,
        behandlingType,
        submittable,
        arbeidsgiverOpplysningerPerId,
      },
      state: {
        submitEnabled,
      },
    } = this;
    const fordelAP = getAksjonspunkt(aksjonspunkter, FORDEL_BEREGNINGSGRUNNLAG);
    const refusjonAP = getAksjonspunkt(aksjonspunkter, VURDER_REFUSJON_BERGRUNN);
    const skalViseFordeling = fordelAP && harFordelInfo(beregningsgrunnlag);
    const skalViseRefusjon = refusjonAP && harRefusjonInfo(beregningsgrunnlag);
    return (
      <>
        {skalViseRefusjon
      && (
      <VurderEndringRefusjonForm
        submitEnabled={submitEnabled}
        submittable={submittable}
        readOnly={readOnly}
        submitCallback={submitCallback}
        beregningsgrunnlag={beregningsgrunnlag}
        aksjonspunkter={aksjonspunkter}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      )}
        {skalViseFordeling && (
          <FordelingForm
            intl={intl}
            submitEnabled={submitEnabled}
            submittable={submittable}
            readOnly={readOnly}
            submitCallback={submitCallback}
            alleKodeverk={alleKodeverk}
            beregningsgrunnlag={beregningsgrunnlag}
            behandlingType={behandlingType}
            aksjonspunkter={aksjonspunkter}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        )}
      </>
    );
  }
}

export default injectIntl(FordelBeregningsgrunnlagPanel);
