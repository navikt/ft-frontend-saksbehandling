import type { AksjonspunktTilBekreftelse } from '@navikt/ft-types';

import { Aktsomhet } from '../kodeverk/aktsomhet';
import { SærligGrunn } from '../kodeverk/særligGrunn';
import { TilbakekrevingAksjonspunktCodes } from '../TilbakekrevingAksjonspunktCodes';

type VilkårResultatAktsomhet = {
  sarligGrunner: SærligGrunn[];
  harGrunnerTilReduksjon?: number;
  andelTilbakekreves?: number;
  ileggRenter?: boolean;
  tilbakekrevesBelop?: number;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr?: boolean;
  annetBegrunnelse?: string;
  sarligGrunnerBegrunnelse?: string;
};

type VilkårResultatAnnet = {
  aktsomhet: Aktsomhet;
  aktsomhetInfo: VilkårResultatAktsomhet;
};

type VilkårResultatGodTro = {
  erBelopetIBehold?: boolean;
  tilbakekrevesBelop?: number;
};

export type VilkårsvurderingAp = {
  vilkarsVurdertePerioder: {
    fom: string;
    tom: string;
    vilkarResultat: string;
    begrunnelse?: string;
    vilkarResultatInfo: {
      begrunnelse?: string;
    } & (VilkårResultatAnnet | VilkårResultatGodTro);
    feilutbetalingBelop?: number;
  }[];
} & AksjonspunktTilBekreftelse<TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING>;
