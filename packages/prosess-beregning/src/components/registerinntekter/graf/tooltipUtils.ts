import { format } from 'echarts/core';
import type { CallbackDataParams } from 'echarts/types/dist/shared';

import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { formaterParagraf, type TypeGrunnlag } from '../registerinntekterUtils';

import styles from './tooltip.module.css';

export const formatTooltip =
  (vis_8_28: boolean) =>
  (rawParams: CallbackDataParams | CallbackDataParams[]): string => {
    const params = Array.isArray(rawParams) ? rawParams : [rawParams];
    if (params.length === 0) {
      return '';
    }

    const harBeløp8_28 = params.some(
      element => element.seriesId?.startsWith('8-28:') && typeof element.value === 'number',
    );
    const grunnlagTyper: TypeGrunnlag[] = vis_8_28 && harBeløp8_28 ? ['8-28', '8-30'] : ['8-30'];
    const columnHeaders = grunnlagTyper.map(type => `<th scope="col">${formaterParagraf(type)}</th>`).join('');

    const groupedBySerie = Map.groupBy(params, element => element.seriesName ?? '');
    const body = Array.from(groupedBySerie.entries())
      .map(([seriesName, group]) => {
        const markør = lagMarkør(group[0].color, group[0].borderColor);
        const navnUtenOrgnummer = seriesName.replace(/\s\(\d{9}\)$/, '').trimEnd();
        const values = grunnlagTyper.map(type => lagVerdiCelle(group, type)).join('');
        return `
          <tr>
            <th scope="row">
              <div class="${styles.source}">
                ${markør}
                <span class="${styles.name}">${format.encodeHTML(navnUtenOrgnummer)}</span>
              </div>
            </th>
            ${values}
          </tr>
        `;
      })
      .join('');
    return `
      <table class="${styles.table}">
        <thead>
          <tr>
            <th scope="col">${format.encodeHTML(params[0].name)} (kr)</th>
            ${columnHeaders}
          </tr>
        </thead>
        <tbody>
          ${body}
        </tbody>
      </table>
    `;
  };

const lagVerdiCelle = (gruppe: CallbackDataParams[], type: TypeGrunnlag) => {
  const value = gruppe.find(element => element.seriesId?.startsWith(`${type}:`))?.value;
  return typeof value === 'number'
    ? `<td>${formatCurrencyNoKr(value)}</td>`
    : `<td class="${styles.missingValue}">&ndash;</td>`;
};

const lagMarkør = (color: CallbackDataParams['color'], borderColor: CallbackDataParams['borderColor']) =>
  `
    <span
      class="${styles.marker}"
      aria-hidden="true"
      style="
        border-color: ${format.encodeHTML(borderColor ?? '')};
        background-color: ${format.encodeHTML(typeof color === 'string' ? color : '')};
      "
    ></span>
  `;
