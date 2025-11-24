import { FormattedMessage } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Detail, Heading, Hide, HStack, VStack } from '@navikt/ds-react';

import type { BeregningAvklaringsbehov, Beregningsgrunnlag } from '@navikt/ft-types';

import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import { isStatusArbeidstakerOrKombinasjon, isStatusFrilanserOrKombinasjon } from '../../util/aktivitetStatusUtils';

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
  const snAndel = alleAndelerIForstePeriode.find(andel => andel.aktivitetStatus && andel.aktivitetStatus === 'SN');
  const erNyoppstartet = !!snAndel?.næringer?.some(naring => naring.erNyoppstartet === true);
  if (erNyoppstartet) {
    return 'AksjonspunktBehandlerHeader.Detaljer.Nyoppstartet';
  }
  return 'AksjonspunktBehandlerHeader.Detaljer.VarigEndring';
};

const finnDetaljer = (avklaringsbehov: BeregningAvklaringsbehov, bg: Beregningsgrunnlag): string => {
  switch (avklaringsbehov.definisjon) {
    case VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:
      return finnDetaljerSN(bg);
    case FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:
      return 'AksjonspunktBehandlerHeader.Detaljer.SNNyIArb';
    case VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:
      return 'AksjonspunktBehandlerHeader.Detaljer.VarigEndringArbeid';
    case FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:
      return 'AksjonspunktBehandlerHeader.Detaljer.ATFL';
    case FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:
      return 'AksjonspunktBehandlerHeader.Detaljer.ATFLTidsbegrenset';
    default:
      return 'Ukjent aksjonspunkt';
  }
};

const finnTittelATFL = (bg: Beregningsgrunnlag): string => {
  const statuser = bg.aktivitetStatus || [];
  const erAT = statuser.some(st => isStatusArbeidstakerOrKombinasjon(st));
  const erFL = statuser.some(st => isStatusFrilanserOrKombinasjon(st));
  if (erAT && erFL) {
    return 'AksjonspunktBehandlerHeader.Tittel.ATFLAvvik';
  }
  if (erFL) {
    return 'AksjonspunktBehandlerHeader.Tittel.FLAvvik';
  }
  return 'AksjonspunktBehandlerHeader.Tittel.ATAvvik';
};

const finnTittel = (avklaringsbehov: BeregningAvklaringsbehov, bg: Beregningsgrunnlag): string => {
  switch (avklaringsbehov.definisjon) {
    case VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:
      return 'AksjonspunktBehandlerHeader.Tittel.VarigEndringNyoppstartet';
    case FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:
      return 'AksjonspunktBehandlerHeader.Tittel.SNNyIArb';
    case VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:
      return 'AksjonspunktBehandlerHeader.Tittel.VarigEndringArbeid';
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
    <HStack
      gap="space-24"
      align="center"
      wrap={false}
      className={readOnly ? styles.aksjonspunktBehandlerNoBorder : styles.aksjonspunktBehandlerHeader}
    >
      {!readOnly && (
        <Hide below="md">
          <ExclamationmarkTriangleFillIcon className={styles.warningIcon} />
        </Hide>
      )}
      <VStack gap="space-8">
        <Heading size="xsmall" level="4">
          <FormattedMessage id={finnTittel(avklaringsbehov, beregningsgrunnlag)} />
        </Heading>
        <Detail>
          <FormattedMessage id={finnDetaljer(avklaringsbehov, beregningsgrunnlag)} />
        </Detail>
      </VStack>
    </HStack>
  );
};
