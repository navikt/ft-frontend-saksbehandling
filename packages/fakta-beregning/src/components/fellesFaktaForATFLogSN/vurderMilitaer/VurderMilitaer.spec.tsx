import type { FaktaOmBeregning } from '@navikt/ft-types';

import type { FaktaOmBeregningAksjonspunktValues } from '../../../typer/FaktaBeregningTypes';
import { VurderMilitaer, vurderMilitaerField } from './VurderMilitaer';

const mockBGMedStatus = (mili: boolean) => ({
  vurderMilitaer: {
    harMilitaer: mili,
  },
});

describe('VurderMilitaer', () => {
  it('Skal teste at buildInitialvalues bygges korrekt når vi ikke har satt verdi i fakta om beregning', () => {
    const faktaBg = {
      vurderMilitaer: undefined,
    };
    const acutalValues = VurderMilitaer.buildInitialValues(faktaBg as FaktaOmBeregning);
    expect(acutalValues).toEqual({});
  });

  it('Skal teste at buildInitialvalues bygges korrekt når militær er satt til true', () => {
    const values = VurderMilitaer.buildInitialValues(mockBGMedStatus(true) as FaktaOmBeregning);
    const testobj = {
      [vurderMilitaerField]: true,
    };
    expect(values).toEqual(testobj);
  });

  it('Skal teste at buildInitialvalues bygges korrekt når aksjonspunktet er løst og militær er satt til false', () => {
    const values = VurderMilitaer.buildInitialValues(mockBGMedStatus(false) as FaktaOmBeregning);
    const testobj = {
      [vurderMilitaerField]: false,
    };
    expect(values).toEqual(testobj);
  });

  it('Skal teste at transformValues bygger korrekt objekt gitt at vurderMilitaerField er true', () => {
    const values = {
      vurderMilitær: true,
    } as FaktaOmBeregningAksjonspunktValues;
    const transformedValues = VurderMilitaer.transformValues(values);
    const expectedValues = {
      vurderMilitaer: {
        harMilitaer: true,
      },
    };
    expect(transformedValues).toEqual(expectedValues);
  });

  it('Skal teste at transformValues bygger korrekt objekt gitt at vurderMilitaerField er false', () => {
    const values = {
      vurderMilitær: false,
    } as FaktaOmBeregningAksjonspunktValues;
    const transformedValues = VurderMilitaer.transformValues(values);
    const expectedValues = {
      vurderMilitaer: {
        harMilitaer: false,
      },
    };
    expect(transformedValues).toEqual(expectedValues);
  });
});
