import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import StatefulSideMenuComponent from './StatefulSideMenu';

export default {
  title: 'Side menu',
  component: StatefulSideMenuComponent,
};

const Template: StoryFn<ComponentProps<typeof StatefulSideMenuComponent>> = () => (
  <StatefulSideMenuComponent
    heading="Dette er en test"
    links={[
      {
        label: 'en link',
        active: true,
      },
      {
        label: 'en link til',
      },
    ]}
    onClick={() => null}
  />
);

export const StatefulSideMenu = Template.bind({});
StatefulSideMenu.args = {};
