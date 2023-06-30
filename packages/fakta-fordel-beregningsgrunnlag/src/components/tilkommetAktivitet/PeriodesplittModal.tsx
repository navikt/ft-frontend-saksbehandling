import React, { FC, useState, useCallback, useMemo } from 'react';
import { Button, Modal, Select } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage, useIntl } from 'react-intl';
import { Heading } from '@navikt/ds-react/esm/typography';
import dayjs from 'dayjs';
import { calcDays, DDMMYYYY_DATE_FORMAT, TIDENES_ENDE } from '@navikt/ft-utils';
import { TilkommetAktivitetValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import styles from './periodesplittModal.module.css';
import PeriodesplittDatoValg, { Periode } from './PeriodesplittDatoValg';

type PeriodesplittModalProps = {
  fields: TilkommetAktivitetValues[];
  forhåndsvisPeriodesplitt: (nyFom: string) => Periode[];
  utførPeriodesplitt: (nyFom: string) => void;
  skalViseModal: boolean;
  lukkModal: () => void;
};

const periodeInneholderFlereVirkedager = (periode: Periode): boolean => {
  if (!periode) {
    return false;
  }
  if (periode.tom === TIDENES_ENDE) {
    return true;
  }
  return calcDays(periode.fom, periode.tom, true) > 1;
};

const lagPerioderFraFields = (fields: TilkommetAktivitetValues[]): Periode[] =>
  fields.map(field => ({ fom: field.fom, tom: field.tom }));

const lagPeriodeString = (fom: string, tom: string): string => {
  const fomString = dayjs(fom).format(DDMMYYYY_DATE_FORMAT);
  if (tom && tom !== TIDENES_ENDE) {
    const tomString = dayjs(tom).format(DDMMYYYY_DATE_FORMAT);
    const tekst = fomString.concat(' - ', tomString);
    return tekst;
  }
  return fomString.concat(' - ');
};

const PeriodesplittModal: FC<PeriodesplittModalProps> = ({
  fields,
  forhåndsvisPeriodesplitt,
  utførPeriodesplitt,
  skalViseModal,
  lukkModal,
}) => {
  const intl = useIntl();
  const [valgtSplittdato, setValgtSplittdato] = useState<string | undefined>(undefined);
  const [valgtPeriode, setValgtPeriode] = useState<Periode | undefined>(undefined);

  const perioder = useMemo(() => lagPerioderFraFields(fields), [fields]);

  const splittPeriode = useCallback(() => {
    if (valgtSplittdato && valgtPeriode) {
      utførPeriodesplitt(valgtSplittdato);
      lukkModal();
    }
  }, [fields, valgtSplittdato]);

  const endreValgtPeriode = useCallback((event: any) => {
    const val = event.target.value;
    const valg = perioder.find(p => p.fom === val);
    if (valg) {
      setValgtPeriode(valg);
    } else {
      setValgtPeriode(undefined);
    }
  }, []);

  const periodeKanSplittes = valgtPeriode && periodeInneholderFlereVirkedager(valgtPeriode);
  if (!skalViseModal) {
    return null;
  }

  return (
    <Modal open={skalViseModal} className={styles.modal} onClose={lukkModal} shouldCloseOnOverlayClick={false}>
      <Modal.Content>
        <FlexContainer>
          <div className={styles.boks}>
            <FlexRow>
              <FlexColumn>
                <Heading size="small" level="3">
                  <FormattedMessage id="TilkommetAktivitet.Modal.Tittel" />
                </Heading>
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer sixteenPx />
            <FlexRow>
              <FlexColumn>
                <Select
                  label={intl.formatMessage({ id: 'TilkommetAktivitet.Modal.Select' })}
                  onChange={endreValgtPeriode}
                >
                  <option value={undefined}>Velg periode</option>
                  {perioder.map(periode => (
                    <option key={periode.fom} value={periode.fom}>
                      {lagPeriodeString(periode.fom, periode.tom)}
                    </option>
                  ))}
                </Select>
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer sixteenPx />
            <FlexRow className={styles.datoRad}>
              {periodeKanSplittes && (
                <PeriodesplittDatoValg
                  forhåndsvisPeriodesplitt={forhåndsvisPeriodesplitt}
                  periode={valgtPeriode}
                  setValgtDato={setValgtSplittdato}
                />
              )}
            </FlexRow>
            <VerticalSpacer twentyPx />
            <FlexRow>
              <FlexColumn>
                <Button
                  size="small"
                  variant="primary"
                  onClick={splittPeriode}
                  disabled={!valgtSplittdato}
                  autoFocus
                  type="button"
                >
                  <FormattedMessage id="TilkommetAktivitet.Modal.DelOppKnapp" />
                </Button>
              </FlexColumn>
              <FlexColumn>
                <Button size="small" variant="secondary" onClick={lukkModal} disabled={false} autoFocus type="button">
                  <FormattedMessage id="TilkommetAktivitet.Modal.AvbrytKnapp" />
                </Button>
              </FlexColumn>
            </FlexRow>
          </div>
        </FlexContainer>
      </Modal.Content>
    </Modal>
  );
};
export default PeriodesplittModal;
