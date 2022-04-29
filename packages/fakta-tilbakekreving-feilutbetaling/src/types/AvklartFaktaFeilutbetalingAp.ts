import { AksjonspunktTilBekreftelse } from '@navikt/ft-types';
import FaktaTilbakekrevingFeilutbetalingAp from '../FaktaTilbakekrevingFeilutbetalingAp';

type AvklartFaktaFeilutbetalingAp = {
  feilutbetalingFakta: {
    fom: string;
    tom: string;
    årsak: {
      hendelseType: string;
      hendelseUndertype: string;
    }
  }[];
} & AksjonspunktTilBekreftelse<FaktaTilbakekrevingFeilutbetalingAp.AVKLAR_FAKTA_FOR_FEILUTBETALING>;

export default AvklartFaktaFeilutbetalingAp;
