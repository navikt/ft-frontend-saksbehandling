import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import TitleWithUnderlineComponent from './TitleWithUnderline';

export default {
  title: 'Title with underline',
  component: TitleWithUnderlineComponent,
};

const Template: Story<ComponentProps<typeof TitleWithUnderlineComponent>> = () => (
  <TitleWithUnderlineComponent>Title</TitleWithUnderlineComponent>
);

export const TitleWithUnderline = Template.bind({});
TitleWithUnderline.args = {};
