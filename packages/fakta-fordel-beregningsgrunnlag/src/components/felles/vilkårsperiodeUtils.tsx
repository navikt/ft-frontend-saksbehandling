import { Vilkarperiode } from '@navikt/ft-types';

export function finnVilkårsperiode(vilkårsperioder: Vilkarperiode[], vilkårsperiodeFom: string): Vilkarperiode {
  const periode = vilkårsperioder.find(p => p.periode.fom === vilkårsperiodeFom);
  if (!periode) {
    throw Error(`Mangler vilkårsperiode for vilkårsperiodeFom ${vilkårsperiodeFom}`);
  }
  return periode;
}

export function vurderesIBehandlingen(vilkårsperioder: Vilkarperiode[], vilkårsperiodeFom: string) {
  return finnVilkårsperiode(vilkårsperioder, vilkårsperiodeFom).vurderesIBehandlingen;
}
