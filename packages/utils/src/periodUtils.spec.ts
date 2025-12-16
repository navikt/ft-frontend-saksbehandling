import { expect } from 'vitest';

import { TIDENES_ENDE } from './dateUtils';
import { periodFormat, sortPeriodsBy, sortPeriodsByFom } from './periodUtils';

describe('periodUtils', () => {
  describe('periodFormat', () => {
    const fom = '2020-01-02';
    const tom = '2020-01-04';
    it('skal formatere ordinær periode', () => {
      expect(periodFormat(fom, tom)).toEqual('02.01.2020 - 04.01.2020');
    });

    it('skal formatere periode med custom separator', () => {
      expect(periodFormat(fom, tom, { separator: 'til' })).toEqual('02.01.2020 til 04.01.2020');
    });

    it('skal formatere periode med custom formatering', () => {
      expect(periodFormat(fom, tom, { year: '2-digit', month: 'long', day: 'numeric' })).toEqual(
        '2. januar 20 - 4. januar 20',
      );
    });

    it('skal formatere periode med tom som er undefined', () => {
      expect(periodFormat(fom, undefined)).toEqual('02.01.2020 - ');
    });

    it('skal formatere periode med tom som dagens dato', () => {
      expect(periodFormat(fom, undefined, { showTodayString: true })).toEqual('02.01.2020 - d.d.');
    });

    it('skal formatere periode med tom som er tidenes ende (9999-12-31)', () => {
      expect(periodFormat(fom, TIDENES_ENDE)).toEqual('02.01.2020 - ');
    });
  });

  const perioder = [
    { fom: '2020-01-02', tom: '2020-01-04', land: 'Norge' },
    { fom: '2020-01-04', tom: '2020-01-05', land: 'Sverige' },
    { fom: '2020-01-03', tom: '2020-01-03', land: 'Finland' },
    { fom: '2020-01-01', tom: '2020-01-04', land: 'Danmark' },
  ];

  describe('sortPeriodByFom', () => {
    it('skal sortere liste med perioder på fom', () => {
      const sortert = [
        { fom: '2020-01-01', tom: '2020-01-04', land: 'Danmark' },
        { fom: '2020-01-02', tom: '2020-01-04', land: 'Norge' },
        { fom: '2020-01-03', tom: '2020-01-03', land: 'Finland' },
        { fom: '2020-01-04', tom: '2020-01-05', land: 'Sverige' },
      ];
      const result = perioder.toSorted(sortPeriodsByFom);
      expect(result).toEqual(sortert);
    });
  });

  describe('sortPeriodsBy', () => {
    it('skal sortere liste med perioder på tom', () => {
      const sortert = [
        { fom: '2020-01-03', tom: '2020-01-03', land: 'Finland' },
        { fom: '2020-01-02', tom: '2020-01-04', land: 'Norge' },
        { fom: '2020-01-01', tom: '2020-01-04', land: 'Danmark' },
        { fom: '2020-01-04', tom: '2020-01-05', land: 'Sverige' },
      ];

      const result = perioder.toSorted(sortPeriodsBy('tom'));
      expect(result).toEqual(sortert);
    });
  });
});
