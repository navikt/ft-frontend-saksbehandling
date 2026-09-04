import { type CSSProperties, useEffect, useRef } from 'react';

import type { EChartsOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { AriaComponent, GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { getInstanceByDom, init, use as registerEChartsModules } from 'echarts/core';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

registerEChartsModules([
  BarChart,
  AriaComponent,
  GridComponent,
  LabelLayout,
  LegendComponent,
  TooltipComponent,
  CanvasRenderer,
]);

interface Props {
  option: EChartsOption;
  style?: CSSProperties;
}

export const ReactECharts = ({ option, style }: Props) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current === null) {
      return undefined;
    }
    const chart = init(chartRef.current, undefined, { locale: 'nb-NO' });

    const resizeChart = () => chart.resize();
    globalThis.addEventListener('resize', resizeChart);

    const observer = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(resizeChart);
    observer?.observe(chartRef.current);

    return () => {
      globalThis.removeEventListener('resize', resizeChart);
      observer?.disconnect();
      chart.dispose();
    };
  }, []);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        chart.setOption(option, true);
      }
    }
  }, [option]);

  return <div ref={chartRef} style={{ width: 'auto', height: '500px', ...style }} />;
};
