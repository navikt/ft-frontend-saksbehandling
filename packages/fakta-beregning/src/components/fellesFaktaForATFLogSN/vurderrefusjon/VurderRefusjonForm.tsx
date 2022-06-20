import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, FaktaOmBeregning, RefusjonskravSomKommerForSentListe } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { VurderRefusjonValues } from '../../../typer/FaktaBeregningTypes';
import { createVisningsnavnFakta } from '../../ArbeidsforholdHelper';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import VurderFaktaContext from '../VurderFaktaContext';

const { VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT } = FaktaOmBeregningTilfelle;

const erRefusjonskravGyldigFieldPrefix = 'erKravGyldig_';

export const lagFieldName = arbeidsgiverId => erRefusjonskravGyldigFieldPrefix + arbeidsgiverId;

const lagRefusjonskravRadios = (
  senRefusjonkravListe: RefusjonskravSomKommerForSentListe[],
  readOnly: boolean,
  isAksjonspunktClosed: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  aktivtBeregningsgrunnlagIndeks: number,
): ReactElement[] =>
  senRefusjonkravListe.map((kravPerArbeidsgiver: RefusjonskravSomKommerForSentListe) => {
    const { arbeidsgiverIdent } = kravPerArbeidsgiver;
    const opplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverIdent];
    const arbeidsgiverVisningsnavn = opplysninger ? createVisningsnavnFakta(opplysninger) : arbeidsgiverIdent;
    const intl = useIntl();

    return (
      <React.Fragment key={arbeidsgiverIdent}>
        <VerticalSpacer twentyPx />
        <RadioGroupPanel
          label={
            <FormattedMessage
              id="VurderRefusjonForm.ErRefusjonskravGyldig"
              values={{
                arbeidsgiverVisningsnavn,
              }}
            />
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
          isHorizontal
        />
      </React.Fragment>
    );
  });

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  faktaOmBeregning: FaktaOmBeregning;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

interface StaticFunctions {
  transformValues: (arbeidsgiverListe: RefusjonskravSomKommerForSentListe[]) => any;
  buildInitialValues: (
    tilfeller: string[],
    arbeidsgiverListe: RefusjonskravSomKommerForSentListe[],
  ) => VurderRefusjonValues;
}

/**
 * VurderRefusjonForm
 *
 * Container komponent. Har ansvar for å sette opp Redux Formen for vurdering av refusjonskrav som har kommet for sent.
 */
export const VurderRefusjonForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAksjonspunktClosed,
  faktaOmBeregning,
  arbeidsgiverOpplysningerPerId,
}) => {
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const senRefusjonkravListe = faktaOmBeregning?.refusjonskravSomKommerForSentListe;
  return (
    <>
      {lagRefusjonskravRadios(
        senRefusjonkravListe,
        readOnly,
        isAksjonspunktClosed,
        arbeidsgiverOpplysningerPerId,
        aktivtBeregningsgrunnlagIndeks,
      )}
    </>
  );
};

VurderRefusjonForm.transformValues = arbeidsgiverListe => values => {
  if (arbeidsgiverListe.length === 0) {
    return {};
  }
  return {
    refusjonskravGyldighet: arbeidsgiverListe.map(({ arbeidsgiverIdent }) => ({
      arbeidsgiverId: arbeidsgiverIdent,
      skalUtvideGyldighet: values.vurderRefusjonValues[lagFieldName(arbeidsgiverIdent)],
    })),
  };
};

VurderRefusjonForm.buildInitialValues = (tilfeller, arbeidsgiverListe): VurderRefusjonValues => {
  const initialValues = {};
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

export default VurderRefusjonForm;
