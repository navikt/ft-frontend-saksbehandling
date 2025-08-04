import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, Table, VStack } from '@navikt/ds-react';

import { AktivitetStatus, PgiType } from '@navikt/ft-kodeverk';
import type { BeregningsgrunnlagAndel, Inntektsgrunnlag, PGIPrÅr, PgiVerdier } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';

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
      <Table.DataCell textSize="small">{år}</Table.DataCell>
      <Table.DataCell align="right" textSize="small">
        <BeløpLabel beløp={lønnsgrunnlag} />
      </Table.DataCell>
      <Table.DataCell align="right" textSize="small">
        <BeløpLabel beløp={næringsgrunnlag} />
      </Table.DataCell>
      <Table.DataCell align="right" textSize="small">
        <BeløpLabel beløp={totaltUjustertGrunnlag} />
      </Table.DataCell>
      <Table.DataCell align="right" textSize="small">
        <BeløpLabel beløp={totaltJustertGrunnlag} />
      </Table.DataCell>
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
    <Table.HeaderCell colSpan={4} textSize="small">
      <FormattedMessage id="GrunnlagForAarsinntektPanelSN.GsnittSum" />
    </Table.HeaderCell>
    <Table.HeaderCell align="right" textSize="small">
      <BeløpLabel beløp={pgiSnitt} />
    </Table.HeaderCell>
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
  const pgiGrunlag = inntektsgrunnlag?.pgiGrunnlag || [];
  if (!andel || !andel.pgiSnitt || !andel.pgiVerdier) {
    return null;
  }
  const { pgiVerdier, pgiSnitt } = andel;
  return (
    <VStack gap="space-4">
      <Heading size="medium" level="4">
        <FormattedMessage id="GrunnlagForAarsinntektPanelSN.Tittel" />
      </Heading>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textSize="small">
              <FormattedMessage id="GrunnlagForAarsinntektPanelSN.TreSisteÅr" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="GrunnlagForAarsinntektPanelSN.ATFL" values={{ wbr: <wbr /> }} />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="GrunnlagForAarsinntektPanelSN.Næring" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="GrunnlagForAarsinntektPanelSN.Sum" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="GrunnlagForAarsinntektPanelSN.Gjustert" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {lagTabellData(pgiVerdier, pgiGrunlag)}
          {lagOppsummeringRad(pgiSnitt)}
        </Table.Body>
      </Table>
    </VStack>
  );
};
