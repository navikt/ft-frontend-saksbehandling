import { AktivitetStatus, FaktaOmBeregningTilfelle, Inntektskategori } from '@navikt/ft-kodeverk';
import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { FaktaOmBeregningAksjonspunktValues } from '../../../../typer/FaktaBeregningTypes';
import type { InntektTransformed } from '../../../../typer/FieldValues';
import { erNyoppstartetFLField, NyoppstartetFLForm } from './NyoppstartetFLForm';

const emptyValues = { erTilVurdering: true, periode: { fom: '2022-01-01', tom: '2022-02-01' } };

describe('<NyoppstartetFLForm>', () => {
  const faktaOmBeregning = {
    faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
    andelerForFaktaOmBeregning: [],
  };

  it('skal teste at transformValues gir korrekt output', () => {
    const values = {
      ...emptyValues,
      [erNyoppstartetFLField]: true,
    } as FaktaOmBeregningAksjonspunktValues;
    const transformedObject = NyoppstartetFLForm.transformValues(values, null, faktaOmBeregning, []);
    expect(transformedObject.vurderNyoppstartetFL?.erNyoppstartetFL).toBe(true);
  });

  const frilansAndelInntekt = {
    andelsnr: 1,
    fastsattBelop: 10000,
    inntektskategori: Inntektskategori.FRILANSER,
    nyAndel: false,
    lagtTilAvSaksbehandler: false,
    aktivitetStatus: AktivitetStatus.FRILANSER,
  };

  const arbeidstakerInntekt = {
    andelsnr: 2,
    fastsattBelop: 20000,
    inntektskategori: Inntektskategori.ARBEIDSTAKER,
    nyAndel: false,
    lagtTilAvSaksbehandler: false,
    aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
  };

  it('skal teste transform values med inntekter', () => {
    const values = {
      ...emptyValues,
      [erNyoppstartetFLField]: true,
    } as FaktaOmBeregningAksjonspunktValues;
    const inntekterPrMnd = [frilansAndelInntekt as InntektTransformed, arbeidstakerInntekt as InntektTransformed];
    const fastsatteAndeler: number[] = [];
    const transformedObject = NyoppstartetFLForm.transformValues(
      values,
      inntekterPrMnd,
      faktaOmBeregning,
      fastsatteAndeler,
    );
    expect(transformedObject.vurderNyoppstartetFL?.erNyoppstartetFL).toBe(true);
    expect(transformedObject.faktaOmBeregningTilfeller?.length).toBe(2);
    expect(transformedObject.faktaOmBeregningTilfeller?.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)).toBe(
      true,
    );
    expect(
      transformedObject.faktaOmBeregningTilfeller?.includes(FaktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL),
    ).toBe(true);
    expect(transformedObject.fastsettMaanedsinntektFL?.maanedsinntekt).toBe(10000);
    expect(fastsatteAndeler.length).toBe(1);
  });

  it('skal teste at buildInitialValues gir korrekt output med gyldig beregningsgrunnlag', () => {
    const gyldigBG = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              aktivitetStatus: AktivitetStatus.FRILANSER,
              erNyoppstartet: true,
            },
          ],
        },
      ],
    };
    const initialValues = NyoppstartetFLForm.buildInitialValues(gyldigBG as Beregningsgrunnlag);
    expect(initialValues[erNyoppstartetFLField]).toBe(true);
  });
});
