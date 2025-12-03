import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './BeregningProsessIndex.stories';

const { VisningAvFaktaUtenAksjonspunkt } = composeStories(stories);
describe('BeregningProsessIndex', () => {
  it('skal rendre komponent', async () => {
    render(<VisningAvFaktaUtenAksjonspunkt />);

    expect(screen.getByText('Grunnlag for beregning')).toBeInTheDocument();
    expect(screen.getByLabelText('Skjæringsgrunnlag')).toHaveValue('0');
    await userEvent.selectOptions(screen.getByLabelText('Skjæringsgrunnlag'), '1');
    expect(screen.getByLabelText('Skjæringsgrunnlag')).toHaveValue('1');
  });
});
