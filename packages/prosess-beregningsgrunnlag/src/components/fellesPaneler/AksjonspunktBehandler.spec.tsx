import React from 'react';
import { FormattedMessage } from 'react-intl';

import { getIntlMock, shallowWithIntl } from '@navikt/ft-utils-test';
import { TextAreaField } from '@navikt/ft-form-redux-legacy';
import { aktivitetStatus, KodeverkType, periodeAarsak } from '@navikt/ft-kodeverk';
import { Aksjonspunkt, AlleKodeverk } from '@navikt/ft-types';

import messages from '../../../i18n/nb_NO.json';
import { AksjonspunktBehandlerImpl as UnwrappedForm } from './AksjonspunktBehandler';
import AksjonspunktBehandlerTB from '../arbeidstaker/AksjonspunktBehandlerTB';
import AksjonspunktBehandlerSN from '../selvstendigNaeringsdrivende/AksjonspunktsbehandlerSN';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';

const intlMock = getIntlMock(messages);

const relevanteStatuser = {
  isFrilanser: false,
  isSelvstendigNaeringsdrivende: false,
  isArbeidstaker: false,
};

const allePerioder = [
  {
    periodeAarsaker: [],
    beregningsgrunnlagPrStatusOgAndel: [
      {
        beregnetPrAar: 360000,
        aktivitetStatus: 'AT',
        skalFastsetteGrunnlag: true,
      }],
  }];
const formName = 'BeregningForm';
const aksjonspunkter = [
  {
    begrunnelse: null,
    definisjon: '5038',
    status: 'OPPR',
  } as Aksjonspunkt,
];

const alleKodeverk = {
  [KodeverkType.AKTIVITET_STATUS]: [{
    kode: aktivitetStatus.ARBEIDSTAKER,
    kodeverk: 'AKTIVITET_STATUS',
    navn: 'Arbeidstaker',
  }],
} as AlleKodeverk;

describe('<UnwrappedForm>', () => {
  it('Skal teste at riktig componenter blir renderet for FL readOnly', () => {
    relevanteStatuser.isFrilanser = true;
    allePerioder[0].beregningsgrunnlagPrStatusOgAndel[0].aktivitetStatus = 'FL';
    const readOnly = true;
    const wrapper = shallowWithIntl(<UnwrappedForm
      intl={intlMock}
      readOnly={readOnly}
      aksjonspunkter={aksjonspunkter}
      formName={formName}
      readOnlySubmitButton
      allePerioder={allePerioder}
      alleKodeverk={alleKodeverk}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const rows = wrapper.find('Row');
    expect(rows.first().find(FormattedMessage).first().props().id).toBe('Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler');
    expect(rows.at(1).find(TextAreaField).first().props().name).toBe('ATFLVurdering');
    expect(rows.at(1).find(TextAreaField).first().props().readOnly).toBe(readOnly);
    const aksjonspunktBehandlerAT = wrapper.find('AksjonspunktBehandlerAT');
    const aksjonspunktBehandlerTB = wrapper.find('AksjonspunktBehandlerTB');
    const aksjonspunktBehandlerFL = wrapper.find('AksjonspunktBehandlerFL');
    const aksjonspunktBehandlerSN = wrapper.find('AksjonspunktBehandlerSN');

    expect(aksjonspunktBehandlerAT).toHaveLength(0);
    expect(aksjonspunktBehandlerTB).toHaveLength(0);
    expect(aksjonspunktBehandlerFL).toHaveLength(1);
    expect(aksjonspunktBehandlerSN).toHaveLength(0);
    expect(wrapper.find('ProsessStegSubmitButton')).toHaveLength(0);
  });

  it('Skal teste at submitButton blir rendret riktig når readOnly=false', () => {
    relevanteStatuser.isFrilanser = true;
    allePerioder[0].beregningsgrunnlagPrStatusOgAndel[0].aktivitetStatus = 'FL';
    const readOnly = false;
    const wrapper = shallowWithIntl(<UnwrappedForm
      readOnly={readOnly}
      aksjonspunkter={aksjonspunkter}
      formName={formName}
      readOnlySubmitButton
      allePerioder={allePerioder}
      alleKodeverk={alleKodeverk}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      intl={intlMock}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const rows = wrapper.find('Row');
    expect(rows.first().find(FormattedMessage).first().props().id).toBe('Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler');
    expect(rows.at(1).find(TextAreaField).first().props().name).toBe('ATFLVurdering');
    expect(rows.at(1).find(TextAreaField).first().props().readOnly).toBe(readOnly);
    const aksjonspunktBehandlerAT = wrapper.find('AksjonspunktBehandlerAT');
    const aksjonspunktBehandlerTB = wrapper.find('AksjonspunktBehandlerTB');
    const aksjonspunktBehandlerFL = wrapper.find('AksjonspunktBehandlerFL');
    const aksjonspunktBehandlerSN = wrapper.find('AksjonspunktBehandlerSN');
    expect(aksjonspunktBehandlerAT).toHaveLength(0);
    expect(aksjonspunktBehandlerTB).toHaveLength(0);
    expect(aksjonspunktBehandlerFL).toHaveLength(1);
    expect(aksjonspunktBehandlerSN).toHaveLength(0);
    const submitButton = rows.at(2).first().childAt(0);
    expect(submitButton).toHaveLength(1);
  });
  it('Skal teste at riktig componenter blir renderet for AT readOnly false', () => {
    relevanteStatuser.isFrilanser = false;
    relevanteStatuser.isSelvstendigNaeringsdrivende = false;
    relevanteStatuser.isArbeidstaker = true;
    allePerioder[0].beregningsgrunnlagPrStatusOgAndel[0].aktivitetStatus = 'AT';
    const readOnly = true;
    const wrapper = shallowWithIntl(<UnwrappedForm
      readOnly={readOnly}
      aksjonspunkter={aksjonspunkter}
      formName={formName}
      readOnlySubmitButton
      allePerioder={allePerioder}
      alleKodeverk={alleKodeverk}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      intl={intlMock}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const rows = wrapper.find('Row');
    expect(rows.first().find(FormattedMessage).first().props().id).toBe('Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler');
    expect(rows.at(1).find(TextAreaField).first().props().name).toBe('ATFLVurdering');
    expect(rows.at(1).find(TextAreaField).first().props().readOnly).toBe(readOnly);
    const aksjonspunktBehandlerAT = wrapper.find('AksjonspunktBehandlerAT');
    const aksjonspunktBehandlerTB = wrapper.find('AksjonspunktBehandlerTB');
    const aksjonspunktBehandlerFL = wrapper.find('AksjonspunktBehandlerFL');
    const aksjonspunktBehandlerSN = wrapper.find('AksjonspunktBehandlerSN');
    expect(aksjonspunktBehandlerAT).toHaveLength(1);
    expect(aksjonspunktBehandlerTB).toHaveLength(0);
    expect(aksjonspunktBehandlerFL).toHaveLength(0);
    expect(aksjonspunktBehandlerSN).toHaveLength(0);
    const submitButton = rows.at(2).first().childAt(0);
    expect(submitButton).toHaveLength(1);
  });
  it('Skal teste at riktig componenter blir renderet for AT tidsbegrenset readOnly false', () => {
    relevanteStatuser.isFrilanser = false;
    relevanteStatuser.isSelvstendigNaeringsdrivende = false;
    relevanteStatuser.isArbeidstaker = true;
    allePerioder[0].beregningsgrunnlagPrStatusOgAndel[0].aktivitetStatus = 'AT';
    allePerioder[0].periodeAarsaker.push(periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET);
    const readOnly = true;
    const wrapper = shallowWithIntl(<UnwrappedForm
      readOnly={readOnly}
      aksjonspunkter={aksjonspunkter}
      formName={formName}
      readOnlySubmitButton
      allePerioder={allePerioder}
      alleKodeverk={alleKodeverk}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      intl={intlMock}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const rows = wrapper.find('Row');
    expect(rows.first().find(FormattedMessage).first().props().id).toBe('Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler');
    expect(rows.at(1).find(TextAreaField).first().props().name).toBe('ATFLVurdering');
    expect(rows.at(1).find(TextAreaField).first().props().readOnly).toBe(readOnly);
    const aksjonspunktBehandlerAT = wrapper.find('AksjonspunktBehandlerAT');
    const aksjonspunktBehandlerTB = wrapper.find(AksjonspunktBehandlerTB);
    const aksjonspunktBehandlerFL = wrapper.find('AksjonspunktBehandlerFL');
    const aksjonspunktBehandlerSN = wrapper.find('AksjonspunktBehandlerSN');
    expect(aksjonspunktBehandlerAT).toHaveLength(0);
    expect(aksjonspunktBehandlerTB).toHaveLength(1);
    expect(aksjonspunktBehandlerFL).toHaveLength(0);
    expect(aksjonspunktBehandlerSN).toHaveLength(0);
    const submitButton = rows.at(2).first().childAt(0);
    expect(submitButton).toHaveLength(1);
  });
  it('Skal teste at riktig componenter blir renderet for SN NyIArbeidslivet==true', () => {
    relevanteStatuser.isFrilanser = false;
    relevanteStatuser.isSelvstendigNaeringsdrivende = true;
    relevanteStatuser.isArbeidstaker = false;
    const snAndel = {
      aktivitetStatus: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      næringer: [
        {
          erVarigEndret: false,
          erNyoppstartet: false,
        },
      ],
      erNyIArbeidslivet: true,
      skalFastsetteGrunnlag: true,
      beregnetPrAar: 0,
    };
    const readOnly = true;
    const perioderMedSNAndel = allePerioder;
    perioderMedSNAndel[0].beregningsgrunnlagPrStatusOgAndel[0] = snAndel;
    const wrapper = shallowWithIntl(<UnwrappedForm
      readOnly={readOnly}
      aksjonspunkter={aksjonspunkter}
      formName={formName}
      readOnlySubmitButton
      allePerioder={perioderMedSNAndel}
      alleKodeverk={alleKodeverk}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      intl={intlMock}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const rows = wrapper.find('Row');
    expect(rows.first().find(FormattedMessage).first().props().id).toBe(
      'Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.NyIArbeidslivet',
    );
    const aksjonspunktBehandlerAT = wrapper.find('AksjonspunktBehandlerAT');
    const aksjonspunktBehandlerTB = wrapper.find(AksjonspunktBehandlerTB);
    const aksjonspunktBehandlerFL = wrapper.find('AksjonspunktBehandlerFL');
    const aksjonspunktBehandlerSN = wrapper.find(AksjonspunktBehandlerSN);
    expect(aksjonspunktBehandlerAT).toHaveLength(0);
    expect(aksjonspunktBehandlerTB).toHaveLength(0);
    expect(aksjonspunktBehandlerFL).toHaveLength(0);
    expect(aksjonspunktBehandlerSN).toHaveLength(1);
  });
});
