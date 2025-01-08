import { ReactElement } from 'react';

export type AvkortetRadType = {
  ledetekst: ReactElement<any>;
  verdi: string | null;
  display?: boolean | null;
};

export type RedusertRadType = {
  ledetekst: ReactElement<any>;
  verdi: string | null;
  display?: boolean | null;
};

export type BruttoRadType = {
  ledetekst: ReactElement<any>;
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
  ledetekst?: ReactElement<any>;
  erOverstyrt?: boolean;
  pgiSnitt?: number;
  skalFastsetteGrunnlag: boolean;
  verdi?: number;
  inntekt: number | string;
};

export type BeregningsresultatPeriodeTabellType = {
  headers: ReactElement<any>[];
  rowsAndeler: BeregningsresultatAndelElementType[];
  avkortetRad: AvkortetRadType;
  redusertRad: RedusertRadType;
  bruttoRad: BruttoRadType;
  dagsatser: DagsatsRadType;
  rowsForklaringer: ReactElement<any>[];
};

export default BeregningsresultatPeriodeTabellType;
