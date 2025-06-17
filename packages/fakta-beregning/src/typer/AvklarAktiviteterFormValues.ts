import { formNameAvklarAktiviteter } from '../utils/BeregningFormUtils';
import { AvklarAktiviteterValues } from './AvklarAktivitetTypes';

export type AvklarAktiviteterFormValues = {
  [formNameAvklarAktiviteter]: AvklarAktiviteterValues[];
};
