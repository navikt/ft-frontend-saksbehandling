import React from 'react';

import BorderBox from './BorderBox';

export default {
  title: 'ui-komponenter/BorderBox',
  component: BorderBox,
};

export const visBoksDerEnIkkeHarFeil = () => (
  <BorderBox error={false}>
    Dette er en tekst
  </BorderBox>
);

export const visBoksDerEnHarFeil = () => (
  <BorderBox error>
    Dette er en tekst
  </BorderBox>
);
