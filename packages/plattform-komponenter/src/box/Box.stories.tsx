import { StoryFn } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { Box, Margin } from './Box';

export default {
  title: 'Box',
  component: Box,
};

const Template: StoryFn<ComponentProps<typeof Box>> = args => (
  <Box {...args} marginTop={Margin.xxLarge} marginBottom={Margin.large}>
    <p>Dette er en box</p>
  </Box>
);

export const BoxComponent = Template.bind({});
BoxComponent.args = {};
