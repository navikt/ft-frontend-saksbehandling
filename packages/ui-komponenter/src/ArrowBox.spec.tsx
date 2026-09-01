import { render, screen } from '@testing-library/react';

import { ArrowBox } from './ArrowBox';

describe('ArrowBox', () => {
  it('beholder styling per instans uten å legge til globale style-elementer', () => {
    const { container } = render(
      <>
        <ArrowBox alignOffset={12} marginTop={8}>
          Første
        </ArrowBox>
        <ArrowBox alignOffset={24} marginTop={16}>
          Andre
        </ArrowBox>
      </>,
    );

    const førsteBoks = screen.getByText('Første');
    const andreBoks = screen.getByText('Andre');

    expect(container.querySelector('style')).not.toBeInTheDocument();
    expect(førsteBoks.style.getPropertyValue('--arrow-box-align-offset')).toBe('12px');
    expect(førsteBoks.style.getPropertyValue('--arrow-box-margin-top')).toBe('8px');
    expect(andreBoks.style.getPropertyValue('--arrow-box-align-offset')).toBe('24px');
    expect(andreBoks.style.getPropertyValue('--arrow-box-margin-top')).toBe('16px');
  });

  it('lar innholdet stå uten boks når rammen er skjult', () => {
    render(
      <ArrowBox alignOffset={12} hideBorder marginTop={8}>
        Innhold
      </ArrowBox>,
    );

    const innhold = screen.getByText('Innhold');

    expect(innhold).not.toHaveAttribute('class');
    expect(innhold).not.toHaveAttribute('style');
  });
});
