import React, { FunctionComponent, ReactElement } from 'react';
import Panel from 'nav-frontend-paneler';
import { Column, Row } from 'nav-frontend-grid';
import { Element } from 'nav-frontend-typografi';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
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
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import DekningsgradAksjonspunktPanel from './DekningsgradAksjonspunktPanel';
import ProsessStegSubmitButton from '../../felles/ProsessStegSubmitButton';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import styles from './aksjonspunktBehandler.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

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
const harFlereAksjonspunkter = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  !!avklaringsbehov && avklaringsbehov.length > 1;
const finnATFLVurderingLabel = (gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[]): ReactElement => {
  if (harFlereAksjonspunkter(gjeldendeAvklaringsbehov)) {
    return <FormattedMessage id="Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag" />;
  }
  return <FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />;
};

const harPerioderMedAvsluttedeArbeidsforhold = (allePerioder: BeregningsgrunnlagPeriodeProp[]): boolean =>
  allePerioder.some(
    ({ periodeAarsaker }) =>
      periodeAarsaker && periodeAarsaker.some(kode => kode === PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET),
  );

const settOppKomponenterForNæring = (
  readOnly: boolean,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  avklaringsbehov: BeregningAvklaringsbehov[],
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
      <Row>
        <Column xs="12">
          <Element className={beregningStyles.avsnittOverskrift}>
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
          </Element>
        </Column>
      </Row>
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
  avklaringsbehov: BeregningAvklaringsbehov[],
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
      <Row>
        <Column xs="12">
          <Element className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler" />
          </Element>
        </Column>
      </Row>
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
      <Row>
        <Column xs="12">
          <TextAreaField
            name={`BeregningForm.${fieldIndex}.ATFLVurdering`}
            label={finnATFLVurderingLabel(avklaringsbehov)}
            validate={[required, maxLength1500, minLength3, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
            className={styles.textAreaStyle}
            description={intl.formatMessage({
              id: 'Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Placeholder',
            })}
            parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
          />
        </Column>
      </Row>
      <VerticalSpacer sixteenPx />
    </>
  );
};

type OwnProps = {
  readOnly: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  alleKodeverk: AlleKodeverk;
  formName: string;
  readOnlySubmitButton: boolean;
  allePerioder?: BeregningsgrunnlagPeriodeProp[];
  relevanteStatuser: RelevanteStatuserProp;
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
  relevanteStatuser,
  arbeidsgiverOpplysningerPerId,
  isDirty,
  isSubmitting,
  fieldIndex,
}) => {
  const intl = useIntl();
  if (!avklaringsbehov || avklaringsbehov.length === 0 || !allePerioder) {
    return null;
  }
  const submittKnapp = (
    <Row>
      <Column xs="12">
        <ProsessStegSubmitButton
          isReadOnly={readOnly}
          isSubmittable={!readOnlySubmitButton}
          isDirty={isDirty}
          isSubmitting={isSubmitting}
        />
      </Column>
    </Row>
  );
  if (relevanteStatuser.isSelvstendigNaeringsdrivende) {
    return (
      <div className={readOnly ? '' : styles.aksjonspunktBehandlerContainer}>
        <Panel className={readOnly ? beregningStyles.panelRight : styles.aksjonspunktBehandlerBorder}>
          {settOppKomponenterForNæring(readOnly, allePerioder, avklaringsbehov, fieldIndex)}
          <VerticalSpacer sixteenPx />
          {submittKnapp}
          <VerticalSpacer sixteenPx />
        </Panel>
      </div>
    );
  }
  const atflAPKoder = [
    ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
    ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  ] as string[];

  const harATFLAP = avklaringsbehov.some(ap => atflAPKoder.includes(ap.definisjon));
  const harDekningsgradAP = avklaringsbehov.some(
    ap => ap.definisjon === ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_DEKNINGSGRAD,
  );
  return (
    <div className={readOnly ? '' : styles.aksjonspunktBehandlerContainer}>
      <Panel className={readOnly ? beregningStyles.panelRight : styles.aksjonspunktBehandlerBorder}>
        {harATFLAP &&
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
        {harDekningsgradAP && (
          <>
            <Row>
              <Column xs="12">
                <Element className={beregningStyles.avsnittOverskrift}>
                  <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.Dekningsgrad" />
                </Element>
              </Column>
            </Row>
            <VerticalSpacer eightPx />
            <Row>
              <Column xs="12">
                <DekningsgradAksjonspunktPanel readOnly={readOnly} fieldIndex={fieldIndex} />
              </Column>
            </Row>
            <VerticalSpacer sixteenPx />
          </>
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
