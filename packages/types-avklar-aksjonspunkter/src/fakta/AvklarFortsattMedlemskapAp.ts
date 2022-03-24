import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';
import MedlemskapBekreftetPeriode from './MedlemskapBekreftetPeriode';

type AvklarFortsattMedlemskapAp = {
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_FORTSATT_MEDLEMSKAP>;

export default AvklarFortsattMedlemskapAp;
