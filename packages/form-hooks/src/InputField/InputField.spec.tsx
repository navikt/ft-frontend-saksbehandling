import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './InputField.stories';

export const { Default } = composeStories(stories);

describe('<InputField>', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er et inputfelt')).toBeInTheDocument();
    expect(screen.getByLabelText('Dette er et inputfelt')).toHaveValue('');
    await userEvent.type(screen.getByLabelText('Dette er et inputfelt'), 'Dette er en vurdering');
    expect(screen.getByLabelText('Dette er et inputfelt')).toHaveValue('Dette er en vurdering');
  });
});
