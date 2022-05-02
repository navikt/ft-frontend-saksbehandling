import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import LabelledContentComponent from './LabelledContent';

export default {
  title: 'React Components',
  component: LabelledContentComponent,
};

const Template: Story<ComponentProps<typeof LabelledContentComponent>> = () => (
  <LabelledContentComponent label="Label" content="Content" />
);

export const LabelledContent = Template.bind({});
LabelledContent.args = {};
