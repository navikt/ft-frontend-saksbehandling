import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './FormHooks.stories';

const { VisFormkomponenter } = composeStories(stories);

describe('<FormHooks>', () => {
  it('skal verifisere input-komponenter', async () => {
    const utils = render(<VisFormkomponenter />);

    expect(await screen.findByText('Dette er et inputfelt')).toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Dette er et inputfelt'), 'Dette er en vurdering');

    expect(screen.getByLabelText('Dette er en checkbox')).not.toBeChecked();
    await userEvent.click(screen.getByText('Dette er en checkbox'));
    expect(await screen.getByLabelText('Dette er en checkbox')).toBeChecked();

    await userEvent.click(screen.getByText('Dette er en radioknapp'));

    await userEvent.selectOptions(utils.getByLabelText('Dette er en dropdown'), 'value');
    // @ts-ignore
    expect(await screen.getByRole('option', { name: 'Test' }).selected).toBe(true);

    await userEvent.type(utils.getByLabelText('Dette er et tekstfelt'), 'Dette er en vurdering');

    await userEvent.type(utils.getByLabelText('Dette er en label'), '10.10.2022');
  });
});
