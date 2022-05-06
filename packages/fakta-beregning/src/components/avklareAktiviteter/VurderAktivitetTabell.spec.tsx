import { KodeverkType, opptjeningAktivitetType } from '@navikt/ft-kodeverk';
import { AlleKodeverk } from '@navikt/ft-types';
import {
  buildInitialValues,
  lagAktivitetFieldId,
  skalVurdereAktivitet,
  transformValues,
} from './VurderAktiviteterTabell';

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
  eksternArbeidsforholdId: '123456',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: true,
  arbeidsforholdType: 'ARBEID',
};

const aktivitet3 = {
  aktørIdString: '324234234234',
  arbeidsgiverIdent: '324234234234',
  arbeidsforholdId: 'efj8343f34f',
  eksternArbeidsforholdId: '56789',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: false,
  arbeidsforholdType: 'ARBEID',
};

const aktivitetAAP = {
  arbeidsgiverNavn: null,
  arbeidsgiverIdent: null,
  arbeidsforholdType: opptjeningAktivitetType.AAP,
  fom: '2019-01-01',
  tom: '2020-02-02',
  skalBrukes: null,
};

const aktiviteter = [aktivitet1, aktivitet2, aktivitet3, aktivitetAAP];

const agOpplysninger = {
  324234234234: {
    identifikator: '324234234234',
    navn: 'Arbeidsgiveren3',
    erPrivatPerson: true,
    fødselsdato: '1960-01-01',
  },
  334534623342: {
    identifikator: '334534623342',
    navn: 'Arbeidsgiveren2',
    erPrivatPerson: false,
  },
  384723894723: {
    identifikator: '384723894723',
    navn: 'Arbeidsgiveren',
    erPrivatPerson: false,
  },
};

const alleKodeverk = {
  [KodeverkType.OPPTJENING_AKTIVITET_TYPE]: [
    {
      kode: opptjeningAktivitetType.ARBEID,
      navn: 'Arbeid',
      kodeverk: 'test',
    },
    {
      kode: opptjeningAktivitetType.FRILANS,
      navn: 'Frilans',
      kodeverk: 'test',
    },
    {
      kode: opptjeningAktivitetType.DAGPENGER,
      navn: 'Dagpenger',
      kodeverk: 'test',
    },
    {
      kode: opptjeningAktivitetType.NARING,
      navn: 'Næring',
      kodeverk: 'test',
    },
    {
      kode: opptjeningAktivitetType.AAP,
      navn: 'Arbeidsavklaringspenger',
      kodeverk: 'test',
    },
  ],
} as AlleKodeverk;

describe('<VurderAktiviteterTabell>', () => {
  const id1 = '3847238947232019-01-01';
  it('skal lage id for arbeid', () => {
    const idArbeid = lagAktivitetFieldId(aktivitet1);
    expect(idArbeid).toBe(id1);
  });

  const id2 = '334534623342efj8343f34f2019-01-01';
  it('skal lage id for arbeid med arbeidsforholdId', () => {
    const idArbeid = lagAktivitetFieldId(aktivitet2);
    expect(idArbeid).toBe(id2);
  });

  const id3 = '324234234234efj8343f34f2019-01-01';
  it('skal lage id for arbeid med aktørId', () => {
    const idArbeid = lagAktivitetFieldId(aktivitet3);
    expect(idArbeid).toBe(id3);
  });

  const idAAP = 'AAP2019-01-01';
  it('skal lage id for AAP', () => {
    const idArbeid = lagAktivitetFieldId(aktivitetAAP);
    expect(idArbeid).toBe(idAAP);
  });

  it('skal bygge initial values', () => {
    const initialValues = buildInitialValues(aktiviteter, alleKodeverk, false, true, true, agOpplysninger);
    expect(initialValues[id1].beregningAktivitetNavn).toBe('Arbeidsgiveren (384723894723)');
    expect(initialValues[id1].fom).toBe('2019-01-01');
    expect(initialValues[id1].tom).toBe(null);
    expect(initialValues[id1].skalBrukes).toBe(null);

    expect(initialValues[id2].beregningAktivitetNavn).toBe('Arbeidsgiveren2 (334534623342)...3456');
    expect(initialValues[id2].fom).toBe('2019-01-01');
    expect(initialValues[id2].tom).toBe('2019-02-02');
    expect(initialValues[id2].skalBrukes).toBe('true');

    expect(initialValues[id3].beregningAktivitetNavn).toBe('Arbeidsgiveren3 (01.01.1960)...6789');
    expect(initialValues[id3].fom).toBe('2019-01-01');
    expect(initialValues[id3].tom).toBe('2019-02-02');
    expect(initialValues[id3].skalBrukes).toBe('false');

    expect(initialValues[idAAP].beregningAktivitetNavn).toBe('Arbeidsavklaringspenger');
    expect(initialValues[idAAP].fom).toBe('2019-01-01');
    expect(initialValues[idAAP].tom).toBe('2020-02-02');
    expect(initialValues[idAAP].skalBrukes).toBe('true');
  });

  it('skal bygge initial values for overstyrer', () => {
    const initialValues = buildInitialValues(aktiviteter, alleKodeverk, false, false, true, agOpplysninger);
    expect(initialValues[id1].beregningAktivitetNavn).toBe('Arbeidsgiveren (384723894723)');
    expect(initialValues[id1].fom).toBe('2019-01-01');
    expect(initialValues[id1].tom).toBe(null);
    expect(initialValues[id1].skalBrukes).toBe('true');

    expect(initialValues[id2].beregningAktivitetNavn).toBe('Arbeidsgiveren2 (334534623342)...3456');
    expect(initialValues[id2].fom).toBe('2019-01-01');
    expect(initialValues[id2].tom).toBe('2019-02-02');
    expect(initialValues[id2].skalBrukes).toBe('true');

    expect(initialValues[id3].beregningAktivitetNavn).toBe('Arbeidsgiveren3 (01.01.1960)...6789');
    expect(initialValues[id3].fom).toBe('2019-01-01');
    expect(initialValues[id3].tom).toBe('2019-02-02');
    expect(initialValues[id3].skalBrukes).toBe('false');

    expect(initialValues[idAAP].beregningAktivitetNavn).toBe('Arbeidsavklaringspenger');
    expect(initialValues[idAAP].fom).toBe('2019-01-01');
    expect(initialValues[idAAP].tom).toBe('2020-02-02');
    expect(initialValues[idAAP].skalBrukes).toBe('true');
  });

  it('skal transform values', () => {
    const values = {
      aktiviteterValues: {},
    };
    values.aktiviteterValues[id1] = { skalBrukes: 'true' };
    values.aktiviteterValues[id2] = { skalBrukes: 'false' };
    values.aktiviteterValues[id3] = { skalBrukes: 'false' };
    values.aktiviteterValues[idAAP] = { skalBrukes: 'true' };
    const transformed = transformValues(values, aktiviteter, '2019-02-02', '2019-02-02');
    expect(transformed.length).toBe(2);
    expect(transformed[0].oppdragsgiverOrg).toBe('334534623342');
    expect(transformed[0].arbeidsforholdRef).toBe(aktivitet2.arbeidsforholdId);
    expect(transformed[0].fom).toBe('2019-01-01');
    expect(transformed[0].tom).toBe('2019-02-02');
    expect(transformed[0].arbeidsgiverIdentifikator).toBe('334534623342');
    expect(transformed[0].skalBrukes).toBe(false);

    expect(transformed[1].oppdragsgiverOrg).toBe(null);
    expect(transformed[1].arbeidsforholdRef).toBe(aktivitet3.arbeidsforholdId);
    expect(transformed[1].fom).toBe('2019-01-01');
    expect(transformed[1].tom).toBe('2019-02-02');
    expect(transformed[1].arbeidsgiverIdentifikator).toBe('324234234234');
    expect(transformed[1].skalBrukes).toBe(false);
  });

  it('skal ikkje vurdere AAP for ikkje overstyring', () => {
    const skalVurderes = skalVurdereAktivitet(aktivitetAAP, false, true, true, false);
    expect(skalVurderes).toBe(false);
  });

  it('skal vurdere annen aktivitet for overstyring', () => {
    const skalVurderes = skalVurdereAktivitet(aktivitet1, true, true, true, false);
    expect(skalVurderes).toBe(true);
  });

  it('skal vurdere annen aktivitet for ikkje overstyring', () => {
    const skalVurderes = skalVurdereAktivitet(aktivitet1, false, true, true, false);
    expect(skalVurderes).toBe(true);
  });

  it('skal ikkje vurdere annen aktivitet for ikkje overstyring uten aksjonspunkt', () => {
    const skalVurderes = skalVurdereAktivitet(aktivitet1, false, false, true, false);
    expect(skalVurderes).toBe(false);
  });
});
