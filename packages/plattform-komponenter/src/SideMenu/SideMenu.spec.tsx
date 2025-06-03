import { composeStories } from '@storybook/react-vite';
import { screen } from '@testing-library/react';

import * as stories from './SideMenu.stories';

const { Default } = composeStories(stories);

describe('SideMenu', () => {
  it('skal vise side meny med et aktivt element', async () => {
    await Default.run();

    expect(await screen.findByText('Fakta om')).toBeInTheDocument();
    expect(screen.getByText('Saken')).toBeInTheDocument();
    expect(screen.getByText('Medlemskap')).toBeInTheDocument();
    expect(screen.getByText('Arbeid og inntekt')).toBeInTheDocument();

    expect(screen.getByText('Opptjening')).toBeInTheDocument();
    expect(screen.getByText('Opptjening').closest('li')).toHaveAttribute('aria-current', 'true');
    expect(screen.getByText('Opptjening').closest('button')).toHaveClass(/.menuLink__button__active/);
  });
});
