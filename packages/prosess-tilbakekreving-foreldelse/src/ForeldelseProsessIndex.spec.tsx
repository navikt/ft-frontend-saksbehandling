import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ForeldelseProsessIndex from './ForeldelseProsessIndex';

describe('<Test>', () => {
  it('Test som feilar', async () => {
    const utils = render(<ForeldelseProsessIndex />);

    expect(await screen.findByText('Vurder om perioden er foreldet')).toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Foreldet'));
  });
});
