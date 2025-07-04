import { FormattedMessage } from 'react-intl';

import { Heading, Label, Table } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import type { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { BTag, dateFormat } from '@navikt/ft-utils';

import tableStyle from '../tableStyle.module.css';

type Props = {
  alleAndeler: BeregningsgrunnlagAndel[];
};

/**
 * GrunnlagForAarsinntektPanelFL
 *
 * Presentasjonskomponent. Viser beregningsgrunnlag for frilansere.
 * Viser kun én frilanserinntekt.
 * Vises også hvis status er en kombinasjonsstatus som inkluderer frilanser.
 */
export const GrunnlagForAarsinntektPanelFL = ({ alleAndeler }: Props) => {
  const relevantAndel = alleAndeler.find(
    andel => !andel.erTilkommetAndel && andel.aktivitetStatus === AktivitetStatus.FRILANSER,
  );
  if (!relevantAndel) {
    return null;
  }
  const beregnetAarsinntekt = relevantAndel.beregnetPrAar;
  const startdato = relevantAndel.arbeidsforhold?.startdato;
  return (
    <div>
      <Heading size="medium">
        <FormattedMessage id="GrunnlagForAarsinntektPanelFL.Tittel" />
      </Heading>
      {startdato && (
        <Label size="small">
          <FormattedMessage
            id="GrunnlagForAarsinntektPanelFL.FrilansStartDato"
            values={{ b: BTag, startdato: dateFormat(startdato) }}
          />
        </Label>
      )}
      <Table size="small" className={tableStyle.table}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell textSize="small" align="right">
              <FormattedMessage id="TabellKolonne.Maaned" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small" align="right">
              <FormattedMessage id="TabellKolonne.BeregnetAar" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell textSize="small">
              <FormattedMessage id="GrunnlagForAarsinntektPanelFL.InnrapportertFrilans" />
            </Table.DataCell>
            <Table.DataCell textSize="small" align="right">
              <BeløpLabel beløp={beregnetAarsinntekt ? beregnetAarsinntekt / 12 : 0} />
            </Table.DataCell>
            <Table.DataCell textSize="small" align="right">
              <BeløpLabel beløp={beregnetAarsinntekt ?? 0} />
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
