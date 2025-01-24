import { ComponentProps } from 'react';

import { StoryFn } from '@storybook/react';

import { LabelledContent } from './LabelledContent';

export default {
  title: 'Labelled content',
  component: LabelledContent,
};

const Template: StoryFn<ComponentProps<typeof LabelledContent>> = () => (
  <LabelledContent label="Label" content="Content" />
);

export const Default = Template.bind({});
Default.args = {};
