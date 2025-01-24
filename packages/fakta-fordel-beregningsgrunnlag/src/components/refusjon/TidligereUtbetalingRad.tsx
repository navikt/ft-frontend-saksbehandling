import { BodyShort, Table } from '@navikt/ds-react';
import { ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingAndel, TidligereUtbetalinger } from '@navikt/ft-types';
import { dateFormat, TIDENES_ENDE } from '@navikt/ft-utils';
import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { createVisningsnavnForAktivitetRefusjon } from '../util/visningsnavnHelper';

const utbetalingTil = (utbetalinger: TidligereUtbetalinger[], andelsnavn: string): ReactElement[] =>
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

const lagPeriode = (utbetaling: TidligereUtbetalinger): ReactElement | undefined => {
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

const perioder = (utbetalinger: TidligereUtbetalinger[]): ReactElement[] =>
  utbetalinger.map(utbetaling => (
    <div key={`${utbetaling.fom}_(${utbetaling.erTildeltRefusjon})`}>{lagPeriode(utbetaling)}</div>
  ));

type Props = {
  refusjonAndel: RefusjonTilVurderingAndel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const TidligereUtbetalingRad = ({ refusjonAndel, arbeidsgiverOpplysningerPerId }: Props) => (
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
