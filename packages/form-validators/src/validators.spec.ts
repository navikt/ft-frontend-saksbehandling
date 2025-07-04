import dayjs from 'dayjs';
import { expect } from 'vitest';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import {
  dateAfterOrEqual,
  dateAfterOrEqualToToday,
  dateBeforeOrEqual,
  dateBeforeOrEqualToToday,
  dateBeforeToday,
  dateRangesNotOverlapping,
  harSammeFodselsnummerSomSoker,
  hasValidDate,
  hasValidDecimal,
  hasValidFodselsnummer,
  hasValidFodselsnummerFormat,
  hasValidInteger,
  hasValidName,
  hasValidPeriod,
  hasValidSaksnummerOrFodselsnummerFormat,
  hasValidText,
  isWithinOpptjeningsperiode,
  maxLength,
  maxValue,
  minLength,
  minValue,
  required,
  requiredIfCustomFunctionIsTrue,
} from './validators';
import { today } from './validatorsHelper';

const todayAsISO = today().format(ISO_DATE_FORMAT);
const farFutureDate = dayjs().add(200, 'years').format(ISO_DATE_FORMAT);
const farPastDate = dayjs().subtract(200, 'years').format(ISO_DATE_FORMAT);

describe('Validators', () => {
  describe('required', () => {
    it('skal gi feilmelding når verdi er lik null', () => {
      const result = required(null as unknown as string);
      expect(result).toEqual('Feltet må fylles ut');
    });

    it('skal gi feilmelding når verdi er lik undefined', () => {
      const result = required(undefined as unknown as string);
      expect(result).toEqual('Feltet må fylles ut');
    });

    it('skal ikke gi feilmelding når verdi er ulik null og undefined', () => {
      const result = required('test');
      expect(result).toBeUndefined();
    });
  });

  describe('requiredIfCustomFunctionIsTrue', () => {
    const isRequiredFunc = (_allValues: unknown, props: { pristine: boolean }) => !props.pristine;

    it('skal ikke gi feilmelding når ingen formverdier er endret', () => {
      const result = requiredIfCustomFunctionIsTrue(isRequiredFunc)(null, null, { pristine: true });
      expect(result).toBeUndefined();
    });

    it('skal gi feilmelding når formverdier er endret og verdi er null', () => {
      const result = requiredIfCustomFunctionIsTrue(isRequiredFunc)(null, null, { pristine: false });
      expect(result).toEqual('Feltet må fylles ut');
    });

    it('skal gi feilmelding når formverdier er endret og verdi er undefined', () => {
      const result = requiredIfCustomFunctionIsTrue(isRequiredFunc)(undefined, null, { pristine: false });
      expect(result).toEqual('Feltet må fylles ut');
    });

    it('skal ikke gi feilmelding når formverdier er endret men verdi er ulik null og undefined', () => {
      const result = requiredIfCustomFunctionIsTrue(isRequiredFunc)('test', null, { pristine: false });
      expect(result).toBeUndefined();
    });
  });

  describe('minLength', () => {
    it('skal feile når verdi er mindre enn minimum lengde', () => {
      const minLength2 = minLength(2);
      const result = minLength2('e');
      expect(result).toEqual('Du må skrive minst 2 tegn');
    });

    it('skal ikke feile når verdi er større eller lik minimum lengde', () => {
      const minLength2 = minLength(2);
      const result = minLength2('er');
      expect(result).toBeNull();
    });
  });

  describe('maxLength', () => {
    it('skal feile når verdi er større enn maksimum lengde', () => {
      const maxLength2 = maxLength(2);
      const result = maxLength2('ert');
      expect(result).toEqual('Du kan skrive maksimalt 2 tegn');
    });

    it('skal ikke feile når verdi er mindre eller lik minimum lengde', () => {
      const maxLength2 = maxLength(2);
      const result = maxLength2('er');
      expect(result).toBeNull();
    });
  });

  describe('minValue', () => {
    it('skal feile når verdi er mindre enn 2', () => {
      const minValue2 = minValue(2);
      const result = minValue2(1);
      expect(result).toEqual('Feltet må være større eller lik 2');
    });

    it('skal ikke feile når verdi er større eller lik 2', () => {
      const minValue2 = minValue(2);
      const result = minValue2(2);
      expect(result).toBeNull();
    });
  });

  describe('maxValue', () => {
    it('skal feile når verdi er større enn 2', () => {
      const maxValue2 = maxValue(2);
      const result = maxValue2(3);
      expect(result).toEqual('Feltet må være mindre eller lik 2');
    });

    it('skal ikke feile når verdi er mindre eller lik 2', () => {
      const maxValue2 = maxValue(2);
      const result = maxValue2(2);
      expect(result).toBeNull();
    });
  });

  describe('hasValidInteger', () => {
    it('skal ikke feile når tallet er et heltall', () => {
      const result = hasValidInteger(2);
      expect(result).toBeNull();
    });

    it('skal feile når tallet er et desimaltall', () => {
      const result = hasValidInteger(2.2);
      expect(result).toEqual('Tallet kan ikke ha desimaler');
    });

    it('skal feile når input ikke er et gyldig tall', () => {
      const result = hasValidInteger('test');
      expect(result).toEqual('Feltet kan kun inneholde tall');
    });
  });

  describe('hasValidDecimal', () => {
    it('skal ikke feile når tallet er et desimaltall', () => {
      const result = hasValidDecimal(2.11);
      expect(result).toBeNull();
    });

    it('skal feile når tallet har mer enn to desimaler', () => {
      const result = hasValidDecimal(2.233);
      expect(result).toEqual('Tallet kan ikke inneholde mer enn to desimaler');
    });

    it('skal feile når input ikke er et gyldig tall', () => {
      const result = hasValidDecimal('test');
      expect(result).toEqual('Feltet kan kun inneholde tall');
    });
  });

  describe('hasValidDate', () => {
    it('skal feile når dag i dato er utenfor lovlig område', () => {
      const result = hasValidDate('2017-10-40');
      expect(result).toEqual('Dato må skrives slik: dd.mm.åååå');
    });

    it('skal feile når måned i dato er utenfor lovlig område', () => {
      const result = hasValidDate('2017-13-20');
      expect(result).toEqual('Dato må skrives slik: dd.mm.åååå');
    });

    it('skal feile når dato er på feil format', () => {
      const result = hasValidDate('10.10.2017');
      expect(result).toEqual('Dato må skrives slik: dd.mm.åååå');
    });

    it('skal ikke feile når dato er korrekt', () => {
      const result = hasValidDate('2017-12-10');
      expect(result).toBeNull();
    });

    it('skal ikke feile når dato er tom', () => {
      const result = hasValidDate();
      expect(result).toBeNull();
    });
  });

  describe('dateBeforeOrEqual', () => {
    it.each([
      ['datostring', farPastDate],
      ['dato', dayjs(farPastDate)],
      ['timestamp', `${farPastDate}T10:00:00.000Z`],
    ])('skal godta %s som er før spesifisert dato', (_name, dato) => {
      const result = dateBeforeOrEqual(today())(dato);
      expect(result).toBeNull();
    });

    it('skal godta samme dag med ulike tidspunkt', () => {
      const result = dateBeforeOrEqual(dayjs().startOf('day'))(today().endOf('day'));
      expect(result).toBeNull();
    });

    it.each([
      ['datostring', farPastDate],
      ['dato', dayjs(farPastDate)],
      ['timestamp', `${farPastDate}T10:00:00.000Z`],
    ])('skal godta identisk %s', (_name, dato) => {
      const result = dateBeforeOrEqual(dato)(dato);
      expect(result).toBeNull();
    });

    it.each([
      ['datostring', farFutureDate],
      ['dato', dayjs(farFutureDate)],
      ['timestamp', `${farFutureDate}T10:00:00.000Z`],
    ])('skal feile for %s som er etter spesifisert dato', (_name, dato) => {
      const result = dateBeforeOrEqual(today())(dato);
      expect(result).toEqual(`Dato må være før eller lik ${today().format(DDMMYYYY_DATE_FORMAT)}`);
    });

    it('skal ikke feile når dato er tom', () => {
      expect(dateBeforeOrEqual(today())('')).toBeNull();
      expect(dateBeforeOrEqual(today())(undefined)).toBeNull();
    });
  });

  describe('dateAfterOrEqual', () => {
    it.each([
      ['datostring', farFutureDate],
      ['dato', dayjs(farFutureDate)],
      ['timestamp', `${farFutureDate}T10:00:00.000Z`],
    ])('skal godta  %s som er etter spesifisert dato', (_name, dato) => {
      const result = dateAfterOrEqual(today())(dato);
      expect(result).toBeNull();
    });

    it('skal godta samme dag med ulikt tidspunkt', () => {
      const startOfDay = dayjs().startOf('day');
      const endOfDay = dayjs().endOf('day');
      expect(dateAfterOrEqual(endOfDay)(startOfDay)).toBeNull();
      expect(dateAfterOrEqual(startOfDay)(endOfDay)).toBeNull();
    });

    it.each([
      ['datostring', farPastDate],
      ['dato', dayjs(farPastDate)],
      ['timestamp', `${farPastDate}T10:00:00.000Z`],
    ])('skal feile %s som er før spesifisert dato', (_name, dato) => {
      const result = dateAfterOrEqual(today())(dato);
      expect(result).toEqual(`Dato må være etter eller lik ${today().format(DDMMYYYY_DATE_FORMAT)}`);
    });

    it('skal ikke feile når dato er tom', () => {
      expect(dateAfterOrEqual(today())('')).toBeNull();
      expect(dateAfterOrEqual(today())(undefined)).toBeNull();
    });
  });

  describe('dateRangesNotOverlapping', () => {
    it('skal feile når perioder overlapper', () => {
      const periods = [
        ['2017-10-10', '2017-12-10'],
        ['2017-01-10', '2017-10-11'],
      ];
      const result = dateRangesNotOverlapping(periods);
      expect(result).toEqual('Perioder kan ikke overlappe i tid');
    });

    it('skal ikke feile når perioder ikke overlapper', () => {
      const periods = [
        ['2017-10-10', '2017-12-10'],
        ['2017-01-10', '2017-10-09'],
      ];
      const result = dateRangesNotOverlapping(periods);
      expect(result).toBeNull();
    });
  });

  describe('dateBeforeToday', () => {
    it('skal ikke feile når dato er før dagens dato', () => {
      const result = dateBeforeToday(farPastDate);
      expect(result).toBeNull();
    });

    it('skal feile når dato er lik dagens dato', () => {
      const result = dateBeforeToday(todayAsISO);
      expect(result).toEqual(`Dato må være før eller lik ${dayjs().subtract(1, 'days').format(DDMMYYYY_DATE_FORMAT)}`);
    });

    it('skal ikke feile når dato er tom', () => {
      expect(dateBeforeToday('')).toBeNull();
      expect(dateBeforeToday(undefined)).toBeNull();
    });
  });

  describe('dateBeforeOrEqualToToday', () => {
    it('skal ikke feile når dato er før dagens dato', () => {
      const result = dateBeforeOrEqualToToday(farPastDate);
      expect(result).toBeNull();
    });

    it('skal ikke feile når dato er lik dagens dato', () => {
      const result = dateBeforeOrEqualToToday(todayAsISO);
      expect(result).toBeNull();
    });

    it('skal feile når dato er etter dagens dato', () => {
      const result = dateBeforeOrEqualToToday(farFutureDate);
      expect(result).toEqual(`Dato må være før eller lik ${dayjs().format(DDMMYYYY_DATE_FORMAT)}`);
    });

    it('skal ikke feile når dato er tom', () => {
      expect(dateBeforeOrEqualToToday('')).toBeNull();
      expect(dateBeforeOrEqualToToday(undefined)).toBeNull();
    });
  });

  describe('dateAfterOrEqualToToday', () => {
    it('skal ikke feile når dato etter eller lik i dag', () => {
      const result = dateAfterOrEqualToToday(todayAsISO);
      expect(result).toBeNull();
    });

    it('skal feile når dato er historisk', () => {
      const result = dateAfterOrEqualToToday(farPastDate);
      expect(result).toEqual(`Dato må være etter eller lik ${dayjs().format(DDMMYYYY_DATE_FORMAT)}`);
    });

    it('skal ikke feile når dato er tom', () => {
      expect(dateAfterOrEqualToToday('')).toBeNull();
      expect(dateAfterOrEqualToToday(undefined)).toBeNull();
    });
  });

  describe('hasValidFodselsnummerFormat', () => {
    it('skal ikke feile fødselsnummer-formatet er gyldig', () => {
      const result = hasValidFodselsnummerFormat('05018512123');
      expect(result).toBeNull();
    });

    it('skal feile når fødselsnummer-formatet er ugyldig', () => {
      const result = hasValidFodselsnummerFormat('0501851212');
      expect(result).toEqual('Feltet må være et fødselsnummer (11 siffer)');
    });
  });

  describe('hasValidFodselsnummer', () => {
    it('skal ikke feile når fødselsnummer er gyldig', () => {
      const result = hasValidFodselsnummer('22121588017');
      expect(result).toBeNull();
    });

    it('skal feile når fødselsnummer er ugyldig', () => {
      const result = hasValidFodselsnummer('0501851212');
      expect(result).toEqual('Ugyldig fødselsnummer');
    });
  });

  describe('harSammeFodselsnummerSomSoker', () => {
    it('skal godta fødselsnummer som er ulikt sokers', () => {
      const result = harSammeFodselsnummerSomSoker('12121200000')('11223344444');
      expect(result).toBeNull();
    });

    it('skal feile når fødselsnummer er samme som soker', () => {
      const result = harSammeFodselsnummerSomSoker('12121200000')('12121200000');
      expect(result).toEqual('Fødselsnummer til den andre forelderen kan ikke være det samme som søker');
    });
  });

  describe('hasValidText', () => {
    it('skal ikke feile når tekst ikke har ugyldig tegn', () => {
      const result = hasValidText(
        'Hei hei\n' + 'Áá Čč Đđ Ŋŋ Šš Ŧŧ Žž Ää Ææ Øø Åå\n' + 'Lorem + ipsum_dolor, - (sit) amet?! 100%: §2&3="I\'m";',
      );
      expect(result).toBeNull();
    });

    it('skal feile når fødselsnummer har ugyldige tegn', () => {
      const result = hasValidText('Hei \u0000 \u0001');
      expect(result).toEqual('Feltet inneholder ugyldige tegn: \u0000\u0001');
    });
  });

  describe('hasValidName', () => {
    it('skal ikke feile når navn ikke har ugyldig tegn', () => {
      const result = hasValidName('Navn navn' + 'Áá Čč Đđ Ŋŋ Šš Ŧŧ Žž Ää Ææ Øø Åå' + " - . ' ");
      expect(result).toBeNull();
    });

    it('skal feile når navn har ugyldige tegn', () => {
      const result = hasValidName('Navn _*');
      expect(result).toEqual('Feltet inneholder ugyldige tegn: _*');
    });
  });

  describe('hasValidSaksnummerOrFodselsnummerFormat', () => {
    it('skal ikke feile når saksnummer eller fødselsnummer har gyldig pattern', () => {
      const result = hasValidSaksnummerOrFodselsnummerFormat('22121588017');
      expect(result).toBeNull();
    });

    it('skal feile når saksnummer eller fødselsnummer har ugyldig pattern', () => {
      const result = hasValidSaksnummerOrFodselsnummerFormat('0501851212-d');
      expect(result).toEqual('Ugyldig saksnummer eller fødselsnummer');
    });
  });

  describe('hasValidPeriod', () => {
    it('skal ikke feile når både fomDato og tomDato er tomme', () => {
      expect(hasValidPeriod('', '')).toBeNull();
    });

    it('skal feile når fomDato er på feil format', () => {
      const result = hasValidPeriod('2017-06-0', '2017-06-01');
      expect(result).toEqual('Periode må skrives slik: dd.mm.åååå - dd.mm.åååå');
    });

    it('skal feile når tomDato er på feil format', () => {
      const result = hasValidPeriod('2017-06-01', '2017-06-0');
      expect(result).toEqual('Periode må skrives slik: dd.mm.åååå - dd.mm.åååå');
    });

    it('skal ikke feile når fomDato er før tomDato', () => {
      expect(hasValidPeriod('2017-05-01', '2017-06-01')).toBeNull();
    });

    it('skal ikke feile når fomDato er lik tomDato', () => {
      expect(hasValidPeriod('2017-06-01', '2017-06-01')).toBeNull();
    });

    it('skal feile når fomDato er etter tomDato', () => {
      const result = hasValidPeriod('2017-06-01', '2017-05-01');
      expect(result).toEqual('Startdato må være før eller lik sluttdato');
    });
  });

  describe('isWithinOpptjeningsperiode', () => {
    const opptjeningFom = '2017-01-01';
    const opptjeningTom = '2017-05-01';

    it('skal ikke feile når periode er innenfor opptjeningsperiode', () => {
      expect(isWithinOpptjeningsperiode(opptjeningFom, opptjeningTom)('2017-02-01', '2017-03-01')).toBeNull();
      expect(isWithinOpptjeningsperiode(opptjeningFom, opptjeningTom)('2017-01-01', '2017-05-01')).toBeNull();
    });

    it('skal feile når fom-dato er utenfor opptjeningsperiode', () => {
      const result = isWithinOpptjeningsperiode(opptjeningFom, opptjeningTom)('2016-02-01', '2017-03-01');
      expect(result).toEqual('Periode er utenfor opptjeningsperioden');
    });

    it('skal feile når tom-dato er utenfor opptjeningsperiode', () => {
      const result = isWithinOpptjeningsperiode(opptjeningFom, opptjeningTom)('2017-02-01', '2018-03-01');
      expect(result).toEqual('Periode er utenfor opptjeningsperioden');
    });
  });
});
