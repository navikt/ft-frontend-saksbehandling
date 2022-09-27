import { ArbeidsgiverOpplysninger, ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import dayjs from 'dayjs';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { KodeverkType } from '@navikt/ft-kodeverk';

const getEndCharFromId = (id: string | undefined): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const createVisningsnavnForAktivitet = (
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

const lagVisningFraArbeidType = (
  andel: BeregningsgrunnlagAndel,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
): string =>
  andel.arbeidsforhold && andel.arbeidsforhold.arbeidsforholdType
    ? getKodeverknavn(andel.arbeidsforhold.arbeidsforholdType, KodeverkType.OVERFOERING_AARSAK_TYPE)
    : '';

export const createVisningsnavnForAndel = (
  andel: BeregningsgrunnlagAndel,
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
): string => {
  if (andel.arbeidsforhold && andel.arbeidsforhold.arbeidsgiverIdent) {
    const arbeidsforholdInfo = arbeidsgiverOpplysninger[andel.arbeidsforhold.arbeidsgiverIdent];
    return arbeidsforholdInfo
      ? createVisningsnavnForAktivitet(arbeidsforholdInfo, andel.arbeidsforhold.eksternArbeidsforholdId)
      : lagVisningFraArbeidType(andel, getKodeverknavn);
  }
  return lagVisningFraArbeidType(andel, getKodeverknavn);
};

export default createVisningsnavnForAktivitet;
