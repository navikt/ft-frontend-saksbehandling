import { Accordion, Label } from '@navikt/ds-react';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT, TIDENES_ENDE } from '@navikt/ft-utils';
import React, { FC, ReactElement, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { formHooks, TextAreaField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import styles from './tilkommetAktivitetAccordion.less';
import { erVurdertTidligere, slaaSammenPerioder } from './TilkommetAktivitetUtils';
import VurdertIForrigeBehandlingIcon from '../felles/VurdertIForrigeBehandlingIcon';
import TidligereVurderteAktiviteterPanel from './TidligereVurderteAktiviteterPanel';
import TilkommetAktivitetField from './TilkommetAktivitetField';
import SubmitButton from '../felles/SubmitButton';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';

const formatDate = (date: string): string => (date ? dayjs(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const renderDateHeading = (fom: string, tom: string | undefined): ReactElement => {
  if (!tom || tom === TIDENES_ENDE) {
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

type TilkommetAktivitetAccordionType = {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formName: string;
  index: number;
  readOnly: boolean;
  submittable: boolean;
  erAksjonspunktÅpent: boolean;
};

const TilkommetAktivitetAccordion: FC<TilkommetAktivitetAccordionType> = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId,
  formName,
  index,
  readOnly,
  submittable,
  erAksjonspunktÅpent,
}) => {
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

  const formMethods = formHooks.useFormContext<TilkommetAktivitetFormValues>();

  const visPanel = (periode: VurderInntektsforholdPeriode) => () => showPanel(periode.fom);

  if (tidligereVurderte.length === 0 && ikkeVurdertTidligere.length === 1) {
    // Viser ikke accordion dersom ingen tidligere vurderte perioder
    return (
      <TilkommetAktivitetField
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        vurderInntektsforholdPeriode={ikkeVurdertTidligere[0]}
        formName={formName}
        index={index}
        readOnly={readOnly}
        erAksjonspunktÅpent={erAksjonspunktÅpent}
        submittable={submittable}
        skalViseBegrunnelse
      />
    );
  }

  return (
    <>
      <Accordion className={styles.statusOk}>
        {tidligereVurderte.map(periode => (
          <Accordion.Item open={openPanels.filter(panel => panel === periode.fom).length > 0} key={periode.fom}>
            <Accordion.Header onClick={visPanel(periode)}>
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
        {ikkeVurdertTidligere.map(periode => (
          <Accordion.Item open={openPanels.filter(panel => panel === periode.fom).length > 0} key={periode.fom}>
            <Accordion.Header onClick={visPanel(periode)}>
              {renderDateHeading(periode.fom, periode.tom)}
            </Accordion.Header>
            <Accordion.Content>
              <TilkommetAktivitetField
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                vurderInntektsforholdPeriode={periode}
                formName={formName}
                index={index}
                readOnly={readOnly}
                erAksjonspunktÅpent={erAksjonspunktÅpent}
                submittable={submittable}
                skalViseBegrunnelse={ikkeVurdertTidligere.length === 1}
              />
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>

      {ikkeVurdertTidligere.length > 1 && (
        <div className={styles.aktivitetContainer}>
          <VerticalSpacer fourtyPx />
          <TextAreaField
            name={`${formName}.${index}.begrunnelse`}
            label="Begrunnelse for alle perioder"
            readOnly={readOnly}
            validate={[required]}
          />
          <VerticalSpacer sixteenPx />
          <SubmitButton
            isSubmittable={submittable}
            isReadOnly={readOnly}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
          />
        </div>
      )}
    </>
  );
};
export default TilkommetAktivitetAccordion;
