import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { hasValidText, maxLength, maxValueFormatted, minLength, required } from '@navikt/ft-form-validators';
import { formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AktivitetStatus, isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { BeregningAvklaringsbehov, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formHooks, InputField, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { VurderVarigEndretNyoppstartetResultatAP } from '../../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import styles from '../fellesPaneler/aksjonspunktBehandler.less';
import { VurderOgFastsettValues } from '../../types/NaringAksjonspunktTsType';
import BeregningFormValues from '../../types/BeregningFormValues';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);
export const begrunnelseFieldname = 'varigEndringNyoppstartetBegrunnelse';
export const varigEndringRadioname = 'erVarigEndret';
export const fastsettInntektFieldname = 'bruttoBeregningsgrunnlag';
const {
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = ProsessBeregningsgrunnlagAksjonspunktCode;

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
  const intl = useIntl();
  const formMethods = formHooks.useFormContext<BeregningFormValues>();
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
      {!readOnly && (
        <FlexRow>
          <FlexColumn>
            <RadioGroupPanel
              name={`${formName}.${fieldIndex}.${varigEndringRadioname}`}
              validate={[required]}
              isHorizontal={false}
              isReadOnly={readOnly}
              parse={(value: string) => value === 'true'}
              radios={radioknapper}
            />
          </FlexColumn>
        </FlexRow>
      )}
      {readOnly && (
        <>
          <FlexRow>
            <FlexColumn>
              <BodyShort size="small">
                {erNyoppstartet && (
                  <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet" />
                )}
                {erVarigEndring && (
                  <FormattedMessage id="Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring" />
                )}
              </BodyShort>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
        </>
      )}
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
                />
              </div>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <FlexRow>
        <FlexColumn>
          <TextAreaField
            name={`${formName}.${fieldIndex}.${begrunnelseFieldname}`}
            label={<FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />}
            validate={[required, maxLength1500, minLength3, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
            description={intl.formatMessage({
              id: 'Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Placeholder',
            })}
            parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
          />
        </FlexColumn>
      </FlexRow>
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
    return {
      [varigEndringRadioname]: isAksjonspunktOpen(varigEndretNaeringAP.status)
        ? undefined
        : relevanteAndeler[0].overstyrtPrAar !== null && relevanteAndeler[0].overstyrtPrAar !== undefined,
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
