import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import TitleWithUnderlineComponent from './TitleWithUnderline';

export default {
  title: 'Title with underline',
  component: TitleWithUnderlineComponent,
};

const Template: StoryFn<ComponentProps<typeof TitleWithUnderlineComponent>> = () => (
  <TitleWithUnderlineComponent>Title</TitleWithUnderlineComponent>
);

export const TitleWithUnderline = Template.bind({});
TitleWithUnderline.args = {};
