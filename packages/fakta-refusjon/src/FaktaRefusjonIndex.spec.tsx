import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';

import * as stories from './FaktaRefusjonIndex.stories';

const { Default } = composeStories(stories);

describe('FaktaRefusjonIndex', () => {
  it('skal vise overskrift, aksjonspunkttekst og refusjonsskjema', () => {
    render(<Default />);

    expect(screen.getByRole('heading', { level: 2, name: 'Fakta om refusjon' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'Vurder refusjonskrav uten registrert utfall' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Utbetaling' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Refusjonskrav' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeDisabled();
  });
});
