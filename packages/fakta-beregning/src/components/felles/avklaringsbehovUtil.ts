import { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { aksjonspunktStatus } from '@navikt/ft-kodeverk';

export const hasAvklaringsbehov = (avklarinsbehovKode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean => avklaringsbehov
  .some((ap) => ap.definisjon === avklarinsbehovKode);

export const isAvklaringsbehovOpen = (statusKode: string): boolean => statusKode === aksjonspunktStatus.OPPRETTET;
