import React from 'react';
import { StoryFn } from '@storybook/react';

import LoadingPanel from './LoadingPanel';

export default {
  title: 'LoadingPanel',
  component: LoadingPanel,
};

const Template: StoryFn = () => <LoadingPanel />;

export const Default = Template.bind({});
