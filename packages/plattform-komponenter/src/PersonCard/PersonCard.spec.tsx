import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';

import * as stories from './PersonCard.stories';

const { MedMenyOgAlder } = composeStories(stories);

describe('PersonCard', () => {
  it('skal gi menyknappen et tilgjengelig navn', () => {
    render(<MedMenyOgAlder />);
    expect(screen.getByRole('button', { name: 'Åpne meny' })).toHaveAttribute('aria-expanded', 'false');
  });
});
