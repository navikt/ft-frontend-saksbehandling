import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import WarningModal from './WarningModal';

export default {
  title: 'WarningModal',
};

export const Default: StoryFn = () => (
  <WarningModal bodyText="Dette er en advarsel" showModal submit={action('button-click')} />
);
