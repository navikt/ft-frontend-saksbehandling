import { composeStories } from '@storybook/react-vite';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './RhfDatepicker.stories';

export const { Default } = composeStories(stories);

describe('RhfDatepicker', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er en datepicker')).toBeInTheDocument();
    expect(screen.getByText('Dette er en nærmere beskrivelse')).toBeInTheDocument();
    const datofelt = screen.getByText('Dette er en datepicker');
    await userEvent.type(datofelt, '01.02.2020');
    fireEvent.blur(datofelt);

    expect(screen.getByLabelText('Dette er en datepicker')).toHaveValue('01.02.2020');
  });
});
