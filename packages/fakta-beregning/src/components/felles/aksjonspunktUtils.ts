/* eslint-disable import/prefer-default-export */

import { BeregningAvklaringsbehov } from '@navikt/ft-types';

export const hasAksjonspunkt = (aksjonspunktKode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === aksjonspunktKode);
