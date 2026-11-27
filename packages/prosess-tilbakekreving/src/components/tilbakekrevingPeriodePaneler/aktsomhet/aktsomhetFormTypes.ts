import type { Aktsomhet } from '../../../kodeverk/aktsomhet';
import type { SærligGrunn } from '../../../kodeverk/særligGrunn';
import type { VilkårResultat } from '../../../kodeverk/vilkarResultat';

export type AktsomhetsFelter = {
  andelSomTilbakekreves?: number | string | null;
  andelSomTilbakekrevesManuell?: number | string | null;
  harGrunnerTilReduksjon?: boolean;
  skalDetTilleggesRenter?: boolean;
  belopSomSkalTilbakekreves?: number | string | null;
  annetBegrunnelse?: string;
  sarligGrunnerBegrunnelse?: string;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr?: boolean;
} & Partial<Record<SærligGrunn, boolean>>;

type AktomhetMap = {
  FORSETT?: AktsomhetsFelter;
  GROVT_UAKTSOM?: AktsomhetsFelter;
  SIMPEL_UAKTSOM?: AktsomhetsFelter;
};

export type InitialValuesAktsomhetForm = {
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>;

type AktsomhetVilkårResultat = Exclude<VilkårResultat, 'GOD_TRO'>;
export type AktsomhetFormValues = Record<AktsomhetVilkårResultat, InitialValuesAktsomhetForm>;
export type AktsomhetFormName = `${AktsomhetVilkårResultat}.${Aktsomhet}`;
