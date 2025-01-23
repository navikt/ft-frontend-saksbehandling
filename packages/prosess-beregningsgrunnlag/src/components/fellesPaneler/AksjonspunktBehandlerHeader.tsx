import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Label } from '@navikt/ds-react';
import {
  AktivitetStatus,
  isStatusArbeidstakerOrKombinasjon,
  isStatusFrilanserOrKombinasjon,
} from '@navikt/ft-kodeverk';
import { BeregningAvklaringsbehov, Beregningsgrunnlag } from '@navikt/ft-types';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import styles from './aksjonspunktBehandler.module.css';

const {
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
} = ProsessBeregningsgrunnlagAvklaringsbehovCode;

const finnDetaljerSN = (bg: Beregningsgrunnlag): string => {
  const alleAndelerIForstePeriode =
    bg.beregningsgrunnlagPeriode && bg.beregningsgrunnlagPeriode.length > 0
      ? bg.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel || []
      : [];
  const snAndel = alleAndelerIForstePeriode.find(
    andel => andel.aktivitetStatus && andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  const erNyoppstartet = !!snAndel?.næringer?.some(naring => naring.erNyoppstartet === true);
  if (erNyoppstartet) {
    return 'Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet';
  }
  return 'Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring';
};

const finnDetaljer = (avklaringsbehov: BeregningAvklaringsbehov, bg: Beregningsgrunnlag): string => {
  switch (avklaringsbehov.definisjon) {
    case VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:
      return finnDetaljerSN(bg);
    case FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:
      return 'Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb';
    case VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:
      return 'Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid';
    case FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:
      return 'Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL';
    case FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:
      return 'Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset';
    default:
      return 'Ukjent aksjonspunkt';
  }
};

const finnTittelATFL = (bg: Beregningsgrunnlag): string => {
  const statuser = bg.aktivitetStatus || [];
  const erAT = statuser.some(st => isStatusArbeidstakerOrKombinasjon(st));
  const erFL = statuser.some(st => isStatusFrilanserOrKombinasjon(st));
  if (erAT && erFL) {
    return 'Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik';
  }
  if (erFL) {
    return 'Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik';
  }
  return 'Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik';
};

const finnTittel = (avklaringsbehov: BeregningAvklaringsbehov, bg: Beregningsgrunnlag): string => {
  switch (avklaringsbehov.definisjon) {
    case VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:
      return 'Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet';
    case FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:
      return 'Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb';
    case VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:
      return 'Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid';
    case FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:
    case FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:
      return finnTittelATFL(bg);
    default:
      return 'Ukjent aksjonspunkt';
  }
};

type Props = {
  avklaringsbehov?: BeregningAvklaringsbehov;
  beregningsgrunnlag: Beregningsgrunnlag;
  readOnly: boolean;
};

export const AksjonspunktBehandlerHeader = ({ avklaringsbehov, beregningsgrunnlag, readOnly }: Props) => {
  if (!avklaringsbehov) {
    return null;
  }
  return (
    <div className={readOnly ? styles.aksjonspunktBehandlerNoBorder : styles.aksjonspunktBehandlerHeader}>
      <FlexRow>
        {!readOnly && (
          <FlexColumn className={styles.aksjonspunktBehandlerImageCol}>
            <ExclamationmarkTriangleFillIcon className={styles.warningIcon} />
          </FlexColumn>
        )}
        <FlexColumn className={styles.aksjonspunktBehandlerTextCol}>
          <Label>
            <FormattedMessage id={finnTittel(avklaringsbehov, beregningsgrunnlag)} />
          </Label>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <FlexRow>
        {!readOnly && <FlexColumn className={styles.aksjonspunktBehandlerImageCol} />}
        <FlexColumn className={styles.aksjonspunktBehandlerTextCol}>
          <BodyShort>
            <FormattedMessage id={finnDetaljer(avklaringsbehov, beregningsgrunnlag)} />
          </BodyShort>
        </FlexColumn>
      </FlexRow>
    </div>
  );
};
