/**
 * Denne funksjonen sikrer at alle tilfeller blir håndtert i compile time
 * Eksempel:
 *  switch (kodeverkType) {
 *     case KodeverkType.BEHANDLING_AARSAK:
 *     case KodeverkType.KONSEKVENS_FOR_YTELSEN:
 *       return 'something';
 *     default:
 *       assertUnreachable(kodeverkType);
 *   }
 */
export function assertUnreachable(x: never): never {
  throw new Error('Uventet verdi: alle tilfeller må håndteres:', x);
}
