import React, { ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ReadMore, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, FaktaOmBeregning, RefusjonskravSomKommerForSentListe } from '@navikt/ft-types';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import { FaktaOmBeregningAksjonspunktValues, VurderRefusjonValues } from '../../../typer/FaktaBeregningTypes';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';

const { VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT } = FaktaOmBeregningTilfelle;

export const erRefusjonskravGyldigFieldPrefix = 'erKravGyldig_';

const lagFieldName = (arbeidsgiverId: string): string => erRefusjonskravGyldigFieldPrefix + arbeidsgiverId;

const lagRefusjonskravRadios = (
  senRefusjonkravListe: RefusjonskravSomKommerForSentListe[],
  readOnly: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  aktivtBeregningsgrunnlagIndeks: number,
): ReactElement[] =>
  senRefusjonkravListe.map((kravPerArbeidsgiver: RefusjonskravSomKommerForSentListe) => {
    const { arbeidsgiverIdent } = kravPerArbeidsgiver;
    const opplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverIdent];
    const arbeidsgiverVisningsnavn = opplysninger ? formaterArbeidsgiver(opplysninger) : arbeidsgiverIdent;
    const intl = useIntl();

    return (
      <RhfRadioGroup
        key={arbeidsgiverIdent}
        label={
          <VStack gap="2">
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
        name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.vurderRefusjonValues.${lagFieldName(
          arbeidsgiverIdent,
        )}`}
        validate={[required]}
        isReadOnly={readOnly}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
        ]}
        parse={parseStringToBoolean}
      />
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
