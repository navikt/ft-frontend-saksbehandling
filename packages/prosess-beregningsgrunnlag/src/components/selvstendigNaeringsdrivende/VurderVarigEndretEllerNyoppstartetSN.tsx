import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import {
  hasValidText,
  maxLength,
  minLength,
  required,
  parseCurrencyInput,
  formatCurrencyNoKr,
  removeSpacesFromNumber,
} from '@navikt/ft-utils';
import {
  InputField,
  RadioGroupField, RadioOption, TextAreaField,
} from '@navikt/ft-form-redux-legacy';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { aktivitetStatus, isAksjonspunktOpen, AksjonspunktCode } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel, Aksjonspunkt } from '@navikt/ft-types';
import styles from '../fellesPaneler/aksjonspunktBehandler.less';
import VurderVarigEndretTransformed, { VurderOgFastsettValues } from '../../types/NaringAksjonspunktTsType';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);
export const begrunnelseFieldname = 'varigEndringNyoppstartetBegrunnelse';
export const varigEndringRadioname = 'erVarigEndretNaering';
export const fastsettInntektFieldname = 'bruttoBeregningsgrunnlag';
const { VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE } = AksjonspunktCode;

type OwnProps = {
    endretTekst?: React.ReactNode;
    readOnly: boolean;
    erVarigEndring: boolean;
    erNyoppstartet: boolean;
    erVarigEndretNaering?: boolean;
};

interface StaticFunctions {
  buildInitialValues: (relevanteAndeler: BeregningsgrunnlagAndel[], gjeldendeAksjonspunkter: Aksjonspunkt[]) => VurderOgFastsettValues;
  transformValues: (values: Required<VurderOgFastsettValues>) => VurderVarigEndretTransformed;
}

/**
 * VurderVarigEndretEllerNyoppstartetSN
 *
 * Aksjonspunkt: VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE
 *
 * Presentasjonskomponent. Setter opp radioknapper som lar saksbehandler vurdere
 * aksjonspunkt om søker har hatt varig endret eller nyoppstaret næring.
 */
export const VurderVarigEndretEllerNyoppstartetSNImpl: FunctionComponent<OwnProps & WrappedComponentProps> & StaticFunctions = ({
  intl, readOnly, erVarigEndring, erNyoppstartet, erVarigEndretNaering, endretTekst,
}) => {
  let radioLabel1 = (<FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring" />);
  let radioLabel2 = (<FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering" />);
  if (erNyoppstartet && !erVarigEndring) {
    radioLabel1 = (<FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet" />);
    radioLabel2 = (<FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet" />);
  }
  if (erVarigEndring && !erNyoppstartet) {
    radioLabel1 = (<FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring" />);
    radioLabel2 = (<FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring" />);
  }
  return (
    <>
      {!readOnly && (
      <Row>
        <Column xs="12">
          <RadioGroupField
            name={varigEndringRadioname}
            validate={[required]}
            direction="vertical"
            readOnly={readOnly}
          >
            <RadioOption
              label={radioLabel1}
              value={false}
            />
            <RadioOption
              label={radioLabel2}
              value
            />
          </RadioGroupField>
        </Column>
      </Row>
      )}
      {readOnly && (
        <>
          <Row>
            <Column xs="12">
              <Normaltekst>
                {erNyoppstartet && (
                <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet" />
                )}
                {erVarigEndring && (
                <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring" />
                )}
              </Normaltekst>
            </Column>
          </Row>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {erVarigEndretNaering
      && (
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
                  name={fastsettInntektFieldname}
                  bredde="XS"
                  validate={[required]}
                  parse={parseCurrencyInput}
                  className={styles['input--xs']}
                  readOnly={readOnly}
                />
              </div>
            </Column>
          </Row>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <Row>
        <Column xs="12">
          <TextAreaField
            name={begrunnelseFieldname}
            label={<FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />}
            validate={[required, maxLength1500, minLength3, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
            placeholder={intl.formatMessage({ id: 'Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Placeholder' })}
            endrettekst={endretTekst}
          />
        </Column>
      </Row>
    </>
  );
};

VurderVarigEndretEllerNyoppstartetSNImpl.defaultProps = {
  erVarigEndretNaering: false,
};

VurderVarigEndretEllerNyoppstartetSNImpl.buildInitialValues = (relevanteAndeler: BeregningsgrunnlagAndel[],
  gjeldendeAksjonspunkter: Aksjonspunkt[]): VurderOgFastsettValues => {
  const snAndel = relevanteAndeler.find((andel) => andel.aktivitetStatus === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
  const varigEndretNaeringAP = gjeldendeAksjonspunkter
    .find((ap) => ap.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);
  if (varigEndretNaeringAP) {
    return {
      [varigEndringRadioname]: isAksjonspunktOpen(varigEndretNaeringAP.status) ? undefined : relevanteAndeler[0].overstyrtPrAar !== null
        && relevanteAndeler[0].overstyrtPrAar !== undefined,
      [begrunnelseFieldname]: varigEndretNaeringAP.begrunnelse ? varigEndretNaeringAP.begrunnelse : '',
      [fastsettInntektFieldname]: snAndel ? formatCurrencyNoKr(snAndel.overstyrtPrAar) : undefined,
    };
  }
  return {};
};

VurderVarigEndretEllerNyoppstartetSNImpl.transformValues = (values: Required<VurderOgFastsettValues>): VurderVarigEndretTransformed => {
  const erVarigEndring = values[varigEndringRadioname];
  return {
    kode: VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
    begrunnelse: values[begrunnelseFieldname],
    erVarigEndretNaering: erVarigEndring,
    bruttoBeregningsgrunnlag: erVarigEndring ? removeSpacesFromNumber(values[fastsettInntektFieldname]) : undefined,
  };
};

// TODO bruk useIntl og ta vekk any
export default injectIntl(VurderVarigEndretEllerNyoppstartetSNImpl) as any;
