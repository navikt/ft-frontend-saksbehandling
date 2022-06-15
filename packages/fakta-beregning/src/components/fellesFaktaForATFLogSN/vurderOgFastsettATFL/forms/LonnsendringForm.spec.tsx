import React from 'react';
import { shallow } from 'enzyme';
import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import LonnsendringForm, { lonnsendringField } from './LonnsendringForm';

describe('<LonnsendringForm>', () => {
  it.skip('skal teste at korrekt antall radioknapper vises med korrekte props', () => {
    const wrapper = shallow(<LonnsendringForm readOnly={false} />);
    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);
    expect(radios.last().prop('disabled')).toEqual(false);
  });

  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_LONNSENDRING],
    arbeidsforholdMedLønnsendringUtenIM: [{ andelsnr: 1 }],
    andelerForFaktaOmBeregning: [],
  };

  it('skal teste at transformValues gir korrekt output', () => {
    const values = {};
    values[lonnsendringField] = true;
    const transformedObject = LonnsendringForm.transformValues(values, faktaOmBeregning);
    expect(transformedObject.vurdertLonnsendring.erLønnsendringIBeregningsperioden).toBe(true);
  });

  it('skal ikkje submitte inntekt uten lønnsendring', () => {
    const values = {};
    values[lonnsendringField] = false;
    const transformedObject = LonnsendringForm.transformValues(values, faktaOmBeregning);
    expect(transformedObject.vurdertLonnsendring.erLønnsendringIBeregningsperioden).toBe(false);
  });

  it('skal teste at buildInitialValues gir korrekt output med gyldig beregningsgrunnlag', () => {
    const gyldigBG = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
              lonnsendringIBeregningsperioden: true,
            },
          ],
        },
      ],
    };
    const initialValues = LonnsendringForm.buildInitialValues(gyldigBG as Beregningsgrunnlag);
    expect(initialValues[lonnsendringField]).toBe(true);
  });
});
