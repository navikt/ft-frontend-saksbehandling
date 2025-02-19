import React from 'react';

import { ContentWithTooltip } from './ContentWithTooltip';

export default {
  title: 'plattform-komponenter/Content with tooltip',
  component: ContentWithTooltip,
};

export const Tooltip = () => (
  <ContentWithTooltip tooltipText="Tooltip Tooltipsen">
    <button type="button">Knapp med tooltip</button>
  </ContentWithTooltip>
);
