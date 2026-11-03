import { erGyldigOppdeling } from './erGyldigOppdeling';

const original = [{ fom: '2024-02-01', tom: '2024-03-31' }];

describe('erGyldigOppdeling', () => {
  it('godtar sammenhengende delperioder i vilkårlig rekkefølge, også over skuddårsdagen', () => {
    expect(
      erGyldigOppdeling(
        [
          { fom: '2024-03-01', tom: '2024-03-31' },
          { fom: '2024-02-01', tom: '2024-02-29' },
        ],
        original,
      ),
    ).toBe(true);
  });

  it.each([
    [
      'hull',
      [
        { fom: '2024-02-01', tom: '2024-02-28' },
        { fom: '2024-03-01', tom: '2024-03-31' },
      ],
    ],
    [
      'overlapp',
      [
        { fom: '2024-02-01', tom: '2024-02-29' },
        { fom: '2024-02-29', tom: '2024-03-31' },
      ],
    ],
    ['utvidelse', [{ fom: '2024-01-31', tom: '2024-03-31' }]],
    ['forkorting', [{ fom: '2024-02-02', tom: '2024-03-31' }]],
    ['omvendte datoer', [{ fom: '2024-03-31', tom: '2024-02-01' }]],
    ['ugyldig dato', [{ fom: '2024-02-30', tom: '2024-03-31' }]],
    ['tom dato', [{ fom: '', tom: '2024-03-31' }]],
    ['ingen perioder', []],
  ])('avviser %s', (_beskrivelse, perioder) => {
    expect(erGyldigOppdeling(perioder, original)).toBe(false);
  });

  it('bevarer skillet mellom opprinnelige perioder og tillater ikke sammenslåing', () => {
    const opprinneligePerioder = [
      { fom: '2024-02-01', tom: '2024-02-29' },
      { fom: '2024-03-01', tom: '2024-03-31' },
    ];
    expect(erGyldigOppdeling(original, opprinneligePerioder)).toBe(false);
    expect(erGyldigOppdeling(opprinneligePerioder, opprinneligePerioder)).toBe(true);
  });
});
