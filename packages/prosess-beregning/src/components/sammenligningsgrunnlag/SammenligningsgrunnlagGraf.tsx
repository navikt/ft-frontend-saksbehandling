import { FormattedMessage } from 'react-intl';

import type { BarSeriesOption } from 'echarts';

import { BeløpLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { getGrafFarger } from './grafFarger';
import { ReactECharts } from './ReactECharts';
import {
  type SammenligningsgrunnlagData,
  type TransformertSammenligningsgrunnlag,
} from './sammenligningsgrunnlagUtils';

const getAkselVariable = (akselVariable: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(akselVariable);

interface Props {
  transformertSammenligningsgrunnlag: TransformertSammenligningsgrunnlag;
}

export const SammenligningsgrunnlagGraf = ({
  transformertSammenligningsgrunnlag: { periodeData, alleInntektskilder, totalInntekt },
}: Props) => {
  const fontSize = getAkselVariable('--ax-font-size-small');
  const textStyle = {
    fontFamily: getAkselVariable('--ax-font-family'),
    color: getAkselVariable('--ax-text-neutral'),
    fontSize,
  };

  return (
    <>
      <ReactECharts
        option={{
          animation: false,
          textStyle,
          legend: {
            data: alleInntektskilder.map(inntektskilde => inntektskilde.label),
            top: 'top',
          },
          grid: {
            left: '0%',
            bottom: '0%',
            right: '0%',
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
          series: alleInntektskilder.map(createBar),
          tooltip: {
            trigger: 'axis',
            textStyle,
            borderColor: getAkselVariable('--ax-border-neutral-subtleA'),
            borderRadius: 12,
            padding: [16, 20],
            borderWidth: 1,
          },
        }}
      />
      <LabeledValue
        horizontal
        size="small"
        label={<FormattedMessage id="Sammenligningsgrunnlag.TotalSammenligningsgrunnlag" />}
        value={<BeløpLabel beløp={totalInntekt} kr />}
      />
    </>
  );
};

const createBar = (
  { label, datapunkter, inntektAktivitetType }: SammenligningsgrunnlagData,
  index: number,
): BarSeriesOption => {
  const [color, borderColor] = getGrafFarger(inntektAktivitetType, index);
  return {
    name: label,
    data: datapunkter,
    color,
    itemStyle: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor,
    },
    stack: 'total',
    type: 'bar',
    emphasis: {
      focus: 'series',
    },
    tooltip: {
      valueFormatter: value => {
        const castedVerdi = value as number;
        return formatCurrencyNoKr(castedVerdi) || '';
      },
    },
    label: {
      show: true,
      formatter: params => {
        const value = params.value as number;
        if (value > 3000) {
          return formatCurrencyNoKr(value) || '';
        }
        return '';
      },
    },
  };
};
