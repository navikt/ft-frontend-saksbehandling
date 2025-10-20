import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, ScissorsIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, HStack, Label, Spacer } from '@navikt/ds-react';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import type { ForeldelsesresultatActivity } from '../../types/ForeldelsesresultatActivity';
import { DelOppPeriodeModal, type PerioderData } from './DelOppPeriodeModal';

import styles from './periodeController.module.css';

const isEdited = false;

export type BeregnBeløpParams = {
  behandlingUuid: string;
  perioder: {
    belop: number;
    fom: string;
    tom: string;
    begrunnelse: string;
  }[];
};

export type BeregnBeløpResultat = { perioder: { belop: number }[] };

export type PeriodeMedFeilutbetaling = {
  fom: string;
  tom: string;
  feilutbetaling: number;
};

interface Props {
  behandlingUuid: string;
  beregnBelop: (data: BeregnBeløpParams) => Promise<BeregnBeløpResultat>;
  oppdaterSplittedePerioder: (data: PeriodeMedFeilutbetaling[]) => void;
  setNestePeriode: (event: React.KeyboardEvent | React.MouseEvent) => void;
  setForrigePeriode: (event: React.KeyboardEvent | React.MouseEvent) => void;
  valgtPeriode: ForeldelsesresultatActivity;
  readOnly: boolean;
  lukkPeriode: () => void;
}

export const PeriodeController = ({
  valgtPeriode,
  beregnBelop: callBeregnBelop,
  behandlingUuid: selectedBehandlingUuid,
  oppdaterSplittedePerioder,
  setNestePeriode,
  setForrigePeriode,
  readOnly,
  lukkPeriode,
}: Props) => {
  const intl = useIntl();

  const [showDelPeriodeModal, setShowDelPeriodeModal] = useState(false);
  const [finnesBelopMed0Verdi, setFinnesBelopMed0Verdi] = useState(false);

  const showModal = (event: React.MouseEvent | React.KeyboardEvent): void => {
    setShowDelPeriodeModal(true);
    event.preventDefault();
  };

  const hideModal = (): void => {
    setShowDelPeriodeModal(false);
  };

  const splitPeriod = (formValues: PerioderData): void => {
    setFinnesBelopMed0Verdi(false);

    const forstePeriode = {
      belop: valgtPeriode.feilutbetaling,
      fom: formValues.forstePeriode.fom,
      tom: formValues.forstePeriode.tom,
      begrunnelse: valgtPeriode.begrunnelse ? valgtPeriode.begrunnelse : ' ',
    };
    const andrePeriode = {
      belop: valgtPeriode.feilutbetaling,
      fom: formValues.andrePeriode.fom,
      tom: formValues.andrePeriode.tom,
      begrunnelse: valgtPeriode.begrunnelse ? valgtPeriode.begrunnelse : ' ',
    };

    const params = {
      behandlingUuid: selectedBehandlingUuid,
      perioder: [forstePeriode, andrePeriode],
    };

    callBeregnBelop(params).then((response: { perioder: { belop: number }[] }) => {
      const { perioder } = response;
      const harPeriodeMedBelop0 = perioder.some(p => p.belop === 0);
      if (harPeriodeMedBelop0) {
        setFinnesBelopMed0Verdi(true);
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
        hideModal();
        oppdaterSplittedePerioder([forstePeriodeMedBeløp, andrePeriodeMedBeløp]);
      }
    });
  };

  return (
    <HStack>
      <Label size="small">
        <FormattedMessage id="PeriodeController.Detaljer" />
        {isEdited && <EditedIcon />}
      </Label>
      {!readOnly && (
        <>
          <Spacer />
          <Button
            className={styles.margin}
            size="xsmall"
            icon={<ScissorsIcon aria-hidden />}
            onClick={showModal}
            variant="tertiary-neutral"
            type="button"
            title={intl.formatMessage({ id: 'PeriodeController.DelOppPerioden' })}
          >
            <FormattedMessage id="PeriodeController.DelOppPerioden" />
          </Button>
        </>
      )}
      {showDelPeriodeModal && (
        <DelOppPeriodeModal
          cancelEvent={hideModal}
          showModal={showDelPeriodeModal}
          periodeData={valgtPeriode}
          splitPeriod={splitPeriod}
          finnesBelopMed0Verdi={finnesBelopMed0Verdi}
        />
      )}
      <Spacer />
      <Button
        className={styles.margin}
        size="xsmall"
        icon={<ArrowLeftIcon aria-hidden />}
        onClick={setForrigePeriode}
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
        onClick={setNestePeriode}
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
    </HStack>
  );
};
