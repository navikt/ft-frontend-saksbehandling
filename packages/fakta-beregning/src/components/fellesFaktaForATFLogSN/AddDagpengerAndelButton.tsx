import { AktivitetStatus, Inntektskategori, KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { Image } from '@navikt/ft-ui-komponenter';
import { Column, Row } from 'nav-frontend-grid';
import { Undertekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { UseFieldArrayAppend } from 'react-hook-form';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import addCircleIcon from '../../images/add-circle.svg';
import styles from './addAndelButton.less';
import AndelFieldValue from '../../typer/FieldValues';

const dagpenger = (aktivitetStatuser: KodeverkMedNavn[]) => ({
  andel: aktivitetStatuser.filter(({ kode }) => kode === AktivitetStatus.DAGPENGER)[0].navn,
  aktivitetStatus: AktivitetStatus.DAGPENGER,
  fastsattBelop: '',
  inntektskategori: Inntektskategori.DAGPENGER,
  nyAndel: true,
  skalKunneEndreAktivitet: true,
  lagtTilAvSaksbehandler: true,
});

const onKeyDown =
  (leggTilAndel, aktivitetStatuser) =>
  ({ key }) => {
    if (key === 'Enter') {
      leggTilAndel(dagpenger(aktivitetStatuser));
    }
  };

type OwnProps = {
  leggTilAndel: UseFieldArrayAppend<AndelFieldValue>;
  alleKodeverk: AlleKodeverk;
};

export const AddDagpengerAndelButtonImpl: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  leggTilAndel,
  alleKodeverk,
}) => {
  const aktivitetStatuser = alleKodeverk[KodeverkType.AKTIVITET_STATUS];

  return (
    <Row className={styles.buttonRow}>
      <Column xs="3">
        {
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        }
        <div
          id="leggTilAndelDiv"
          onClick={() => {
            leggTilAndel(dagpenger(aktivitetStatuser));
          }}
          onKeyDown={onKeyDown(leggTilAndel, aktivitetStatuser)}
          className={styles.addPeriode}
          role="button"
          tabIndex={0}
        >
          <Image
            className={styles.addCircleIcon}
            src={addCircleIcon}
            tooltip={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel' })}
          />
          <Undertekst className={styles.imageText}>
            <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel" />
          </Undertekst>
        </div>
      </Column>
    </Row>
  );
};

const AddDagpengerAndelButton = injectIntl(AddDagpengerAndelButtonImpl);

export default AddDagpengerAndelButton;
