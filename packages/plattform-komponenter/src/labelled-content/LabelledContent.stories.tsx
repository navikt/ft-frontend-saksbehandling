import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import LabelledContentComponent from './LabelledContent';

export default {
  title: 'Labelled content',
  component: LabelledContentComponent,
};

const Template: StoryFn<ComponentProps<typeof LabelledContentComponent>> = () => (
  <LabelledContentComponent label="Label" content="Content" />
);

export const LabelledContent = Template.bind({});
LabelledContent.args = {};
