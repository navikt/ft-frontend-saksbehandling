import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import ExpandablePanelComponent from './ExpandablePanel';

export default {
  title: 'Expandable panel',
  component: ExpandablePanelComponent,
};

const Template: StoryFn<ComponentProps<typeof ExpandablePanelComponent>> = () => (
  <ExpandablePanelComponent renderHeader={() => null} isOpen onClick={() => null}>
    <p>Dette er en test</p>
  </ExpandablePanelComponent>
);

export const ExpandablePanel = Template.bind({});
ExpandablePanel.args = {};
