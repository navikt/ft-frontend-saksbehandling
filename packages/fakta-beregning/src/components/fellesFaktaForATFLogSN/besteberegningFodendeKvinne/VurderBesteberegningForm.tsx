import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, Link, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import type { BeregningAvklaringsbehov, FaktaOmBeregning, VurderBesteberegning } from '@navikt/ft-types';
import { notEmpty } from '@navikt/ft-utils';

import { FaktaOmBeregningTilfelle } from '../../../kodeverk/faktaOmBeregningTilfelle';
import type {
  FaktaOmBeregningAksjonspunktValues,
  VurderBesteberegningValues,
} from '../../../typer/FaktaBeregningTypes';
import type { InntektTransformed } from '../../../typer/FieldValues';
import type {
  BesteberegningFødendeKvinneAndelTransformedValues,
  FaktaBeregningTransformedValues,
} from '../../../typer/interface/BeregningFaktaAP';
import { FaktaBeregningAvklaringsbehovCode } from '../../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import type { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { LINK_TIL_BESTE_BEREGNING_REGNEARK } from '../eksterneLenker';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';

export const besteberegningField = 'vurderbesteberegningField';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG } = FaktaBeregningAvklaringsbehovCode;

interface Props {
  readOnly: boolean;
  erOverstyrt: boolean;
}

/**
 * VurderBesteberegningPanel
 *
 * Presentasjonskomponent. Behandling av aksjonspunktet for fastsetting av bg for kun ytelse
 *  med vurdering av besteberegning.
 */

export const VurderBesteberegningForm = ({ readOnly, erOverstyrt }: Props) => {
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const { control } = useFormContext<VurderFaktaBeregningFormValues>();
  const isReadOnly = readOnly || erOverstyrt;

  return (
    <RhfRadioGroup
      name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`}
      control={control}
      legend={
        <VStack gap="space-8" justify="space-between">
          <Label size="small">
            <FormattedMessage id="BeregningInfoPanel.VurderBestebergning.HarBesteberegning" />
          </Label>
          <BodyShort>
            <Link href={LINK_TIL_BESTE_BEREGNING_REGNEARK} target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet" />
            </Link>
          </BodyShort>
        </VStack>
      }
      readOnly={isReadOnly}
      validate={isReadOnly ? [] : [required]}
    >
      <Radio value={true} size="small">
        <FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />
      </Radio>
      <Radio value={false} size="small">
        <FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />
      </Radio>
    </RhfRadioGroup>
  );
};

VurderBesteberegningForm.buildInitialValues = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  vurderBesteberegning: VurderBesteberegning | undefined,
  faktaOmBeregningTilfeller: string[],
  erOverstyrt: boolean,
): VurderBesteberegningValues => {
  if (
    !(
      faktaOmBeregningTilfeller.includes(FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING) ||
      faktaOmBeregningTilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE)
    )
  ) {
    return {};
  }
  if (!vurderBesteberegning) {
    return {};
  }
  const erOverstyring = avklaringsbehov.some(ap => ap.definisjon === OVERSTYRING_AV_BEREGNINGSGRUNNLAG) || erOverstyrt;
  if (erOverstyring) {
    return {
      [besteberegningField]: false,
    };
  }
  return {
    [besteberegningField]: vurderBesteberegning.skalHaBesteberegning,
  };
};

VurderBesteberegningForm.transformValues = (
  values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning,
  inntektPrAndel: InntektTransformed[],
): FaktaBeregningTransformedValues => {
  if (!faktaOmBeregning?.vurderBesteberegning) {
    return {};
  }
  const skalHaBesteberegning = values[besteberegningField];
  if (!skalHaBesteberegning || !inntektPrAndel) {
    return {
      besteberegningAndeler: {
        besteberegningAndelListe: [],
      },
    };
  }
  const transformedValues: BesteberegningFødendeKvinneAndelTransformedValues[] = inntektPrAndel
    .filter(({ nyAndel }) => nyAndel !== true)
    .map(verdi => ({
      andelsnr: verdi.andelsnr,
      nyAndel: !!verdi.nyAndel,
      lagtTilAvSaksbehandler: !!verdi.lagtTilAvSaksbehandler,
      fastsatteVerdier: {
        fastsattBeløp: verdi.fastsattBelop,
        inntektskategori: notEmpty(verdi.inntektskategori),
      },
    }));
  const nyDagpengeAndel = inntektPrAndel.find(a => a.nyAndel && a.aktivitetStatus === 'DP');
  return {
    besteberegningAndeler: {
      besteberegningAndelListe: transformedValues,
      nyDagpengeAndel: nyDagpengeAndel
        ? {
            fastsatteVerdier: {
              fastsattBeløp: nyDagpengeAndel.fastsattBelop,
              inntektskategori: notEmpty(nyDagpengeAndel.inntektskategori),
            },
          }
        : undefined,
    },
  };
};
