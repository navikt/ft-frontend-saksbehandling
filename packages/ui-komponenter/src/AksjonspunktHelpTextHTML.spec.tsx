import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import * as stories from './AksjonspunktHelpTextHTML.stories';

const { Default, SkalIkkeVisesNårDetIkkeErAksjonspunkter, FlereSammensatteChildren } = composeStories(stories);

describe('AksjonspunktHelpTextHTML', () => {
  it('Skal teste at aksjonspunkt-hjelpetekster viser riktig', async () => {
    render(<Default />);
    expect(screen.getByTestId('aksjonspunkt-text-container').children).toHaveLength(2);
    expect(await screen.findByText('Dette er en aksjonspunktmelding')).toBeInTheDocument();
    expect(screen.getByText('Dette er en annen aksjonspunktmelding')).toBeInTheDocument();
  });

  it('Skal ikke vise noe når det ikke er aksjonspunkter', async () => {
    render(<SkalIkkeVisesNårDetIkkeErAksjonspunkter />);
    expect(screen.queryByTestId('aksjonspunkt-text-container')).not.toBeInTheDocument();
    expect(screen.queryByText('Dette er en aksjonspunktmelding')).not.toBeInTheDocument();
  });

  it('Skal vise flere sammensatte children', async () => {
    render(<FlereSammensatteChildren />);
    expect(screen.getByTestId('aksjonspunkt-text-container').children).toHaveLength(2);
    expect(screen.getByText('andre element')).toBeInTheDocument();
    expect(screen.getByText('tredje element')).toBeInTheDocument();
  });
});
