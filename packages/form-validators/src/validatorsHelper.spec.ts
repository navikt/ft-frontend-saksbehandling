import dayjs from 'dayjs';
import {
  dateRangesAreSequential,
  decimalRegex,
  integerRegex,
  isEmpty,
  isoDateRegex,
  nameGyldigRegex,
  nameRegex,
  saksnummerOrFodselsnummerPattern,
  textGyldigRegex,
  textRegex,
  yesterday,
} from './validatorsHelper';

describe('validatorsHelper', () => {
  describe('isoDateRegex', () => {
    it('Skal sjekke om dato format er riktig ISO', () => {
      expect(isoDateRegex.test('2018-04-01')).toBeTruthy();
      expect(isoDateRegex.test('12-04-2018')).toBeFalsy();
    });
  });

  describe('integerRegex', () => {
    it('Skal sjekke om input er int', () => {
      expect(integerRegex.test('34')).toBeTruthy();
      expect(integerRegex.test('34.5')).toBeFalsy();
      expect(integerRegex.test('XXX')).toBeFalsy();
    });
  });

  describe('decimalRegex', () => {
    it('Skal sjekke om input er desimal', () => {
      expect(decimalRegex.test('23,34')).toBeTruthy();
      expect(decimalRegex.test('XXX')).toBeFalsy();
    });
  });

  describe('saksnummerOrFodselsnummerPattern', () => {
    it('Skal sjekke om saksnummer er i riktig format', () => {
      expect(saksnummerOrFodselsnummerPattern.test('123456789012345678')).toBeTruthy();
      expect(saksnummerOrFodselsnummerPattern.test('X123456789012345678')).toBeFalsy();
    });
  });

  describe('textRegex', () => {
    it('Skal sjekke om input er tekst', () => {
      expect(textRegex.test('text')).toBeTruthy();
      expect(textRegex.test('3434')).toBeTruthy();
      expect(
        textRegex.test(
          'Bokstaver fra andre språk BØR være greit øåÆØÅAaÁáBbCcČčDdĐđEeFfGgHhIiJjKkLlMmNnŊŋOoPpRrSsŠšTtŦŧUuVvZzŽžéôèÉöüäÖÜ',
        ),
      ).toBeTruthy();
    });
  });

  describe('textGyldigRegex', () => {
    it('Skal sjekke om input er i gyldig tekst format', () => {
      expect(textGyldigRegex.test('Text')).toBeTruthy();
    });
  });

  describe('nameRegex', () => {
    it('Skal sjekke om input er et navn', () => {
      expect(nameRegex.test('Ola Nordmann')).toBeTruthy();
      expect(nameRegex.test("Jan-Ole O'Brian Jr")).toBeTruthy();
      expect(nameRegex.test('Ola Nordmann!')).toBeFalsy();
    });
  });

  describe('nameGyldigRegex', () => {
    it('Skal sjekke om navn er et gyldig navn', () => {
      expect(nameGyldigRegex.test('Ola Nordmann')).toBeTruthy();
    });
  });

  describe('isEmpty', () => {
    it('skal gi true om input er tom', () => {
      expect(isEmpty(null)).toBeTruthy();
      expect(isEmpty(undefined)).toBeTruthy();
      expect(isEmpty('')).toBeTruthy();
    });

    it('skal gi false om input har innhold', () => {
      expect(isEmpty('Not Empty')).toBeFalsy();
      expect(isEmpty(dayjs())).toBeFalsy();
      expect(isEmpty(0)).toBeFalsy();
      expect(isEmpty(false)).toBeFalsy();
      expect(isEmpty(true)).toBeFalsy();
    });
  });

  describe('yesterday', () => {
    it('Skal sjekke om dato er i går', () => {
      expect(yesterday()).toEqual(dayjs().subtract(1, 'days').startOf('day'));
    });
  });

  describe('dateRangesAreSequential', () => {
    it('Skal sjekke om datoer er etter hverandre', () => {
      const rangesMatch = [
        ['2018-04-01', '2018-05-01'],
        ['2018-04-01', '2018-05-01'],
      ];
      const ranges = [
        ['2018-04-01', '2018-05-01'],
        ['2018-05-02', '2018-05-31'],
      ];
      expect(dateRangesAreSequential(rangesMatch)).toBeFalsy();
      expect(dateRangesAreSequential(ranges)).toBeTruthy();
    });
  });
});
