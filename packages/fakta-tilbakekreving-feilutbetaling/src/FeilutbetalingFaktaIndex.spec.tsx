import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './FeilutbetalingFaktaIndex.stories';

const { AksjonspunktForFeilutbetaling } = composeStories(stories);

describe('<FeilutbetalingFaktaIndex>', () => {
  it('skal legge til hendelse for alle perioder og så lagre', async () => {
    const lagre = jest.fn();

    const utils = render(<AksjonspunktForFeilutbetaling submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller at korrekt hendelse er satt')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019 - 02.01.2019')).toBeInTheDocument();
    expect(await screen.findByText('10000')).toBeInTheDocument();
    expect(await screen.findAllByText('5000')).toHaveLength(2);

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    const selects = utils.getAllByRole('combobox', { hidden: true });
    userEvent.selectOptions(selects[0], 'MEDLEMSKAP');
    userEvent.selectOptions(selects[1], 'MEDLEMSKAP');
    userEvent.selectOptions(selects[2], 'MEDLEMSKAP');

    const begrunnValgInput = utils.getByLabelText('Forklar årsaken(e) til feilutbetalingen');
    userEvent.type(begrunnValgInput, 'Dette er en forklaring');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en forklaring',
      feilutbetalingFakta: [{
        fom: '2018-01-01',
        tom: '2018-01-31',
        årsak: {
          hendelseType: 'MEDLEMSKAP',
          hendelseUndertype: undefined,
        },
      }, {
        fom: '2018-02-01',
        tom: '2018-02-28',
        årsak: {
          hendelseType: 'MEDLEMSKAP',
          hendelseUndertype: undefined,
        },
      }, {
        fom: '2018-03-01',
        tom: '2018-03-15',
        årsak: {
          hendelseType: 'MEDLEMSKAP',
          hendelseUndertype: undefined,
        },
      }],
      kode: '7003',
    });
  });

  it('skal legge til hendelse-undertype for perioder og så lagre', async () => {
    const lagre = jest.fn();

    const utils = render(<AksjonspunktForFeilutbetaling submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller at korrekt hendelse er satt')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019 - 02.01.2019')).toBeInTheDocument();
    expect(await screen.findByText('10000')).toBeInTheDocument();
    expect(await screen.findAllByText('5000')).toHaveLength(2);

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    userEvent.selectOptions(utils.getAllByRole('combobox', { hidden: true })[0], 'MEDLEMSKAP');
    userEvent.selectOptions(utils.getAllByRole('combobox', { hidden: true })[1], 'OKONOMI_FEIL');
    userEvent.selectOptions(utils.getAllByRole('combobox', { hidden: true })[2], 'OKONOMI_FEIL_TREKK');
    userEvent.selectOptions(utils.getAllByRole('combobox', { hidden: true })[3], 'BEREGNING_TYPE');
    userEvent.selectOptions(utils.getAllByRole('combobox', { hidden: true })[4], 'IKKE_BOSATT');

    const begrunnValgInput = utils.getByLabelText('Forklar årsaken(e) til feilutbetalingen');
    userEvent.type(begrunnValgInput, 'Dette er en forklaring');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en forklaring',
      feilutbetalingFakta: [{
        fom: '2018-01-01',
        tom: '2018-01-31',
        årsak: {
          hendelseType: 'MEDLEMSKAP',
          hendelseUndertype: undefined,
        },
      }, {
        fom: '2018-02-01',
        tom: '2018-02-28',
        årsak: {
          hendelseType: 'OKONOMI_FEIL',
          hendelseUndertype: 'OKONOMI_FEIL_TREKK',
        },
      }, {
        fom: '2018-03-01',
        tom: '2018-03-15',
        årsak: {
          hendelseType: 'BEREGNING_TYPE',
          hendelseUndertype: 'IKKE_BOSATT',
        },
      }],
      kode: '7003',
    });
  });

  it('skal behandle alle perioder samlet', async () => {
    const lagre = jest.fn();

    const utils = render(<AksjonspunktForFeilutbetaling submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller at korrekt hendelse er satt')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019 - 02.01.2019')).toBeInTheDocument();
    expect(await screen.findByText('10000')).toBeInTheDocument();
    expect(await screen.findAllByText('5000')).toHaveLength(2);

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    userEvent.click(screen.getByText('Behandle alle perioder samlet'));

    userEvent.selectOptions(utils.getAllByRole('combobox', { hidden: true })[0], 'BEREGNING_TYPE');
    userEvent.selectOptions(utils.getAllByRole('combobox', { hidden: true })[1], 'IKKE_BOSATT');

    const begrunnValgInput = utils.getByLabelText('Forklar årsaken(e) til feilutbetalingen');
    userEvent.type(begrunnValgInput, 'Dette er en forklaring');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en forklaring',
      feilutbetalingFakta: [{
        fom: '2018-01-01',
        tom: '2018-01-31',
        årsak: {
          hendelseType: 'BEREGNING_TYPE',
          hendelseUndertype: 'IKKE_BOSATT',
        },
      }, {
        fom: '2018-02-01',
        tom: '2018-02-28',
        årsak: {
          hendelseType: 'BEREGNING_TYPE',
          hendelseUndertype: 'IKKE_BOSATT',
        },
      }, {
        fom: '2018-03-01',
        tom: '2018-03-15',
        årsak: {
          hendelseType: 'BEREGNING_TYPE',
          hendelseUndertype: 'IKKE_BOSATT',
        },
      }],
      kode: '7003',
    });
  });
});
