import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';

import * as stories from './Dagsatser.stories';

const {
  FastsattBGMedUtregnetDagsatser,
  VilkårIkkeOppfyltMedDagsatsNull,
  VilkårIkkeOppfyltUtenDagsats,
  VisesIkkeForIkkeFastsatt,
} = composeStories(stories);

describe('Dagsatser', () => {
  it('skal vise beregnet dagsats når vilkåret er oppfylt', () => {
    render(<FastsattBGMedUtregnetDagsatser />);
    expect(screen.getByText('Beregning av dagsats')).toBeInTheDocument();
    expect(screen.getByText('Dagsats')).toBeInTheDocument();
  });

  it('skal vise avslagstekst når dagsatsen er 0 og vilkåret ikke er oppfylt', () => {
    render(<VilkårIkkeOppfyltMedDagsatsNull />);
    expect(screen.getByText('Beregning av dagsats')).toBeInTheDocument();
    expect(screen.getByText(/Beløpet er under 1\/2 G/)).toBeInTheDocument();
  });

  it('skal vise avslagstekst når dagsats mangler og vilkåret ikke er oppfylt', () => {
    render(<VilkårIkkeOppfyltUtenDagsats />);
    expect(screen.getByText('Beregning av dagsats')).toBeInTheDocument();
    expect(screen.getByText(/Beløpet er under 1\/2 G/)).toBeInTheDocument();
  });

  it('skal ikke vise panelet når beregningen ikke er fastsatt', () => {
    render(<VisesIkkeForIkkeFastsatt />);
    expect(screen.queryByText('Beregning av dagsats')).not.toBeInTheDocument();
  });
});
