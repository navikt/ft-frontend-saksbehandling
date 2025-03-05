import React from 'react';

import { ContentWithTooltip } from './ContentWithTooltip';

export default {
  component: ContentWithTooltip,
};

export const Tooltip = () => (
  <ContentWithTooltip tooltipText="Tooltip Tooltipsen">
    <button type="button">Knapp med tooltip</button>
  </ContentWithTooltip>
);
