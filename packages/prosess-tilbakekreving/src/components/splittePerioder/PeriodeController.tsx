import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, ScissorsIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, HStack, Label, Spacer } from '@navikt/ds-react';

import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { DataForPeriode } from '../../types/DataForPeriode';
import { DelOppPeriodeModal, PerioderData } from './DelOppPeriodeModal';

import styles from './periodeController.module.css';

const isEdited = false;

export type SplittetPeriode = {
  fom: string;
  tom: string;
  feilutbetaling: number;
};

export interface Props {
  behandlingUuid: string;
  beregnBelop: (params?: any, keepData?: boolean) => Promise<any>;
  oppdaterSplittedePerioder: (oppdatertePerioder: SplittetPeriode[]) => void;
  setNestePeriode: () => void;
  setForrigePeriode: () => void;
  periode: DataForPeriode;
  readOnly: boolean;
  lukkPeriode: () => void;
}

export const PeriodeController = ({
  setNestePeriode,
  setForrigePeriode,
  readOnly,
  lukkPeriode,
  periode,
  beregnBelop,
  behandlingUuid,
  oppdaterSplittedePerioder,
}: Props) => {
  const intl = useIntl();

  const [showDelPeriodeModal, setShowDelPeriodeModall] = useState(false);
  const [finnesBelopMed0Verdi, setFinnesBelopMed0Verdi] = useState(false);

  const showModal = useCallback(
    (event: React.MouseEvent) => {
      setShowDelPeriodeModall(true);
      event.preventDefault();
    },
    [setShowDelPeriodeModall],
  );

  const hideModal = useCallback(() => {
    setShowDelPeriodeModall(false);
  }, []);

  const splitPeriod = (formValues: PerioderData) => {
    setFinnesBelopMed0Verdi(false);

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
      behandlingUuid,
      perioder: [forstePeriode, andrePeriode],
    };

    beregnBelop(params).then((response: { perioder: { belop: number }[] }) => {
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
          periodeData={periode}
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
