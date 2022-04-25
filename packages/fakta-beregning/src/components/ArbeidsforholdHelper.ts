import moment from 'moment';

import { DDMMYYYY_DATE_FORMAT, isTest } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysninger } from '@navikt/ft-types';

const getEndCharFromId = (id?: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

export const createVisningsnavnFakta = (agOpplysning: ArbeidsgiverOpplysninger, eksternArbeidsforholdId?: string): string => {
  if (agOpplysning.erPrivatPerson) {
    if (agOpplysning.fødselsdato) {
      return `${agOpplysning.navn} (${moment(agOpplysning.fødselsdato).format(DDMMYYYY_DATE_FORMAT)})${getEndCharFromId(eksternArbeidsforholdId)}`;
    }
    isTest();
    return `${agOpplysning.navn}${getEndCharFromId(eksternArbeidsforholdId)}`;
  }

  return `${agOpplysning.navn} (${agOpplysning.identifikator})${getEndCharFromId(eksternArbeidsforholdId)}`;
};

export const sortArbeidsforholdList = (arbeidsforhold) => {
  const copy = arbeidsforhold.slice(0);
  copy.sort((a, b) => new Date(a.arbeidsforhold.startdato).getTime() - new Date(b.arbeidsforhold.startdato).getTime());
  return copy;
};
