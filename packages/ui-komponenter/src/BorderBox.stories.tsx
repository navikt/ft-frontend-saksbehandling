import { BorderBox } from './BorderBox';

export default {
  component: BorderBox,
};

export const VisBoksDerEnIkkeHarFeil = () => <BorderBox error={false}>Dette er en tekst</BorderBox>;

export const VisBoksDerEnHarFeil = () => <BorderBox error>Dette er en tekst</BorderBox>;
