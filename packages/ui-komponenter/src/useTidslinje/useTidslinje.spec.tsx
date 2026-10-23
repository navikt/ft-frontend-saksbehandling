import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';

import { useTidslinje } from './useTidslinje';

const lokalDato = (date: Date) => dayjs(date).format('YYYY-MM-DD');

const utledDatoer = ({ current: { timelineProps } }: { current: ReturnType<typeof useTidslinje> }) =>
  `${lokalDato(timelineProps.startDate)}|${lokalDato(timelineProps.endDate)}`;

describe('useTidslinje', () => {
  it('viser hele perioden og navigerer månedlig innenfor grensene', async () => {
    const { result } = renderHook(() => useTidslinje({ perioder: [{ fom: '2025-01-01', tom: '2025-09-01' }] }));
    const view = render(result.current.controllerElement);

    expect(utledDatoer(result)).toBe('2025-01-01|2025-09-02');
    expect(document.getElementById(result.current.timelineProps['aria-controls'])).not.toBeNull();
    await userEvent.click(screen.getByRole('button', { name: 'Zoom inn' }));
    view.rerender(result.current.controllerElement);
    await userEvent.click(screen.getByRole('button', { name: 'Scroll til høyre' }));
    view.rerender(result.current.controllerElement);
    expect(utledDatoer(result)).toBe('2025-03-01|2025-09-02');
    await userEvent.click(screen.getByRole('button', { name: 'Scroll til venstre' }));
    view.rerender(result.current.controllerElement);
    expect(utledDatoer(result)).toBe('2025-02-01|2025-08-02');
  });

  it('viser hele lange perioder', () => {
    const { result } = renderHook(() => useTidslinje({ perioder: [{ fom: '2025-01-01', tom: '2026-05-15' }] }));
    expect(utledDatoer(result)).toBe('2025-01-01|2026-05-16');
  });

  it('begrenser zoom inn og støtter zoom ut ved månedsslutt', async () => {
    const { result } = renderHook(() => useTidslinje({ perioder: [{ fom: '2025-01-31', tom: '2025-05-31' }] }));
    const view = render(result.current.controllerElement);

    await userEvent.click(screen.getByRole('button', { name: 'Zoom inn' }));
    view.rerender(result.current.controllerElement);
    expect(screen.getByRole('button', { name: 'Zoom inn' })).toBeDisabled();
    expect(utledDatoer(result)).toBe('2025-02-28|2025-05-01');
    await userEvent.click(screen.getByRole('button', { name: 'Zoom ut' }));
    view.rerender(result.current.controllerElement);
    expect(screen.getByRole('button', { name: 'Zoom inn' })).toBeEnabled();
    expect(utledDatoer(result)).toBe('2025-01-28|2025-05-31');
  });
});
