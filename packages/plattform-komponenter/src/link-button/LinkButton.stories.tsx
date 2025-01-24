import { ComponentProps } from 'react';

import { StoryFn } from '@storybook/react';

import { LinkButton } from './LinkButton';

export default {
  title: 'Link button',
  component: LinkButton,
};

const Template: StoryFn<ComponentProps<typeof LinkButton>> = () => (
  // eslint-disable-next-line no-console
  <LinkButton onClick={() => console.log('I was clicked')}>Click me</LinkButton>
);

export const Default = Template.bind({});
Default.args = {};
