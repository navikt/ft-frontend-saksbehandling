import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import Modal from 'nav-frontend-modal';

import * as stories from './WarningModal.stories';

const { Default } = composeStories(stories);

describe('<WarningModal>', () => {
  Modal.setAppElement('body');
  it('skal rendre modal', async () => {
    render(<Default />);
    expect(await screen.findByText('Dette er en advarsel')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeInTheDocument();
  });
});
