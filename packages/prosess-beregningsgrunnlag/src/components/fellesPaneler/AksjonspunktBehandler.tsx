import React, { FunctionComponent, ReactElement } from 'react';
import Panel from 'nav-frontend-paneler';
import { Heading } from '@navikt/ds-react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { TextAreaField } from '@navikt/ft-form-hooks';

import { AktivitetStatus, PeriodeAarsak } from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  BeregningAvklaringsbehov,
} from '@navikt/ft-types';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import AksjonspunktBehandlerAT from '../arbeidstaker/AksjonspunktBehandlerAT';
import AksjonspunktBehandlerFL from '../frilanser/AksjonspunktBehandlerFL';
import AksjonspunktBehandlerTB from '../arbeidstaker/AksjonspunktBehandlerTB';
import AksjonspunktBehandlerSN from '../selvstendigNaeringsdrivende/AksjonspunktsbehandlerSN';
import ProsessStegSubmitButton from '../../felles/ProsessStegSubmitButton';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import styles from './aksjonspunktBehandler.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
} = ProsessBeregningsgrunnlagAksjonspunktCode;

const finnesAndelÅFastsetteMedStatus = (allePerioder: BeregningsgrunnlagPeriodeProp[], status: string): boolean => {
  if (!allePerioder || allePerioder.length < 1) {
    return false;
  }
  const andeler = allePerioder[0].beregningsgrunnlagPrStatusOgAndel
    ? allePerioder[0].beregningsgrunnlagPrStatusOgAndel
    : [];
  return andeler?.some(a => a.aktivitetStatus === status && a.skalFastsetteGrunnlag);
};

const finnAlleAndelerIFørstePeriode = (allePerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagAndel[] => {
  if (allePerioder && allePerioder.length > 0) {
    return allePerioder[0].beregningsgrunnlagPrStatusOgAndel ? allePerioder[0].beregningsgrunnlagPrStatusOgAndel : [];
  }
  return [];
};

const harPerioderMedAvsluttedeArbeidsforhold = (allePerioder: BeregningsgrunnlagPeriodeProp[]): boolean =>
  allePerioder.some(
    ({ periodeAarsaker }) =>
      periodeAarsaker && periodeAarsaker.some(kode => kode === PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET),
  );

const settOppKomponenterForNæring = (
  readOnly: boolean,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  avklaringsbehov: BeregningAvklaringsbehov,
  fieldIndex: number,
): ReactElement | null => {
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(allePerioder);
  const snAndel = alleAndelerIForstePeriode.find(
    andel => andel.aktivitetStatus && andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  if (!snAndel) {
    return null;
  }
  const erNyArbLivet = snAndel.erNyIArbeidslivet;
  const erVarigEndring = snAndel.næringer && snAndel.næringer.some(naring => naring.erVarigEndret === true);
  const erNyoppstartet = snAndel.næringer && snAndel.næringer.some(naring => naring.erNyoppstartet === true);
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Heading size="medium" className={beregningStyles.avsnittOverskrift}>
            {erNyArbLivet && (
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.NyIArbeidslivet" />
            )}
            {erNyoppstartet && !erVarigEndring && (
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.Nyoppstartet" />
            )}
            {!erNyArbLivet && !erNyoppstartet && erVarigEndring && (
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.VarigEndring" />
            )}
            {!erNyArbLivet && erNyoppstartet && erVarigEndring && (
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler" />
            )}
          </Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <AksjonspunktBehandlerSN
        readOnly={readOnly}
        avklaringsbehov={avklaringsbehov}
        erNyArbLivet={erNyArbLivet}
        erVarigEndring={erVarigEndring}
        erNyoppstartet={erNyoppstartet}
        fieldIndex={fieldIndex}
      />
    </>
  );
};

const settOppKomponenterForATFL = (
  avklaringsbehov: BeregningAvklaringsbehov,
  alleKodeverk: AlleKodeverk,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  readOnly: boolean,
  formName: string,
  intl: IntlShape,
  fieldIndex: number,
): ReactElement => {
  const erTidsbegrenset = harPerioderMedAvsluttedeArbeidsforhold(allePerioder);
  const visFL = finnesAndelÅFastsetteMedStatus(allePerioder, AktivitetStatus.FRILANSER);
  const visAT = finnesAndelÅFastsetteMedStatus(allePerioder, AktivitetStatus.ARBEIDSTAKER);
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Heading size="medium" className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      {erTidsbegrenset && (
        <AksjonspunktBehandlerTB
          readOnly={readOnly}
          formName={formName}
          allePerioder={allePerioder}
          alleKodeverk={alleKodeverk}
          avklaringsbehov={avklaringsbehov}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          fieldIndex={fieldIndex}
        />
      )}
      {!erTidsbegrenset && visAT && (
        <AksjonspunktBehandlerAT
          readOnly={readOnly}
          alleAndelerIForstePeriode={finnAlleAndelerIFørstePeriode(allePerioder)}
          alleKodeverk={alleKodeverk}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          fieldIndex={fieldIndex}
        />
      )}
      {visFL && <AksjonspunktBehandlerFL readOnly={readOnly} fieldIndex={fieldIndex} />}
      <VerticalSpacer sixteenPx />
      <FlexRow>
        <FlexColumn>
          <TextAreaField
            name={`BeregningForm.${fieldIndex}.ATFLVurdering`}
            label={<FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />}
            validate={[required, maxLength1500, minLength3, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
            className={styles.textAreaStyle}
            description={intl.formatMessage({
              id: 'Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Placeholder',
            })}
            parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
          />
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer sixteenPx />
    </>
  );
};

type OwnProps = {
  readOnly: boolean;
  avklaringsbehov?: BeregningAvklaringsbehov;
  alleKodeverk: AlleKodeverk;
  formName: string;
  readOnlySubmitButton: boolean;
  allePerioder?: BeregningsgrunnlagPeriodeProp[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  isSubmitting: boolean;
  isDirty: boolean;
  fieldIndex: number;
};

const AksjonspunktBehandler: FunctionComponent<OwnProps> = ({
  readOnly,
  avklaringsbehov,
  formName,
  readOnlySubmitButton,
  allePerioder,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  isDirty,
  isSubmitting,
  fieldIndex,
}) => {
  const intl = useIntl();
  if (!avklaringsbehov || !allePerioder) {
    return null;
  }
  const aksjonspunktGjelderNæring =
    avklaringsbehov.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE ||
    avklaringsbehov.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET;
  const aksjonspunktGjelderATFL =
    avklaringsbehov.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS ||
    avklaringsbehov.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD;

  const submittKnapp = (
    <FlexRow>
      <FlexColumn>
        <ProsessStegSubmitButton
          isReadOnly={readOnly}
          isSubmittable={!readOnlySubmitButton}
          isDirty={isDirty}
          isSubmitting={isSubmitting}
        />
      </FlexColumn>
    </FlexRow>
  );
  if (aksjonspunktGjelderNæring) {
    return (
      <div>
        <Panel className={readOnly ? beregningStyles.panelRight : styles.aksjonspunktBehandlerBorder}>
          {settOppKomponenterForNæring(readOnly, allePerioder, avklaringsbehov, fieldIndex)}
          <VerticalSpacer sixteenPx />
          {submittKnapp}
          <VerticalSpacer sixteenPx />
        </Panel>
      </div>
    );
  }
  return (
    <div>
      <Panel className={readOnly ? beregningStyles.panelRight : styles.aksjonspunktBehandlerBorder}>
        {aksjonspunktGjelderATFL &&
          settOppKomponenterForATFL(
            avklaringsbehov,
            alleKodeverk,
            allePerioder,
            arbeidsgiverOpplysningerPerId,
            readOnly,
            formName,
            intl,
            fieldIndex,
          )}
        {submittKnapp}
        <VerticalSpacer sixteenPx />
      </Panel>
    </div>
  );
};

AksjonspunktBehandler.defaultProps = {
  allePerioder: [],
};

export default AksjonspunktBehandler;
