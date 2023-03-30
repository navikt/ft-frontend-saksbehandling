import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Accordion, Label } from '@navikt/ds-react';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, VurderInntektsforholdPeriode } from '@navikt/ft-types';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT, TIDENES_ENDE } from '@navikt/ft-utils';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { formHooks, TextAreaField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import styles from './tilkommetAktivitetAccordion.module.css';
import { erVurdertTidligere, slaaSammenPerioder } from './TilkommetAktivitetUtils';
import VurdertIForrigeBehandlingIcon from '../felles/VurdertIForrigeBehandlingIcon';
import TidligereVurderteAktiviteterPanel from './TidligereVurderteAktiviteterPanel';
import TilkommetAktivitetField from './TilkommetAktivitetField';
import SubmitButton from '../felles/SubmitButton';
import {
  TilkommetAktivitetFormValues,
  TilkommetAktivitetValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';

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
  bgIndex: number;
  readOnly: boolean;
  submittable: boolean;
  erAksjonspunktÅpent: boolean;
  fields: TilkommetAktivitetValues[];
};

const TilkommetAktivitetAccordion: FC<TilkommetAktivitetAccordionType> = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId,
  formName,
  bgIndex,
  readOnly,
  submittable,
  erAksjonspunktÅpent,
  fields,
}) => {
  const [sammenslåttePerioder, setSammenslåttePerioder] = useState<VurderInntektsforholdPeriode[]>([]);
  const [openPanels, setOpenPanels] = useState<string[]>([]);
  const formMethods = formHooks.useFormContext<TilkommetAktivitetFormValues>();

  useEffect(() => {
    const vurderInntektsforholdPerioder =
      beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder;
    if (vurderInntektsforholdPerioder) {
      const perioder = slaaSammenPerioder(vurderInntektsforholdPerioder, true, beregningsgrunnlag.forlengelseperioder);
      setSammenslåttePerioder(perioder);
      const åpnePaneler = perioder
        .filter(p => !erVurdertTidligere(p, beregningsgrunnlag))
        .filter(periode => !!periode.fom)
        .map(periode => periode.fom);
      setOpenPanels(åpnePaneler);
    }
  }, [beregningsgrunnlag]);

  const tidligereVurderte = sammenslåttePerioder.filter(p => erVurdertTidligere(p, beregningsgrunnlag));

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

  const finnMatchendeinntektsperiodeForField = (fieldFom: string): VurderInntektsforholdPeriode => {
    const fomDato = dayjs(fieldFom);
    const match = sammenslåttePerioder.find(p => !dayjs(p.fom).isAfter(fomDato) && !dayjs(p.tom).isBefore(fomDato));
    if (!match) {
      throw new Error(`Finner ikke periode som overlapper med fom ${fieldFom}`);
    }
    return match;
  };

  const visPanel = (fom: string) => () => showPanel(fom);

  if (!sammenslåttePerioder || sammenslåttePerioder.length < 1) {
    return null;
  }

  return (
    <>
      <Accordion className={styles.statusOk}>
        {tidligereVurderte.map(tidligereVurdertPeriode => (
          <Accordion.Item
            open={openPanels.filter(panel => panel === tidligereVurdertPeriode.fom).length > 0}
            key={tidligereVurdertPeriode.fom}
          >
            <Accordion.Header onClick={visPanel(tidligereVurdertPeriode.fom)}>
              {renderDateHeading(tidligereVurdertPeriode.fom, tidligereVurdertPeriode.tom)}{' '}
              <VurdertIForrigeBehandlingIcon />
            </Accordion.Header>
            <Accordion.Content>
              <TidligereVurderteAktiviteterPanel
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                vurderInntektsforholdPeriode={tidligereVurdertPeriode}
              />
            </Accordion.Content>
          </Accordion.Item>
        ))}
        {fields.map((field, index) => (
          <Accordion.Item open={openPanels.filter(panel => panel === field.fom).length > 0} key={field.fom}>
            <Accordion.Header onClick={visPanel(field.fom)}>{renderDateHeading(field.fom, field.tom)}</Accordion.Header>
            <Accordion.Content>
              <TilkommetAktivitetField
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                vurderInntektsforholdPeriode={finnMatchendeinntektsperiodeForField(field.fom)}
                formName={formName}
                bgIndex={bgIndex}
                periodeFieldIndex={index}
                readOnly={readOnly}
                erAksjonspunktÅpent={erAksjonspunktÅpent}
                submittable={submittable}
                skalViseBegrunnelse={fields.length === 1}
              />
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
      {fields.length > 1 && (
        <div className={styles.aktivitetContainer}>
          <VerticalSpacer fourtyPx />
          <TextAreaField
            name={`${formName}.${bgIndex}.begrunnelse`}
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
