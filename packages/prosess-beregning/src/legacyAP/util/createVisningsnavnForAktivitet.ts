import type { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';

const lagVisningFraArbeidType = (andel: BeregningsgrunnlagAndel, kodeverkSamling: KodeverkForPanel): string =>
  andel.arbeidsforhold && andel.arbeidsforhold.arbeidsforholdType
    ? kodeverkSamling['OpptjeningAktivitetType'].find(a => a.kode === andel.arbeidsforhold?.arbeidsforholdType)?.navn ||
      ''
    : '';

export const createVisningsnavnForAndel = (
  andel: BeregningsgrunnlagAndel,
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  kodeverkSamling: KodeverkForPanel,
): string => {
  if (andel.arbeidsforhold && andel.arbeidsforhold.arbeidsgiverIdent) {
    const arbeidsforholdInfo = arbeidsgiverOpplysninger[andel.arbeidsforhold.arbeidsgiverIdent];
    return arbeidsforholdInfo
      ? formaterArbeidsgiver(arbeidsforholdInfo, andel.arbeidsforhold.eksternArbeidsforholdId)
      : lagVisningFraArbeidType(andel, kodeverkSamling);
  }
  return lagVisningFraArbeidType(andel, kodeverkSamling);
};
