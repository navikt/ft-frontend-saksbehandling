import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Undertittel } from 'nav-frontend-typografi';
import { VerticalSpacer } from '@ft-frontend-saksbehandling/ui-komponenter';
import {
  vilkarType,
  AksjonspunktCode,
  aktivitetStatus,
  isBeregningAksjonspunkt,
  isStatusArbeidstakerOrKombinasjon,
  isStatusDagpengerOrAAP,
  isStatusFrilanserOrKombinasjon,
  isStatusKombinasjon,
  isStatusMilitaer,
  isStatusSNOrKombinasjon,
  isStatusTilstotendeYtelse,
} from '@ft-frontend-saksbehandling/kodeverk';
import Aksjonspunkt from '@ft-frontend-saksbehandling/types/src/aksjonspunktTsType';
import { AlleKodeverk, ArbeidsgiverOpplysningerPerId } from '@ft-frontend-saksbehandling/types';
import Beregningsgrunnlag from '@ft-frontend-saksbehandling/types/src/beregningsgrunnlagTsType';
import Vilkar from '@ft-frontend-saksbehandling/types/src/vilkarTsType';
import GraderingUtenBGReadOnly from './gradering/GraderingUtenBGReadOnly';
import BeregningForm from './beregningForm/BeregningForm';
import RelevanteStatuserProp from '../types/RelevanteStatuserTsType';

const visningForManglendeBG = () => (
  <>
    <Undertittel>
      <FormattedMessage id="Beregningsgrunnlag.Title" />
    </Undertittel>
    <VerticalSpacer eightPx />
    <Row>
      <Column xs="6">
        <FormattedMessage id="Beregningsgrunnlag.HarIkkeBeregningsregler" />
      </Column>
    </Row>
    <Row>
      <Column xs="6">
        <FormattedMessage id="Beregningsgrunnlag.SakTilInfo" />
      </Column>
    </Row>
  </>
);

const getAksjonspunkterForBeregning = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt[] => (aksjonspunkter
  ? aksjonspunkter.filter((ap) => isBeregningAksjonspunkt(ap.definisjon))
  : []);

const getRelevanteStatuser = (bg: Beregningsgrunnlag): RelevanteStatuserProp => (bg.aktivitetStatus ? ({
  isArbeidstaker: bg.aktivitetStatus.some((kode) => isStatusArbeidstakerOrKombinasjon(kode)),
  isFrilanser: bg.aktivitetStatus.some((kode) => isStatusFrilanserOrKombinasjon(kode)),
  isSelvstendigNaeringsdrivende: bg.aktivitetStatus.some((kode) => isStatusSNOrKombinasjon(kode)),
  harAndreTilstotendeYtelser: bg.aktivitetStatus.some((kode) => isStatusTilstotendeYtelse(kode)),
  harDagpengerEllerAAP: bg.aktivitetStatus.some((kode) => isStatusDagpengerOrAAP(kode)),
  isAAP: bg.aktivitetStatus.some((kode) => kode === aktivitetStatus.ARBEIDSAVKLARINGSPENGER),
  isDagpenger: bg.aktivitetStatus.some((kode) => kode === aktivitetStatus.DAGPENGER),
  skalViseBeregningsgrunnlag: bg.aktivitetStatus && bg.aktivitetStatus.length > 0,
  isKombinasjonsstatus: bg.aktivitetStatus.some((kode) => isStatusKombinasjon(kode)) || bg.aktivitetStatus.length > 1,
  isMilitaer: bg.aktivitetStatus.some((kode) => isStatusMilitaer(kode)),
}) : null);

const getBGVilkar = (vilkar: Vilkar[]): Vilkar => (vilkar
  ? vilkar.find((v) => v.vilkarType && v.vilkarType === vilkarType.BEREGNINGSGRUNNLAGVILKARET)
  : undefined);

const getAksjonspunktForGraderingPaaAndelUtenBG = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt => (aksjonspunkter
  ? aksjonspunkter.find((ap) => ap.definisjon === AksjonspunktCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG)
  : undefined);

type OwnProps = {
    submitCallback: (...args: any[]) => any;
    readOnly: boolean;
    readOnlySubmitButton: boolean;
    aksjonspunkter: Aksjonspunkt[];
    alleKodeverk: AlleKodeverk;
    beregningsgrunnlag: Beregningsgrunnlag;
    vilkar: Vilkar[];
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

/**
 * BeregningFP
 *
 * Presentasjonskomponent. Holder på alle komponenter relatert til beregning av foreldrepenger.
 * Finner det gjeldende aksjonspunktet hvis vi har et.
 */
const BeregningFP: FunctionComponent<OwnProps> = ({
  beregningsgrunnlag,
  aksjonspunkter,
  submitCallback,
  readOnly,
  readOnlySubmitButton,
  vilkar,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => {
  if (!beregningsgrunnlag) {
    return visningForManglendeBG();
  }
  const gjeldendeAksjonspunkter = getAksjonspunkterForBeregning(aksjonspunkter);
  const relevanteStatuser = getRelevanteStatuser(beregningsgrunnlag);
  const vilkaarBG = getBGVilkar(vilkar);
  const aksjonspunktGraderingPaaAndelUtenBG = getAksjonspunktForGraderingPaaAndelUtenBG(aksjonspunkter);
  return (
    <>
      <BeregningForm
        readOnly={readOnly}
        beregningsgrunnlag={beregningsgrunnlag}
        gjeldendeAksjonspunkter={gjeldendeAksjonspunkter}
        relevanteStatuser={relevanteStatuser}
        submitCallback={submitCallback}
        readOnlySubmitButton={readOnlySubmitButton}
        alleKodeverk={alleKodeverk}
        vilkaarBG={vilkaarBG}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />

      {aksjonspunktGraderingPaaAndelUtenBG
          && (
          <GraderingUtenBGReadOnly
            aksjonspunkt={aksjonspunktGraderingPaaAndelUtenBG}
          />
          )}
    </>
  );
};

export default BeregningFP;
