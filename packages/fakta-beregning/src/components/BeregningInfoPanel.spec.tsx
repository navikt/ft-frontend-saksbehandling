import React from 'react';
import sinon from 'sinon';

import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import { getIntlMock, shallowWithIntl } from '@navikt/ft-utils-test';
import { AlleKodeverk, Beregningsgrunnlag } from '@navikt/ft-types';

import FaktaBeregningAksjonspunktCode from '../typer/interface/FaktaBeregningAksjonspunktCode';
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
} = FaktaBeregningAksjonspunktCode;

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
      status: AksjonspunktStatus.OPPRETTET,
    };

    const wrapper = shallowWithIntl(<BeregningInfoPanel
      intl={intlMock}
      aksjonspunkter={[tidsbegrensetAP]}
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
      status: AksjonspunktStatus.OPPRETTET,
    };
    const wrapper = shallowWithIntl(<BeregningInfoPanel
      intl={intlMock}
      aksjonspunkter={[overstyringAP]}
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
      status: AksjonspunktStatus.OPPRETTET,
      kanLoses: true,
      erAktivt: true,
    };
    const wrapper = shallowWithIntl(<BeregningInfoPanel
      intl={intlMock}
      aksjonspunkter={[overstyringAP]}
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
      status: AksjonspunktStatus.OPPRETTET,
      kanLoses: true,
      erAktivt: true,
    };
    const wrapper = shallowWithIntl(<BeregningInfoPanel
      intl={intlMock}
      aksjonspunkter={[tidsbegrensetAP]}
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
