import { formNameAvklarAktiviteter } from '../components/BeregningFormUtils';
import { AvklarAktiviteterValues } from './AvklarAktivitetTypes';

export type AvklarAktiviteterFormValues = {
  [formNameAvklarAktiviteter]: AvklarAktiviteterValues[];
};
