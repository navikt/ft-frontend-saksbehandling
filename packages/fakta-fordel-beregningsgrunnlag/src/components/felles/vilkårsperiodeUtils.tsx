import { Vilkårperiode } from '@navikt/ft-types';

export function finnVilkårsperiode(vilkårsperioder: Vilkårperiode[], vilkårsperiodeFom: string): Vilkårperiode {
  const periode = vilkårsperioder.find(p => p.periode.fom === vilkårsperiodeFom);
  if (!periode) {
    throw Error(`Mangler vilkårsperiode for vilkårsperiodeFom ${vilkårsperiodeFom}`);
  }
  return periode;
}

export function vurderesIBehandlingen(vilkårsperioder: Vilkårperiode[], vilkårsperiodeFom: string) {
  return finnVilkårsperiode(vilkårsperioder, vilkårsperiodeFom).vurderesIBehandlingen;
}
