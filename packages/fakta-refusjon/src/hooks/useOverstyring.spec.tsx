import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { useOverstyring, type UseOverstyringProps } from './useOverstyring';
import * as stories from './useOverstyring.stories';

const {
  OverstyrerUtenAksjonspunkt,
  SaksbehandlerUtenAksjonspunkt,
  OverstyrerMedOverstyringsaksjonspunkt,
  SaksbehandlerMedOverstyringsaksjonspunkt,
  OverstyrerILesemodusUtenAksjonspunkt,
  SaksbehandlerILesemodusUtenAksjonspunkt,
  OverstyrerILesemodusMedOverstyringsaksjonspunkt,
  SaksbehandlerILesemodusMedOverstyringsaksjonspunkt,
} = composeStories(stories);

describe('useOverstyring', () => {
  it.each([
    { readOnly: true, erOverstyrer: false },
    { readOnly: true, erOverstyrer: true },
    { readOnly: false, erOverstyrer: false },
  ])('skjuler overstyring uten historikk og redigeringstilgang: $readOnly / $erOverstyrer', props => {
    render(<TestPanel {...props} harVærtOverstyrt={false} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it.each([
    { readOnly: true, erOverstyrer: false },
    { readOnly: true, erOverstyrer: true },
    { readOnly: false, erOverstyrer: false },
  ])('viser tidligere overstyring skrivebeskyttet: $readOnly / $erOverstyrer', async props => {
    render(<TestPanel {...props} harVærtOverstyrt />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    const felt = screen.getByRole('textbox', { name: 'Overstyringsfelt' });
    expect(felt).toHaveAttribute('readonly');
    await userEvent.type(felt, 'Endring');
    expect(felt).toHaveValue('Opprinnelig verdi');
  });

  it('viser historikk som blir tilgjengelig etter oppstart, uten å aktivere redigering', () => {
    const { rerender } = render(<TestPanel readOnly erOverstyrer={false} harVærtOverstyrt={false} />);
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();

    rerender(<TestPanel readOnly erOverstyrer={false} harVærtOverstyrt />);
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('krever klikk på Overstyr ved førstegangsoverstyring og lar den avbrytes og aktiveres på nytt', async () => {
    const aktiverOverstyring = vi.fn();
    const avbrytOverstyring = vi.fn();
    render(
      <TestPanel
        readOnly={false}
        erOverstyrer
        harVærtOverstyrt={false}
        onAktiverOverstyring={aktiverOverstyring}
        onAvbrytOverstyring={avbrytOverstyring}
      />,
    );

    expect(aktiverOverstyring).not.toHaveBeenCalled();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Avbryt overstyring' })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    expect(aktiverOverstyring).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('readonly');
    expect(screen.queryByRole('button', { name: 'Overstyr' })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Avbryt overstyring' }));
    expect(avbrytOverstyring).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    expect(aktiverOverstyring).toHaveBeenCalledTimes(2);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('readonly');
  });

  it('aktiverer redigering av historikk automatisk for en overstyrer, uten avbrytknapp', () => {
    render(<TestPanel readOnly={false} erOverstyrer harVærtOverstyrt />);

    expect(screen.getByRole('textbox')).not.toHaveAttribute('readonly');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('viser ingen avbrytknapp ved kontrollert aktiv overstyring med historikk', () => {
    render(<TestPanel readOnly={false} erOverstyrer harVærtOverstyrt erOverstyringRedigerbar />);

    expect(screen.getByRole('textbox')).not.toHaveAttribute('readonly');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('bruker kontrollert skjematilstand uten en ekstra lokal aktivering', async () => {
    const aktiverOverstyring = vi.fn();
    const avbrytOverstyring = vi.fn();
    const props = {
      readOnly: false,
      erOverstyrer: true,
      harVærtOverstyrt: false,
      aktiverOverstyring,
      avbrytOverstyring,
    };
    const { rerender } = render(<TestPanel {...props} erOverstyringRedigerbar={false} />);

    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    expect(aktiverOverstyring).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Overstyr' })).toBeEnabled();
    rerender(<TestPanel {...props} erOverstyringRedigerbar />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('readonly');
    await userEvent.click(screen.getByRole('button', { name: 'Avbryt overstyring' }));
    expect(avbrytOverstyring).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('readonly');
    rerender(<TestPanel {...props} erOverstyringRedigerbar={false} />);
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Overstyr' })).toBeEnabled();
  });

  it.each([
    { readOnly: true, erOverstyrer: true },
    { readOnly: false, erOverstyrer: false },
  ])('skrivebeskytter en aktiv overstyring når tilgangen endres: $readOnly / $erOverstyrer', props => {
    const { rerender } = render(
      <TestPanel readOnly={false} erOverstyrer harVærtOverstyrt={false} erOverstyringRedigerbar />,
    );
    expect(screen.getByRole('textbox')).not.toHaveAttribute('readonly');

    rerender(<TestPanel {...props} harVærtOverstyrt={false} erOverstyringRedigerbar />);
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('deaktiverer begge knappene mens innsending pågår', async () => {
    const aktiverOverstyring = vi.fn();
    const avbrytOverstyring = vi.fn();
    const props = {
      readOnly: false,
      erOverstyrer: true,
      harVærtOverstyrt: false,
      aktiverOverstyring,
      avbrytOverstyring,
    };
    const { rerender } = render(<TestPanel {...props} erOverstyringRedigerbar={false} isSubmitting />);
    const overstyr = screen.getByRole('button', { name: 'Overstyr' });
    expect(overstyr).toBeDisabled();
    await userEvent.click(overstyr);
    expect(aktiverOverstyring).not.toHaveBeenCalled();

    rerender(<TestPanel {...props} erOverstyringRedigerbar={false} />);
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    expect(aktiverOverstyring).toHaveBeenCalledTimes(1);
    rerender(<TestPanel {...props} erOverstyringRedigerbar isSubmitting />);
    const avbryt = screen.getByRole('button', { name: 'Avbryt overstyring' });
    expect(avbryt).toBeDisabled();
    await userEvent.click(avbryt);
    expect(avbrytOverstyring).not.toHaveBeenCalled();
  });
});

describe('useOverstyring stories', () => {
  it.each([
    ['saksbehandler', SaksbehandlerUtenAksjonspunkt],
    ['saksbehandler i lesemodus', SaksbehandlerILesemodusUtenAksjonspunkt],
    ['overstyrer i lesemodus', OverstyrerILesemodusUtenAksjonspunkt],
  ])('skjuler overstyringsfelt uten aksjonspunkt for %s', (_navn, Story) => {
    render(<Story />);

    expect(screen.getByText('Ingen overstyring å vise.')).toBeInTheDocument();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it.each([
    ['saksbehandler', SaksbehandlerMedOverstyringsaksjonspunkt],
    ['saksbehandler i lesemodus', SaksbehandlerILesemodusMedOverstyringsaksjonspunkt],
    ['overstyrer i lesemodus', OverstyrerILesemodusMedOverstyringsaksjonspunkt],
  ])('viser tidligere overstyring skrivebeskyttet for %s', (_navn, Story) => {
    render(<Story />);

    expect(screen.getByRole('textbox', { name: /Refusjonsbeløp per måned/ })).toHaveAttribute('readonly');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('lar en overstyrer endre og avbryte første overstyring, og tilbakestiller beløpet', async () => {
    render(<OverstyrerUtenAksjonspunkt />);

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    const beløp = screen.getByRole('textbox', { name: /Refusjonsbeløp per måned/ });
    expect(beløp).not.toHaveAttribute('readonly');
    await userEvent.clear(beløp);
    await userEvent.type(beløp, '50000');
    expect(beløp).toHaveValue('50000');
    await userEvent.click(screen.getByRole('button', { name: 'Avbryt overstyring' }));
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    expect(screen.getByRole('textbox', { name: /Refusjonsbeløp per måned/ })).toHaveValue('42000');
  });

  it('lar en overstyrer redigere tidligere overstyring uten avbrytknapp', async () => {
    render(<OverstyrerMedOverstyringsaksjonspunkt />);
    const beløp = screen.getByRole('textbox', { name: /Refusjonsbeløp per måned/ });
    expect(beløp).not.toHaveAttribute('readonly');
    await userEvent.clear(beløp);
    await userEvent.type(beløp, '50000');
    expect(beløp).toHaveValue('50000');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});

const TestPanel = (props: UseOverstyringProps) => {
  const { overstyringKnapp, visOverstyring, erOverstyringReadOnly } = useOverstyring(props);

  return (
    <>
      {overstyringKnapp}
      {visOverstyring && (
        <input aria-label="Overstyringsfelt" defaultValue="Opprinnelig verdi" readOnly={erOverstyringReadOnly} />
      )}
    </>
  );
};
