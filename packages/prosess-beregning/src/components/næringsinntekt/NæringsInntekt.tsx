import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import type { Beregningsgrunnlag, Inntektsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel, FaktaBoks, TableSum } from '@navikt/ft-ui-komponenter';

import { finnAlleAndelerIFørstePeriode } from '../../utils/beregningsgrunnlagUtils';
import { NæringsInntektTabellRad } from './NæringsInntektTabellRad';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  inntektsgrunnlag?: Inntektsgrunnlag;
}

export const NæringsInntekt = ({ beregningsgrunnlag, inntektsgrunnlag }: Props) => {
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(beregningsgrunnlag.beregningsgrunnlagPeriode);

  const andel = alleAndelerIForstePeriode.find(a => a.aktivitetStatus === 'SN' || a.aktivitetStatus === 'BA');
  const pgiGrunlag = inntektsgrunnlag?.pgiGrunnlag || [];
  if (!andel?.pgiSnitt || !andel.pgiVerdier) {
    return null;
  }
  const { pgiVerdier, pgiSnitt } = andel;

  const relevanteÅr = pgiVerdier
    .map(pgi => pgi.årstall)
    .sort((a, b) => a - b)
    .reverse();

  return (
    <FaktaBoks
      tittel={<FormattedMessage id="NæringsInntekt.Tittel" />}
      beskrivelse={<FormattedMessage id="NæringsInntekt.Beskrivelse" />}
    >
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textSize="small">
              <FormattedMessage id="NæringsInntekt.TreSisteÅr" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="NæringsInntekt.ATFL" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="NæringsInntekt.Næring" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="NæringsInntekt.Sum" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="NæringsInntekt.Gjustert" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {relevanteÅr.map(år => (
            <NæringsInntektTabellRad key={år} år={år} pgiVerdier={pgiVerdier} pgiGrunnlag={pgiGrunlag} />
          ))}
        </Table.Body>
        <TableSum bottomBorder="double">
          <Table.Row shadeOnHover>
            <Table.HeaderCell colSpan={4} textSize="small">
              <FormattedMessage id="NæringsInntekt.GsnittSum" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <BeløpLabel beløp={pgiSnitt} kr />
            </Table.HeaderCell>
          </Table.Row>
        </TableSum>
      </Table>
    </FaktaBoks>
  );
};
