import React from 'react';

import { StoryFn } from '@storybook/react';

import { AvsnittSkiller } from './AvsnittSkiller';

export default {
  title: 'AvsnittSkiller',
  component: AvsnittSkiller,
};

export const Default: StoryFn = () => (
  <div>
    Dette er en tekst
    <AvsnittSkiller />
    Dette er en tekst
  </div>
);
