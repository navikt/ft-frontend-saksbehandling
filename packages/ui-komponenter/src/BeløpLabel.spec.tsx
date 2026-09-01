import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

import { BeløpLabel } from './BeløpLabel';

describe('BeløpLabel', () => {
  beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn(),
      },
      configurable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each([
    [12345, '12 345'],
    [1234567.89, '1 234 568'],
    ['-96163.613', '−96 164'],
    ['1234', '1 234'],
    ['-1234', '−1 234'],
    [-1234, '−1 234'],
    [0, '0'],
  ])('skal formatere beløp %s til %s', async (beløp, forventetTall) => {
    render(<BeløpLabel beløp={beløp} />);
    expect(screen.getByText(forventetTall)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAccessibleName(forventetTall);

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(forventetTall);
    });
  });

  it.each([
    [1234567.89, '1 234 568'],
    [12345, '12 345'],
  ])('skal ha kr-postfix i tallet for %s', async (beløp, forventetTall) => {
    render(<BeløpLabel beløp={beløp} kr />);
    expect(screen.getByRole('button')).toHaveTextContent(`${forventetTall} kr`);
    expect(screen.getByRole('button')).toHaveAccessibleName(`${forventetTall} kroner`);

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(forventetTall);
    });
  });

  it.each([
    [null, '-', false],
    [undefined, '-', false],
    [null, '-', true],
    [undefined, '-', true],
  ])('skal formatere beløp %s til %s (kr=%s)', (beløp, forventetTall, kr) => {
    render(<BeløpLabel beløp={beløp} kr={kr} />);
    expect(screen.getByText(forventetTall)).toBeInTheDocument();
    expect(screen.queryByText(/kr/)).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
