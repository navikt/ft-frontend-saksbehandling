import React from 'react';

import { OverstyringKnapp } from './OverstyringKnapp';

export default {
  component: OverstyringKnapp,
};

export const visDefaultOverstyringsknapp = () => <OverstyringKnapp />;

export const visOverstyringsknappNårOverstyrt = () => <OverstyringKnapp erOverstyrt />;
