import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, HGrid, Hide, HStack, Show, VStack } from '@navikt/ds-react';

import { BeløpLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { type RegisterinntekterPerKilde, type TransformertRegisterinntekter } from '../registerinntekterUtils';
import { createBar, createStackLabel } from './barUtils';
import { getGrafFarger } from './grafFarger';
import { ReactECharts } from './ReactECharts';
import { formatTooltip } from './tooltipUtils';

import styles from './registerinntekterGraf.module.css';

const getAkselVariable = (akselVariable: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(akselVariable);

interface Props {
  transformerteRegisterinntekter: TransformertRegisterinntekter;
}

export const RegisterinntekterGraf = ({
  transformerteRegisterinntekter: { grunnlag_8_30, grunnlag_8_28, periodeData, vis_8_28 },
}: Props) => {
  const intl = useIntl();
  const fontSize = 14;
  const textStyle = {
    fontFamily: getAkselVariable('--ax-font-family'),
    color: getAkselVariable('--ax-text-neutral'),
    fontSize,
  };
  const legend = byggLegend(grunnlag_8_30.inntektskilder, grunnlag_8_28.inntektskilder, vis_8_28);
  const grafHøyde = periodeData.length * (vis_8_28 ? 40 : 24) + 64;

  return (
    <HGrid padding="space-8" gap="space-16" columns={{ xs: 1, lg: 'fit-content(25%) 1fr' }}>
      <VStack gap="space-16" justify="space-between">
        <HGrid
          as="ul"
          gap="space-4 space-16"
          columns={{ xs: `repeat(${legend.length}, auto)`, lg: 1 }}
          className={styles.legend}
          aria-label={intl.formatMessage({ id: 'Registerinntekt.Tegnforklaring' })}
        >
          {legend.map(kilde => (
            <HStack as="li" key={kilde.label} gap="space-4" align="baseline" wrap={false}>
              <span
                style={{
                  width: 24,
                  height: 15,
                  borderRadius: 4,
                  border: `2px solid ${kilde.borderColor}`,
                  backgroundColor: kilde.color,
                  flexShrink: 0,
                }}
                aria-hidden
              />
              <BodyShort size="small">{kilde.label}</BodyShort>
            </HStack>
          ))}
        </HGrid>

        <Hide below="lg">
          <Total vis_8_28={vis_8_28} total_8_28={grunnlag_8_28.total} total_8_30={grunnlag_8_30.total} />
        </Hide>
      </VStack>

      <div
        className={styles.graf}
        role="figure"
        aria-label={intl.formatMessage({ id: 'Registerinntekt.GrafBeskrivelse' })}
      >
        <ReactECharts
          option={{
            textStyle,
            animation: false,
            labelLayout: {
              hideOverlap: true,
            },
            legend: {
              show: false,
            },
            aria: {
              enabled: true,
              decal: { show: true },
            },
            grid: {
              top: 0,
              left: 0,
              bottom: 0,
              right: '2%',
            },
            xAxis: {
              type: 'value',
              axisLabel: {
                fontSize,
                formatter: value => formatCurrencyNoKr(value) || '',
              },
            },
            yAxis: {
              type: 'category',
              axisLabel: {
                fontSize,
              },
              data: periodeData,
            },
            tooltip: {
              axisPointer: { type: 'shadow' },
              trigger: 'axis',
              appendToBody: true,
              textStyle,
              borderColor: getAkselVariable('--ax-border-neutral-subtleA'),
              borderRadius: 12,
              padding: [8, 12],
              borderWidth: 1,
              formatter: formatTooltip(intl),
            },
            series: [
              grunnlag_8_30.inntektskilder.flatMap(createBar()),
              grunnlag_8_28.inntektskilder.flatMap(createBar(vis_8_28)),
              createStackLabel(grunnlag_8_30.inntektskilder, vis_8_28),
              createStackLabel(grunnlag_8_28.inntektskilder, vis_8_28),
            ].flat(),
          }}
          style={{ height: `${grafHøyde}px` }}
        />
      </div>

      <Show below="lg">
        <Total
          horizontal={true}
          vis_8_28={vis_8_28}
          total_8_28={grunnlag_8_28.total}
          total_8_30={grunnlag_8_30.total}
        />
      </Show>
    </HGrid>
  );
};

const Total = ({
  horizontal = false,
  vis_8_28,
  total_8_28,
  total_8_30,
}: {
  horizontal?: boolean;
  vis_8_28: boolean;
  total_8_28: number;
  total_8_30: number;
}) => (
  <>
    <LabeledValue
      horizontal={horizontal}
      size="small"
      label={
        <>
          <FormattedMessage id="Registerinntekt.8-30" />
          <Show below="lg" as="span">
            :
          </Show>
        </>
      }
      value={<BeløpLabel beløp={total_8_30} kr />}
    />
    {vis_8_28 && (
      <LabeledValue
        horizontal={horizontal}
        size="small"
        label={
          <>
            <FormattedMessage id="Registerinntekt.8-28" />
            <Show below="lg" as="span">
              :
            </Show>
          </>
        }
        value={<BeløpLabel beløp={total_8_28} kr />}
      />
    )}
  </>
);

type LegendKilde = {
  label: string;
  color: string;
  borderColor: string;
};

const byggLegend = (
  inntektskilder_8_30: RegisterinntekterPerKilde[],
  inntektskilder_8_28: RegisterinntekterPerKilde[],
  vis_8_28: boolean,
): LegendKilde[] => {
  const kilder: LegendKilde[] = [];
  const sett = new Set<string>();
  const leggTil = (inntektskilder: RegisterinntekterPerKilde[]) => {
    inntektskilder.forEach((kilde, index) => {
      if (sett.has(kilde.label)) {
        return;
      }
      sett.add(kilde.label);
      const [color, borderColor] = getGrafFarger(kilde.inntektAktivitetType, index);
      kilder.push({ label: kilde.label, color, borderColor });
    });
  };
  leggTil(inntektskilder_8_30);
  if (vis_8_28) {
    leggTil(inntektskilder_8_28);
  }
  return kilder;
};
