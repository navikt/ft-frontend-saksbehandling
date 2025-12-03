import { type ChangeEvent, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Select } from '@navikt/ds-react';
import dayjs from 'dayjs';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { LabeledValue } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import type { Vilkår } from '../types/Vilkår';
import { harAksjonspunktSomkanLøses } from '../utils/aksjonspunkt';
import { erBGTilVurdering } from '../utils/beregningsgrunnlagUtils';

export const useSkjæringstidspunktVelger = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  beregningsgrunnlagsvilkår: Vilkår | null,
) => {
  const options = lagSorterteOptionProps(beregningsgrunnlagListe, beregningsgrunnlagsvilkår);

  const initialIndex = options.find(o => o.skalVurderes && o.harAvklaringsbehov)?.bgIndex ?? 0;

  const [aktivBGIndex, setAktivBGIndex] = useState(initialIndex);

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAktivBGIndex(Number(e.target.value));
  };

  return {
    aktivtBeregningsgrunnlag: beregningsgrunnlagListe[aktivBGIndex],
    skjæringstidspunktVelger:
      options.length === 0 ? (
        <LabeledValue
          size="small"
          label={<FormattedMessage id="SkjæringstidspunktVelger.Label" />}
          value={options[0].optionLabel}
        />
      ) : (
        <Select label={<FormattedMessage id="SkjæringstidspunktVelger.Label" />} onChange={handleOnChange}>
          {options.map(o => (
            <option key={o.bgIndex} value={o.bgIndex}>
              {o.harAvklaringsbehov && <>⚠️</>} {o.optionLabel}
            </option>
          ))}
        </Select>
      ),
  };
};

const lagSorterteOptionProps = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  beregningsgrunnlagsvilkår: Vilkår | null,
) =>
  beregningsgrunnlagListe
    .map((gr, index) => ({
      bgIndex: index,
      skalVurderes: erBGTilVurdering(gr, beregningsgrunnlagsvilkår),
      harAvklaringsbehov: harAksjonspunktSomkanLøses(gr.avklaringsbehov),
      skjæringstidspunkt: gr.skjaeringstidspunktBeregning,
      optionLabel: (
        <FormattedMessage
          id="SkjæringstidspunktVelger.ValueLabel"
          values={{ dato: dateFormat(gr.skjaeringstidspunktBeregning) }}
        />
      ),
    }))
    .sort((a, b) => dayjs(a.skjæringstidspunkt).diff(dayjs(b.skjæringstidspunkt)));
