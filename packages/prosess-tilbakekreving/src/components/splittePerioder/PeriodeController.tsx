import React, { Component } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Label } from '@navikt/ds-react';
import { FormattedMessage, IntlShape } from 'react-intl';

import { FloatRight, Image, EditedIcon } from '@navikt/ft-ui-komponenter';
import { TimeLineButton } from '@navikt/ft-tidslinje';

import splitPeriodImageHoverUrl from '../../images/splitt_hover.svg';
import splitPeriodImageUrl from '../../images/splitt.svg';

import DelOppPeriodeModal from './DelOppPeriodeModal';
import DataForPeriode from '../../types/dataForPeriodeTsType';

import styles from './periodeController.less';

const isEdited = false;

interface OwnProps {
  behandlingUuid: string;
  beregnBelop: (data: any) => Promise<any>;
  oppdaterSplittedePerioder: (...args: any[]) => any;
  callbackForward: (...args: any[]) => any;
  callbackBackward: (...args: any[]) => any;
  periode: DataForPeriode;
  readOnly: boolean;
  intl: IntlShape;
}

interface StateProps {
  showDelPeriodeModal: boolean;
  finnesBelopMed0Verdi: boolean;
}

export class PeriodeController extends Component<OwnProps, StateProps> {
  constructor(props: OwnProps) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.splitPeriod = this.splitPeriod.bind(this);

    this.state = {
      showDelPeriodeModal: false,
      finnesBelopMed0Verdi: false,
    };
  }

  showModal(event: any) {
    this.setState((state: any) => ({
      ...state,
      showDelPeriodeModal: true,
    }));
    event.preventDefault();
  }

  hideModal() {
    this.setState((state: any) => ({
      ...state,
      showDelPeriodeModal: false,
    }));
  }

  splitPeriod(formValues: any) {
    this.setState((state: any) => ({
      ...state,
      finnesBelopMed0Verdi: false,
    }));

    const {
      periode,
      beregnBelop: callBeregnBelop,
      behandlingUuid: selectedBehandlingUuid,
      oppdaterSplittedePerioder,
    } = this.props;

    const forstePeriode = {
      belop: periode.feilutbetaling,
      fom: formValues.forstePeriode.fom,
      tom: formValues.forstePeriode.tom,
      begrunnelse: periode.begrunnelse ? periode.begrunnelse : ' ',
    };
    const andrePeriode = {
      belop: periode.feilutbetaling,
      fom: formValues.andrePeriode.fom,
      tom: formValues.andrePeriode.tom,
      begrunnelse: periode.begrunnelse ? periode.begrunnelse : ' ',
    };

    const params = {
      behandlingUuid: selectedBehandlingUuid,
      perioder: [forstePeriode, andrePeriode],
    };

    callBeregnBelop(params).then((response: { perioder: { belop: number }[] }) => {
      const { perioder } = response;
      const harPeriodeMedBelop0 = perioder.some(p => p.belop === 0);
      if (harPeriodeMedBelop0) {
        this.setState((state: any) => ({
          ...state,
          finnesBelopMed0Verdi: true,
        }));
      } else {
        const forstePeriodeMedBeløp = {
          fom: forstePeriode.fom,
          tom: forstePeriode.tom,
          feilutbetaling: perioder[0].belop,
        };
        const andrePeriodeMedBeløp = {
          fom: andrePeriode.fom,
          tom: andrePeriode.tom,
          feilutbetaling: perioder[1].belop,
        };
        this.hideModal();
        oppdaterSplittedePerioder([forstePeriodeMedBeløp, andrePeriodeMedBeløp]);
      }
    });
  }

  render() {
    const { intl, callbackForward, callbackBackward, periode, readOnly } = this.props;

    const { showDelPeriodeModal, finnesBelopMed0Verdi } = this.state;

    return (
      <Row>
        <Column xs="3">
          <Label size="small">
            <FormattedMessage id="PeriodeController.Detaljer" />
            {isEdited && <EditedIcon />}
          </Label>
        </Column>
        <Column xs="7">
          {!readOnly && (
            <span className={styles.splitPeriodPosition}>
              <Image
                tabIndex={0}
                className={styles.splitPeriodImage}
                src={splitPeriodImageUrl}
                srcHover={splitPeriodImageHoverUrl}
                alt={intl.formatMessage({ id: 'PeriodeController.DelOppPerioden' })}
                onMouseDown={this.showModal}
                onKeyDown={e => (e.key === 'Enter' ? this.showModal(e) : null)}
              />
              <FormattedMessage id="PeriodeController.DelOppPerioden" />
            </span>
          )}
          {showDelPeriodeModal && (
            <DelOppPeriodeModal
              cancelEvent={this.hideModal}
              showModal={showDelPeriodeModal}
              periodeData={periode}
              splitPeriod={this.splitPeriod}
              finnesBelopMed0Verdi={finnesBelopMed0Verdi}
            />
          )}
        </Column>
        <Column xs="2">
          <FloatRight>
            <TimeLineButton
              text={intl.formatMessage({ id: 'PeriodeController.ForrigePeriode' })}
              type="prev"
              callback={callbackBackward}
            />
            <TimeLineButton
              text={intl.formatMessage({ id: 'PeriodeController.NestePeriode' })}
              type="next"
              callback={callbackForward}
            />
          </FloatRight>
        </Column>
      </Row>
    );
  }
}

export default PeriodeController;
