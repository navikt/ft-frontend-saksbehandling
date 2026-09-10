import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';

import { BeløpLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { type TransformertRegisterinntekter } from '../registerinntekterUtils';
import { createBar, createStackLabel } from './barUtils';
import { ReactECharts } from './ReactECharts';
import { formatTooltip } from './tooltipUtils';

const getAkselVariable = (akselVariable: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(akselVariable);

interface Props {
  transformerteRegisterinntekter: TransformertRegisterinntekter;
}

export const RegisterinntekterGraf = ({
  transformerteRegisterinntekter: { grunnlag_8_30, grunnlag_8_28, periodeData, vis_8_28 },
}: Props) => {
  const intl = useIntl();
  const fontSize = getAkselVariable('--ax-font-size-small');
  const textStyle = {
    fontFamily: getAkselVariable('--ax-font-family'),
    color: getAkselVariable('--ax-text-neutral'),
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
            left: '0%',
            right: '0%',
            top: '10%',
            bottom: '0%',
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              rotate: 45,
            },
            data: periodeData,
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: value => formatCurrencyNoKr(value) || '',
            },
          },
          tooltip: {
            axisPointer: { type: 'shadow' },
            trigger: 'axis',
            appendToBody: true,
            textStyle: {
              ...textStyle,
              fontSize,
            },
            borderColor: getAkselVariable('--ax-border-neutral-subtleA'),
            borderRadius: 12,
            padding: [16, 20],
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
        style={{ width: '100%', height: '300px' }}
      />

      <VStack gap="space-4">
        <LabeledValue
          horizontal
          size="small"
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
            size="small"
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
