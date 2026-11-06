import { RawIntlProvider } from 'react-intl';

import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import type { OverstyrRefusjonFormValues } from './components/Refusjonskrav/formValues';
import { RefusjonskravForm } from './components/Refusjonskrav/RefusjonskravForm';
import type { AksjonspunktRefusjon, OverstyrRefusjonskravSubmitType } from './types/aksjonspunkt';
import type { FordelingGrunnlagDto, Saksdokument } from './types/dataTypes';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface FaktaRefusjonIndexProps {
  aksjonspunkt: AksjonspunktRefusjon[];
  refusjonsandeler: FordelingGrunnlagDto['refusjonsandeler'];
  dokumenter: Saksdokument[];
  åpneDokument: (journalpostId: string, dokumentId: string) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  readOnly: boolean;
  erOverstyrer: boolean;
  submitCallback: (aksjonspunktData: OverstyrRefusjonskravSubmitType) => Promise<void>;
  formData?: OverstyrRefusjonFormValues;
  setFormData: (data: OverstyrRefusjonFormValues) => void;
}

export const FaktaRefusjonIndex = ({
  aksjonspunkt,
  refusjonsandeler,
  dokumenter,
  åpneDokument,
  arbeidsgiverOpplysningerPerId,
  readOnly,
  erOverstyrer,
  submitCallback,
  formData,
  setFormData,
}: FaktaRefusjonIndexProps) => (
  <RawIntlProvider value={intl}>
    <RefusjonskravForm
      refusjonsandeler={refusjonsandeler}
      dokumenter={dokumenter}
      åpneDokument={åpneDokument}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      readOnly={readOnly}
      erOverstyrer={erOverstyrer}
      submitCallback={submitCallback}
      formData={formData}
      setFormData={setFormData}
      aksjonspunkt={aksjonspunkt}
    />
  </RawIntlProvider>
);
