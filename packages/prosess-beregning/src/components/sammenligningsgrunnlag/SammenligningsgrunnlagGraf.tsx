import { FormattedMessage, useIntl } from 'react-intl';

import type { BarSeriesOption } from 'echarts';

import { InntektAktivitetType } from '@navikt/ft-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, InntektsgrunnlagMåned } from '@navikt/ft-types';
import { BeløpLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { getGrafFarger } from './grafFarger';
import { ReactECharts } from './ReactECharts';
import { formaterMåned, transformerGrafData } from './sammenligningsgrunnlagUtils';

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

  const { periodeData, dataForFrilans, dataForYtelse, dataForArbeid } = transformerGrafData(
    sammenligningsgrunnlagInntekter,
    sammenligningsgrunnlagFom,
    arbeidsgiverOpplysningerPerId,
    intl,
  );

  const fontSize = getAkselVariable('--ax-font-size-small');
  const textStyle = {
    fontFamily: getAkselVariable('--ax-font-family'),
    color: getAkselVariable('--ax-text-neutral'),
    fontSize,
  };
  const totalInntekt = [
    ...Object.values(dataForArbeid),
    ...Object.values(dataForFrilans),
    ...Object.values(dataForYtelse),
  ]
    .flat()
    .reduce((acc, beløp) => acc + beløp, 0);

  return (
    <>
      <ReactECharts
        option={{
          animation: false,
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
            data: periodeData.map(value => formaterMåned(value)),
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
      <LabeledValue
        horizontal
        size="small"
        label={<FormattedMessage id="SammenligningsgrunnlagGraf.TotalSammenligningsgrunnlag" />}
        value={<BeløpLabel beløp={totalInntekt} kr />}
      />
    </>
  );
};

const createBar =
  (inntektAktivitetType: InntektAktivitetType) =>
  ([name, data]: [string, number[]], index: number): BarSeriesOption => {
    const [color, borderColor] = getGrafFarger(inntektAktivitetType, index);
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
          if (value > 3000) {
            return formatCurrencyNoKr(value) || '';
          }
          return '';
        },
      },
    };
  };
