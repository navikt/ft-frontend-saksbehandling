import { render, screen } from '@testing-library/react';

import { BeløpLabel } from './BeløpLabel';

describe('BeløpLabel', () => {
  it.each([
    [12345, '12 345'],
    [1234567.89, '1 234 568'],
    ['-96163.613', '−96 164'],
    ['1234', '1 234'],
    ['-1234', '−1 234'],
    [-1234, '−1 234'],
    [0, '0'],
    [null, '-'],
    [undefined, '-'],
  ])('skal formatere beløp %s til %s', (beløp, expected) => {
    render(<BeløpLabel beløp={beløp} />);
    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it('skal ha kr-postfix', () => {
    render(<BeløpLabel beløp="1" kr />);
    expect(screen.getByText('1 kr')).toBeInTheDocument();
  });
});
