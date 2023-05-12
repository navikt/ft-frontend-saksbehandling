import React, { ComponentProps } from 'react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
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
      },
      {
        label: 'en link til',
      },
      {
        icon: <ExclamationmarkTriangleFillIcon title="Dette er en ikontittel" style={{ color: 'orange' }} />,
        label: 'en link med ikon',
        active: true,
      },
    ]}
    onClick={() => null}
  />
);

export const StatefulSideMenu = Template.bind({});
StatefulSideMenu.args = {};
