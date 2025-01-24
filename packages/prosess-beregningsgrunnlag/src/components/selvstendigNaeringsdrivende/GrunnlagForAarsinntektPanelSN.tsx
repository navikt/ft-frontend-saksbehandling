import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, Label, Table } from '@navikt/ds-react';

import { AktivitetStatus, PgiType } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel, Inntektsgrunnlag, PGIPrÅr, PgiVerdier } from '@navikt/ft-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

const TOM_ARRAY: PGIPrÅr[] = [];

const lagTabellRad = (år: number, pgiVerdier: PgiVerdier[], pgiGrunnlag: PGIPrÅr[]): React.ReactNode => {
  const inntektsgrunnlag = pgiGrunnlag.find(gr => gr.år === år);
  const næringsgrunnlag =
    (inntektsgrunnlag && inntektsgrunnlag.inntekter.find(gr => gr.pgiType === PgiType.NÆRING)?.beløp) || 0;
  const lønnsgrunnlag =
    (inntektsgrunnlag && inntektsgrunnlag.inntekter.find(gr => gr.pgiType === PgiType.LØNN)?.beløp) || 0;
  const totaltUjustertGrunnlag = næringsgrunnlag + lønnsgrunnlag;
  const totaltJustertGrunnlag = pgiVerdier.find(pgi => pgi.årstall === år)?.beløp;
  return (
    <Table.Row shadeOnHover key={år}>
      <Table.DataCell>{år}</Table.DataCell>
      <Table.DataCell align="right">{formatCurrencyNoKr(lønnsgrunnlag)}</Table.DataCell>
      <Table.DataCell align="right">{formatCurrencyNoKr(næringsgrunnlag)}</Table.DataCell>
      <Table.DataCell align="right">{formatCurrencyNoKr(totaltUjustertGrunnlag)}</Table.DataCell>
      <Table.DataCell align="right">{formatCurrencyNoKr(totaltJustertGrunnlag)}</Table.DataCell>
    </Table.Row>
  );
};

const lagTabellData = (pgiVerdier: PgiVerdier[], pgiGrunnlag: PGIPrÅr[]): React.ReactNode[] => {
  const relevanteÅr = pgiVerdier
    .map(pgi => pgi.årstall)
    .sort((a, b) => a - b)
    .reverse();
  return relevanteÅr.map(år => lagTabellRad(år, pgiVerdier, pgiGrunnlag));
};

const lagOppsummeringRad = (pgiSnitt: number): React.ReactElement => (
  <Table.Row shadeOnHover key="PGI-Oppsumert">
    <Table.DataCell>
      <Label>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum" />
      </Label>
    </Table.DataCell>
    <Table.DataCell />
    <Table.DataCell />
    <Table.DataCell />
    <Table.DataCell align="right">
      <Label>{formatCurrencyNoKr(pgiSnitt)}</Label>
    </Table.DataCell>
  </Table.Row>
);

type Props = {
  alleAndeler: BeregningsgrunnlagAndel[];
  inntektsgrunnlag?: Inntektsgrunnlag;
};

/**
 * GrunnlagForAarsinntektPanelSN
 *
 * Presentasjonskomponent. Viser PGI-verdier for selvstendig næringsdrivende.
 * Vises også hvis status er en kombinasjonsstatus som inkluderer selvstendig næringsdrivende.
 */
export const GrunnlagForAarsinntektPanelSN = ({ alleAndeler, inntektsgrunnlag }: Props) => {
  const andel = alleAndeler.find(
    a =>
      a.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE ||
      a.aktivitetStatus === AktivitetStatus.BRUKERS_ANDEL,
  );
  const pgiGrunlag = inntektsgrunnlag?.pgiGrunnlag || TOM_ARRAY;
  if (!andel || !andel.pgiSnitt || !andel.pgiVerdier) {
    return null;
  }
  const { pgiVerdier, pgiSnitt } = andel;
  return (
    <>
      <Heading size="medium">
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt" />
      </Heading>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right">
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SN.ATFL" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right">
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SN.Næring" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right">
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SN.Sum" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right">
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {lagTabellData(pgiVerdier, pgiGrunlag)}
          {lagOppsummeringRad(pgiSnitt)}
        </Table.Body>
      </Table>
    </>
  );
};
