import React, { FunctionComponent, MouseEvent, KeyboardEvent } from 'react';
import { useIntl } from 'react-intl';

import TimeLineButton from './TimeLineButton';

const TimeLineNavigation: FunctionComponent<{ openPeriodInfo: (event: MouseEvent | KeyboardEvent) => void }> = ({
  openPeriodInfo,
}) => {
  const intl = useIntl();
  return (
    <TimeLineButton text={intl.formatMessage({ id: 'Timeline.openData' })} type="openData" callback={openPeriodInfo} />
  );
};

export default TimeLineNavigation;
