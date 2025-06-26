import { composeStories } from '@storybook/react-vite';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './RhfSelect.stories';

export const { Default } = composeStories(stories);

describe('RhfSelect', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er en dropdown')).toBeInTheDocument();
    await userEvent.selectOptions(screen.getByLabelText('Dette er en dropdown'), 'value1');
    expect((screen.getByText('Test 1') as HTMLOptionElement).selected).toBeTruthy();
  });
});
