import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Accordion, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, VurderInntektsforholdPeriode } from '@navikt/ft-types';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type {
  TilkommetAktivitetFormValues,
  TilkommetAktivitetValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import { SubmitButton } from '../felles/SubmitButton';
import { VurdertIForrigeBehandlingIcon } from '../felles/VurdertIForrigeBehandlingIcon';
import { TidligereVurderteAktiviteterPanel } from './TidligereVurderteAktiviteterPanel';
import { TilkommetAktivitetField } from './TilkommetAktivitetField';
import { erVurdertTidligere, slaaSammenPerioder } from './tilkommetAktivitetUtils';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formName: string;
  formFieldIndex: number;
  readOnly: boolean;
  submittable: boolean;
  erAksjonspunktÅpent: boolean;
  fields: TilkommetAktivitetValues[];
}

export const TilkommetAktivitetAccordion = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId,
  formName,
  formFieldIndex,
  readOnly,
  submittable,
  erAksjonspunktÅpent,
  fields,
}: Props) => {
  const [sammenslåttePerioder, setSammenslåttePerioder] = useState<VurderInntektsforholdPeriode[]>([]);
  const [openPanels, setOpenPanels] = useState<string[]>([]);
  const [alleFomDatoer, setAlleFomDatoer] = useState<string[]>([]);
  const formMethods = useFormContext<TilkommetAktivitetFormValues>();

  useEffect(() => {
    const vurderInntektsforholdPerioder =
      beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder;
    if (vurderInntektsforholdPerioder) {
      const perioder = slaaSammenPerioder(vurderInntektsforholdPerioder, beregningsgrunnlag.forlengelseperioder);
      setSammenslåttePerioder(perioder);
      const åpnePanelerOppdatert = openPanels.map(d => d);
      const alleFomIFields = fields.map(field => field.fom);
      const nyeFomDatoer = alleFomIFields.filter(fom => !alleFomDatoer.includes(fom));
      // Nye perioder skal alltid åpne som standard
      nyeFomDatoer.forEach(fom => åpnePanelerOppdatert.push(fom));
      setOpenPanels(åpnePanelerOppdatert);
      setAlleFomDatoer(alleFomIFields);
    }
  }, [beregningsgrunnlag, fields.length]);

  const tidligereVurderte = sammenslåttePerioder.filter(p => erVurdertTidligere(p, beregningsgrunnlag));
  const avklaringsbehovTilkommetAktivitet = beregningsgrunnlag?.avklaringsbehov.find(
    v => v.definisjon === FaktaFordelBeregningAvklaringsbehovCode.VURDER_NYTT_INNTKTSFRHLD,
  );

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
    <VStack gap="space-24">
      <Accordion size="medium">
        {tidligereVurderte.map(tidligereVurdertPeriode => (
          <Accordion.Item
            open={openPanels.filter(panel => panel === tidligereVurdertPeriode.fom).length > 0}
            key={tidligereVurdertPeriode.fom}
          >
            <Accordion.Header onClick={visPanel(tidligereVurdertPeriode.fom)}>
              <PeriodLabel dateStringFom={tidligereVurdertPeriode.fom} dateStringTom={tidligereVurdertPeriode.tom} />
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
            <Accordion.Header onClick={visPanel(field.fom)}>
              <PeriodLabel dateStringFom={field.fom} dateStringTom={field.tom} />
            </Accordion.Header>
            <Accordion.Content>
              <TilkommetAktivitetField
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                vurderInntektsforholdPeriode={finnMatchendeinntektsperiodeForField(field.fom)}
                formName={formName}
                formFieldIndex={formFieldIndex}
                periodeFieldIndex={index}
                readOnly={readOnly}
                erAksjonspunktÅpent={erAksjonspunktÅpent}
                submittable={submittable}
                skalViseBegrunnelse={fields.length === 1}
                avklaringsbehov={avklaringsbehovTilkommetAktivitet}
              />
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
      {fields.length > 1 && (
        <VStack gap="space-16">
          <div>
            <RhfTextarea
              name={`${formName}.${formFieldIndex}.begrunnelse`}
              control={formMethods.control}
              label="Begrunnelse for alle perioder"
              readOnly={readOnly}
              validate={[required]}
            />
            <AssessedBy
              ident={avklaringsbehovTilkommetAktivitet?.vurdertAv}
              date={avklaringsbehovTilkommetAktivitet?.vurdertTidspunkt}
            />
          </div>
          <div>
            <SubmitButton
              isSubmittable={submittable}
              isReadOnly={readOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </div>
        </VStack>
      )}
    </VStack>
  );
};
