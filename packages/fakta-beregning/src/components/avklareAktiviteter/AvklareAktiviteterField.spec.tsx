import { OpptjeningAktivitetType } from '@navikt/ft-kodeverk';
import type { AvklarBeregningAktiviteterMap } from '@navikt/ft-types';

import { agOpplysninger as arbeidsgiverOpplysninger } from '../../../testdata/arbeidsgiverOpplysninger';
import type { AvklarAktiviteterValues } from '../../typer/AvklarAktivitetTypes';
import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import type { KodeverkForPanel } from '../../typer/KodeverkForPanel';
import type { Vilkårperiode } from '../../typer/Vilkår';
import { buildInitialValues, transformFieldValue } from './avklareAktiviteterHjelpefunksjoner';

const { AVKLAR_AKTIVITETER, OVERSTYRING_AV_BEREGNINGSAKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

const kodeverkSamling = {
  OpptjeningAktivitetType: [
    {
      kode: OpptjeningAktivitetType.ARBEID,
      navn: 'Arbeid',
    },
    {
      kode: OpptjeningAktivitetType.FRILANS,
      navn: 'Frilans',
    },
    {
      kode: OpptjeningAktivitetType.DAGPENGER,
      navn: 'Dagpenger',
    },
    {
      kode: OpptjeningAktivitetType.NARING,
      navn: 'Næring',
    },
  ],
} as KodeverkForPanel;

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

const id1: string = '3847238947232019-01-01';
const id2: string = '334534623342efj8343f34f2019-01-01';
const id3: string = '324234234234efj8343f34f2019-01-01';
const idAAP: string = 'AAP2019-01-01';

const vilkarPeriode = {
  vurderesIBehandlingen: true,
  periode: {
    fom: '2019-02-02',
    tom: '2019-02-03',
  },
  vilkarStatus: 'IKKE_VURDERT',
} as Vilkårperiode;

const avklarAktiviteterAvklaringsbehov = [
  {
    definisjon: AVKLAR_AKTIVITETER,
    status: 'UTFO',
    kanLoses: true,
  },
];

describe('AvklareAktiviteterField', () => {
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
      kodeverkSamling,
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
      kodeverkSamling,
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
      kodeverkSamling,
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
      aktiviteterValues: {
        [id1]: {
          skalBrukes: 'false',
          beregningAktivitetNavn: 'test',
          fom: aktivitet1.fom,
          tom: aktivitet1.tom,
        },
        [id2]: {
          skalBrukes: 'true',
          beregningAktivitetNavn: 'test',
          fom: aktivitet2.fom,
          tom: aktivitet2.tom,
        },
        [id3]: {
          skalBrukes: 'false',
          beregningAktivitetNavn: 'test',
          fom: aktivitet3.fom,
          tom: aktivitet3.tom,
        },
        [idAAP]: {
          skalBrukes: 'false',
          beregningAktivitetNavn: 'test',
          fom: aktivitetAAP.fom,
          tom: aktivitetAAP.tom,
        },
      },
      avklaringsbehovListe: avklarAktiviteterAvklaringsbehov,
    } as AvklarAktiviteterValues;
    values.erTilVurdering = true;

    const transformed = transformFieldValue(values);
    expect(transformed?.beregningsaktivitetLagreDtoList.length).toBe(3);
    expect(transformed?.beregningsaktivitetLagreDtoList[0].arbeidsgiverIdentifikator).toBe(
      aktivitet2.arbeidsgiverIdent,
    );
    expect(transformed?.beregningsaktivitetLagreDtoList[1].arbeidsgiverIdentifikator).toBe(
      aktivitet3.arbeidsgiverIdent,
    );
    expect(transformed?.beregningsaktivitetLagreDtoList[2].opptjeningAktivitetType).toBe(
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
    const values = {
      avklarAktiviteter,
      aktiviteterValues: {
        [id1]: {
          skalBrukes: undefined,
          beregningAktivitetNavn: 'test',
          fom: aktivitet1.fom,
          tom: aktivitet1.tom,
        },
        [id2]: {
          skalBrukes: 'true',
          beregningAktivitetNavn: 'test',
          fom: aktivitet2.fom,
          tom: aktivitet2.tom,
        },
        [id3]: {
          skalBrukes: 'false',
          beregningAktivitetNavn: 'test',
          fom: aktivitet3.fom,
          tom: aktivitet3.tom,
        },
        [idAAP]: {
          skalBrukes: 'true',
          beregningAktivitetNavn: 'test',
          fom: aktivitetAAP.fom,
          tom: aktivitetAAP.tom,
        },
      },
    } as AvklarAktiviteterValues;
    values.begrunnelseAvklareAktiviteter = 'begrunnelse';
    values.manuellOverstyringBeregningAktiviteter = true;
    values.erTilVurdering = true;
    const transformed = transformFieldValue(values);
    expect(transformed?.beregningsaktivitetLagreDtoList.length).toBe(3);
    expect(transformed?.beregningsaktivitetLagreDtoList[0].arbeidsgiverIdentifikator).toBe(
      aktivitet2.arbeidsgiverIdent,
    );
    expect(transformed?.beregningsaktivitetLagreDtoList[1].arbeidsgiverIdentifikator).toBe(
      aktivitet3.arbeidsgiverIdent,
    );
    expect(transformed?.beregningsaktivitetLagreDtoList[2].opptjeningAktivitetType).toBe(
      aktivitetAAP.arbeidsforholdType,
    );
    expect(transformed?.begrunnelse).toBe('begrunnelse');
  });
});
