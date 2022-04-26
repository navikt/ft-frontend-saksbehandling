import { BeregningAvklaringsbehov } from '@navikt/ft-types';

export const hasAvklaringsbehov = (avklarinsbehovKode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean => avklaringsbehov
  .some((ap) => ap.definisjon === avklarinsbehovKode);
