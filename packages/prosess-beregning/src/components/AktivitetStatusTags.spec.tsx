import { composeStories } from '@storybook/react-vite';
import { render, screen, within } from '@testing-library/react';

import * as stories from './AktivitetStatusTags.stories';

const { AlleStatuser, MedTilkommenAndel, MedDuplikater } = composeStories(stories);

const hentTagger = () =>
  within(screen.getByRole('list', { name: 'Aktivitetstyper i beregningsgrunnlaget' }))
    .getAllByRole('listitem')
    .map(li => li.textContent);

describe('AktivitetStatusTags', () => {
  it('skal rendre en tag per unik aktivitetstype', () => {
    render(<AlleStatuser />);
    expect(hentTagger()).toHaveLength(18);
  });

  it('skal ikke ta med tilkomne andeler', () => {
    render(<MedTilkommenAndel />);
    expect(hentTagger()).toEqual(['Arbeidstaker']);
  });

  it('skal deduplisere like aktivitetstyper på tvers av andeler og perioder', () => {
    render(<MedDuplikater />);
    expect(hentTagger()).toEqual(['Arbeidstaker']);
  });
});
