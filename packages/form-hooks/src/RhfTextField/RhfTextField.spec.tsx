import { composeStories } from '@storybook/react-vite';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './RhfTextField.stories';

export const { Default } = composeStories(stories);

describe('RhfTextField', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er et inputfelt')).toBeInTheDocument();
    expect(screen.getByLabelText('Dette er et inputfelt')).toHaveValue('');
    await userEvent.type(screen.getByLabelText('Dette er et inputfelt'), 'Dette er en vurdering');
    expect(screen.getByLabelText('Dette er et inputfelt')).toHaveValue('Dette er en vurdering');
  });
});
