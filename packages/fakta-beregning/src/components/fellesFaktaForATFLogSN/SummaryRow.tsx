import { formHooks } from '@navikt/ft-form-hooks';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';
import { BodyShort } from '@navikt/ds-react';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import { getKanRedigereInntekt } from './BgFaktaUtils';
import styles from './inntektFieldArray.module.css';
import VurderFaktaContext from './VurderFaktaContext';

const summerBeregnet = (fields, formValues, beregningsgrunnlag) => {
  let sum = 0;
  fields.forEach(field => {
    const belop = getKanRedigereInntekt(formValues, beregningsgrunnlag)(field)
      ? field.fastsattBelop
      : field.belopReadOnly;
    sum += belop ? removeSpacesFromNumber(belop) : 0;
  });
  return sum > 0 ? sum : 0;
};

type OwnProps = {
  readOnly: boolean;
  skalVisePeriode: boolean;
  skalViseRefusjon: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
};

const SummaryRow: FunctionComponent<OwnProps> = ({
  skalVisePeriode,
  skalViseRefusjon,
  readOnly,
  beregningsgrunnlag,
}) => {
  const { control, getValues } = formHooks.useFormContext<VurderFaktaBeregningFormValues>();
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}`);
  const fields = formHooks.useWatch({
    control,
    name: `vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.inntektFieldArray`,
  });

  const sumBeregnet = summerBeregnet(fields, formValues, beregningsgrunnlag) || 0;

  return (
    <TableRow>
      <TableColumn>
        <FormattedMessage id="BeregningInfoPanel.FordelingBG.Sum" />
      </TableColumn>
      {skalVisePeriode && <TableColumn />}
      <TableColumn className={styles.rightAlign}>
        <div className={styles.readOnlyContainer}>
          <BodyShort data-testid="sum" className={readOnly ? styles.readOnlyContent : ''}>
            {formatCurrencyNoKr(sumBeregnet)}
          </BodyShort>
        </div>
      </TableColumn>
      {skalViseRefusjon && <TableColumn />}
      <TableColumn />
    </TableRow>
  );
};
export default SummaryRow;
