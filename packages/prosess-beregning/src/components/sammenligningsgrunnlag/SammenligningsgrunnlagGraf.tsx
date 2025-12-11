import { useIntl } from 'react-intl';

import dayjs from 'dayjs';
import type { BarSeriesOption } from 'echarts';

import { InntektAktivitetType } from '@navikt/ft-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, InntektsgrunnlagMåned } from '@navikt/ft-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { getBarColors } from './grafFarger';
import { ReactECharts } from './ReactECharts';
import { transformerGrafData } from './sammenligningsgrunnlagUtils';

const getAkselVariable = (akselVariable: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(akselVariable);

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

  const { periodeData, dataForFrilans, dataForYtelse, dataForArbeid } = transformerGrafData(
    sammenligningsgrunnlagInntekter,
    sammenligningsgrunnlagFom,
    arbeidsgiverOpplysningerPerId,
    intl,
  );

  const fontSize = getAkselVariable('--ax-font-size-medium');
  const textStyle = {
    fontFamily: getAkselVariable('--ax-font-family'),
    color: getAkselVariable('--ax-text-neutral'),
    fontSize,
  };

  return (
    <ReactECharts
      option={{
        textStyle,
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
            formatter: value => formatCurrencyNoKr(value) || '',
          },
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            fontSize,
          },
          data: periodeData.map(value => dayjs(value).format('MMM YY')),
        },
        series: [
          ...Object.entries(dataForArbeid).map(createBar(InntektAktivitetType.ARBEID)),
          ...Object.entries(dataForFrilans).map(createBar(InntektAktivitetType.FRILANS)),
          ...Object.entries(dataForYtelse).map(createBar(InntektAktivitetType.YTELSE)),
        ],
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
  );
};

const createBar =
  (inntektAktivitetType: InntektAktivitetType) =>
  ([name, data]: [string, number[]], index: number): BarSeriesOption => {
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
          if (value > 5000) {
            return formatCurrencyNoKr(value) || '';
          }
          return '';
        },
      },
    };
  };
