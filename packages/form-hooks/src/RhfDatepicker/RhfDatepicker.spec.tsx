import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { expect, vi } from 'vitest';

import { RhfForm } from '../RhfForm';
import { RhfDatepicker } from './RhfDatepicker';

import * as stories from './RhfDatepicker.stories';

export const { Default } = composeStories(stories);

const TestForm = ({ onSubmit }: { onSubmit: SubmitHandler<{ dato: string }> }) => {
  const formMethods = useForm<{ dato: string }>({
    defaultValues: {
      dato: '',
    },
  });

  return (
    <RhfForm formMethods={formMethods} onSubmit={onSubmit}>
      <RhfDatepicker
        control={formMethods.control}
        name="dato"
        label="Dato"
        inputFormats={['DD-MM-YYYY', 'DDMMYY']}
      />
      <button type="submit">Submit</button>
    </RhfForm>
  );
};

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

  it('skal parse DD-MM-YYYY til ISO ved submit', async () => {
    const onSubmit = vi.fn();
    const { container } = render(<TestForm onSubmit={onSubmit} />);

    const input = within(container).getByLabelText('Dato');
    await userEvent.type(input, '01-02-2020');
    fireEvent.blur(input);
    await userEvent.click(within(container).getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toEqual({
      dato: '2020-02-01',
    });
  });

  it('skal parse DDMMYY til ISO ved submit', async () => {
    const onSubmit = vi.fn();
    const { container } = render(<TestForm onSubmit={onSubmit} />);

    const input = within(container).getByLabelText('Dato');
    await userEvent.type(input, '010220');
    fireEvent.blur(input);
    await userEvent.click(within(container).getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toEqual({
      dato: '2020-02-01',
    });
  });
});
