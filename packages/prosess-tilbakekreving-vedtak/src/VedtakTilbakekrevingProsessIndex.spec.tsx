import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './VedtakTilbakekrevingProsessIndex.stories';

const { Default } = composeStories(stories);

describe('VedtakTilbakekrevingProsessIndex', () => {
  it('skal fylle ut to obligatoriske felter for periode og så bekrefte', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText(/01.10.2018/)).toBeInTheDocument();
    expect(screen.getByText('10 000')).toBeInTheDocument();
    expect(screen.getAllByText('Forsett')).toHaveLength(2);
    expect(screen.getAllByText('50%')).toHaveLength(2);
    expect(screen.getByText('5 000')).toBeInTheDocument();
    expect(screen.getByText('4 000')).toBeInTheDocument();

    expect(screen.getByText(/01.01.2018/)).toBeInTheDocument();
    expect(screen.getByText('1 000')).toBeInTheDocument();
    expect(screen.getByText('80%')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('400')).toBeInTheDocument();

    expect(screen.getByText('Sum')).toBeInTheDocument();
    expect(screen.getByText('11 000')).toBeInTheDocument();
    expect(screen.getByText('5 500')).toBeInTheDocument();
    expect(screen.getByText('4 400')).toBeInTheDocument();

    expect(screen.getByText('Til godkjenning').closest('button')).toBeDisabled();

    const tekstInput = screen.getAllByLabelText('Utdypende tekst');
    await userEvent.type(tekstInput[0], 'Dette er en utdypende tekst');
    await userEvent.type(tekstInput[1], 'Dette er en annen utdypende tekst');

    await userEvent.click(screen.getByText('Til godkjenning'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5004',
      oppsummeringstekst: undefined,
      perioderMedTekst: [
        {
          faktaAvsnitt: 'Dette er en utdypende tekst',
          fom: '2016-03-16',
          foreldelseAvsnitt: undefined,
          saerligeGrunnerAnnetAvsnitt: 'Dette er en annen utdypende tekst',
          saerligeGrunnerAvsnitt: undefined,
          tom: '2016-05-26',
          vilkaarAvsnitt: undefined,
        },
      ],
    });
  });
});
