import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import LinkButtonComponent from './LinkButton';

export default {
  title: 'Link button',
  component: LinkButtonComponent,
};

const Template: Story<ComponentProps<typeof LinkButtonComponent>> = () => (
  <LinkButtonComponent onClick={() => console.log('I was clicked')}>Click me</LinkButtonComponent>
);

export const LinkButton = Template.bind({});
LinkButton.args = {};
