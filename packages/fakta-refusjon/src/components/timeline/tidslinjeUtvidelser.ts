export const TIDSLINJE_UTVIDELSER = ['4', '8', '12'] as const;

export type TidslinjeUtvidelse = (typeof TIDSLINJE_UTVIDELSER)[number];

export const erTidslinjeUtvidelse = (value: string): value is TidslinjeUtvidelse =>
  TIDSLINJE_UTVIDELSER.some(utvidelse => utvidelse === value);
