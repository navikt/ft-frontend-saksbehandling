import { Aktsomhet } from '../../../kodeverk/aktsomhet';
import { KodeverkMedNavnTilbakekreving } from '../../../types/KodeverkTilbakeForPanel';
import { AktsomhetGradForsettFormPanel } from './AktsomhetGradForsettFormPanel';
import { AktsomhetGradUaktsomhetFormPanel } from './AktsomhetGradUaktsomhetFormPanel';

export interface Props {
  harGrunnerTilReduksjon?: boolean;
  readOnly: boolean;
  handletUaktsomhetGrad?: Aktsomhet;
  erSerligGrunnAnnetValgt?: boolean;
  erValgtResultatTypeForstoBurdeForstaatt?: boolean;
  harMerEnnEnYtelse: boolean;
  feilutbetalingBelop: number;
  erTotalBelopUnder4Rettsgebyr: boolean;
  sarligGrunnTyper: KodeverkMedNavnTilbakekreving<'SærligGrunn'>[];
  andelSomTilbakekreves?: string;
  name: string;
}

export const AktsomhetGradFormPanel = ({
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
}: Props) => (
  <>
    {handletUaktsomhetGrad === Aktsomhet.FORSETT && (
      <AktsomhetGradForsettFormPanel
        name={name}
        readOnly={readOnly}
        erValgtResultatTypeForstoBurdeForstaatt={erValgtResultatTypeForstoBurdeForstaatt}
      />
    )}
    {handletUaktsomhetGrad !== Aktsomhet.FORSETT && (
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
