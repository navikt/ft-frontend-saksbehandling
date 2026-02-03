import { FormattedMessage, useIntl } from 'react-intl';

import { BeløpLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { type TransformertRegisterinntekter } from '../registerinntekterUtils';
import { createBar } from './barUtils';
import { ReactECharts } from './ReactECharts';
import { formatTooltip } from './tooltipUtils';

const getAkselVariable = (akselVariable: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(akselVariable);

interface Props {
  transformerteRegisterinntekter: TransformertRegisterinntekter;
}

export const RegisterinntekterGraf = ({
  transformerteRegisterinntekter: { transformertGrunnlag_8_30, transformertGrunnlag_8_28, periodeData, vis_8_28 },
}: Props) => {
  const intl = useIntl();
  const fontSize = getAkselVariable('--ax-font-size-small');
  const textStyle = {
    fontFamily: getAkselVariable('--ax-font-family'),
    color: getAkselVariable('--ax-text-neutral'),
    fontSize: '14px',
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
          },
          aria: {
            enabled: true,
            decal: { show: true },
          },
          grid: {
            top: '8%',
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
          tooltip: {
            axisPointer: { type: 'shadow' },
            trigger: 'axis',
            textStyle,
            borderColor: getAkselVariable('--ax-border-neutral-subtleA'),
            borderRadius: 12,
            padding: [16, 20],
            borderWidth: 1,
            formatter: formatTooltip(intl),
          },
          series: [
            ...transformertGrunnlag_8_30.inntektskilder.map(createBar(vis_8_28, '8-30: ')),
            ...(vis_8_28 ? transformertGrunnlag_8_28.inntektskilder.map(createBar(vis_8_28, '8-28: ')) : []),
          ],
        }}
        style={vis_8_28 ? { height: '600px' } : { height: '400px' }}
      />
      <LabeledValue
        horizontal
        size="small"
        label={
          <>
            <FormattedMessage id="Registerinntekt.8-30" />:
          </>
        }
        value={<BeløpLabel beløp={transformertGrunnlag_8_30.total} kr />}
      />
    </>
  );
};
