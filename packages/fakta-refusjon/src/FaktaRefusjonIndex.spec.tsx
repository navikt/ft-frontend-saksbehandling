import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';

import * as stories from './FaktaRefusjonIndex.stories';

const { Default } = composeStories(stories);

describe('FaktaRefusjonIndex', () => {
  it('skal vise overskrift', async () => {
    render(<Default />);

    expect(await screen.findByRole('heading', { level: 2, name: 'Fakta om refusjon' })).toBeInTheDocument();
  });
});
