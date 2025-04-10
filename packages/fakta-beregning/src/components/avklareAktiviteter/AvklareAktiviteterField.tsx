import { useState } from 'react';
import { useFormContext, UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import {
  Alert,
  BodyShort,
  Button,
  ErrorMessage,
  Heading,
  HStack,
  Label,
  List,
  ReadMore,
  VStack,
} from '@navikt/ds-react';

import { SubmitButton, useCustomValidation } from '@navikt/ft-form-hooks';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import {
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteter,
  AvklarBeregningAktiviteterMap,
  BeregningAvklaringsbehov,
} from '@navikt/ft-types';
import { OverstyringKnapp } from '@navikt/ft-ui-komponenter';

import { AvklarAktiviteterFormValues } from '../../typer/AvklarAktiviteterFormValues';
import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { KodeverkForPanel } from '../../typer/KodeverkForPanelForFb';
import { hasAvklaringsbehov, isAvklaringsbehovOpen } from '../felles/avklaringsbehovUtil';
import { FaktaBegrunnelseTextField } from '../felles/FaktaBegrunnelseTextField';
import {
  erSubmittable,
  findAvklaringsbehovForAktiviteter,
  skalViseSubmitKnappEllerBegrunnelse,
} from './avklareAktiviteterHjelpefunksjoner';
import { VurderAktiviteterPanel } from './VurderAktiviteterPanel';

import styles from './avklareAktiviteterPanel.module.css';

const { AVKLAR_AKTIVITETER, OVERSTYRING_AV_BEREGNINGSAKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

const BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME = 'begrunnelseAvklareAktiviteter';
export interface Props {
  avklarAktiviteter: AvklarBeregningAktiviteterMap;
  avklaringsbehovListe: BeregningAvklaringsbehov[];
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

export const AvklareAktiviteterField = ({
  avklarAktiviteter,
  avklaringsbehovListe,
  erOverstyrer,
  readOnly,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  submittable,
  fieldId,
  updateOverstyring,
  submitDisabled,
}: Props) => {
  const intl = useIntl();
  const {
    resetField,
    watch,
    getValues,
    formState: { isSubmitting, errors, dirtyFields },
  } = useFormContext<AvklarAktiviteterFormValues>();

  const fieldIsDirty = Object.keys(dirtyFields).length > 0;

  const harOverstyrAvklaringsbehov = hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehovListe);
  const erOverstyrtAktivt = !!getValues(`avklarAktiviteterForm.${fieldId}`).manuellOverstyringBeregningAktiviteter;
  const [erOverstyrtKnappTrykket, setErOverstyrtKnappTrykket] = useState<boolean>(
    harOverstyrAvklaringsbehov || erOverstyrtAktivt,
  );
  const avklaringsbehov = findAvklaringsbehovForAktiviteter(avklaringsbehovListe);
  const finnesFeilForBegrunnelse = !!errors.avklarAktiviteterForm?.[fieldId]?.begrunnelseAvklareAktiviteter;

  const initializeForm = (skalOverstyre: boolean) => {
    if (skalOverstyre) {
      setErOverstyrtKnappTrykket(!erOverstyrtKnappTrykket);
    } else if (!skalOverstyre && erOverstyrtKnappTrykket) {
      setErOverstyrtKnappTrykket(false);
    }
    resetField(`avklarAktiviteterForm.${fieldId}`, { keepDirty: false });
    /* @ts-expect-error */
    resetField(`vurderAktiviteterSkjema.${fieldId}`, { keepDirty: false });
    updateOverstyring(fieldId, skalOverstyre);
  };

  const isAvklaringsbehovClosed: boolean =
    avklaringsbehovListe
      .filter(
        ap =>
          ap.definisjon === FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER ||
          ap.definisjon === FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
      )
      .filter(ap => isAvklaringsbehovOpen(ap.status)).length === 0;

  const feilmelding = validate(
    watch,
    fieldId,
    avklarAktiviteter.aktiviteterTomDatoMapping ?? [],
    erOverstyrtAktivt,
    intl,
  );
  const skjemaNavn = `vurderAktiviteterSkjema.${fieldId}`;
  const errorMessage = useCustomValidation(skjemaNavn, feilmelding);

  if (!avklarAktiviteter.aktiviteterTomDatoMapping || avklarAktiviteter.aktiviteterTomDatoMapping.length < 1) {
    return null; // Ingen aktiviteter å vise
  }

  return (
    <VStack gap="1">
      <VStack gap="6">
        {hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehovListe) && !isAvklaringsbehovClosed && (
          <Alert size="small" variant="warning">
            <Heading size="xsmall" level="3">
              <FormattedMessage
                key="VurderFaktaForBeregningen"
                id="BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter"
              />
            </Heading>
            <VStack gap="2">
              <BodyShort size="small">
                <FormattedMessage id="VurderAktiviteterTabell.FullAAPKombinert.Overskrift" />
              </BodyShort>
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
            </VStack>
          </Alert>
        )}
        <HStack gap="4">
          <Label size="small" className={styles.avsnittOverskrift} data-testid="avklareAktiviteterHeading">
            <FormattedMessage id="AvklarAktivitetPanel.Overskrift" />
          </Label>
          {(erOverstyrer || harOverstyrAvklaringsbehov) && (
            <OverstyringKnapp onClick={() => initializeForm(true)} erOverstyrt={erOverstyrtKnappTrykket} />
          )}
        </HStack>
      </VStack>
      {erOverstyrtKnappTrykket && (
        <Label size="small">
          <FormattedMessage id="AvklareAktiviteter.OverstyrerAktivitetAdvarsel" />
        </Label>
      )}
      {avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping && (
        <VStack gap="4">
          <VurderAktiviteterPanel
            aktiviteterTomDatoMapping={avklarAktiviteter.aktiviteterTomDatoMapping}
            readOnly={readOnly}
            isAvklaringsbehovClosed={isAvklaringsbehovClosed}
            erOverstyrt={erOverstyrtKnappTrykket}
            kodeverkSamling={kodeverkSamling}
            values={watch(`avklarAktiviteterForm.${fieldId}`)}
            harAvklaringsbehov={hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehovListe)}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            fieldId={fieldId}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </VStack>
      )}
      {skalViseSubmitKnappEllerBegrunnelse(avklaringsbehovListe, erOverstyrtKnappTrykket) && (
        <VStack gap="6">
          <FaktaBegrunnelseTextField
            name={`avklarAktiviteterForm.${fieldId}.${BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME}`}
            isSubmittable={submittable}
            isReadOnly={readOnly}
            hasBegrunnelse={!!avklaringsbehov?.begrunnelse}
          />
          <AssessedBy ident={avklaringsbehov?.vurdertAv} date={avklaringsbehov?.vurdertTidspunkt} />
          {(hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehovListe) || erOverstyrtKnappTrykket) && (
            <>
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
        </VStack>
      )}
    </VStack>
  );
};
