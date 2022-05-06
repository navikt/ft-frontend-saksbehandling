import React, { Component, MouseEvent, KeyboardEvent } from 'react';
import { IntlShape } from 'react-intl';

import TilbakekrevingTimeline from './TilbakekrevingTimeline';
import TidslinjePeriode from '../../types/tidslinjePeriodeTsType';

interface PureOwnProps {
  perioder: TidslinjePeriode[];
  valgtPeriode?: TidslinjePeriode;
  setPeriode: (periode: TidslinjePeriode) => void;
  toggleDetaljevindu: (event: MouseEvent | KeyboardEvent) => void;
  kjonn: string;
  hjelpetekstKomponent: React.ReactNode;
  intl: IntlShape;
}

interface StateProps {
  valgtPeriode?: TidslinjePeriode;
}

class TilbakekrevingTimelinePanel extends Component<PureOwnProps, StateProps> {
  constructor(props: PureOwnProps) {
    super(props);
    this.state = {
      valgtPeriode: undefined,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: PureOwnProps): void {
    const { valgtPeriode: vPeriode } = nextProps;
    const { valgtPeriode } = this.state;

    if (vPeriode !== valgtPeriode) {
      this.setState((state: StateProps) => ({
        ...state,
        valgtPeriode: vPeriode,
      }));
    }
  }

  selectHandler = (eventProps: any): void => {
    const { perioder, setPeriode } = this.props;
    const valgtPeriode = perioder.find((periode: TidslinjePeriode) => periode.id === eventProps.items[0]);
    if (valgtPeriode) {
      setPeriode(valgtPeriode);
      this.setState({ valgtPeriode });
    }
    eventProps.event.preventDefault();
  };

  render() {
    const { perioder, toggleDetaljevindu, hjelpetekstKomponent, kjonn, intl } = this.props;
    const { valgtPeriode } = this.state;

    return (
      <TilbakekrevingTimeline
        perioder={perioder}
        selectedPeriod={valgtPeriode}
        selectPeriodCallback={this.selectHandler}
        toggleDetaljevindu={toggleDetaljevindu}
        hjelpetekstKomponent={hjelpetekstKomponent}
        kjonn={kjonn}
        intl={intl}
      />
    );
  }
}

export default TilbakekrevingTimelinePanel;
