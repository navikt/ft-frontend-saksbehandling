import { KodeverkType } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import { KodeverkForPanel } from '../types/KodeverkForPanelForBg';

const lagVisningFraArbeidType = (andel: BeregningsgrunnlagAndel, kodeverkSamling: KodeverkForPanel): string =>
  andel.arbeidsforhold && andel.arbeidsforhold.arbeidsforholdType
    ? kodeverkSamling[KodeverkType.OPPTJENING_AKTIVITET_TYPE].find(
        a => a.kode === andel.arbeidsforhold?.arbeidsforholdType,
      )?.navn || ''
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
