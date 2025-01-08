import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Table } from '@navikt/ds-react';
import { dateFormat, TIDENES_ENDE } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingAndel, TidligereUtbetalinger } from '@navikt/ft-types';

import { createVisningsnavnForAktivitetRefusjon } from '../util/visningsnavnHelper';

const utbetalingTil = (utbetalinger: TidligereUtbetalinger[], andelsnavn: string): ReactElement<any>[] =>
  utbetalinger.map(utbetaling => (
    <div key={`${andelsnavn}_(${utbetaling.fom}_(${utbetaling.erTildeltRefusjon})`}>
      {utbetaling && utbetaling.erTildeltRefusjon ? (
        <BodyShort>{andelsnavn}</BodyShort>
      ) : (
        <BodyShort>
          <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Direkteutbetaling" />
        </BodyShort>
      )}
    </div>
  ));

const lagPeriode = (utbetaling: TidligereUtbetalinger): ReactElement<any> | undefined => {
  if (!utbetaling) {
    return undefined;
  }
  const utbTom = utbetaling.tom === TIDENES_ENDE ? undefined : utbetaling.tom;
  return (
    <BodyShort>
      <FormattedMessage
        id="BeregningInfoPanel.RefusjonBG.Periode"
        values={{ fom: dateFormat(utbetaling.fom), tom: utbTom ? dateFormat(utbTom) : '' }}
      />
    </BodyShort>
  );
};

const perioder = (utbetalinger: TidligereUtbetalinger[]): ReactElement<any>[] =>
  utbetalinger.map(utbetaling => (
    <div key={`${utbetaling.fom}_(${utbetaling.erTildeltRefusjon})`}>{lagPeriode(utbetaling)}</div>
  ));

type OwnProps = {
  refusjonAndel: RefusjonTilVurderingAndel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const TidligereUtbetalingRad: FunctionComponent<OwnProps> = ({
  refusjonAndel,
  arbeidsgiverOpplysningerPerId,
}) => (
  <Table.Row>
    <Table.DataCell>
      <BodyShort>{createVisningsnavnForAktivitetRefusjon(refusjonAndel, arbeidsgiverOpplysningerPerId)}</BodyShort>
    </Table.DataCell>
    <Table.DataCell>
      {utbetalingTil(
        refusjonAndel.tidligereUtbetalinger || [],
        createVisningsnavnForAktivitetRefusjon(refusjonAndel, arbeidsgiverOpplysningerPerId),
      )}
    </Table.DataCell>
    <Table.DataCell>{perioder(refusjonAndel.tidligereUtbetalinger || [])}</Table.DataCell>
  </Table.Row>
);

export default TidligereUtbetalingRad;
