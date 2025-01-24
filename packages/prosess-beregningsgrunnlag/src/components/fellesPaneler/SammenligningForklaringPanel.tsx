import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';

import { SammenligningType } from '@navikt/ft-kodeverk';
import { SammenligningsgrunlagProp } from '@navikt/ft-types';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { RelevanteStatuserProp } from '../../types/RelevanteStatuser';

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
        <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet" />
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
        <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.Besteberegning" />
      </BodyShort>
    );
  }
  return (
    <>
      {relevanteStatuser.isMilitaer && (
        <BodyShort size="small">
          <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.Miletar" />
        </BodyShort>
      )}
      {relevanteStatuser.isAAP && (
        <FlexRow>
          <FlexColumn>
            <BodyShort size="small">
              <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.AAP" />
            </BodyShort>
          </FlexColumn>
          <VerticalSpacer eightPx />
        </FlexRow>
      )}
      {relevanteStatuser.isDagpenger && (
        <>
          <FlexRow>
            <FlexColumn>
              <BodyShort size="small">
                <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.Dagpenger" />
              </BodyShort>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </>
      )}
      {erATFLSNUtenSammenligningsgrunnlagATFL && (
        <FlexRow>
          <FlexColumn>
            <BodyShort size="small">
              <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN" />
            </BodyShort>
          </FlexColumn>
          <VerticalSpacer eightPx />
        </FlexRow>
      )}
    </>
  );
};
