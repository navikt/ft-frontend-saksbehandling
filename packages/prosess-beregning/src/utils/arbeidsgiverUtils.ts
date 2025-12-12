import type { IntlShape } from 'react-intl';

import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

export const formaterArbeidsgiverNullable =
  (arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId, intl: IntlShape) =>
  (arbeidsgiverIdent: string | undefined): string => {
    if (!arbeidsgiverIdent) {
      return intl.formatMessage({ id: 'ArbeidsgiverUtils.IngenArbeidsgiverReferanse' });
    }

    const opplysning = arbeidsgiverOpplysningerPerId[arbeidsgiverIdent];
    return opplysning
      ? formaterArbeidsgiver(opplysning)
      : intl.formatMessage({ id: 'ArbeidsgiverUtils.UkjentArbeidsgiver' }, { arbeidsgiverIdent });
  };
