import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './WarningModal.stories';

const { Default } = composeStories(stories);

describe('<WarningModal>', () => {
  it('skal rendre modal', async () => {
    render(<Default />);
    expect(await screen.findByText('Dette er en advarsel')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeInTheDocument();
  });
});
