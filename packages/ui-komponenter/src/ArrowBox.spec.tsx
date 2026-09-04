import { render, screen } from '@testing-library/react';

import { ArrowBox } from './ArrowBox';

import styles from './arrowBox.module.css';

describe('ArrowBox', () => {
  it('viser pilen på toppen som standard', () => {
    render(<ArrowBox>Innhold</ArrowBox>);

    const boks = screen.getByText('Innhold');

    expect(boks).toHaveClass(styles.arrowBox, styles.top);
    expect(boks).not.toHaveClass(styles.left);
    expect(boks.style.getPropertyValue('--arrow-box-align-offset')).toBe('0px');
  });

  it('viser pilen på toppen med angitt plassering', () => {
    render(
      <ArrowBox alignOffset={24} marginLeft={4} marginTop={16}>
        Innhold
      </ArrowBox>,
    );

    const boks = screen.getByText('Innhold');

    expect(boks).toHaveClass(styles.arrowBox, styles.top);
    expect(boks.style.getPropertyValue('--arrow-box-align-offset')).toBe('24px');
    expect(boks.style.getPropertyValue('--arrow-box-margin-left')).toBe('4px');
    expect(boks.style.getPropertyValue('--arrow-box-margin-top')).toBe('16px');
  });

  it('viser pilen på venstre side med angitt plassering', () => {
    render(
      <ArrowBox alignLeft alignOffset={32} marginLeft={20} marginTop={8}>
        Innhold
      </ArrowBox>,
    );

    const boks = screen.getByText('Innhold');

    expect(boks).toHaveClass(styles.arrowBox, styles.left);
    expect(boks).not.toHaveClass(styles.top);
    expect(boks.style.getPropertyValue('--arrow-box-align-offset')).toBe('32px');
    expect(boks.style.getPropertyValue('--arrow-box-margin-left')).toBe('20px');
    expect(boks.style.getPropertyValue('--arrow-box-margin-top')).toBe('8px');
  });

  it('beholder plasseringen for flere instanser', () => {
    render(
      <>
        <ArrowBox alignOffset={12}>Første</ArrowBox>
        <ArrowBox alignLeft alignOffset={48}>
          Andre
        </ArrowBox>
      </>,
    );

    expect(screen.getByText('Første').style.getPropertyValue('--arrow-box-align-offset')).toBe('12px');
    expect(screen.getByText('Andre').style.getPropertyValue('--arrow-box-align-offset')).toBe('48px');
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
