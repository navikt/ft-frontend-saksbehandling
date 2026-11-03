import { composeStories } from '@storybook/react-vite';
import { render, screen, within } from '@testing-library/react';

import { arbeidstakerFPEttArbeidsforhold } from '../../../testdata/arbeidstakerFPEttArbeidsforhold';
import * as stories from './Avviksberegninger.stories';

const { AvviksberegningerFlereTyper } = composeStories(stories);

describe('Avviksberegninger', () => {
  it.each([
    {
      type: 'SAMMENLIGNING_AT',
      navn: 'Avviksberegning for arbeidstaker',
      inntektstekst: /Beregnet årsinntekt/,
      sammenligningstekst: 'Sammenligningsgrunnlag § 8-30',
    },
    {
      type: 'SAMMENLIGNING_FL',
      navn: 'Avviksberegning for frilans',
      inntektstekst: /Beregnet årsinntekt/,
      sammenligningstekst: 'Sammenligningsgrunnlag § 8-30',
    },
    {
      type: 'SAMMENLIGNING_AT_FL',
      navn: 'Avviksberegning for arbeidstaker og frilans',
      inntektstekst: /Beregnet årsinntekt/,
      sammenligningstekst: 'Sammenligningsgrunnlag § 8-30',
    },
    {
      type: 'SAMMENLIGNING_SN',
      navn: 'Avviksberegning for selvstendig næring',
      inntektstekst: /Pensjonsgivende inntekt/,
      sammenligningstekst: 'Samlet inntekt',
    },
    {
      type: 'SAMMENLIGNING_ATFL_SN',
      navn: 'Avviksberegning for arbeidstaker, frilans og selvstendig næring',
      inntektstekst: /Pensjonsgivende inntekt/,
      sammenligningstekst: 'Samlet inntekt',
    },
    {
      type: 'SAMMENLIGNING_MIDL_INAKTIV',
      navn: 'Avviksberegning for midlertidig inaktiv',
      inntektstekst: /Pensjonsgivende inntekt/,
      sammenligningstekst: 'Samlet inntekt',
    },
  ] as const)(
    'skal bare vise $navn med riktige tekster når $type er valgt',
    ({ type, navn, inntektstekst, sammenligningstekst }) => {
      render(<AvviksberegningerFlereTyper visBareSammenligningTyper={[type]} />);

      expect(screen.getAllByRole('region')).toHaveLength(1);
      const panel = screen.getByRole('region', { name: navn });
      expect(within(panel).getByRole('cell', { name: inntektstekst })).toBeInTheDocument();
      expect(within(panel).getByText(sammenligningstekst)).toBeInTheDocument();
      expect(within(panel).getByText('Beregnet avvik')).toBeInTheDocument();
    },
  );

  it('skal skjule panelene når ingen sammenligningsgrunnlag passer filteret', () => {
    render(
      <AvviksberegningerFlereTyper
        beregningsgrunnlag={arbeidstakerFPEttArbeidsforhold.beregningsgrunnlagListe[0]}
        visBareSammenligningTyper={['SAMMENLIGNING_FL']}
      />,
    );

    expect(screen.queryAllByRole('region')).toHaveLength(0);
  });

  it('skal skjule panelene når filteret er tomt', () => {
    render(<AvviksberegningerFlereTyper visBareSammenligningTyper={[]} />);

    expect(screen.queryAllByRole('region')).toHaveLength(0);
  });
});
