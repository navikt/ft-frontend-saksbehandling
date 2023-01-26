import { Accordion, Label } from '@navikt/ds-react';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import React, { ReactElement, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import styles from './tilkommetAktivitetAccordion.less';
import { erVurdertTidligere, slaaSammenPerioder } from './TilkommetAktivitetUtils';
import VurdertIForrigeBehandlingIcon from '../felles/VurdertIForrigeBehandlingIcon';
import TidligereVurderteAktiviteterPanel from './TidligereVurderteAktiviteterPanel';
import TilkommetAktivitetField from './TilkommetAktivitetField';

const formatDate = (date: string): string => (date ? dayjs(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const renderDateHeading = (fom: string, tom: string | undefined): ReactElement => {
  if (!tom || tom === '9999-12-31') {
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

function finnFørsteFom(perioder: VurderInntektsforholdPeriode[]) {
  return perioder.map(p => p.fom).sort((t1, t2) => (dayjs(t1).isBefore(dayjs(t2)) ? -1 : 1))[0];
}

function finnSisteTom(perioder: VurderInntektsforholdPeriode[]) {
  return perioder.map(p => p.tom).sort((t1, t2) => (dayjs(t1).isAfter(dayjs(t2)) ? -1 : 1))[0];
}

function getHeading(perioder: VurderInntektsforholdPeriode[]) {
  const fom = finnFørsteFom(perioder);
  const tom = finnSisteTom(perioder);
  return renderDateHeading(fom, tom);
}

interface TilkommetAktivitetAccordion {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formName: string;
  index: number;
  readOnly: boolean;
  submittable: boolean;
}

const TilkommetAktivitetAccordion = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId,
  formName,
  index,
  readOnly,
  submittable,
}: TilkommetAktivitetAccordion) => {
  const [sammenslåttePerioder, setSammenslåttePerioder] = useState<VurderInntektsforholdPeriode[]>([]);
  const [openPanels, setOpenPanels] = useState<string[]>([]);

  useEffect(() => {
    const vurderInntektsforholdPerioder =
      beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder;
    if (vurderInntektsforholdPerioder) {
      const perioder = slaaSammenPerioder(vurderInntektsforholdPerioder, beregningsgrunnlag.forlengelseperioder);
      setSammenslåttePerioder(perioder);
      const åpnePaneler = perioder
        .filter(p => !erVurdertTidligere(p, beregningsgrunnlag))
        .filter(periode => !!periode.fom)
        .map(periode => periode.fom || ''); // Typscript forstår ikke at fom alltid vil være definert her, så må en hack til...
      setOpenPanels(åpnePaneler);
    }
  }, [beregningsgrunnlag]);

  const tidligereVurderte = sammenslåttePerioder.filter(p => erVurdertTidligere(p, beregningsgrunnlag));
  const ikkeVurdertTidligere = sammenslåttePerioder.filter(p => !erVurdertTidligere(p, beregningsgrunnlag));

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

  if (tidligereVurderte.length === 0) {
    // Viser ikke accordion dersom ingen tidligere vurderte perioder
    return (
      <TilkommetAktivitetField
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        vurderInntektsforholdPerioder={ikkeVurdertTidligere}
        formName={formName}
        index={index}
        readOnly={readOnly}
        submittable={submittable}
      />
    );
  }

  return (
    <Accordion className={styles.statusOk}>
      {tidligereVurderte.map(periode => (
        <Accordion.Item open={openPanels.filter(panel => panel === periode.fom).length > 0} key={periode.fom}>
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
      ))}
      <Accordion.Item
        open={openPanels.filter(panel => panel === finnFørsteFom(ikkeVurdertTidligere)).length > 0}
        key={finnFørsteFom(ikkeVurdertTidligere)}
      >
        <Accordion.Header onClick={() => showPanel(finnFørsteFom(ikkeVurdertTidligere))}>
          {getHeading(ikkeVurdertTidligere)}
        </Accordion.Header>
        <Accordion.Content>
          <TilkommetAktivitetField
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            vurderInntektsforholdPerioder={ikkeVurdertTidligere}
            formName={formName}
            index={index}
            readOnly={readOnly}
            submittable={submittable}
          />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};
export default TilkommetAktivitetAccordion;
