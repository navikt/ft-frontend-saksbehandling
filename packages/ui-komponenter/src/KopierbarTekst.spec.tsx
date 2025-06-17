import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import * as stories from './KopierbarTekst.stories';

const { MedUlikVisningFraKopierbarTekst, MedLikVisningSomKopierbarTekst } = composeStories(stories);

describe('KopierbarTekst', () => {
  beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn(),
      },
      configurable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('kopierer tekst til utklippstavlen når det vises en annen tekst', async () => {
    render(<MedUlikVisningFraKopierbarTekst />);

    const element = screen.getByText('Når du klikker på denne teksten blir en tekst kopiert til utklippstavlen');
    fireEvent.click(element);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Dette er den kopierte teksten');
    });
  });

  it('viser tooltip med veiledende tekst', async () => {
    const tekst = 'Denne teksten kopieres når du klikker på den';

    render(<MedLikVisningSomKopierbarTekst />);
    expect(screen.queryByText('Klikk for å kopiere')).not.toBeInTheDocument();
    expect(screen.queryByText('Kopiert!')).not.toBeInTheDocument();

    const element = screen.getByText(tekst);
    await userEvent.hover(element);

    expect(await screen.findByText('Klikk for å kopiere')).toBeInTheDocument();

    fireEvent.click(element);
    expect(await screen.findByText('Kopiert!')).toBeInTheDocument();

    await userEvent.unhover(element);

    expect(screen.queryByText('Klikk for å kopiere')).not.toBeInTheDocument();
    expect(screen.queryByText('Kopiert!')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(tekst);
    });
  });
});
