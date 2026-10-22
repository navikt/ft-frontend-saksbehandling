import type { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { RawIntlProvider } from 'react-intl';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { createIntl } from '@navikt/ft-utils';

import { TilbakekrevingVedtakUtdypendeTekstPanel } from './TilbakekrevingVedtakUtdypendeTekstPanel';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const Skjema = ({ children, lagre = () => undefined }: { children: ReactNode; lagre?: () => void }) => {
  const formMethods = useForm({ defaultValues: { OPPSUMMERING: 'abc', TILLEGGSINFORMASJON: 'abc' } });
  return (
    <RawIntlProvider value={intl}>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(lagre)}>
          {children}
          <button type="submit">Lagre</button>
        </form>
      </FormProvider>
    </RawIntlProvider>
  );
};

describe('TilbakekrevingVedtakUtdypendeTekstPanel', () => {
  it('skal validere maksimal lengde for hver instans for seg', async () => {
    render(
      <Skjema>
        <TilbakekrevingVedtakUtdypendeTekstPanel name="OPPSUMMERING" readOnly={false} />
        <TilbakekrevingVedtakUtdypendeTekstPanel name="TILLEGGSINFORMASJON" readOnly={false} maximumLength={10000} />
      </Skjema>,
    );

    const [felt4000, felt10000] = screen.getAllByLabelText('Utdypende tekst');
    fireEvent.change(felt4000!, { target: { value: 'a'.repeat(5000) } });
    fireEvent.change(felt10000!, { target: { value: 'a'.repeat(5000) } });

    await userEvent.click(screen.getByText('Lagre'));

    expect(await screen.findByText('Du kan skrive maksimalt 4000 tegn')).toBeInTheDocument();
    expect(screen.getAllByText(/Du kan skrive maksimalt/)).toHaveLength(1);
  });

  it('skal ikke beholde valideringsregler fra tidligere renderinger', async () => {
    const lagre = vi.fn();
    const lagPanel = (maximumLength?: number) => (
      <Skjema lagre={lagre}>
        <TilbakekrevingVedtakUtdypendeTekstPanel name="OPPSUMMERING" readOnly={false} maximumLength={maximumLength} />
      </Skjema>
    );
    const { rerender } = render(lagPanel());
    rerender(lagPanel(10000));

    fireEvent.change(screen.getByLabelText('Utdypende tekst'), { target: { value: 'a'.repeat(5000) } });

    await userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(screen.queryByText(/Du kan skrive maksimalt/)).not.toBeInTheDocument();
  });
});
