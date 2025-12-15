import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';

import { lagArbeidsgiver } from './utils/lagArbeidsgiver';

export const arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId = {
  '222222222': lagArbeidsgiver('222222222', 'Trossig Naturstridig Tiger AS'),
  '333333333': lagArbeidsgiver('333333333', 'Norge AS'),
  '315853370': lagArbeidsgiver('315853370', 'INTERESSANT INTUITIV KATT DIAMETER'),
  '896929119': lagArbeidsgiver('896929119', 'SAUEFABRIKK'),
  '311536753': lagArbeidsgiver('311536753', 'TROSSIG NATURSTRIDIG TIGER AS'),
};
