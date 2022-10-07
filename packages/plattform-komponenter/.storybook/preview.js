import React from 'react';
import '../../../.storybook/global.less';
import '@navikt/ds-css';

export const decorators = [
  Story => (
    <div style={{ margin: '40px' }}>
      <Story />
    </div>
  ),
];
