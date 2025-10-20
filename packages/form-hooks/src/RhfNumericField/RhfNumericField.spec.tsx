import { composeStories } from '@storybook/react-vite';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './RhfNumericField.stories';

export const { Default } = composeStories(stories);

describe('RhfNumericField', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er et numberfelt')).toBeInTheDocument();
    expect(screen.getByLabelText('Dette er et numberfelt')).toHaveValue('');
    await userEvent.type(screen.getByLabelText('Dette er et numberfelt'), '27,667');
    expect(screen.getByLabelText('Dette er et numberfelt')).toHaveValue('27,66');
  });
});
