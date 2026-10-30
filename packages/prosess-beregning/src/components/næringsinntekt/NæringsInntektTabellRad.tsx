import { Table } from '@navikt/ds-react';

import { PgiType } from '@navikt/ft-kodeverk';
import type { PGIPrÅr, PgiVerdier } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';

interface Props {
  år: number;
  pgiVerdier: PgiVerdier[];
  pgiGrunnlag: PGIPrÅr[];
}

export const NæringsInntektTabellRad = ({ år, pgiVerdier, pgiGrunnlag }: Props) => {
  const inntektsgrunnlag = pgiGrunnlag.find(gr => gr.år === år);
  const næringsgrunnlag = inntektsgrunnlag?.inntekter.find(gr => gr.pgiType === PgiType.NÆRING)?.beløp || 0;
  const lønnsgrunnlag = inntektsgrunnlag?.inntekter.find(gr => gr.pgiType === PgiType.LØNN)?.beløp || 0;
  const totaltUjustertGrunnlag = næringsgrunnlag + lønnsgrunnlag;
  const totaltJustertGrunnlag = pgiVerdier.find(pgi => pgi.årstall === år)?.beløp;
  return (
    <Table.Row shadeOnHover>
      <Table.DataCell textSize="small">{år}</Table.DataCell>
      <Table.DataCell align="right" textSize="small">
        <BeløpLabel beløp={lønnsgrunnlag} kr />
      </Table.DataCell>
      <Table.DataCell align="right" textSize="small">
        <BeløpLabel beløp={næringsgrunnlag} kr />
      </Table.DataCell>
      <Table.DataCell align="right" textSize="small">
        <BeløpLabel beløp={totaltUjustertGrunnlag} />
      </Table.DataCell>
      <Table.DataCell align="right" textSize="small">
        <BeløpLabel beløp={totaltJustertGrunnlag} kr />
      </Table.DataCell>
    </Table.Row>
  );
};
