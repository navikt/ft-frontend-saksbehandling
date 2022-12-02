import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  Beregningsgrunnlag as BeregningsgrunnlagProp,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  SammenligningsgrunlagProp,
  BeregningAvklaringsbehov,
} from '@navikt/ft-types';
import { AktivitetStatus, isAksjonspunktOpen, SammenligningType } from '@navikt/ft-kodeverk';
import ProsessBeregningsgrunnlagAvklaringsbehovCode from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';

const {
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
} = ProsessBeregningsgrunnlagAvklaringsbehovCode;

const getKorrektSammenligningsgrunnlagForAvklaringsbehov = (
  avklaringsbehov: BeregningAvklaringsbehov,
  sammenligningsgrunnlagPrStatus: SammenligningsgrunlagProp[],
): SammenligningsgrunlagProp | undefined => {
  switch (avklaringsbehov.definisjon) {
    case VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:
      return sammenligningsgrunnlagPrStatus.find(
        sg =>
          sg.sammenligningsgrunnlagType === SammenligningType.ATFLSN ||
          sg.sammenligningsgrunnlagType === SammenligningType.SN,
      );
    case VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:
      return sammenligningsgrunnlagPrStatus.find(
        sg => sg.sammenligningsgrunnlagType === SammenligningType.MIDLERTIDIG_INAKTIV,
      );
    case FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:
    case FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:
      return sammenligningsgrunnlagPrStatus.find(
        sg =>
          sg.sammenligningsgrunnlagType === SammenligningType.ATFLSN ||
          sg.sammenligningsgrunnlagType === SammenligningType.AT_FL ||
          sg.sammenligningsgrunnlagType === SammenligningType.AT ||
          sg.sammenligningsgrunnlagType === SammenligningType.FL,
      );
    case FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:
      return undefined;
    default:
      return undefined;
  }
};

const getAvviksprosent = (
  avklaringsbehov: BeregningAvklaringsbehov,
  sammenligningsgrunnlagPrStatus: SammenligningsgrunlagProp[],
): number => {
  const sg = getKorrektSammenligningsgrunnlagForAvklaringsbehov(avklaringsbehov, sammenligningsgrunnlagPrStatus);
  const avvikProsent = sg && sg.avvikProsent ? sg.avvikProsent : 0;
  return Number(avvikProsent.toFixed(1));
};

const definertOgIkkeTom = (liste: any[]): boolean => liste && liste.length > 0;

const getSammenligningsgrunnlagsPrStatus = (bg: BeregningsgrunnlagProp): SammenligningsgrunlagProp[] =>
  bg.sammenligningsgrunnlagPrStatus ? bg.sammenligningsgrunnlagPrStatus : [];

const APTekster = {
  [FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS]: 'Beregningsgrunnlag.Helptext.Arbeidstaker2',
  [FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD]:
    'Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold2',
  [FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET]: 'Beregningsgrunnlag.Helptext.NyIArbeidslivetSN2',
  [VURDER_VARIG_ENDRET_ARBEIDSSITUASJON]: 'Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon',
} as Record<string, string>;

const findAksjonspunktHelpTekst = (
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov,
  erVarigEndring: boolean,
): string => {
  if (
    gjeldendeAvklaringsbehov.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE
  ) {
    return erVarigEndring
      ? 'Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring'
      : 'Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet';
  }
  return APTekster[gjeldendeAvklaringsbehov.definisjon];
};

const lagAksjonspunktHelpText = (
  åpneAvklaringsbehov: BeregningAvklaringsbehov[],
  sammenligningsgrunnlag: SammenligningsgrunlagProp[],
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],
): ReactElement => {
  const snAndel = alleAndelerIForstePeriode.find(
    andel => andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  const erVarigEndring = !!snAndel?.næringer?.some(naring => naring.erVarigEndret === true);
  return (
    <div>
      <AksjonspunktHelpTextHTML>
        {åpneAvklaringsbehov.map(ap => (
          <FormattedMessage
            key={ap.definisjon}
            id={findAksjonspunktHelpTekst(ap, erVarigEndring || ap.definisjon === VURDER_VARIG_ENDRET_ARBEIDSSITUASJON)}
            values={{
              verdi: getAvviksprosent(ap, sammenligningsgrunnlag),
              b: (chunks: any) => <b>{chunks}</b>,
              br: <br />,
            }}
          />
        ))}
      </AksjonspunktHelpTextHTML>
      <VerticalSpacer thirtyTwoPx />
    </div>
  );
};

type OwnProps = {
  avklaringsbehov: BeregningAvklaringsbehov[];
  beregningsgrunnlag: Beregningsgrunnlag;
};

const AksjonspunktTittel: FunctionComponent<OwnProps> = ({ avklaringsbehov, beregningsgrunnlag }) => {
  const førstePeriode = beregningsgrunnlag.beregningsgrunnlagPeriode
    ? beregningsgrunnlag.beregningsgrunnlagPeriode[0]
    : undefined;
  const andelerIFørstePeriode =
    førstePeriode && førstePeriode.beregningsgrunnlagPrStatusOgAndel
      ? førstePeriode.beregningsgrunnlagPrStatusOgAndel
      : [];
  const åpneAksjonspunkter = avklaringsbehov.filter(ap => isAksjonspunktOpen(ap.status));
  const harGrunnTilÅViseKomponent = definertOgIkkeTom(åpneAksjonspunkter) && definertOgIkkeTom(andelerIFørstePeriode);
  if (!harGrunnTilÅViseKomponent) {
    return null;
  }
  const sammenligningGr = getSammenligningsgrunnlagsPrStatus(beregningsgrunnlag);
  return (
    <>
      <VerticalSpacer eightPx />
      {lagAksjonspunktHelpText(åpneAksjonspunkter, sammenligningGr, andelerIFørstePeriode)}
    </>
  );
};

export default AksjonspunktTittel;
