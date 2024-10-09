import React from 'react';
import { StoryFn } from '@storybook/react';

import AksjonspunktHelpTextTemp from './AksjonspunktHelpTextTemp';

export default {
  title: 'AksjonspunktHelpTextTemp',
  component: AksjonspunktHelpTextTemp,
};

export const HjelpeteksterNårAksjonspunktetErÅpent: StoryFn = () => (
  <AksjonspunktHelpTextTemp isAksjonspunktOpen>
    {['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding']}
  </AksjonspunktHelpTextTemp>
);

export const HjelpeteksterNårAksjonspunktetErLukket: StoryFn = () => (
  <AksjonspunktHelpTextTemp isAksjonspunktOpen={false}>
    {['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding']}
  </AksjonspunktHelpTextTemp>
);
