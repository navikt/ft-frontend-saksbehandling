import { type ReactNode } from 'react';

const navGra40 = '#B7B1A9';
const borderRadius = 4;

// Css er satt opp på en spesiell måte her fordi React ikke støtter psydo-element i inline css. Her er en avhengig av å dynamisk
// endre enkelte variabler i after/before. Bedre løsninger finnes sikkert?
const getArrowBoxTopCss = (alignOffset?: number, marginTop?: number, marginLeft?: number): string => `
  .arrowBoxTop${alignOffset} {
    background: #ffffff;
    border: 1px solid ${navGra40};
    border-radius: ${borderRadius}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${marginTop}px;
    margin-left: ${marginLeft}px;
    position: relative;

  }
  .arrowBoxTop${alignOffset}:before {
    background-color: #ffffff;
    border: 1px solid ${navGra40};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    top: 0;
    margin-top: -1px;
    position: absolute;
    left: ${alignOffset}px;
    transform: rotate(45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`;

const getArrowBoxLeftCss = (alignOffset?: number, marginTop?: number, marginLeft?: number): string => `
  .arrowBoxLeft${alignOffset} {
    background: #ffffff;
    border: 1px solid ${navGra40};
    border-radius: ${borderRadius}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${marginTop}px;
    margin-left: ${marginLeft}px;
    position: relative;
  }

  .arrowBoxLeft${alignOffset}:before {
    background-color: #ffffff;
    border: 1px solid ${navGra40};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    left: 0;
    margin-left: -1px;
    position: absolute;
    top: ${alignOffset}px;
    transform: rotate(-45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`;
const getArrowBox = (alignOffset?: number, alignLeft?: boolean, marginTop?: number, marginLeft?: number): string =>
  alignLeft
    ? getArrowBoxLeftCss(alignOffset, marginTop, marginLeft)
    : getArrowBoxTopCss(alignOffset, marginTop, marginLeft);
const getClassName = (alignOffset?: number, alignLeft?: boolean, hideBorder?: boolean): string => {
  if (hideBorder) {
    return '';
  }
  return alignLeft ? `arrowBoxLeft${alignOffset}` : `arrowBoxTop${alignOffset}`;
};

export interface Props {
  alignOffset?: number;
  alignLeft?: boolean;
  hideBorder?: boolean;
  children: ReactNode | ReactNode[];
  marginTop?: number;
  marginLeft?: number;
}

/*
 * ArrowBox
 *
 * Vise innhold med ramme og pil
 */
export const ArrowBox = ({
  children,
  alignOffset = 0,
  alignLeft = false,
  marginTop = 0,
  marginLeft = 0,
  hideBorder = false,
}: Props) => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: getArrowBox(alignOffset, alignLeft, marginTop, marginLeft),
      }}
    />
    <div className={getClassName(alignOffset, alignLeft, hideBorder)}>{children}</div>
  </>
);
