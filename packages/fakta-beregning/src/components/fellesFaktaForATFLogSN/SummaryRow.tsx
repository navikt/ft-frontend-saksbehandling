import { formHooks } from '@navikt/ft-form-hooks';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { getKanRedigereInntekt } from './BgFaktaUtils';
import styles from './inntektFieldArray.less';
import VurderFaktaContext from './VurderFaktaContext';

const summerBeregnet = (fields, formValues, beregningsgrunnlag) => {
  let sum = 0;
  fields.forEach((andelElementFieldId, index) => {
    const field = fields.at(index);
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
  fields: any[];
};

const SummaryRow: FunctionComponent<OwnProps> = ({
  skalVisePeriode,
  skalViseRefusjon,
  readOnly,
  fields,
  beregningsgrunnlag,
}) => {
  const { getValues } = formHooks.useFormContext();
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}`);

  const sumBeregnet = summerBeregnet(fields, formValues, beregningsgrunnlag) || 0;

  return (
    <TableRow key="bruttoBGSummaryRow">
      <TableColumn>
        <FormattedMessage id="BeregningInfoPanel.FordelingBG.Sum" />
      </TableColumn>
      {skalVisePeriode && <TableColumn />}
      <TableColumn className={styles.rightAlign}>
        <div className={styles.readOnlyContainer}>
          <Normaltekst className={readOnly ? styles.readOnlyContent : ''}>
            {formatCurrencyNoKr(sumBeregnet)}
          </Normaltekst>
        </div>
      </TableColumn>
      {skalViseRefusjon && <TableColumn />}
      <TableColumn />
    </TableRow>
  );
};
export default SummaryRow;
