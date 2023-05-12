import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { Modal } from '@navikt/ds-react';

import * as stories from './WarningModal.stories';

const { Default } = composeStories(stories);

describe('<WarningModal>', () => {
  if (Modal.setAppElement) {
    Modal.setAppElement('body');
  }

  it('skal rendre modal', async () => {
    render(<Default />);
    expect(await screen.findByText('Dette er en advarsel')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeInTheDocument();
  });
});
