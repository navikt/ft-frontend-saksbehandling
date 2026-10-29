import { composeStories } from '@storybook/react-vite';
import { render, screen, within } from '@testing-library/react';

import * as stories from './NæringFraSøknad.stories';

const { MedRegnskapsførerOgOpphørsdato, Nyoppstartet, UtenNæringsandel, VarigEndring } = composeStories(stories);

describe('NæringFraSøknad', () => {
  it('skal vise opplysninger for en varig endret næring', () => {
    render(<VarigEndring />);

    const region = screen.getByRole('region', { name: 'Opplysninger om næring' });
    expect(getDefinition(region, 'Virksomhet')).toHaveTextContent('Jæren landbruk og hønsefarm AS');
    expect(getDefinition(region, 'Regnskapsfører')).toHaveTextContent('-');
    expect(getDefinition(region, 'Oppstartsdato')).toHaveTextContent('01.01.2020');
    expect(getDefinition(region, 'Opphørsdato')).toHaveTextContent('-');
    expect(getDefinition(region, 'Oppgitt varig endring')).toHaveTextContent('01.01.2025');
    expect(getDefinition(region, 'Nyoppstartet')).toHaveTextContent('Nei');
    expect(
      within(region).getByText(
        'Her er det en tekst fra bruker som er skrevet inn i søknaden, som forklarer den varige endringen i virksomheten i de siste 4 årene. Mjau!',
      ),
    ).toBeInTheDocument();
  });

  it('skal vise virksomhet, oppstartsdato og nyoppstartet-status', () => {
    render(<Nyoppstartet />);

    const region = screen.getByRole('region', { name: 'Opplysninger om næring' });
    expect(getDefinition(region, 'Virksomhet')).toHaveTextContent('Jæren landbruk og hønsefarm AS');
    expect(getDefinition(region, 'Oppstartsdato')).toHaveTextContent('01.01.2025');
    expect(getDefinition(region, 'Opphørsdato')).toHaveTextContent('-');
    expect(getDefinition(region, 'Oppgitt varig endring')).toHaveTextContent('Nei');
    expect(getDefinition(region, 'Nyoppstartet')).toHaveTextContent('01.01.2025');
    expect(within(region).queryByText('Begrunnelse fra søknaden')).not.toBeInTheDocument();
  });

  it('skal vise regnskapsfører og reell opphørsdato når de er oppgitt', () => {
    render(<MedRegnskapsførerOgOpphørsdato />);

    const region = screen.getByRole('region', { name: 'Opplysninger om næring' });
    expect(getDefinition(region, 'Regnskapsfører')).toHaveTextContent('Kari Regnskapsfører - Tlf: 12345678');
    expect(getDefinition(region, 'Opphørsdato')).toHaveTextContent('31.12.2025');
  });

  it('skal ikke vise panelet når grunnlaget ikke har en næringsandel', () => {
    render(<UtenNæringsandel />);

    expect(screen.queryByRole('region', { name: 'Opplysninger om næring' })).not.toBeInTheDocument();
  });
});

const getDefinition = (region: HTMLElement, label: string) => {
  const term = within(region).getByText(label);
  const row = term.closest('dt')?.parentElement;
  if (!row) {
    throw new Error(`Fant ikke beskrivelsesrad for «${label}»`);
  }
  return within(row).getByRole('definition');
};
