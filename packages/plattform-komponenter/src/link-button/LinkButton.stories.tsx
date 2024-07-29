import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import LinkButtonComponent from './LinkButton';

export default {
  title: 'Link button',
  component: LinkButtonComponent,
};

const Template: StoryFn<ComponentProps<typeof LinkButtonComponent>> = () => (
  // eslint-disable-next-line no-console
  <LinkButtonComponent onClick={() => console.log('I was clicked')}>Click me</LinkButtonComponent>
);

export const LinkButton = Template.bind({});
LinkButton.args = {};
