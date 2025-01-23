import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './FlexContainer.stories';

const { Default } = composeStories(stories);

describe('<FlexContainer>', () => {
  it('skal rendre korrekt', async () => {
    // @ts-expect-error Fjern når fiksa
    render(<Default />);

    expect(await screen.findByText('Tekst 1')).toBeInTheDocument();
    expect(screen.getByText('Tekst 2')).toBeInTheDocument();
    expect(screen.getByText('Tekst 3')).toBeInTheDocument();
    expect(screen.getByText('Tekst 4')).toBeInTheDocument();
    expect(screen.getByText('Tekst 5')).toBeInTheDocument();
    expect(screen.getByText('Tekst 6')).toBeInTheDocument();
  });
});
