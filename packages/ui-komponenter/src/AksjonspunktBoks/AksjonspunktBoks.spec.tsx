import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import * as stories from './AksjonspunktBoks.stories';

const { OpprettetAksjonspunkt, UtførtAksjonspunkt } = composeStories(stories);

describe('AksjonspunktBoks', () => {
  it('section er en region navngitt av tittelen som er en React-node', () => {
    render(
      <UtførtAksjonspunkt
        tittel={
          <div>
            <span>Boks A</span>
          </div>
        } />
    );

    expect(screen.getByRole('region', { name: 'Boks A' })).toHaveAttribute('data-color', 'neutral');
  });

  it('section har åpent aksjonspunkt og er navngitt fra tittel som er ren tekst', () => {
    render(<OpprettetAksjonspunkt />);

    expect(screen.getByRole('region', { name: 'Dette er en tittel på aksjonspunktboksen' })).toHaveAttribute(
      'data-color',
      'warning',
    );
  });
});
