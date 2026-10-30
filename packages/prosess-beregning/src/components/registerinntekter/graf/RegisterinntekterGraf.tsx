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
  const textStyle = {
    fontFamily: getAkselVariable('--ax-font-family'),
    color: getAkselVariable('--ax-text-neutral'),
    fontSize,
  };

  return (
    <>
      <ReactECharts
        option={{
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
            axisLabel: {
              rotate: 45,
              fontSize,
            },
            data: periodeData,
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              fontSize,
              formatter: value => formatCurrencyNoKr(value) || '',
            },
          },
          tooltip: {
            axisPointer: { type: 'shadow' },
            trigger: 'axis',
            appendTo: erUtvidet ? undefined : 'body',
            confine: erUtvidet,
            textStyle: { ...textStyle, fontSize: erUtvidet ? 20 : 18 },
            backgroundColor: getAkselVariable('--ax-bg-raised'),
            borderColor: getAkselVariable('--ax-border-neutral-subtleA'),
            borderRadius: 12,
            borderWidth: 1,
            formatter: formatTooltip(vis_8_28),
          },
          series: [
            grunnlag_8_30.inntektskilder.flatMap(createBar(true, erUtvidet)),
            grunnlag_8_28.inntektskilder.flatMap(createBar(vis_8_28, erUtvidet)),
            createStackLabel(grunnlag_8_30.inntektskilder, vis_8_28, erUtvidet),
            createStackLabel(grunnlag_8_28.inntektskilder, vis_8_28, erUtvidet),
          ].flat(),
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

const getAkselVariable = (akselVariable: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(akselVariable);
