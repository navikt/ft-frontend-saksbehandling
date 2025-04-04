import React from 'react';

import { UtvidbarTekst } from './UtvidbarTekst';

export default {
  component: UtvidbarTekst,
};

export const UtvidbarTekstKnappVises = () => (
  <UtvidbarTekst tekst="Dette er en lang tekst som har en lengde på mer enn 100 tegn som viser funksjonaliteten av UtvidbarTekst-komponenten." />
);

export const UtvidbarTekstKnappVisesIkke = () => (
  <UtvidbarTekst tekst="Dette er en kort tekst som ikke skal ha UtvidbarTekst-knapp" />
);
