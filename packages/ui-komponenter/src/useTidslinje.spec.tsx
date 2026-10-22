import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useTidslinje } from './useTidslinje';

const perioder = [{ fom: '2025-01-01', tom: '2025-01-31' }];
const lokalDato = (dato: Date) =>
  `${dato.getFullYear()}-${String(dato.getMonth() + 1).padStart(2, '0')}-${String(dato.getDate()).padStart(2, '0')}`;

const TidslinjeTest = () => {
  const { timelineProps, controllerElement } = useTidslinje({ perioder });
  return (
    <>
      <output data-testid="periode">{`${lokalDato(timelineProps.startDate)}|${lokalDato(timelineProps.endDate)}`}</output>
      <div data-testid="tidslinje" id={timelineProps.id} aria-controls={timelineProps['aria-controls']} />
      {controllerElement}
    </>
  );
};

describe('useTidslinje', () => {
  it('viser åtte måneder som standard, kobler sammen unike ID-er og navigerer månedlig', async () => {
    const { container } = render(
      <>
        <TidslinjeTest />
        <TidslinjeTest />
      </>,
    );
    const timelines = screen.getAllByTestId('tidslinje');
    const controllers = container.querySelectorAll('[id^="tidslinje-kontroller-"]');
    expect(timelines[0]?.id).not.toBe(timelines[1]?.id);
    expect(timelines[0]?.getAttribute('aria-controls')).toBe(controllers[0]?.id);
    expect(controllers[0]?.getAttribute('aria-controls')).toBe(timelines[0]?.id);
    expect(screen.getAllByTestId('periode')[0]?.textContent).toContain('2025-09-01');

    await userEvent.click(screen.getAllByRole('button', { name: 'Scroll til høyre' })[0]!);
    expect(screen.getAllByRole('button', { name: 'Scroll til venstre' })).toHaveLength(2);
    expect(screen.getAllByRole('button', { name: 'Zoom inn' })).toHaveLength(2);
    expect(screen.getAllByRole('button', { name: 'Zoom ut' })).toHaveLength(2);
    expect(screen.getAllByTestId('periode')[0]?.textContent).toContain('2025-02-01');
  });

  it('viser hele lange perioder', async () => {
    const Harness = () => {
      const { timelineProps, controllerElement } = useTidslinje({
        perioder: [{ fom: '2025-01-01', tom: '2026-05-15' }],
      });
      return (
        <>
          <output data-testid="periode">{`${lokalDato(timelineProps.startDate)}|${lokalDato(timelineProps.endDate)}`}</output>
          {controllerElement}
        </>
      );
    };
    render(<Harness />);
    expect(screen.getByTestId('periode').textContent).toBe('2025-01-01|2026-05-15');
  });

  it('begrenser zoom inn til én måned, støtter zoom ut og navigerer korrekt ved månedsslutt', async () => {
    const Harness = () => {
      const { timelineProps, controllerElement } = useTidslinje({
        perioder: [{ fom: '2025-01-31', tom: '2025-01-31' }],
      });
      return (
        <>
          <output data-testid="periode">{`${lokalDato(timelineProps.startDate)}|${lokalDato(timelineProps.endDate)}`}</output>
          {controllerElement}
        </>
      );
    };
    render(<Harness />);
    for (let i = 0; i < 12; i++) await userEvent.click(screen.getByRole('button', { name: 'Zoom inn' }));
    expect(screen.getByRole('button', { name: 'Zoom inn' })).toBeDisabled();
    expect(screen.getByTestId('periode').textContent).toContain('2025-02-28');
    await userEvent.click(screen.getByRole('button', { name: 'Scroll til høyre' }));
    expect(screen.getByTestId('periode').textContent).toContain('2025-02-28');
    await userEvent.click(screen.getByRole('button', { name: 'Zoom ut' }));
    expect(screen.getByRole('button', { name: 'Zoom inn' })).toBeEnabled();
  });
});
