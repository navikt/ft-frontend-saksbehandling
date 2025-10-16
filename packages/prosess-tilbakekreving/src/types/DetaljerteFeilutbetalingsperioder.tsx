import { type HendelseType, HendelseUnderType } from '@navikt/ft-kodeverk';

export type DetaljertFeilutbetalingPeriode = {
  fom: string;
  tom: string;
  årsak: {
    hendelseType: HendelseType;
    hendelseUndertype?: HendelseUnderType;
  };
  feilutbetaling: number;
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
  redusertBeloper?: {
    erTrekk: boolean;
    belop: number;
  }[];
  oppfyltValg?: string;
  foreldet?: boolean;
};

export type DetaljerteFeilutbetalingsperioder = {
  perioder: DetaljertFeilutbetalingPeriode[];
  rettsgebyr: number;
};
