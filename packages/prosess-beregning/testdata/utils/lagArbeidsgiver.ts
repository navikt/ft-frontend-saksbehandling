import type { ArbeidsgiverOpplysninger } from '@navikt/ft-types';

export const lagArbeidsgiver = (identifikator: string, navn: string): ArbeidsgiverOpplysninger => ({
  identifikator,
  navn,
  erPrivatPerson: false,
});
