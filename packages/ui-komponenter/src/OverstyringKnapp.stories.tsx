import React from 'react';

import { OverstyringKnapp } from './OverstyringKnapp';

export default {
  title: 'OverstyringKnapp',
  component: OverstyringKnapp,
};

export const visDefaultOverstyringsknapp = () => <OverstyringKnapp />;

export const visOverstyringsknappNårOverstyrt = () => <OverstyringKnapp erOverstyrt />;
