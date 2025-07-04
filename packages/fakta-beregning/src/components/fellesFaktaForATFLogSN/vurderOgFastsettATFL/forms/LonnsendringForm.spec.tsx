import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { FaktaOmBeregningAksjonspunktValues } from '../../../../typer/FaktaBeregningTypes';
import { LonnsendringForm } from './LonnsendringForm';
import { lonnsendringField } from './lonnsendringFormUtils';

describe('<LonnsendringForm>', () => {
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_LONNSENDRING],
    arbeidsforholdMedLønnsendringUtenIM: [{ andelsnr: 1, aktivitetStatus: AktivitetStatus.ARBEIDSTAKER }],
    andelerForFaktaOmBeregning: [],
  };

  it('skal teste at transformValues gir korrekt output', () => {
    const values = {
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
      [lonnsendringField]: true,
    } as FaktaOmBeregningAksjonspunktValues;
    const transformedObject = LonnsendringForm.transformValues(values, faktaOmBeregning);
    expect(transformedObject.vurdertLonnsendring?.erLønnsendringIBeregningsperioden).toBe(true);
  });

  it('skal ikkje submitte inntekt uten lønnsendring', () => {
    const values = {
      erTilVurdering: true,
      periode: { fom: '2022-01-01', tom: '2022-02-01' },
      [lonnsendringField]: false,
    } as FaktaOmBeregningAksjonspunktValues;
    const transformedObject = LonnsendringForm.transformValues(values, faktaOmBeregning);
    expect(transformedObject.vurdertLonnsendring?.erLønnsendringIBeregningsperioden).toBe(false);
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
