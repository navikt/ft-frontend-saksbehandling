import { AktivitetStatus as aktivitetStatuser, KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk } from '@navikt/ft-types';
import { besteberegningField } from './besteberegningFodendeKvinne/VurderBesteberegningForm';
import { InntektFieldArray, leggTilDagpengerOmBesteberegning } from './InntektFieldArray';

const alleKodeverk = {
  [KodeverkType.AKTIVITET_STATUS]: [
    {
      kode: aktivitetStatuser.MILITAER_ELLER_SIVIL,
      navn: 'Militær og siviltjeneste',
      kodeverk: 'test',
    },
    {
      kode: aktivitetStatuser.ARBEIDSTAKER,
      navn: 'Arbeidstaker',
      kodeverk: 'test',
    },
    {
      kode: aktivitetStatuser.FRILANSER,
      navn: 'Frilanser',
      kodeverk: 'test',
    },
    {
      kode: aktivitetStatuser.DAGPENGER,
      navn: 'Dagpenger',
      kodeverk: 'test',
    },
    {
      kode: aktivitetStatuser.SELVSTENDIG_NAERINGSDRIVENDE,
      navn: 'Selvstendig næringsdrivende',
      kodeverk: 'test',
    },
    {
      kode: aktivitetStatuser.BRUKERS_ANDEL,
      navn: 'Brukers andel',
      kodeverk: 'test',
    },
  ],
} as AlleKodeverk;

const andelField = {
  nyAndel: false,
  andel: 'Sopra Steria AS (233647823)',
  andelsnr: 1,
  fastsattBelop: '0',
  lagtTilAvSaksbehandler: false,
  inntektskategori: 'ARBEIDSTAKER',
  arbeidsgiverId: '233647823',
  arbeidsperiodeFom: '01.01.2018',
  arbeidsperiodeTom: null,
  refusjonskrav: '10 000',
};

jest.mock('redux-form', () => {
  const reduxForm = jest.requireActual('redux-form');
  return {
    ...reduxForm,
    isDirty: () => () => false,
    getFormValues: () => () => ({ vurderbesteberegningField: {} }),
  };
});

describe('<InntektFieldArray>', () => {
  const initial = {
    fieldArrayName: null,
  };
  initial.fieldArrayName = [andelField];
  initial[besteberegningField] = true;

  it('skal fjerne dagpengeandel om dagpenger og lagt til manuelt', () => {
    const newfields = [{ aktivitetStatus: aktivitetStatuser.DAGPENGER, lagtTilAvSaksbehandler: true }];
    leggTilDagpengerOmBesteberegning(
      newfields as any,
      false,
      alleKodeverk[KodeverkType.AKTIVITET_STATUS],
      false,
      jest.fn(),
      (index: number) => newfields.splice(index, 1),
      (values: any) => newfields.push(values),
    );
    expect(newfields.length).toBe(0);
  });

  it('skal ikkje fjerne dagpengeandel om dagpenger og ikkje lagt til manuelt', () => {
    const newfields = [{ aktivitetStatus: aktivitetStatuser.DAGPENGER, lagtTilAvSaksbehandler: false }];
    leggTilDagpengerOmBesteberegning(
      newfields as any,
      false,
      alleKodeverk[KodeverkType.AKTIVITET_STATUS],
      false,
      jest.fn(),
      (index: number) => newfields.splice(index, 1),
      (values: any) => newfields.push(values),
    );
    expect(newfields.length).toBe(1);
  });

  it('skal ikkje bygge initial values om ingen andeler', () => {
    const iv = InntektFieldArray.buildInitialValues([], {}, {} as AlleKodeverk);
    expect(Object.keys(iv)).toHaveLength(0);
  });
});
