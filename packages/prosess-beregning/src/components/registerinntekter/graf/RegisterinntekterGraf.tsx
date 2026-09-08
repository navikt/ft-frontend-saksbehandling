import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, Modal, VStack } from '@navikt/ds-react';
import type { EChartsOption } from 'echarts';

import { BeløpLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { type TransformertRegisterinntekter } from '../registerinntekterUtils';
import { createBar, createStackLabel } from './barUtils';
import { ReactECharts } from './ReactECharts';
import { formatTooltip } from './tooltipUtils';

const getAkselVariable = (akselVariable: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(akselVariable);

const UTVID_IKON = 'path://M4 4h6V2H2v8h2V4zm16 0v6h2V2h-8v2h6zM4 14H2v8h8v-2H4v-6zm18 0h-2v6h-6v2h8v-8z';

interface Props {
  transformerteRegisterinntekter: TransformertRegisterinntekter;
}

export const RegisterinntekterGraf = ({
  transformerteRegisterinntekter: { grunnlag_8_30, grunnlag_8_28, periodeData, vis_8_28 },
}: Props) => {
  const intl = useIntl();
  const [utvidet, setUtvidet] = useState(false);

  const fontFamily = getAkselVariable('--ax-font-family');
  const color = getAkselVariable('--ax-text-neutral');
  const smallFontSize = getAkselVariable('--ax-font-size-small');

  const byggOption = (barMaxWidth: number, medUtvidKnapp: boolean, visVerdiLabel: boolean): EChartsOption => {
    const fontSize = medUtvidKnapp ? `${parseFloat(smallFontSize) * 0.7}rem` : smallFontSize;
    const textStyle = { fontFamily, color, fontSize };
    return {
      textStyle,
      animation: false,
      labelLayout: { hideOverlap: true },
      legend: { type: 'scroll', top: 'top', left: 'left' },
      aria: {
        enabled: true,
        label: { description: intl.formatMessage({ id: 'Registerinntekt.GrafBeskrivelse' }) },
        decal: { show: true },
      },
      toolbox: medUtvidKnapp
        ? {
            right: 0,
            top: 0,
            tooltip: {
              show: true,
              formatter: (params: { title?: string }) => params.title ?? '',
              borderColor: getAkselVariable('--ax-border-neutral-subtleA'),
              borderWidth: 1,
              borderRadius: 8,
              padding: [4, 8],
              textStyle,
            },
            feature: {
              myUtvid: {
                show: true,
                title: intl.formatMessage({ id: 'Registerinntekt.VisStorre' }),
                icon: UTVID_IKON,
                onclick: () => setUtvidet(true),
              },
            },
          }
        : undefined,
      grid: { top: 28, left: 0, right: 8, bottom: 0, containLabel: true },
      xAxis: {
        type: 'value',
        axisLabel: { fontSize, formatter: value => formatCurrencyNoKr(value) || '' },
      },
      yAxis: {
        type: 'category',
        axisLabel: { fontSize },
        data: periodeData,
      },
      tooltip: {
        axisPointer: { type: 'shadow' },
        trigger: 'axis',
        appendToBody: medUtvidKnapp,
        textStyle,
        borderColor: getAkselVariable('--ax-border-neutral-subtleA'),
        borderRadius: 12,
        padding: [16, 20],
        borderWidth: 1,
        formatter: formatTooltip(intl),
      },
      series: [
        grunnlag_8_30.inntektskilder.flatMap(createBar(true, barMaxWidth, visVerdiLabel)),
        grunnlag_8_28.inntektskilder.flatMap(createBar(vis_8_28, barMaxWidth, visVerdiLabel)),
        createStackLabel(grunnlag_8_30.inntektskilder, vis_8_28),
        createStackLabel(grunnlag_8_28.inntektskilder, vis_8_28),
      ].flat(),
    };
  };

  const høyde = (radHøyde: number, basis: number) => `${periodeData.length * radHøyde + basis}px`;

  return (
    <>
      <ReactECharts
        option={byggOption(14, true, false)}
        style={{ height: høyde(vis_8_28 ? 28 : 18, 44), maxWidth: 640 }}
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

      <Modal
        open={utvidet}
        onClose={() => setUtvidet(false)}
        width="1200px"
        aria-label={intl.formatMessage({ id: 'Registerinntekt.GrafBeskrivelse' })}
      >
        <Modal.Header>
          <Heading size="small" level="2">
            <FormattedMessage id="Registerinntekt.Header" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          {utvidet && (
            <ReactECharts option={byggOption(28, false, true)} style={{ height: høyde(vis_8_28 ? 52 : 36, 96) }} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
