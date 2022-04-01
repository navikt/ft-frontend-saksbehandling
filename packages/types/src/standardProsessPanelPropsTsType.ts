import { ProsessAksjonspunkt } from '@navikt/ft-types-aksjonspunkter';

import Aksjonspunkt from './aksjonspunktTsType';
import Behandling from './behandlingTsType';
import Vilkar from './vilkarTsType';
import AlleKodeverk from './kodeverkAlleTsType';

interface StandardProsessPanelProps {
  behandling: Behandling;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  status: string;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  isAksjonspunktOpen: boolean;
  formData?: any;
  setFormData: (data: any) => void;
}

export default StandardProsessPanelProps;
