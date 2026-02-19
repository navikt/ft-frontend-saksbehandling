import type { BarSeriesOption } from 'echarts';

import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { formaterParagraf, type RegisterinntekterPerKilde } from '../registerinntekterUtils';
import { getGrafFarger } from './grafFarger';

export const createBar =
  (skalVises: boolean = true) =>
  (
    { label, inntektAktivitetType, typeGrunnlag, datapunkter }: RegisterinntekterPerKilde,
    index: number,
  ): BarSeriesOption[] => {
    if (!skalVises) {
      return [];
    }
    const [color, borderColor] = getGrafFarger(inntektAktivitetType, index);
    return [
      {
        id: typeGrunnlag + ':' + label,
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
                  dashArrayY: [1, 10],
                  symbolSize: 2,
                  rotation: Math.PI / 5,
                }
              : { symbol: 'none' },
        },
        data: datapunkter,
        stack: typeGrunnlag,
        type: 'bar',
        emphasis: {
          itemStyle: {
            color,
            borderColor,
          },
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
      },
    ];
  };

/**
 * Denne oppretter en usynlig stolpe som viser navnet på stacken i en label.
 * Det gjøres ved å lage en bar med datapunkter som er enten 0 eller undefined avhengig av om det finnes minst en
 * inntekt i den perioden. Siden datapunktene er 0 eller undefined vil det ikke vises noen bar, men ved 0 vises label,
 * og ved undefined skjules labelen (echarts-logikk).
 */
export const createStackLabel = (
  inntektskilder: RegisterinntekterPerKilde[],
  skalViseLabel: boolean = true,
): BarSeriesOption[] => {
  const førsteElement = inntektskilder.at(0);
  if (!førsteElement || !skalViseLabel) {
    return [];
  }
  return [
    {
      type: 'bar',
      stack: førsteElement.typeGrunnlag,
      data: førsteElement.datapunkter.map((_value, index) =>
        inntektskilder.some(ik => ik.datapunkter[index] !== undefined) ? 0 : undefined,
      ),
      label: {
        show: true,
        position: 'right',
        formatter: formaterParagraf(førsteElement.typeGrunnlag),
      },
      tooltip: {
        show: false,
      },
    },
  ];
};
