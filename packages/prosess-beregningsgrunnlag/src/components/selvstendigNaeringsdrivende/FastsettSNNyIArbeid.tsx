import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';

import { InputField, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, maxValueFormatted, minLength, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import { BeregningAvklaringsbehov, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import { NyIArbeidslivetruttoNæringResultatAP } from '../../types/interface/BeregningsgrunnlagAP';
import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import { NyIArbeidslivetValues } from '../../types/NæringAksjonspunkt';
import { HorizontalBox } from '../../util/HorizontalBox';

import styles from '../fellesPaneler/aksjonspunktBehandler.module.css';

const MAX_LENGTH = 4000;
const maxLength4000 = maxLength(MAX_LENGTH);

const minLength3 = minLength(3);
export const begrunnelseFieldname = 'fastsettBeregningsgrnunnlagSNBegrunnelse';
export const fastsettInntektFieldname = 'bruttoBeregningsgrunnlag';
const { FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET } = ProsessBeregningsgrunnlagAvklaringsbehovCode;

type Props = {
  endretTekst?: React.ReactNode;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  erNyArbLivet: boolean;
  fieldIndex: number;
  formName: string;
  avklaringsbehov: BeregningAvklaringsbehov;
  skalValideres: boolean;
};

/**
 * FastsettSN
 *
 * Aksjonspunkt: FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE
 *
 * Presentasjonskomponent. Setter opp inputfelt som lar saksbehandler fastsette
 * næringsinntekt for selvstendig næringsdrivende. Opprettes enten hvis det er varig endret / nyoppstartet næring eller søker er ny i arbeidslivet.
 */
export const FastsettSNNyIArbeid = ({
  readOnly,
  isAksjonspunktClosed,
  erNyArbLivet,
  fieldIndex,
  formName,
  avklaringsbehov,
  skalValideres,
}: Props) => {
  const intl = useIntl();

  return (
    <VStack gap="10">
      {erNyArbLivet && (
        <HorizontalBox borderBottom borderTop>
          <BodyShort size="small">
            <FormattedMessage id="FastsettSNNyIArbeid.Tittel" />
          </BodyShort>
          <InputField
            name={`${formName}.${fieldIndex}.${fastsettInntektFieldname}`}
            validate={skalValideres ? [required, maxValueFormatted(178956970)] : []}
            parse={parseCurrencyInput}
            className={styles.beløpInput}
            isEdited={readOnly && isAksjonspunktClosed}
            readOnly={readOnly}
          />
        </HorizontalBox>
      )}
      <TextAreaField
        name={`${formName}.${fieldIndex}.${begrunnelseFieldname}`}
        label={<FormattedMessage id="Forms.VurderingAvFastsattBeregningsgrunnlag" />}
        validate={skalValideres ? [required, maxLength4000, minLength3, hasValidText] : []}
        isEdited={readOnly && isAksjonspunktClosed}
        maxLength={MAX_LENGTH}
        readOnly={readOnly}
        description={intl.formatMessage({
          id: 'Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst',
        })}
        parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
      />
      <AssessedBy ident={avklaringsbehov?.vurdertAv} date={avklaringsbehov?.vurdertTidspunkt} />
    </VStack>
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
