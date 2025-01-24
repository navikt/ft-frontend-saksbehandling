import React from 'react';

import { ArrowBox } from './ArrowBox';

export default {
  title: 'ArrowBox',
  component: ArrowBox,
};

export const MedPilPåToppen = () => (
  <div style={{ width: '200px' }}>
    <ArrowBox>Dette er en tekst</ArrowBox>
  </div>
);
