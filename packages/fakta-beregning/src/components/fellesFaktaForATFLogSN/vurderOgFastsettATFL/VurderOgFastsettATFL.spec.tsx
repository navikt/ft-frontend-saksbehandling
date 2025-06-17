import {
  AktivitetStatus,
  AktivitetStatus as aktivitetStatuser,
  FaktaOmBeregningTilfelle,
  Inntektskategori,
} from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, BeregningsgrunnlagAndel, FaktaOmBeregning, FaktaOmBeregningAndel } from '@navikt/ft-types';
import { ATFLSammeOrgAndel } from '@navikt/ft-types/src/BeregningsgrunnlagFakta';

import { FaktaOmBeregningAksjonspunktValues } from '../../../typer/FaktaBeregningTypes';
import { AndelFieldValue } from '../../../typer/FieldValues';
import { besteberegningField } from '../besteberegningFodendeKvinne/VurderBesteberegningForm';
import { INNTEKT_FIELD_ARRAY_NAME } from '../BgFaktaUtils';
import { lonnsendringField } from './forms/lonnsendringFormUtils';
import { erNyoppstartetFLField } from './forms/NyoppstartetFLForm';
import { VurderOgFastsettATFL } from './VurderOgFastsettATFL';

const {
  VURDER_BESTEBEREGNING,
  VURDER_LONNSENDRING,
  VURDER_NYOPPSTARTET_FL,
  FASTSETT_MAANEDSINNTEKT_FL,
  FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
} = FaktaOmBeregningTilfelle;

const emptyValues = { erTilVurdering: true, periode: { fom: '2022-01-01', tom: '2022-02-01' } };

const lagBeregningsgrunnlag = (andeler: BeregningsgrunnlagAndel[]): Beregningsgrunnlag =>
  ({
    vilkårsperiodeFom: '2022-01-01',
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
  }) as Beregningsgrunnlag;

const lagFaktaOmBeregning = (
  tilfeller: string[],
  arbeidsforholdMedLønnsendringUtenIM: FaktaOmBeregningAndel[] | undefined,
  arbeidstakerOgFrilanserISammeOrganisasjonListe: ATFLSammeOrgAndel[] | undefined,
  vurderMottarYtelse = {},
): FaktaOmBeregning =>
  ({
    faktaOmBeregningTilfeller: tilfeller,
    vurderBesteberegning: {},
    arbeidsforholdMedLønnsendringUtenIM,
    arbeidstakerOgFrilanserISammeOrganisasjonListe,
    vurderMottarYtelse,
  }) as FaktaOmBeregning;

const lagAndel = (andelsnr: number, aktivitetStatus: AktivitetStatus, inntektskategori: string) => ({
  andelsnr,
  aktivitetStatus,
  inntektskategori,
});

const lagAndelValues = (
  andelsnr: number | undefined,
  fastsattBelop: string,
  inntektskategori: string,
  aktivitetStatus: string,
  lagtTilAvSaksbehandler = false,
  nyAndel = false,
  kanRedigereInntekt = true,
): AndelFieldValue =>
  ({
    nyAndel,
    andelsnr,
    fastsattBelop,
    inntektskategori,
    aktivitetStatus,
    lagtTilAvSaksbehandler,
    kanRedigereInntekt,
  }) as AndelFieldValue;

describe('<VurderOgFastsettATFL>', () => {
  it('skal transform values om besteberegning', () => {
    const andelerFields: AndelFieldValue[] = [
      lagAndelValues(1, '10 000', Inntektskategori.ARBEIDSTAKER, aktivitetStatuser.ARBEIDSTAKER),
      lagAndelValues(undefined, '20 000', Inntektskategori.DAGPENGER, aktivitetStatuser.DAGPENGER, true, true),
    ];
    const values = {
      ...emptyValues,
      [besteberegningField]: true,
      [INNTEKT_FIELD_ARRAY_NAME]: andelerFields,
    } as FaktaOmBeregningAksjonspunktValues;
    const andeler = [lagAndel(1, aktivitetStatuser.ARBEIDSTAKER, Inntektskategori.ARBEIDSTAKER)];
    const beregningsgrunnlag = lagBeregningsgrunnlag(andeler);
    const faktaOmBeregning = lagFaktaOmBeregning([VURDER_BESTEBEREGNING], undefined, undefined);
    const transformed = VurderOgFastsettATFL.transformValues(
      faktaOmBeregning as FaktaOmBeregning,
      beregningsgrunnlag,
    )(values);
    expect(transformed.fakta.besteberegningAndeler?.besteberegningAndelListe.length).toBe(1);
    expect(transformed.fakta.besteberegningAndeler?.besteberegningAndelListe[0].andelsnr).toBe(1);
    expect(transformed.fakta.besteberegningAndeler?.besteberegningAndelListe[0].fastsatteVerdier.fastsattBeløp).toBe(
      10000,
    );
    expect(transformed.fakta.besteberegningAndeler?.besteberegningAndelListe[0].fastsatteVerdier.inntektskategori).toBe(
      'ARBEIDSTAKER',
    );
    expect(transformed.fakta.besteberegningAndeler?.nyDagpengeAndel?.fastsatteVerdier.inntektskategori).toBe(
      'DAGPENGER',
    );
    expect(transformed.fakta.besteberegningAndeler?.nyDagpengeAndel?.fastsatteVerdier.fastsattBeløp).toBe(20000);
  });

  it('skal ikkje transform inntekt for nyoppstartetFL og lønnsendring når man har besteberegning', () => {
    const andelerFields = [
      lagAndelValues(1, '10 000', Inntektskategori.ARBEIDSTAKER, aktivitetStatuser.ARBEIDSTAKER),
      lagAndelValues(2, '30 000', Inntektskategori.FRILANSER, aktivitetStatuser.FRILANSER),
      lagAndelValues(undefined, '20 000', Inntektskategori.DAGPENGER, aktivitetStatuser.DAGPENGER, true, true),
    ];
    const values = {
      ...emptyValues,
      [besteberegningField]: true,
      [lonnsendringField]: true,
      [erNyoppstartetFLField]: true,
      [INNTEKT_FIELD_ARRAY_NAME]: andelerFields,
    } as FaktaOmBeregningAksjonspunktValues;
    const andelMedLonnsendring = lagAndel(1, aktivitetStatuser.ARBEIDSTAKER, Inntektskategori.ARBEIDSTAKER);
    const andeler = [andelMedLonnsendring, lagAndel(2, aktivitetStatuser.FRILANSER, Inntektskategori.FRILANSER)];
    const beregningsgrunnlag = lagBeregningsgrunnlag(andeler);
    const faktaOmBeregning = lagFaktaOmBeregning(
      [VURDER_BESTEBEREGNING, VURDER_NYOPPSTARTET_FL, VURDER_LONNSENDRING],
      [andelMedLonnsendring],
      undefined,
    );
    const transformed = VurderOgFastsettATFL.transformValues(
      faktaOmBeregning as FaktaOmBeregning,
      beregningsgrunnlag,
    )(values);
    expect(transformed.fakta.besteberegningAndeler?.besteberegningAndelListe.length).toBe(2);
    expect(transformed.fakta.besteberegningAndeler?.nyDagpengeAndel === null).toBe(false);
    expect(transformed.fakta.faktaOmBeregningTilfeller?.length).toBe(4);
  });

  it('skal fastsette inntekt for nyoppstartetFL og arbeidstaker uten inntektsmelding med lønnendring', () => {
    const andelerFields = [
      lagAndelValues(1, '10 000', Inntektskategori.ARBEIDSTAKER, aktivitetStatuser.ARBEIDSTAKER),
      lagAndelValues(2, '30 000', Inntektskategori.FRILANSER, aktivitetStatuser.FRILANSER),
      lagAndelValues(undefined, '20 000', Inntektskategori.DAGPENGER, aktivitetStatuser.DAGPENGER, true, true),
    ];
    const values = {
      ...emptyValues,
      [lonnsendringField]: true,
      [erNyoppstartetFLField]: true,
      [INNTEKT_FIELD_ARRAY_NAME]: andelerFields,
    } as FaktaOmBeregningAksjonspunktValues;
    const andelMedLonnsendring = lagAndel(1, aktivitetStatuser.ARBEIDSTAKER, Inntektskategori.ARBEIDSTAKER);
    const andeler = [
      andelMedLonnsendring,
      {
        ...lagAndel(2, aktivitetStatuser.FRILANSER, Inntektskategori.FRILANSER),
        erNyoppstartet: true,
      },
    ];
    const beregningsgrunnlag = lagBeregningsgrunnlag(andeler);
    const faktaOmBeregning = lagFaktaOmBeregning(
      [VURDER_LONNSENDRING, VURDER_NYOPPSTARTET_FL],
      [andelMedLonnsendring],
      undefined,
    );
    const transformed = VurderOgFastsettATFL.transformValues(
      faktaOmBeregning as FaktaOmBeregning,
      beregningsgrunnlag,
    )(values).fakta;
    expect(transformed.fastsattUtenInntektsmelding?.andelListe.length).toBe(1);
    expect(transformed.fastsattUtenInntektsmelding?.andelListe[0].andelsnr).toBe(1);
    expect(transformed.fastsattUtenInntektsmelding?.andelListe[0].fastsattBeløp).toBe(10000);
    expect(transformed.fastsettMaanedsinntektFL?.maanedsinntekt).toBe(30000);
    expect(transformed.faktaOmBeregningTilfeller?.length).toBe(4);
    expect(transformed.faktaOmBeregningTilfeller?.includes(VURDER_NYOPPSTARTET_FL)).toBe(true);
    expect(transformed.faktaOmBeregningTilfeller?.includes(VURDER_LONNSENDRING)).toBe(true);
    expect(transformed.faktaOmBeregningTilfeller?.includes(FASTSETT_MAANEDSINNTEKT_FL)).toBe(true);
    expect(
      transformed.faktaOmBeregningTilfeller?.includes(FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING),
    ).toBe(true);
  });
});
