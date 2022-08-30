import React, { FunctionComponent, ReactNode } from 'react';
import { range } from '@navikt/ft-utils';
import { EditedIcon, FlexContainer, FlexRow, FlexColumn } from '@navikt/ft-ui-komponenter';
import styles from './optionGrid.less';

export type Direction = 'horizontal' | 'vertical';

interface OwnProps {
  columns?: number;
  options: ReactNode[];
  spaceBetween?: boolean;
  isEdited?: boolean;
  direction?: Direction;
  rows?: number;
}

const OptionGrid: FunctionComponent<OwnProps> = ({ columns, rows, options, spaceBetween, isEdited, direction }) => {
  if (direction === 'vertical') {
    const numRows = rows || options.length;
    return (
      <FlexContainer>
        <FlexColumn className={`${styles.fullBreddeIE} optionGridFlexColumn`}>
          {range(numRows).map((rowIndex: number) => (
            <FlexRow key={`row${rowIndex}`} spaceBetween={spaceBetween}>
              {options.filter((_option, optionIndex) => optionIndex % numRows === rowIndex)}
              {isEdited && <EditedIcon className="radioEdited" />}
            </FlexRow>
          ))}
        </FlexColumn>
      </FlexContainer>
    );
  }
  const numColumns = columns || options.length;
  return (
    <FlexContainer>
      <FlexRow className="optionGridFlexRow" spaceBetween={spaceBetween}>
        {range(numColumns).map((columnIndex: number) => (
          <FlexColumn className="optionGridFlexColumn" key={`column${columnIndex}`}>
            {options.filter((_option, optionIndex) => optionIndex % numColumns === columnIndex)}
          </FlexColumn>
        ))}
        {isEdited && <EditedIcon className="radioEdited" />}
      </FlexRow>
    </FlexContainer>
  );
};

OptionGrid.defaultProps = {
  columns: 0,
  rows: 0,
  spaceBetween: false,
  isEdited: false,
  direction: 'horizontal',
};

export default OptionGrid;
