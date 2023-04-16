import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import ForbiddenPage from './ForbiddenPage';
import NotFoundPage from './NotFoundPage';
import UnauthorizedPage from './UnauthorizedPage';
import IngenBehandlingValgtPanel from './IngenBehandlingValgtPanel';

import '@navikt/ds-css';

export default {
  title: 'sak/sak-infosider',
};

export const HarIkkeTilgang: Story = () => <ForbiddenPage renderSomLenke={tekst => <a href="test">{tekst}</a>} />;

export const SideIkkeFunnet: Story = () => <NotFoundPage renderSomLenke={tekst => <a href="test">{tekst}</a>} />;

export const IkkeInnloggetBruker: Story = () => (
  <UnauthorizedPage renderSomLenke={tekst => <a href="test">{tekst}</a>} />
);

export const BehandlingErIkkeValgt: Story = () => <IngenBehandlingValgtPanel numBehandlinger={2} />;

export const BehandlingerFinnesIkke: Story = () => <IngenBehandlingValgtPanel numBehandlinger={0} />;
