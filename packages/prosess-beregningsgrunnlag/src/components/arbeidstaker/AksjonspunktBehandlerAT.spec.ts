import type { BeregningsgrunnlagAndel } from '@navikt/ft-types';

import { AksjonspunktBehandlerAT } from './AksjonspunktBehandlerAT';
import { GrunnlagForAarsinntektPanelAT } from './GrunnlagForAarsinntektPanelAT';

const lagAndel = (andelsnr: number, overstyrtPrAar: number, skalFastsetteGrunnlag: boolean) =>
  ({
    andelsnr,
    aktivitetStatus: 'AT',
    overstyrtPrAar,
    skalFastsetteGrunnlag,
    erTilkommetAndel: false,
    lagtTilAvSaksbehandler: false,
  }) as BeregningsgrunnlagAndel;

describe('AksjonspunktBehandlerAT', () => {
  it('skal sende inn initialverdien til andelen som skal fastsettes når saksbehandler ikke endrer noe', () => {
    const andeler = [lagAndel(1, 111000, false), lagAndel(2, 222000, true)];

    const initialValues = GrunnlagForAarsinntektPanelAT.buildInitialValues(andeler);
    const resultat = AksjonspunktBehandlerAT.transformValues(initialValues, andeler);

    expect(resultat).toEqual([{ andelsnr: 2, inntekt: 222000 }]);
  });
});
