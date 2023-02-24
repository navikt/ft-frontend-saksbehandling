import React, { FunctionComponent, ReactNode, MouseEvent, KeyboardEvent } from 'react';
import { createIntl } from '@navikt/ft-utils';

import TimeLineButton from './TimeLineButton';

import messages from '../../i18n/nb_NO.json';

import styles from './timeLineControl.module.css';

const intl = createIntl(messages);

interface Periode {
  fom: string;
  tom: string;
  id: string | number;
  className?: string;
  hoverText?: string;
}

interface TimeLineControlProps {
  children?: ReactNode;
  goBackwardCallback: (event: MouseEvent | KeyboardEvent) => void;
  goForwardCallback: (event: MouseEvent | KeyboardEvent) => void;
  openPeriodInfo: (event: MouseEvent | KeyboardEvent) => void;
  selectedPeriod?: Periode;
  zoomInCallback: (event: MouseEvent | KeyboardEvent) => void;
  zoomOutCallback: (event: MouseEvent | KeyboardEvent) => void;
}

/*
 * Timeline controller
 *
 * Holds the controls for the timeline (zoom, traversing left/right and opening the data area)
 */
const TimeLineControl: FunctionComponent<TimeLineControlProps> = ({
  children,
  goBackwardCallback,
  goForwardCallback,
  openPeriodInfo,
  selectedPeriod,
  zoomInCallback,
  zoomOutCallback,
}) => {
  const t = intl.formatMessage;
  return (
    <div>
      {children}
      <TimeLineButton
        inverted={selectedPeriod !== undefined}
        text={t({ id: 'Timeline.openData' })}
        type="openData"
        callback={openPeriodInfo}
      />
      <span className={styles.buttonSpacing}>
        <TimeLineButton text={t({ id: 'Timeline.zoomIn' })} type="zoomIn" callback={zoomInCallback} />
        <TimeLineButton text={t({ id: 'Timeline.zoomOut' })} type="zoomOut" callback={zoomOutCallback} />
      </span>
      <TimeLineButton text={t({ id: 'Timeline.prevPeriod' })} type="prev" callback={goBackwardCallback} />
      <TimeLineButton text={t({ id: 'Timeline.nextPeriod' })} type="next" callback={goForwardCallback} />
    </div>
  );
};

export default TimeLineControl;
