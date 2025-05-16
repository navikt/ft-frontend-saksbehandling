import { ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingAndel } from '@navikt/ft-types';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

export const createVisningsnavnForAktivitetRefusjon = (
  { arbeidsgiver, eksternArbeidsforholdRef }: RefusjonTilVurderingAndel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverId = arbeidsgiver?.arbeidsgiverOrgnr || arbeidsgiver?.arbeidsgiverAktørId;
  if (!arbeidsgiverId || !arbeidsgiverOpplysningerPerId[arbeidsgiverId]) {
    return '';
  }
  const agOpplysning = arbeidsgiverOpplysningerPerId[arbeidsgiverId];
  return formaterArbeidsgiver(agOpplysning, eksternArbeidsforholdRef);
};
