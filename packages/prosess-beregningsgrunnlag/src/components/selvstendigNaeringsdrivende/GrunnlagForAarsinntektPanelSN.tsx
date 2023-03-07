import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Detail, Heading, Label, Table } from '@navikt/ds-react';

import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AktivitetStatus, PgiType } from '@navikt/ft-kodeverk';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { BeregningsgrunnlagAndel, Inntektsgrunnlag, PgiVerdier, PGIPrÅr } from '@navikt/ft-types';

import styles from './grunnlagForAarsinntektPanelSN.module.css';
import Ledelinje from '../fellesPaneler/Ledelinje';

const createHeaderRow = (): React.ReactNode => (
  <FlexRow>
    <FlexColumn className={styles.næringTabellAktivitet}>
      <Detail className={styles.etikettLiten}>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar" />
      </Detail>
    </FlexColumn>
    <FlexColumn className={styles.næringTabellInntekt}>
      <Detail className={styles.etikettLiten}>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.TotalPensjonsGivende" />
      </Detail>
    </FlexColumn>
  </FlexRow>
);

const createSumRow = (pgiSnitt: number): React.ReactNode => (
  <>
    <Ledelinje prosentBredde={60} />
    <FlexRow>
      <FlexColumn className={styles.næringTabellAktivitet}>
        <Label size="small">
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SnittPensjonsGivende" />
        </Label>
      </FlexColumn>
      <FlexColumn className={styles.næringTabellInntekt}>
        <Label size="small">{formatCurrencyNoKr(pgiSnitt)}</Label>
      </FlexColumn>
    </FlexRow>
  </>
);
const createInntektRows = (pgiVerdier: PgiVerdier[]): React.ReactNode => (
  <>
    {pgiVerdier.map(element => (
      <FlexRow key={element.årstall}>
        <FlexColumn className={styles.næringTabellAktivitet}>
          <BodyShort size="small">{element.årstall}</BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.næringTabellInntekt}>
          <BodyShort size="small">{formatCurrencyNoKr(element.beløp)}</BodyShort>
        </FlexColumn>
      </FlexRow>
    ))}
  </>
);

const lagTabellRad = (pgiVerdier: PgiVerdier[], inntektsgrunnlag: PGIPrÅr): React.ReactNode => {
  const næringsgrunnlag = inntektsgrunnlag.inntekter.find(gr => gr.pgiType === PgiType.NÆRING)?.beløp || 0;
  const lønnsgrunnlag = inntektsgrunnlag.inntekter.find(gr => gr.pgiType === PgiType.LØNN)?.beløp || 0;
  const totaltUjustertGrunnlag = næringsgrunnlag + lønnsgrunnlag;
  const totaltJustertGrunnlag = pgiVerdier.find(pgi => pgi.årstall === inntektsgrunnlag.år)?.beløp;
  return (
    <Table.Row shadeOnHover key={inntektsgrunnlag.år}>
      <Table.DataCell>{inntektsgrunnlag.år}</Table.DataCell>
      <Table.DataCell align="right">{formatCurrencyNoKr(lønnsgrunnlag)}</Table.DataCell>
      <Table.DataCell align="right">{formatCurrencyNoKr(næringsgrunnlag)}</Table.DataCell>
      <Table.DataCell align="right">{formatCurrencyNoKr(totaltUjustertGrunnlag)}</Table.DataCell>
      <Table.DataCell align="right">{formatCurrencyNoKr(totaltJustertGrunnlag)}</Table.DataCell>
    </Table.Row>
  );
};

const lagTabellData = (pgiVerdier: PgiVerdier[], pgiGrunnlag: PGIPrÅr[]): React.ReactNode[] => {
  const relevanteÅr = pgiVerdier.map(pgi => pgi.årstall);
  return pgiGrunnlag
    .filter(grunnlag => relevanteÅr.includes(grunnlag.år))
    .sort((a, b) => a.år - b.år)
    .map(grunnlag => lagTabellRad(pgiVerdier, grunnlag));
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

const lagUtvidetPGIGrunnlagTabell = (
  pgiVerdier: PgiVerdier[],
  pgiSnitt: number,
  inntektsgrunnlag?: Inntektsgrunnlag,
): React.ReactNode => {
  const pgiGrunlag = inntektsgrunnlag?.pgiGrunnlag || [];
  if (!pgiGrunlag || pgiGrunlag.length < 1) {
    return null;
  }
  return (
    <Table className={styles.pgiTabell}>
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
  );
};

type OwnProps = {
  alleAndeler: BeregningsgrunnlagAndel[];
  inntektsgrunnlag?: Inntektsgrunnlag;
};

/**
 * GrunnlagForAarsinntektPanelSN
 *
 * Presentasjonskomponent. Viser PGI-verdier for selvstendig næringsdrivende.
 * Vises også hvis status er en kombinasjonsstatus som inkluderer selvstendig næringsdrivende.
 */
const GrunnlagForAarsinntektPanelSN: FunctionComponent<OwnProps> = ({ alleAndeler, inntektsgrunnlag }) => {
  const andel = alleAndeler.find(
    a =>
      a.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE ||
      a.aktivitetStatus === AktivitetStatus.BRUKERS_ANDEL,
  );
  if (!andel || !andel.pgiSnitt || !andel.pgiVerdier) {
    return null;
  }
  const { pgiVerdier, pgiSnitt } = andel;
  const utvidetPgiGrunnlagTabell = useMemo(
    () => lagUtvidetPGIGrunnlagTabell(pgiVerdier, pgiSnitt, inntektsgrunnlag),
    [andel, inntektsgrunnlag],
  );
  return (
    <>
      <Heading size="medium">
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt" />
      </Heading>
      {utvidetPgiGrunnlagTabell && <div>{utvidetPgiGrunnlagTabell}</div>}
      {!utvidetPgiGrunnlagTabell && ( // Tar vare på gammel visning til alle klienter er klare for å forsyne ny visning
        <>
          <VerticalSpacer fourPx />
          {createHeaderRow()}
          <Ledelinje prosentBredde={60} />
          {!!pgiVerdier && <>{createInntektRows(pgiVerdier)}</>}
          {pgiSnitt !== undefined && <>{createSumRow(pgiSnitt)}</>}
        </>
      )}
    </>
  );
};

export default GrunnlagForAarsinntektPanelSN;
