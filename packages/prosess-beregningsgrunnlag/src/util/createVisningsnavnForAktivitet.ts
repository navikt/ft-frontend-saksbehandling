import { ArbeidsgiverOpplysninger, ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import dayjs from 'dayjs';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { KodeverkForPanel } from '../types/kodeverkForPanel';

const getEndCharFromId = (id: string | undefined): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

export const createVisningsnavnForAktivitet = (
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysninger,
  eksternReferanse: string | undefined,
): string => {
  const { navn, fødselsdato, erPrivatPerson, identifikator } = arbeidsgiverOpplysninger;
  if (erPrivatPerson) {
    return fødselsdato
      ? `${navn} (${dayjs(fødselsdato).format(DDMMYYYY_DATE_FORMAT)})${getEndCharFromId(eksternReferanse)}`
      : navn;
  }
  return identifikator ? `${navn} (${identifikator})${getEndCharFromId(eksternReferanse)}` : navn;
};

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
      ? createVisningsnavnForAktivitet(arbeidsforholdInfo, andel.arbeidsforhold.eksternArbeidsforholdId)
      : lagVisningFraArbeidType(andel, kodeverkSamling);
  }
  return lagVisningFraArbeidType(andel, kodeverkSamling);
};
