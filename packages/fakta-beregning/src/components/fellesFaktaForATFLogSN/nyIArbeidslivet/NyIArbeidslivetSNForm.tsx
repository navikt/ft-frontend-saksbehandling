import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import Beregningsgrunnlag from '@navikt/ft-types/src/beregningsgrunnlagTsType';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { NyIArbeidslivetValues } from '../../../typer/FaktaBeregningTypes';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import VurderFaktaContext from '../VurderFaktaContext';

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
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const intl = useIntl();

  return (
    <div>
      <Normaltekst>
        <FormattedMessage id="BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende" />
      </Normaltekst>
      <VerticalSpacer eightPx />
      <RadioGroupPanel
        name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.${radioGroupFieldName}`}
        validate={[required]}
        isReadOnly={readOnly}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
        ]}
        parse={parseStringToBoolean}
        isHorizontal
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
