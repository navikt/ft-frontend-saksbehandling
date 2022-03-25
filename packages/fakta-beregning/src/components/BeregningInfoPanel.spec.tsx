import React from 'react';
import sinon from 'sinon';

import { AksjonspunktCode, aksjonspunktStatus } from '@ft-frontend-saksbehandling/kodeverk';
import Beregningsgrunnlag from '@ft-frontend-saksbehandling/types/src/beregningsgrunnlagTsType';
import { getIntlMock, shallowWithIntl } from '@ft-frontend-saksbehandling/utils-test/src/intl-enzyme-test-helper';
import { AlleKodeverk } from '@ft-frontend-saksbehandling/types';
import BeregningInfoPanel from './BeregningInfoPanel';
import VurderFaktaBeregningPanel from './fellesFaktaForATFLogSN/VurderFaktaBeregningPanel';
import AvklareAktiviteterPanel from './avklareAktiviteter/AvklareAktiviteterPanel';

import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const {
  AVKLAR_AKTIVITETER,
  VURDER_FAKTA_FOR_ATFL_SN,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = AksjonspunktCode;

const alleKodeverk = {} as AlleKodeverk;

const beregningsgrunnlag = {
  faktaOmBeregning: {
    faktaOmBeregningTilfeller: [],
    andelerForFaktaOmBeregning: [],
  },
};

describe('<BeregningInfoPanel>', () => {
  it('skal vise VurderFaktaBeregning panel', () => {
    const tidsbegrensetAP = {
      id: 1,
      definisjon: VURDER_FAKTA_FOR_ATFL_SN,
      kanLoses: true,
      erAktivt: true,
      status: aksjonspunktStatus.OPPRETTET,
    };

    const wrapper = shallowWithIntl(<BeregningInfoPanel
      intl={intlMock}
      aksjonspunkter={[tidsbegrensetAP]}
      hasOpenAksjonspunkter
      submittable
      readOnly
      alleKodeverk={alleKodeverk}
      submitCallback={sinon.spy()}
      beregningsgrunnlag={beregningsgrunnlag as Beregningsgrunnlag}
      erOverstyrer={false}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const panel = wrapper.find(VurderFaktaBeregningPanel);
    expect(panel).toHaveLength(1);
  });

  it('skal vise VurderFaktaBeregning panel med readonly for vanlig saksbehandler uten overstyrerrolle med overstyringsaksjonspunkt', () => {
    const overstyringAP = {
      id: 1,
      definisjon: OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
      kanLoses: true,
      erAktivt: true,
      status: aksjonspunktStatus.OPPRETTET,
    };
    const wrapper = shallowWithIntl(<BeregningInfoPanel
      intl={intlMock}
      aksjonspunkter={[overstyringAP]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      submitCallback={sinon.spy()}
      alleKodeverk={alleKodeverk}
      beregningsgrunnlag={beregningsgrunnlag as Beregningsgrunnlag}
      erOverstyrer={false}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const panel = wrapper.find(VurderFaktaBeregningPanel);
    expect(panel).toHaveLength(1);
    expect(panel.prop('readOnly')).toBe(true);
  });

  it('skal vise AvklareAktiviteterPanel panel med readonly for vanlig saksbehandler uten overstyrerrolle med overstyringsaksjonspunkt', () => {
    const overstyringAP = {
      id: 1,
      definisjon: OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
      status: aksjonspunktStatus.OPPRETTET,
      kanLoses: true,
      erAktivt: true,
    };
    const wrapper = shallowWithIntl(<BeregningInfoPanel
      intl={intlMock}
      aksjonspunkter={[overstyringAP]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      submitCallback={sinon.spy()}
      alleKodeverk={alleKodeverk}
      beregningsgrunnlag={beregningsgrunnlag as Beregningsgrunnlag}
      erOverstyrer={false}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const panel = wrapper.find(AvklareAktiviteterPanel);
    expect(panel).toHaveLength(1);
    expect(panel.prop('readOnly')).toBe(true);
  });

  it('skal vise AvklareAktiviteterPanel panel', () => {
    const tidsbegrensetAP = {
      id: 1,
      definisjon: AVKLAR_AKTIVITETER,
      status: aksjonspunktStatus.OPPRETTET,
      kanLoses: true,
      erAktivt: true,
    };
    const wrapper = shallowWithIntl(<BeregningInfoPanel
      intl={intlMock}
      aksjonspunkter={[tidsbegrensetAP]}
      hasOpenAksjonspunkter
      submittable
      readOnly
      submitCallback={sinon.spy()}
      alleKodeverk={alleKodeverk}
      beregningsgrunnlag={beregningsgrunnlag as Beregningsgrunnlag}
      erOverstyrer={false}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const panel = wrapper.find(AvklareAktiviteterPanel);
    expect(panel).toHaveLength(1);
  });
});
