import React, { FunctionComponent } from 'react';

import { KodeverkMedNavn } from '@navikt/ft-types';

import Aktsomhet from '../../../kodeverk/aktsomhet';
import AktsomhetGradForsettFormPanel from './AktsomhetGradForsettFormPanel';
import AktsomhetGradUaktsomhetFormPanel from './AktsomhetGradUaktsomhetFormPanel';

interface OwnProps {
  harGrunnerTilReduksjon?: boolean;
  readOnly: boolean;
  handletUaktsomhetGrad: Aktsomhet;
  erSerligGrunnAnnetValgt: boolean;
  erValgtResultatTypeForstoBurdeForstaatt?: boolean;
  harMerEnnEnYtelse: boolean;
  feilutbetalingBelop: number;
  erTotalBelopUnder4Rettsgebyr: boolean;
  sarligGrunnTyper?: KodeverkMedNavn[];
  andelSomTilbakekreves?: string;
  name: string;
}

const AktsomhetGradFormPanel: FunctionComponent<OwnProps> = ({
  harGrunnerTilReduksjon,
  readOnly,
  handletUaktsomhetGrad,
  erSerligGrunnAnnetValgt,
  erValgtResultatTypeForstoBurdeForstaatt,
  sarligGrunnTyper,
  harMerEnnEnYtelse,
  feilutbetalingBelop,
  erTotalBelopUnder4Rettsgebyr,
  andelSomTilbakekreves,
  name,
}) => (
  <>
    { handletUaktsomhetGrad === Aktsomhet.FORSETT && (
      <AktsomhetGradForsettFormPanel
        name={name}
        readOnly={readOnly}
        erValgtResultatTypeForstoBurdeForstaatt={erValgtResultatTypeForstoBurdeForstaatt}
      />
    )}
    { handletUaktsomhetGrad !== Aktsomhet.FORSETT && (
      <AktsomhetGradUaktsomhetFormPanel
        name={name}
        harGrunnerTilReduksjon={harGrunnerTilReduksjon}
        readOnly={readOnly}
        handletUaktsomhetGrad={handletUaktsomhetGrad}
        erSerligGrunnAnnetValgt={erSerligGrunnAnnetValgt}
        sarligGrunnTyper={sarligGrunnTyper}
        harMerEnnEnYtelse={harMerEnnEnYtelse}
        feilutbetalingBelop={feilutbetalingBelop}
        erTotalBelopUnder4Rettsgebyr={erTotalBelopUnder4Rettsgebyr}
        andelSomTilbakekreves={andelSomTilbakekreves}
        erValgtResultatTypeForstoBurdeForstaatt={erValgtResultatTypeForstoBurdeForstaatt}
      />
    )}
  </>
);

export default AktsomhetGradFormPanel;
