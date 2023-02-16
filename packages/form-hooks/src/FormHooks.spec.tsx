import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './FormHooks.stories';

const { VisFormkomponenter } = composeStories(stories);

window.ResizeObserver =
  window.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));

describe('<FormHooks>', () => {
  it('skal verifisere input-komponenter', async () => {
    const utils = render(<VisFormkomponenter />);

    expect(await screen.findByText('Dette er et inputfelt')).toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Dette er et inputfelt'), 'Dette er en vurdering');

    expect(screen.getByLabelText('Dette er en checkbox')).not.toBeChecked();
    await userEvent.click(screen.getByText('Dette er en checkbox'));
    expect(await screen.getByLabelText('Dette er en checkbox')).toBeChecked();

    await userEvent.click(screen.getByText('Dette er en radioknapp'));

    await userEvent.selectOptions(utils.getByLabelText('Dette er en dropdown'), 'value1');
    // @ts-ignore
    expect(await screen.getByRole('option', { name: 'Test 1' }).selected).toBe(true);

    await userEvent.type(utils.getByLabelText('Dette er et tekstfelt'), 'Dette er en vurdering');

    const datofelt = screen.getByText('Dette er en datepicker');
    await userEvent.type(datofelt, '01.02.2020');
    fireEvent.blur(datofelt);
  });
});
