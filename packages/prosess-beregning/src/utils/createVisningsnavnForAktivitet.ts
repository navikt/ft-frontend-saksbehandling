import type { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../types/KodeverkForPanel';

const lagVisningFraArbeidType = (andel: BeregningsgrunnlagAndel, kodeverkSamling: KodeverkForPanel): string =>
  andel.arbeidsforhold?.arbeidsforholdType
    ? kodeverkSamling['OpptjeningAktivitetType'].find(a => a.kode === andel.arbeidsforhold?.arbeidsforholdType)?.navn ||
      ''
    : '';

export const createVisningsnavnForAndel =
  (arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId, kodeverkSamling: KodeverkForPanel) =>
  (andel: BeregningsgrunnlagAndel): string => {
    if (andel.arbeidsforhold?.arbeidsgiverIdent) {
      const arbeidsforholdInfo = arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent];
      return arbeidsforholdInfo
        ? formaterArbeidsgiver(arbeidsforholdInfo, andel.arbeidsforhold.eksternArbeidsforholdId)
        : lagVisningFraArbeidType(andel, kodeverkSamling);
    }
    return lagVisningFraArbeidType(andel, kodeverkSamling);
  };
