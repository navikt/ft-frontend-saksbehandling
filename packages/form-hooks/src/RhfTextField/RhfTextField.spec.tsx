import { FormProvider, useForm } from 'react-hook-form';

import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import { RhfTextField } from './RhfTextField';
import * as stories from './RhfTextField.stories';

export const { Default } = composeStories(stories);

describe('RhfTextField', () => {
  it('viser numerisk null både som startverdi og etter redigering', async () => {
    const Skjema = () => {
      const formMethods = useForm({ defaultValues: { beløp: 0 } });
      return (
        <FormProvider {...formMethods}>
          <RhfTextField control={formMethods.control} name="beløp" label="Beløp" parse={Number} />
        </FormProvider>
      );
    };
    render(<Skjema />);
    const felt = screen.getByRole('textbox', { name: 'Beløp' });
    expect(felt).toHaveValue('0');
    await userEvent.clear(felt);
    expect(felt).toHaveValue('');
    await userEvent.type(felt, '0');
    expect(felt).toHaveValue('0');
  });

  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er et inputfelt')).toBeInTheDocument();
    expect(screen.getByLabelText('Label')).toHaveValue('');
    await userEvent.type(screen.getByLabelText('Label'), 'Dette er en vurdering');
    expect(screen.getByLabelText('Label')).toHaveValue('Dette er en vurdering');
  });
});
