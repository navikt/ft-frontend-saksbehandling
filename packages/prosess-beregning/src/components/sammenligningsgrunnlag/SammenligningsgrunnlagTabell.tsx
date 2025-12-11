import { useIntl } from 'react-intl';

import { Table } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, InntektsgrunnlagMåned } from '@navikt/ft-types';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { transformerGrafData } from './sammenligningsgrunnlagUtils';

interface Props {
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}
export const SammenligningsgrunnlagTabell = ({
  sammenligningsgrunnlagFom,
  sammenligningsgrunnlagInntekter,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const intl = useIntl();

  const { periodeData, dataForFrilans, dataForYtelse, dataForArbeid } = transformerGrafData(
    sammenligningsgrunnlagInntekter,
    sammenligningsgrunnlagFom,
    arbeidsgiverOpplysningerPerId,
    intl,
  );

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Måned</Table.HeaderCell>
          <Table.HeaderCell>Inntektskilde</Table.HeaderCell>
          <Table.HeaderCell>Beløp</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {periodeData.map((periode, index) => {
          const inntektskilder = [
            ...Object.entries(dataForArbeid),
            ...Object.entries(dataForFrilans),
            ...Object.entries(dataForYtelse),
          ].filter(kilde => [kilde[1][index] !== undefined || kilde[1][index] === 0]);

          return (
            <Table.Row key={periode}>
              <Table.DataCell>
                <DateLabel dateString={periode} month={'short'} day={undefined} />
              </Table.DataCell>
              <Table.DataCell>{inntektskilder.map(i => i[0])}</Table.DataCell>
              <Table.DataCell>
                {inntektskilder.map(i => i[1][index]).map(b => formatCurrencyNoKr(b) || '')}
              </Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
