import { composeStories } from '@storybook/react-vite';
import { render, screen, within } from '@testing-library/react';

import * as stories from './NæringsInntekt.stories';

const {
  BrukerMedBådeLønnOgNæring,
  SelvstendigNæringsdrivende,
  UtenDetaljertPgiGrunnlag,
  UtenNæringsandel,
  UtenPgiSnitt,
} = composeStories(stories);

describe('NæringsInntekt', () => {
  it('skal vise år i synkende rekkefølge og inntektsverdier', () => {
    render(<SelvstendigNæringsdrivende />);

    const region = screen.getByRole('region', { name: 'Pensjonsgivende inntekt' });
    const table = within(region).getByRole('table');
    const rows = within(table)
      .getAllByRole('row')
      .filter(row => within(row).queryAllByRole('cell').length > 0);
    expect(rows.map(row => within(row).getAllByRole('cell')[0]?.textContent)).toEqual(['2023', '2022', '2021']);

    expectCells(within(table).getByRole('row', { name: /2023/ }), [
      '2023',
      '250 000 kr',
      '0 kr',
      '250 000',
      '266 752 kr',
    ]);
    expectCells(within(table).getByRole('row', { name: /2022/ }), [
      '2022',
      '100 000 kr',
      '100 000 kr',
      '200 000',
      '225 949 kr',
    ]);
    expectCells(within(table).getByRole('row', { name: /2021/ }), [
      '2021',
      '200 000 kr',
      '200 000 kr',
      '400 000',
      '473 769 kr',
    ]);

    const averageRow = within(table).getByRole('row', { name: /Gjennomsnittlig pensjonsgivende inntekt/ });
    expect(within(averageRow).getByText(/322\s157/)).toBeInTheDocument();
  });

  it('skal vise panelet for andel med aktivitet BA', () => {
    render(<BrukerMedBådeLønnOgNæring />);

    expect(screen.getByRole('region', { name: 'Pensjonsgivende inntekt' })).toBeInTheDocument();
  });

  it('skal vise null for inntektsgrunnlag som mangler', () => {
    render(<UtenDetaljertPgiGrunnlag />);

    const table = within(screen.getByRole('region', { name: 'Pensjonsgivende inntekt' })).getByRole('table');
    expect(table).toBeInTheDocument();
    expectCells(within(table).getByRole('row', { name: /2023/ }), ['2023', '0 kr', '0 kr', '0', '266 752 kr']);
  });

  it('skal skjule panelet når grunnlaget ikke har en næringsandel', () => {
    render(<UtenNæringsandel />);

    expect(screen.queryByRole('region', { name: 'Pensjonsgivende inntekt' })).not.toBeInTheDocument();
  });

  it('skal skjule panelet når gjennomsnittet er null', () => {
    render(<UtenPgiSnitt />);

    expect(screen.queryByRole('region', { name: 'Pensjonsgivende inntekt' })).not.toBeInTheDocument();
  });
});

const expectCells = (row: HTMLElement, values: string[]) => {
  const cells = within(row).getAllByRole('cell');
  expect(cells.map(cell => (cell.textContent ?? '').replace(/\s+/g, ' ').trim())).toEqual(values);
};
