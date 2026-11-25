import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';

import { BeløpLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { type TransformertRegisterinntekter } from '../registerinntekterUtils';
import { createBar, createStackLabel } from './barUtils';
import { ReactECharts } from './ReactECharts';
import { formatTooltip } from './tooltipUtils';

interface Props {
  transformerteRegisterinntekter: TransformertRegisterinntekter;
  valgteInntektskilder: Record<string, boolean>;
  onLegendefiltreringEndret: (selected: Record<string, boolean>) => void;
  erUtvidet?: boolean;
}

export const RegisterinntekterGraf = ({
  transformerteRegisterinntekter: { grunnlag_8_30, grunnlag_8_28, periodeData, vis_8_28 },
  valgteInntektskilder,
  onLegendefiltreringEndret,
  erUtvidet = false,
}: Props) => {
  const fontSize = erUtvidet ? 16 : 12;
  return (
    <>
      <ReactECharts
        option={styles => {
          const textStyle = {
            fontFamily: styles.getPropertyValue('--ax-font-family').trim(),
            color: styles.getPropertyValue('--ax-text-neutral').trim(),
            fontSize,
          };
          const axisLabelStyle = { ...textStyle, textBorderWidth: 0 };
          return {
            textStyle,
            animation: false,
            labelLayout: {
              hideOverlap: true,
            },
            legend: {
              type: 'scroll',
              top: 'top',
              selected: valgteInntektskilder,
              textStyle,
            },
            aria: {
              enabled: true,
              decal: { show: true },
            },
            grid: {
              top: '10%',
              left: '0%',
              bottom: '0%',
              right: '0%',
              containLabel: true,
            },
            xAxis: {
              type: 'category',
              axisLine: {
                lineStyle: {
                  color: styles.getPropertyValue('--ax-border-neutral-strong').trim(),
                },
              },
              axisLabel: {
                ...axisLabelStyle,
                rotate: 45,
              },
              data: periodeData,
            },
            yAxis: {
              type: 'value',
              splitLine: {
                lineStyle: {
                  color: styles.getPropertyValue('--ax-border-neutral-subtleA').trim(),
                },
              },
              axisLabel: {
                ...axisLabelStyle,
                formatter: value => formatCurrencyNoKr(value) || '',
              },
            },
            tooltip: {
              axisPointer: { type: 'shadow' },
              trigger: 'axis',
              appendTo: erUtvidet ? undefined : 'body',
              confine: erUtvidet,
              textStyle: { ...textStyle, fontSize: erUtvidet ? 20 : 18 },
              backgroundColor: styles.getPropertyValue('--ax-bg-raised').trim(),
              borderColor: styles.getPropertyValue('--ax-border-neutral-subtleA').trim(),
              borderRadius: 12,
              borderWidth: 1,
              formatter: formatTooltip(vis_8_28),
            },
            series: [
              grunnlag_8_30.inntektskilder.flatMap(createBar(styles, true, erUtvidet)),
              grunnlag_8_28.inntektskilder.flatMap(createBar(styles, vis_8_28, erUtvidet)),
              createStackLabel(grunnlag_8_30.inntektskilder, textStyle.color, vis_8_28, erUtvidet),
              createStackLabel(grunnlag_8_28.inntektskilder, textStyle.color, vis_8_28, erUtvidet),
            ].flat(),
          };
        }}
        onLegendSelectChanged={onLegendefiltreringEndret}
        style={{ width: '100%', height: erUtvidet ? 'min(65vh, 700px)' : '300px' }}
      />

      <VStack gap="space-4">
        <LabeledValue
          horizontal
          size={erUtvidet ? 'medium' : 'small'}
          label={
            <>
              <FormattedMessage id="Registerinntekt.8-30" />:
            </>
          }
          value={<BeløpLabel beløp={grunnlag_8_30.total} kr />}
        />
        {vis_8_28 && (
          <LabeledValue
            horizontal
            size={erUtvidet ? 'medium' : 'small'}
            label={
              <>
                <FormattedMessage id="Registerinntekt.8-28" />:
              </>
            }
            value={<BeløpLabel beløp={grunnlag_8_28.total} kr />}
          />
        )}
      </VStack>
    </>
  );
};
