import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useTidslinje } from './useTidslinje';

const lokalDato = (dato: Date) =>
  `${dato.getFullYear()}-${String(dato.getMonth() + 1).padStart(2, '0')}-${String(dato.getDate()).padStart(2, '0')}`;

const datoIntervall = (result: { current: ReturnType<typeof useTidslinje> }) =>
  `${lokalDato(result.current.timelineProps.startDate)}|${lokalDato(result.current.timelineProps.endDate)}`;

describe('useTidslinje', () => {
  it('viser åtte måneder som standard, kobler sammen unike ID-er og navigerer månedlig', async () => {
    const første = renderHook(() => useTidslinje({ perioder: [{ fom: '2025-01-01', tom: '2025-01-31' }] }));
    const andre = renderHook(() => useTidslinje({ perioder: [{ fom: '2025-01-01', tom: '2025-01-31' }] }));
    const view = render(
      <>
        {første.result.current.controllerElement}
        {andre.result.current.controllerElement}
      </>,
    );

    expect(datoIntervall(første.result)).toBe('2025-01-01|2025-09-01');
    expect(første.result.current.timelineProps.id).not.toBe(andre.result.current.timelineProps.id);
    expect(første.result.current.timelineProps['aria-controls']).not.toBe(
      andre.result.current.timelineProps['aria-controls'],
    );
    expect(document.getElementById(første.result.current.timelineProps['aria-controls'])).not.toBeNull();
    await userEvent.click(screen.getAllByRole('button', { name: 'Scroll til høyre' })[0]!);
    view.rerender(
      <>
        {første.result.current.controllerElement}
        {andre.result.current.controllerElement}
      </>,
    );
    expect(datoIntervall(første.result)).toBe('2025-02-01|2025-10-01');
    await userEvent.click(screen.getAllByRole('button', { name: 'Scroll til venstre' })[0]!);
    view.rerender(
      <>
        {første.result.current.controllerElement}
        {andre.result.current.controllerElement}
      </>,
    );
    expect(datoIntervall(første.result)).toBe('2025-01-01|2025-09-01');
  });

  it('viser hele lange perioder', () => {
    const { result } = renderHook(() => useTidslinje({ perioder: [{ fom: '2025-01-01', tom: '2026-05-15' }] }));
    expect(datoIntervall(result)).toBe('2025-01-01|2026-05-15');
  });

  it('begrenser zoom inn til én måned, støtter zoom ut og navigerer korrekt ved månedsslutt', async () => {
    const { result } = renderHook(() => useTidslinje({ perioder: [{ fom: '2025-01-31', tom: '2025-01-31' }] }));
    const view = render(result.current.controllerElement);

    for (let i = 0; i < 12; i++) {
      await userEvent.click(screen.getByRole('button', { name: 'Zoom inn' }));
      view.rerender(result.current.controllerElement);
    }
    expect(screen.getByRole('button', { name: 'Zoom inn' })).toBeDisabled();
    expect(datoIntervall(result)).toBe('2025-01-31|2025-02-28');
    await userEvent.click(screen.getByRole('button', { name: 'Scroll til høyre' }));
    view.rerender(result.current.controllerElement);
    expect(datoIntervall(result)).toBe('2025-02-28|2025-03-30');
    await userEvent.click(screen.getByRole('button', { name: 'Zoom ut' }));
    view.rerender(result.current.controllerElement);
    expect(screen.getByRole('button', { name: 'Zoom inn' })).toBeEnabled();
    expect(datoIntervall(result)).toBe('2025-02-28|2025-04-30');
  });
});
