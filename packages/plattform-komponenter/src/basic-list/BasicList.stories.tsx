import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { BasicList } from './BasicList';

export default {
  title: 'BasicList',
  component: BasicList,
};

const Template: StoryFn<ComponentProps<typeof BasicList>> = () => (
  <BasicList elements={[<p key="1">Dette er et listeelement</p>, <p key="2">Dette er et annet listeelmeent</p>]} />
);

export const Default = Template.bind({});
Default.args = {};
