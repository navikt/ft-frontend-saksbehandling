import { UseFieldArrayAppend } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Button, Detail } from '@navikt/ds-react';

import { AktivitetStatus, Inntektskategori, KodeverkType } from '@navikt/ft-kodeverk';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';

import { AndelFieldValue } from '../../typer/FieldValues';
import { KodeverkForPanel } from '../../typer/KodeverkForPanelForFb';

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

type Props = {
  leggTilAndel: UseFieldArrayAppend<AndelFieldValue>;
  kodeverkSamling: KodeverkForPanel;
};

export const AddDagpengerAndelButton = ({ leggTilAndel, kodeverkSamling }: Props) => {
  const aktivitetStatuser = kodeverkSamling[KodeverkType.AKTIVITET_STATUS];
  return (
    <FlexRow className={styles.buttonRow}>
      <FlexColumn className={styles.flexColumn}>
        <Button
          icon={<PlusCircleIcon aria-hidden className={styles.addCircleIcon} />}
          onClick={() => leggTilAndel(dagpenger(aktivitetStatuser))}
          type="button"
          variant="tertiary"
        >
          <Detail className={styles.imageText}>
            <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel" />
          </Detail>
        </Button>
      </FlexColumn>
    </FlexRow>
  );
};
