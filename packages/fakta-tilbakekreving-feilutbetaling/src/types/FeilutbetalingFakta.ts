import { BehandlingArsakType, BehandlingResultatType, TilbakekrevingVidereBehandling } from '@navikt/ft-kodeverk';

export type FeilutbetalingFakta = {
  behandlingFakta: {
    perioder?: {
      fom: string;
      tom: string;
      belop: number;
      feilutbetalingÅrsakDto?: {
        hendelseType: string;
        hendelseUndertype?: string;
      };
    }[];
    totalPeriodeFom: string;
    totalPeriodeTom: string;
    aktuellFeilUtbetaltBeløp: number;
    tidligereVarseltBeløp?: number;
    behandlingÅrsaker?: {
      behandlingArsakType: BehandlingArsakType;
    }[];
    behandlingsresultat?: {
      type: BehandlingResultatType;
      konsekvenserForYtelsen: string[];
    };
    tilbakekrevingValg?: {
      videreBehandling: TilbakekrevingVidereBehandling;
    };
    datoForRevurderingsvedtak: string;
    begrunnelse?: string;
  };
};
