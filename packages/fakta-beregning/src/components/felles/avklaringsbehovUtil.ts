import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import { BeregningAvklaringsbehov } from '@navikt/ft-types';

export const hasAvklaringsbehov = (avklarinsbehovKode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === avklarinsbehovKode);

export const isAvklaringsbehovOpen = (statusKode: string): boolean => statusKode === AksjonspunktStatus.OPPRETTET;
