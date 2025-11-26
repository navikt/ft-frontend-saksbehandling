import type { HendelseType, HendelseUnderType } from '@navikt/ft-types';

export type FeilutbetalingÅrsak = {
  hendelseTyper: {
    hendelseType: HendelseType;
    hendelseUndertyper?: HendelseUnderType[];
  }[];
  ytelseType: string;
};
