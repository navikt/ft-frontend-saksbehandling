import { composeStories } from '@storybook/react-vite';
import { render, screen, within } from '@testing-library/react';

import * as stories from './Naturalytelser.stories';

const { IngenNaturalytelser, EnNaturalytelse, TreNaturalytelser } = composeStories(stories);

describe('Naturalytelser', () => {
  it('skal ikke vise innhold når det ikke finnes naturalytelser', () => {
    render(<IngenNaturalytelser />);

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.queryByText('Naturalytelse:')).not.toBeInTheDocument();
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
  });

  it('skal vise én periode som tekst i et avsnitt', () => {
    render(<EnNaturalytelse />);

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toHaveTextContent(
      '1 000 kr per mnd og 12 000 kr per år i perioden 01.01.2026 - 31.01.2026',
    );
  });

  it('skal vise tre perioder som tabell uten å legge den i et avsnitt', () => {
    render(<TreNaturalytelser />);

    const rader = within(screen.getByRole('table')).getAllByRole('row');
    expect(rader).toHaveLength(4);
    expect(rader[0]).toHaveTextContent('Måned');
    expect(rader[0]).toHaveTextContent('År');
    expect(rader[1]).toHaveTextContent('01.01.2026 - 31.01.2026');
    expect(rader[1]).toHaveTextContent('1 000 kr');
    expect(rader[1]).toHaveTextContent('12 000 kr');
    expect(rader[2]).toHaveTextContent('01.02.2026 - 28.02.2026');
    expect(rader[2]).toHaveTextContent('1 500 kr');
    expect(rader[2]).toHaveTextContent('18 000 kr');
    expect(rader[3]).toHaveTextContent('01.03.2026 - 31.03.2026');
    expect(rader[3]).toHaveTextContent('2 000 kr');
    expect(rader[3]).toHaveTextContent('24 000 kr');
  });
});
