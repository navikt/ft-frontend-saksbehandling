import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';

import * as stories from './FaktaRefusjonIndex.stories';

const { Default } = composeStories(stories);

describe('FaktaRefusjonIndex', () => {
  it('skal vise overskrift', async () => {
    render(<Default />);

    expect(await screen.findByRole('heading', { level: 2, name: 'Fakta om refusjon' })).toBeInTheDocument();
    expect(
      screen.getByText(
        'Brunostfabrikken AS og Nordlys Teknologi AS har refusjonsperioder uten registrert utfall. Vurder om kravene skal tas med i beregningen.',
      ),
    ).toBeInTheDocument();
  });
});
