import { FordelBeregningsgrunnlagPeriode } from '@navikt/ft-types';
import { FordelBeregningsgrunnlagAndel } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import BeregningsgrunnlagArbeidsforhold from '@navikt/ft-types/src/beregningsgrunnlagArbeidsforholdTsType';
import { PeriodeAarsak } from '@navikt/ft-kodeverk';
import { lagPerioderForSubmit, slaaSammenPerioder as slåSammenPerioder } from './FordelPerioderUtils';

const arbeidsforhold1 = {
  arbeidsforholdId: null,
  arbeidsforholdType: 'ARBEID',
  arbeidsgiverIdent: '914555825',
  belopFraInntektsmeldingPrMnd: 41667,
  opphoersdato: '2019-06-01',
  organisasjonstype: 'VIRKSOMHET',
  refusjonPrAar: 500004,
  startdato: '2016-08-01',
} as BeregningsgrunnlagArbeidsforhold;

const fordelAndel = {
  aktivitetStatus: 'AT',
  andelIArbeid: [0],
  andelsnr: 1,
  arbeidsforhold: arbeidsforhold1,
  inntektskategori: 'ARBEIDSTAKER',
  nyttArbeidsforhold: false,
} as FordelBeregningsgrunnlagAndel;

const arbeidsforhold2 = {
  arbeidsforholdId: 'd0101e6c-c54a-4db2-ac91-f5b0d86a6d3e',
  arbeidsforholdType: 'ARBEID',
  arbeidsgiverIdent: '996607852',
  belopFraInntektsmeldingPrMnd: 41667,
  organisasjonstype: 'VIRKSOMHET',
  refusjonPrAar: 500004,
  startdato: '2019-06-02',
};

const fordelAndel2 = {
  aktivitetStatus: 'AT',
  andelIArbeid: [0],
  andelsnr: 2,
  arbeidsforhold: arbeidsforhold2,
  inntektskategori: '-',
  nyttArbeidsforhold: true,
};

describe('<FordelBeregningsgrunnlagForm>', () => {
  it('skal returnere liste med en periode om kun en periode i grunnlag', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel as FordelBeregningsgrunnlagAndel],
        skalRedigereInntekt: true,
        skalKunneEndreRefusjon: false,
        skalPreutfyllesMedBeregningsgrunnlag: true,
      } as FordelBeregningsgrunnlagPeriode,
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: null,
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe(null);
  });

  it('skal returnere liste med en periode om andre periode har naturalytelse tilkommet', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2019-02-01',
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
      },
      {
        beregningsgrunnlagPeriodeFom: '2019-02-02',
        beregningsgrunnlagPeriodeTom: null,
        periodeAarsaker: [PeriodeAarsak.NATURALYTELSE_TILKOMMER],
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe(null);
  });

  it('skal returnere liste med en periode om andre periode har naturalytelse bortfalt', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2019-02-01',
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
      },
      {
        beregningsgrunnlagPeriodeFom: '2019-02-02',
        beregningsgrunnlagPeriodeTom: null,
        periodeAarsaker: [PeriodeAarsak.NATURALYTELSE_BORTFALT],
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe(null);
  });

  it('skal returnere liste med en periode om andre periode har avsluttet arbeidsforhold uten endring i bruttoPrÅr', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2019-02-01',
        bruttoPrAar: 120000,
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
      },
      {
        beregningsgrunnlagPeriodeFom: '2019-02-02',
        beregningsgrunnlagPeriodeTom: null,
        bruttoPrAar: 120000,
        periodeAarsaker: [PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET],
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe(null);
  });

  it('skal returnere liste med to perioder om andre periode har avsluttet arbeidsforhold med endring i bruttoPrÅr', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2019-02-01',
        bruttoPrAar: 120000,
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
      },
      {
        beregningsgrunnlagPeriodeFom: '2019-02-02',
        beregningsgrunnlagPeriodeTom: null,
        bruttoPrAar: 130000,
        periodeAarsaker: [PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET],
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(2);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe('2019-02-01');
    expect(nyePerioder[1].fom).toBe('2019-02-02');
    expect(nyePerioder[1].tom).toBe(null);
  });

  it('skal returnere liste med to perioder om andre periode har opphør av refusjon', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: false,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2019-02-01',
        bruttoPrAar: 120000,
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
      },
      {
        beregningsgrunnlagPeriodeFom: '2019-02-02',
        beregningsgrunnlagPeriodeTom: null,
        bruttoPrAar: 120000,
        periodeAarsaker: [PeriodeAarsak.REFUSJON_OPPHOERER],
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(2);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe('2019-02-01');
    expect(nyePerioder[1].fom).toBe('2019-02-02');
    expect(nyePerioder[1].tom).toBe(null);
  });

  it('skal returnere liste med to perioder om andre periode har endring i refusjon', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: false,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2019-02-01',
        bruttoPrAar: 120000,
        periodeAarsaker: [],
      },
      {
        beregningsgrunnlagPeriodeFom: '2019-02-02',
        beregningsgrunnlagPeriodeTom: null,
        bruttoPrAar: 120000,
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(2);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe('2019-02-01');
    expect(nyePerioder[1].fom).toBe('2019-02-02');
    expect(nyePerioder[1].tom).toBe(null);
  });

  it('skal returnere liste med en periode om andre periode har endring i søkt ytelse uten endring i refusjon eller brutto', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2019-02-01',
        periodeAarsaker: [],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2019-02-02',
        beregningsgrunnlagPeriodeTom: null,
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 500_000,
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe(null);
  });

  it('skal returnere liste med to periode om andre periode har endring i søkt ytelse med endring i refusjon', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [
          {
            ...fordelAndel,
            refusjonskravPrAar: 100_000,
          },
        ],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2019-02-01',
        periodeAarsaker: [],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2019-02-02',
        beregningsgrunnlagPeriodeTom: null,
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 500_000,
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(2);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe('2019-02-01');
    expect(nyePerioder[1].fom).toBe('2019-02-02');
    expect(nyePerioder[1].tom).toBe(null);
  });

  it('skal returnere liste med en periode om andre periode har endring i søkt ytelse med endring i refusjon om siste periode ikke har utbetaling', () => {
    const perioder = [
      {
        fom: '2022-11-28',
        tom: '2022-11-30',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2022-12-01',
        tom: '2022-12-02',
        fordelBeregningsgrunnlagAndeler: [
          {
            ...fordelAndel,
            andelIArbeid: [100],
            refusjonskravPrAar: 0,
          },
        ],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2022-11-28',
        beregningsgrunnlagPeriodeTom: '2022-11-30',
        periodeAarsaker: [],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2022-12-01',
        beregningsgrunnlagPeriodeTom: '2022-12-02',
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 500_000,
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('2022-11-28');
    expect(nyePerioder[0].tom).toBe('2022-12-02');
  });

  it('skal returnere liste med en periode om andre periode har endring i søkt ytelse med endring i refusjon om siste periode er kun helg', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2022-08-12',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2022-08-13',
        tom: '2022-08-14',
        fordelBeregningsgrunnlagAndeler: [
          {
            ...fordelAndel,
            refusjonskravPrAar: 0,
          },
        ],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2022-08-12',
        periodeAarsaker: [],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2022-08-13',
        beregningsgrunnlagPeriodeTom: '2022-08-14',
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 500_000,
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe('2022-08-14');
  });

  it('skal returnere liste med en periode om andre periode har endring i søkt ytelse med endring i refusjon om første periode er kun helg', () => {
    const perioder = [
      {
        fom: '2022-08-13',
        tom: '2022-08-14',
        fordelBeregningsgrunnlagAndeler: [
          {
            ...fordelAndel,
            refusjonskravPrAar: 0,
          },
        ],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2022-08-15',
        tom: '9999-12-31',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2022-08-13',
        beregningsgrunnlagPeriodeTom: '2022-08-14',
        periodeAarsaker: [],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2022-08-15',
        beregningsgrunnlagPeriodeTom: '9999-12-31',
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 500_000,
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('2022-08-13');
    expect(nyePerioder[0].tom).toBe('9999-12-31');
  });

  it('skal returnere liste med en periode om andre periode har endring i søkt ytelse med endring i refusjon om første periode ikke har utbetaling', () => {
    const perioder = [
      {
        fom: '2022-08-15',
        tom: '2022-08-16',
        fordelBeregningsgrunnlagAndeler: [
          {
            ...fordelAndel,
            andelIArbeid: [100],
            refusjonskravPrAar: 0,
          },
        ],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2022-08-17',
        tom: '9999-12-31',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2022-08-15',
        beregningsgrunnlagPeriodeTom: '2022-08-16',
        periodeAarsaker: [],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2022-08-17',
        beregningsgrunnlagPeriodeTom: '9999-12-31',
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 500_000,
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('2022-08-15');
    expect(nyePerioder[0].tom).toBe('9999-12-31');
  });

  it('skal returnere liste med en periode om andre periode har endring i søkt ytelse med endring i refusjon om midterste periode er kun helg', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2022-08-12',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2022-08-13',
        tom: '2022-08-14',
        fordelBeregningsgrunnlagAndeler: [
          {
            ...fordelAndel,
            refusjonskravPrAar: 0,
          },
        ],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2022-08-15',
        tom: '9999-12-31',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2022-08-12',
        periodeAarsaker: [],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2022-08-13',
        beregningsgrunnlagPeriodeTom: '2022-08-14',
        periodeAarsaker: [],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2022-08-15',
        beregningsgrunnlagPeriodeTom: '9999-12-31',
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 500_000,
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe('9999-12-31');
  });

  it('skal returnere liste med en periode om andre periode har endring i søkt ytelse med endring i refusjon om midterste periode er uten utbetaling', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2022-08-15',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2022-08-16',
        tom: '2022-08-17',
        fordelBeregningsgrunnlagAndeler: [
          {
            ...fordelAndel,
            andelIArbeid: [100],
            refusjonskravPrAar: 0,
          },
        ],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2022-08-18',
        tom: '9999-12-31',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2022-08-15',
        periodeAarsaker: [],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2022-08-16',
        beregningsgrunnlagPeriodeTom: '2022-08-17',
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2022-08-18',
        beregningsgrunnlagPeriodeTom: '9999-12-31',
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 500_000,
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(1);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe('9999-12-31');
  });

  it('skal returnere liste med to periode om andre periode har endring i søkt ytelse med endring i brutto', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2019-02-01',
        periodeAarsaker: [],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2019-02-02',
        beregningsgrunnlagPeriodeTom: null,
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 200_000,
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(2);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe('2019-02-01');
    expect(nyePerioder[1].fom).toBe('2019-02-02');
    expect(nyePerioder[1].tom).toBe(null);
  });

  it('skal returnere liste med to periode om andre periode har endring i søkt ytelse med ulikt antall andeler', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel, fordelAndel2],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
      },
    ];
    const bgPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-01-01',
        beregningsgrunnlagPeriodeTom: '2019-02-01',
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 500_000,
      },
      {
        beregningsgrunnlagPeriodeFom: '2019-02-02',
        beregningsgrunnlagPeriodeTom: null,
        periodeAarsaker: [PeriodeAarsak.ENDRING_I_AKTIVITETER_SØKT_FOR],
        bruttoPrAar: 500_000,
      },
    ];
    const nyePerioder = slåSammenPerioder(perioder, bgPerioder);
    expect(nyePerioder.length).toBe(2);
    expect(nyePerioder[0].fom).toBe('2019-01-01');
    expect(nyePerioder[0].tom).toBe('2019-02-01');
    expect(nyePerioder[1].fom).toBe('2019-02-02');
    expect(nyePerioder[1].tom).toBe(null);
  });

  it('skal lage en periode for submit dersom ikke slått sammen', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel, fordelAndel2],
        harPeriodeAarsakGraderingEllerRefusjon: true,
        skalRedigereInntekt: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
        skalRedigereInntekt: true,
      },
    ];
    const submitPerioder = lagPerioderForSubmit({ fordelBGPeriode0: [] }, 0, perioder[0], perioder);
    expect(submitPerioder.length).toBe(1);
    expect(submitPerioder[0].fom).toBe('2019-01-01');
    expect(submitPerioder[0].tom).toBe('2019-02-01');
  });

  it('skal lage to perioder for submit dersom slått sammen med siste periode', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
        skalRedigereInntekt: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
        skalRedigereInntekt: true,
      },
    ];

    const kombinertPeriode = {
      fom: '2019-01-01',
      tom: null,
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      harPeriodeAarsakGraderingEllerRefusjon: true,
    };
    const submitPerioder = lagPerioderForSubmit({ fordelBGPeriode0: [] }, 0, kombinertPeriode, perioder);
    expect(submitPerioder.length).toBe(2);
    expect(submitPerioder[0].fom).toBe('2019-01-01');
    expect(submitPerioder[0].tom).toBe('2019-02-01');
    expect(submitPerioder[1].fom).toBe('2019-02-02');
    expect(submitPerioder[1].tom).toBe(null);
  });

  it('skal lage en periode for submit dersom slått sammen med siste periode men kun en er redigerbar', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
        skalRedigereInntekt: true,
      },
      {
        fom: '2019-02-02',
        tom: null,
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: false,
        skalRedigereInntekt: false,
      },
    ];

    const kombinertPeriode = {
      fom: '2019-01-01',
      tom: null,
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      harPeriodeAarsakGraderingEllerRefusjon: true,
    };
    const submitPerioder = lagPerioderForSubmit({ fordelBGPeriode0: [] }, 0, kombinertPeriode, perioder);
    expect(submitPerioder.length).toBe(1);
    expect(submitPerioder[0].fom).toBe('2019-01-01');
    expect(submitPerioder[0].tom).toBe('2019-02-01');
  });

  it('skal lage to perioder for submit dersom slått sammen med ikke periode', () => {
    const perioder = [
      {
        fom: '2019-01-01',
        tom: '2019-02-01',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
        skalRedigereInntekt: true,
      },
      {
        fom: '2019-02-02',
        tom: '2019-02-03',
        fordelBeregningsgrunnlagAndeler: [fordelAndel],
        harPeriodeAarsakGraderingEllerRefusjon: true,
        skalRedigereInntekt: true,
      },
    ];

    const kombinertPeriode = {
      fom: '2019-01-01',
      tom: '2019-02-03',
      fordelBeregningsgrunnlagAndeler: [fordelAndel],
      harPeriodeAarsakGraderingEllerRefusjon: true,
      skalRedigereInntekt: true,
    };
    const submitPerioder = lagPerioderForSubmit({ fordelBGPeriode0: [] }, 0, kombinertPeriode, perioder);
    expect(submitPerioder.length).toBe(2);
    expect(submitPerioder[0].fom).toBe('2019-01-01');
    expect(submitPerioder[0].tom).toBe('2019-02-01');
    expect(submitPerioder[1].fom).toBe('2019-02-02');
    expect(submitPerioder[1].tom).toBe('2019-02-03');
  });
});
