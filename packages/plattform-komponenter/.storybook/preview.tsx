import React from 'react';
import '../../utils-test/src/global.module.css';
import '@navikt/ds-css';

export const decorators = [
  Story => (
    <div style={{ margin: '40px' }}>
      <Story />
    </div>
  ),
];
