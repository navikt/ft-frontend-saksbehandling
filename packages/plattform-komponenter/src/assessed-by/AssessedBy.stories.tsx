import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { AssessedBy } from './AssessedBy';

export default {
  title: 'AssessedBy',
  component: AssessedBy,
};

const Template: StoryFn<ComponentProps<typeof AssessedBy>> = () => <AssessedBy ident="navn" date="2023-01-01" />;

export const Default = Template.bind({});
