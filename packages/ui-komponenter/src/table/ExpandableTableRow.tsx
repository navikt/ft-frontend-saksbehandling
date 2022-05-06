import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames/bind';

import { createIntl } from '@navikt/ft-utils';

import pilOppIkonUrl from '../images/pil_opp.svg';
import pilNedIkonUrl from '../images/pil_ned.svg';
import TableColumn from './TableColumn';
import TableRow from './TableRow';
import Image from '../Image';

import messages from '../../i18n/nb_NO.json';
import FloatRight from '../FloatRight';

import styles from './expandableTableRow.less';

const classNames = classnames.bind(styles);

const intl = createIntl(messages);

interface OwnProps {
  showContent: boolean;
  content: ReactNode;
  toggleContent: () => void;
  children: ReactNode | ReactNode[];
  isApLeftBorder?: boolean;
}

const ExpandableTableRow: FunctionComponent<OwnProps> = ({
  showContent,
  content,
  toggleContent,
  children,
  isApLeftBorder = false,
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
          <Image
            alt={intl.formatMessage({ id: showContent ? 'ExpandableTableRow.Lukke' : 'ExpandableTableRow.Apne' })}
            src={showContent ? pilOppIkonUrl : pilNedIkonUrl}
          />
        </FloatRight>
      </TableColumn>
    </TableRow>
    <TableRow
      noHover
      isApLeftBorder={isApLeftBorder}
      className={showContent ? styles.activeRow : styles.hidden}
      isSelected={showContent}
    >
      <TableColumn className={showContent ? styles.active : styles.hidden} />
      <TableColumn colspanAll className={showContent ? styles.active : styles.hidden}>
        <div className={showContent ? styles.active : styles.hidden}>{content}</div>
      </TableColumn>
    </TableRow>
  </>
);

export default ExpandableTableRow;
