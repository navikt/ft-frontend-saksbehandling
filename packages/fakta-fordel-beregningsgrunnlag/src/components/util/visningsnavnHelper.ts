import dayjs from 'dayjs';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysninger, ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingAndel } from '@navikt/ft-types';

const getEndCharFromId = (id?: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

export const createVisningsnavnForAktivitetFordeling = (
  agOpplysninger: ArbeidsgiverOpplysninger,
  eksternArbeidsgiverId?: string,
): string => {
  const { navn, fødselsdato, erPrivatPerson, identifikator } = agOpplysninger;
  if (erPrivatPerson) {
    return fødselsdato
      ? `${navn} (${dayjs(fødselsdato).format(DDMMYYYY_DATE_FORMAT)})${getEndCharFromId(eksternArbeidsgiverId)}`
      : navn;
  }
  return identifikator ? `${navn} (${identifikator})${getEndCharFromId(eksternArbeidsgiverId)}` : navn;
};

export const createVisningsnavnForAktivitetRefusjon = (
  andel: RefusjonTilVurderingAndel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverId = andel.arbeidsgiver?.arbeidsgiverOrgnr || andel.arbeidsgiver?.arbeidsgiverAktørId;
  if (!arbeidsgiverId || !arbeidsgiverOpplysningerPerId[arbeidsgiverId]) {
    return '';
  }
  const agOpplysning = arbeidsgiverOpplysningerPerId[arbeidsgiverId];
  if (agOpplysning.erPrivatPerson) {
    if (agOpplysning.fødselsdato) {
      return `${agOpplysning.navn} (${dayjs(agOpplysning.fødselsdato).format(DDMMYYYY_DATE_FORMAT)})${getEndCharFromId(
        andel.eksternArbeidsforholdRef,
      )}`;
    }
    return `${agOpplysning.navn}${getEndCharFromId(andel.eksternArbeidsforholdRef)}`;
  }
  return `${agOpplysning.navn} (${arbeidsgiverId})${getEndCharFromId(andel.eksternArbeidsforholdRef)}`;
};
