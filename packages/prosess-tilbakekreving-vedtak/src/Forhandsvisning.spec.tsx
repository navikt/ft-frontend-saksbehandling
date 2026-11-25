import type { MouseEvent } from 'react';

import { Link } from '@navikt/ds-react';
import { composeStories } from '@storybook/react-vite';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './VedtakTilbakekrevingProsessIndex.stories';

vi.mock('@navikt/ds-react', async importOriginal => ({
  ...(await importOriginal<typeof import('@navikt/ds-react')>()),
  Link: vi.fn(() => null),
}));

const { Default } = composeStories(stories);

describe('forhåndsvisning av vedtaksbrev', () => {
  it('skal hindre navigasjon før kallet og sende feil videre', async () => {
    const feil = new Error('Forhåndsvisning feilet');
    const preventDefault = vi.fn();
    const fetchPreviewVedtaksbrev = vi.fn(() => {
      expect(preventDefault).toHaveBeenCalledOnce();
      return Promise.reject(feil);
    });
    render(<Default fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev} />);

    const tekstfelt = screen.getAllByLabelText('Utdypende tekst');
    await userEvent.type(tekstfelt[0], 'Begrunnelse for vedtak');
    await userEvent.type(tekstfelt[1], 'Begrunnelse for særlige grunner');

    const onClick = vi.mocked(Link).mock.lastCall![0].onClick!;
    await act(async () => {
      await expect(onClick({ preventDefault } as unknown as MouseEvent<HTMLAnchorElement>)).rejects.toBe(feil);
    });
    expect(fetchPreviewVedtaksbrev).toHaveBeenCalledOnce();
    expect(tekstfelt[0]).toHaveValue('Begrunnelse for vedtak');
    expect(tekstfelt[1]).toHaveValue('Begrunnelse for særlige grunner');
  });
});
