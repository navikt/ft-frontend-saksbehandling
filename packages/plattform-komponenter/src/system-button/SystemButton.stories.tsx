import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import SystemButtonComponent from './SystemButton';

export default {
  title: 'System button',
  component: SystemButtonComponent,
};

const Template: StoryFn<ComponentProps<typeof SystemButtonComponent>> = () => (
  <SystemButtonComponent onClick={() => null} isToggled />
);

export const SystemButton = Template.bind({});
SystemButton.args = {};
