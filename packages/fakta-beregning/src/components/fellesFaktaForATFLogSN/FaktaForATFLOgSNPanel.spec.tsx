import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregningAndel,
} from '@navikt/ft-types';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';
import { besteberegningField } from './besteberegningFodendeKvinne/VurderBesteberegningForm';
import { INNTEKT_FIELD_ARRAY_NAME } from './BgFaktaUtils';
import { FaktaForATFLOgSNPanelImpl, transformValues, transformValuesFaktaForATFLOgSN } from './FaktaForATFLOgSNPanel';
import NyIArbeidslivetSNForm from './nyIArbeidslivet/NyIArbeidslivetSNForm';
import TidsbegrensetArbeidsforholdForm from './tidsbegrensetArbeidsforhold/TidsbegrensetArbeidsforholdForm';
import { lonnsendringField } from './vurderOgFastsettATFL/forms/LonnsendringForm';
import { erNyoppstartetFLField } from './vurderOgFastsettATFL/forms/NyoppstartetFLForm';
import VurderOgFastsettATFL from './vurderOgFastsettATFL/VurderOgFastsettATFL';

const { VURDER_FAKTA_FOR_ATFL_SN } = FaktaBeregningAksjonspunktCode;

const avklaringsbehov = [
  {
    definisjon: VURDER_FAKTA_FOR_ATFL_SN,
    status: 'OPPR',
    kanLoses: true,
    erAktivt: true,
  },
];

const lagBeregningsgrunnlag = andeler =>
  ({
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPrStatusOgAndel: andeler.map(andel => ({
          andelsnr: andel.andelsnr,
          aktivitetStatus: andel.aktivitetStatus,
          inntektskategori: andel.inntektskategori,
          erNyoppstartet: andel.erNyoppstartet,
        })),
      },
    ],
  } as Beregningsgrunnlag);

describe('<FaktaForATFLOgSNPanel>', () => {
  it.skip('skal vise TidsbegrensetArbeidsforholdForm', () => {
    // const aktivertePaneler = [FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD];
    const wrapper = shallow(
      <FaktaForATFLOgSNPanelImpl
        readOnly={false}
        // aktivePaneler={aktivertePaneler}
        isAksjonspunktClosed={false}
        // faktaOmBeregning={{} as FaktaOmBeregning}
        beregningsgrunnlag={{} as Beregningsgrunnlag}
        alleKodeverk={{} as AlleKodeverk}
        avklaringsbehov={avklaringsbehov}
        erOverstyrer={false}
        arbeidsgiverOpplysningerPerId={{}}
        updateOverstyring={jest.fn()}
      />,
    );
    const tidsbegrensetArbeidsforhold = wrapper.find(TidsbegrensetArbeidsforholdForm);
    expect(tidsbegrensetArbeidsforhold).toHaveLength(1);
  });

  it.skip('skal vise NyIArbeidslivetSNForm', () => {
    // const aktivertePaneler = [FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET];
    const wrapper = shallow(
      <FaktaForATFLOgSNPanelImpl
        readOnly={false}
        // aktivePaneler={aktivertePaneler}
        isAksjonspunktClosed={false}
        // faktaOmBeregning={{} as FaktaOmBeregning}
        beregningsgrunnlag={{} as Beregningsgrunnlag}
        alleKodeverk={{} as AlleKodeverk}
        avklaringsbehov={avklaringsbehov}
        erOverstyrer={false}
        arbeidsgiverOpplysningerPerId={{}}
        updateOverstyring={jest.fn()}
      />,
    );
    const nyIArbeidslivet = wrapper.find(NyIArbeidslivetSNForm);
    expect(nyIArbeidslivet).toHaveLength(1);
  });

  it.skip('skal vise NyoppstartetFLForm', () => {
    // const aktivertePaneler = [FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL];
    const wrapper = shallow(
      <FaktaForATFLOgSNPanelImpl
        readOnly={false}
        // aktivePaneler={aktivertePaneler}
        isAksjonspunktClosed={false}
        // faktaOmBeregning={{} as FaktaOmBeregning}
        beregningsgrunnlag={{} as Beregningsgrunnlag}
        alleKodeverk={{} as AlleKodeverk}
        avklaringsbehov={avklaringsbehov}
        erOverstyrer={false}
        arbeidsgiverOpplysningerPerId={{}}
        updateOverstyring={jest.fn()}
      />,
    );
    const vurderATFL = wrapper.find(VurderOgFastsettATFL);
    expect(vurderATFL).toHaveLength(1);
  });

  it('skal kunne transform values for kun besteberegning', () => {
    const aktivePaneler = [FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE];
    const andel1 = { andelsnr: 1, aktivitetStatus: 'ATFL' } as BeregningsgrunnlagAndel;
    const andel2 = { andelsnr: 2, aktivitetStatus: 'SN' } as BeregningsgrunnlagAndel;
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: aktivePaneler,
      besteberegningAndeler: [andel1, andel2],
      vurderBesteberegning: { skalHaBesteberegning: true },
    };
    const beregningsgrunnlag = {
      skjaeringstidspunktBeregning: null,
      dekningsgrad: null,
      grunnbel??p: null,
      erOverstyrtInntekt: null,
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [andel1, andel2],
        },
      ],
    } as Beregningsgrunnlag;
    const values = {
      tilfeller: aktivePaneler,
      vurderMottarYtelse: undefined,
      faktaOmBeregning,
      beregningsgrunnlag,
    };
    values[besteberegningField] = true;
    values[INNTEKT_FIELD_ARRAY_NAME] = [
      {
        fastsattBelop: '10 000',
        inntektskategori: 'ARBEIDSTAKER',
        andelsnr: andel1.andelsnr,
        kanRedigereInntekt: true,
      },
      {
        fastsattBelop: '20 000',
        inntektskategori: 'SELVSTENDIG_N??RINGSDRIVENDE',
        andelsnr: andel2.andelsnr,
        kanRedigereInntekt: true,
      },
    ];
    const transformedValues = transformValuesFaktaForATFLOgSN(values);
    expect(transformedValues.fakta.faktaOmBeregningTilfeller).toHaveLength(2);
    expect(transformedValues.fakta.faktaOmBeregningTilfeller[1]).toEqual(
      FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE,
    );
    expect(transformedValues.fakta.faktaOmBeregningTilfeller[0]).toEqual(
      FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING,
    );
    expect(transformedValues.fakta.besteberegningAndeler.besteberegningAndelListe).toHaveLength(2);
    expect(transformedValues.fakta.besteberegningAndeler.besteberegningAndelListe[0].andelsnr).toEqual(andel1.andelsnr);
    expect(
      transformedValues.fakta.besteberegningAndeler.besteberegningAndelListe[0].fastsatteVerdier.fastsattBel??p,
    ).toEqual(10000);
    expect(
      transformedValues.fakta.besteberegningAndeler.besteberegningAndelListe[0].fastsatteVerdier.inntektskategori,
    ).toEqual('ARBEIDSTAKER');
    expect(transformedValues.fakta.besteberegningAndeler.besteberegningAndelListe[1].andelsnr).toEqual(andel2.andelsnr);
    expect(
      transformedValues.fakta.besteberegningAndeler.besteberegningAndelListe[1].fastsatteVerdier.fastsattBel??p,
    ).toEqual(20000);
    expect(
      transformedValues.fakta.besteberegningAndeler.besteberegningAndelListe[1].fastsatteVerdier.inntektskategori,
    ).toEqual('SELVSTENDIG_N??RINGSDRIVENDE');
  });

  it('skal kunne transform values nyoppstartet fl og l??nnsendring', () => {
    const aktivePaneler = [
      FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL,
      FaktaOmBeregningTilfelle.VURDER_LONNSENDRING,
    ];
    const forholdMedAtOgFl = {
      andelsnr: 2,
      inntektskategori: 'Arbeidstaker',
      arbeidsforhold: {
        arbeidsgiverNavn: 'bedrift',
        arbeidsgiverId: '123',
        arbeidsforholdId: 'abc',
        startdato: '2018-01-01',
      } as BeregningsgrunnlagArbeidsforhold,
    };

    const forholdMedLonnsendringUtenIM = {
      andelsnr: 2,
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforhold: {
        arbeidsgiverNavn: 'bedrift',
        arbeidsgiverId: '123',
        arbeidsforholdId: 'abc',
        startdato: '2018-01-01',
      } as BeregningsgrunnlagArbeidsforhold,
    };

    const frilansAndel = {
      inntektskategori: 'Frilans',
      arbeidsforhold: {
        startdato: '2018-01-01',
        opphoersdato: '2018-06-01',
      } as BeregningsgrunnlagArbeidsforhold,
      andelsnr: 1,
      arbeidsforholdType: 'Frilans',
      aktivitetStatus: AktivitetStatus.FRILANSER,
    } as FaktaOmBeregningAndel;

    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: aktivePaneler,
      arbeidsforholdMedL??nnsendringUtenIM: [forholdMedLonnsendringUtenIM],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [forholdMedAtOgFl],
      frilansAndel,
    };
    const beregningsgrunnlag = lagBeregningsgrunnlag([forholdMedLonnsendringUtenIM, frilansAndel]);
    const values = {
      tilfeller: aktivePaneler,
      vurderMottarYtelse: undefined,
      faktaOmBeregning,
      beregningsgrunnlag,
    };
    values[lonnsendringField] = true;
    values[erNyoppstartetFLField] = true;
    values[INNTEKT_FIELD_ARRAY_NAME] = [
      {
        fastsattBelop: '10 000',
        inntektskategori: 'ARBEIDSTAKER',
        andelsnr: forholdMedLonnsendringUtenIM.andelsnr,
        kanRedigereInntekt: true,
      },
      {
        fastsattBelop: '20 000',
        inntektskategori: 'FRILANS',
        andelsnr: frilansAndel.andelsnr,
        aktivitetStatus: AktivitetStatus.FRILANSER,
        kanRedigereInntekt: true,
      },
    ];
    const transformedValues = transformValuesFaktaForATFLOgSN(values);
    expect(transformedValues.fakta.faktaOmBeregningTilfeller).toHaveLength(4);
    expect(
      transformedValues.fakta.faktaOmBeregningTilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING),
    ).toEqual(true);
    expect(
      transformedValues.fakta.faktaOmBeregningTilfeller.includes(
        FaktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
      ),
    ).toEqual(true);
    expect(
      transformedValues.fakta.faktaOmBeregningTilfeller.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL),
    ).toEqual(true);
    expect(
      transformedValues.fakta.faktaOmBeregningTilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL),
    ).toEqual(true);
    expect(transformedValues.fakta.fastsattUtenInntektsmelding.andelListe).toHaveLength(1);
    expect(transformedValues.fakta.fastsattUtenInntektsmelding.andelListe[0].andelsnr).toEqual(2);
    expect(transformedValues.fakta.fastsattUtenInntektsmelding.andelListe[0].fastsattBel??p).toEqual(10000);
    expect(transformedValues.fakta.fastsettMaanedsinntektFL.maanedsinntekt).toEqual(20000);
  });

  it('skal transform values for nyIArbeidslivet om kun ny i arbeidslivet', () => {
    const nyIArbTransform = sinon.spy();
    const kortvarigTransform = sinon.spy();
    const lonnsendringTransform = sinon.spy();
    const vurderRefusjonTransform = sinon.spy();

    const aktivePaneler = [FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET];
    transformValues(
      aktivePaneler,
      nyIArbTransform,
      kortvarigTransform,
      lonnsendringTransform,
      vurderRefusjonTransform,
    )({}, {});
    expect(nyIArbTransform).toHaveProperty('callCount', 1);
    expect(kortvarigTransform).toHaveProperty('callCount', 0);
    expect(lonnsendringTransform).toHaveProperty('callCount', 0);
    expect(vurderRefusjonTransform).toHaveProperty('callCount', 0);
  });

  it('skal transform values for nyIArbeidslivet og kortvarig om kun ny i arbeidslivet og kortvarig', () => {
    const nyIArbTransform = sinon.spy();
    const kortvarigTransform = sinon.spy();
    const lonnsendringTransform = sinon.spy();
    const vurderRefusjonTransform = sinon.spy();

    const aktivePaneler = [
      FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET,
      FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD,
    ];
    transformValues(
      aktivePaneler,
      nyIArbTransform,
      kortvarigTransform,
      lonnsendringTransform,
      vurderRefusjonTransform,
    )({}, {});
    expect(nyIArbTransform).toHaveProperty('callCount', 1);
    expect(kortvarigTransform).toHaveProperty('callCount', 1);
    expect(lonnsendringTransform).toHaveProperty('callCount', 0);
    expect(vurderRefusjonTransform).toHaveProperty('callCount', 0);
  });
});
