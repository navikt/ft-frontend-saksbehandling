import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';

import type { AndelFieldValue } from '../../typer/FieldValues';
import type { KodeverkForPanel } from '../../typer/KodeverkForPanel';
import { InntektFieldArray } from './InntektFieldArray';
import { leggTilDagpengerOmBesteberegning } from './inntektFieldArrayUtils';

const kodeverkSamling = alleKodeverk as KodeverkForPanel;

describe('InntektFieldArray', () => {
  it('skal ikkje fjerne dagpengeandel om dagpenger og ikkje lagt til manuelt', () => {
    const newfields: AndelFieldValue[] = [
      { aktivitetStatus: 'DP', lagtTilAvSaksbehandler: false, andel: '', inntektskategori: 'DAGPENGER' },
    ];
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
