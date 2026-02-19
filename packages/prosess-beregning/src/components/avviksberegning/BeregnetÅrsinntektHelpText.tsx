import { FormattedMessage, useIntl } from 'react-intl';

import { HelpText, List, VStack } from '@navikt/ds-react';

import type { Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { BeløpLabel, LabeledValue, NoWrap } from '@navikt/ft-ui-komponenter';

import { finnKilderForAndeler } from '../../utils/beregnetPrÅrKildeUtils';
import {
  finnAlleAndelerIFørstePeriode,
  finnAndelerSomSkalVises,
  grupperSummerteInntekterPerArbeidsgiver,
} from '../../utils/beregningsgrunnlagUtils';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  formaterVisningsnavnForAndel: (andel: BeregningsgrunnlagAndel) => string;
}

export const BeregnetÅrsinntektHelpText = ({ beregningsgrunnlag, formaterVisningsnavnForAndel }: Props) => {
  const intl = useIntl();

  const kilderForAndeler = finnKilderForAndeler(
    finnAndelerSomSkalVises(finnAlleAndelerIFørstePeriode(beregningsgrunnlag.beregningsgrunnlagPeriode)),
    grupperSummerteInntekterPerArbeidsgiver(beregningsgrunnlag.inntektsgrunnlag?.beregningsgrunnlagInntekter),
    formaterVisningsnavnForAndel,
  );
  return (
    <HelpText title={intl.formatMessage({ id: 'Avviksberegning.BeregnetÅrsinntekt.HelpText' })}>
      <VStack gap="space-8">
        <LabeledValue
          size="small"
          label={<FormattedMessage id="Avviksberegning.BeregnetÅrsinntekt.HelpText.Tittel" />}
          value={
            <FormattedMessage
              id="Avviksberegning.BeregnetÅrsinntekt.HelpText.Beskrivelse"
              values={{ nowrap: NoWrap }}
            />
          }
        />
        <List size="small">
          {kilderForAndeler.map(andel => (
            <List.Item key={andel.andelsnr}>
              <FormattedMessage
                id="Avviksberegning.BeregnetÅrsinntekt.HelpText.Andel"
                values={{ arbeidsgiver: andel.arbeidsgiver }}
              />
              <br />
              <FormattedMessage
                id="Avviksberegning.BeregnetÅrsinntekt.HelpText.Beløp"
                values={{ beløp: <BeløpLabel beløp={andel.beregnetPrAar} kr /> }}
              />
              <br />
              <FormattedMessage
                id="Avviksberegning.BeregnetÅrsinntekt.HelpText.Kilde"
                values={{ kilde: andel.beregnetPrÅrKilde }}
              />
            </List.Item>
          ))}
        </List>
      </VStack>
    </HelpText>
  );
};
