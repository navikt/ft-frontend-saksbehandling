import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { TidslinjeZoomKnapper } from './TidslinjeZoomKnapper';

describe('TidslinjeZoomKnapper', () => {
  const renderKomponent = (kanZoomeInn: boolean) => {
    const onZoomInn = vi.fn();
    const onZoomUt = vi.fn();
    render(<TidslinjeZoomKnapper onZoomInn={onZoomInn} onZoomUt={onZoomUt} kanZoomeInn={kanZoomeInn} />);
    return { onZoomInn, onZoomUt };
  };

  it('skal kalle onZoomInn når zoom inn-knappen klikkes', async () => {
    const { onZoomInn, onZoomUt } = renderKomponent(true);

    await userEvent.click(screen.getByRole('button', { name: 'Zoom inn' }));

    expect(onZoomInn).toHaveBeenCalledTimes(1);
    expect(onZoomUt).not.toHaveBeenCalled();
  });

  it('skal kalle onZoomUt når zoom ut-knappen klikkes', async () => {
    const { onZoomInn, onZoomUt } = renderKomponent(true);

    await userEvent.click(screen.getByRole('button', { name: 'Zoom ut' }));

    expect(onZoomUt).toHaveBeenCalledTimes(1);
    expect(onZoomInn).not.toHaveBeenCalled();
  });

  it('skal deaktivere zoom inn men ikke zoom ut når kanZoomeInn er false', async () => {
    const { onZoomInn, onZoomUt } = renderKomponent(false);

    const zoomInn = screen.getByRole('button', { name: 'Zoom inn' });
    const zoomUt = screen.getByRole('button', { name: 'Zoom ut' });

    expect(zoomInn).toBeDisabled();
    expect(zoomUt).toBeEnabled();

    await userEvent.click(zoomInn);
    await userEvent.click(zoomUt);

    expect(onZoomInn).not.toHaveBeenCalled();
    expect(onZoomUt).toHaveBeenCalledTimes(1);
  });
});
