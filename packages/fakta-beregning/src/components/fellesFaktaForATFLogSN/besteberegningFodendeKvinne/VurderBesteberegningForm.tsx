import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';

import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { BeregningAvklaringsbehov, FaktaOmBeregning, VurderBesteberegning } from '@navikt/ft-types';

import { FaktaOmBeregningAksjonspunktValues, VurderBesteberegningValues } from '../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../typer/FieldValues';
import {
  BesteberegningFødendeKvinneAndelTransformedValues,
  FaktaBeregningTransformedValues,
} from '../../../typer/interface/BeregningFaktaAP';
import { FaktaBeregningAvklaringsbehovCode } from '../../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { LINK_TIL_BESTE_BEREGNING_REGNEARK } from '../eksterneLenker';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';

import styles from '../kunYtelse/kunYtelseBesteberegningPanel.module.css';

export const besteberegningField = 'vurderbesteberegningField';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG } = FaktaBeregningAvklaringsbehovCode;

type Props = {
  readOnly: boolean;
  erOverstyrt: boolean;
};

/**
 * VurderBesteberegningPanel
 *
 * Presentasjonskomponent. Behandling av aksjonspunktet for fastsetting av bg for kun ytelse
 *  med vurdering av besteberegning.
 */

export const VurderBesteberegningPanel = ({ readOnly, erOverstyrt }: Props) => {
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const intl = useIntl();
  const isReadOnly = readOnly || erOverstyrt;

  return (
    <HStack gap="2" wrap={false}>
      <RadioGroupPanel
        label={<FormattedMessage id="BeregningInfoPanel.VurderBestebergning.HarBesteberegning" />}
        name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`}
        isReadOnly={isReadOnly}
        validate={isReadOnly ? [] : [required]}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
        ]}
        parse={parseStringToBoolean}
      />
      <div>
        <a
          className={styles.navetLink}
          href={LINK_TIL_BESTE_BEREGNING_REGNEARK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet" />
        </a>
      </div>
    </HStack>
  );
};

VurderBesteberegningPanel.buildInitialValues = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  vurderBesteberegning: VurderBesteberegning | undefined,
  faktaOmBeregningTilfeller: string[],
  erOverstyrt: boolean,
): VurderBesteberegningValues => {
  if (
    !(
      faktaOmBeregningTilfeller.includes(FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING) ||
      faktaOmBeregningTilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)
    )
  ) {
    return {};
  }
  if (!vurderBesteberegning) {
    return {};
  }
  const erOverstyring =
    avklaringsbehov.find(ap => ap.definisjon === OVERSTYRING_AV_BEREGNINGSGRUNNLAG) !== undefined || erOverstyrt;
  if (erOverstyring) {
    return {
      [besteberegningField]: false,
    };
  }
  return {
    [besteberegningField]: vurderBesteberegning.skalHaBesteberegning,
  };
};

const krevVerdiEllerKastFeil = (verdi: string | undefined): string => {
  if (!verdi) {
    throw new Error('Påkrev verdi er undefined');
  }
  return verdi;
};

VurderBesteberegningPanel.transformValues = (
  values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning,
  inntektPrAndel: InntektTransformed[],
): FaktaBeregningTransformedValues => {
  if (!faktaOmBeregning || !faktaOmBeregning.vurderBesteberegning) {
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
        inntektskategori: krevVerdiEllerKastFeil(verdi.inntektskategori),
      },
    }));
  const nyDagpengeAndel = inntektPrAndel.find(a => a.nyAndel && a.aktivitetStatus === AktivitetStatus.DAGPENGER);
  return {
    besteberegningAndeler: {
      besteberegningAndelListe: transformedValues,
      nyDagpengeAndel: nyDagpengeAndel
        ? {
            fastsatteVerdier: {
              fastsattBeløp: nyDagpengeAndel.fastsattBelop,
              inntektskategori: krevVerdiEllerKastFeil(nyDagpengeAndel.inntektskategori),
            },
          }
        : undefined,
    },
  };
};

export const vurderBesteberegningTransform =
  (faktaOmBeregning: FaktaOmBeregning) =>
  (
    values: FaktaOmBeregningAksjonspunktValues,
    inntektPrAndel: InntektTransformed[],
  ): FaktaBeregningTransformedValues => {
    const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
    if (
      !(
        tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING) ||
        tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)
      )
    ) {
      return {};
    }
    const besteberegningValues = VurderBesteberegningPanel.transformValues(values, faktaOmBeregning, inntektPrAndel);
    const faktaOmBeregningTilfeller = [FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING];
    if (
      besteberegningValues.besteberegningAndeler?.besteberegningAndelListe &&
      besteberegningValues.besteberegningAndeler.besteberegningAndelListe.length > 0
    ) {
      faktaOmBeregningTilfeller.push(FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE);
    }
    return {
      faktaOmBeregningTilfeller,
      ...besteberegningValues,
    };
  };
