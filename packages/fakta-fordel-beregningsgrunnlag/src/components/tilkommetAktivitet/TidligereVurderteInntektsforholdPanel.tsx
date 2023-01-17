import { Accordion, Label } from '@navikt/ds-react';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import React, { ReactElement, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import styles from './tilkommetAktivitet.less';
import { slaaSammenPerioder } from './TilkommetAktivitetUtils';
import VurdertIForrigeBehandlingIcon from '../felles/VurdertIForrigeBehandlingIcon';
import TidligereVurderteAktiviteterPanel from './TidligereVurderteAktiviteterPanel';
import erPeriodeTilVurdering from '../util/ForlengelseUtils';

const formatDate = (date: string): string => (date ? dayjs(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const renderDateHeading = (fom: string, tom: string | undefined): ReactElement => {
  if (!tom) {
    return (
      <Label size="small">
        <FormattedMessage id="BeregningInfoPanel.FordelBG.PeriodeFom" values={{ fom: formatDate(fom) }} />
      </Label>
    );
  }
  return (
    <Label size="small">
      <FormattedMessage
        id="BeregningInfoPanel.FordelBG.PeriodeFomOgTom"
        values={{
          fom: formatDate(fom),
          tom: formatDate(tom),
        }}
      />
    </Label>
  );
};

function erVurdertTidligere(periode: VurderInntektsforholdPeriode, beregningsgrunnlag: Beregningsgrunnlag): boolean {
  return (
    !erPeriodeTilVurdering(periode, beregningsgrunnlag.forlengelseperioder) &&
    !!periode.inntektsforholdListe &&
    periode.inntektsforholdListe?.every(a => a.skalRedusereUtbetaling !== null)
  );
}

interface TidligereVurderteInntektsforholdPanel {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const TidligereVurderteInntektsforholdPanel = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId,
}: TidligereVurderteInntektsforholdPanel) => {
  const vurderInntektsforholdPerioder =
    beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder;

  if (!vurderInntektsforholdPerioder) {
    return null;
  }

  const [openPanels, setOpenPanels] = useState<string[]>([]);

  const showPanel = (fom: string) => {
    if (openPanels.includes(fom)) {
      const oppdatertePaneler = openPanels.filter(panel => panel !== fom);
      setOpenPanels(oppdatertePaneler);
    } else {
      const nyListe = openPanels.map(p => p);
      nyListe.push(fom);
      setOpenPanels(nyListe);
    }
  };

  const sammenslåttePerioder = slaaSammenPerioder(
    vurderInntektsforholdPerioder,
    beregningsgrunnlag.forlengelseperioder,
  );

  const tidligereVurderte = sammenslåttePerioder.filter(p => erVurdertTidligere(p, beregningsgrunnlag));

  if (tidligereVurderte.length === 0) {
    return null;
  }

  return (
    <>
      {tidligereVurderte.map(periode => (
        <Accordion className={styles.statusOk}>
          <Accordion.Item open={openPanels.filter(panel => panel === periode.fom).length > 0}>
            <Accordion.Header onClick={() => showPanel(periode.fom)}>
              {renderDateHeading(periode.fom, periode.tom)} <VurdertIForrigeBehandlingIcon />
            </Accordion.Header>
            <Accordion.Content>
              <TidligereVurderteAktiviteterPanel
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                vurderInntektsforholdPeriode={periode}
              />
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      ))}
    </>
  );
};
export default TidligereVurderteInntektsforholdPanel;
