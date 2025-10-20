import { AktivitetStatus } from '@navikt/ft-kodeverk';
import type { ArbeidstakerUtenIMAndel, Beregningsgrunnlag, BeregningsgrunnlagArbeidsforhold } from '@navikt/ft-types';

import { FaktaOmBeregningTilfelle } from '../../../../kodeverk/faktaOmBeregningTilfelle';
import type { FaktaOmBeregningAksjonspunktValues } from '../../../../typer/FaktaBeregningTypes';
import type { InntektTransformed } from '../../../../typer/FieldValues';
import { VurderMottarYtelseForm } from './VurderMottarYtelseForm';
import { frilansFieldName, utledArbeidsforholdFieldName } from './VurderMottarYtelseUtils';

const beregningsgrunnlag = {
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPrStatusOgAndel: [
        { andelsnr: 1, aktivitetStatus: 'AT' },
        { andelsnr: 2, aktivitetStatus: 'AT' },
        { andelsnr: 3, aktivitetStatus: 'AT' },
        { andelsnr: 4, aktivitetStatus: 'FL' },
      ],
    },
  ],
} as Beregningsgrunnlag;

const arbeidsforhold = {
  arbeidsgiverIdent: '3284788923',
  arbeidsforholdId: '321378huda7e2',
  startdato: '2017-01-01',
  opphoersdato: '2018-01-01',
} as BeregningsgrunnlagArbeidsforhold;

const arbeidsforhold2 = {
  arbeidsgiverIdent: '843597943435',
  arbeidsforholdId: 'jjisefoosfe',
  startdato: '2017-01-01',
  opphoersdato: '2018-01-01',
} as BeregningsgrunnlagArbeidsforhold;

const arbeidsforhold3 = {
  arbeidsgiverIdent: '843597943435',
  arbeidsforholdId: '5465465464',
  startdato: '2017-01-01',
  opphoersdato: '2018-01-01',
} as BeregningsgrunnlagArbeidsforhold;

const andel = {
  aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
  andelsnr: 1,
  inntektPrMnd: 25000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold,
};

const andel2 = {
  aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
  andelsnr: 2,
  inntektPrMnd: 25000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: arbeidsforhold2,
};

const andel3 = {
  aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
  andelsnr: 3,
  inntektPrMnd: 25000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: arbeidsforhold3,
};

const arbeidstakerAndelerUtenIM = [
  { ...andel, mottarYtelse: undefined } as ArbeidstakerUtenIMAndel,
  { ...andel2, mottarYtelse: false } as ArbeidstakerUtenIMAndel,
  { ...andel3, mottarYtelse: true } as ArbeidstakerUtenIMAndel,
];

describe('VurderMottarYtelseForm', () => {
  it('skal teste at initial values bygges korrekt uten dto til stede', () => {
    const tilfeller = [FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const initialValues = VurderMottarYtelseForm.buildInitialValues(undefined, tilfeller);
    expect(initialValues).toEqual({});
  });

  it('skal teste at initial values bygges korrekt med frilans uten definert mottar ytelse', () => {
    const tilfeller = [FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const mottarYtelse = {
      erFrilans: true,
      frilansMottarYtelse: undefined,
    };
    const initialValues = VurderMottarYtelseForm.buildInitialValues(mottarYtelse, tilfeller);
    expect(initialValues[frilansFieldName]).toBe(undefined);
  });

  it('skal teste at initial values bygges korrekt med frilans med mottar ytelse', () => {
    const tilfeller = [FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const mottarYtelse = {
      erFrilans: true,
      frilansMottarYtelse: true,
    };
    const initialValues = VurderMottarYtelseForm.buildInitialValues(mottarYtelse, tilfeller);
    expect(initialValues[frilansFieldName]).toBe(true);
  });

  it('skal teste at initial values bygges korrekt med frilans uten mottar ytelse', () => {
    const tilfeller = [FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const mottarYtelse = {
      erFrilans: true,
      frilansMottarYtelse: false,
    };
    const initialValues = VurderMottarYtelseForm.buildInitialValues(mottarYtelse, tilfeller);
    expect(initialValues[frilansFieldName]).toBe(false);
  });

  it('skal teste at initial values bygges korrekt med frilans og arbeidsforhold uten inntektsmelding', () => {
    const tilfeller = [FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const mottarYtelse = {
      erFrilans: true,
      frilansMottarYtelse: false,
      arbeidstakerAndelerUtenIM,
    };
    const initialValues = VurderMottarYtelseForm.buildInitialValues(mottarYtelse, tilfeller);
    expect(initialValues[frilansFieldName]).toBe(false);
    expect(initialValues[utledArbeidsforholdFieldName(andel)]).toBe(undefined);
    expect(initialValues[utledArbeidsforholdFieldName(andel2)]).toBe(false);
    expect(initialValues[utledArbeidsforholdFieldName(andel3)]).toBe(true);
  });

  it('skal transform values og sende ned FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING ved mottar ytelse for AT uten inntektsmelding', () => {
    const tilfeller = [FaktaOmBeregningTilfelle.VURDER_LØNNSENDRING, FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const inntektPrMnd = [
      { andelsnr: andel.andelsnr, fastsattBelop: 10000 } as InntektTransformed,
      { andelsnr: andel3.andelsnr, fastsattBelop: 20000 } as InntektTransformed,
    ];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller,
      vurderMottarYtelse: {
        erFrilanser: false,
        arbeidstakerAndelerUtenIM,
      },
      andelerForFaktaOmBeregning: [],
    };
    const values = {
      vurderMottarYtelseValues: {
        [utledArbeidsforholdFieldName(andel)]: true,
        [utledArbeidsforholdFieldName(andel2)]: false,
        [utledArbeidsforholdFieldName(andel3)]: true,
      },
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
      frilansInntektValues: {
        fastsattBelop: 10000,
      },
    } as FaktaOmBeregningAksjonspunktValues;
    const fastsatteAndelsnr: number[] = [];
    const transformed = VurderMottarYtelseForm.transformValues(
      values,
      inntektPrMnd,
      faktaOmBeregning,
      beregningsgrunnlag,
      fastsatteAndelsnr,
    );
    const fastsatteInntekter = transformed.fastsattUtenInntektsmelding?.andelListe || [];
    expect(fastsatteAndelsnr.length).toBe(2);
    expect(fastsatteAndelsnr.find(nr => nr === andel.andelsnr) === undefined).toBe(false);
    expect(fastsatteAndelsnr.find(nr => nr === andel3.andelsnr) === undefined).toBe(false);
    expect(fastsatteInntekter.length).toBe(2);
    expect(fastsatteInntekter[0].andelsnr).toBe(1);
    expect(fastsatteInntekter[0].fastsattBeløp).toBe(10000);
    expect(fastsatteInntekter[1].andelsnr).toBe(3);
    expect(fastsatteInntekter[1].fastsattBeløp).toBe(20000);
    const fastsatteTilfeller = transformed.faktaOmBeregningTilfeller || [];
    expect(fastsatteTilfeller.length).toBe(2);
    expect(fastsatteTilfeller[0]).toBe(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
    expect(fastsatteTilfeller[1]).toBe(FaktaOmBeregningTilfelle.FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING);
  });

  it('skal kunne sette beløp til 0', () => {
    const tilfeller = [FaktaOmBeregningTilfelle.VURDER_LØNNSENDRING, FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const inntektPrMnd = [
      { andelsnr: andel.andelsnr, fastsattBelop: 0 } as InntektTransformed,
      { andelsnr: andel3.andelsnr, fastsattBelop: 0 } as InntektTransformed,
    ];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller,
      vurderMottarYtelse: {
        erFrilanser: false,
        arbeidstakerAndelerUtenIM,
      },
      andelerForFaktaOmBeregning: [],
    };
    const values = {
      vurderMottarYtelseValues: {
        [utledArbeidsforholdFieldName(andel)]: true,
        [utledArbeidsforholdFieldName(andel2)]: false,
        [utledArbeidsforholdFieldName(andel3)]: true,
      },
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
      frilansInntektValues: {
        fastsattBelop: 0,
      },
    } as FaktaOmBeregningAksjonspunktValues;
    const fastsatteAndelsnr: number[] = [];
    const transformed = VurderMottarYtelseForm.transformValues(
      values,
      inntektPrMnd,
      faktaOmBeregning,
      beregningsgrunnlag,
      fastsatteAndelsnr,
    );
    const fastsatteInntekter = transformed.fastsattUtenInntektsmelding?.andelListe || [];
    expect(fastsatteAndelsnr.length).toBe(2);
    expect(fastsatteAndelsnr.find(nr => nr === andel.andelsnr) === undefined).toBe(false);
    expect(fastsatteAndelsnr.find(nr => nr === andel3.andelsnr) === undefined).toBe(false);
    expect(fastsatteInntekter.length).toBe(2);
    expect(fastsatteInntekter[0].andelsnr).toBe(1);
    expect(fastsatteInntekter[0].fastsattBeløp).toBe(0);
    expect(fastsatteInntekter[1].andelsnr).toBe(3);
    expect(fastsatteInntekter[1].fastsattBeløp).toBe(0);
    const fastsatteTilfeller = transformed.faktaOmBeregningTilfeller || [];
    expect(fastsatteTilfeller.length).toBe(2);
    expect(fastsatteTilfeller[0]).toBe(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
    expect(fastsatteTilfeller[1]).toBe(FaktaOmBeregningTilfelle.FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING);
  });

  it('skal transform values og sende ned FASTSETT_MAANEDSINNTEKT_FL ved mottar ytelse for Frilans', () => {
    const tilfeller = [FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL, FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const inntektPrMnd = [{ andelsnr: 4, fastsattBelop: 10000, aktivitetStatus: 'FL' } as InntektTransformed];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller,
      vurderMottarYtelse: {
        erFrilanser: true,
        arbeidstakerAndelerUtenIM: [],
      },
      andelerForFaktaOmBeregning: [],
    };
    const values = {
      vurderMottarYtelseValues: {
        [frilansFieldName]: true,
      },
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
      frilansInntektValues: {
        fastsattBelop: 10000,
      },
    } as FaktaOmBeregningAksjonspunktValues;
    const fastsatteAndelsnr: number[] = [];
    const transformed = VurderMottarYtelseForm.transformValues(
      values,
      inntektPrMnd,
      faktaOmBeregning,
      beregningsgrunnlag,
      fastsatteAndelsnr,
    );
    const fastsattInntekt = transformed.fastsettMaanedsinntektFL?.maanedsinntekt;
    expect(fastsatteAndelsnr.length).toBe(1);
    expect(fastsattInntekt).toBe(10000);
    const fastsatteTilfeller = transformed.faktaOmBeregningTilfeller || [];
    expect(fastsatteTilfeller.length).toBe(2);
    expect(fastsatteTilfeller[0]).toBe(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
    expect(fastsatteTilfeller[1]).toBe(FaktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL);
  });

  it('skal transform values ved mottar ytelse for Frilans og arbeidstaker uten inntektsmelding', () => {
    const tilfeller = [
      FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL,
      FaktaOmBeregningTilfelle.VURDER_LØNNSENDRING,
      FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
    ];
    const inntektPrMnd = [
      { andelsnr: andel.andelsnr, fastsattBelop: 10000 } as InntektTransformed,
      { andelsnr: andel3.andelsnr, fastsattBelop: 20000 } as InntektTransformed,
      { andelsnr: 4, fastsattBelop: 10000, aktivitetStatus: 'FL' } as InntektTransformed,
    ];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller,
      vurderMottarYtelse: {
        erFrilanser: true,
        arbeidstakerAndelerUtenIM,
      },
      andelerForFaktaOmBeregning: [],
    };
    const fastsatteAndelsnr: number[] = [];
    const values = {
      vurderMottarYtelseValues: {
        [frilansFieldName]: true,
        [utledArbeidsforholdFieldName(andel)]: true,
        [utledArbeidsforholdFieldName(andel2)]: false,
        [utledArbeidsforholdFieldName(andel3)]: true,
      },
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
      frilansInntektValues: {
        fastsattBelop: 10000,
      },
    } as FaktaOmBeregningAksjonspunktValues;
    const transformed = VurderMottarYtelseForm.transformValues(
      values,
      inntektPrMnd,
      faktaOmBeregning,
      beregningsgrunnlag,
      fastsatteAndelsnr,
    );
    expect(fastsatteAndelsnr.length).toBe(3);
    const fastsattFrilansinntekt = transformed.fastsettMaanedsinntektFL?.maanedsinntekt;
    expect(fastsattFrilansinntekt).toBe(10000);

    const fastsatteArbeidsinntekter = transformed.fastsattUtenInntektsmelding?.andelListe || [];
    expect(fastsatteArbeidsinntekter.length).toBe(2);
    expect(fastsatteArbeidsinntekter[0].andelsnr).toBe(1);
    expect(fastsatteArbeidsinntekter[0].fastsattBeløp).toBe(10000);
    expect(fastsatteArbeidsinntekter[1].andelsnr).toBe(3);
    expect(fastsatteArbeidsinntekter[1].fastsattBeløp).toBe(20000);
    const fastsatteTilfeller = transformed.faktaOmBeregningTilfeller || [];
    expect(fastsatteTilfeller.length).toBe(3);
    expect(fastsatteTilfeller[0]).toBe(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
    expect(fastsatteTilfeller[2]).toBe(FaktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL);
    expect(fastsatteTilfeller[1]).toBe(FaktaOmBeregningTilfelle.FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING);
  });

  it('skal ikkje transform values mottar ytelse for AT uten inntektsmelding visst inntekt allerede er lagt til', () => {
    const tilfeller = [
      FaktaOmBeregningTilfelle.VURDER_LØNNSENDRING,
      FaktaOmBeregningTilfelle.FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
      FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
    ];
    const inntektPrMnd = [
      { andelsnr: andel.andelsnr, fastsattBelop: 10000 } as InntektTransformed,
      { andelsnr: andel3.andelsnr, fastsattBelop: 20000 } as InntektTransformed,
    ];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller,
      vurderMottarYtelse: {
        erFrilanser: false,
        arbeidstakerAndelerUtenIM,
      },
      andelerForFaktaOmBeregning: [],
    };
    const fastsatteAndelsnr = [andel.andelsnr, andel3.andelsnr];
    const values = {
      vurderMottarYtelseValues: {
        [utledArbeidsforholdFieldName(andel)]: true,
        [utledArbeidsforholdFieldName(andel2)]: false,
        [utledArbeidsforholdFieldName(andel3)]: true,
      },
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const transformed = VurderMottarYtelseForm.transformValues(
      values,
      inntektPrMnd,
      faktaOmBeregning,
      beregningsgrunnlag,
      fastsatteAndelsnr,
    );
    expect(transformed.fastsattUtenInntektsmelding).toBeUndefined();
  });

  it('skal ikkje transform values mottar ytelse for frilans visst inntekt allerede er lagt til', () => {
    const tilfeller = [
      FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL,
      FaktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL,
      FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
    ];
    const inntektPrMnd = [{ andelsnr: 4, fastsattBelop: 10000, aktivitetStatus: 'FL' } as InntektTransformed];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller,
      vurderMottarYtelse: {
        erFrilanser: true,
        arbeidstakerAndelerUtenIM: [],
      },
      andelerForFaktaOmBeregning: [],
    };
    const fastsatteAndelsnr = [4];
    const values = {
      vurderMottarYtelseValues: {
        [frilansFieldName]: true,
      },
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const transformed = VurderMottarYtelseForm.transformValues(
      values,
      inntektPrMnd,
      faktaOmBeregning,
      beregningsgrunnlag,
      fastsatteAndelsnr,
    );
    expect(transformed.fastsettMaanedsinntektFL).toBeUndefined();
  });
});
