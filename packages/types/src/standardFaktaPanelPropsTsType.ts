import Aksjonspunkt from './aksjonspunktTsType';
import Behandling from './behandlingTsType';
import AlleKodeverk from './kodeverkAlleTsType';

type StandardFaktaPanelProps<AP_TYPE> = Readonly<{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: AP_TYPE) => Promise<void>;
  alleKodeverk: AlleKodeverk;
  formData?: any;
  setFormData: (data: any) => void;
}>;

export default StandardFaktaPanelProps;
