import { Detail } from '@navikt/ds-react/esm';
import { AktivitetStatus, Inntektskategori, KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { FlexColumn, FlexRow, Image } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { UseFieldArrayAppend } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import addCircleIcon from '../../images/add-circle.svg';
import AndelFieldValue from '../../typer/FieldValues';
import styles from './addAndelButton.module.css';

const dagpenger = (aktivitetStatuser: KodeverkMedNavn[]) => ({
  andel: aktivitetStatuser.filter(({ kode }) => kode === AktivitetStatus.DAGPENGER)[0].navn,
  aktivitetStatus: AktivitetStatus.DAGPENGER,
  fastsattBelop: '',
  inntektskategori: Inntektskategori.DAGPENGER,
  nyAndel: true,
  skalKunneEndreAktivitet: true,
  lagtTilAvSaksbehandler: true,
});

type OwnProps = {
  leggTilAndel: UseFieldArrayAppend<AndelFieldValue>;
  alleKodeverk: AlleKodeverk;
};

export const AddDagpengerAndelButton: FunctionComponent<OwnProps> = ({ leggTilAndel, alleKodeverk }) => {
  const aktivitetStatuser = alleKodeverk[KodeverkType.AKTIVITET_STATUS];
  const intl = useIntl();
  return (
    <FlexRow className={styles.buttonRow}>
      <FlexColumn className={styles.flexColumn}>
        {
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        }
        <button
          id="leggTilAndelDiv"
          onClick={() => {
            leggTilAndel(dagpenger(aktivitetStatuser));
          }}
          className={styles.addPeriode}
          type="button"
        >
          <Image
            className={styles.addCircleIcon}
            src={addCircleIcon}
            tooltip={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel' })}
          />
          <Detail className={styles.imageText}>
            <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel" />
          </Detail>
        </button>
      </FlexColumn>
    </FlexRow>
  );
};

export default AddDagpengerAndelButton;
