import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { hasValidText, maxLength, maxValueFormatted, minLength, required } from '@navikt/ft-form-validators';
import { formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AktivitetStatus, isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { BeregningAvklaringsbehov, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { InputField, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { useFormContext } from 'react-hook-form';
import { VurderVarigEndretNyoppstartetResultatAP } from '../../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAvklaringsbehovCode from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';

import styles from '../fellesPaneler/aksjonspunktBehandler.module.css';
import { VurderOgFastsettValues } from '../../types/NaringAksjonspunktTsType';
import BeregningFormValues from '../../types/BeregningFormValues';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';

const MAX_LENGTH = 4000;
const maxLength4000 = maxLength(MAX_LENGTH);
const minLength3 = minLength(3);
export const begrunnelseFieldname = 'varigEndringNyoppstartetBegrunnelse';
export const varigEndringRadioname = 'erVarigEndret';
export const fastsettInntektFieldname = 'bruttoBeregningsgrunnlag';
const {
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = ProsessBeregningsgrunnlagAvklaringsbehovCode;

const inntektFastsettesText = (erVarigEndretArbeidssituasjon?: boolean) =>
  erVarigEndretArbeidssituasjon ? (
    <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil" />
  ) : (
    <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2" />
  );

type OwnProps = {
  endretTekst?: React.ReactNode;
  readOnly: boolean;
  erVarigEndring?: boolean;
  erVarigEndretArbeidssituasjon?: boolean;
  erNyoppstartet?: boolean;
  fieldIndex: number;
  formName: string;
  isAksjonspunktClosed: boolean;
  avklaringsbehov: BeregningAvklaringsbehov;
};

interface StaticFunctions {
  buildInitialValues: (
    relevanteAndeler: BeregningsgrunnlagAndel[],
    avklaringsbehov: BeregningAvklaringsbehov[],
  ) => VurderOgFastsettValues;
  transformValues: (values: Required<VurderOgFastsettValues>) => VurderVarigEndretNyoppstartetResultatAP;
}

/**
 * VurderVarigEndretEllerNyoppstartetSN
 *
 * Aksjonspunkt: VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE eller
 * VURDER_VARIG_ENDRET_ARBEIDSSITUASJON
 *
 * Presentasjonskomponent. Setter opp radioknapper som lar saksbehandler vurdere
 * aksjonspunkt om søker har hatt varig endret eller nyoppstaret næring eller varig endret arbeidssituasjon.
 */
const VurderVarigEndringEllerNyoppstartet: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  erVarigEndring,
  erVarigEndretArbeidssituasjon,
  erNyoppstartet,
  fieldIndex,
  formName,
  isAksjonspunktClosed,
  avklaringsbehov,
}) => {
  let radioLabel1 = <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring" />;
  let radioLabel2 = <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering" />;
  if (erNyoppstartet && !erVarigEndring) {
    radioLabel1 = <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet" />;
    radioLabel2 = <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet" />;
  }
  if (erVarigEndring && !erNyoppstartet) {
    radioLabel1 = <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring" />;
    radioLabel2 = <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring" />;
  }
  let radioLabel = 'Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring';
  if (erVarigEndretArbeidssituasjon) {
    radioLabel = 'Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid';
  }
  if (erNyoppstartet) {
    radioLabel = 'Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring';
  }
  const intl = useIntl();
  const formMethods = useFormContext<BeregningFormValues>();
  const varigEndringValues = formMethods.watch(formName)[fieldIndex] as VurderOgFastsettValues;
  const varigEndringBekreftetVerdi = varigEndringValues.erVarigEndret;
  const radioknapper = [
    {
      value: 'false',
      label: radioLabel1,
    },
    {
      value: 'true',
      label: radioLabel2,
    },
  ];
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <RadioGroupPanel
            name={`${formName}.${fieldIndex}.${varigEndringRadioname}`}
            validate={[required]}
            label={intl.formatMessage({ id: radioLabel })}
            isHorizontal={false}
            isReadOnly={readOnly}
            isEdited={readOnly && isAksjonspunktClosed}
            radios={radioknapper}
            isTrueOrFalseSelection
          />
        </FlexColumn>
      </FlexRow>
      {varigEndringBekreftetVerdi && (
        <>
          <FlexRow className={styles.verticalAlignMiddle}>
            <FlexColumn className={styles.dynamiskKolonne}>
              <BodyShort size="small">{inntektFastsettesText(erVarigEndretArbeidssituasjon)}</BodyShort>
            </FlexColumn>
            <FlexColumn>
              <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
                <InputField
                  name={`${formName}.${fieldIndex}.${fastsettInntektFieldname}`}
                  validate={[required, maxValueFormatted(178956970)]}
                  parse={parseCurrencyInput}
                  className={styles.breddeInntekt}
                  readOnly={readOnly}
                  isEdited={readOnly && isAksjonspunktClosed}
                />
              </div>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <TextAreaField
              name={`${formName}.${fieldIndex}.${begrunnelseFieldname}`}
              label={<FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />}
              validate={[required, maxLength4000, minLength3, hasValidText]}
              maxLength={MAX_LENGTH}
              readOnly={readOnly}
              description={intl.formatMessage({
                id: 'Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst',
              })}
              parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
            />
            <AssessedBy ident={avklaringsbehov?.vurdertAv} date={avklaringsbehov?.vurdertTidspunkt} />
          </FlexColumn>
        </FlexRow>
      </>
    </>
  );
};

VurderVarigEndringEllerNyoppstartet.buildInitialValues = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  avklaringsbehov: BeregningAvklaringsbehov[],
): VurderOgFastsettValues => {
  const varigEndretAndel = relevanteAndeler.find(
    andel =>
      andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE ||
      andel.aktivitetStatus === AktivitetStatus.BRUKERS_ANDEL,
  );
  const varigEndretNaeringAP = avklaringsbehov.find(
    ap =>
      ap.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE ||
      ap.definisjon === VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
  );
  if (varigEndretNaeringAP) {
    const erVarigEndringValgt = isAksjonspunktOpen(varigEndretNaeringAP.status)
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

export default VurderVarigEndringEllerNyoppstartet;
