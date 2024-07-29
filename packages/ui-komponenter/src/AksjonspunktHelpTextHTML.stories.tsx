import React from 'react';
import { StoryFn } from '@storybook/react';

import AksjonspunktHelpTextHTML from './AksjonspunktHelpTextHTML';

export default {
  title: 'AksjonspunktHelpTextHTML',
  component: AksjonspunktHelpTextHTML,
};

export const Default: StoryFn = () => (
  <AksjonspunktHelpTextHTML>
    {['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding']}
  </AksjonspunktHelpTextHTML>
);

export const SkalIkkeVisesNårDetIkkeErAksjonspunkter: StoryFn = () => (
  <AksjonspunktHelpTextHTML>{[]}</AksjonspunktHelpTextHTML>
);
