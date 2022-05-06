import React, { KeyboardEvent, MouseEvent } from 'react';
import { Image } from '@navikt/ft-ui-komponenter';

import arrowRightImageUrl from '../images/arrow_right.svg';
import arrowRightFilledImageUrl from '../images/arrow_right_filled.svg';
import arrowLeftImageUrl from '../images/arrow_left.svg';
import arrowLeftFilledImageUrl from '../images/arrow_left_filled.svg';
import zoomInImageUrl from '../images/zoom_in.svg';
import zoomInImageFilledUrl from '../images/zoom_in_filled.svg';
import zoomOutImageUrl from '../images/zoom_out.svg';
import zoomOutImageFilledUrl from '../images/zoom_out_filled.svg';
import arrowDownImageUrl from '../images/arrow_down.svg';
import arrowDownFilledImageUrl from '../images/arrow_down_filled.svg';
import questionNormalUrl from '../images/question_normal.svg';
import questionHoverUrl from '../images/question_hover.svg';

import styles from './timeLineButton.less';

interface ButtonType {
  src: string;
  srcHover: string;
}

type ButtonTypes = {
  prev: ButtonType;
  next: ButtonType;
  zoomIn: ButtonType;
  zoomOut: ButtonType;
  openData: ButtonType;
  question: ButtonType;
};

export const buttonTypes: ButtonTypes = {
  prev: {
    src: arrowLeftImageUrl,
    srcHover: arrowLeftFilledImageUrl,
  },
  next: {
    src: arrowRightImageUrl,
    srcHover: arrowRightFilledImageUrl,
  },
  zoomIn: {
    src: zoomInImageUrl,
    srcHover: zoomInImageFilledUrl,
  },
  zoomOut: {
    src: zoomOutImageUrl,
    srcHover: zoomOutImageFilledUrl,
  },
  openData: {
    src: arrowDownImageUrl,
    srcHover: arrowDownFilledImageUrl,
  },
  question: {
    src: questionNormalUrl,
    srcHover: questionHoverUrl,
  },
};

interface TimeLineButtonProps {
  callback?: (event: MouseEvent | KeyboardEvent) => void;
  inverted?: boolean;
  text: string;
  type: keyof ButtonTypes;
}

const TimeLineButton: React.FunctionComponent<TimeLineButtonProps> = ({
  callback,
  inverted,
  text,
  type,
}) => (
  <Image
    {...buttonTypes[type]}
    tabIndex={0}
    className={inverted ? styles.timeLineButtonInverted : styles.timeLineButton}
    alt={text}
    tooltip={text}
    onMouseDown={callback}
    onKeyDown={callback}
    alignTooltipLeft
  />
);

TimeLineButton.defaultProps = {
  inverted: false,
};

export default TimeLineButton;
