import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregningAndel,
} from '@navikt/ft-types';

import { FaktaOmBeregningAksjonspunktValues } from '../../typer/FaktaBeregningTypes';
import { besteberegningField } from './besteberegningFodendeKvinne/VurderBesteberegningForm';
import { INNTEKT_FIELD_ARRAY_NAME } from './BgFaktaUtils';
import { transformValues, transformValuesFaktaForATFLOgSN } from './FaktaForATFLOgSNPanel';
import { lonnsendringField } from './vurderOgFastsettATFL/forms/LonnsendringForm';
import { erNyoppstartetFLField } from './vurderOgFastsettATFL/forms/NyoppstartetFLForm';

const lagBeregningsgrunnlag = (andeler: FaktaOmBeregningAndel[]): Beregningsgrunnlag =>
  ({
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPrStatusOgAndel: andeler.map((andel: FaktaOmBeregningAndel) => ({
          andelsnr: andel.andelsnr,
          aktivitetStatus: andel.aktivitetStatus,
          inntektskategori: andel.inntektskategori,
        })),
      },
    ],
  }) as Beregningsgrunnlag;

describe('<FaktaForATFLOgSNPanel>', () => {
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
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [andel1, andel2],
        },
      ],
    } as Beregningsgrunnlag;
    const values: FaktaOmBeregningAksjonspunktValues = {
      tilfeller: aktivePaneler,
      kortvarigeArbeidsforhold: [],
      vurderMottarYtelse: undefined,
      faktaOmBeregning,
      beregningsgrunnlag,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
      [besteberegningField]: true,
      [INNTEKT_FIELD_ARRAY_NAME]: [
        {
          andel: 'Arbeid',
          aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
          fastsattBelop: '10 000',
          inntektskategori: 'ARBEIDSTAKER',
          andelsnr: andel1.andelsnr,
          kanRedigereInntekt: true,
        },
        {
          andel: 'Næring',
          aktivitetStatus: AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
          fastsattBelop: '20 000',
          inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
          andelsnr: andel2.andelsnr,
          kanRedigereInntekt: true,
        },
      ],
    };
    const transformedValues = transformValuesFaktaForATFLOgSN(values);
    const tilfeller = transformedValues.fakta.faktaOmBeregningTilfeller || [];
    expect(tilfeller).toHaveLength(2);
    expect(tilfeller[1]).toEqual(FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE);
    expect(tilfeller[0]).toEqual(FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING);
    const bbAndeler = transformedValues.fakta.besteberegningAndeler?.besteberegningAndelListe || [];
    expect(bbAndeler).toHaveLength(2);
    expect(bbAndeler[0].andelsnr).toEqual(andel1.andelsnr);
    expect(bbAndeler[0].fastsatteVerdier.fastsattBeløp).toEqual(10000);
    expect(bbAndeler[0].fastsatteVerdier.inntektskategori).toEqual('ARBEIDSTAKER');
    expect(bbAndeler[1].andelsnr).toEqual(andel2.andelsnr);
    expect(bbAndeler[1].fastsatteVerdier.fastsattBeløp).toEqual(20000);
    expect(bbAndeler[1].fastsatteVerdier.inntektskategori).toEqual('SELVSTENDIG_NÆRINGSDRIVENDE');
  });

  it('skal kunne transform values nyoppstartet fl og lønnsendring', () => {
    const aktivePaneler = [
      FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL,
      FaktaOmBeregningTilfelle.VURDER_LONNSENDRING,
    ];
    const forholdMedAtOgFl = {
      andelsnr: 2,
      aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
      inntektskategori: 'Arbeidstaker',
      arbeidsforhold: {
        arbeidsgiverIdent: '123',
        arbeidsforholdId: 'abc',
        startdato: '2018-01-01',
      } as BeregningsgrunnlagArbeidsforhold,
    };

    const forholdMedLonnsendringUtenIM = {
      andelsnr: 2,
      aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
      inntektskategori: 'ARBEIDSTAKER',
      arbeidsforhold: {
        arbeidsgiverIdent: '123',
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
      arbeidsforholdMedLønnsendringUtenIM: [forholdMedLonnsendringUtenIM],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [forholdMedAtOgFl],
      frilansAndel,
    };
    const beregningsgrunnlag = lagBeregningsgrunnlag([forholdMedLonnsendringUtenIM, frilansAndel]);
    const values: FaktaOmBeregningAksjonspunktValues = {
      tilfeller: aktivePaneler,
      kortvarigeArbeidsforhold: [],
      vurderMottarYtelse: undefined,
      faktaOmBeregning,
      beregningsgrunnlag,
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
      [lonnsendringField]: true,
      [erNyoppstartetFLField]: true,
      [INNTEKT_FIELD_ARRAY_NAME]: [
        {
          aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
          andel: 'Arbeid',
          fastsattBelop: '10 000',
          inntektskategori: 'ARBEIDSTAKER',
          andelsnr: forholdMedLonnsendringUtenIM.andelsnr,
          kanRedigereInntekt: true,
        },
        {
          andel: 'Arbeid',
          fastsattBelop: '20 000',
          inntektskategori: 'FRILANS',
          andelsnr: frilansAndel.andelsnr,
          aktivitetStatus: AktivitetStatus.FRILANSER,
          kanRedigereInntekt: true,
        },
      ],
    };
    const transformedValues = transformValuesFaktaForATFLOgSN(values);
    const tilfeller = transformedValues.fakta.faktaOmBeregningTilfeller || [];
    expect(tilfeller).toHaveLength(4);
    expect(tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING)).toEqual(true);
    expect(tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)).toEqual(
      true,
    );
    expect(tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)).toEqual(true);
    expect(tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL)).toEqual(true);
    const andelsliste = transformedValues.fakta.fastsattUtenInntektsmelding?.andelListe || [];
    expect(andelsliste).toHaveLength(1);
    expect(andelsliste[0].andelsnr).toEqual(2);
    expect(andelsliste[0].fastsattBeløp).toEqual(10000);
    expect(transformedValues.fakta.fastsettMaanedsinntektFL?.maanedsinntekt).toEqual(20000);
  });

  it.skip('skal transform values for nyIArbeidslivet om kun ny i arbeidslivet', () => {
    const nyIArbTransform = vi.fn();
    const kortvarigTransform = vi.fn();
    const lonnsendringTransform = vi.fn();
    const vurderRefusjonTransform = vi.fn();

    const aktivePaneler = [FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET];
    transformValues(
      aktivePaneler,
      nyIArbTransform,
      kortvarigTransform,
      lonnsendringTransform,
      vurderRefusjonTransform,
    )({}, {} as FaktaOmBeregningAksjonspunktValues);
    expect(nyIArbTransform).toHaveProperty('callCount', 1);
    expect(kortvarigTransform).toHaveProperty('callCount', 0);
    expect(lonnsendringTransform).toHaveProperty('callCount', 0);
    expect(vurderRefusjonTransform).toHaveProperty('callCount', 0);
  });

  it.skip('skal transform values for nyIArbeidslivet og kortvarig om kun ny i arbeidslivet og kortvarig', () => {
    const nyIArbTransform = vi.fn();
    const kortvarigTransform = vi.fn();
    const lonnsendringTransform = vi.fn();
    const vurderRefusjonTransform = vi.fn();

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
    )({}, {} as FaktaOmBeregningAksjonspunktValues);
    expect(nyIArbTransform).toHaveProperty('callCount', 1);
    expect(kortvarigTransform).toHaveProperty('callCount', 1);
    expect(lonnsendringTransform).toHaveProperty('callCount', 0);
    expect(vurderRefusjonTransform).toHaveProperty('callCount', 0);
  });
});
