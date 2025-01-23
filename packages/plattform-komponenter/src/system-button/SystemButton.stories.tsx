import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { SystemButton } from './SystemButton';

export default {
  title: 'System button',
  component: SystemButton,
};

const Template: StoryFn<ComponentProps<typeof SystemButton>> = () => <SystemButton onClick={() => null} isToggled />;

export const Default = Template.bind({});
Default.args = {};
