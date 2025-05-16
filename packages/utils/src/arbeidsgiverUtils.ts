import { dateFormat } from './dateFormat';

type ArbeidsgiverOpplysninger = PrivatPerson | Bedrift;
type PrivatPerson = {
  erPrivatPerson: true;
  navn: string;
  fødselsdato: string;
};
type Bedrift = {
  erPrivatPerson: false;
  identifikator: string;
  navn: string;
};

export const formaterArbeidsgiver = (agOpplysning: ArbeidsgiverOpplysninger, arbeidsforholdId?: string): string => {
  const baseNavn = agOpplysning.erPrivatPerson ? formaterPrivatPerson(agOpplysning) : formaterBedrift(agOpplysning);
  return `${baseNavn}${getEndCharFromId(arbeidsforholdId)}`;
};

const formaterBedrift = ({ navn, identifikator }: Bedrift) => {
  return `${navn} (${identifikator})`;
};

const formaterPrivatPerson = ({ navn, fødselsdato }: PrivatPerson) => {
  return !fødselsdato ? navn : `${navn} (${dateFormat(fødselsdato)})`;
};

const getEndCharFromId = (id: string | undefined): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');
