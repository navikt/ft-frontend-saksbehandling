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
import { AktivitetStatus, isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

const {
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_DEKNINGSGRAD,
} = ProsessBeregningsgrunnlagAksjonspunktCode;

const getAvviksprosent = (sammenligningsgrunnlagPrStatus: SammenligningsgrunlagProp[]): number => {
  const avvikElem = sammenligningsgrunnlagPrStatus.find(status => status.avvikProsent > 25);
  const avvikProsent = avvikElem && avvikElem.avvikProsent ? avvikElem.avvikProsent : 0;
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
  [VURDER_DEKNINGSGRAD]: 'Beregningsgrunnlag.Helptext.BarnetHarDødDeFørsteSeksUkene',
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
  avvikProsent: number,
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
            id={findAksjonspunktHelpTekst(ap, erVarigEndring)}
            values={{ verdi: avvikProsent, b: (chunks: any) => <b>{chunks}</b>, br: <br /> }}
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
  const avvikProsent = getAvviksprosent(sammenligningGr);
  return (
    <>
      <VerticalSpacer eightPx />
      {lagAksjonspunktHelpText(åpneAksjonspunkter, avvikProsent, andelerIFørstePeriode)}
    </>
  );
};

export default AksjonspunktTittel;
