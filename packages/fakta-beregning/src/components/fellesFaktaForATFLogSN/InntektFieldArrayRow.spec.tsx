import React from 'react';

import { MockFieldsWithContent, shallowWithIntl, getIntlMock } from '@navikt/ft-utils-test';
import {
  FaktaOmBeregningTilfelle, AktivitetStatus as aktivitetStatuser, Inntektskategori, KodeverkType,
} from '@navikt/ft-kodeverk';
import { TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/ft-types';
import { InputField, PeriodpickerField, SelectField } from '@navikt/ft-form-redux-legacy';

import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';
import { lagStateMedAksjonspunkterOgBeregningsgrunnlag } from '../beregning-test-helper';
import { AndelRowImpl, mapStateToProps } from './InntektFieldArrayRow';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const aksjonspunkter = [
  {
    definisjon: FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN,
    status: 'OPPR',
  },
];

jest.mock('redux-form', () => {
  const reduxForm = jest.requireActual('redux-form');
  return {
    ...reduxForm,
    getFormValues: () => () => ({ vurderbesteberegningField: {} }),
  };
});

const alleKodeverk = {
  [KodeverkType.INNTEKTSKATEGORI]: [{
    kode: Inntektskategori.ARBEIDSTAKER,
    navn: 'Arbeidstaker',
    kodeverk: 'test',
  }, {
    kode: Inntektskategori.FRILANSER,
    navn: 'Frilanser',
    kodeverk: 'test',
  },
  {
    kode: Inntektskategori.DAGPENGER,
    navn: 'Dagpenger',
    kodeverk: 'test',
  },
  {
    kode: Inntektskategori.SELVSTENDIG_NÆRINGSDRIVENDE,
    navn: 'Selvstendig næringsdrivende',
    kodeverk: 'test',
  },
  ],
} as AlleKodeverk;

const behandlingUuid = '1000051';
const behandlingVersjon = 1;

const andelField = {
  nyAndel: false,
  andel: 'Sopra Steria AS (233647823)',
  andelsnr: 1,
  fastsattBelop: '0',
  lagtTilAvSaksbehandler: false,
  inntektskategori: 'ARBEIDSTAKER',
  arbeidsgiverId: '233647823',
  arbeidsperiodeFom: '01.01.2018',
  arbeidsperiodeTom: null,
  refusjonskrav: '10 000',
  aktivitetStatus: aktivitetStatuser.ARBEIDSTAKER,
};

const fields = new MockFieldsWithContent('fieldArrayName', [andelField]);

const faktaOmBeregning = {
  faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING],
};
const initial = {
  fieldArrayName: null,
};
initial.fieldArrayName = [andelField];
const beregningsgrunnlag = {
  faktaOmBeregning,
  beregningsgrunnlagPeriode: [{ beregningsgrunnlagPrStatusOgAndel: [{ andelsnr: 1 }] }],
};
const ownProps = {
  alleKodeverk, behandlingUuid, behandlingVersjon, beregningsgrunnlag, fields, index: 0, isAksjonspunktClosed: false,
};
const state = lagStateMedAksjonspunkterOgBeregningsgrunnlag(aksjonspunkter, beregningsgrunnlag, formNameVurderFaktaBeregning, initial, initial);
const props = mapStateToProps(state, ownProps);

it('skal vise komponent med arbeidsperiode og refusjonskrav', () => {
  const wrapper = shallowWithIntl(<AndelRowImpl
    intl={intlMock}
    fields={fields}
    readOnly={false}
    skalVisePeriode
    skalViseRefusjon
    skalViseSletteknapp={false}
    kanRedigereInntekt
    andelElementFieldId="fieldArrayName[0]"
    removeAndel={() => {}}
    index={0}
    {...ownProps}
    {...props}
  />, messages);
  const rows = wrapper.find(TableRow);
  expect(rows.length).toEqual(1);
  const columns = rows.first().find(TableColumn);
  expect(columns.length).toEqual(6);
  expect(columns.first().find(InputField).length).toEqual(1);
  expect(columns.at(1).find(PeriodpickerField).length).toEqual(1);
  expect(columns.at(2).find(InputField).length).toEqual(1);
  expect(columns.at(3).find(InputField).length).toEqual(1);
  expect(columns.at(4).find(SelectField).length).toEqual(1);
  const btn = columns.at(3).find('button');
  expect(btn.length).toEqual(0);
});

it('skal vise komponent uten arbeidsperiode og refusjonskrav', () => {
  const andelField2 = {
    nyAndel: false,
    andel: 'Sopra Steria AS (233647823)',
    andelsnr: 1,
    fastsattBelop: '0',
    lagtTilAvSaksbehandler: false,
    inntektskategori: 'ARBEIDSTAKER',
    arbeidsgiverId: '',
    arbeidsperiodeFom: '',
    arbeidsperiodeTom: '',
    kanRedigereInntekt: true,
  };

  const fields2 = new MockFieldsWithContent('fieldArrayName', [andelField2]);

  const wrapper = shallowWithIntl(<AndelRowImpl
    intl={intlMock}
    fields={fields2}
    readOnly={false}
    skalVisePeriode={false}
    skalViseSletteknapp={false}
    skalViseRefusjon={false}
    kanRedigereInntekt
    andelElementFieldId="fieldArrayName[0]"
    removeAndel={() => {}}
    index={0}
    inntektskategoriKoder={[]}
    isAksjonspunktClosed={false}
    skalRedigereInntektskategori={false}
    {...ownProps}
  />, messages);
  const row = wrapper.find(TableRow);
  expect(row.length).toEqual(1);
  const columns = row.first().find(TableColumn);
  expect(columns.length).toEqual(4);
  expect(columns.first().find(InputField).length).toEqual(1);
  const inputField = columns.at(1).find(InputField);
  expect(inputField.length).toEqual(1);
  expect(inputField.props().name).toEqual('fieldArrayName[0].fastsattBelop');
  expect(columns.at(2).find(SelectField).length).toEqual(1);
  const btn = columns.at(3).find('button');
  expect(btn.length).toEqual(0);
});

it('skal vise komponent med readOnly beløp', () => {
  const andelField2 = {
    nyAndel: false,
    andel: 'Sopra Steria AS (233647823)',
    andelsnr: 1,
    fastsattBelop: '0',
    lagtTilAvSaksbehandler: false,
    inntektskategori: 'ARBEIDSTAKER',
    arbeidsgiverId: '',
    arbeidsperiodeFom: '',
    arbeidsperiodeTom: '',
    kanRedigereInntekt: false,
  };

  const fields2 = new MockFieldsWithContent('fieldArrayName', [andelField2]);

  const wrapper = shallowWithIntl(<AndelRowImpl
    intl={intlMock}
    fields={fields2}
    readOnly={false}
    skalVisePeriode={false}
    skalViseSletteknapp={false}
    skalViseRefusjon={false}
    kanRedigereInntekt={false}
    andelElementFieldId="fieldArrayName[0]"
    removeAndel={() => {}}
    index={0}
    inntektskategoriKoder={[]}
    isAksjonspunktClosed={false}
    skalRedigereInntektskategori={false}
    {...ownProps}
  />, messages);
  const row = wrapper.find(TableRow);
  expect(row.length).toEqual(1);
  const columns = row.first().find(TableColumn);
  expect(columns.length).toEqual(4);
  expect(columns.first().find(InputField).length).toEqual(1);
  const inputField = columns.at(1).find(InputField);
  expect(inputField.length).toEqual(1);
  expect(inputField.props().name).toEqual('fieldArrayName[0].belopReadOnly');
  expect(columns.at(2).find(SelectField).length).toEqual(1);
  const btn = columns.at(3).find('button');
  expect(btn.length).toEqual(0);
});

it('skal vise komponent med sletteknapp', () => {
  const andelField2 = {
    nyAndel: false,
    andel: 'Sopra Steria AS (233647823)',
    andelsnr: 1,
    fastsattBelop: '0',
    lagtTilAvSaksbehandler: false,
    inntektskategori: 'ARBEIDSTAKER',
    arbeidsgiverId: '',
    arbeidsperiodeFom: '',
    arbeidsperiodeTom: '',
  };

  const fields2 = new MockFieldsWithContent('fieldArrayName', [andelField2]);

  const wrapper = shallowWithIntl(<AndelRowImpl
    intl={intlMock}
    fields={fields2}
    readOnly={false}
    skalVisePeriode={false}
    skalViseSletteknapp
    skalViseRefusjon={false}
    kanRedigereInntekt
    andelElementFieldId="fieldArrayName[0]"
    removeAndel={() => {}}
    index={0}
    {...ownProps}
    {...props}
  />, messages);
  const row = wrapper.find(TableRow);
  expect(row.length).toEqual(1);
  const columns = row.first().find(TableColumn);
  expect(columns.length).toEqual(4);
  expect(columns.first().find(InputField).length).toEqual(1);
  expect(columns.at(1).find(InputField).length).toEqual(1);
  expect(columns.at(2).find(SelectField).length).toEqual(1);
  const btn = columns.at(3).find('button');
  expect(btn.length).toEqual(1);
});
