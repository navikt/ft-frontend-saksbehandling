import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/testing-react';
import { Modal } from '@navikt/ds-react';
import * as stories from './Image.stories';

// @ts-ignore Fjern når fiksa
const { Default, KlikkbartIkon } = composeStories(stories);

describe('<Image>', () => {
  if (Modal.setAppElement) {
    Modal.setAppElement('body');
  }

  it('skal vise et ikon', async () => {
    render(<Default />);

    expect(await screen.findByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('skal åpne en modal når en trykker på ikon', async () => {
    render(<KlikkbartIkon />);

    expect(await screen.findByRole('img', { hidden: true })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('img', { hidden: true }));

    expect(await screen.findByText('OK')).toBeInTheDocument();
  });
});
