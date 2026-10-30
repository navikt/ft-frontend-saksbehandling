import type { CallbackDataParams } from 'echarts/types/dist/shared';
import { describe, expect, it } from 'vitest';

import type { TypeGrunnlag } from '../registerinntekterUtils';
import { formatTooltip } from './tooltipUtils';

const lagSerie = (seriesName: string, type: TypeGrunnlag, value: number | undefined): CallbackDataParams => ({
  componentType: 'series',
  componentSubType: 'bar',
  componentIndex: 0,
  seriesType: 'bar',
  seriesIndex: 0,
  seriesId: `${type}:${seriesName}`,
  seriesName,
  name: 'April 26',
  dataIndex: 0,
  data: value,
  value,
  color: '#fff',
  borderColor: '#000',
  $vars: ['seriesName', 'name', 'value'],
});

const lagTooltip = (params: CallbackDataParams[], vis_8_28 = true) => {
  const container = document.createElement('div');
  container.innerHTML = formatTooltip(vis_8_28)(params);
  return container;
};

describe('formatTooltip', () => {
  it('skal skjule § 8-28-kolonnen når alle beløpene der mangler', () => {
    const tooltip = lagTooltip([
      lagSerie('Arbeidsgiver A', '8-30', 30000),
      lagSerie('Arbeidsgiver B', '8-30', 7500),
      lagSerie('Arbeidsgiver A', '8-28', undefined),
      lagSerie('Arbeidsgiver B', '8-28', undefined),
    ]);

    expect(tooltip.textContent).not.toContain('§ 8-28');
    expect(Array.from(tooltip.querySelectorAll('tbody td'), cell => cell.textContent)).toEqual(['30 000', '7 500']);
  });

  it('skal beholde § 8-28-kolonnen for nullbeløp og vise manglende beløp som strek', () => {
    const tooltip = lagTooltip([
      lagSerie('Arbeidsgiver A', '8-30', 30000),
      lagSerie('Arbeidsgiver B', '8-30', 7500),
      lagSerie('Arbeidsgiver A', '8-28', undefined),
      lagSerie('Arbeidsgiver B', '8-28', 0),
    ]);

    expect(tooltip.textContent).toContain('§ 8-28');
    expect(Array.from(tooltip.querySelectorAll('tbody td'), cell => cell.textContent)).toEqual([
      '–',
      '30 000',
      '0',
      '7 500',
    ]);
  });

  it('skal skjule § 8-28 når visningen er slått av selv om det finnes beløp', () => {
    const tooltip = lagTooltip(
      [lagSerie('Arbeidsgiver A', '8-30', 30000), lagSerie('Arbeidsgiver A', '8-28', 32000)],
      false,
    );

    expect(tooltip.textContent).not.toContain('§ 8-28');
    expect(Array.from(tooltip.querySelectorAll('tbody td'), cell => cell.textContent)).toEqual(['30 000']);
  });
});
