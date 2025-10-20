import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingAndel, TidligereUtbetalinger } from '@navikt/ft-types';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import { createVisningsnavnForAktivitetRefusjon } from '../util/visningsnavnHelper';

const utbetalingTil = (utbetalinger: TidligereUtbetalinger[], andelsnavn: string): ReactElement[] =>
  utbetalinger.map(utbetaling => (
    <div key={`${andelsnavn}_(${utbetaling.fom}_(${utbetaling.erTildeltRefusjon})`}>
      {utbetaling && utbetaling.erTildeltRefusjon ? (
        andelsnavn
      ) : (
        <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Direkteutbetaling" />
      )}
    </div>
  ));

const perioder = (utbetalinger: TidligereUtbetalinger[]): ReactElement[] =>
  utbetalinger
    .filter(u => u)
    .map(utbetaling => (
      <div key={`${utbetaling.fom}_(${utbetaling.erTildeltRefusjon})`}>
        <PeriodLabel dateStringFom={utbetaling.fom} dateStringTom={utbetaling.tom} />
      </div>
    ));

interface Props {
  refusjonAndel: RefusjonTilVurderingAndel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const TidligereUtbetalingRad = ({ refusjonAndel, arbeidsgiverOpplysningerPerId }: Props) => (
  <Table.Row>
    <Table.DataCell textSize="small">
      {createVisningsnavnForAktivitetRefusjon(refusjonAndel, arbeidsgiverOpplysningerPerId)}
    </Table.DataCell>
    <Table.DataCell textSize="small">
      {utbetalingTil(
        refusjonAndel.tidligereUtbetalinger || [],
        createVisningsnavnForAktivitetRefusjon(refusjonAndel, arbeidsgiverOpplysningerPerId),
      )}
    </Table.DataCell>
    <Table.DataCell textSize="small">{perioder(refusjonAndel.tidligereUtbetalinger || [])}</Table.DataCell>
  </Table.Row>
);
