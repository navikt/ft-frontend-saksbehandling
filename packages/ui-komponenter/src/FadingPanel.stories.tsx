import React from 'react';

import { FadingPanel } from './FadingPanel';

export default {
  component: FadingPanel,
};

export const VisPanel = () => <FadingPanel withoutTopMargin>Dette er en tekst</FadingPanel>;
