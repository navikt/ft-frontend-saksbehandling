import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, HStack, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroup, RhfTextarea, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, maxValueFormatted, minLength, required } from '@navikt/ft-form-validators';
import { AktivitetStatus, isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import type { BeregningAvklaringsbehov, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import type { BeregningFormValues } from '../../types/BeregningFormValues';
import type { VurderVarigEndretNyoppstartetResultatAP } from '../../types/interface/BeregningsgrunnlagAP';
import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import type { VurderOgFastsettValues } from '../../types/NæringAksjonspunkt';

import styles from '../fellesPaneler/aksjonspunktBehandler.module.css';

const MAX_LENGTH = 4000;
const maxLength4000 = maxLength(MAX_LENGTH);
const minLength3 = minLength(3);
const begrunnelseFieldname = 'varigEndringNyoppstartetBegrunnelse';
const varigEndringRadioname = 'erVarigEndret';
const fastsettInntektFieldname = 'bruttoBeregningsgrunnlag';
const {
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = ProsessBeregningsgrunnlagAvklaringsbehovCode;

const inntektFastsettesText = (erVarigEndretArbeidssituasjon?: boolean) =>
  erVarigEndretArbeidssituasjon ? (
    <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.VarigEndretInntektFastsettesTil" />
  ) : (
    <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.BruttoBerGr2" />
  );

type Props = {
  endretTekst?: React.ReactNode;
  readOnly: boolean;
  erVarigEndring?: boolean;
  erVarigEndretArbeidssituasjon?: boolean;
  erNyoppstartet?: boolean;
  fieldIndex: number;
  formName: string;
  isAksjonspunktClosed: boolean;
  avklaringsbehov: BeregningAvklaringsbehov;
  skalValideres: boolean;
};

/**
 * VurderVarigEndretEllerNyoppstartetSN
 *
 * Aksjonspunkt: VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE eller
 * VURDER_VARIG_ENDRET_ARBEIDSSITUASJON
 *
 * Presentasjonskomponent. Setter opp radioknapper som lar saksbehandler vurdere
 * aksjonspunkt om søker har hatt varig endret eller nyoppstaret næring eller varig endret arbeidssituasjon.
 */
export const VurderVarigEndringEllerNyoppstartet = ({
  readOnly,
  erVarigEndring,
  erVarigEndretArbeidssituasjon,
  erNyoppstartet,
  fieldIndex,
  formName,
  isAksjonspunktClosed,
  avklaringsbehov,
  skalValideres,
}: Props) => {
  let radioLabel1 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.IngenEndring" />;
  let radioLabel2 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.EndretNaering" />;
  if (erNyoppstartet && !erVarigEndring) {
    radioLabel1 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.IkkeNyoppstartet" />;
    radioLabel2 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.Nyoppstartet" />;
  }
  if (erVarigEndring && !erNyoppstartet) {
    radioLabel1 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.IkkeVarigEndring" />;
    radioLabel2 = <FormattedMessage id="VurderVarigEndringEllerNyoppstartet.VarigEndring" />;
  }
  let radioLabel = 'VurderVarigEndringEllerNyoppstartet.RadioTittel.VarigEndringNæring';
  if (erVarigEndretArbeidssituasjon) {
    radioLabel = 'VurderVarigEndringEllerNyoppstartet.RadioTittel.VarigEndringArbeid';
  }
  if (erNyoppstartet) {
    radioLabel = 'VurderVarigEndringEllerNyoppstartet.RadioTittel.NyoppstartetNæring';
  }
  const intl = useIntl();
  const formMethods = useFormContext<BeregningFormValues>();
  const varigEndringValues = formMethods.watch(formName)[fieldIndex] as VurderOgFastsettValues;
  const varigEndringBekreftetVerdi = varigEndringValues.erVarigEndret;

  return (
    <VStack gap="space-16">
      <RhfRadioGroup
        name={`${formName}.${fieldIndex}.${varigEndringRadioname}`}
        control={formMethods.control}
        validate={skalValideres ? [required] : []}
        label={intl.formatMessage({ id: radioLabel })}
        isReadOnly={readOnly}
        isEdited={readOnly && isAksjonspunktClosed}
      >
        <Radio value={false} size="small">
          {radioLabel1}
        </Radio>
        <Radio value={true} size="small">
          {radioLabel2}
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
            className={styles.beløpInput}
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
        description={intl.formatMessage({
          id: 'Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst',
        })}
        parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
      />
      <AssessedBy ident={avklaringsbehov?.vurdertAv} date={avklaringsbehov?.vurdertTidspunkt} />
    </VStack>
  );
};

VurderVarigEndringEllerNyoppstartet.buildInitialValues = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  avklaringsbehov: BeregningAvklaringsbehov[],
): VurderOgFastsettValues => {
  const varigEndretAndel = relevanteAndeler.find(
    andel =>
      andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NÆRINGSDRIVENDE ||
      andel.aktivitetStatus === AktivitetStatus.BRUKERS_ANDEL,
  );
  const varigEndretNaeringAP = avklaringsbehov.find(
    ap =>
      ap.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE ||
      ap.definisjon === VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
  );
  if (varigEndretNaeringAP) {
    const erVarigEndringValgt = isAksjonspunktOpen(varigEndretNaeringAP)
      ? undefined
      : relevanteAndeler[0].overstyrtPrAar !== null && relevanteAndeler[0].overstyrtPrAar !== undefined;
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
