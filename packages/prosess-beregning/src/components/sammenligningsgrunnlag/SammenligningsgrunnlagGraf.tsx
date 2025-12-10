import { useIntl } from 'react-intl';

import dayjs from 'dayjs';
import norskFormat from 'dayjs/locale/nb';
import type { BarSeriesOption } from 'echarts';
import type { OptionDataValue } from 'echarts/types/src/util/types.js';

import { InntektAktivitetType } from '@navikt/ft-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, InntektsgrunnlagMåned } from '@navikt/ft-types';
import { capitalizeFirstLetter, formatCurrencyNoKr } from '@navikt/ft-utils';

import { getBarColors } from './grafFarger';
import { ReactECharts } from './ReactECharts';
import { type DataPunkt, transformerGrafData } from './sammenligningsgrunnlagUtils';

const getAkselVariable = (akselVariable: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(akselVariable);

const fontSize = getAkselVariable('--ax-font-size-medium');

interface Props {
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const SammenligningsgrunnlagGraf = ({
  sammenligningsgrunnlagFom,
  sammenligningsgrunnlagInntekter,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const intl = useIntl();

  if (!sammenligningsgrunnlagFom) {
    return null;
  }

  const { dataForFrilans, dataForYtelse, dataForArbeid } = transformerGrafData(
    sammenligningsgrunnlagInntekter,
    sammenligningsgrunnlagFom,
    arbeidsgiverOpplysningerPerId,
    intl,
  );

  return (
    <ReactECharts
      option={{
        textStyle: {
          fontFamily: getAkselVariable('--ax-font-family'),
          color: getAkselVariable('--ax-text-neutral'),
          fontSize,
        },
        legend: {
          data: [...Object.keys(dataForArbeid), ...Object.keys(dataForFrilans), ...Object.keys(dataForYtelse)],
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
            formatter: (value: any) => formatCurrencyNoKr(value) || '',
          },
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            fontSize,
            formatter: (value: any) => dayjs(value).format('MMM YY'),
          },
        },

        series: [
          ...Object.entries(dataForArbeid).map(createBar(InntektAktivitetType.ARBEID)),
          ...Object.entries(dataForFrilans).map(createBar(InntektAktivitetType.FRILANS)),
          ...Object.entries(dataForYtelse).map(createBar(InntektAktivitetType.YTELSE)),
        ],
        tooltip: {
          formatter: formatToolTip,
          axisPointer: {
            type: 'shadow',
          },
          textStyle: {
            fontFamily: getAkselVariable('--ax-font-family'),
            color: getAkselVariable('--ax-text-neutral'),
            fontSize,
          },
          backgroundColor: getAkselVariable('--ax-bg-raised'),
          borderColor: getAkselVariable('--ax-border-neutral-subtleA'),
          borderRadius: 12,
          padding: [16, 20],
          borderWidth: 1,
          shadowBlur: 6,
          shadowColor: '#00000026',
          shadowOffsetX: 0,
          shadowOffsetY: 4,
        },
      }}
      height={500}
    />
  );
};

const formatToolTip = (series: any) => {
  const castedSeries = Array.isArray(series) ? series : [series];
  const data = castedSeries[0].data as OptionDataValue[];
  const date = dayjs(data[1]);
  const formatertMndÅr = date.locale(norskFormat).format('MMMM YYYY');

  const seriesData = castedSeries
    .reduce<string[]>((acc, sData) => {
      const dataCasted = sData.data as OptionDataValue[];
      return acc.concat(
        `${(sData.marker || '') + (sData.seriesName || '')}: ${formatCurrencyNoKr(dataCasted[0] as string)}`,
      );
    }, [])
    .join('<br/>');
  return `<b>${capitalizeFirstLetter(formatertMndÅr)}</b><br/>${seriesData}`;
};

const createBar =
  (inntektAktivitetType: InntektAktivitetType) =>
  ([name, data]: [string, DataPunkt[]], index: number): BarSeriesOption => {
    const [color, borderColor] = getBarColors(inntektAktivitetType, index);
    return {
      name,
      data,
      color,
      itemStyle: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor,
      },
      stack: 'total',
      type: 'bar',
      label: {
        show: true,
        formatter: (params: any) => {
          if (params.value[0] > 5000) {
            return formatCurrencyNoKr(params.value[0]) || '';
          }
          return params.value[0] === 0 ? '' : '..';
        },
      },
    };
  };
