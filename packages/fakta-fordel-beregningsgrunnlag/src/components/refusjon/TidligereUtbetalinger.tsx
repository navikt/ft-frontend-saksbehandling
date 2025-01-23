import { Table } from '@navikt/ds-react';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, RefusjonTilVurderingAndel } from '@navikt/ft-types';
import { FormattedMessage } from 'react-intl';

import { TidligereUtbetalingRad } from './TidligereUtbetalingRad';

import styles from './tidligereUtbetalinger.module.css';

type Props = {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const lagRadNøkkel = (andel: RefusjonTilVurderingAndel): string => {
  if (!andel.arbeidsgiver) {
    return `${andel.aktivitetStatus}${andel.internArbeidsforholdRef})`;
  }
  if (andel.arbeidsgiver.arbeidsgiverAktørId) {
    return `${andel.arbeidsgiver.arbeidsgiverAktørId}${andel.internArbeidsforholdRef})`;
  }
  return `${andel.arbeidsgiver.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef})`;
};

export const TidligereUtbetalinger = ({ beregningsgrunnlag, arbeidsgiverOpplysningerPerId }: Props) => {
  const andeler = beregningsgrunnlag.refusjonTilVurdering?.andeler || [];
  return (
    <div className={styles.tabellContainer}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Aktivitet" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="BeregningInfoPanel.RefusjonBG.TidligereUtb" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="BeregningInfoPanel.RefusjonBG.GjeldendeFra" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {andeler.map(andel => (
            <TidligereUtbetalingRad
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              refusjonAndel={andel}
              key={lagRadNøkkel(andel)}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
