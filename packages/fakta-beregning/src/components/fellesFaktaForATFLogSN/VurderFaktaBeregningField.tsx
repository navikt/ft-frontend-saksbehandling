import React from 'react';
import { FieldErrors, useFormContext, UseFormGetValues } from 'react-hook-form';

import { HStack, VStack } from '@navikt/ds-react';

import { SubmitButton } from '@navikt/ft-form-hooks';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { KodeverkFpSakForPanel } from '../../typer/KodeverkForPanelForFb';
import { Vilkårperiode } from '../../typer/Vilkår';
import { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import { hasAksjonspunkt, isAksjonspunktClosed } from '../../utils/aksjonspunktUtils';
import { formNameVurderFaktaBeregning } from '../../utils/BeregningFormUtils';
import { FaktaBegrunnelseTextField } from '../felles/FaktaBegrunnelseTextField';
import { erOverstyringAvBeregningsgrunnlag } from './BgFaktaUtils';
import { FaktaForATFLOgSNPanel } from './FaktaForATFLOgSNPanel';
import {
  BEGRUNNELSE_FAKTA_TILFELLER_NAME,
  erSubmittable,
  harIkkeEndringerIAvklarMedFlereAksjonspunkter,
} from './vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext, VurderFaktaContext } from './VurderFaktaContext';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG, VURDER_FAKTA_FOR_ATFL_SN } = FaktaBeregningAvklaringsbehovCode;

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  erOverstyrer: boolean;
  readOnly: boolean;
  submittable: boolean;
  kodeverkSamling: KodeverkFpSakForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  vilkarsperiode: Vilkårperiode;
  verdiForAvklarAktivitetErEndret: boolean;
  submitDisabled: boolean;
}

const erOverstyrt = (index: number, getValues: UseFormGetValues<VurderFaktaBeregningFormValues>) => {
  const formValue = getValues(`${formNameVurderFaktaBeregning}.${index}`);
  return erOverstyringAvBeregningsgrunnlag(formValue);
};

const finnesFeilForBegrunnelse = (
  beregningsgrunnlagIndeks: number,
  errors: FieldErrors<VurderFaktaBeregningFormValues>,
): boolean => !!errors.vurderFaktaBeregningForm?.[beregningsgrunnlagIndeks]?.begrunnelseFaktaTilfeller;

export const VurderFaktaBeregningField = ({
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
}: Props) => {
  const {
    getValues,
    formState: { errors, isDirty },
  } = useFormContext<VurderFaktaBeregningFormValues>();
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const skalVæreSynlig = beregningsgrunnlagIndeks === aktivtBeregningsgrunnlagIndeks;

  const { avklaringsbehov: avklaringsbehovListe } = beregningsgrunnlag;
  const avklaringsbehov = avklaringsbehovListe.find(
    ab => ab.definisjon === VURDER_FAKTA_FOR_ATFL_SN || ab.definisjon === OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  );

  const skalVurderes = vilkarsperiode.vurderesIBehandlingen;
  const renderTextFieldAndSubmitButton = () => (
    <>
      {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehovListe) ||
        hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehovListe) ||
        erOverstyrt(beregningsgrunnlagIndeks, getValues)) && (
        <VStack gap="6">
          {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehovListe) ||
            erOverstyrt(beregningsgrunnlagIndeks, getValues)) && (
            <>
              <FaktaBegrunnelseTextField
                name={`${formNameVurderFaktaBeregning}.${beregningsgrunnlagIndeks}.${BEGRUNNELSE_FAKTA_TILFELLER_NAME}`}
                isSubmittable={submittable}
                isReadOnly={readOnly || !skalVurderes}
                hasBegrunnelse={!!avklaringsbehov?.begrunnelse}
              />
              <AssessedBy ident={avklaringsbehov?.vurdertAv} date={avklaringsbehov?.vurdertTidspunkt} />
            </>
          )}
          <HStack>
            <SubmitButton
              isSubmittable={
                erSubmittable(
                  submittable &&
                    harIkkeEndringerIAvklarMedFlereAksjonspunkter(
                      verdiForAvklarAktivitetErEndret,
                      avklaringsbehovListe,
                    ),
                  true,
                  finnesFeilForBegrunnelse(beregningsgrunnlagIndeks, errors),
                ) && !verdiForAvklarAktivitetErEndret
              }
              isReadOnly={readOnly || !skalVurderes}
              isDirty={isDirty}
              isSubmitting={submitDisabled}
              hasErrors={finnesFeilForBegrunnelse(beregningsgrunnlagIndeks, errors)}
            />
          </HStack>
        </VStack>
      )}
    </>
  );

  return (
    <div key={beregningsgrunnlagIndeks} style={{ display: skalVæreSynlig ? 'block' : 'none' }}>
      <FaktaForATFLOgSNPanel
        readOnly={readOnly || !skalVurderes}
        isAksjonspunktClosed={isAksjonspunktClosed(avklaringsbehovListe)}
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
