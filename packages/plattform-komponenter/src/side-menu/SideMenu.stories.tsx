import { StoryFn } from '@storybook/react';
import React, { ComponentProps } from 'react';
import WarningIcon from '../icons/WarningIcon';
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
      },
      {
        label: 'en link til',
      },
      {
        icon: <WarningIcon />,
        label: 'en link med ikon',
        active: true,
      },
    ]}
    onClick={() => null}
  />
);

export const StatefulSideMenu = Template.bind({});
StatefulSideMenu.args = {};
