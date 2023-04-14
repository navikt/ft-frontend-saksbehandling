import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import DetailViewComponent from './DetailView';

export default {
  title: 'Detail view',
  component: DetailViewComponent,
};

const Template: StoryFn<ComponentProps<typeof DetailViewComponent>> = () => (
  <DetailViewComponent title="Tittel">
    <p>Detaljer</p>
  </DetailViewComponent>
);

export const DetailView = Template.bind({});
DetailView.args = {};
