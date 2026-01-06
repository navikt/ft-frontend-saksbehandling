import type { AksjonspunktStatus } from './AksjonspunktStatus';

export type Aksjonspunkt = Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>;
