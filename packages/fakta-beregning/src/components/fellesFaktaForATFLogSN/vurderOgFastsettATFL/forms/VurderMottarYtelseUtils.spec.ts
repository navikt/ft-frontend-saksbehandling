import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, BeregningsgrunnlagArbeidsforhold } from '@navikt/ft-types';
import {
  andelsnrMottarYtelseMap,
  finnFrilansFieldName,
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

const frilansAndel = {
  aktivitetStatus: AktivitetStatus.FRILANSER,
  andelsnr: 4,
};

const arbeidstakerAndelerUtenIM = [
  { ...andel, mottarYtelse: null },
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
    const values = {
      vurderMottarYtelseValues: {},
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    };
    values.vurderMottarYtelseValues[finnFrilansFieldName()] = null;
    const harVurdert = harVurdertMottarYtelse(values, vurderMottarYtelse);
    expect(harVurdert).toBe(false);
  });

  it('skal returnere true når man har vurdert alle punktene i mottar ytelse for frilans', () => {
    const vurderMottarYtelse = {
      erFrilans: true,
      arbeidstakerAndelerUtenIM: [],
    };
    const values = {
      vurderMottarYtelseValues: {},
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    };
    values.vurderMottarYtelseValues[finnFrilansFieldName()] = true;
    const harVurdert = harVurdertMottarYtelse(values, vurderMottarYtelse);
    expect(harVurdert).toBe(true);
  });

  it('skal returnere true når man har vurdert alle punktene i mottar ytelse for arbeidstaker uten inntektsmelding', () => {
    const vurderMottarYtelse = {
      erFrilans: false,
      arbeidstakerAndelerUtenIM,
    };
    const values = {
      vurderMottarYtelseValues: {},
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    };
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)] = true;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel2)] = false;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel3)] = false;
    const harVurdert = harVurdertMottarYtelse(values, vurderMottarYtelse);
    expect(harVurdert).toBe(true);
  });

  it('skal returnere false når man har ikkje vurdert alle punktene i mottar ytelse for arbeidstaker uten inntektsmelding', () => {
    const vurderMottarYtelse = {
      erFrilans: false,
      arbeidstakerAndelerUtenIM,
    };
    const values = {
      vurderMottarYtelseValues: {},
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    };
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)] = true;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel2)] = false;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel3)] = null;
    const harVurdert = harVurdertMottarYtelse(values, vurderMottarYtelse);
    expect(harVurdert).toBe(false);
  });

  it('skal returnere tomt objekt om vurderMottarYtelseDto ikkje er tilstades', () => {
    const mottarYtelseMap = andelsnrMottarYtelseMap(
      { erTilVurdering: true, periode: { fom: '2022-01-01', tom: '2022-02-01' } },
      undefined,
      undefined,
    );
    expect(Object.keys(mottarYtelseMap)).toHaveLength(0);
  });

  it('skal vurdering av mottar ytelse for arbeidstakerandeler', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    };
    const values = {
      vurderMottarYtelseValues: {},
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    };
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)] = true;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel2)] = false;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel3)] = null;
    const mottarYtelseMap = andelsnrMottarYtelseMap(values, vurderMottarYtelse, beregningsgrunnlag);
    expect(mottarYtelseMap[1]).toBe(true);
    expect(mottarYtelseMap[2]).toBe(false);
    expect(mottarYtelseMap[3]).toBe(null);
  });

  it('skal vurdering av mottar ytelse for arbeidstakerandeler og frilans', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    };
    const values = {
      vurderMottarYtelseValues: {},
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    };
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)] = true;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel2)] = false;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel3)] = null;
    values.vurderMottarYtelseValues[finnFrilansFieldName()] = true;
    const mottarYtelseMap = andelsnrMottarYtelseMap(values, vurderMottarYtelse, beregningsgrunnlag);
    expect(mottarYtelseMap[1]).toBe(true);
    expect(mottarYtelseMap[2]).toBe(false);
    expect(mottarYtelseMap[3]).toBe(null);
    expect(mottarYtelseMap[4]).toBe(true);
  });

  it('skalFastsetteInntektATUtenInntektsmelding skal returnere true om det er minst ein AT-andel som skal fastsett inntekt', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    };
    const values = {
      vurderMottarYtelseValues: {},
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    };
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)] = true;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel2)] = false;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel3)] = null;
    values.vurderMottarYtelseValues[finnFrilansFieldName()] = true;
    const skalFastsetteAT = skalFastsetteInntektATUtenInntektsmelding(values, vurderMottarYtelse);
    expect(skalFastsetteAT).toBe(true);
  });

  it('skalFastsetteInntektATUtenInntektsmelding skal returnere false om ingen AT andeler eksisterer i values', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    };
    const values = {
      vurderMottarYtelseValues: {},
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    };
    values.vurderMottarYtelseValues[finnFrilansFieldName()] = true;
    const skalFastsetteAT = skalFastsetteInntektATUtenInntektsmelding(values, vurderMottarYtelse);
    expect(skalFastsetteAT).toBe(false);
  });

  it('skalFastsetteInntektATUtenInntektsmelding skal returnere false om mottarYtelse for alle AT-andeler i values er satt til null', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    };
    const values = {
      vurderMottarYtelseValues: {},
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    };
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)] = null;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel2)] = null;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel3)] = null;
    values.vurderMottarYtelseValues[finnFrilansFieldName()] = true;
    const skalFastsetteAT = skalFastsetteInntektATUtenInntektsmelding(values, vurderMottarYtelse);
    expect(skalFastsetteAT).toBe(false);
  });

  it('skalFastsetteInntektATUtenInntektsmelding skal returnere false om mottarYtelse for alle AT-andeler i values er satt til false', () => {
    const vurderMottarYtelse = {
      arbeidstakerAndelerUtenIM,
    };
    const values = {
      vurderMottarYtelseValues: {},
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
    };
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)] = false;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel2)] = false;
    values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel3)] = false;
    values.vurderMottarYtelseValues[finnFrilansFieldName()] = true;
    const skalFastsetteAT = skalFastsetteInntektATUtenInntektsmelding(values, vurderMottarYtelse);
    expect(skalFastsetteAT).toBe(false);
  });
});
