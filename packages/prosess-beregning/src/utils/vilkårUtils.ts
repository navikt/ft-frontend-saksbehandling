import type { Vilkår, Vilkårperiode } from '../types/Vilkår';

export const finnVilkårperiode = (vilkår: Vilkår, vilkårsperiodeFom: string): Vilkårperiode => {
  const vp = vilkår.perioder.find(({ periode }) => periode.fom === vilkårsperiodeFom);
  if (!vp) {
    throw new Error(`Finner ikke vilkårsperiode med fom ${vilkårsperiodeFom}`);
  }
  return vp;
};
