import dayjs from 'dayjs';

import { ArbeidsgiverOpplysninger } from '@navikt/ft-types';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

const getEndCharFromId = (id?: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

export const createVisningsnavnFakta = (
  agOpplysning: ArbeidsgiverOpplysninger,
  eksternArbeidsforholdId?: string,
): string => {
  if (agOpplysning.erPrivatPerson) {
    if (agOpplysning.fødselsdato) {
      return `${agOpplysning.navn} (${dayjs(agOpplysning.fødselsdato).format(DDMMYYYY_DATE_FORMAT)})${getEndCharFromId(
        eksternArbeidsforholdId,
      )}`;
    }
    return `${agOpplysning.navn}${getEndCharFromId(eksternArbeidsforholdId)}`;
  }

  return `${agOpplysning.navn} (${agOpplysning.identifikator})${getEndCharFromId(eksternArbeidsforholdId)}`;
};
