import { Fragment } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Table } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, InntektsgrunnlagMåned } from '@navikt/ft-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { formaterMåned, transformerGrafData } from './sammenligningsgrunnlagUtils';

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
  const alleInntektskilder = [
    ...Object.entries(dataForArbeid),
    ...Object.entries(dataForFrilans),
    ...Object.entries(dataForYtelse),
  ].map(([inntektspostNavn, inntekter]) => ({ inntektspostNavn, inntekter }));

  return (
    <Table size="small" zebraStripes>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="SammenligningsgrunnlagTabell.Måned" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="SammenligningsgrunnlagTabell.Inntektskilde" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" align="right">
            <FormattedMessage id="SammenligningsgrunnlagTabell.Beløp" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {periodeData
          .map((periode, periodeIndex) => {
            const inntektskilderForRad = alleInntektskilder
              .map(({ inntektspostNavn, inntekter }) => ({ inntektspostNavn, beløp: inntekter[periodeIndex] }))
              .filter(({ beløp }) => beløp !== 0);

            return (
              <Table.Row key={periode}>
                <Table.HeaderCell scope="row">{formaterMåned(periode)}</Table.HeaderCell>
                <Table.DataCell>
                  {inntektskilderForRad.map(({ inntektspostNavn }, index) => (
                    <Fragment key={inntektspostNavn}>
                      {inntektspostNavn}
                      {index < inntektskilderForRad.length - 1 && <br />}
                    </Fragment>
                  ))}
                </Table.DataCell>
                <Table.DataCell align="right">
                  {inntektskilderForRad.map(({ beløp }, index) => (
                    <Fragment key={`${index}-${beløp}`}>
                      {formatCurrencyNoKr(beløp) || ''}
                      {index < inntektskilderForRad.length - 1 && <br />}
                    </Fragment>
                  ))}
                </Table.DataCell>
              </Table.Row>
            );
          })
          .reverse()}
      </Table.Body>
    </Table>
  );
};
