import type {
  ATFLSammeOrgAndel,
  BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregning,
  FaktaOmBeregningAndel,
} from '@navikt/ft-types';

import { FaktaOmBeregningTilfelle } from '../../../../kodeverk/faktaOmBeregningTilfelle';
import type { InntektTransformed } from '../../../../typer/FieldValues';
import { transformValuesForATFLISammeOrg } from './ATFLSammeOrg';

describe('ATFLSammeOrg', () => {
  const arbeidsforhold = {
    arbeidsgiverIdent: '123',
    arbeidsforholdId: 'abc',
    startdato: '2018-01-01',
  } as BeregningsgrunnlagArbeidsforhold;

  const faktaOmBeregningFrilansAndel: FaktaOmBeregningAndel = {
    andelsnr: 1,
    arbeidsforhold: undefined,
    inntektskategori: 'FRILANSER',
    aktivitetStatus: 'FL',
  };
  const arbeidstakerOgFrilanserISammeOrganisasjon: ATFLSammeOrgAndel = {
    andelsnr: 2,
    arbeidsforhold,
    inntektskategori: 'ARBEIDSTAKER',
    aktivitetStatus: 'AT',
    inntektPrMnd: 10000,
  };

  const frilansAndelInntekt: InntektTransformed = {
    andelsnr: 1,
    fastsattBelop: 10000,
    inntektskategori: 'FRILANSER',
    nyAndel: false,
    lagtTilAvSaksbehandler: false,
    aktivitetStatus: 'FL',
  };

  const arbeidstakerInntekt: InntektTransformed = {
    andelsnr: 2,
    fastsattBelop: 20000,
    inntektskategori: 'ARBEIDSTAKER',
    nyAndel: false,
    lagtTilAvSaksbehandler: false,
    aktivitetStatus: 'AT',
  };

  const inntektVerdier = [frilansAndelInntekt, arbeidstakerInntekt];

  it('skal ikkje transform values uten tilfelle', () => {
    const faktaOmBeregning: FaktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_LØNNSENDRING],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [arbeidstakerOgFrilanserISammeOrganisasjon],
      frilansAndel: faktaOmBeregningFrilansAndel,
    };

    const transformed = transformValuesForATFLISammeOrg(inntektVerdier, faktaOmBeregning, []);
    expect(transformed.faktaOmBeregningTilfeller?.length).toBe(0);
  });

  it('skal transform values', () => {
    const faktaOmBeregning: FaktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [arbeidstakerOgFrilanserISammeOrganisasjon],
      frilansAndel: faktaOmBeregningFrilansAndel,
    };

    const fastsatteAndeler: number[] = [];
    const transformed = transformValuesForATFLISammeOrg(inntektVerdier, faktaOmBeregning, fastsatteAndeler);
    expect(transformed.faktaOmBeregningTilfeller?.length).toBe(1);
    expect(
      transformed.faktaOmBeregningTilfeller?.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),
    ).toBe(true);
    expect(transformed.vurderATogFLiSammeOrganisasjon?.vurderATogFLiSammeOrganisasjonAndelListe.length).toBe(2);
    expect(transformed.vurderATogFLiSammeOrganisasjon?.vurderATogFLiSammeOrganisasjonAndelListe[1].andelsnr).toBe(1);
    expect(transformed.vurderATogFLiSammeOrganisasjon?.vurderATogFLiSammeOrganisasjonAndelListe[1].arbeidsinntekt).toBe(
      10000,
    );
    expect(transformed.vurderATogFLiSammeOrganisasjon?.vurderATogFLiSammeOrganisasjonAndelListe[0].andelsnr).toBe(2);
    expect(transformed.vurderATogFLiSammeOrganisasjon?.vurderATogFLiSammeOrganisasjonAndelListe[0].arbeidsinntekt).toBe(
      20000,
    );
    expect(fastsatteAndeler.length).toBe(2);
    expect(fastsatteAndeler.includes(1)).toBe(true);
    expect(fastsatteAndeler.includes(2)).toBe(true);
  });

  it('skal ikkje transform values når andelsnr har blitt submittet fra før', () => {
    const faktaOmBeregning: FaktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [arbeidstakerOgFrilanserISammeOrganisasjon],
      frilansAndel: faktaOmBeregningFrilansAndel,
    };

    const fastsatteAndeler = [1];
    const transformed = transformValuesForATFLISammeOrg(inntektVerdier, faktaOmBeregning, fastsatteAndeler);
    expect(transformed.faktaOmBeregningTilfeller?.length).toBe(1);
    expect(
      transformed.faktaOmBeregningTilfeller?.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),
    ).toBe(true);
    expect(transformed.vurderATogFLiSammeOrganisasjon?.vurderATogFLiSammeOrganisasjonAndelListe.length).toBe(1);
    expect(transformed.vurderATogFLiSammeOrganisasjon?.vurderATogFLiSammeOrganisasjonAndelListe[0].andelsnr).toBe(2);
    expect(transformed.vurderATogFLiSammeOrganisasjon?.vurderATogFLiSammeOrganisasjonAndelListe[0].arbeidsinntekt).toBe(
      20000,
    );
    expect(fastsatteAndeler.length).toBe(2);
    expect(fastsatteAndeler.includes(1)).toBe(true);
    expect(fastsatteAndeler.includes(2)).toBe(true);
  });
});
