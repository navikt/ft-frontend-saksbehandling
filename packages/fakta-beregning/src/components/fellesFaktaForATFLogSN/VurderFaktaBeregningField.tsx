import React, { FunctionComponent, ReactElement } from 'react';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Vilkarperiode,
} from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formHooks } from '@navikt/ft-form-hooks';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { FormattedMessage } from 'react-intl';
import { UseFormGetValues } from 'react-hook-form';
import FaktaForATFLOgSNPanel from './FaktaForATFLOgSNPanel';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import { findBegrunnelse } from '../avklareAktiviteter/avklareAktiviteterHjelpefunksjoner';
import SubmitButton from '../felles/SubmitButton';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';
import { erOverstyringAvBeregningsgrunnlag } from './BgFaktaUtils';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG, VURDER_FAKTA_FOR_ATFL_SN } = FaktaBeregningAksjonspunktCode;

export const BEGRUNNELSE_FAKTA_TILFELLER_NAME = 'begrunnelseFaktaTilfeller';

interface OwnProps {
  beregningsgrunnlag: Beregningsgrunnlag;
  erOverstyrer: boolean;
  readOnly: boolean;
  submittable: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldId: number;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  vilkarsperiode: Vilkarperiode;
  verdiForAvklarAktivitetErEndret: boolean;
}

const hasAksjonspunkt = (aksjonspunktKode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === aksjonspunktKode);

export const erSubmittable = (submittable: boolean, submitEnabled: boolean, hasErrors: boolean): boolean =>
  submittable && submitEnabled && !hasErrors;

export const harIkkeEndringerIAvklarMedFlereAksjonspunkter = (
  verdiForAvklarAktivitetErEndret: boolean,
  avklaringsbehov: BeregningAvklaringsbehov[],
): boolean => {
  if (
    hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) ||
    hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehov)
  ) {
    return !verdiForAvklarAktivitetErEndret;
  }
  return true;
};

const isAksjonspunktClosed = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean => {
  const relevantAp = avklaringsbehov.filter(
    ap =>
      ap.definisjon === FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN ||
      ap.definisjon === FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  );
  return relevantAp.length === 0 ? false : relevantAp.some(ap => !isAksjonspunktOpen(ap.status));
};

const lagHelpTextsForFakta = (): ReactElement[] => {
  const helpTexts = [];
  helpTexts.push(
    <FormattedMessage key="VurderFaktaForBeregningen" id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning" />,
  );
  return helpTexts;
};

const erOverstyrt = (index: number, getValues: UseFormGetValues<any>, beregningsgrunnlag: Beregningsgrunnlag) => {
  const formValue = getValues(`${formNameVurderFaktaBeregning}.${index}`);
  return erOverstyringAvBeregningsgrunnlag(formValue, beregningsgrunnlag, beregningsgrunnlag.avklaringsbehov);
};

const finnesFeilForBegrunnelse = (fieldId, errors) =>
  !!errors.vurderFaktaBeregningForm?.[fieldId]?.begrunnelseFaktaTilfeller;

const VurderFaktaBeregningField: FunctionComponent<OwnProps> = ({
  beregningsgrunnlag,
  erOverstyrer,
  readOnly,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  submittable,
  fieldId,
  updateOverstyring,
  vilkarsperiode,
  verdiForAvklarAktivitetErEndret,
}) => {
  const {
    getValues,
    formState: { isSubmitting, errors, isDirty },
  } = formHooks.useFormContext<VurderFaktaBeregningFormValues>();

  const { avklaringsbehov } = beregningsgrunnlag;
  const skalVurderes = vilkarsperiode.vurderesIBehandlingen;
  return (
    <React.Fragment key={fieldId}>
      {hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) && (
        <AksjonspunktHelpTextHTML>
          {!isAksjonspunktClosed(avklaringsbehov) ? lagHelpTextsForFakta() : null}
        </AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer twentyPx />
      <FaktaForATFLOgSNPanel
        readOnly={readOnly || !skalVurderes}
        isAksjonspunktClosed={isAksjonspunktClosed(avklaringsbehov)}
        avklaringsbehov={avklaringsbehov}
        beregningsgrunnlag={beregningsgrunnlag}
        alleKodeverk={alleKodeverk}
        erOverstyrer={erOverstyrer}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        updateOverstyring={updateOverstyring}
      />
      <VerticalSpacer twentyPx />
      {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) ||
        erOverstyrt(fieldId, getValues, beregningsgrunnlag)) && (
        <>
          <FaktaBegrunnelseTextField
            name={`${formNameVurderFaktaBeregning}.${fieldId}.${BEGRUNNELSE_FAKTA_TILFELLER_NAME}`}
            isSubmittable={submittable}
            isReadOnly={readOnly || !skalVurderes}
            hasBegrunnelse={findBegrunnelse(avklaringsbehov) !== null}
          />
          <VerticalSpacer twentyPx />
          {/* @ts-ignore */}
          <SubmitButton
            isDisabled={!!verdiForAvklarAktivitetErEndret}
            isSubmittable={erSubmittable(
              submittable &&
                harIkkeEndringerIAvklarMedFlereAksjonspunkter(verdiForAvklarAktivitetErEndret, avklaringsbehov) &&
                !isAksjonspunktClosed(avklaringsbehov),
              true,
              finnesFeilForBegrunnelse(fieldId, errors),
            )}
            isReadOnly={readOnly || !skalVurderes}
            isDirty={isDirty}
            isSubmitting={isSubmitting}
            hasEmptyRequiredFields={finnesFeilForBegrunnelse(fieldId, errors)}
          />
        </>
      )}
    </React.Fragment>
  );
};

export default VurderFaktaBeregningField as any;
