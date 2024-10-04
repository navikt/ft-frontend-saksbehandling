import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Vilkarperiode,
} from '@navikt/ft-types';
import { SubmitButton } from '@navikt/ft-frontend-saksbehandling-internal';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FieldErrors, UseFormGetValues, useFormContext } from 'react-hook-form';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import FaktaBeregningAvklaringsbehovCode from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import KodeverkForPanel from '../../typer/kodeverkForPanel';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import { findBegrunnelse } from '../avklareAktiviteter/avklareAktiviteterHjelpefunksjoner';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import { erOverstyringAvBeregningsgrunnlag, hasAksjonspunkt, isAksjonspunktClosed } from './BgFaktaUtils';
import FaktaForATFLOgSNPanel from './FaktaForATFLOgSNPanel';
import VurderFaktaContext, { BeregningsgrunnlagIndexContext, GetErrorsContext } from './VurderFaktaContext';

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
    formState: { errors },
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
  const renderTextFieldAndSubmitButton = () => (
    <>
      <VerticalSpacer thirtyTwoPx />
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
            isSubmitting={submitDisabled}
            hasErrors={finnesFeilForBegrunnelse(beregningsgrunnlagIndeks, errors)}
          />
        </>
      )}
    </>
  );

  return (
    <div key={beregningsgrunnlagIndeks} style={{ display: skalVæreSynlig ? 'block' : 'none' }}>
      <FaktaForATFLOgSNPanel
        readOnly={readOnly || !skalVurderes}
        isAksjonspunktClosed={isAksjonspunktClosed(avklaringsbehov)}
        beregningsgrunnlag={beregningsgrunnlag}
        kodeverkSamling={kodeverkSamling}
        erOverstyrer={erOverstyrer}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        updateOverstyring={updateOverstyring}
        renderTextFieldAndSubmitButton={() => renderTextFieldAndSubmitButton()}
        vilkarsperiodeSkalVurderesIBehandlingen={skalVurderes}
      />
    </div>
  );
};

export default VurderFaktaBeregningField;
