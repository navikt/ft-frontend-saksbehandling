import { TIDENES_ENDE } from '@navikt/ft-utils';

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
    ['omvendte datoer', [{ fom: '2024-03-31', tom: '2024-02-01' }]],
    ['ugyldig dato', [{ fom: '2024-02-30', tom: '2024-03-31' }]],
    ['tom dato', [{ fom: '', tom: '2024-03-31' }]],
    ['ingen perioder', []],
  ])('avviser %s', (_beskrivelse, perioder) => {
    expect(erGyldigOppdeling(perioder, original)).toBe(false);
  });

  it.each([
    [{ fom: '2024-02-02', tom: '2024-03-31' }],
    [{ fom: '2024-02-01', tom: '2024-02-01' }],
    [{ fom: '2024-02-01', tom: '2024-02-29' }],
    [{ fom: '2024-02-01', tom: '2024-04-30' }],
    [{ fom: '2024-04-01', tom: '2024-04-30' }],
    [{ fom: '2024-02-01', tom: TIDENES_ENDE }],
    [{ fom: '2024-02-01' }],
    [{ fom: '2024-02-01', tom: '' }],
  ])('godtar flytting innenfor nedre fom-grense og fri siste tom: %j', periode => {
    expect(erGyldigOppdeling([periode], original)).toBe(true);
  });

  it('godtar oppdeling etter opprinnelig tom og bevarer sammenhengen', () => {
    expect(
      erGyldigOppdeling(
        [
          { fom: '2024-02-01', tom: '2024-03-31' },
          { fom: '2024-04-01', tom: '2024-05-31' },
        ],
        original,
      ),
    ).toBe(true);
  });

  it('avviser tom før tidligste opprinnelige fom, også når originalene er usorterte', () => {
    expect(
      erGyldigOppdeling(
        [{ fom: '2024-02-01', tom: '2024-01-31' }],
        [
          { fom: '2024-03-01', tom: '2024-03-31' },
          { fom: '2024-02-01', tom: '2024-02-29' },
        ],
      ),
    ).toBe(false);
  });

  it('godtar oppdeling når den opprinnelige perioden mangler tom', () => {
    expect(
      erGyldigOppdeling([{ fom: '2024-02-01', tom: '2024-02-29' }, { fom: '2024-03-01' }], [{ fom: '2024-02-01' }]),
    ).toBe(true);
  });

  it('tillater sammenslåing av opprinnelige perioder', () => {
    const opprinneligePerioder = [
      { fom: '2024-02-01', tom: '2024-02-29' },
      { fom: '2024-03-01', tom: '2024-03-31' },
    ];
    expect(erGyldigOppdeling(original, opprinneligePerioder)).toBe(true);
    expect(erGyldigOppdeling(opprinneligePerioder, opprinneligePerioder)).toBe(true);
  });

  it('avviser hull over en opprinnelig mellomgrense', () => {
    expect(
      erGyldigOppdeling(
        [
          { fom: '2024-02-01', tom: '2024-02-29' },
          { fom: '2024-03-02', tom: '2024-03-31' },
        ],
        [
          { fom: '2024-02-01', tom: '2024-02-29' },
          { fom: '2024-03-01', tom: '2024-03-31' },
        ],
      ),
    ).toBe(false);
  });

  it('bruker tidligste opprinnelige fom også når originalperiodene er usorterte', () => {
    expect(
      erGyldigOppdeling(original, [
        { fom: '2024-03-01', tom: '2024-03-31' },
        { fom: '2024-02-01', tom: '2024-02-29' },
      ]),
    ).toBe(true);
  });

  it('avviser perioder uten opprinnelige perioder', () => {
    expect(erGyldigOppdeling(original, [])).toBe(false);
  });
});
