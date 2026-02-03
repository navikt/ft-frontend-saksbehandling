import type { IntlShape } from 'react-intl';

import type { CallbackDataParams, TooltipOption } from 'echarts/types/dist/shared';

import { formatCurrencyWithKr } from '@navikt/ft-utils';

const getGrunnlagTypeLabel = (intl: IntlShape, seriesId: string | undefined): string => {
  const type = seriesId?.split(':')[0];
  if (type === '8-28') {
    return intl.formatMessage({ id: 'Register.8-28' });
  } else if (type === '8-30') {
    return intl.formatMessage({ id: 'Register.8-30' });
  }
  throw new Error(`Ukjent grunnlagstype: ${type}`);
};

const getValue = (value: CallbackDataParams['value']) => {
  if (typeof value === 'number') {
    return formatCurrencyWithKr(value);
  }
  if (value === undefined) {
    return '-';
  }
  return '';
};

const lagMarkør = (color: CallbackDataParams['color'], borderColor: CallbackDataParams['borderColor']) => {
  return `<div style="width:24px;height:15px;border-radius:4px;border:2px solid ${borderColor};background-color:${color as string};"></div>`;
};

const markørLabelOgVerdiRad = (markør: string | null, label: string, value: CallbackDataParams['value']): string => `
  <div style="display:flex; column-gap: 8px;  align-items: center; ">
    ${markør ?? `<div style="width:24px;"></div>`} 
    <span>${label}</span>
    <div style="margin-left:auto;width:70px;text-align:end;">${getValue(value)}</div>
  </div>
`;

const serieGruppe = (
  markør: string,
  seriesName: string,
  gruppe: CallbackDataParams[],
  intl: IntlShape,
): string => `<div style="margin-top:8px;">
  ${markørLabelOgVerdiRad(markør, seriesName, null)}
  ${gruppe.map(element => markørLabelOgVerdiRad(null, getGrunnlagTypeLabel(intl, element.seriesId), element.value)).join('')}
</div>`;

export const formatTooltip =
  (intl: IntlShape): TooltipOption['formatter'] =>
  rawParams => {
    const params = rawParams as CallbackDataParams[];
    const header = `<strong>${params[0].name}</strong><br/>`;

    const groupedBySerie = Map.groupBy(params, element => element.seriesName ?? '');
    const body = Array.from(groupedBySerie.entries())
      .map(([seriesName, group]) => {
        const markør = lagMarkør(group[0].color, group[0].borderColor);
        return group.length === 1
          ? markørLabelOgVerdiRad(markør, seriesName, group[0].value)
          : serieGruppe(markør, seriesName, group, intl);
      })
      .join('');
    return header + body;
  };
