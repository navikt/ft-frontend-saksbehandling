import { AksjonspunktTilBekreftelse } from '@navikt/ft-types';

import { FeilutbetalingAksjonspunktCode } from '../FeilutbetalingAksjonspunktCode';

export type AvklartFaktaFeilutbetalingAp = {
  feilutbetalingFakta: {
    fom: string;
    tom: string;
    årsak: {
      hendelseType?: string;
      hendelseUndertype?: string;
    };
  }[];
} & AksjonspunktTilBekreftelse<FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING>;
