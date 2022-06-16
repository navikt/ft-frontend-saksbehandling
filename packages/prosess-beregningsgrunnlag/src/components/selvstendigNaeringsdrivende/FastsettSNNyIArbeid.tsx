import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';

import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { parseCurrencyInput, removeSpacesFromNumber, formatCurrencyNoKr } from '@navikt/ft-utils';
import { InputField, TextAreaField } from '@navikt/ft-form-hooks';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { BeregningAvklaringsbehov, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { NyIArbeidslivetruttoNæringResultatAP } from '../../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import styles from '../fellesPaneler/aksjonspunktBehandler.less';
import { NyIArbeidslivetValues } from '../../types/NaringAksjonspunktTsType';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);
export const begrunnelseFieldname = 'fastsettBeregningsgrnunnlagSNBegrunnelse';
export const fastsettInntektFieldname = 'bruttoBeregningsgrunnlag';
const {
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
} = ProsessBeregningsgrunnlagAksjonspunktCode;

type OwnProps = {
  endretTekst?: React.ReactNode;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  erNyArbLivet: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  fieldIndex: number;
};

interface StaticFunctions {
  buildInitialValuesNyIArbeidslivet: (
    relevanteAndeler: BeregningsgrunnlagAndel[],
    avklaringsbehov: BeregningAvklaringsbehov[],
  ) => NyIArbeidslivetValues;
  transformValuesNyIArbeidslivet: (values: Required<NyIArbeidslivetValues>) => NyIArbeidslivetruttoNæringResultatAP;
}

/**
 * FastsettSN
 *
 * Aksjonspunkt: FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE
 *
 * Presentasjonskomponent. Setter opp inputfelt som lar saksbehandler fastsette
 * næringsinntekt for selvstendig næringsdrivende. Opprettes enten hvis det er varig endret / nyoppstartet næring eller søker er ny i arbeidslivet.
 */
const FastsettSNNyIArbeid: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAksjonspunktClosed,
  avklaringsbehov,
  erNyArbLivet,
  fieldIndex,
}) => {
  const harGammeltAPFastsettBrutto = avklaringsbehov
    ? avklaringsbehov.find(ap => ap.definisjon === FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE)
    : false;
  const harAPSNNyiArbLiv = avklaringsbehov
    ? avklaringsbehov.find(ap => ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)
    : false;
  const intl = useIntl();

  return (
    <>
      {erNyArbLivet && (
        <>
          <Row className={styles.verticalAlignMiddle}>
            <Column className={styles.dynamiskKolonne}>
              <Normaltekst>
                <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2" />
              </Normaltekst>
            </Column>
            <Column xs="5">
              <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
                <InputField
                  name={`BeregningForm.${fieldIndex}.${fastsettInntektFieldname}`}
                  bredde="XS"
                  validate={[required]}
                  parse={parseCurrencyInput}
                  className={styles['input--xs']}
                  isEdited={isAksjonspunktClosed}
                  readOnly={readOnly}
                />
              </div>
            </Column>
          </Row>
          <VerticalSpacer eightPx />
        </>
      )}

      {(harGammeltAPFastsettBrutto || harAPSNNyiArbLiv) && (
        <>
          <VerticalSpacer sixteenPx />
          <Row>
            <Column xs="12" className={styles.marginTop}>
              <div id="readOnlyWrapper" className={readOnly ? styles.verticalLine : styles.textAreaWrapperHeigh}>
                <TextAreaField
                  name={`BeregningForm.${fieldIndex}.${begrunnelseFieldname}`}
                  label={<FormattedMessage id="Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag" />}
                  validate={[required, maxLength1500, minLength3, hasValidText]}
                  maxLength={1500}
                  readOnly={readOnly}
                  placeholder={intl.formatMessage({
                    id: 'Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Placeholder',
                  })}
                />
              </div>
            </Column>
          </Row>
        </>
      )}
    </>
  );
};

FastsettSNNyIArbeid.buildInitialValuesNyIArbeidslivet = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  avklaringsbehov: BeregningAvklaringsbehov[],
): NyIArbeidslivetValues => {
  const snAndel = relevanteAndeler.find(
    andel => andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  const nyIArbeidslivetAP = avklaringsbehov.find(
    ap => ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  );
  return {
    [fastsettInntektFieldname]: snAndel ? formatCurrencyNoKr(snAndel.overstyrtPrAar) : undefined,
    [begrunnelseFieldname]:
      nyIArbeidslivetAP && nyIArbeidslivetAP.begrunnelse ? nyIArbeidslivetAP.begrunnelse : undefined,
  };
};

FastsettSNNyIArbeid.transformValuesNyIArbeidslivet = (
  values: Required<NyIArbeidslivetValues>,
): NyIArbeidslivetruttoNæringResultatAP => ({
  begrunnelse: values[begrunnelseFieldname],
  bruttoBeregningsgrunnlag: removeSpacesFromNumber(values[fastsettInntektFieldname]),
});

export default FastsettSNNyIArbeid;
