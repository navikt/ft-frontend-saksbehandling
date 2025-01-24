import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';

import { FaktaBeregningAvklaringsbehovCode } from '../../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { besteberegningField, VurderBesteberegningPanel } from './VurderBesteberegningForm';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG } = FaktaBeregningAvklaringsbehovCode;

const emptyValues = { erTilVurdering: true, periode: { fom: '2022-01-01', tom: '2022-02-01' } };

describe('<VurderBesteberegning>', () => {
  it('skal bygge initial values', () => {
    const vurderBesteberegning = {
      skalHaBesteberegning: false,
      andeler: [{ andelsnr: 1, aktivitetStatus: 'AT' }],
    };
    const initialValues = VurderBesteberegningPanel.buildInitialValues(
      [],
      vurderBesteberegning,
      [FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING],
      false,
    );
    expect(initialValues[besteberegningField]).toBe(false);
  });

  it('skal bygge initial values med overstyrt aksjonspunkt', () => {
    const vurderBesteberegning = {
      skalHaBesteberegning: null,
      andeler: [{ andelsnr: 1, aktivitetStatus: 'AT' }],
    };
    const ap = {
      definisjon: OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
      status: 'OPPR',
      kanLoses: true,
    };
    const initialValues = VurderBesteberegningPanel.buildInitialValues(
      [ap],
      vurderBesteberegning,
      [FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING],
      false,
    );
    expect(initialValues[besteberegningField]).toBe(false);
  });

  it('skal bygge initial values om det er overstyrt', () => {
    const vurderBesteberegning = {
      skalHaBesteberegning: null,
      andeler: [{ andelsnr: 1, aktivitetStatus: 'AT' }],
    };
    const initialValues = VurderBesteberegningPanel.buildInitialValues(
      [],
      vurderBesteberegning,
      [FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING],
      true,
    );
    expect(initialValues[besteberegningField]).toBe(false);
  });

  it('skal transform values', () => {
    const values = { ...emptyValues };
    values[besteberegningField] = false;
    const transformed = VurderBesteberegningPanel.transformValues(
      values,
      { vurderBesteberegning: {}, andelerForFaktaOmBeregning: [] },
      [],
    );
    expect(transformed.besteberegningAndeler.besteberegningAndelListe.length).toBe(0);
  });

  it('skal transform values om besteberegning', () => {
    const values = { ...emptyValues };
    values[besteberegningField] = true;
    const inntektPrMnd = [
      { andelsnr: 1, fastsattBelop: 10000, inntektskategori: 'ARBEIDSTAKER' },
      {
        nyAndel: true,
        lagtTilAvSaksbehandler: true,
        andelsnr: undefined,
        fastsattBelop: 20000,
        inntektskategori: 'DAGPENGER',
        aktivitetStatus: 'DP',
      },
    ];
    const transformed = VurderBesteberegningPanel.transformValues(
      values,
      { vurderBesteberegning: {}, andelerForFaktaOmBeregning: [] },
      inntektPrMnd,
    );
    expect(transformed.besteberegningAndeler.besteberegningAndelListe.length).toBe(1);
    expect(transformed.besteberegningAndeler.besteberegningAndelListe[0].andelsnr).toBe(1);
    expect(transformed.besteberegningAndeler.besteberegningAndelListe[0].fastsatteVerdier.fastsattBeløp).toBe(10000);
    expect(transformed.besteberegningAndeler.besteberegningAndelListe[0].fastsatteVerdier.inntektskategori).toBe(
      'ARBEIDSTAKER',
    );
    expect(transformed.besteberegningAndeler.nyDagpengeAndel.fastsatteVerdier.inntektskategori).toBe('DAGPENGER');
    expect(transformed.besteberegningAndeler.nyDagpengeAndel.fastsatteVerdier.fastsattBeløp).toBe(20000);
  });
});
