import { VurderInntektsforholdPeriode } from '@navikt/ft-types';
import {
  TilkommetInntektPeriodeTransformedValues,
  VurderNyttInntektsforholdAndelTransformedValues,
} from '../../types/interface/VurderNyttInntektsforholdAP';
import { splittSammenslåttePerioder } from './TilkommetAktivitetUtils';

const lagTransformedPeriode = (
  fom: string,
  tom: string,
  andeler: VurderNyttInntektsforholdAndelTransformedValues[],
): TilkommetInntektPeriodeTransformedValues => ({
  tilkomneInntektsforhold: andeler,
  fom,
  tom,
});

const lagAndel = (ident: string, status: string, beløp?: number): VurderNyttInntektsforholdAndelTransformedValues => ({
  aktivitetStatus: status,
  skalRedusereUtbetaling: !!beløp,
  arbeidsgiverId: ident,
  bruttoInntektPrÅr: beløp,
});

const lagInntektsperiode = (fom: string, tom: string): VurderInntektsforholdPeriode => ({
  fom,
  tom,
  inntektsforholdListe: [],
});

describe('<TilkommetAktivitetUtils>', () => {
  it('skal ikke gjøre videre splitt når perioder matcher', () => {
    const periodeFraField = lagTransformedPeriode('2022-11-01', '2022-11-15', [lagAndel('999999999', 'AT', 500000)]);
    const inntektsforholdPeriode = lagInntektsperiode('2022-11-01', '2022-11-15');
    const resultat = splittSammenslåttePerioder([periodeFraField], [inntektsforholdPeriode]);

    expect(resultat).toHaveLength(1);

    const p1 = resultat.find(p => p.fom === '2022-11-01');
    expect(p1?.tom).toEqual('2022-11-15');
    expect(p1?.tilkomneInntektsforhold).toEqual(periodeFraField.tilkomneInntektsforhold);
  });
  it('skal splitte når det er færre perioder i fields', () => {
    const periodeFraField = lagTransformedPeriode('2022-11-01', '2022-11-20', [lagAndel('999999999', 'AT', 500000)]);
    const inntektsforholdPeriode1 = lagInntektsperiode('2022-11-01', '2022-11-15');
    const inntektsforholdPeriode2 = lagInntektsperiode('2022-11-16', '2022-11-20');
    const resultat = splittSammenslåttePerioder([periodeFraField], [inntektsforholdPeriode1, inntektsforholdPeriode2]);

    expect(resultat).toHaveLength(2);

    const p1 = resultat.find(p => p.fom === '2022-11-01');
    expect(p1?.tom).toEqual('2022-11-15');
    expect(p1?.tilkomneInntektsforhold).toEqual(periodeFraField.tilkomneInntektsforhold);

    const p2 = resultat.find(p => p.fom === '2022-11-16');
    expect(p2?.tom).toEqual('2022-11-20');
    expect(p2?.tilkomneInntektsforhold).toEqual(periodeFraField.tilkomneInntektsforhold);
  });
  it('skal splitte når det er flere perioder i fields', () => {
    const periodeFraField1 = lagTransformedPeriode('2022-11-01', '2022-11-08', [lagAndel('999999999', 'AT')]);
    const periodeFraField2 = lagTransformedPeriode('2022-11-09', '2022-11-15', [lagAndel('999999999', 'AT', 500000)]);
    const periodeFraField3 = lagTransformedPeriode('2022-11-16', '2022-11-20', [lagAndel('999999999', 'AT', 600000)]);
    const inntektsforholdPeriode = lagInntektsperiode('2022-11-01', '2022-11-20');
    const resultat = splittSammenslåttePerioder(
      [periodeFraField1, periodeFraField2, periodeFraField3],
      [inntektsforholdPeriode],
    );

    expect(resultat).toHaveLength(3);

    const p1 = resultat.find(p => p.fom === '2022-11-01');
    expect(p1?.tom).toEqual('2022-11-08');
    expect(p1?.tilkomneInntektsforhold).toEqual(periodeFraField1.tilkomneInntektsforhold);

    const p2 = resultat.find(p => p.fom === '2022-11-09');
    expect(p2?.tom).toEqual('2022-11-15');
    expect(p2?.tilkomneInntektsforhold).toEqual(periodeFraField2.tilkomneInntektsforhold);

    const p3 = resultat.find(p => p.fom === '2022-11-16');
    expect(p3?.tom).toEqual('2022-11-20');
    expect(p3?.tilkomneInntektsforhold).toEqual(periodeFraField3.tilkomneInntektsforhold);
  });
  it('skal splitte når det er splitter i fields som ikke matcher splitter i inntektsforhold', () => {
    const periodeFraField1 = lagTransformedPeriode('2022-11-01', '2022-11-08', [lagAndel('999999999', 'AT')]);
    const periodeFraField2 = lagTransformedPeriode('2022-11-09', '2022-11-15', [lagAndel('999999999', 'AT', 500000)]);
    const periodeFraField3 = lagTransformedPeriode('2022-11-16', '2022-11-20', [lagAndel('999999999', 'AT', 600000)]);
    const inntektsforholdPeriode1 = lagInntektsperiode('2022-11-01', '2022-11-10');
    const inntektsforholdPeriode2 = lagInntektsperiode('2022-11-11', '2022-11-18');
    const inntektsforholdPeriode3 = lagInntektsperiode('2022-11-19', '2022-11-20');
    const resultat = splittSammenslåttePerioder(
      [periodeFraField1, periodeFraField2, periodeFraField3],
      [inntektsforholdPeriode1, inntektsforholdPeriode2, inntektsforholdPeriode3],
    );

    expect(resultat).toHaveLength(5);

    const p1 = resultat.find(p => p.fom === '2022-11-01');
    expect(p1?.tom).toEqual('2022-11-08');
    expect(p1?.tilkomneInntektsforhold).toEqual(periodeFraField1.tilkomneInntektsforhold);

    const p2 = resultat.find(p => p.fom === '2022-11-09');
    expect(p2?.tom).toEqual('2022-11-10');
    expect(p2?.tilkomneInntektsforhold).toEqual(periodeFraField2.tilkomneInntektsforhold);

    const p3 = resultat.find(p => p.fom === '2022-11-11');
    expect(p3?.tom).toEqual('2022-11-15');
    expect(p3?.tilkomneInntektsforhold).toEqual(periodeFraField2.tilkomneInntektsforhold);

    const p4 = resultat.find(p => p.fom === '2022-11-16');
    expect(p4?.tom).toEqual('2022-11-18');
    expect(p4?.tilkomneInntektsforhold).toEqual(periodeFraField3.tilkomneInntektsforhold);

    const p5 = resultat.find(p => p.fom === '2022-11-19');
    expect(p5?.tom).toEqual('2022-11-20');
    expect(p5?.tilkomneInntektsforhold).toEqual(periodeFraField3.tilkomneInntektsforhold);
  });

  it('skal splitte når sluttdato i inntektsforhold overlapper start i field', () => {
    const periodeFraField1 = lagTransformedPeriode('2022-11-01', '2022-11-08', [lagAndel('999999999', 'AT')]);
    const periodeFraField2 = lagTransformedPeriode('2022-11-09', '2022-11-20', [lagAndel('999999999', 'AT', 500000)]);
    const inntektsforholdPeriode1 = lagInntektsperiode('2022-11-01', '2022-11-07');
    const inntektsforholdPeriode2 = lagInntektsperiode('2022-11-08', '2022-11-20');
    const resultat = splittSammenslåttePerioder(
      [periodeFraField1, periodeFraField2],
      [inntektsforholdPeriode1, inntektsforholdPeriode2],
    );

    expect(resultat).toHaveLength(3);

    const p1 = resultat.find(p => p.fom === '2022-11-01');
    expect(p1?.tom).toEqual('2022-11-07');
    expect(p1?.tilkomneInntektsforhold).toEqual(periodeFraField1.tilkomneInntektsforhold);

    const p2 = resultat.find(p => p.fom === '2022-11-08');
    expect(p2?.tom).toEqual('2022-11-08');
    expect(p2?.tilkomneInntektsforhold).toEqual(periodeFraField1.tilkomneInntektsforhold);

    const p3 = resultat.find(p => p.fom === '2022-11-09');
    expect(p3?.tom).toEqual('2022-11-20');
    expect(p3?.tilkomneInntektsforhold).toEqual(periodeFraField2.tilkomneInntektsforhold);
  });
});
