import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import BasicListComponent from './BasicList';

export default {
  title: 'BasicList',
  component: BasicListComponent,
};

const Template: StoryFn<ComponentProps<typeof BasicListComponent>> = () => (
  <BasicListComponent elements={[<p>Dette er et listeelement</p>, <p>Dette er et annet listeelmeent</p>]} />
);

export const BasicList = Template.bind({});
BasicList.args = {};
