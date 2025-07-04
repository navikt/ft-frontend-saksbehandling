import { FormattedMessage } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';

import { SammenligningType } from '@navikt/ft-kodeverk';
import type { SammenligningsgrunlagProp } from '@navikt/ft-types';

import type { RelevanteStatuserProp } from '../../types/RelevanteStatuser';

type Props = {
  sammenligningsgrunnlag: SammenligningsgrunlagProp[];
  relevanteStatuser: RelevanteStatuserProp;
  erManueltBesteberegnet: boolean;
  erNyIArbeidslivet: boolean;
};

/**
 * SammenligningForklaringPanel
 *
 * Panel som vises uavhengig av sammenligningsgrunnlag for å forklare hvorfor ulike statuser ikke er avviksvurdert
 */
export const SammenligningForklaringPanel = ({
  relevanteStatuser,
  erManueltBesteberegnet,
  erNyIArbeidslivet,
  sammenligningsgrunnlag,
}: Props) => {
  if (erNyIArbeidslivet) {
    return (
      <BodyShort size="small">
        <FormattedMessage id="SammenligningForklaringPanel.SN.NyIArbeidslivet" />
      </BodyShort>
    );
  }

  if (!sammenligningsgrunnlag || sammenligningsgrunnlag.length < 1) {
    return null;
  }

  const erATFLSN =
    (relevanteStatuser.isArbeidstaker || relevanteStatuser.isFrilanser) &&
    relevanteStatuser.isSelvstendigNaeringsdrivende;
  const sammenligningsgrunnlagForATFL = sammenligningsgrunnlag.filter(
    sg =>
      sg.sammenligningsgrunnlagType === SammenligningType.AT_FL ||
      sg.sammenligningsgrunnlagType === SammenligningType.AT ||
      sg.sammenligningsgrunnlagType === SammenligningType.FL,
  );
  const erATFLSNUtenSammenligningsgrunnlagATFL = erATFLSN && sammenligningsgrunnlagForATFL.length === 0;
  if (erManueltBesteberegnet) {
    return (
      <BodyShort size="small">
        <FormattedMessage id="SammenligningForklaringPanel.Besteberegning" />
      </BodyShort>
    );
  }

  return (
    <VStack gap="2">
      {relevanteStatuser.isMilitaer && (
        <BodyShort size="small">
          <FormattedMessage id="SammenligningForklaringPanel.Miletar" />
        </BodyShort>
      )}
      {relevanteStatuser.isAAP && (
        <BodyShort size="small">
          <FormattedMessage id="SammenligningForklaringPanel.AAP" />
        </BodyShort>
      )}
      {relevanteStatuser.isDagpenger && (
        <BodyShort size="small">
          <FormattedMessage id="SammenligningForklaringPanel.Dagpenger" />
        </BodyShort>
      )}
      {erATFLSNUtenSammenligningsgrunnlagATFL && (
        <BodyShort size="small">
          <FormattedMessage id="SammenligningForklaringPanel.AT.KobinasjonsStatusATFLSN" />
        </BodyShort>
      )}
    </VStack>
  );
};
