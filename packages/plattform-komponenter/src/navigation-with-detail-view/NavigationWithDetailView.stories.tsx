import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import { DetailView } from '../detail-view/DetailView';
import { NavigationWithDetailView } from './NavigationWithDetailView';

export default {
  title: 'Navigation with detail',
  component: NavigationWithDetailView,
};

const Template: StoryFn<ComponentProps<typeof NavigationWithDetailView>> = args => {
  const navigationSection = () => <p>Navigasjon</p>;
  const detailSection = () => (
    <DetailView title="Tittel">
      <p>Detaljer</p>
    </DetailView>
  );
  return (
    <NavigationWithDetailView
      {...args}
      navigationSection={navigationSection}
      showDetailSection
      detailSection={detailSection}
    />
  );
};

export const NavigationWithDetail = Template.bind({});
NavigationWithDetail.args = {};
