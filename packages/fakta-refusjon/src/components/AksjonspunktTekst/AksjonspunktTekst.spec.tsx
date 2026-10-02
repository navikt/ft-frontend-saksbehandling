import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { refusjonsandelerForTreArbeidsgivere } from '../../../testdata/refusjonsandeler';
import * as stories from './AksjonspunktTekst.stories';

const { Default } = composeStories(stories);

describe('AksjonspunktTekst', () => {
  it('viser arbeidsgivere som har refusjonsperioder uten utfall', () => {
    render(<Default />);

    expect(
      screen.getByRole('heading', { level: 3, name: 'Vurder refusjonskrav uten registrert utfall' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Brunostfabrikken AS og Nordlys Teknologi AS har refusjonsperioder uten registrert utfall. Vurder om kravene skal tas med i beregningen.',
      ),
    ).toBeInTheDocument();
  });

  it('skal skjule teksten når aksjonspunktet er lukket', () => {
    render(<Default aksjonspunkt={[{ kode: 'AVKLAR_REFUSJONSKRAV', status: 'UTFO' }]} />);

    expect(
      screen.queryByRole('heading', { level: 3, name: 'Vurder refusjonskrav uten registrert utfall' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        'Brunostfabrikken AS og Nordlys Teknologi AS har refusjonsperioder uten registrert utfall. Vurder om kravene skal tas med i beregningen.',
      ),
    ).not.toBeInTheDocument();
  });

  it('skal skjule teksten når det ikke finnes refusjonsandeler', () => {
    render(<Default refusjonsandeler={[]} />);

    expect(
      screen.queryByRole('heading', { level: 3, name: 'Vurder refusjonskrav uten registrert utfall' }),
    ).not.toBeInTheDocument();
  });

  it('skal skjule teksten når alle refusjonsperioder har utfall', () => {
    const refusjonsandeler = refusjonsandelerForTreArbeidsgivere.map(andel => ({
      ...andel,
      refusjonsperioder: andel.refusjonsperioder.map(periode => ({ ...periode, utfall: 'INNVILGET' as const })),
    }));
    render(<Default refusjonsandeler={refusjonsandeler} />);

    expect(
      screen.queryByRole('heading', { level: 3, name: 'Vurder refusjonskrav uten registrert utfall' }),
    ).not.toBeInTheDocument();
  });
});
