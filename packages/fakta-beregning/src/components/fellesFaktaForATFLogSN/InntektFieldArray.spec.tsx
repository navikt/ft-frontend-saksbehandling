import { AktivitetStatus as aktivitetStatuser } from '@navikt/ft-kodeverk';

import type { KodeverkForPanel } from '../../typer/KodeverkForPanel';
import { InntektFieldArray } from './InntektFieldArray';
import { leggTilDagpengerOmBesteberegning } from './inntektFieldArrayUtils';

const kodeverkSamling = {
  AktivitetStatus: [
    {
      kode: aktivitetStatuser.MILITÆR_ELLER_SIVIL,
      navn: 'Militær og siviltjeneste',
    },
    {
      kode: aktivitetStatuser.ARBEIDSTAKER,
      navn: 'Arbeidstaker',
    },
    {
      kode: aktivitetStatuser.FRILANSER,
      navn: 'Frilanser',
    },
    {
      kode: aktivitetStatuser.DAGPENGER,
      navn: 'Dagpenger',
    },
    {
      kode: aktivitetStatuser.SELVSTENDIG_NÆRINGSDRIVENDE,
      navn: 'Selvstendig næringsdrivende',
    },
    {
      kode: aktivitetStatuser.BRUKERS_ANDEL,
      navn: 'Brukers andel',
    },
  ],
} as KodeverkForPanel;

describe('InntektFieldArray', () => {
  it('skal ikkje fjerne dagpengeandel om dagpenger og ikkje lagt til manuelt', () => {
    const newfields = [{ aktivitetStatus: aktivitetStatuser.DAGPENGER, lagtTilAvSaksbehandler: false }];
    const rm = (index: number) => newfields.splice(index, 1);
    leggTilDagpengerOmBesteberegning(
      newfields as any,
      false,
      kodeverkSamling['AktivitetStatus'],
      false,
      rm as any,
      (values: any) => newfields.push(values),
    );
    expect(newfields.length).toBe(1);
  });

  it('skal ikkje bygge initial values om ingen andeler', () => {
    const iv = InntektFieldArray.buildInitialValues([], {}, {} as KodeverkForPanel);
    expect(Object.keys(iv)).toHaveLength(0);
  });
});
