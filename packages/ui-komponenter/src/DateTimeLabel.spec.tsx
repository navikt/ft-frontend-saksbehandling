import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './DateTimeLabel.stories';

const { Default, MedTilpassetUtrykk } = composeStories(stories);

describe('DateTimeLabel', () => {
  it('skal vise dato med default format', async () => {
    render(<Default />);

    expect(await screen.findByText('02.05.2024 - 09:54')).toBeInTheDocument();
  });

  it('skal vise datetime med tilpasset format', async () => {
    render(<MedTilpassetUtrykk />);

    expect(await screen.findByText('2. mai 24 kl. 09:54:21')).toBeInTheDocument();
  });
});
