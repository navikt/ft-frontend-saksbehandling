import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KontrollerAktivitetskravAp = {
  avklartePerioder: {
    fom: string;
    tom: string;
    avklaring: string;
    begrunnelse: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.KONTROLLER_AKTIVITETSKRAV>

export default KontrollerAktivitetskravAp;
