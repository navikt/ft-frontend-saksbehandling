import { type CSSProperties, useEffect, useRef } from 'react';

import type { ECharts, EChartsOption } from 'echarts';
import { getInstanceByDom, init } from 'echarts';

interface Props {
  option: EChartsOption;
  style?: CSSProperties;
}

export const ReactECharts = ({ option, style }: Props) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, undefined, { locale: 'nb-NO' });
    }

    const resizeChart = () => {
      chart?.resize();
    };
    globalThis.addEventListener('resize', resizeChart);

    return () => {
      chart?.dispose();
      globalThis.removeEventListener('resize', resizeChart);
    };
  }, [style]);

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
