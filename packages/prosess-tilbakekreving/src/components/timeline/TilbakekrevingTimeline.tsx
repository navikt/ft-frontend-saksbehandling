import React, { Component, MouseEvent, KeyboardEvent, RefObject } from 'react';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';
import { IntlShape } from 'react-intl';

import { Image } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { NavBrukerKjonn } from '@navikt/ft-kodeverk';
import { Timeline, TimeLineControl } from '@navikt/ft-tidslinje';

import urlMann from '../../images/mann.svg';
import urlKvinne from '../../images/kvinne.svg';

import TidslinjePeriode from '../../types/tidslinjePeriodeTsType';
import styles from './tilbakekrevingTimeline.less';

export const GODKJENT_CLASSNAME = 'godkjentPeriode';
export const AVVIST_CLASSNAME = 'avvistPeriode';

type Periode = {
  className?: string;
  group: number;
} & TidslinjePeriode;

const isKvinne = (kode: string) => kode === NavBrukerKjonn.KVINNE;

const getOptions = (sortedPeriods: Periode[]) => {
  const firstPeriod = sortedPeriods[0];
  const lastPeriod = sortedPeriods[sortedPeriods.length - 1];

  return {
    end: moment(lastPeriod.tom).add(2, 'days').toDate(),
    locale: moment.locale('nb'),
    margin: { item: 14 },
    max: moment(firstPeriod.fom).add(4, 'years').toDate(),
    min: moment(firstPeriod.fom).subtract(4, 'weeks').toDate(),
    moment,
    moveable: true,
    orientation: { axis: 'top' },
    showCurrentTime: false,
    stack: false,
    start: moment(firstPeriod.fom).subtract(1, 'days').toDate(),
    tooltip: { followMouse: true },
    verticalScroll: false,
    width: '100%',
    zoomable: true,
    zoomMax: 1000 * 60 * 60 * 24 * 31 * 40,
    zoomMin: 1000 * 60 * 60 * 24 * 30,
  };
};

const parseDateString = (dateString: moment.Moment | string) => moment(dateString, ISO_DATE_FORMAT).toDate();

function sortByDate(a: Periode, b: Periode) {
  if (a.fom < b.fom) {
    return -1;
  }
  if (a.fom > b.fom) {
    return 1;
  }
  return 0;
}

const parseDates = (item: Periode) => ({
  ...item,
  start: parseDateString(item.fom),

  end: parseDateString(moment(item.tom).add(1, 'days')),
});

const formatItems = (periodItems: Periode[] = []) => {
  const itemsWithDates = periodItems.map(parseDates);
  const formattedItemsArray: any = [];
  formattedItemsArray.length = 0;
  itemsWithDates.forEach(item => {
    formattedItemsArray.push(item);
  });
  return formattedItemsArray;
};

const formatGroups = (periodItems: Periode[] = []) => {
  const duplicatesRemoved = periodItems.reduce<Periode[]>((accPeriods, period) => {
    const hasPeriod = accPeriods.some(p => p.group === period.group);
    if (!hasPeriod) accPeriods.push(period);
    return accPeriods;
  }, []);
  return duplicatesRemoved.map(activity => ({
    id: activity.group,
    content: '',
  }));
};

interface OwnProps {
  perioder: TidslinjePeriode[];
  toggleDetaljevindu: (event: MouseEvent | KeyboardEvent) => void;
  selectedPeriod?: TidslinjePeriode;
  selectPeriodCallback: (...args: any[]) => any;
  hjelpetekstKomponent: React.ReactNode;
  kjonn: string;
  intl: IntlShape;
}

/**
 * TilbakekrevingTimeLine
 *
 * Presentationskomponent. Masserer data og populerer felten samt formatterar tidslinjen for tilbakekreving
 */
class TilbakekrevingTimeline extends Component<OwnProps> {
  timelineRef: RefObject<any>;

  constructor(props: OwnProps) {
    super(props);

    this.goForward = this.goForward.bind(this);
    this.goBackward = this.goBackward.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.timelineRef = React.createRef();
  }

  zoomIn() {
    this.timelineRef.current.zoomOut(0.5);
  }

  zoomOut() {
    this.timelineRef.current.zoomIn(0.5);
  }

  goForward() {
    const timeline = this.timelineRef.current;
    const currentWindowTimes = timeline.getWindow();
    const newWindowTimes = {
      start: new Date(currentWindowTimes.start).setDate(currentWindowTimes.start.getDate() + 42),
      end: new Date(currentWindowTimes.end).setDate(currentWindowTimes.end.getDate() + 42),
    };

    timeline.setWindow(newWindowTimes.start, newWindowTimes.end);
  }

  goBackward() {
    const timeline = this.timelineRef.current;
    const currentWindowTimes = timeline.getWindow();
    const newWindowTimes = {
      start: new Date(currentWindowTimes.start).setDate(currentWindowTimes.start.getDate() - 42),
      end: new Date(currentWindowTimes.end).setDate(currentWindowTimes.end.getDate() - 42),
    };

    timeline.setWindow(newWindowTimes.start, newWindowTimes.end);
  }

  render() {
    const { intl, perioder, selectedPeriod, selectPeriodCallback, toggleDetaljevindu, hjelpetekstKomponent, kjonn } =
      this.props;

    const newPerioder = perioder.map((periode: TidslinjePeriode) => {
      const className = periode.isGodkjent ? GODKJENT_CLASSNAME : AVVIST_CLASSNAME;
      return {
        ...periode,
        className: periode.isAksjonspunktOpen ? 'undefined' : className,
        group: 1,
      };
    });

    const groups = formatGroups(newPerioder);
    const items = formatItems(newPerioder);
    return (
      <div className={styles.timelineContainer}>
        <Row>
          <Column xs="1" className={styles.sokerContainer}>
            <Row>
              <Image
                className={styles.iconMedsoker}
                src={isKvinne(kjonn) ? urlKvinne : urlMann}
                alt={intl.formatMessage({ id: 'TilbakekrevingTimeline.ImageText' })}
                tooltip={intl.formatMessage({
                  id: isKvinne(kjonn) ? 'TilbakekrevingTimeline.Woman' : 'TilbakekrevingTimeline.Man',
                })}
              />
            </Row>
          </Column>
          <Column xs="11">
            <div className={styles.timeLineWrapper}>
              <div className="uttakTimeline">
                <Timeline
                  ref={this.timelineRef}
                  options={getOptions([...newPerioder].sort(sortByDate))}
                  initialItems={items}
                  initialGroups={groups}
                  selectHandler={selectPeriodCallback}
                  selection={selectedPeriod ? [selectedPeriod.id] : undefined}
                />
              </div>
            </div>
          </Column>
        </Row>
        <Row>
          <Column xs="12">
            <TimeLineControl
              goBackwardCallback={this.goBackward}
              goForwardCallback={this.goForward}
              zoomInCallback={this.zoomIn}
              zoomOutCallback={this.zoomOut}
              openPeriodInfo={toggleDetaljevindu}
              // @ts-ignore Fiks denne. Typane stemmer ikkje
              selectedPeriod={selectedPeriod}
            >
              {hjelpetekstKomponent}
            </TimeLineControl>
          </Column>
        </Row>
      </div>
    );
  }
}

export default TilbakekrevingTimeline;
