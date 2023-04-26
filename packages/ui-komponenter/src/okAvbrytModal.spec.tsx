import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { Modal } from '@navikt/ds-react';
import * as stories from './OkAvbrytModal.stories';

const { Default } = composeStories(stories);

describe('<OkAvbrytModal>', () => {
  if (Modal.setAppElement) {
    Modal.setAppElement('body');
  }

  it('skal rendre modal', async () => {
    render(<Default />);

    expect(await screen.findByText('Dette er ein test')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeInTheDocument();
    expect(screen.getByText('Avbryt')).toBeInTheDocument();
  });
});
