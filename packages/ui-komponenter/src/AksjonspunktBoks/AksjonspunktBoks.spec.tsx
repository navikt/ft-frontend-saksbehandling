import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';

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
        }
      />,
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

  it('videresender className og style uten å påvirke boksens tilstand eller navn', () => {
    render(<UtførtAksjonspunkt className="custom-class" style={{ marginTop: '12px' }} />);
    const region = screen.getByRole('region', { name: 'Dette er en tittel på aksjonspunktboksen' });

    expect(region).toHaveClass('custom-class');
    expect(region).toHaveStyle({ marginTop: '12px' });
  });

  it('støtter kontroll av åpen tilstand og videresender onToggle', () => {
    const onToggle = vi.fn();
    render(<OpprettetAksjonspunkt defaultOpen={false} onToggle={onToggle} />);

    const region = screen.getByRole('region', { name: 'Dette er en tittel på aksjonspunktboksen' });
    const toggle = within(region).getByRole('button');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(onToggle).toHaveBeenCalled();
  });
});
