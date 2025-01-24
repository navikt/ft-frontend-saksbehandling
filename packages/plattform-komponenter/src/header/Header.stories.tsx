import { ComponentProps } from 'react';

import { StoryFn } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
};

const HeaderTemplate: StoryFn<ComponentProps<typeof Header>> = () => (
  <Header title="Tittel" titleHref="href">
    <div style={{ color: 'white' }}>test</div>
  </Header>
);

export const Default = HeaderTemplate.bind({});
Default.args = {};
