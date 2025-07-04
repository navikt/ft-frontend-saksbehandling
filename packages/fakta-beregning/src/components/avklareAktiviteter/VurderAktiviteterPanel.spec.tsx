import type { AvklarBeregningAktiviteter, BeregningAktivitet } from '@navikt/ft-types';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import type { AvklarAktiviteterValues } from '../../typer/AvklarAktivitetTypes';
import { VurderAktiviteterPanel } from './VurderAktiviteterPanel';
import { finnPlasseringIListe, leggTilAktivitet } from './vurderAktiviteterPanelUtils';
import { lagAktivitetFieldId } from './vurderAktiviteterTabellUtils';

const aktivitet1 = {
  arbeidsgiverIdent: '384723894723',
  fom: '2019-01-01',
  tom: TIDENES_ENDE,
  skalBrukes: undefined,
  arbeidsforholdType: 'ARBEID',
};

const aktivitet2 = {
  arbeidsgiverIdent: '334534623342',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: true,
  arbeidsforholdType: 'ARBEID',
};

const aktivitet3 = {
  arbeidsgiverIdent: '324234234234',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: false,
  arbeidsforholdType: 'ARBEID',
};

const aktivitetAAP = {
  arbeidsforholdType: 'AAP',
  fom: '2019-01-01',
  tom: '2020-02-02',
  skalBrukes: undefined,
};

const aktiviteter: BeregningAktivitet[] = [aktivitet1, aktivitet2, aktivitet3, aktivitetAAP];

const id1: string = '3847238947232019-01-01';
const id2: string = '334534623342efj8343f34f2019-01-01';
const id3: string = '324234234234efj8343f34f2019-01-01';
const idAAP: string = 'AAP2019-01-01';

describe('<VurderAktiviteterPanel>', () => {
  it('skal returnere true om ingen aktiviteter skal brukes og det ikkje finnes fleire aktiviteter i opptjeningsperioden', () => {
    const aktiviteterTomDatoMapping = [{ tom: '2019-02-02', aktiviteter }];
    const values = {
      avklarAktiviteter: {
        aktiviteterTomDatoMapping,
        skjæringstidspunkt: '2019-02-02',
      },
      aktiviteterValues: {
        [id1]: { skalBrukes: 'false' },
        [id2]: { skalBrukes: 'false' },
        [id3]: { skalBrukes: 'false' },
        [idAAP]: { skalBrukes: 'false' },
      },
    } as AvklarAktiviteterValues;
    const harIngenAktiviteter = VurderAktiviteterPanel.harIngenAktiviteter(values, aktiviteterTomDatoMapping, false);
    expect(harIngenAktiviteter).toBe(true);
  });

  it('skal returnere false om ingen aktiviteter skal brukes og det finnes fleire aktiviteter i opptjeningsperioden', () => {
    const aktivitet1STP2 = {
      arbeidsgiverIdent: '384723894723',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: undefined,
      arbeidsforholdType: 'ARBEID',
    };
    const aktivitet2STP2 = {
      arbeidsgiverIdent: '334534623342',
      arbeidsforholdId: 'efj8343f34f',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: true,
      arbeidsforholdType: 'ARBEID',
    };

    const aktiviteterTomDatoMapping = [
      { tom: '2019-02-02', aktiviteter: [aktivitet3, aktivitetAAP] },
      { tom: '2019-01-02', aktiviteter: [aktivitet1STP2, aktivitet2STP2] },
    ];
    const values = {
      avklarAktiviteter: {
        aktiviteterTomDatoMapping,
        skjæringstidspunkt: '2019-02-02',
      },
      aktiviteterValues: {
        [id1]: { skalBrukes: 'true', tom: aktivitet1STP2.tom },
        [id2]: { skalBrukes: 'false', tom: aktivitet2STP2.tom },
        [id3]: { skalBrukes: 'false', tom: aktivitet3.tom },
        [idAAP]: { skalBrukes: 'false', tom: aktivitetAAP.tom },
      },
    } as AvklarAktiviteterValues;
    const harIngenAktiviteter = VurderAktiviteterPanel.harIngenAktiviteter(values, aktiviteterTomDatoMapping, false);
    expect(harIngenAktiviteter).toBe(false);
  });

  it('skal returnere true om ingen aktiviteter er valgt i stp nr 2', () => {
    const aktivitetStp2 = {
      arbeidsgiverIdent: '384723894723',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: undefined,
      arbeidsforholdType: 'ARBEID',
    };
    const aktivitetStp3 = {
      aktørIdString: '324234234234',
      arbeidsgiverIdent: '1960-01-01',
      arbeidsforholdId: 'efj8343f34f',
      fom: '2018-01-01',
      tom: '2018-12-31',
      skalBrukes: false,
      arbeidsforholdType: 'ARBEID',
    };
    const aktiviteterTomDatoMapping = [
      { tom: '2019-02-02', aktiviteter: [aktivitet3, aktivitetAAP] },
      { tom: '2019-01-02', aktiviteter: [aktivitetStp2] },
      { tom: '2019-01-01', aktiviteter: [aktivitetStp3] },
    ];
    const values = {
      avklarAktiviteter: {
        aktiviteterTomDatoMapping,
        skjæringstidspunkt: '2019-02-02',
      },
      aktiviteterValues: {
        [lagAktivitetFieldId(aktivitetStp2)]: { skalBrukes: 'false', tom: aktivitetStp2.tom },
        [lagAktivitetFieldId(aktivitetStp3)]: { skalBrukes: null, tom: aktivitetStp3.tom },
        [id3]: { skalBrukes: 'false', tom: aktivitet3.tom },
        [idAAP]: { skalBrukes: 'false', tom: aktivitetAAP.tom },
      },
    } as AvklarAktiviteterValues;
    const harIngenAktiviteter = VurderAktiviteterPanel.harIngenAktiviteter(values, aktiviteterTomDatoMapping, false);
    expect(harIngenAktiviteter).toBe(true);
  });

  it('skal kunne legge til aktivitet i tom mapping', () => {
    const aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[] = [];
    leggTilAktivitet(aktiviteterTomDatoMapping, aktivitet1, '2020-02-08');
    expect(aktiviteterTomDatoMapping.length).toBe(1);
    expect(aktiviteterTomDatoMapping[0].aktiviteter?.length).toBe(1);
  });

  it('skal kunne legge til aktivitet i mapping med eksisterende dato som er ulik gitt dato', () => {
    const aktiviteterTomDatoMapping = [{ tom: '2018-02-02', aktiviteter: [aktivitet2] }];
    leggTilAktivitet(aktiviteterTomDatoMapping, aktivitet1, '2019-02-08');
    leggTilAktivitet(aktiviteterTomDatoMapping, aktivitet1, '2017-02-08');
    expect(aktiviteterTomDatoMapping.length).toBe(3);
    expect(aktiviteterTomDatoMapping[0].aktiviteter.length).toBe(1);
    expect(aktiviteterTomDatoMapping[1].aktiviteter.length).toBe(1);
    expect(aktiviteterTomDatoMapping[2].aktiviteter.length).toBe(1);
    expect(aktiviteterTomDatoMapping[0].tom).toBe('2019-02-08');
    expect(aktiviteterTomDatoMapping[1].tom).toBe('2018-02-02');
    expect(aktiviteterTomDatoMapping[2].tom).toBe('2017-02-08');
  });

  it('skal finne ny index i tom liste', () => {
    const dato = '2019-02-08';
    const liste: AvklarBeregningAktiviteter[] = [];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).toBe(0);
  });

  it('skal finne ny index i liste med 1 element som ligger før', () => {
    const dato = '2019-02-08';
    const liste = [{ tom: '2019-02-09' }];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).toBe(1);
  });

  it('skal finne ny index i liste med 1 element som ligger etter', () => {
    const dato = '2019-02-08';
    const liste = [{ tom: '2019-02-07' }];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).toBe(0);
  });

  it('skal finne ny index i liste med 2 elementer der ny index er mellom', () => {
    const dato = '2019-02-08';
    const liste = [{ tom: '2019-02-09' }, { tom: '2019-02-07' }];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).toBe(1);
  });
});
