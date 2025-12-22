import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Spacer, VStack } from '@navikt/ds-react';

import { RhfTextarea, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, maxValueFormatted, minLength, required } from '@navikt/ft-form-validators';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import type { BeregningAvklaringsbehov, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import type { BeregningFormValues, FormNameType } from '../../types/BeregningFormValues';
import type { NyIArbeidslivetBruttoNæringResultatAP } from '../../types/BeregningsgrunnlagAP';
import type { NyIArbeidslivetValues } from '../../types/NæringAksjonspunkt';

const MAX_LENGTH = 4000;
const maxLength4000 = maxLength(MAX_LENGTH);

const minLength3 = minLength(3);
const begrunnelseFieldname = 'fastsettBeregningsgrunnlagSNBegrunnelse';
const fastsettInntektFieldname = 'bruttoBeregningsgrunnlag';
const { FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET } = AksjonspunktKode;

interface Props {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  erNyIArbeidslivet: boolean;
  fieldIndex: number;
  formName: FormNameType;
  aksjonspunkt: BeregningAvklaringsbehov;
  skalValideres: boolean;
}

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
  erNyIArbeidslivet,
  fieldIndex,
  formName,
  aksjonspunkt,
  skalValideres,
}: Props) => {
  const { control } = useFormContext<BeregningFormValues>();

  return (
    <VStack gap="space-40">
      {erNyIArbeidslivet && (
        <HStack wrap={false}>
          <BodyShort size="small">
            <FormattedMessage id="FastsettSNNyIArbeid.Tittel" />
          </BodyShort>
          <Spacer />
          <RhfTextField
            name={`${formName}.${fieldIndex}.${fastsettInntektFieldname}`}
            control={control}
            validate={skalValideres ? [required, maxValueFormatted(178956970)] : []}
            parse={parseCurrencyInput}
            hideLabel
            htmlSize={12}
            style={{ textAlign: 'right' }}
            isEdited={readOnly && isAksjonspunktClosed}
            readOnly={readOnly}
          />
        </HStack>
      )}
      <RhfTextarea
        name={`${formName}.${fieldIndex}.${begrunnelseFieldname}`}
        control={control}
        label={<FormattedMessage id="Forms.VurderingAvFastsattBeregningsgrunnlag" />}
        validate={skalValideres ? [required, maxLength4000, minLength3, hasValidText] : []}
        isEdited={readOnly && isAksjonspunktClosed}
        maxLength={MAX_LENGTH}
        readOnly={readOnly}
        description={<FormattedMessage id="Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst" />}
        parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
      />
      <AssessedBy ident={aksjonspunkt?.vurdertAv} date={aksjonspunkt?.vurdertTidspunkt} />
    </VStack>
  );
};

FastsettSNNyIArbeid.buildInitialValues = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  avklaringsbehov: BeregningAvklaringsbehov[],
): NyIArbeidslivetValues => {
  const snAndel = relevanteAndeler.find(andel => andel.aktivitetStatus === 'SN');
  const nyIArbeidslivetAP = avklaringsbehov.find(
    ap => ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  );
  return {
    [fastsettInntektFieldname]: snAndel ? formatCurrencyNoKr(snAndel.overstyrtPrAar) : undefined,
    [begrunnelseFieldname]: nyIArbeidslivetAP?.begrunnelse ? nyIArbeidslivetAP.begrunnelse : undefined,
  };
};

FastsettSNNyIArbeid.transformValues = (
  values: Required<NyIArbeidslivetValues>,
): NyIArbeidslivetBruttoNæringResultatAP => ({
  begrunnelse: values[begrunnelseFieldname],
  bruttoBeregningsgrunnlag: removeSpacesFromNumber(values[fastsettInntektFieldname]),
});
