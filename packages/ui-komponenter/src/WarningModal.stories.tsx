import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import WarningModal from './WarningModal';

export default {
  title: 'WarningModal',
};

export const Default: Story = () => (
  <WarningModal bodyText="Dette er en advarsel" showModal submit={action('button-click')} />
);
