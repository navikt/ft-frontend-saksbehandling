import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import { Normaltekst } from 'nav-frontend-typografi';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import Beregningsgrunnlag from '@navikt/ft-types/src/beregningsgrunnlagTsType';
import { NyIArbeidslivetValues } from '../../../typer/FaktaBeregningTypes';
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
  isAksjonspunktClosed: boolean;
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

const NyIArbeidslivetSNForm: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly, isAksjonspunktClosed }) => {
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);

  return (
    <div>
      <Normaltekst>
        <FormattedMessage id="BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende" />
      </Normaltekst>
      <VerticalSpacer eightPx />
      <RadioGroupField
        name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.radioGroupFieldName`}
        validate={[required]}
        readOnly={readOnly}
        isEdited={isAksjonspunktClosed}
      >
        {/* @ts-ignore */}
        <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
        {/* @ts-ignore */}
        <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
      </RadioGroupField>
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
