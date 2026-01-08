import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroup, RhfTextarea, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, maxValueFormatted, minLength, required } from '@navikt/ft-form-validators';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import type { BeregningAvklaringsbehov, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr, isAksjonspunktOpen, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import { AksjonspunktKode, medAPKode } from '../../../utils/aksjonspunkt';
import type { BeregningFormValues, FormNameType } from '../../types/BeregningFormValues';
import type { VurderVarigEndretNyoppstartetResultatAP } from '../../types/BeregningsgrunnlagAP';
import type { VurderOgFastsettValues } from '../../types/NæringAksjonspunkt';

const MAX_LENGTH = 4000;
const maxLength4000 = maxLength(MAX_LENGTH);
const minLength3 = minLength(3);
const begrunnelseFieldname = 'varigEndringNyoppstartetBegrunnelse';
const varigEndringRadioname = 'erVarigEndret';
const fastsettInntektFieldname = 'bruttoBeregningsgrunnlag';
const {
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = AksjonspunktKode;

interface Props {
  readOnly: boolean;
  erVarigEndring?: boolean;
  erVarigEndretArbeidssituasjon?: boolean;
  erNyoppstartet?: boolean;
  fieldIndex: number;
  formName: FormNameType;
  isAksjonspunktClosed: boolean;
  aksjonspunkt: BeregningAvklaringsbehov;
  skalValideres: boolean;
}

/**
 * VurderVarigEndretEllerNyoppstartetSN
 *
 * Aksjonspunkt: VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE eller
 * VURDER_VARIG_ENDRET_ARBEIDSSITUASJON
 *
 * Presentasjonskomponent. Setter opp radioknapper som lar saksbehandler vurdere
 * aksjonspunkt om søker har hatt varig endret eller nyoppstartet næring eller varig endret arbeidssituasjon.
 */
export const VurderVarigEndringEllerNyoppstartet = ({
  readOnly,
  erVarigEndring,
  erVarigEndretArbeidssituasjon,
  erNyoppstartet,
  fieldIndex,
  formName,
  isAksjonspunktClosed,
  aksjonspunkt,
  skalValideres,
}: Props) => {
  const { radioOption1, radioOption2, radioLegend } = hentRadioTekster(
    erNyoppstartet,
    erVarigEndring,
    erVarigEndretArbeidssituasjon,
  );
  const formMethods = useFormContext<BeregningFormValues>();
  const varigEndringValues = formMethods.watch(formName)[fieldIndex] as VurderOgFastsettValues;
  const varigEndringBekreftetVerdi = varigEndringValues.erVarigEndret;

  return (
    <VStack gap="space-16">
      <RhfRadioGroup
        name={`${formName}.${fieldIndex}.${varigEndringRadioname}`}
        control={formMethods.control}
        validate={skalValideres ? [required] : []}
        legend={radioLegend}
        readOnly={readOnly}
        isEdited={readOnly && isAksjonspunktClosed}
      >
        <Radio value={false} size="small">
          {radioOption1}
        </Radio>
        <Radio value={true} size="small">
          {radioOption2}
        </Radio>
      </RhfRadioGroup>
      {varigEndringBekreftetVerdi && (
        <HStack gap="space-16" align="center">
          <BodyShort size="small">{inntektFastsettesText(erVarigEndretArbeidssituasjon)}</BodyShort>
          <RhfTextField
            name={`${formName}.${fieldIndex}.${fastsettInntektFieldname}`}
            control={formMethods.control}
            validate={skalValideres ? [required, maxValueFormatted(178956970)] : []}
            parse={parseCurrencyInput}
            hideLabel
            htmlSize={12}
            style={{ textAlign: 'right' }}
            readOnly={readOnly}
            isEdited={readOnly && isAksjonspunktClosed}
          />
        </HStack>
      )}
      <RhfTextarea
        name={`${formName}.${fieldIndex}.${begrunnelseFieldname}`}
        control={formMethods.control}
        label={<FormattedMessage id="Forms.Vurdering" />}
        validate={skalValideres ? [required, maxLength4000, minLength3, hasValidText] : []}
        maxLength={MAX_LENGTH}
        readOnly={readOnly}
        description={<FormattedMessage id="Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst" />}
        parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
      />
      <AssessedBy ident={aksjonspunkt?.vurdertAv} date={aksjonspunkt?.vurdertTidspunkt} />
    </VStack>
  );
};

VurderVarigEndringEllerNyoppstartet.buildInitialValues = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  avklaringsbehov: BeregningAvklaringsbehov[],
): VurderOgFastsettValues => {
  const varigEndretAndel = relevanteAndeler.find(
    andel => andel.aktivitetStatus === 'SN' || andel.aktivitetStatus === 'BA',
  );
  const varigEndretNaeringAP = avklaringsbehov.find(
    medAPKode(
      VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
    ),
  );
  if (varigEndretNaeringAP) {
    const erVarigEndringValgt = isAksjonspunktOpen(varigEndretNaeringAP)
      ? undefined
      : relevanteAndeler?.[0]?.overstyrtPrAar != null;
    return {
      [varigEndringRadioname]: erVarigEndringValgt,
      [begrunnelseFieldname]: varigEndretNaeringAP.begrunnelse ? varigEndretNaeringAP.begrunnelse : '',
      [fastsettInntektFieldname]: varigEndretAndel ? formatCurrencyNoKr(varigEndretAndel.overstyrtPrAar) : undefined,
    };
  }
  return {};
};

VurderVarigEndringEllerNyoppstartet.transformValues = (
  values: Required<VurderOgFastsettValues>,
): VurderVarigEndretNyoppstartetResultatAP => {
  const erVarigEndring = values[varigEndringRadioname];
  return {
    begrunnelse: values[begrunnelseFieldname],
    erVarigEndretNaering: erVarigEndring, // TODO: Bytt ut bruk av erVarigEndretNaering med erVarigEndret
    erVarigEndret: erVarigEndring,
    bruttoBeregningsgrunnlag: erVarigEndring ? removeSpacesFromNumber(values[fastsettInntektFieldname]) : undefined,
  };
};

const inntektFastsettesText = (erVarigEndretArbeidssituasjon: boolean | undefined) =>
  erVarigEndretArbeidssituasjon ? (
    <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.VarigEndretInntektFastsettesTil" />
  ) : (
    <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.BruttoBerGr2" />
  );

const hentRadioTekster = (
  erNyoppstartet: boolean | undefined,
  erVarigEndring: boolean | undefined,
  erVarigEndretArbeidssituasjon: boolean | undefined,
) => {
  let radioOption1 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.IngenEndring" />;
  let radioOption2 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.EndretNaering" />;
  if (erNyoppstartet && !erVarigEndring) {
    radioOption1 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.IkkeNyoppstartet" />;
    radioOption2 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.Nyoppstartet" />;
  }
  if (erVarigEndring && !erNyoppstartet) {
    radioOption1 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.IkkeVarigEndring" />;
    radioOption2 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.VarigEndring" />;
  }
  let radioLegend = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.RadioTittel.VarigEndringNæring" />;
  if (erVarigEndretArbeidssituasjon) {
    radioLegend = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.RadioTittel.VarigEndringArbeid" />;
  }
  if (erNyoppstartet) {
    radioLegend = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.RadioTittel.NyoppstartetNæring" />;
  }
  return { radioOption1, radioOption2, radioLegend };
};
