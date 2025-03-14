import React from 'react';

import { LesMer } from './LesMer';

export default {
  component: LesMer,
};

export const Default = () => (
  <LesMer
    tekst="Dette er en lang tekst som har en lengde på mer enn 100 tegn som viser funksjonaliteten av LesMer-komponenten."
    maksLengde={100}
  />
);
