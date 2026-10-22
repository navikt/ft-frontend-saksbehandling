import type { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { RawIntlProvider } from 'react-intl';

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { createIntl } from '@navikt/ft-utils';

import { TilbakekrevingVedtakUtdypendeTekstPanel } from './TilbakekrevingVedtakUtdypendeTekstPanel';

import messages from '../../../i18n/nb_NO.json';

vi.mock('@navikt/ft-form-hooks', async importOriginal => {
  const actual = await importOriginal<typeof import('@navikt/ft-form-hooks')>();
  return { ...actual, RhfTextarea: vi.fn(actual.RhfTextarea) };
});

const intl = createIntl(messages);

const Skjema = ({ children }: { children: ReactNode }) => {
  const formMethods = useForm({ defaultValues: { OPPSUMMERING: 'abc', TILLEGGSINFORMASJON: 'abc' } });
  return (
    <RawIntlProvider value={intl}>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(() => undefined)}>
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

  it('skal ikke legge til valideringsregler ved gjentatte renderinger', () => {
    const rhfTextareaMock = vi.mocked(RhfTextarea);
    rhfTextareaMock.mockClear();

    const lagPanel = () => (
      <Skjema>
        <TilbakekrevingVedtakUtdypendeTekstPanel name="OPPSUMMERING" readOnly={false} maximumLength={10000} />
        <TilbakekrevingVedtakUtdypendeTekstPanel name="TILLEGGSINFORMASJON" readOnly={false} fritekstPakrevet />
      </Skjema>
    );
    const { rerender } = render(lagPanel());
    rerender(lagPanel());
    rerender(lagPanel());

    const antallRegler = rhfTextareaMock.mock.calls.map(([props]) => [props.name, props.validate?.length]);
    expect(antallRegler.length).toBeGreaterThanOrEqual(6);
    antallRegler.forEach(([name, antall]) => {
      expect(antall).toBe(name === 'TILLEGGSINFORMASJON' ? 4 : 3);
    });
  });
});
