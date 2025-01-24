import type { CSSProperties, JSX } from 'react';
import { useEffect, useRef } from 'react';

import type { ECharts, EChartsOption } from 'echarts';
import { getInstanceByDom, init } from 'echarts';

export interface Props {
  option: EChartsOption;
  style?: CSSProperties;
  height: number;
}

export const ReactECharts = ({ option, style, height }: Props): JSX.Element => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current);
    }

    const resizeChart = () => {
      chart?.resize();
    };
    window.addEventListener('resize', resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        chart.setOption(option);
        if (chart?.getWidth() === 0) {
          chart?.resize();
        }
      }
    }
  }, [chartRef.current, option]);

  return <div ref={chartRef} style={{ width: 'auto', height, ...style }} />;
};
