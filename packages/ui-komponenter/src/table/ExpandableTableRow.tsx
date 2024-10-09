import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames/bind';
import { ChevronUpIcon, ChevronDownIcon } from '@navikt/aksel-icons';
import { createIntl } from '@navikt/ft-utils';

import TableColumn from './TableColumn';
import TableRow from './TableRow';

import messages from '../../i18n/nb_NO.json';
import FloatRight from '../FloatRight';

import styles from './expandableTableRow.module.css';

const classNames = classnames.bind(styles);

const intl = createIntl(messages);

export interface OwnProps {
  showContent: boolean;
  content: ReactNode;
  toggleContent: () => void;
  children: ReactNode | ReactNode[];
  isApLeftBorder?: boolean;
  alignWithColumn?: number;
}

/**
 * @deprecated Bruk heller tabellkomponent fra https://aksel.nav.no/komponenter/core/table
 */
const ExpandableTableRow: FunctionComponent<OwnProps> = ({
  showContent,
  content,
  toggleContent,
  children,
  isApLeftBorder = false,
  alignWithColumn = 0,
}) => (
  <>
    <TableRow
      onMouseDown={toggleContent}
      onKeyDown={toggleContent}
      hasNoBottomBorder={showContent}
      isApLeftBorder={isApLeftBorder}
      noHover={showContent}
      isSelected={showContent}
    >
      {children}
      <TableColumn className={classNames('toggleIcon', showContent ? 'colTopPadding' : undefined)}>
        <FloatRight>
          {showContent && (
            <ChevronUpIcon title={intl.formatMessage({ id: 'ExpandableTableRow.Lukke' })} fontSize="1.5rem" />
          )}
          {!showContent && (
            <ChevronDownIcon title={intl.formatMessage({ id: 'ExpandableTableRow.Apne' })} fontSize="1.5rem" />
          )}
        </FloatRight>
      </TableColumn>
    </TableRow>
    <TableRow
      noHover
      isApLeftBorder={isApLeftBorder}
      className={showContent ? styles.activeRow : styles.hidden}
      isSelected={showContent}
    >
      {[...Array(alignWithColumn)].map((_v, index) => (
        <TableColumn key={index} className={showContent ? styles.active : styles.hidden} />
      ))}
      <TableColumn colspanAll className={showContent ? styles.active : styles.hidden}>
        <div className={showContent ? styles.active : styles.hidden}>{content}</div>
      </TableColumn>
    </TableRow>
  </>
);

export default ExpandableTableRow;
