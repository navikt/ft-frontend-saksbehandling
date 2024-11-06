import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Rangepicker.stories';

export const { Default } = composeStories(stories);

describe('<Rangepicker>', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er en rangepicker')).toBeInTheDocument();

    expect(screen.getByLabelText('Fra dato')).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText('Fra dato'), '01.02.2020');
    fireEvent.blur(screen.getByLabelText('Fra dato'));

    await userEvent.type(screen.getByLabelText('Til dato'), '01.02.2022');
    fireEvent.blur(screen.getByLabelText('Til dato'));

    expect(screen.getByLabelText('Fra dato')).toHaveValue('01.02.2020');
    expect(screen.getByLabelText('Til dato')).toHaveValue('01.02.2022');
  });
});
