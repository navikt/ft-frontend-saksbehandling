import { TIDENES_ENDE } from '@navikt/ft-utils';

import { refusjonsandelerForTreArbeidsgivere } from '../../../../testdata/refusjonsandeler';
import { utledRefusjonsperioder } from './utledRefusjonsperioder';

describe('utledRefusjonsperioder', () => {
  it('beholder sluttdatoen når opprinnelige perioder slås sammen', () => {
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    const perioder = utledRefusjonsperioder(
      [
        {
          ...andel.refusjonsperioder[0],
          tom: andel.refusjonsperioder[1].tom,
        },
      ],
      andel,
    );

    expect(perioder).toEqual([expect.objectContaining({ fom: '2025-01-01', tom: '2025-06-30' })]);
  });

  it('holder periodene sammenhengende når en opprinnelig mellomgrense flyttes', () => {
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    const perioder = utledRefusjonsperioder(
      [andel.refusjonsperioder[0], { ...andel.refusjonsperioder[1], fom: '2025-05-01' }],
      andel,
    );

    expect(perioder).toEqual([
      expect.objectContaining({ fom: '2025-01-01', tom: '2025-04-30' }),
      expect.objectContaining({ fom: '2025-05-01', tom: '2025-06-30' }),
    ]);
  });

  it.each(['2025-02-01', '2025-05-01', TIDENES_ENDE, undefined, ''])(
    'beholder flyttet siste tom %s og bruker tidenes ende når tom mangler',
    tom => {
      const andel = refusjonsandelerForTreArbeidsgivere[0];
      const original = andel.refusjonsperioder[0];
      const perioder = utledRefusjonsperioder([{ ...original, tom }], {
        ...andel,
        refusjonsperioder: [original],
      });

      expect(perioder[0].tom).toBe(tom || TIDENES_ENDE);
    },
  );

  it('utleder delperioder etter opprinnelig tom når sluttdatoen er flyttet frem', () => {
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    const original = andel.refusjonsperioder[0];
    const perioder = utledRefusjonsperioder([original, { ...original, fom: '2025-04-01', tom: '2025-05-31' }], {
      ...andel,
      refusjonsperioder: [original],
    });

    expect(perioder).toEqual([
      expect.objectContaining({ fom: '2025-01-01', tom: '2025-03-31' }),
      expect.objectContaining({ fom: '2025-04-01', tom: '2025-05-31' }),
    ]);
  });

  it('bevarer utfall for positive beløp og avslår nullbeløp når en periode deles', () => {
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    const original = { ...andel.refusjonsperioder[0], utfall: 'INNVILGET' as const };
    const perioder = utledRefusjonsperioder(
      [
        { ...original, refusjonPrMnd: 50000, utfall: 'AVSLÅTT' },
        { ...original, fom: '2025-02-01', refusjonPrMnd: 0, utfall: undefined },
      ],
      { ...andel, refusjonsperioder: [original] },
    );

    expect(perioder).toEqual([
      expect.objectContaining({ fom: '2025-01-01', tom: '2025-01-31', utfall: 'AVSLÅTT' }),
      expect.objectContaining({ fom: '2025-02-01', tom: '2025-03-31', utfall: 'AVSLÅTT' }),
    ]);
  });

  it.each([
    { opprinneligBeløp: 42000, beløp: 0 },
    { opprinneligBeløp: 42000, beløp: '0' },
    { opprinneligBeløp: 42000, beløp: '0.00' },
    { opprinneligBeløp: 0, beløp: 0 },
  ])('avslår beløpet $beløp når opprinnelig beløp er $opprinneligBeløp', ({ opprinneligBeløp, beløp }) => {
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    const original = {
      ...andel.refusjonsperioder[0],
      refusjonPrMnd: opprinneligBeløp,
      utfall: 'INNVILGET' as const,
    };

    const perioder = utledRefusjonsperioder([{ ...original, refusjonPrMnd: beløp }], {
      ...andel,
      refusjonsperioder: [original],
    });

    expect(perioder[0].utfall).toBe('AVSLÅTT');
    expect(original.utfall).toBe('INNVILGET');
  });

  it.each([null, undefined, '', 'ugyldig', 0.01])('bevarer utfallet når beløpet er %s og ikke nullbeløp', beløp => {
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    const original = { ...andel.refusjonsperioder[0], utfall: 'INNVILGET' as const };

    const perioder = utledRefusjonsperioder([{ ...original, refusjonPrMnd: beløp }], {
      ...andel,
      refusjonsperioder: [original],
    });

    expect(perioder[0].utfall).toBe('INNVILGET');
  });
});
