import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { List, ReadMore } from '@navikt/ds-react';
import { NyIArbeidslivetValues } from '../../../typer/FaktaBeregningTypes';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';

/**
 * NyIArbeidslivetSNForm
 *
 * Presentasjonskomponent. Setter opp fakta om beregning tilfelle VURDER_SN_NY_I_ARBEIDSLIVET som ber
 * bruker bestemme om en søker er selvstendig næringsdrivende og ny i arbeidslivet med en radioknapp.
 */

const radioGroupFieldName = 'erSNNyIArbeidslivet';

type OwnProps = {
  readOnly: boolean;
};

type TansformedProps = {
  vurderNyIArbeidslivet: {
    erNyIArbeidslivet: boolean;
  };
};

interface StaticFunctions {
  buildInitialValues: (beregningsgrunnlag: Beregningsgrunnlag) => NyIArbeidslivetValues;
  transformValues: (values: any) => TansformedProps;
}

const NyIArbeidslivetSNForm: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly }) => {
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const intl = useIntl();

  return (
    <div>
      <RadioGroupPanel
        label={
          <>
            <FormattedMessage id="BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende" />
            <ReadMore size="small" header="Hvordan går jeg frem">
              <List>
                <List.Item>
                  En næringsdrivende er “ny i arbeidslivet” når de i løpet av de tre siste årene har begynt i
                  arbeidslivet, og i den forbindelse startet en virksomhet. Dette kan for eksempel være en student som
                  etter eksamen oppretter et firma.
                </List.Item>
                <List.Item>
                  For å finne ut når søker ble yrkesaktiv, kan du se i Brønnøysundregistrene når næringsvirksomheten ble
                  registert. Du kan også bruke A-inntekt for å se om søker har hatt annen inntekt de tre siste
                  ferdiglignede årene.
                </List.Item>
                <List.Item>
                  Hvis du velger “ja”, kan du skjønnsfastsette næringsinntekten i neste steg, selv om avviket ikke er
                  over 25 prosent. Hvis du velger “nei”, brukes hovedregler for beregning av næringsinntekt.
                </List.Item>
              </List>
            </ReadMore>
          </>
        }
        name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${radioGroupFieldName}`}
        validate={[required]}
        isReadOnly={readOnly}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
        ]}
        parse={parseStringToBoolean}
      />
    </div>
  );
};

NyIArbeidslivetSNForm.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag): NyIArbeidslivetValues => {
  const initialValues = {};
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode) {
    return initialValues;
  }
  const alleAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode.map(
    periode => periode.beregningsgrunnlagPrStatusOgAndel,
  );
  const snAndeler = alleAndeler
    .flat()
    .filter(andel => andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
  if (snAndeler.length > 0) {
    initialValues[radioGroupFieldName] = snAndeler[0].erNyIArbeidslivet;
  }
  return initialValues;
};

NyIArbeidslivetSNForm.transformValues = values => ({
  vurderNyIArbeidslivet: { erNyIArbeidslivet: values[radioGroupFieldName] },
});

export default NyIArbeidslivetSNForm;
