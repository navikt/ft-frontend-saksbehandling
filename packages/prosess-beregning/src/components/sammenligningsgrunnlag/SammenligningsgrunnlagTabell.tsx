import { Fragment } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Table } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, InntektsgrunnlagMåned } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';

import { formaterMåned, transformerGrafData } from './sammenligningsgrunnlagUtils';

import styles from './sammenligningsgrunnlagTabell.module.css';

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
    <Table size="small" zebraStripes className={styles.table}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col" textSize="small">
            <FormattedMessage id="SammenligningsgrunnlagTabell.Måned" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" textSize="small">
            <FormattedMessage id="SammenligningsgrunnlagTabell.Inntektskilde" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" textSize="small" align="right">
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
                <Table.HeaderCell scope="row" textSize="small">
                  {formaterMåned(periode)}
                </Table.HeaderCell>
                <Table.DataCell textSize="small">
                  {inntektskilderForRad.map(({ inntektspostNavn }, index) => (
                    <Fragment key={inntektspostNavn}>
                      {inntektspostNavn}
                      {index < inntektskilderForRad.length - 1 && <br />}
                    </Fragment>
                  ))}
                </Table.DataCell>
                <Table.DataCell align="right" textSize="small">
                  {inntektskilderForRad.map(({ beløp }, index) => (
                    <Fragment key={`${index}-${beløp}`}>
                      {<BeløpLabel beløp={beløp} kr />}
                      {index < inntektskilderForRad.length - 1 && <br />}
                    </Fragment>
                  ))}
                </Table.DataCell>
              </Table.Row>
            );
          })
          .reverse()}
      </Table.Body>
      <tfoot>
        <Table.Row>
          <Table.DataCell colSpan={2} textSize="small">
            <FormattedMessage id="Tabell.Total" />
          </Table.DataCell>
          <Table.DataCell align="right" textSize="small">
            <BeløpLabel
              beløp={alleInntektskilder.reduce(
                (acc, { inntekter }) => acc + inntekter.reduce((sum, beløp) => sum + beløp, 0),
                0,
              )}
              kr
            />
          </Table.DataCell>
        </Table.Row>
      </tfoot>
    </Table>
  );
};
