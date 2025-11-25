import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import * as stories from './AksjonspunktBoks.stories';

const { OpprettetAksjonspunkt, UtførtAksjonspunkt, ReturnertAksjonspunkt, UtenAksjonspunkt } = composeStories(stories);

describe('AksjonspunktBoks', () => {
  it('Skal vise warning-tilstand for åpent aksjonspunkt', async () => {
    render(<OpprettetAksjonspunkt />);
    expect(screen.getByTestId('AksjonspunktBoks-1234')).toHaveAttribute('data-color', 'warning-soft');
  });

  it('Skal vise tilstand for utført aksjonspunkt', async () => {
    render(<UtførtAksjonspunkt />);
    expect(screen.queryByTestId('AksjonspunktBoks-1234')).toHaveAttribute('data-color', 'neutral-soft');
  });

  it('Skal vise danger-tilstand ved retur fra beslutter', async () => {
    render(<ReturnertAksjonspunkt />);
    expect(screen.getByTestId('AksjonspunktBoks-1234')).toHaveAttribute('data-color', 'warning-soft');
  });

  it('Skal vise nøytral-tilstand ved ingen aksjonspunkt (overstyring)', async () => {
    render(<UtenAksjonspunkt />);
    expect(screen.getByTestId('AksjonspunktBoks')).toHaveAttribute('data-color', 'neutral-soft');
  });
});
