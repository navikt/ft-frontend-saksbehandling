import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import BasicListComponent from './BasicList';

export default {
  title: 'BasicList',
  component: BasicListComponent,
};

const Template: StoryFn<ComponentProps<typeof BasicListComponent>> = () => (
  <BasicListComponent
    elements={[<p key="1">Dette er et listeelement</p>, <p key="2">Dette er et annet listeelmeent</p>]}
  />
);

export const BasicList = Template.bind({});
BasicList.args = {};
