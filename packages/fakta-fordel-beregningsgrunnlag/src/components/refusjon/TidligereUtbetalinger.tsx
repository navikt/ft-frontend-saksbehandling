import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Table } from '@navikt/ft-ui-komponenter';
import { Beregningsgrunnlag, RefusjonTilVurderingAndel, ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';

import TidligereUtbetalingRad from './TidligereUtbetalingRad';

import styles from './tidligereUtbetalinger.less';

type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const lagRadNøkkel = (andel: RefusjonTilVurderingAndel): string => {
  if (andel.arbeidsgiver.arbeidsgiverAktørId) {
    return `${andel.arbeidsgiver.arbeidsgiverAktørId}${andel.internArbeidsforholdRef})`;
  }
  return `${andel.arbeidsgiver.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef})`;
};

export const TidligereUtbetalinger: FunctionComponent<OwnProps> = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId,
}) => {
  const { andeler } = beregningsgrunnlag.refusjonTilVurdering;
  return (
    <Row>
      <Column xs="8">
        <Table
          headerTextCodes={[
            'BeregningInfoPanel.RefusjonBG.Aktivitet',
            'BeregningInfoPanel.RefusjonBG.TidligereUtb',
            'BeregningInfoPanel.RefusjonBG.GjeldendeFra',
          ]}
          noHover
          classNameTable={styles.tabell}
        >
          {andeler.map(andel => (
            <TidligereUtbetalingRad
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              refusjonAndel={andel}
              key={lagRadNøkkel(andel)}
            />
          ))}
        </Table>
      </Column>
    </Row>
  );
};

export default TidligereUtbetalinger;
