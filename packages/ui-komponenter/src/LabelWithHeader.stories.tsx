import React from 'react';

import { LabelWithHeader } from './LabelWithHeader';

export default {
  component: LabelWithHeader,
};

export const Default = () => (
  <LabelWithHeader header="Dette er en header" texts={['Dette er tekst 1', 'Dette er tekst 2']} />
);
