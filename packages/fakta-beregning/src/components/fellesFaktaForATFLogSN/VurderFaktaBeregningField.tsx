import { Alert, Heading } from '@navikt/ds-react';
import { FaktaOmBeregningTilfelle, isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Vilkarperiode,
} from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent, ReactElement } from 'react';
import { UseFormGetValues, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import FaktaBeregningAvklaringsbehovCode from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import KodeverkForPanel from '../../typer/kodeverkForPanel';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import { findBegrunnelse } from '../avklareAktiviteter/avklareAktiviteterHjelpefunksjoner';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import SubmitButton from '../felles/SubmitButton';
import { erOverstyringAvBeregningsgrunnlag } from './BgFaktaUtils';
import FaktaForATFLOgSNPanel, { getFaktaOmBeregningTilfellerKoder } from './FaktaForATFLOgSNPanel';
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

const lagHelpTextsForFakta = (beregningsgrunnlag: Beregningsgrunnlag): ReactElement => {
  const tilfeller = getFaktaOmBeregningTilfellerKoder(beregningsgrunnlag);
  const erFrilans = beregningsgrunnlag?.faktaOmBeregning?.vurderMottarYtelse?.erFrilans;
  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)) {
    return (
      <Alert size="small" variant="warning">
        <Heading size="small" level="3">
          Søker er arbeidstaker og frilans i samme virksomhet
        </Heading>
        Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som
        er arbeidsinntekt og samlet frilansinntekt.
      </Alert>
    );
  }
  if (erFrilans && tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE)) {
    return (
      <Alert size="small" variant="warning">
        <Heading size="small" level="3">
          Vurder om søker mottar ytelse for frilansaktivitet
        </Heading>
        Det er funnet utbetaling av [ytelse] i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.
      </Alert>
    );
  }

  return (
    <Alert size="small" variant="warning">
      <FormattedMessage key="VurderFaktaForBeregningen" id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning" />
    </Alert>
  );
};

const erOverstyrt = (index: number, getValues: UseFormGetValues<any>) => {
  const formValue = getValues(`${formNameVurderFaktaBeregning}.${index}`);
  return erOverstyringAvBeregningsgrunnlag(formValue);
};

const finnesFeilForBegrunnelse = (beregningsgrunnlagIndeks, errors) =>
  !!errors.vurderFaktaBeregningForm?.[beregningsgrunnlagIndeks]?.begrunnelseFaktaTilfeller;

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
  const renderTextFieldAndSubmitButton = () => (
    <>
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
              hasBegrunnelse={findBegrunnelse(avklaringsbehov) !== null}
            />
          )}
          <VerticalSpacer twentyPx />
          <SubmitButton
            isDisabled={!!verdiForAvklarAktivitetErEndret}
            isSubmittable={erSubmittable(
              submittable &&
                harIkkeEndringerIAvklarMedFlereAksjonspunkter(verdiForAvklarAktivitetErEndret, avklaringsbehov) &&
                !isAksjonspunktClosed(avklaringsbehov),
              true,
              finnesFeilForBegrunnelse(beregningsgrunnlagIndeks, errors),
            )}
            isReadOnly={readOnly || !skalVurderes}
            isDirty={isDirty}
            isSubmitting={submitDisabled}
            hasEmptyRequiredFields={finnesFeilForBegrunnelse(beregningsgrunnlagIndeks, errors)}
          />
        </>
      )}
    </>
  );

  return (
    <div key={beregningsgrunnlagIndeks} style={{ display: skalVæreSynlig ? 'block' : 'none' }}>
      {hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) && !isAksjonspunktClosed(avklaringsbehov)
        ? lagHelpTextsForFakta(beregningsgrunnlag)
        : null}
      <VerticalSpacer twentyPx />
      <FaktaForATFLOgSNPanel
        readOnly={readOnly || !skalVurderes}
        isAksjonspunktClosed={isAksjonspunktClosed(avklaringsbehov)}
        beregningsgrunnlag={beregningsgrunnlag}
        kodeverkSamling={kodeverkSamling}
        erOverstyrer={erOverstyrer}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        updateOverstyring={updateOverstyring}
        renderTextFieldAndSubmitButton={() => renderTextFieldAndSubmitButton()}
      />
    </div>
  );
};

export default VurderFaktaBeregningField;
