import type { Beregningsgrunnlag, BeregningsgrunnlagAndel, FaktaOmBeregning } from '@navikt/ft-types';

import { FaktaOmBeregningTilfelle } from '../../../../kodeverk/faktaOmBeregningTilfelle';
import { Organisasjonstype } from '../../../../kodeverk/organisasjonstype';
import type { FaktaOmBeregningAksjonspunktValues } from '../../../../typer/FaktaBeregningTypes';
import type { InntektTransformed } from '../../../../typer/FieldValues';
import { transformValuesArbeidUtenInntektsmelding } from './ArbeidUtenInntektsmelding';
import { lonnsendringField } from './lonnsendringFormUtils';

const emptyValues = {
  erTilVurdering: true,
  periode: { fom: '2022-01-01', tom: '2022-02-01' },
} as FaktaOmBeregningAksjonspunktValues;

describe('<ArbeidUtenInntektsmelding>', () => {
  it('skal ikke transform values uten tilfelle', () => {
    const inntektVerdier = [{ andelsnr: 1, fastsattBelop: 100000, inntektskategori: 'ARBEIDSTAKER' }];
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE],
    };
    const transformed = transformValuesArbeidUtenInntektsmelding(
      emptyValues,
      inntektVerdier,
      faktaOmBeregning,
      {} as Beregningsgrunnlag,
      [],
    );
    expect(Object.keys(transformed)).toHaveLength(0);
  });

  it('skal ikke transform values når inntektverdier er null', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [
        FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
        FaktaOmBeregningTilfelle.FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
      ],
    };
    const transformed = transformValuesArbeidUtenInntektsmelding(
      emptyValues,
      [],
      faktaOmBeregning,
      {} as Beregningsgrunnlag,
      [],
    );
    expect(Object.keys(transformed)).toHaveLength(0);
  });

  it('skal ikke transform values når andel allerede er fastsatt', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [
        FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
        FaktaOmBeregningTilfelle.FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
      ],
    };
    const inntektVerdier = [{ andelsnr: 1, fastsattBelop: 100000 }];
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              andelsnr: 1,
              arbeidsforhold: { organisasjonstype: Organisasjonstype.KUNSTIG },
            } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    };
    const fastsatteAndeler = [1];
    const transformed = transformValuesArbeidUtenInntektsmelding(
      emptyValues,
      inntektVerdier,
      faktaOmBeregning,
      bg as Beregningsgrunnlag,
      fastsatteAndeler,
    );
    expect(Object.keys(transformed)).toHaveLength(0);
  });

  it('skal transform values for kunstig arbeidsforhold', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [
        FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
        FaktaOmBeregningTilfelle.FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
      ],
    };
    const inntektVerdier = [{ andelsnr: 1, fastsattBelop: 10000, inntektskategori: 'ARBEIDSTAKER' }];
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              andelsnr: 1,
              arbeidsforhold: { organisasjonstype: Organisasjonstype.KUNSTIG },
            } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    };
    const fastsatteAndeler: number[] = [];
    const transformed = transformValuesArbeidUtenInntektsmelding(
      emptyValues,
      inntektVerdier,
      faktaOmBeregning,
      bg as Beregningsgrunnlag,
      fastsatteAndeler,
    );
    const tilfeller = transformed.faktaOmBeregningTilfeller || [];
    expect(tilfeller[0]).toBe(FaktaOmBeregningTilfelle.FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING);
    const andeler = transformed.fastsattUtenInntektsmelding?.andelListe || [];
    expect(andeler[0].andelsnr).toBe(1);
    expect(andeler[0].fastsattBeløp).toBe(10000);
    expect(andeler[0].inntektskategori).toBe('ARBEIDSTAKER');
    expect(fastsatteAndeler[0]).toBe(1);
  });

  it('skal teste at transformValuesArbeidUtenInntektsmelding gir korrekt output når lønnsendring', () => {
    const values = {
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
      [lonnsendringField]: true,
    } as FaktaOmBeregningAksjonspunktValues;
    const inntektVerdier = [{ fastsattBelop: 10000, andelsnr: 1, inntektskategori: 'ARBEIDSTAKER' }];
    const faktaOmBeregning: FaktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_LØNNSENDRING],
      arbeidsforholdMedLønnsendringUtenIM: [{ andelsnr: 1, aktivitetStatus: 'AT' }],
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              andelsnr: 1,
              arbeidsforhold: {},
              aktivitetStatus: 'AT',
            } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    };
    const transformedObject = transformValuesArbeidUtenInntektsmelding(
      values,
      inntektVerdier,
      faktaOmBeregning,
      bg as Beregningsgrunnlag,
      [],
    );
    const andeler = transformedObject.fastsattUtenInntektsmelding?.andelListe || [];
    expect(andeler.length).toBe(1);
    expect(andeler[0].andelsnr).toBe(1);
    expect(andeler[0].fastsattBeløp).toBe(10000);
  });

  it('skal ikkje submitte inntekt uten lønnsendring', () => {
    const values = {
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
      [lonnsendringField]: false,
    } as FaktaOmBeregningAksjonspunktValues;
    const inntektVerdier: InntektTransformed[] = [{ andelsnr: 1 } as InntektTransformed];
    const faktaOmBeregning: FaktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_LØNNSENDRING],
      arbeidsforholdMedLønnsendringUtenIM: [{ andelsnr: 1, aktivitetStatus: 'AT' }],
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [{ andelsnr: 1, arbeidsforhold: {} } as BeregningsgrunnlagAndel],
        },
      ],
    };
    const transformedObject = transformValuesArbeidUtenInntektsmelding(
      values,
      inntektVerdier,
      faktaOmBeregning,
      bg as Beregningsgrunnlag,
      [],
    );
    expect(Object.keys(transformedObject)).toHaveLength(0);
  });

  it(
    'skal transform values når ved avsluttet arbeidsforhold dagen før skjæringstidspunktet ' +
      'og et annet løpende i samme virksomhet der det er mottatt inntektsmelding',
    () => {
      const values = { ...emptyValues };
      const inntektVerdier = [
        {
          fastsattBelop: 10000,
          andelsnr: 1,
          arbeidsgiverId: '2134567',
          arbeidsforholdId: undefined,
          inntektskategori: 'ARBEIDSTAKER',
        },
      ];
      const faktaOmBeregning: FaktaOmBeregning = {
        andelerForFaktaOmBeregning: [],
        faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_LØNNSENDRING],
        arbeidsforholdMedLønnsendringUtenIM: [{ andelsnr: 1, aktivitetStatus: 'AT' }],
      };
      const bg = {
        beregningsgrunnlagPeriode: [
          {
            beregningsgrunnlagPrStatusOgAndel: [
              {
                andelsnr: 1,
                aktivitetStatus: 'AT',
                arbeidsforhold: { arbeidsgiverIdent: '2134567', arbeidsforholdId: null },
              },
              {
                andelsnr: 2,
                aktivitetStatus: 'AT',
                arbeidsforhold: {
                  arbeidsgiverIdent: '2134567',
                  arbeidsforholdId: '8u328ru9h34',
                },
              },
            ],
          },
        ],
      };
      const transformedObject = transformValuesArbeidUtenInntektsmelding(
        values,
        inntektVerdier,
        faktaOmBeregning,
        bg as Beregningsgrunnlag,
        [],
      );
      const andeler = transformedObject.fastsattUtenInntektsmelding?.andelListe || [];
      expect(andeler.length).toBe(1);
      expect(andeler[0].andelsnr).toBe(1);
      expect(andeler[0].fastsattBeløp).toBe(10000);
    },
  );
});
