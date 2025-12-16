import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';

import { lagArbeidsgiver } from './utils/lagArbeidsgiver';

export const arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId = {
  '222222222': lagArbeidsgiver('222222222', 'TROSSIG NATURSTRIDIG TIGER AS'),
  '333333333': lagArbeidsgiver('333333333', 'SAUEFABRIKK'),
  '444444444': lagArbeidsgiver('444444444', 'INTERESSANT INTUITIV KATT DIAMETER'),
};
