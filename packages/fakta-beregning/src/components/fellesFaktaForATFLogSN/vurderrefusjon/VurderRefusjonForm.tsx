import React, { type ReactElement } from 'react';
import { type Control, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Radio, ReadMore, VStack } from '@navikt/ds-react';

import { RhfRadioGroupNew } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import type {
  ArbeidsgiverOpplysningerPerId,
  FaktaOmBeregning,
  RefusjonskravSomKommerForSentListe,
} from '@navikt/ft-types';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import type { FaktaOmBeregningAksjonspunktValues, VurderRefusjonValues } from '../../../typer/FaktaBeregningTypes';
import type { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';

const { VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT } = FaktaOmBeregningTilfelle;

export const erRefusjonskravGyldigFieldPrefix = 'erKravGyldig_';

const lagFieldName = (arbeidsgiverId: string): string => erRefusjonskravGyldigFieldPrefix + arbeidsgiverId;

const lagRefusjonskravRadios = (
  senRefusjonkravListe: RefusjonskravSomKommerForSentListe[],
  readOnly: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  aktivtBeregningsgrunnlagIndeks: number,
  control: Control<VurderFaktaBeregningFormValues, any, VurderFaktaBeregningFormValues>,
): ReactElement[] =>
  senRefusjonkravListe.map((kravPerArbeidsgiver: RefusjonskravSomKommerForSentListe) => {
    const { arbeidsgiverIdent } = kravPerArbeidsgiver;
    const opplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverIdent];
    const arbeidsgiverVisningsnavn = opplysninger ? formaterArbeidsgiver(opplysninger) : arbeidsgiverIdent;

    return (
      <RhfRadioGroupNew
        key={arbeidsgiverIdent}
        name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.vurderRefusjonValues.${lagFieldName(
          arbeidsgiverIdent,
        )}`}
        control={control}
        label={
          <VStack gap="space-8">
            <FormattedMessage
              id="VurderRefusjonForm.ErRefusjonskravGyldig"
              values={{
                arbeidsgiverVisningsnavn,
              }}
            />
            <ReadMore
              size="small"
              header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
            >
              <FormattedMessage id="VurderRefusjonForm.ReadMore" />
            </ReadMore>
          </VStack>
        }
        validate={[required]}
        isReadOnly={readOnly}
      >
        <Radio value={true} size="small">
          <FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />
        </Radio>
        <Radio value={false} size="small">
          <FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />
        </Radio>
      </RhfRadioGroupNew>
    );
  });

interface Props {
  readOnly: boolean;
  faktaOmBeregning: FaktaOmBeregning;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * VurderRefusjonForm
 *
 * Container komponent. Har ansvar for å sette opp Formen for vurdering av refusjonskrav som har kommet for sent.
 */
export const VurderRefusjonForm = ({ readOnly, faktaOmBeregning, arbeidsgiverOpplysningerPerId }: Props) => {
  const { control } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const senRefusjonkravListe = faktaOmBeregning?.refusjonskravSomKommerForSentListe;
  if (!senRefusjonkravListe) {
    return null;
  }
  return lagRefusjonskravRadios(
    senRefusjonkravListe,
    readOnly,
    arbeidsgiverOpplysningerPerId,
    beregningsgrunnlagIndeks,
    control,
  );
};

VurderRefusjonForm.transformValues =
  (arbeidsgiverListe: RefusjonskravSomKommerForSentListe[]) => (values: FaktaOmBeregningAksjonspunktValues) => {
    if (arbeidsgiverListe.length === 0) {
      return {};
    }
    return {
      refusjonskravGyldighet: arbeidsgiverListe.map(({ arbeidsgiverIdent }) => ({
        arbeidsgiverId: arbeidsgiverIdent,
        skalUtvideGyldighet:
          !!values.vurderRefusjonValues && !!values.vurderRefusjonValues[lagFieldName(arbeidsgiverIdent)],
      })),
    };
  };

VurderRefusjonForm.buildInitialValues = (
  tilfeller: string[],
  arbeidsgiverListe: RefusjonskravSomKommerForSentListe[],
): VurderRefusjonValues => {
  const initialValues: VurderRefusjonValues = {};
  if (!tilfeller.includes(VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT) || arbeidsgiverListe.length === 0) {
    return initialValues;
  }
  arbeidsgiverListe.forEach(({ arbeidsgiverIdent, erRefusjonskravGyldig }) => {
    initialValues[lagFieldName(arbeidsgiverIdent)] = erRefusjonskravGyldig;
  });
  return {
    ...initialValues,
  };
};
