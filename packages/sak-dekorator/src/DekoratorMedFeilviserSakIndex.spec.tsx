import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { Modal } from '@navikt/ds-react/esm';
import * as stories from './DekoratorMedFeilviserSakIndex.stories';

const { UtenFeilmeldinger, MedFeilmeldinger, MedFeilmeldingDetaljer } = composeStories(stories);

describe('<DekoratorSakIndex>', () => {
  if (Modal.setAppElement) {
    Modal.setAppElement('body');
  }

  it('skal vise dekoratør uten feilmeldinger', async () => {
    render(<UtenFeilmeldinger />);
    expect(await screen.findByText('NAV')).toBeInTheDocument();
    expect(screen.getByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
  });

  it('skal to feilmeldinger i dekoratør og så fjerne disse', async () => {
    render(<MedFeilmeldinger />);
    expect(await screen.findByText('Feilmelding 1')).toBeInTheDocument();
    expect(screen.getByText('Spesialtegn-test: Høna & egget og "test1" og \'test2\'')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button')[1]);

    await waitFor(() => expect(screen.queryByText('Feilmelding 1')).not.toBeInTheDocument());
  });

  it('skal vise feilmelding med lenke som åpner feilmeldingsdetaljer', async () => {
    render(<MedFeilmeldingDetaljer />);
    expect(
      await screen.findByText(
        'Noe feilet. Feilen kan være forbigående. Prøv og behandle saken litt senere. Om feilen oppstår igjen meld den inn via porten.',
      ),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Detaljert informasjon'));

    expect(await screen.findByText('Lukk')).toBeInTheDocument();
  });
});
