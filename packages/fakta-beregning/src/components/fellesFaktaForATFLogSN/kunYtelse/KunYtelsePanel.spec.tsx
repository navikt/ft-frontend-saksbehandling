import { Inntektskategori } from '@navikt/ft-kodeverk';
import { AndelForFaktaOmBeregning, KunYtelse } from '@navikt/ft-types';

import { KodeverkForPanel } from '../../../typer/KodeverkForPanel';
import { brukersAndelFieldArrayName, KunYtelsePanel } from './KunYtelsePanel';

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

const faktaOmBeregningAndeler: AndelForFaktaOmBeregning[] = [
  {
    andelsnr: 1,
    lagtTilAvSaksbehandler: false,
    inntektskategori: Inntektskategori.UDEFINERT,
    aktivitetStatus: 'BA',
  },
  {
    andelsnr: 2,
    lagtTilAvSaksbehandler: true,
    inntektskategori: Inntektskategori.ARBEIDSTAKER,
    aktivitetStatus: 'BA',
  },
];

describe('KunYtelsePanel', () => {
  it('skal transform values riktig', () => {
    const kunYtelse = { fodendeKvinneMedDP: false };
    const values = {
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
      [`${brukersAndelFieldArrayName}`]: [
        {
          andelsnr: 1,
          nyAndel: false,
          lagtTilAvSaksbehandler: false,
          fastsattBelop: '10 000',
          inntektskategori: Inntektskategori.ARBEIDSTAKER,
        },
        {
          andelsnr: undefined,
          nyAndel: true,
          lagtTilAvSaksbehandler: true,
          fastsattBelop: '20 000',
          inntektskategori: Inntektskategori.SJØMANN,
        },
      ],
    };
    const { kunYtelseFordeling } = KunYtelsePanel.transformValues(values, kunYtelse);
    expect(kunYtelseFordeling?.skalBrukeBesteberegning).toBe(null);

    const andeler = kunYtelseFordeling?.andeler ?? [];

    expect(andeler).toHaveLength(2);
    expect(andeler[0].andelsnr).toBe(1);
    expect(andeler[0].fastsattBeløp).toBe(10000);
    expect(andeler[0].inntektskategori).toBe(Inntektskategori.ARBEIDSTAKER);
    expect(andeler[0].nyAndel).toBe(false);
    expect(andeler[0].lagtTilAvSaksbehandler).toBe(false);

    expect(andeler[1].andelsnr).toBe(undefined);
    expect(andeler[1].fastsattBeløp).toBe(20000);
    expect(andeler[1].inntektskategori).toBe(Inntektskategori.SJØMANN);
    expect(andeler[1].nyAndel).toBe(true);
    expect(andeler[1].lagtTilAvSaksbehandler).toBe(true);
  });

  it('skal bygge initial values', () => {
    const kunYtelse: KunYtelse = {
      fodendeKvinneMedDP: false,
      andeler: [
        {
          andelsnr: 1,
          fastsattBelopPrMnd: null,
          inntektskategori: Inntektskategori.UDEFINERT,
          aktivitetStatus: 'BA',
        },
        {
          andelsnr: 2,
          fastsattBelopPrMnd: 10000,
          inntektskategori: Inntektskategori.ARBEIDSTAKER,
          aktivitetStatus: 'BA',
        },
      ],
    };
    const initialValues = KunYtelsePanel.buildInitialValues(kunYtelse, faktaOmBeregningAndeler, {}, kodeverkSamling);

    const andeler = initialValues.brukersAndelBG ?? [];
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
    const kunYtelse: KunYtelse = {
      andeler: [
        {
          andelsnr: 1,
          fastsattBelopPrMnd: null,
          inntektskategori: Inntektskategori.UDEFINERT,
          aktivitetStatus: 'BA',
        },
        {
          andelsnr: 2,
          fastsattBelopPrMnd: 10000,
          inntektskategori: Inntektskategori.ARBEIDSTAKER,
          aktivitetStatus: 'BA',
        },
      ],
      fodendeKvinneMedDP: true,
      erBesteberegning: true,
    };
    const initialValues = KunYtelsePanel.buildInitialValues(kunYtelse, faktaOmBeregningAndeler, {}, kodeverkSamling);
    const andeler = initialValues.brukersAndelBG ?? [];
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

    const erBesteberegning = initialValues.besteberegningField;
    expect(erBesteberegning).toBe(true);
  });

  it('skal bygge initial values uten besteberegning', () => {
    const kunYtelse: KunYtelse = {
      andeler: [
        {
          andelsnr: 1,
          fastsattBelopPrMnd: null,
          inntektskategori: Inntektskategori.UDEFINERT,
          aktivitetStatus: 'BA',
        },
        {
          andelsnr: 2,
          fastsattBelopPrMnd: 10000,
          inntektskategori: Inntektskategori.ARBEIDSTAKER,
          aktivitetStatus: 'BA',
        },
      ],
      fodendeKvinneMedDP: true,
      erBesteberegning: false,
    };
    const initialValues = KunYtelsePanel.buildInitialValues(kunYtelse, faktaOmBeregningAndeler, {}, kodeverkSamling);

    const andeler = initialValues.brukersAndelBG ?? [];
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

    const erBesteberegning = initialValues.besteberegningField;
    expect(erBesteberegning).toBe(false);
  });
});
