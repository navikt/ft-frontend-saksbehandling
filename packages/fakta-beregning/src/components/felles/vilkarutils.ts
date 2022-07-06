import { Vilkar, Vilkarperiode } from '@navikt/ft-types';

// eslint-disable-next-line import/prefer-default-export
export const finnVilkårperiode = (vilkår: Vilkar, vilkårsperiodeFom: string): Vilkarperiode =>
  vilkår.perioder.find(({ periode }) => periode.fom === vilkårsperiodeFom);
