import { AktivitetStatus, FaktaOmBeregningTilfelle, Inntektskategori } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagArbeidsforhold, FaktaOmBeregning } from '@navikt/ft-types';
import { harRiktigTilfelle, transformValuesForATFLISammeOrg } from './ATFLSammeOrg';

describe('<ATFLSammeOrg>', () => {
  it('skal ikke vise tekst når man ikke har tilfelle', () => {
    const beregningsgrunnlag = {
      faktaOmBeregning: {
        faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE],
        andelerForFaktaOmBeregning: [],
      },
    };

    expect(harRiktigTilfelle(beregningsgrunnlag)).toBe(false);
  });

  it('skal vise tekst når man har tilfelle uten inntektsmelding', () => {
    const beregningsgrunnlag = {
      faktaOmBeregning: {
        faktaOmBeregningTilfeller: [
          FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
          FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON,
        ],
        andelerForFaktaOmBeregning: [],
      },
    };
    expect(harRiktigTilfelle(beregningsgrunnlag)).toBe(true);
  });

  it('skal vise tekst når man har tilfelle med inntektsmelding', () => {
    const beregningsgrunnlag = {
      faktaOmBeregning: {
        faktaOmBeregningTilfeller: [
          FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE,
          FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON,
        ],
        andelerForFaktaOmBeregning: [],
      },
    };
    expect(harRiktigTilfelle(beregningsgrunnlag)).toBe(true);
  });

  const arbeidsforhold = {
    arbeidsgiverIdent: '123',
    arbeidsforholdId: 'abc',
    startdato: '2018-01-01',
  } as BeregningsgrunnlagArbeidsforhold;

  const faktaOmBeregningFrilansAndel = {
    andelsnr: 1,
    arbeidsforhold: null,
    inntektskategori: Inntektskategori.FRILANSER,
    aktivitetStatus: AktivitetStatus.FRILANSER,
    lagtTilAvSaksbehandler: false,
    andelIArbeid: [],
  };

  const faktaOmBeregningATAndel = {
    andelsnr: 2,
    arbeidsforhold,
    inntektskategori: Inntektskategori.ARBEIDSTAKER,
    aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
    lagtTilAvSaksbehandler: false,
    andelIArbeid: [],
  };

  const frilansAndelInntekt = {
    andelsnr: 1,
    fastsattBelop: 10000,
    inntektskategori: Inntektskategori.FRILANSER,
    nyAndel: false,
    lagtTilAvSaksbehandler: false,
    aktivitetStatus: AktivitetStatus.FRILANSER,
  };

  const arbeidstakerInntekt = {
    andelsnr: 2,
    fastsattBelop: 20000,
    inntektskategori: Inntektskategori.ARBEIDSTAKER,
    nyAndel: false,
    lagtTilAvSaksbehandler: false,
    aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
  };

  const inntektVerdier = [frilansAndelInntekt, arbeidstakerInntekt];

  it('skal ikkje transform values uten tilfelle', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_LONNSENDRING],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [{ ...faktaOmBeregningATAndel, inntektPrMnd: 10000 }],
      frilansAndel: faktaOmBeregningFrilansAndel,
    };

    const transformed = transformValuesForATFLISammeOrg(inntektVerdier, faktaOmBeregning as FaktaOmBeregning, []);
    expect(transformed.faktaOmBeregningTilfeller.length).toBe(0);
  });

  it('skal transform values', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [{ ...faktaOmBeregningATAndel, inntektPrMnd: 10000 }],
      frilansAndel: faktaOmBeregningFrilansAndel,
    };

    const fastsatteAndeler = [];
    const transformed = transformValuesForATFLISammeOrg(
      inntektVerdier,
      faktaOmBeregning as FaktaOmBeregning,
      fastsatteAndeler,
    );
    expect(transformed.faktaOmBeregningTilfeller.length).toBe(1);
    expect(
      transformed.faktaOmBeregningTilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),
    ).toBe(true);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe.length).toBe(2);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[1].andelsnr).toBe(1);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[1].arbeidsinntekt).toBe(
      10000,
    );
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[0].andelsnr).toBe(2);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[0].arbeidsinntekt).toBe(
      20000,
    );
    expect(fastsatteAndeler.length).toBe(2);
    expect(fastsatteAndeler.includes(1)).toBe(true);
    expect(fastsatteAndeler.includes(2)).toBe(true);
  });

  it('skal ikkje transform values når andelsnr har blitt submittet fra før', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [{ ...faktaOmBeregningATAndel, inntektPrMnd: 10000 }],
      frilansAndel: faktaOmBeregningFrilansAndel,
    };

    const fastsatteAndeler = [1];
    const transformed = transformValuesForATFLISammeOrg(
      inntektVerdier,
      faktaOmBeregning as FaktaOmBeregning,
      fastsatteAndeler,
    );
    expect(transformed.faktaOmBeregningTilfeller.length).toBe(1);
    expect(
      transformed.faktaOmBeregningTilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),
    ).toBe(true);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe.length).toBe(1);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[0].andelsnr).toBe(2);
    expect(transformed.vurderATogFLiSammeOrganisasjon.vurderATogFLiSammeOrganisasjonAndelListe[0].arbeidsinntekt).toBe(
      20000,
    );
    expect(fastsatteAndeler.length).toBe(2);
    expect(fastsatteAndeler.includes(1)).toBe(true);
    expect(fastsatteAndeler.includes(2)).toBe(true);
  });
});
