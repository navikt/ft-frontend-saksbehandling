import React from 'react';

import { AksjonspunktCode, aktivitetStatus } from '@navikt/ft-kodeverk';
import { getIntlMock, shallowWithIntl } from '@navikt/ft-utils-test';

import { Aksjonspunkt, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import messages from '../../../i18n/nb_NO.json';
import { FastsettSNImpl, begrunnelseFieldname, fastsettInntektFieldname } from './FastsettSN';

const intlMock = getIntlMock(messages);

const mockAksjonspunktMedKodeOgStatus = (apKode: string, begrunnelse?: string): Aksjonspunkt => ({
  definisjon: apKode,
  status: 'OPPR',
  kanLoses: true,
  erAktivt: true,
  begrunnelse,
});

const lagAndel = (status: string, fastsattBelop?: number): BeregningsgrunnlagAndel => ({
  aktivitetStatus: status,
  beregnetPrAar: 200000,
  overstyrtPrAar: fastsattBelop,
  beregningsperiodeFom: '2015-01-01',
  beregningsperiodeTom: '2017-01-01',
} as BeregningsgrunnlagAndel);

describe('<FastsettSN>', () => {
  it('Skal teste at det rendres riktig antall rader', () => {
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(
      AksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
      'Ok.',
    ) as Aksjonspunkt];
    const wrapper = shallowWithIntl(<FastsettSNImpl
      readOnly={false}
      isAksjonspunktClosed={false}
      erNyArbLivet
      gjeldendeAksjonspunkter={aksjonspunkter}
      endretTekst={{}}
      intl={intlMock}
    />, messages);

    const rows = wrapper.find('Row');
    expect(rows.length).toBe(2);
  });
  it('Skal teste at buildInitialValues bygges korrekt når tidligere fastsatt', () => {
    const andeler = [lagAndel(aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, 300000), lagAndel(aktivitetStatus.ARBEIDSTAKER, 250000)];
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
      'Ok.') as Aksjonspunkt];

    const actualValues = FastsettSNImpl.buildInitialValuesNyIArbeidslivet(andeler, aksjonspunkter);

    const expectedValues = {
      [fastsettInntektFieldname]: '300 000',
      [begrunnelseFieldname]: 'Ok.',
    };

    expect(actualValues).toEqual(expectedValues);
  });

  it('Skal teste at buildInitialValues bygges korrekt når ikke tidligere fastsatt', () => {
    const andeler = [lagAndel(aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE), lagAndel(aktivitetStatus.ARBEIDSTAKER, 250000)];
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(AksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE)];

    const actualValues = FastsettSNImpl.buildInitialValuesNyIArbeidslivet(andeler, aksjonspunkter);

    const expectedValues = {
      [fastsettInntektFieldname]: undefined,
      [begrunnelseFieldname]: undefined,
    };

    expect(actualValues).toEqual(expectedValues);
  });

  it('Skal teste at buildInitialValues bygges korrekt når ikke tidligere fastsatt på sn ny i arbliv', () => {
    const andeler = [lagAndel(aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE), lagAndel(aktivitetStatus.ARBEIDSTAKER, 250000)];
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)];

    const actualValues = FastsettSNImpl.buildInitialValuesNyIArbeidslivet(andeler, aksjonspunkter);
    const expectedValues = {
      [fastsettInntektFieldname]: undefined,
      [begrunnelseFieldname]: undefined,
    };

    expect(actualValues).toEqual(expectedValues);
  });

  it('Skal teste at buildInitialValues bygges korrekt når ikke tidligere fastsatt på sn ny i arbliv - OK', () => {
    const andeler = [lagAndel(aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, 500000), lagAndel(aktivitetStatus.ARBEIDSTAKER, 250000)];
    const aksjonspunkter = [mockAksjonspunktMedKodeOgStatus(AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, 'Ok!!!')];

    const actualValues = FastsettSNImpl.buildInitialValuesNyIArbeidslivet(andeler, aksjonspunkter);

    const expectedValues = {
      [fastsettInntektFieldname]: '500 000',
      [begrunnelseFieldname]: 'Ok!!!',
    };

    expect(actualValues).toEqual(expectedValues);
  });
});
