import { type CSSProperties, useEffect, useRef } from 'react';

import type { EChartsOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { AriaComponent, GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { type ECharts, getInstanceByDom, init, use as registerEChartsModules } from 'echarts/core';
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
  onLegendSelectChanged?: (selected: Record<string, boolean>) => void;
}

export const ReactECharts = ({ option, style, onLegendSelectChanged }: Props) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, undefined, { locale: 'nb-NO' });
    }

    const resizeChart = () => {
      chart?.resize();
    };
    const resizeObserver = globalThis.ResizeObserver ? new ResizeObserver(resizeChart) : undefined;
    if (chartRef.current) {
      resizeObserver?.observe(chartRef.current);
    }
    globalThis.addEventListener('resize', resizeChart);

    return () => {
      chart?.dispose();
      resizeObserver?.disconnect();
      globalThis.removeEventListener('resize', resizeChart);
    };
  }, []);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        chart.setOption(option, { replaceMerge: ['series'] });
      }
    }
  }, [option]);

  useEffect(() => {
    const chart = chartRef.current && getInstanceByDom(chartRef.current);
    if (!chart || !onLegendSelectChanged) {
      return;
    }

    const handleLegendSelectChanged = (event: unknown) => {
      const { selected } = event as { selected: Record<string, boolean> };
      onLegendSelectChanged(selected);
    };
    chart.on('legendselectchanged', handleLegendSelectChanged);
    return () => {
      chart.off('legendselectchanged', handleLegendSelectChanged);
    };
  }, [onLegendSelectChanged]);

  return <div ref={chartRef} style={{ width: 'auto', height: '500px', ...style }} />;
};
