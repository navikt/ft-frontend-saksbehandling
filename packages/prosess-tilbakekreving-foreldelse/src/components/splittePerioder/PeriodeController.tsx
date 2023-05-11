import React, { Component } from 'react';
import { Button, Label } from '@navikt/ds-react';
import { FormattedMessage, IntlShape } from 'react-intl';
import { EditedIcon, FlexContainer, FlexRow, FlexColumn } from '@navikt/ft-ui-komponenter';

import { ArrowLeftIcon, ArrowRightIcon, ScissorsIcon, XMarkIcon } from '@navikt/aksel-icons';
import ForeldelsesresultatActivity from '../../types/foreldelsesresultatActivitytsType';
import DelOppPeriodeModal, { PerioderData } from './DelOppPeriodeModal';

import styles from './periodeController.module.css';

const isEdited = false;

export type PeriodeMedBelop = {
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
};

export type PeriodeMedFeilutbetaling = {
  fom: string;
  tom: string;
  feilutbetaling: number;
};

interface PureOwnProps {
  behandlingUuid: string;
  beregnBelop: (data: { behandlingUuid: string; perioder: PeriodeMedBelop[] }) => Promise<any>;
  oppdaterSplittedePerioder: (data: PeriodeMedFeilutbetaling[]) => void;
  callbackForward: (event: React.KeyboardEvent | React.MouseEvent) => void;
  callbackBackward: (event: React.KeyboardEvent | React.MouseEvent) => void;
  periode: ForeldelsesresultatActivity;
  readOnly: boolean;
  intl: IntlShape;
  lukkPeriode: () => void;
}

interface StateProps {
  showDelPeriodeModal: boolean;
  finnesBelopMed0Verdi: boolean;
}

export class PeriodeController extends Component<PureOwnProps, StateProps> {
  constructor(props: PureOwnProps) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.splitPeriod = this.splitPeriod.bind(this);

    this.state = {
      showDelPeriodeModal: false,
      finnesBelopMed0Verdi: false,
    };
  }

  showModal(event: React.MouseEvent | React.KeyboardEvent): void {
    this.setState((state: StateProps) => ({
      ...state,
      showDelPeriodeModal: true,
    }));
    event.preventDefault();
  }

  hideModal(): void {
    this.setState((state: StateProps) => ({
      ...state,
      showDelPeriodeModal: false,
    }));
  }

  splitPeriod(formValues: PerioderData): void {
    this.setState((state: StateProps) => ({
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
        this.setState((state: StateProps) => ({
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
    const { intl, callbackForward, callbackBackward, periode, readOnly, lukkPeriode } = this.props;

    const { showDelPeriodeModal, finnesBelopMed0Verdi } = this.state;

    return (
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage id="PeriodeController.Detaljer" />
              {isEdited && <EditedIcon />}
            </Label>
          </FlexColumn>
          <FlexColumn className={styles.leftMargin}>
            {!readOnly && (
              <Button
                className={styles.margin}
                size="xsmall"
                icon={<ScissorsIcon aria-hidden />}
                onClick={this.showModal}
                variant="tertiary-neutral"
                type="button"
                title={intl.formatMessage({ id: 'PeriodeController.DelOppPerioden' })}
              >
                <FormattedMessage id="PeriodeController.DelOppPerioden" />
              </Button>
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
          </FlexColumn>
          <FlexColumn className={styles.fix}>
            <Button
              className={styles.margin}
              size="xsmall"
              icon={<ArrowLeftIcon aria-hidden />}
              onClick={callbackBackward}
              variant="secondary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'PeriodeController.prevPeriod' })}
            >
              <FormattedMessage id="PeriodeController.prevPeriodShort" />
            </Button>
            <Button
              className={styles.margin}
              size="xsmall"
              icon={<ArrowRightIcon aria-hidden />}
              onClick={callbackForward}
              variant="secondary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'PeriodeController.nextPeriod' })}
              iconPosition="right"
            >
              <FormattedMessage id="PeriodeController.nextPeriodShort" />
            </Button>
            <Button
              size="xsmall"
              icon={<XMarkIcon aria-hidden />}
              onClick={lukkPeriode}
              variant="tertiary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'PeriodeController.LukkPeriode' })}
            />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    );
  }
}

export default PeriodeController;
