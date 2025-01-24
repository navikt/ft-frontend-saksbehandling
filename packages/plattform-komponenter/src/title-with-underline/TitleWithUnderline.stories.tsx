import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import { TitleWithUnderline } from './TitleWithUnderline';

export default {
  title: 'Title with underline',
  component: TitleWithUnderline,
};

const Template: StoryFn<ComponentProps<typeof TitleWithUnderline>> = () => (
  <TitleWithUnderline>Title</TitleWithUnderline>
);

export const Default = Template.bind({});
Default.args = {};
