import { Beregningsgrunnlag } from '@navikt/ft-types';
import { TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';
import { BodyShort } from '@navikt/ds-react';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { useFormContext, useWatch } from 'react-hook-form';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import { erFrilanser, getKanRedigereInntekt } from './BgFaktaUtils';
import styles from './inntektFieldArray.module.css';
import { BeregningsgrunnlagIndexContext } from './VurderFaktaContext';

const summerBeregnet = (fields, formValues, beregningsgrunnlag) => {
  let sum = 0;

  fields.forEach(field => {
    let belop;

    if (getKanRedigereInntekt(formValues, beregningsgrunnlag)(field)) {
      const erFrilans = erFrilanser(field);
      const harEndretFrilansinntekt = erFrilans && formValues?.frilansinntektValues?.fastsattBelop;
      belop = harEndretFrilansinntekt ? formValues.frilansinntektValues.fastsattBelop : field.fastsattBelop;
    } else {
      belop = field.belopReadOnly;
    }

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
  const { control, getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}`);
  const fields = useWatch({
    control,
    name: `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.inntektFieldArray`,
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
