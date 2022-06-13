import React, { FunctionComponent, useEffect, useState } from 'react';

import { FormattedMessage, injectIntl } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import { Knapp } from 'nav-frontend-knapper';

import {
  AksjonspunktHelpTextTemp,
  FlexColumn,
  FlexContainer,
  FlexRow,
  OverstyringKnapp,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteter,
  AvklarBeregningAktiviteterMap,
  BeregningAvklaringsbehov,
} from '@navikt/ft-types';
import Vilkarperiode from '@navikt/ft-types/src/vilkarperiodeTsType';
import { formHooks, SkjemaGruppeMedFeilviser } from '@navikt/ft-form-hooks';
import { UseFormGetValues } from 'react-hook-form';
import AvklarAktiviteterValues from '../../typer/AvklarAktivitetTypes';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';
import styles from './avklareAktiviteterPanel.less';
import {
  erSubmittable,
  findBegrunnelse,
  skalKunneLoseAvklaringsbehov,
  skalViseSubmitKnappEllerBegrunnelse,
} from './avklareAktiviteterHjelpefunksjoner';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import SubmitButton from '../felles/SubmitButton';
import AvklarAktiviteterFormValues from '../../typer/AvklarAktiviteterFormValues';
import { hasAvklaringsbehov, isAvklaringsbehovOpen } from '../felles/avklaringsbehovUtil';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';

const { AVKLAR_AKTIVITETER, OVERSTYRING_AV_BEREGNINGSAKTIVITETER } = FaktaBeregningAksjonspunktCode;

const BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME = 'begrunnelseAvklareAktiviteter';
const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

export const buildInitialValues = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  avklarAktiviteter: AvklarBeregningAktiviteterMap,
  alleKodeverk: AlleKodeverk,
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
      alleKodeverk,
      erOverstyrt,
      harAvklarAktiviteterAvklaringsbehov,
      arbeidsgiverOpplysningerPerId,
    );
  }

  return {
    [MANUELL_OVERSTYRING_FIELD]: erOverstyrt,
    periode: vilkårsperiode.periode,
    erTilVurdering: vilkårsperiode.vurderesIBehandlingen,
    avklaringsbehov,
    avklarAktiviteter,
    aktiviteterValues,
    ...FaktaBegrunnelseTextField.buildInitialValues(begrunnelse, BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME),
  };
};

export const transformFieldValue = (values: AvklarAktiviteterValues) => {
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

  const vurderAktiviteterTransformed = VurderAktiviteterPanel.transformValues(
    values,
    avklarAktiviteter.aktiviteterTomDatoMapping,
    skalOverstyre,
  );

  return {
    ...vurderAktiviteterTransformed,
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
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldId: number;
  intl: any;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
}

const validate =
  (
    getValues: UseFormGetValues<any>,
    fieldId: number,
    aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
    erOverstyrt: boolean,
    intl: any,
  ) =>
  () => {
    if (
      VurderAktiviteterPanel.harIngenAktiviteter(
        getValues(`avklarAktiviteterForm.${fieldId}`),
        aktiviteterTomDatoMapping,
        erOverstyrt,
      )
    ) {
      return intl.formatMessage({ id: 'VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet' });
    }
    return true;
  };

const AvklareAktiviteterField: FunctionComponent<OwnProps> = ({
  avklarAktiviteter,
  avklaringsbehov,
  erOverstyrer,
  readOnly,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  submittable,
  fieldId,
  intl,
  updateOverstyring,
}) => {
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
  const [submitEnabled, setSubmitEnabled] = useState<boolean>(false);

  const finnesFeilForBegrunnelse = !!errors.avklarAktiviteterForm?.[fieldId]?.begrunnelseAvklareAktiviteter;

  useEffect(() => {
    if (!submitEnabled) {
      setSubmitEnabled(true);
    }
  }, []);

  const initializeForm = (skalOverstyre: boolean) => {
    if (skalOverstyre) {
      setErOverstyrtKnappTrykket(!erOverstyrtKnappTrykket);
    } else if (!skalOverstyre && erOverstyrtKnappTrykket) {
      setErOverstyrtKnappTrykket(false);
    }

    updateOverstyring(fieldId, skalOverstyre);
    resetField(`avklarAktiviteterForm.${fieldId}`, { keepDirty: false });
    resetField(`vurderAktiviteterSkjema.${fieldId}`, { keepDirty: false });
  };

  const isAvklaringsbehovClosed: boolean =
    avklaringsbehov
      .filter(
        ap =>
          ap.definisjon === FaktaBeregningAksjonspunktCode.AVKLAR_AKTIVITETER ||
          ap.definisjon === FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
      )
      .filter(ap => isAvklaringsbehovOpen(ap.status)).length === 0;

  const valideringer = [validate(watch, fieldId, avklarAktiviteter.aktiviteterTomDatoMapping, erOverstyrtAktivt, intl)];
  return (
    <>
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Element className={styles.avsnittOverskrift} data-testid="avklareAktiviteterHeading">
              <FormattedMessage id="AvklarAktivitetPanel.Overskrift" />
            </Element>
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
        <Element>
          <FormattedMessage id="AvklareAktiviteter.OverstyrerAktivitetAdvarsel" />
        </Element>
      )}

      <VerticalSpacer twentyPx />

      {avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping && (
        <SkjemaGruppeMedFeilviser name={`vurderAktiviteterSkjema.${fieldId}`} validate={valideringer}>
          <VurderAktiviteterPanel
            aktiviteterTomDatoMapping={avklarAktiviteter.aktiviteterTomDatoMapping}
            readOnly={readOnly}
            isAvklaringsbehovClosed={isAvklaringsbehovClosed}
            erOverstyrt={erOverstyrtKnappTrykket}
            alleKodeverk={alleKodeverk}
            values={watch(`avklarAktiviteterForm.${fieldId}`)}
            harAvklaringsbehov={hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov)}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            fieldId={fieldId}
          />
        </SkjemaGruppeMedFeilviser>
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
                      isSubmitting={isSubmitting}
                      isReadOnly={readOnly || (isAvklaringsbehovClosed && !fieldIsDirty)}
                      hasEmptyRequiredFields={finnesFeilForBegrunnelse}
                    />
                  </FlexColumn>
                  {!!dirtyFields && fieldIsDirty && (
                    <FlexColumn>
                      <Knapp
                        htmlType="button"
                        spinner={isSubmitting}
                        disabled={isSubmitting}
                        onClick={() => initializeForm(false)}
                        mini
                      >
                        <FormattedMessage id="AvklareAktiviteter.Avbryt" />
                      </Knapp>
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

export default injectIntl(AvklareAktiviteterField) as any;
