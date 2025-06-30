import { useFormContext } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';

import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import { ArbeidsgiverOpplysningerPerId, BeregningAvklaringsbehov, Beregningsgrunnlag } from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { FordelBeregningsgrunnlagFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import { KodeverkForPanel } from '../../types/kodeverkForPanel';
import { FaktaBegrunnelseTextField } from '../felles/FaktaBegrunnelseTextField';
import { SubmitButton } from '../felles/SubmitButton';
import { FastsettFordeltBeregningsgrunnlag } from './FastsettFordeltBeregningsgrunnlag';
import { getHelpTextsFordelBG } from './fordelingHelpTextUtils';

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
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
}

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
    <VStack gap="6">
      {!isAksjonspunktClosed && (
        <AksjonspunktHelpTextHTML>{getHelpTextsFordelBG(beregningsgrunnlag)}</AksjonspunktHelpTextHTML>
      )}
      <FastsettFordeltBeregningsgrunnlag
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        beregningsgrunnlag={beregningsgrunnlag}
        kodeverkSamling={kodeverkSamling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        fieldIndex={fieldIndex}
      />
      <div>
        <FaktaBegrunnelseTextField
          name={`FORDEL_BEREGNING_FORM.${fieldIndex}.begrunnelse`}
          control={formMethods.control}
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
