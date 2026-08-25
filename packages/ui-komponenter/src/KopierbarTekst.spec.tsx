import { composeStories } from '@storybook/react-vite';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
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

  it('kopierer tekst ved klikk', async () => {
    render(<MedUlikVisningFraKopierbarTekst />);

    const element = screen.getByText('Når du klikker på denne teksten blir en tekst kopiert til utklippstavlen');
    fireEvent.click(element);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Dette er den kopierte teksten');
    });
  });

  it('viser tooltip ved hover og "Kopiert!" etter klikk', async () => {
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

  it('kan fokuseres med tab', async () => {
    render(<MedLikVisningSomKopierbarTekst />);

    expect(screen.getByRole('button')).not.toHaveFocus();

    await userEvent.tab();

    expect(screen.getByRole('button')).toHaveFocus();
  });

  it('kopierer tekst ved Enter', async () => {
    render(<MedLikVisningSomKopierbarTekst />);

    act(() => {
      screen.getByRole('button').focus();
    });

    expect(await screen.findByText('Klikk for å kopiere')).toBeInTheDocument();

    await userEvent.keyboard('{Enter}');

    expect(await screen.findByText('Kopiert!')).toBeInTheDocument();

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Denne teksten kopieres når du klikker på den');
    });
  });

  it('kopierer tekst ved mellomrom', async () => {
    render(<MedLikVisningSomKopierbarTekst />);

    act(() => {
      screen.getByRole('button').focus();
    });

    expect(await screen.findByText('Klikk for å kopiere')).toBeInTheDocument();

    await userEvent.keyboard(' ');

    expect(await screen.findByText('Kopiert!')).toBeInTheDocument();

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Denne teksten kopieres når du klikker på den');
    });
  });

  it('kopierer tekst ved tab og Enter', async () => {
    render(<MedUlikVisningFraKopierbarTekst />);

    await userEvent.tab();

    expect(screen.getByRole('button')).toHaveFocus();

    expect(await screen.findByText('Klikk for å kopiere')).toBeInTheDocument();

    await userEvent.keyboard('{Enter}');

    expect(await screen.findByText('Kopiert!')).toBeInTheDocument();

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Dette er den kopierte teksten');
    });
  });

  it('har den synlige teksten som tilgjengelig navn', () => {
    render(<MedLikVisningSomKopierbarTekst />);

    expect(screen.getByRole('button')).toHaveAccessibleName('Denne teksten kopieres når du klikker på den');
  });

  it('bruker synlig tekst (children) som tilgjengelig navn', () => {
    render(<MedUlikVisningFraKopierbarTekst />);

    expect(screen.getByRole('button')).toHaveAccessibleName(
      'Når du klikker på denne teksten blir en tekst kopiert til utklippstavlen',
    );
  });
});
