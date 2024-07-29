import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import OkAvbrytModal from './OkAvbrytModal';

export default {
  title: 'OkAvbrytModal',
  component: OkAvbrytModal,
};

const Template: StoryFn = () => (
  <OkAvbrytModal text="Dette er ein test" showModal submit={action('button-click')} cancel={action('button-click')} />
);

export const Default = Template.bind({});
