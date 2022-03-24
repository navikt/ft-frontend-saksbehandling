import React from 'react';

import aktivitetStatus from '@ft-frontend-saksbehandling/kodeverk/src/aktivitetStatus';
import aksjonspunktCodes from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';
import { getIntlMock, shallowWithIntl } from '@ft-frontend-saksbehandling/utils-test/src/intl-enzyme-test-helper';

import Aksjonspunkt from '@ft-frontend-saksbehandling/types/src/aksjonspunktTsType';
import { BeregningsgrunnlagAndel } from '@ft-frontend-saksbehandling/types';
import messages from '../../../i18n/nb_NO.json';
import {
  VurderVarigEndretEllerNyoppstartetSNImpl as UnwrappedForm,
  begrunnelseFieldname,
  fastsettInntektFieldname,
  varigEndringRadioname,
} from './VurderVarigEndretEllerNyoppstartetSN';

const intlMock = getIntlMock(messages);

const {
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
} = aksjonspunktCodes;

const mockAksjonspunktMedKodeOgStatus = (apKode, begrunnelse, status) => ({
  definisjon: apKode,
  status,
  begrunnelse,
} as Aksjonspunkt);

const lagAndel = (status, fastsattBelop) => ({
  aktivitetStatus: status,
  beregnetPrAar: 200000,
  overstyrtPrAar: fastsattBelop,
  beregningsperiodeFom: '2015-01-01',
  beregningsperiodeTom: '2017-01-01',
} as BeregningsgrunnlagAndel);

describe('<VurderVarigEndretEllerNyoppstartetSN>', () => {
  it('Skal teste at det rendres riktig antall rader', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      readOnly={false}
      erVarigEndring
      erNyoppstartet
      erVarigEndretNaering={false}
      endretTekst="tekst"
      intl={intlMock}
    />, messages);

    const rows = wrapper.find('Row');
    expect(rows.length).toBe(2);
  });

  it('Skal teste at buildInitialValues bygges korrekt når tidligere vurdert ingen varig endring', () => {
    const andeler = [lagAndel(aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, null), lagAndel(aktivitetStatus.ARBEIDSTAKER, 250000)];
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE, 'Ok.', 'UTFO')];

    const actualValues = UnwrappedForm.buildInitialValues(andeler, aksjonspunkter);

    const expectedValues = {
      [varigEndringRadioname]: false,
      [begrunnelseFieldname]: 'Ok.',
      [fastsettInntektFieldname]: undefined,
    };
    expect(actualValues).toEqual(expectedValues);
  });

  it('Skal teste at buildInitialValues bygges korrekt når tidligere vurdert til ingen varig endring med fastsatt belop', () => {
    const andeler = [lagAndel(aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, 300000), lagAndel(aktivitetStatus.ARBEIDSTAKER, 250000)];
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE, 'Ok.', 'UTFO')];

    const actualValues = UnwrappedForm.buildInitialValues(andeler, aksjonspunkter);

    const expectedValues = {
      [fastsettInntektFieldname]: '300 000',
      [varigEndringRadioname]: true,
      [begrunnelseFieldname]: 'Ok.',
    };

    expect(actualValues).toEqual(expectedValues);
  });

  it('Skal teste at buildInitialValues bygges korrekt når ikke tidligere vurdert', () => {
    const andeler = [lagAndel(aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, null), lagAndel(aktivitetStatus.ARBEIDSTAKER, 250000)];
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE, undefined, 'OPPR')];

    const actualValues = UnwrappedForm.buildInitialValues(andeler, aksjonspunkter);

    const expectedValues = {
      [fastsettInntektFieldname]: undefined,
      [varigEndringRadioname]: undefined,
      [begrunnelseFieldname]: '',
    };

    expect(actualValues).toEqual(expectedValues);
  });
});
