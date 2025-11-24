import type {
  ArbeidstakerUtenIMAndel,
  Beregningsgrunnlag,
  BeregningsgrunnlagArbeidsforhold,
  VurderMottarYtelse,
} from '@navikt/ft-types';

import type { FaktaOmBeregningAksjonspunktValues } from '../../../../typer/FaktaBeregningTypes';
import {
  andelsnrMottarYtelseMap,
  frilansFieldName,
  harVurdertMottarYtelse,
  skalFastsetteInntektATUtenInntektsmelding,
  utledArbeidsforholdFieldName,
} from './VurderMottarYtelseUtils';

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

const andel: ArbeidstakerUtenIMAndel = {
  aktivitetStatus: 'AT',
  andelsnr: 1,
  inntektPrMnd: 25000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold,
};

const andel2: ArbeidstakerUtenIMAndel = {
  aktivitetStatus: 'AT',
  andelsnr: 2,
  inntektPrMnd: 25000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: arbeidsforhold2,
};

const andel3: ArbeidstakerUtenIMAndel = {
  aktivitetStatus: 'AT',
  andelsnr: 3,
  inntektPrMnd: 25000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: arbeidsforhold3,
};

const frilansAndel = {
  aktivitetStatus: 'FL',
  andelsnr: 4,
};

const arbeidstakerAndelerUtenIM: ArbeidstakerUtenIMAndel[] = [
  { ...andel, mottarYtelse: undefined },
  { ...andel2, mottarYtelse: false },
  { ...andel3, mottarYtelse: true },
];

const beregningsgrunnlag = {
  beregningsgrunnlagPeriode: [
    {
      beregningsgrunnlagPrStatusOgAndel: [andel, andel2, andel3, frilansAndel],
    },
  ],
} as Beregningsgrunnlag;

describe('<VurderMottarYtelseUtils>', () => {
  it('skal returnere false når man ikke har vurdert alle punktene i mottar ytelse for frilans', () => {
    const vurderMottarYtelse = {
      erFrilans: true,
      arbeidstakerAndelerUtenIM: [],
    };
    const vurderMottarYtelseValues = {
      [frilansFieldName]: undefined,
    };
    const values = {
      vurderMottarYtelseValues: vurderMottarYtelseValues,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const harVurdert = harVurdertMottarYtelse(values, vurderMottarYtelse);
    expect(harVurdert).toBe(false);
  });

  it('skal returnere true når man har vurdert alle punktene i mottar ytelse for frilans', () => {
    const vurderMottarYtelse = {
      erFrilans: true,
      arbeidstakerAndelerUtenIM: [],
    };
    const vurderMottarYtelseValues = {
      [frilansFieldName]: true,
    };
    const values = {
      vurderMottarYtelseValues: vurderMottarYtelseValues,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const harVurdert = harVurdertMottarYtelse(values, vurderMottarYtelse);
    expect(harVurdert).toBe(true);
  });

  it('skal returnere true når man har vurdert alle punktene i mottar ytelse for arbeidstaker uten inntektsmelding', () => {
    const vurderMottarYtelse = {
      erFrilans: false,
      arbeidstakerAndelerUtenIM,
    } as VurderMottarYtelse;
    const vurderMottarYtelseValues = {
      [utledArbeidsforholdFieldName(andel)]: true,
      [utledArbeidsforholdFieldName(andel2)]: false,
      [utledArbeidsforholdFieldName(andel3)]: false,
    };
    const values = {
      vurderMottarYtelseValues: vurderMottarYtelseValues,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const harVurdert = harVurdertMottarYtelse(values, vurderMottarYtelse);
    expect(harVurdert).toBe(true);
  });

  it('skal returnere false når man har ikkje vurdert alle punktene i mottar ytelse for arbeidstaker uten inntektsmelding', () => {
    const vurderMottarYtelse = {
      erFrilans: false,
      arbeidstakerAndelerUtenIM,
    } as VurderMottarYtelse;
    const vurderMottarYtelseValues = {
      [utledArbeidsforholdFieldName(andel)]: true,
      [utledArbeidsforholdFieldName(andel2)]: false,
      [utledArbeidsforholdFieldName(andel3)]: null,
    };
    const values = {
      vurderMottarYtelseValues: vurderMottarYtelseValues,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const harVurdert = harVurdertMottarYtelse(values, vurderMottarYtelse);
    expect(harVurdert).toBe(false);
  });

  it('skal returnere tomt objekt om vurderMottarYtelseDto ikkje er tilstades', () => {
    const mottarYtelseMap = andelsnrMottarYtelseMap(
      { erTilVurdering: true, periode: { fom: '2022-01-01', tom: '2022-02-01' } } as FaktaOmBeregningAksjonspunktValues,
      undefined,
      undefined,
    );
    expect(Object.keys(mottarYtelseMap)).toHaveLength(0);
  });

  it('skal vurdering av mottar ytelse for arbeidstakerandeler', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    } as VurderMottarYtelse;
    const vurderMottarYtelseValues = {
      [utledArbeidsforholdFieldName(andel)]: true,
      [utledArbeidsforholdFieldName(andel2)]: false,
      [utledArbeidsforholdFieldName(andel3)]: null,
    };
    const values = {
      vurderMottarYtelseValues: vurderMottarYtelseValues,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const mottarYtelseMap = andelsnrMottarYtelseMap(values, vurderMottarYtelse, beregningsgrunnlag);
    expect(mottarYtelseMap[1]).toBe(true);
    expect(mottarYtelseMap[2]).toBe(false);
    expect(mottarYtelseMap[3]).toBe(null);
  });

  it('skal vurdering av mottar ytelse for arbeidstakerandeler og frilans', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    } as VurderMottarYtelse;
    const vurderMottarYtelseValues = {
      [utledArbeidsforholdFieldName(andel)]: true,
      [utledArbeidsforholdFieldName(andel2)]: false,
      [utledArbeidsforholdFieldName(andel3)]: null,
      [frilansFieldName]: true,
    };
    const values = {
      vurderMottarYtelseValues: vurderMottarYtelseValues,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const mottarYtelseMap = andelsnrMottarYtelseMap(values, vurderMottarYtelse, beregningsgrunnlag);
    expect(mottarYtelseMap[1]).toBe(true);
    expect(mottarYtelseMap[2]).toBe(false);
    expect(mottarYtelseMap[3]).toBe(null);
    expect(mottarYtelseMap[4]).toBe(true);
  });

  it('skalFastsetteInntektATUtenInntektsmelding skal returnere true om det er minst ein AT-andel som skal fastsett inntekt', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    } as VurderMottarYtelse;
    const vurderMottarYtelseValues = {
      [utledArbeidsforholdFieldName(andel)]: true,
      [utledArbeidsforholdFieldName(andel2)]: false,
      [utledArbeidsforholdFieldName(andel3)]: null,
      [frilansFieldName]: true,
    };

    const values = {
      vurderMottarYtelseValues: vurderMottarYtelseValues,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const skalFastsetteAT = skalFastsetteInntektATUtenInntektsmelding(values, vurderMottarYtelse);
    expect(skalFastsetteAT).toBe(true);
  });

  it('skalFastsetteInntektATUtenInntektsmelding skal returnere false om ingen AT andeler eksisterer i values', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    } as VurderMottarYtelse;
    const vurderMottarYtelseValues = {
      [frilansFieldName]: true,
    };
    const values = {
      vurderMottarYtelseValues: vurderMottarYtelseValues,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const skalFastsetteAT = skalFastsetteInntektATUtenInntektsmelding(values, vurderMottarYtelse);
    expect(skalFastsetteAT).toBe(false);
  });

  it('skalFastsetteInntektATUtenInntektsmelding skal returnere false om mottarYtelse for alle AT-andeler i values er satt til null', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    } as VurderMottarYtelse;
    const vurderMottarYtelseValues = {
      [utledArbeidsforholdFieldName(andel)]: null,
      [utledArbeidsforholdFieldName(andel2)]: null,
      [utledArbeidsforholdFieldName(andel3)]: null,
      [frilansFieldName]: true,
    };
    const values = {
      vurderMottarYtelseValues: vurderMottarYtelseValues,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const skalFastsetteAT = skalFastsetteInntektATUtenInntektsmelding(values, vurderMottarYtelse);
    expect(skalFastsetteAT).toBe(false);
  });

  it('skalFastsetteInntektATUtenInntektsmelding skal returnere false om mottarYtelse for alle AT-andeler i values er satt til false', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    } as VurderMottarYtelse;
    const vurderMottarYtelseValues = {
      [utledArbeidsforholdFieldName(andel)]: false,
      [utledArbeidsforholdFieldName(andel2)]: false,
      [utledArbeidsforholdFieldName(andel3)]: false,
      [frilansFieldName]: true,
    };
    const values = {
      vurderMottarYtelseValues: vurderMottarYtelseValues,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    } as FaktaOmBeregningAksjonspunktValues;
    const skalFastsetteAT = skalFastsetteInntektATUtenInntektsmelding(values, vurderMottarYtelse);
    expect(skalFastsetteAT).toBe(false);
  });
});
