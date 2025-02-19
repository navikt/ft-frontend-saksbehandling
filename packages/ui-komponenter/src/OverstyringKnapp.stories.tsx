import React from 'react';

import { OverstyringKnapp } from './OverstyringKnapp';

export default {
  title: 'ui-komponenter/OverstyringKnapp',
  component: OverstyringKnapp,
};

export const visDefaultOverstyringsknapp = () => <OverstyringKnapp />;

export const visOverstyringsknappNårOverstyrt = () => <OverstyringKnapp erOverstyrt />;
