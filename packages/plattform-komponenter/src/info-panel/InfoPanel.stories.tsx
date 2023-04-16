import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import InfoPanelComponent from './InfoPanel';

export default {
  title: 'Info panel',
  component: InfoPanelComponent,
};

const Template: Story<ComponentProps<typeof InfoPanelComponent>> = () => (
  <>
    <InfoPanelComponent type="success">En type informasjon</InfoPanelComponent>
    <InfoPanelComponent type="warning">En annen type informasjon</InfoPanelComponent>
  </>
);

export const InfoPanel = Template.bind({});
InfoPanel.args = {};
