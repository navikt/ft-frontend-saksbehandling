import React, { FunctionComponent, useState } from 'react';

import { Button, ErrorMessage, Label } from '@navikt/ds-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { formHooks, useCustomValidation } from '@navikt/ft-form-hooks';
import {
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteter,
  AvklarBeregningAktiviteterMap,
  BeregningAvklaringsbehov,
  BeregningsgrunnlagTilBekreftelse,
  Vilkarperiode,
} from '@navikt/ft-types';
import {
  AksjonspunktHelpTextTemp,
  FlexColumn,
  FlexContainer,
  FlexRow,
  OverstyringKnapp,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { UseFormGetValues } from 'react-hook-form';
import AvklarAktiviteterFormValues from '../../typer/AvklarAktiviteterFormValues';
import AvklarAktiviteterValues from '../../typer/AvklarAktivitetTypes';
import { BeregningAktiviteterTransformedValues } from '../../typer/interface/BeregningFaktaAP';
import FaktaBeregningAvklaringsbehovCode from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { hasAvklaringsbehov, isAvklaringsbehovOpen } from '../felles/avklaringsbehovUtil';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import SubmitButton from '../felles/SubmitButton';
import {
  erSubmittable,
  findBegrunnelse,
  skalKunneLoseAvklaringsbehov,
  skalViseSubmitKnappEllerBegrunnelse,
} from './avklareAktiviteterHjelpefunksjoner';
import styles from './avklareAktiviteterPanel.module.css';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';
import KodeverkForPanel from '../../typer/kodeverkForPanel';

const { AVKLAR_AKTIVITETER, OVERSTYRING_AV_BEREGNINGSAKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

const BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME = 'begrunnelseAvklareAktiviteter';
const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

export const buildInitialValues = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  avklarAktiviteter: AvklarBeregningAktiviteterMap,
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
): BeregningsgrunnlagTilBekreftelse<BeregningAktiviteterTransformedValues> => {
  const skalOverstyre = values[MANUELL_OVERSTYRING_FIELD];
  const skalLoseAvklaringsbehov = skalKunneLoseAvklaringsbehov(
    skalOverstyre,
    values.avklaringsbehov,
    values.erTilVurdering,
  );
  const { avklarAktiviteter } = values;

  if (!skalLoseAvklaringsbehov) {
    return null;
  }

  const aktivitetListe = VurderAktiviteterPanel.transformValues(
    values,
    avklarAktiviteter.aktiviteterTomDatoMapping,
    skalOverstyre,
  );

  return {
    beregningsaktivitetLagreDtoList: aktivitetListe,
    periode: values.periode,
    begrunnelse: values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME],
  };
};

interface OwnProps {
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
  getValues: UseFormGetValues<any>,
  fieldId: number,
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  erOverstyrt: boolean,
  intl: any,
): string | null => {
  if (
    VurderAktiviteterPanel.harIngenAktiviteter(
      getValues(`avklarAktiviteterForm.${fieldId}`),
      aktiviteterTomDatoMapping,
      erOverstyrt,
    )
  ) {
    return intl.formatMessage({ id: 'VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet' });
  }
  return null;
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
  } = formHooks.useFormContext<AvklarAktiviteterFormValues>();

  const fieldIsDirty = Object.keys(dirtyFields).length > 0;

  const harOverstyrAvklaringsbehov = hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov);
  const erOverstyrtAktivt = getValues(`avklarAktiviteterForm.${fieldId}`).manuellOverstyringBeregningAktiviteter;
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

  const feilmelding = validate(watch, fieldId, avklarAktiviteter.aktiviteterTomDatoMapping, erOverstyrtAktivt, intl);
  const skjemaNavn = `vurderAktiviteterSkjema.${fieldId}`;
  const errorMessage = useCustomValidation(skjemaNavn, feilmelding);

  return (
    <>
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Label size="small" className={styles.avsnittOverskrift} data-testid="avklareAktiviteterHeading">
              <FormattedMessage id="AvklarAktivitetPanel.Overskrift" />
            </Label>
          </FlexColumn>
          {(erOverstyrer || harOverstyrAvklaringsbehov) && (
            <FlexColumn>
              <OverstyringKnapp onClick={() => initializeForm(true)} erOverstyrt={erOverstyrtKnappTrykket} />
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>

      <VerticalSpacer sixteenPx />

      {hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov) && (
        <AksjonspunktHelpTextTemp isAksjonspunktOpen={!isAvklaringsbehovClosed}>
          {[
            <FormattedMessage
              key="VurderFaktaForBeregningen"
              id="BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter"
            />,
          ]}
        </AksjonspunktHelpTextTemp>
      )}

      {erOverstyrtKnappTrykket && (
        <Label size="small">
          <FormattedMessage id="AvklareAktiviteter.OverstyrerAktivitetAdvarsel" />
        </Label>
      )}

      <VerticalSpacer twentyPx />

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
              <FlexContainer>
                <FlexRow>
                  <FlexColumn>
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
                      hasEmptyRequiredFields={finnesFeilForBegrunnelse}
                    />
                  </FlexColumn>
                  {!!dirtyFields && fieldIsDirty && (
                    <FlexColumn>
                      <Button
                        variant="secondary"
                        loading={isSubmitting}
                        disabled={isSubmitting}
                        onClick={() => initializeForm(false)}
                        size="small"
                      >
                        <FormattedMessage id="AvklareAktiviteter.Avbryt" />
                      </Button>
                    </FlexColumn>
                  )}
                </FlexRow>
              </FlexContainer>
            </>
          )}
        </>
      )}
    </>
  );
};

export default AvklareAktiviteterField;
