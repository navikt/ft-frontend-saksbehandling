import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { Vilkår } from '../types/Vilkår';

export const erBGTilVurdering = (beregningsgrunnlag: Beregningsgrunnlag, bgVilkar: Vilkår | null) => {
  const vilårsperiodeFom = beregningsgrunnlag.vilkårsperiodeFom;
  const perioderTilVurdering = bgVilkar?.perioder
    ? bgVilkar.perioder.filter(periode => periode.vurderesIBehandlingen && !periode.erForlengelse)
    : [];
  return perioderTilVurdering.some(vkp => vkp.periode.fom === vilårsperiodeFom);
};
