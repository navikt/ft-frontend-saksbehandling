import { type ReactElement } from 'react';

export type AvkortetRadType = {
  ledetekst: ReactElement;
  verdi: string | null;
  display?: boolean | null;
};

export type RedusertRadType = {
  ledetekst: ReactElement;
  verdi: string | null;
  display?: boolean | null;
};

export type BruttoRadType = {
  ledetekst: ReactElement;
  verdi: string | null;
  display?: boolean | null;
  grunnlag: string | null;
};

export type DagsatsRadType = {
  verdi: string | null;
  display?: boolean;
  grunnlag: string | null;
};

export type BeregningsresultatAndelElementType = {
  ledetekst?: ReactElement;
  erOverstyrt?: boolean;
  pgiSnitt?: number;
  skalFastsetteGrunnlag: boolean;
  verdi?: number;
  inntekt: number | string;
};

export type BeregningsresultatPeriodeTabellType = {
  headers: ReactElement[];
  rowsAndeler: BeregningsresultatAndelElementType[];
  avkortetRad: AvkortetRadType;
  redusertRad: RedusertRadType;
  bruttoRad: BruttoRadType;
  dagsatser: DagsatsRadType;
  rowsForklaringer: ReactElement[];
};
