import { useFormContext } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';

import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import { ArbeidsgiverOpplysningerPerId, BeregningAvklaringsbehov, Beregningsgrunnlag } from '@navikt/ft-types';

import { FordelBeregningsgrunnlagFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import { KodeverkFpSakForPanel } from '../../types/kodeverkForPanel';
import { FaktaBegrunnelseTextField } from '../felles/FaktaBegrunnelseTextField';
import { SubmitButton } from '../felles/SubmitButton';
import { FastsettFordeltBeregningsgrunnlag } from './FastsettFordeltBeregningsgrunnlag';
import { FordelingHelpText } from './FordelingHelpText';

const { FORDEL_BEREGNINGSGRUNNLAG } = FaktaFordelBeregningAvklaringsbehovCode;

const findAvklaringsbehov = (avklaringsbehov: BeregningAvklaringsbehov[]): BeregningAvklaringsbehov => {
  const ak = avklaringsbehov.find(ap => ap.definisjon === FORDEL_BEREGNINGSGRUNNLAG);
  if (!ak) {
    throw Error(`Fant ikke forventet avklaringsbehov ${FORDEL_BEREGNINGSGRUNNLAG}`);
  }
  return ak;
};

export const BEGRUNNELSE_FORDELING_NAME = 'begrunnelse';

interface Props {
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkFpSakForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
}

/**
 * FordelingField
 *
 * Container komponent
 */
export const FordelingField = ({
  readOnly,
  submittable,
  beregningsgrunnlag,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
}: Props) => {
  const avklaringsbehovFordelBeregningsgrunnlag = findAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  const isAksjonspunktClosed = !isAksjonspunktOpen(avklaringsbehovFordelBeregningsgrunnlag.status);
  const formMethods = useFormContext<FordelBeregningsgrunnlagFormValues>();
  const begrunnelse = formMethods.watch(`FORDEL_BEREGNING_FORM.${fieldIndex}.begrunnelse`);
  return (
    <VStack gap="5">
      <VStack gap="2">
        <FordelingHelpText isAksjonspunktClosed={isAksjonspunktClosed} beregningsgrunnlag={beregningsgrunnlag} />
        <FastsettFordeltBeregningsgrunnlag
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          beregningsgrunnlag={beregningsgrunnlag}
          kodeverkSamling={kodeverkSamling}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          fieldIndex={fieldIndex}
        />
      </VStack>
      <div>
        <FaktaBegrunnelseTextField
          name={`FORDEL_BEREGNING_FORM.${fieldIndex}.begrunnelse`}
          isSubmittable={submittable}
          isReadOnly={readOnly}
          hasBegrunnelse={!!begrunnelse}
        />
        <AssessedBy
          ident={avklaringsbehovFordelBeregningsgrunnlag.vurdertAv}
          date={avklaringsbehovFordelBeregningsgrunnlag.vurdertTidspunkt}
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
  );
};
