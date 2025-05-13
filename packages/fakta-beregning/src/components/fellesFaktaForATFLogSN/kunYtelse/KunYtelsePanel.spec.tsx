import { Inntektskategori } from '@navikt/ft-kodeverk';
import { KunYtelse } from '@navikt/ft-types';

import { BrukersAndelValues } from '../../../typer/FaktaBeregningTypes';
import { KodeverkForPanel } from '../../../typer/KodeverkForPanelForFb';
import { besteberegningField } from './KunYtelseBesteberegningPanel';
import { brukersAndelFieldArrayName, KunYtelsePanel } from './KunYtelsePanel';

const faktaOmBeregningAndel1 = {
  andelsnr: 1,
  fastsattBelopPrMnd: null,
  lagtTilAvSaksbehandler: false,
  inntektskategori: Inntektskategori.UDEFINERT,
  aktivitetStatus: 'BA',
};

const faktaOmBeregningAndel2 = {
  andelsnr: 2,
  fastsattBelopPrMnd: 10000,
  lagtTilAvSaksbehandler: true,
  inntektskategori: Inntektskategori.ARBEIDSTAKER,
  aktivitetStatus: 'BA',
};

const kodeverkSamling = {
  OpptjeningAktivitetType: [
    {
      kode: 'ARBEID',
      navn: 'Arbeid',
      kodeverk: 'OPPTJENING_AKTIVITET_TYPE',
    },
  ],
  AktivitetStatus: [
    {
      kode: 'BA',
      navn: 'Brukers andel',
      kodeverk: 'AKTIVITET_STATUS',
    },
  ],
} as KodeverkForPanel;

const faktaOmBeregningAndeler = [faktaOmBeregningAndel1, faktaOmBeregningAndel2];

const emptyValues = { erTilVurdering: true, periode: { fom: '2022-01-01', tom: '2022-02-01' } };

describe('<KunYtelsePanel>', () => {
  it('skal transform values riktig', () => {
    const kunYtelse = { fodendeKvinneMedDP: false };
    const andel1 = {
      andelsnr: 1,
      nyAndel: false,
      lagtTilAvSaksbehandler: false,
      fastsattBelop: '10 000',
      inntektskategori: Inntektskategori.ARBEIDSTAKER,
    };
    const andel2 = {
      andelsnr: null,
      nyAndel: true,
      lagtTilAvSaksbehandler: true,
      fastsattBelop: '20 000',
      inntektskategori: Inntektskategori.SJØMANN,
    };
    const values = {
      ...emptyValues,
      [`${brukersAndelFieldArrayName}`]: [andel1, andel2],
    };
    const transformedValues = KunYtelsePanel.transformValues(values, kunYtelse);
    expect(transformedValues.kunYtelseFordeling?.skalBrukeBesteberegning).toBe(null);
    expect(transformedValues.kunYtelseFordeling?.andeler).toHaveLength(2);
    expect(transformedValues.kunYtelseFordeling?.andeler[0].andelsnr).toBe(1);
    expect(transformedValues.kunYtelseFordeling?.andeler[0].fastsattBeløp).toBe(10000);
    expect(transformedValues.kunYtelseFordeling?.andeler[0].inntektskategori).toBe(Inntektskategori.ARBEIDSTAKER);
    expect(transformedValues.kunYtelseFordeling?.andeler[0].nyAndel).toBe(false);
    expect(transformedValues.kunYtelseFordeling?.andeler[0].lagtTilAvSaksbehandler).toBe(false);

    expect(transformedValues.kunYtelseFordeling?.andeler[1].andelsnr).toBe(null);
    expect(transformedValues.kunYtelseFordeling?.andeler[1].fastsattBeløp).toBe(20000);
    expect(transformedValues.kunYtelseFordeling?.andeler[1].inntektskategori).toBe(Inntektskategori.SJØMANN);
    expect(transformedValues.kunYtelseFordeling?.andeler[1].nyAndel).toBe(true);
    expect(transformedValues.kunYtelseFordeling?.andeler[1].lagtTilAvSaksbehandler).toBe(true);
  });

  it('skal bygge initial values', () => {
    const andel1 = {
      andelsnr: 1,
      fastsattBelopPrMnd: null,
      inntektskategori: Inntektskategori.UDEFINERT,
      aktivitetStatus: 'BA',
    };
    const andel2 = {
      andelsnr: 2,
      fastsattBelopPrMnd: 10000,
      inntektskategori: Inntektskategori.ARBEIDSTAKER,
      aktivitetStatus: 'BA',
    };
    const kunYtelse: KunYtelse = {
      fodendeKvinneMedDP: false,
      andeler: [andel1, andel2],
    };
    const initialValues = KunYtelsePanel.buildInitialValues(kunYtelse, faktaOmBeregningAndeler, {}, kodeverkSamling);
    // @ts-expect-error Fiks
    const andeler: BrukersAndelValues[] = initialValues[`${brukersAndelFieldArrayName}`];
    expect(andeler).toHaveLength(2);
    expect(andeler[0].andelsnr).toBe(1);
    expect(andeler[0].andel).toBe('Brukers andel');
    expect(andeler[0].aktivitetStatus).toBe('BA');
    expect(andeler[0].fastsattBelop).toBe('');
    expect(andeler[0].inntektskategori).toBe('');
    expect(andeler[0].nyAndel).toBe(false);
    expect(andeler[0].lagtTilAvSaksbehandler).toBe(false);

    expect(andeler[1].andelsnr).toBe(2);
    expect(andeler[1].andel).toBe('Brukers andel');
    expect(andeler[1].fastsattBelop).toBe('10 000');
    expect(andeler[1].aktivitetStatus).toBe('BA');
    expect(andeler[1].inntektskategori).toBe(Inntektskategori.ARBEIDSTAKER);
    expect(andeler[1].nyAndel).toBe(false);
    expect(andeler[1].lagtTilAvSaksbehandler).toBe(true);
  });

  it('skal bygge initial values med besteberegning', () => {
    const andel1 = {
      andelsnr: 1,
      fastsattBelopPrMnd: null,
      lagtTilAvSaksbehandler: false,
      inntektskategori: Inntektskategori.UDEFINERT,
      aktivitetStatus: 'BA',
    };
    const andel2 = {
      andelsnr: 2,
      fastsattBelopPrMnd: 10000,
      lagtTilAvSaksbehandler: true,
      inntektskategori: Inntektskategori.ARBEIDSTAKER,
      aktivitetStatus: 'BA',
    };
    const kunYtelse: KunYtelse = {
      andeler: [andel1, andel2],
      fodendeKvinneMedDP: true,
      erBesteberegning: true,
    };
    const initialValues = KunYtelsePanel.buildInitialValues(kunYtelse, faktaOmBeregningAndeler, {}, kodeverkSamling);
    // @ts-expect-error Fiks
    const andeler = initialValues[`${brukersAndelFieldArrayName}`];
    expect(andeler).toHaveLength(2);
    expect(andeler[0].andelsnr).toBe(1);
    expect(andeler[0].andel).toBe('Brukers andel');
    expect(andeler[0].aktivitetStatus).toBe('BA');
    expect(andeler[0].fastsattBelop).toBe('');
    expect(andeler[0].inntektskategori).toBe('');
    expect(andeler[0].nyAndel).toBe(false);
    expect(andeler[0].lagtTilAvSaksbehandler).toBe(false);

    expect(andeler[1].andelsnr).toBe(2);
    expect(andeler[1].andel).toBe('Brukers andel');
    expect(andeler[1].fastsattBelop).toBe('10 000');
    expect(andeler[1].aktivitetStatus).toBe('BA');
    expect(andeler[1].inntektskategori).toBe(Inntektskategori.ARBEIDSTAKER);
    expect(andeler[1].nyAndel).toBe(false);
    expect(andeler[1].lagtTilAvSaksbehandler).toBe(true);

    // @ts-expect-error Fiks
    const erBesteberegning = initialValues[`${besteberegningField}`];
    expect(erBesteberegning).toBe(true);
  });

  it('skal bygge initial values uten besteberegning', () => {
    const andel1 = {
      andelsnr: 1,
      fastsattBelopPrMnd: null,
      lagtTilAvSaksbehandler: false,
      inntektskategori: Inntektskategori.UDEFINERT,
      aktivitetStatus: 'BA',
    };
    const andel2 = {
      andelsnr: 2,
      fastsattBelopPrMnd: 10000,
      lagtTilAvSaksbehandler: true,
      inntektskategori: Inntektskategori.ARBEIDSTAKER,
      aktivitetStatus: 'BA',
    };
    const kunYtelse: KunYtelse = {
      andeler: [andel1, andel2],
      fodendeKvinneMedDP: true,
      erBesteberegning: false,
    };
    const initialValues = KunYtelsePanel.buildInitialValues(kunYtelse, faktaOmBeregningAndeler, {}, kodeverkSamling);
    // @ts-expect-error Fiks
    const andeler = initialValues[`${brukersAndelFieldArrayName}`];
    expect(andeler).toHaveLength(2);
    expect(andeler[0].andelsnr).toBe(1);
    expect(andeler[0].andel).toBe('Brukers andel');
    expect(andeler[0].aktivitetStatus).toBe('BA');
    expect(andeler[0].fastsattBelop).toBe('');
    expect(andeler[0].inntektskategori).toBe('');
    expect(andeler[0].nyAndel).toBe(false);
    expect(andeler[0].lagtTilAvSaksbehandler).toBe(false);

    expect(andeler[1].andelsnr).toBe(2);
    expect(andeler[1].andel).toBe('Brukers andel');
    expect(andeler[1].fastsattBelop).toBe('10 000');
    expect(andeler[1].aktivitetStatus).toBe('BA');
    expect(andeler[1].inntektskategori).toBe(Inntektskategori.ARBEIDSTAKER);
    expect(andeler[1].nyAndel).toBe(false);
    expect(andeler[1].lagtTilAvSaksbehandler).toBe(true);

    // @ts-expect-error Fiks
    const erBesteberegning = initialValues[`${besteberegningField}`];
    expect(erBesteberegning).toBe(false);
  });
});
