import { describe, expect, it } from 'vitest';

import {
  addDaysToDate,
  calcDaysAndWeeks,
  calcDaysAndWeeksWithWeekends,
  createWeekAndDay,
  findDifferenceInMonthsAndDays,
  isValidDate,
} from './dateUtils';

describe('dateUtils', () => {
  describe('createWeekAndDay', () => {
    it.each([
      [1, 1, '1 uke 1 dag'],
      [2, 2, '2 uker 2 dager'],
      [4, 0, '4 uker'],
      [0, 1, '1 dag'],
      [0, 0, '0 dager'],
      [undefined, 0, '0 dager'],
      [undefined, 2, '2 dager'],
      [2, undefined, '2 uker'],
      [undefined, undefined, 'Antall uker og dager -'],
    ])('skal formatere %s uker og %s dager', (uker, dager, expectedString) => {
      const resultat = createWeekAndDay(uker, dager);
      expect(resultat.formattedString).toEqual(expectedString);
    });
  });

  describe('calcDaysAndWeeksWithWeekends', () => {
    it('Skal kalkulere antall dager mellom to datoer inkludert helger og skrive det ut som uker og dager', () => {
      const fom = '2018-04-17';
      const tom = '2018-06-02';
      const formatedMessage = {
        id: 'Dato.AntallDagerOgUker',
        formattedString: '6 uker 5 dager',
        weeks: 6,
        days: 5,
      };
      expect(calcDaysAndWeeksWithWeekends(fom, tom)).toEqual(formatedMessage);
    });
  });

  describe('calcDaysAndWeeks', () => {
    it('Skal kalkulere antall dager mellom to datoer uten helger og skrive det ut som uker og dager', () => {
      const fom = '2018-04-17';
      const tom = '2018-06-02';
      const formatedMessage = {
        id: 'Dato.AntallDagerOgUker',
        formattedString: '6 uker 4 dager',
        weeks: 6,
        days: 4,
      };
      expect(calcDaysAndWeeks(fom, tom)).toEqual(formatedMessage);
    });
  });

  describe('addDaysToDate', () => {
    it('Skal legge til dager på et timestamp og returnere dato', () => {
      const dateTime = '2017-08-02T01:54:25.455';
      const daysToAdd = 6;
      expect(addDaysToDate(dateTime, daysToAdd)).toEqual('2017-08-08');
    });
  });

  describe('findDifferenceInMonthsAndDays', () => {
    it('skal vise korrekt periode mellom to datoer inkludert sluttdato', () => {
      const fomDate = '2021-02-01';
      const tomDate = '2021-02-17';
      expect(findDifferenceInMonthsAndDays(fomDate, tomDate)).toEqual({
        months: 0,
        days: 17,
      });
    });

    it('Skal ikke være måneder i mellom datoer', () => {
      const fomDate = '2021-04-30';
      const tomDate = '2021-05-31';
      expect(findDifferenceInMonthsAndDays(fomDate, tomDate)).toEqual({
        months: 1,
        days: 1,
      });
    });

    it('Skal være måned i mellom datoer i tillegg til at hele siste måned er valgt', () => {
      const fomDate = '2021-04-30';
      const tomDate = '2021-06-30';
      expect(findDifferenceInMonthsAndDays(fomDate, tomDate)).toEqual({
        months: 2,
        days: 1,
      });
    });

    it('Skal være måned i mellom datoer i tillegg til at hele første måned er valgt', () => {
      const fomDate = '2021-04-01';
      const tomDate = '2021-06-24';
      expect(findDifferenceInMonthsAndDays(fomDate, tomDate)).toEqual({
        months: 2,
        days: 24,
      });
    });

    it('Skal være måned i mellom datoer', () => {
      const fomDate = '2021-04-30';
      const tomDate = '2021-06-24';
      expect(findDifferenceInMonthsAndDays(fomDate, tomDate)).toEqual({
        months: 1,
        days: 25,
      });
    });

    it('skal vise at perioden mellom to datoer er på 4 måneder og 30 dager', () => {
      const fomDate = '2017-12-01';
      const tomDate = '2018-04-30';
      expect(findDifferenceInMonthsAndDays(fomDate, tomDate)).toEqual({
        months: 4,
        days: 30,
      });
    });

    it('skal vise at perioden mellom to datoer er på 10 dager', () => {
      const fomDate = '2018-04-20';
      const tomDate = '2018-04-30';
      expect(findDifferenceInMonthsAndDays(fomDate, tomDate)).toEqual({
        months: 0,
        days: 11,
      });
    });

    it('skal returnere undefined når periode ikke er gyldig fordi fomDato er etter tomDato', () => {
      const fomDate = '2018-04-30';
      const tomDate = '2018-04-10';
      expect(findDifferenceInMonthsAndDays(fomDate, tomDate)).toBeUndefined();
    });

    it('skal vise korrekt periode mellom to datoer', () => {
      const fomDate = '2021-02-27';
      const tomDate = '2021-05-20';
      expect(findDifferenceInMonthsAndDays(fomDate, tomDate)).toEqual({
        months: 2,
        days: 22,
      });
    });
  });

  describe('isValidDate', () => {
    it.each([
      '12-07-12',
      '2012-07-12',
      '2012-07',
      '2012',
      '2012-07-12T12:27:34.653Z',
      '2012.07.12',
      '2012.07',
      1342051200000,
    ])('skal validere gyldig dato %s', date => {
      expect(isValidDate(date)).toBeTruthy();
    });

    it.each(['22-07-2012', '2. mai', undefined])('skal validere ugyldig dato %s', date => {
      expect(isValidDate(date)).toBeFalsy();
    });
  });
});
