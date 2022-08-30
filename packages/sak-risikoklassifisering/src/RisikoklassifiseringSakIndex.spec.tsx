import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './RisikoklassifiseringSakIndex.stories';

const { IngenRisikoklassifisering, LavRisikoklassifisering, HøyRisikoklassifisering } = composeStories(stories);

describe('<RisikoklassifiseringSakIndex>', () => {
  it('skal mangle klassifisering', async () => {
    render(<IngenRisikoklassifisering />);
    expect(await screen.findAllByText('Faresignaler')).toHaveLength(2);
  });

  it('skal vise ingen faresignaler når en har lav klassifisering', async () => {
    render(<LavRisikoklassifisering />);
    expect(await screen.findByText('Ingen faresignaler oppdaget')).toBeInTheDocument();
  });

  it('skal vurdere faresignaler som ikke reelle', async () => {
    const lagreAksjonspunkt = jest.fn();
    const utils = render(<HøyRisikoklassifisering submitAksjonspunkt={lagreAksjonspunkt} />);
    expect(await screen.findByText('Faresignaler oppdaget')).toBeInTheDocument();
    expect(await screen.findByText('Vurder faresignalene')).toBeInTheDocument();

    expect(await screen.findByText('Medlemskap')).toBeInTheDocument();
    expect(await screen.findByText('Faresignal 1')).toBeInTheDocument();

    expect(await screen.findByText('Arbeidsforhold og inntekt')).toBeInTheDocument();
    expect(await screen.findByText('Faresignal 2')).toBeInTheDocument();
    expect(await screen.findByText('Faresignal 3')).toBeInTheDocument();
    expect(await screen.findByText('Faresignal 4')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Vurdering');

    await act(async () => {
      userEvent.type(vurderingInput, 'Dette er en begrunnelse');
    });

    await act(async () => {
      userEvent.click(screen.getByText('Faresignalene vurderes ikke som reelle'));
    });

    await act(async () => {
      userEvent.click(screen.getByText('Bekreft og fortsett'));
    });

    await waitFor(() => expect(lagreAksjonspunkt).toHaveBeenCalledTimes(1));
    expect(lagreAksjonspunkt).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      faresignalVurdering: 'INGEN_INNVIRKNING',
      kode: '5095',
    });
  });
});
