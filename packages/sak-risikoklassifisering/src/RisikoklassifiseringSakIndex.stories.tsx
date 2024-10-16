import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AksjonspunktStatus, KodeverkType } from '@navikt/ft-kodeverk';
import { Aksjonspunkt, Risikoklassifisering } from '@navikt/ft-types';
import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';

import kontrollresultatKode from './kodeverk/kontrollresultatKode';
import RisikoklassifiseringSakIndex from './RisikoklassifiseringSakIndex';
import RisikoklassifiseringAksjonspunktCode from './RisikoklassifiseringAksjonspunktCode';

import '@navikt/ds-css';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const withWidthProvider = (story: any) => <div style={{ width: '600px' }}>{story()}</div>;

export default {
  title: 'sak/sak-risikoklassifisering',
  component: RisikoklassifiseringSakIndex,
  decorators: [withWidthProvider],
};

const Template: StoryFn<{
  risikoklassifisering?: Risikoklassifisering;
  aksjonspunkt?: Aksjonspunkt;
  submitAksjonspunkt: () => Promise<any>;
}> = ({ risikoklassifisering, aksjonspunkt, submitAksjonspunkt }) => {
  const [isOpen, toggleOpen] = useState(true);

  return (
    <RisikoklassifiseringSakIndex
      risikoklassifisering={risikoklassifisering}
      aksjonspunkt={aksjonspunkt}
      isPanelOpen={isOpen}
      readOnly={false}
      submitAksjonspunkt={submitAksjonspunkt}
      toggleRiskPanel={() => toggleOpen(!isOpen)}
      faresignalVurderinger={alleKodeverk[KodeverkType.FARESIGNAL_VURDERING]}
    />
  );
};

export const IngenRisikoklassifisering = Template.bind({});
IngenRisikoklassifisering.args = {
  submitAksjonspunkt: action('button-click') as () => Promise<any>,
};

export const LavRisikoklassifisering = Template.bind({});
LavRisikoklassifisering.args = {
  risikoklassifisering: {
    kontrollresultat: kontrollresultatKode.IKKE_HOY,
  },
  submitAksjonspunkt: action('button-click') as () => Promise<any>,
};

export const HøyRisikoklassifisering = Template.bind({});
HøyRisikoklassifisering.args = {
  aksjonspunkt: {
    definisjon: RisikoklassifiseringAksjonspunktCode.VURDER_FARESIGNALER,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
  } as Aksjonspunkt,
  risikoklassifisering: {
    kontrollresultat: kontrollresultatKode.HOY,
    medlFaresignaler: {
      faresignaler: ['Faresignal 1'],
    },
    iayFaresignaler: {
      faresignaler: ['Faresignal 2', 'Faresignal 3', 'Faresignal 4'],
    },
  },
  submitAksjonspunkt: action('button-click') as () => Promise<any>,
};
