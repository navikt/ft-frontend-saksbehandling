import { refusjonsandelerForTreArbeidsgivere } from '../../../../testdata/refusjonsandeler';
import { utledRefusjonsperioder } from './utledRefusjonsperioder';

describe('utledRefusjonsperioder', () => {
  it('bevarer utfall fra skjemadata når en periode deles og beløpene endres', () => {
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    const original = { ...andel.refusjonsperioder[0], utfall: 'INNVILGET' as const };
    const perioder = utledRefusjonsperioder(
      [
        { ...original, kilde: andel.kilde, refusjonsbeløpPrMnd: 50000, utfall: 'AVSLÅTT' },
        { ...original, fom: '2025-02-01', kilde: 'SAKSBEHANDLER', refusjonsbeløpPrMnd: 0, utfall: undefined },
      ],
      { ...andel, refusjonsperioder: [original] },
    );

    expect(perioder).toEqual([
      expect.objectContaining({ fom: '2025-01-01', tom: '2025-01-31', utfall: 'AVSLÅTT' }),
      expect.objectContaining({ fom: '2025-02-01', tom: '2025-03-31', utfall: undefined }),
    ]);
  });
});
