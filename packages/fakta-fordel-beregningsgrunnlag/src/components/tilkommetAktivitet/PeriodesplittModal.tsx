import { useCallback, useMemo, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Modal, Select, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { calcDays, DDMMYYYY_DATE_FORMAT, TIDENES_ENDE } from '@navikt/ft-utils';

import { TilkommetAktivitetValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { Periode, PeriodesplittDatoValg } from './PeriodesplittDatoValg';

type Props = {
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

export const PeriodesplittModal = ({
  fields,
  forhåndsvisPeriodesplitt,
  utførPeriodesplitt,
  skalViseModal,
  lukkModal,
}: Props) => {
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
    <Modal width="500px" open={skalViseModal} onClose={lukkModal} aria-label="Del opp periode">
      <Modal.Header>
        <FormattedMessage id="TilkommetAktivitet.Modal.Tittel" />
      </Modal.Header>
      <Modal.Body>
        <VStack gap="4">
          <Select
            label={intl.formatMessage({ id: 'TilkommetAktivitet.Modal.Select' })}
            onChange={endreValgtPeriode}
            size="small"
          >
            <option value={undefined}>Velg periode</option>
            {perioder.map(periode => (
              <option key={periode.fom} value={periode.fom}>
                {lagPeriodeString(periode.fom, periode.tom)}
              </option>
            ))}
          </Select>
          {periodeKanSplittes && (
            <PeriodesplittDatoValg
              forhåndsvisPeriodesplitt={forhåndsvisPeriodesplitt}
              periode={valgtPeriode}
              setValgtDato={setValgtSplittdato}
            />
          )}
        </VStack>
      </Modal.Body>
      <Modal.Footer>
        <Button size="small" variant="secondary" onClick={lukkModal} disabled={false} autoFocus type="button">
          <FormattedMessage id="TilkommetAktivitet.Modal.AvbrytKnapp" />
        </Button>
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
      </Modal.Footer>
    </Modal>
  );
};
