import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './FeilutbetalingFaktaIndex.stories';

const { TrePerioder } = composeStories(stories);

describe('FeilutbetalingFaktaIndex', () => {
  it('skal legge til hendelse og hendelse-undertype for alle perioder og så lagre', async () => {
    const lagre = vi.fn();

    render(<TrePerioder submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller at korrekt hendelse er satt')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019 - 02.01.2019')).toBeInTheDocument();
    expect(await screen.findByText('10 000 kr')).toBeInTheDocument();
    expect(await screen.findAllByText('5 000 kr')).toHaveLength(2);

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    const årsakSelects = screen.getAllByRole('combobox', { name: 'Hendelse årsak' });
    await userEvent.selectOptions(årsakSelects[0], 'MEDLEMSKAP');
    await userEvent.selectOptions(årsakSelects[1], 'UTTAK_GENERELT_TYPE');
    await userEvent.selectOptions(årsakSelects[2], 'BEREGNING_TYPE');

    const underårsakSelects = screen.getAllByRole('combobox', { name: 'Hendelse underårsak' });
    await userEvent.selectOptions(underårsakSelects[0], 'UTVANDRET');
    await userEvent.selectOptions(underårsakSelects[1], 'NY_STONADSPERIODE');
    await userEvent.selectOptions(underårsakSelects[2], 'ENDRING_GRUNNLAG');

    const begrunnValgInput = screen.getByLabelText('Forklar årsaken(e) til feilutbetalingen');
    await userEvent.type(begrunnValgInput, 'Dette er en forklaring');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en forklaring',
      feilutbetalingFakta: [
        {
          fom: '2018-01-01',
          tom: '2018-01-31',
          årsak: {
            hendelseType: 'MEDLEMSKAP',
            hendelseUndertype: 'UTVANDRET',
          },
        },
        {
          fom: '2018-02-01',
          tom: '2018-02-28',
          årsak: {
            hendelseType: 'UTTAK_GENERELT_TYPE',
            hendelseUndertype: 'NY_STONADSPERIODE',
          },
        },
        {
          fom: '2018-03-01',
          tom: '2018-03-15',
          årsak: {
            hendelseType: 'BEREGNING_TYPE',
            hendelseUndertype: 'ENDRING_GRUNNLAG',
          },
        },
      ],
      kode: '7003',
    });
  });

  it('skal behandle alle perioder samlet', async () => {
    const lagre = vi.fn();

    render(<TrePerioder submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller at korrekt hendelse er satt')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019 - 02.01.2019')).toBeInTheDocument();
    expect(await screen.findByText('10 000 kr')).toBeInTheDocument();
    expect(await screen.findAllByText('5 000 kr')).toHaveLength(2);

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(screen.getByText('Behandle alle perioder samlet'));

    await userEvent.selectOptions(screen.getAllByRole('combobox', { name: 'Hendelse årsak' })[0], 'BEREGNING_TYPE');
    await userEvent.selectOptions(
      screen.getAllByRole('combobox', { name: 'Hendelse underårsak' })[0],
      'ENDRING_GRUNNLAG',
    );

    const begrunnValgInput = screen.getByLabelText('Forklar årsaken(e) til feilutbetalingen');
    await userEvent.type(begrunnValgInput, 'Dette er en forklaring');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en forklaring',
      feilutbetalingFakta: [
        {
          fom: '2018-01-01',
          tom: '2018-01-31',
          årsak: {
            hendelseType: 'BEREGNING_TYPE',
            hendelseUndertype: 'ENDRING_GRUNNLAG',
          },
        },
        {
          fom: '2018-02-01',
          tom: '2018-02-28',
          årsak: {
            hendelseType: 'BEREGNING_TYPE',
            hendelseUndertype: 'ENDRING_GRUNNLAG',
          },
        },
        {
          fom: '2018-03-01',
          tom: '2018-03-15',
          årsak: {
            hendelseType: 'BEREGNING_TYPE',
            hendelseUndertype: 'ENDRING_GRUNNLAG',
          },
        },
      ],
      kode: '7003',
    });
  });
});
