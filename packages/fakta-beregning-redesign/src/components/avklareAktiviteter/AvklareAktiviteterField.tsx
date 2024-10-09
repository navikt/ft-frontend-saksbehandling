import React, { FunctionComponent, useState } from 'react';

import { Alert, Button, ErrorMessage, HStack, Heading, Label, List, ReadMore } from '@navikt/ds-react';
import { useCustomValidation, SubmitButton } from '@navikt/ft-form-hooks';
import {
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteter,
  AvklarBeregningAktiviteterMap,
  BeregningAvklaringsbehov,
  BeregningsgrunnlagTilBekreftelse,
  Vilkarperiode,
} from '@navikt/ft-types';
import { OverstyringKnapp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { UseFormGetValues, useFormContext } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import AvklarAktiviteterValues from '../../typer/AvklarAktivitetTypes';
import AvklarAktiviteterFormValues from '../../typer/AvklarAktiviteterFormValues';
import { BeregningAktiviteterTransformedValues } from '../../typer/interface/BeregningFaktaAP';
import FaktaBeregningAvklaringsbehovCode from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import KodeverkForPanel from '../../typer/kodeverkForPanel';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import { hasAvklaringsbehov, isAvklaringsbehovOpen } from '../felles/avklaringsbehovUtil';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';
import {
  erSubmittable,
  findBegrunnelse,
  skalKunneLoseAvklaringsbehov,
  skalViseSubmitKnappEllerBegrunnelse,
} from './avklareAktiviteterHjelpefunksjoner';
import styles from './avklareAktiviteterPanel.module.css';

const { AVKLAR_AKTIVITETER, OVERSTYRING_AV_BEREGNINGSAKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

const BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME = 'begrunnelseAvklareAktiviteter';
const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

export const buildInitialValues = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  avklarAktiviteter: AvklarBeregningAktiviteterMap | undefined,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  vilkårsperiode: Vilkarperiode,
): AvklarAktiviteterValues => {
  const harAvklarAktiviteterAvklaringsbehov = hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov);
  const erOverstyrt = hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov);
  const begrunnelse = findBegrunnelse(avklaringsbehov);
  let aktiviteterValues;

  if (avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping) {
    aktiviteterValues = VurderAktiviteterPanel.buildInitialValues(
      avklarAktiviteter.aktiviteterTomDatoMapping,
      kodeverkSamling,
      erOverstyrt,
      harAvklarAktiviteterAvklaringsbehov,
      arbeidsgiverOpplysningerPerId,
    );
  }

  return {
    [MANUELL_OVERSTYRING_FIELD]: erOverstyrt,
    periode: vilkårsperiode.periode,
    erTilVurdering: vilkårsperiode.vurderesIBehandlingen && !vilkårsperiode.erForlengelse,
    avklaringsbehov,
    avklarAktiviteter,
    aktiviteterValues,
    ...FaktaBegrunnelseTextField.buildInitialValues(begrunnelse, BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME),
  };
};

export const transformFieldValue = (
  values: AvklarAktiviteterValues,
): BeregningsgrunnlagTilBekreftelse<BeregningAktiviteterTransformedValues> | null => {
  const skalOverstyre = values[MANUELL_OVERSTYRING_FIELD];
  const skalLoseAvklaringsbehov = skalKunneLoseAvklaringsbehov(
    !!skalOverstyre,
    values.avklaringsbehov || [],
    values.erTilVurdering,
  );
  const { avklarAktiviteter } = values;

  if (!skalLoseAvklaringsbehov) {
    return null;
  }

  const aktivitetListe = VurderAktiviteterPanel.transformValues(
    values,
    avklarAktiviteter?.aktiviteterTomDatoMapping || [],
    !!skalOverstyre,
  );

  return {
    beregningsaktivitetLagreDtoList: aktivitetListe,
    periode: values.periode,
    begrunnelse: values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME],
  };
};

export interface OwnProps {
  avklarAktiviteter: AvklarBeregningAktiviteterMap;
  avklaringsbehov: BeregningAvklaringsbehov[];
  erOverstyrer: boolean;
  readOnly: boolean;
  submittable: boolean;
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldId: number;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  submitDisabled: boolean;
}

const validate = (
  getValues: UseFormGetValues<AvklarAktiviteterFormValues>,
  fieldId: number,
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  erOverstyrt: boolean,
  intl: IntlShape,
): string | undefined => {
  if (aktiviteterTomDatoMapping.length < 1) {
    return undefined; // Ingenting å validere mot
  }
  if (
    VurderAktiviteterPanel.harIngenAktiviteter(
      getValues(`avklarAktiviteterForm.${fieldId}`),
      aktiviteterTomDatoMapping,
      erOverstyrt,
    )
  ) {
    return intl.formatMessage({ id: 'VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet' });
  }
  return undefined;
};

const AvklareAktiviteterField: FunctionComponent<OwnProps> = ({
  avklarAktiviteter,
  avklaringsbehov,
  erOverstyrer,
  readOnly,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  submittable,
  fieldId,
  updateOverstyring,
  submitDisabled,
}) => {
  const intl = useIntl();
  const {
    resetField,
    watch,
    getValues,
    formState: { isSubmitting, errors, dirtyFields },
  } = useFormContext<AvklarAktiviteterFormValues>();

  const fieldIsDirty = Object.keys(dirtyFields).length > 0;

  const harOverstyrAvklaringsbehov = hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov);
  const erOverstyrtAktivt = !!getValues(`avklarAktiviteterForm.${fieldId}`).manuellOverstyringBeregningAktiviteter;
  const [erOverstyrtKnappTrykket, setErOverstyrtKnappTrykket] = useState<boolean>(
    harOverstyrAvklaringsbehov || erOverstyrtAktivt,
  );

  const finnesFeilForBegrunnelse = !!errors.avklarAktiviteterForm?.[fieldId]?.begrunnelseAvklareAktiviteter;

  const initializeForm = (skalOverstyre: boolean) => {
    if (skalOverstyre) {
      setErOverstyrtKnappTrykket(!erOverstyrtKnappTrykket);
    } else if (!skalOverstyre && erOverstyrtKnappTrykket) {
      setErOverstyrtKnappTrykket(false);
    }
    resetField(`avklarAktiviteterForm.${fieldId}`, { keepDirty: false });
    /* @ts-ignore */
    resetField(`vurderAktiviteterSkjema.${fieldId}`, { keepDirty: false });
    updateOverstyring(fieldId, skalOverstyre);
  };

  const isAvklaringsbehovClosed: boolean =
    avklaringsbehov
      .filter(
        ap =>
          ap.definisjon === FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER ||
          ap.definisjon === FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
      )
      .filter(ap => isAvklaringsbehovOpen(ap.status)).length === 0;

  const feilmelding = validate(
    watch,
    fieldId,
    avklarAktiviteter.aktiviteterTomDatoMapping || [],
    erOverstyrtAktivt,
    intl,
  );
  const skjemaNavn = `vurderAktiviteterSkjema.${fieldId}`;
  const errorMessage = useCustomValidation(skjemaNavn, feilmelding);

  if (!avklarAktiviteter.aktiviteterTomDatoMapping || avklarAktiviteter.aktiviteterTomDatoMapping.length < 1) {
    return null; // Ingen aktiviteter å vise
  }
  return (
    <>
      {hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov) && !isAvklaringsbehovClosed && (
        <Alert size="small" variant="warning">
          <Heading size="xsmall" level="3">
            <FormattedMessage
              key="VurderFaktaForBeregningen"
              id="BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter"
            />
          </Heading>
          <FormattedMessage id="VurderAktiviteterTabell.FullAAPKombinert.Overskrift" />
          <VerticalSpacer fourPx />
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List size="small">
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2" />
              </List.Item>
            </List>
          </ReadMore>
        </Alert>
      )}

      <VerticalSpacer thirtyTwoPx />

      <HStack gap="4">
        <Label size="small" className={styles.avsnittOverskrift} data-testid="avklareAktiviteterHeading">
          <FormattedMessage id="AvklarAktivitetPanel.Overskrift" />
        </Label>
        {(erOverstyrer || harOverstyrAvklaringsbehov) && (
          <OverstyringKnapp onClick={() => initializeForm(true)} erOverstyrt={erOverstyrtKnappTrykket} />
        )}
      </HStack>

      {erOverstyrtKnappTrykket && (
        <Label size="small">
          <FormattedMessage id="AvklareAktiviteter.OverstyrerAktivitetAdvarsel" />
        </Label>
      )}

      {avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping && (
        <div>
          <VurderAktiviteterPanel
            aktiviteterTomDatoMapping={avklarAktiviteter.aktiviteterTomDatoMapping}
            readOnly={readOnly}
            isAvklaringsbehovClosed={isAvklaringsbehovClosed}
            erOverstyrt={erOverstyrtKnappTrykket}
            kodeverkSamling={kodeverkSamling}
            values={watch(`avklarAktiviteterForm.${fieldId}`)}
            harAvklaringsbehov={hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov)}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            fieldId={fieldId}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
      )}
      <VerticalSpacer twentyPx />

      {skalViseSubmitKnappEllerBegrunnelse(avklaringsbehov, erOverstyrtKnappTrykket) && (
        <>
          <FaktaBegrunnelseTextField
            name={`avklarAktiviteterForm.${fieldId}.${BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME}`}
            isSubmittable={submittable}
            isReadOnly={readOnly}
            hasBegrunnelse={findBegrunnelse(avklaringsbehov) !== null}
          />
          {(hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov) || erOverstyrtKnappTrykket) && (
            <>
              <VerticalSpacer twentyPx />
              <HStack gap="4">
                <SubmitButton
                  text={intl.formatMessage({
                    id: erOverstyrtKnappTrykket
                      ? 'AvklarAktivitetPanel.OverstyrText'
                      : 'AvklarAktivitetPanel.ButtonText',
                  })}
                  isSubmittable={erSubmittable(submittable, true, finnesFeilForBegrunnelse)}
                  isDirty={fieldIsDirty}
                  isSubmitting={submitDisabled}
                  isReadOnly={readOnly || (isAvklaringsbehovClosed && !fieldIsDirty)}
                  hasErrors={finnesFeilForBegrunnelse}
                />
                {!!dirtyFields && fieldIsDirty && (
                  <Button
                    variant="secondary"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    onClick={() => initializeForm(false)}
                    size="small"
                  >
                    <FormattedMessage id="AvklareAktiviteter.Avbryt" />
                  </Button>
                )}
              </HStack>
            </>
          )}
        </>
      )}
    </>
  );
};

export default AvklareAktiviteterField;
