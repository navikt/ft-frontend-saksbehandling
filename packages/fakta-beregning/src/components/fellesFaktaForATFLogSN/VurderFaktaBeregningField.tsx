import React, { FunctionComponent, ReactElement } from 'react';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Vilkarperiode,
} from '@navikt/ft-types';
import { SubmitButton } from '@ft-frontend-saksbehandling/internal-components';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { FormattedMessage } from 'react-intl';
import { FieldErrors, UseFormGetValues, useFormContext } from 'react-hook-form';
import FaktaForATFLOgSNPanel from './FaktaForATFLOgSNPanel';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import FaktaBeregningAvklaringsbehovCode from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { erOverstyringAvBeregningsgrunnlag } from './BgFaktaUtils';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import { findBegrunnelse } from '../avklareAktiviteter/avklareAktiviteterHjelpefunksjoner';
import VurderFaktaContext, { BeregningsgrunnlagIndexContext, GetErrorsContext } from './VurderFaktaContext';
import KodeverkForPanel from '../../typer/kodeverkForPanel';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG, VURDER_FAKTA_FOR_ATFL_SN } = FaktaBeregningAvklaringsbehovCode;

export const BEGRUNNELSE_FAKTA_TILFELLER_NAME = 'begrunnelseFaktaTilfeller';

export interface OwnProps {
  beregningsgrunnlag: Beregningsgrunnlag;
  erOverstyrer: boolean;
  readOnly: boolean;
  submittable: boolean;
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  vilkarsperiode: Vilkarperiode;
  verdiForAvklarAktivitetErEndret: boolean;
  submitDisabled: boolean;
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
      ap.definisjon === FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN ||
      ap.definisjon === FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
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

const erOverstyrt = (index: number, getValues: UseFormGetValues<any>) => {
  const formValue = getValues(`${formNameVurderFaktaBeregning}.${index}`);
  return erOverstyringAvBeregningsgrunnlag(formValue);
};

const finnesFeilForBegrunnelse = (
  beregningsgrunnlagIndeks: number,
  errors: FieldErrors<VurderFaktaBeregningFormValues>,
): boolean => !!errors.vurderFaktaBeregningForm?.[beregningsgrunnlagIndeks]?.begrunnelseFaktaTilfeller;

const VurderFaktaBeregningField: FunctionComponent<OwnProps> = ({
  beregningsgrunnlag,
  erOverstyrer,
  readOnly,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  submittable,
  updateOverstyring,
  vilkarsperiode,
  verdiForAvklarAktivitetErEndret,
  submitDisabled,
}) => {
  const {
    getValues,
    formState: { errors, isDirty },
  } = useFormContext<VurderFaktaBeregningFormValues>();
  const setErrors = React.useContext(GetErrorsContext);
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const skalVæreSynlig = beregningsgrunnlagIndeks === aktivtBeregningsgrunnlagIndeks;
  React.useEffect(() => {
    setErrors(errors);
  }, [JSON.stringify(errors)]);

  const { avklaringsbehov } = beregningsgrunnlag;
  const skalVurderes = vilkarsperiode.vurderesIBehandlingen;
  return (
    <div key={beregningsgrunnlagIndeks} style={{ display: skalVæreSynlig ? 'block' : 'none' }}>
      {hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) && (
        <AksjonspunktHelpTextHTML>
          {!isAksjonspunktClosed(avklaringsbehov) ? lagHelpTextsForFakta() : null}
        </AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer twentyPx />
      <FaktaForATFLOgSNPanel
        readOnly={readOnly || !skalVurderes}
        isAksjonspunktClosed={isAksjonspunktClosed(avklaringsbehov)}
        beregningsgrunnlag={beregningsgrunnlag}
        kodeverkSamling={kodeverkSamling}
        erOverstyrer={erOverstyrer}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        updateOverstyring={updateOverstyring}
      />
      <VerticalSpacer twentyPx />
      {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) ||
        hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehov) ||
        erOverstyrt(beregningsgrunnlagIndeks, getValues)) && (
        <>
          {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) ||
            erOverstyrt(beregningsgrunnlagIndeks, getValues)) && (
            <FaktaBegrunnelseTextField
              name={`${formNameVurderFaktaBeregning}.${beregningsgrunnlagIndeks}.${BEGRUNNELSE_FAKTA_TILFELLER_NAME}`}
              isSubmittable={submittable}
              isReadOnly={readOnly || !skalVurderes}
              hasBegrunnelse={findBegrunnelse(avklaringsbehov) !== undefined}
            />
          )}
          <VerticalSpacer twentyPx />
          <SubmitButton
            isSubmittable={
              erSubmittable(
                submittable &&
                  harIkkeEndringerIAvklarMedFlereAksjonspunkter(verdiForAvklarAktivitetErEndret, avklaringsbehov) &&
                  !isAksjonspunktClosed(avklaringsbehov),
                true,
                finnesFeilForBegrunnelse(beregningsgrunnlagIndeks, errors),
              ) && !verdiForAvklarAktivitetErEndret
            }
            isReadOnly={readOnly || !skalVurderes}
            isDirty={isDirty}
            isSubmitting={submitDisabled}
            hasErrors={finnesFeilForBegrunnelse(beregningsgrunnlagIndeks, errors)}
          />
        </>
      )}
    </div>
  );
};

export default VurderFaktaBeregningField;
