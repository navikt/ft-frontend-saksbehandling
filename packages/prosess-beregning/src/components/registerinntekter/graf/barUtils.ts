import type { BarSeriesOption } from 'echarts';

import { formatCurrencyNoKr } from '@navikt/ft-utils';

import type { RegisterinntekterPerKilde } from '../registerinntekterUtils';
import { getGrafFarger } from './grafFarger';

export const createBar =
  (vis_8_28: boolean, labelPrefix: string) =>
  (
    { label, inntektAktivitetType, typeGrunnlag, datapunkter }: RegisterinntekterPerKilde,
    index: number,
  ): BarSeriesOption => {
    const [color, borderColor] = getGrafFarger(inntektAktivitetType, index);
    return {
      id: vis_8_28 ? labelPrefix + label : label,
      name: label,
      color,
      itemStyle: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor,
        decal:
          typeGrunnlag === '8-28'
            ? {
                color: borderColor,
                dashArrayX: [1, 0],
                dashArrayY: [2, 10],
                symbolSize: 1,
                rotation: Math.PI / 5,
              }
            : { symbol: 'none' },
      },
      data: datapunkter,
      stack: typeGrunnlag,
      type: 'bar',
      emphasis: {
        focus: 'series',
      },
      label: {
        show: true,
        backgroundColor: color,
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
