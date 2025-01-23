import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { DetailView } from './DetailView';

export default {
  title: 'Detail view',
  component: DetailView,
};

const Template: StoryFn<ComponentProps<typeof DetailView>> = () => (
  <DetailView title="Tittel">
    <p>Detaljer</p>
  </DetailView>
);

export const Default = Template.bind({});
Default.args = {};
