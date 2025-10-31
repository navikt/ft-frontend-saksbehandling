import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Radio, ReadMore, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import type { ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingKravForSent } from '@navikt/ft-types';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import type {
  VurderRefusjonFormValues,
  VurderRefusjonskravValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import type { VurderRefusjonKravForSentTransformedValues } from '../../types/interface/VurderRefusjonBeregningsgrunnlagAP';

const erRefusjonskravGyldigFieldPrefix = 'erKravGyldig_';

const lagFieldName = (arbeidsgiverId: string): string => erRefusjonskravGyldigFieldPrefix + arbeidsgiverId;

interface Props {
  refusjonskrav: RefusjonTilVurderingKravForSent;
  kravIndex: number;
  readOnly: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagIndeks: number;
}

export const VurderRefusjonKravForSentRad = ({
  refusjonskrav,
  kravIndex,
  readOnly,
  arbeidsgiverOpplysningerPerId,
  beregningsgrunnlagIndeks,
}: Props) => {
  const { arbeidsgiverIdent } = refusjonskrav;
  const opplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverIdent];
  const arbeidsgiverVisningsnavn = opplysninger ? formaterArbeidsgiver(opplysninger) : arbeidsgiverIdent;
  const formMethods = useFormContext<VurderRefusjonFormValues>();

  return (
    <RhfRadioGroup
      key={arbeidsgiverIdent}
      name={`VURDER_REFUSJON_BERGRUNN_FORM.${beregningsgrunnlagIndeks}.refusjonskrav.${kravIndex}.${lagFieldName(arbeidsgiverIdent)}`}
      control={formMethods.control}
      legend={
        <VStack gap="space-8">
          <FormattedMessage
            id="BeregningInfoPanel.RefusjonskravForSent.ErRefusjonskravGyldig"
            values={{
              arbeidsgiverVisningsnavn,
            }}
          />
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.RefusjonskravForSent.HvordanGarJegFrem" />}
          >
            <FormattedMessage id="BeregningInfoPanel.RefusjonskravForSent.ReadMore" />
          </ReadMore>
        </VStack>
      }
      validate={[required]}
      readOnly={readOnly}
    >
      <Radio value={true} size="small">
        <FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />
      </Radio>
      <Radio value={false} size="small">
        <FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />
      </Radio>
    </RhfRadioGroup>
  );
};

VurderRefusjonKravForSentRad.buildInitialValues = (
  refusjonskravForSent: RefusjonTilVurderingKravForSent,
): VurderRefusjonskravValues => {
  return {
    [lagFieldName(refusjonskravForSent.arbeidsgiverIdent)]: refusjonskravForSent.erRefusjonskravGyldig,
  };
};

VurderRefusjonKravForSentRad.transformValues = (
  values: VurderRefusjonskravValues[],
  refusjonskravForSent: RefusjonTilVurderingKravForSent,
  index: number,
): VurderRefusjonKravForSentTransformedValues => {
  const erRefusjonskravGyldig = values[index][lagFieldName(refusjonskravForSent.arbeidsgiverIdent)];
  return {
    arbeidsgiverId: refusjonskravForSent.arbeidsgiverIdent,
    skalUtvideGyldighet: erRefusjonskravGyldig,
  };
};
