import { Vilkarperiode, AlleKodeverk, AvklarBeregningAktiviteterMap } from '@navikt/ft-types';
import { KodeverkType, OpptjeningAktivitetType } from '@navikt/ft-kodeverk';
import { buildInitialValues, transformFieldValue } from './AvklareAktiviteterField';
import arbeidsgiverOpplysninger from '../../../testdata/arbeidsgiverOpplysninger';
import FaktaBeregningAvklaringsbehovCode from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import AvklarAktiviteterValues from '../../typer/AvklarAktivitetTypes';

const { AVKLAR_AKTIVITETER, OVERSTYRING_AV_BEREGNINGSAKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

const alleKodeverk = {
  [KodeverkType.OPPTJENING_AKTIVITET_TYPE]: [
    {
      kode: OpptjeningAktivitetType.ARBEID,
      kodeverk: 'test',
      navn: 'Arbeid',
    },
    {
      kode: OpptjeningAktivitetType.FRILANS,
      kodeverk: 'test',
      navn: 'Frilans',
    },
    {
      kode: OpptjeningAktivitetType.DAGPENGER,
      kodeverk: 'test',
      navn: 'Dagpenger',
    },
    {
      kode: OpptjeningAktivitetType.NARING,
      kodeverk: 'test',
      navn: 'Næring',
    },
  ],
} as AlleKodeverk;

const aktivitet1 = {
  arbeidsgiverIdent: '384723894723',
  fom: '2019-01-01',
  tom: null,
  skalBrukes: null,
  arbeidsforholdType: 'ARBEID',
};

const aktivitet2 = {
  arbeidsgiverIdent: '334534623342',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: true,
  arbeidsforholdType: 'ARBEID',
};

const aktivitet3 = {
  aktørIdString: '324234234234',
  arbeidsgiverIdent: '324234234234',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: false,
  arbeidsforholdType: 'ARBEID',
};

const aktivitetAAP = {
  arbeidsgiverIdent: null,
  arbeidsforholdType: 'AAP',
  fom: '2019-01-01',
  tom: '2020-02-02',
  skalBrukes: null,
};

const aktiviteter = [aktivitet1, aktivitet2, aktivitet3, aktivitetAAP];

const id1 = '3847238947232019-01-01';
const id2 = '334534623342efj8343f34f2019-01-01';
const id3 = '324234234234efj8343f34f2019-01-01';
const idAAP = 'AAP2019-01-01';

const vilkarPeriode = {
  vurderesIBehandlingen: true,
  periode: {
    fom: '2019-02-02',
    tom: '2019-02-03',
  },
  vilkarStatus: 'IKKE_VURDERT',
} as Vilkarperiode;

const avklarAktiviteterAvklaringsbehov = [
  {
    definisjon: AVKLAR_AKTIVITETER,
    status: 'UTFO',
    kanLoses: true,
  },
];

describe('<AvklareAktiviteterField>', () => {
  it('skal teste at initial values blir bygget', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        {
          tom: '2019-02-02',
          aktiviteter,
        },
      ],
    } as AvklarBeregningAktiviteterMap;

    const initialValues = buildInitialValues(
      avklarAktiviteterAvklaringsbehov,
      avklarAktiviteter,
      alleKodeverk,
      arbeidsgiverOpplysninger,
      vilkarPeriode,
    );
    expect(initialValues !== null).toBe(true);
    expect(initialValues.manuellOverstyringBeregningAktiviteter).toBe(false);
  });

  it('skal teste at initial values blir bygget uten aksjonspunkt', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        {
          tom: '2019-02-02',
          aktiviteter,
        },
      ],
    } as AvklarBeregningAktiviteterMap;

    const initialValues = buildInitialValues(
      [],
      avklarAktiviteter,
      alleKodeverk,
      arbeidsgiverOpplysninger,
      vilkarPeriode,
    );
    expect(initialValues !== null).toBe(true);
    expect(initialValues.manuellOverstyringBeregningAktiviteter).toBe(false);
  });

  it('skal teste at initial values blir bygget med overstyrt aksjonspunkt', () => {
    const avklarAktiviteter = {
      aktiviteterTomDatoMapping: [
        {
          tom: '2019-02-02',
          aktiviteter,
        },
      ],
    } as AvklarBeregningAktiviteterMap;
    const aps = [
      {
        definisjon: OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
        status: 'OPPR',
        kanLoses: true,
      },
    ];
    const initialValues = buildInitialValues(
      aps,
      avklarAktiviteter,
      alleKodeverk,
      arbeidsgiverOpplysninger,
      vilkarPeriode,
    );
    expect(initialValues !== null).toBe(true);
    expect(initialValues.manuellOverstyringBeregningAktiviteter).toBe(true);
  });

  it('skal transform values for avklar aktiviteter aksjonspunkt', () => {
    const avklarAktiviteter = {
      skjæringstidspunkt: '2019-02-02',
      aktiviteterTomDatoMapping: [
        {
          tom: '2019-02-02',
          aktiviteter,
        },
      ],
    } as AvklarBeregningAktiviteterMap;
    const values = {
      avklarAktiviteter,
      aktiviteterValues: {},
      avklaringsbehov: avklarAktiviteterAvklaringsbehov,
    } as AvklarAktiviteterValues;
    values.aktiviteterValues[id1] = {
      skalBrukes: 'false',
      beregningAktivitetNavn: 'test',
      fom: aktivitet1.fom,
      tom: aktivitet1.tom,
    };
    values.aktiviteterValues[id2] = {
      skalBrukes: 'true',
      beregningAktivitetNavn: 'test',
      fom: aktivitet2.fom,
      tom: aktivitet2.tom,
    };
    values.aktiviteterValues[id3] = {
      skalBrukes: 'false',
      beregningAktivitetNavn: 'test',
      fom: aktivitet3.fom,
      tom: aktivitet3.tom,
    };
    values.aktiviteterValues[idAAP] = {
      skalBrukes: 'false',
      beregningAktivitetNavn: 'test',
      fom: aktivitetAAP.fom,
      tom: aktivitetAAP.tom,
    };
    values.erTilVurdering = true;

    const transformed = transformFieldValue(values);
    expect(transformed.beregningsaktivitetLagreDtoList.length).toBe(3);
    expect(transformed.beregningsaktivitetLagreDtoList[0].arbeidsgiverIdentifikator).toBe(aktivitet2.arbeidsgiverIdent);
    expect(transformed.beregningsaktivitetLagreDtoList[1].arbeidsgiverIdentifikator).toBe(aktivitet3.arbeidsgiverIdent);
    expect(transformed.beregningsaktivitetLagreDtoList[2].opptjeningAktivitetType).toBe(
      aktivitetAAP.arbeidsforholdType,
    );
  });

  it('skal transform values om valgt overstyring', () => {
    const avklarAktiviteter = {
      skjæringstidspunkt: '2019-02-02',
      aktiviteterTomDatoMapping: [
        {
          tom: '2019-02-02',
          aktiviteter,
        },
      ],
    } as AvklarBeregningAktiviteterMap;
    const aps = [];
    const values = {
      avklarAktiviteter,
      aktiviteterValues: {},
      aksjonspunkter: aps,
    } as AvklarAktiviteterValues;
    values.aktiviteterValues[id1] = {
      skalBrukes: null,
      beregningAktivitetNavn: 'test',
      fom: aktivitet1.fom,
      tom: aktivitet1.tom,
    };
    values.aktiviteterValues[id2] = {
      skalBrukes: 'true',
      beregningAktivitetNavn: 'test',
      fom: aktivitet2.fom,
      tom: aktivitet2.tom,
    };
    values.aktiviteterValues[id3] = {
      skalBrukes: 'false',
      beregningAktivitetNavn: 'test',
      fom: aktivitet3.fom,
      tom: aktivitet3.tom,
    };
    values.aktiviteterValues[idAAP] = {
      skalBrukes: 'true',
      beregningAktivitetNavn: 'test',
      fom: aktivitetAAP.fom,
      tom: aktivitetAAP.tom,
    };
    values.begrunnelseAvklareAktiviteter = 'begrunnelse';
    values.manuellOverstyringBeregningAktiviteter = true;
    values.erTilVurdering = true;
    const transformed = transformFieldValue(values);
    expect(transformed.beregningsaktivitetLagreDtoList.length).toBe(3);
    expect(transformed.beregningsaktivitetLagreDtoList[0].arbeidsgiverIdentifikator).toBe(aktivitet2.arbeidsgiverIdent);
    expect(transformed.beregningsaktivitetLagreDtoList[1].arbeidsgiverIdentifikator).toBe(aktivitet3.arbeidsgiverIdent);
    expect(transformed.beregningsaktivitetLagreDtoList[2].opptjeningAktivitetType).toBe(
      aktivitetAAP.arbeidsforholdType,
    );
    expect(transformed.begrunnelse).toBe('begrunnelse');
  });
});
