import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { FlexColumn, FlexRow, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { dateFormat, TIDENES_ENDE } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingAndel, TidligereUtbetalinger } from '@navikt/ft-types';

import { createVisningsnavnForAktivitetRefusjon } from '../util/visningsnavnHelper';

import styles from './tidligereUtbetalinger.less';

const utbetalingTil = (utbetalinger: TidligereUtbetalinger[], andelsnavn: string): ReactElement[] =>
  utbetalinger.map(utbetaling => (
    <FlexRow
      className={styles.correctPadding}
      key={`${andelsnavn}_(${utbetaling.fom}_(${utbetaling.erTildeltRefusjon})`}
    >
      <FlexColumn>
        {utbetaling && utbetaling.erTildeltRefusjon ? (
          <BodyShort size="small">{andelsnavn}</BodyShort>
        ) : (
          <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Direkteutbetaling" />
        )}
      </FlexColumn>
    </FlexRow>
  ));

const lagPeriode = (utbetaling: TidligereUtbetalinger): ReactElement | undefined => {
  if (!utbetaling) {
    return undefined;
  }
  const utbTom = utbetaling.tom === TIDENES_ENDE ? undefined : utbetaling.tom;
  return (
    <FormattedMessage
      id="BeregningInfoPanel.RefusjonBG.Periode"
      values={{ fom: dateFormat(utbetaling.fom), tom: utbTom ? dateFormat(utbTom) : '' }}
    />
  );
};

const perioder = (utbetalinger: TidligereUtbetalinger[]): ReactElement[] =>
  utbetalinger.map(utbetaling => (
    <FlexRow className={styles.correctPadding} key={`${utbetaling.fom}_(${utbetaling.erTildeltRefusjon})`}>
      <FlexColumn>{lagPeriode(utbetaling)}</FlexColumn>
    </FlexRow>
  ));

type OwnProps = {
  refusjonAndel?: RefusjonTilVurderingAndel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const TidligereUtbetalingRad: FunctionComponent<OwnProps> = ({
  refusjonAndel,
  arbeidsgiverOpplysningerPerId,
}) => (
  <TableRow>
    <TableColumn>{createVisningsnavnForAktivitetRefusjon(refusjonAndel, arbeidsgiverOpplysningerPerId)}</TableColumn>
    <TableColumn>
      {utbetalingTil(
        refusjonAndel.tidligereUtbetalinger,
        createVisningsnavnForAktivitetRefusjon(refusjonAndel, arbeidsgiverOpplysningerPerId),
      )}
    </TableColumn>
    <TableColumn>{perioder(refusjonAndel.tidligereUtbetalinger)}</TableColumn>
  </TableRow>
);

export default TidligereUtbetalingRad;
