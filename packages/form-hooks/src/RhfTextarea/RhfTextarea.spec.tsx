import { composeStories } from '@storybook/react-vite';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './RhfTextarea.stories';

export const { Default } = composeStories(stories);

describe('RhfTextarea', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er et tekstfelt')).toBeInTheDocument();
    expect(screen.getByLabelText('Dette er et tekstfelt')).toHaveValue('');
    await userEvent.type(screen.getByLabelText('Dette er et tekstfelt'), 'Dette er en vurdering');
    expect(screen.getByLabelText('Dette er et tekstfelt')).toHaveValue('Dette er en vurdering');
  });
});
