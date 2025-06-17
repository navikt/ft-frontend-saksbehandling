import { HendelseType, HendelseUnderType } from '@navikt/ft-kodeverk';

export type FeilutbetalingÅrsak = {
  hendelseTyper: {
    hendelseType: HendelseType;
    hendelseUndertyper?: HendelseUnderType[];
  }[];
  ytelseType: string;
};
