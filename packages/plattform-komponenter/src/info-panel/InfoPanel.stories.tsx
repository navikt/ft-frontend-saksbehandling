import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import { InfoPanel } from './InfoPanel';

export default {
  title: 'Info panel',
  component: InfoPanel,
};

const Template: StoryFn<ComponentProps<typeof InfoPanel>> = () => (
  <>
    <InfoPanel type="success">En type informasjon</InfoPanel>
    <InfoPanel type="warning">En annen type informasjon</InfoPanel>
  </>
);

export const Default = Template.bind({});
Default.args = {};
