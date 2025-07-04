import { formNameAvklarAktiviteter } from '../utils/BeregningFormUtils';
import type { AvklarAktiviteterValues } from './AvklarAktivitetTypes';

export type AvklarAktiviteterFormValues = {
  [formNameAvklarAktiviteter]: AvklarAktiviteterValues[];
};
