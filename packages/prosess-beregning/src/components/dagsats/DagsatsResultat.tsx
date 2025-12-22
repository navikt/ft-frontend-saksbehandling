import { FormattedMessage } from 'react-intl';

import { Alert, Table } from '@navikt/ds-react';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { BTag, formatCurrencyNoKr } from '@navikt/ft-utils';

import { VilkårUtfallType } from '../../kodeverk/vilkårUtfallType';
import type { Vilkårperiode } from '../../types/Vilkår';
import {
  erBruttoOver6G,
  erMidlertidigInaktiv,
  finnDagsats,
  finnTotalInntektEllerAvkortetInntekt,
} from './dagsatserUtils';
import type { TabellData } from './dagsatsTabell';

const DEKNINGSGRAD_HUNDRE = 100;

interface Props {
  tabellData: TabellData;
  vilkårsperiode: Vilkårperiode;
  beregningsgrunnlag: Beregningsgrunnlag;
}

export const DagsatsResultat = ({ tabellData, vilkårsperiode, beregningsgrunnlag }: Props) => {
  const erIkkeOppfylt = vilkårsperiode.vilkarStatus === VilkårUtfallType.IKKE_OPPFYLT;

  const harBruttoOver6G = erBruttoOver6G(tabellData.andeler, beregningsgrunnlag.grunnbeløp);
  const harDekningsgradUlik100 = beregningsgrunnlag.dekningsgrad !== DEKNINGSGRAD_HUNDRE;

  // TODO: Vurder en annen type varsel for ikke oppfylt vilkår, denne er bare kopiert fra forrige
  return (
    <tfoot>
      {erIkkeOppfylt ? (
        <Table.Row shadeOnHover={false}>
          <Table.DataCell colSpan={2}>
            <Alert variant="error" size="small" inline>
              <FormattedMessage
                id={
                  erMidlertidigInaktiv(beregningsgrunnlag)
                    ? 'Dagsats.VilkårIkkeOppfyltMidlertidigInaktiv'
                    : 'Dagsats.VilkårIkkeOppfylt'
                }
                values={{
                  grunnbeløp: formatCurrencyNoKr(beregningsgrunnlag.grunnbeløp),
                  b: BTag,
                }}
              />
            </Alert>
          </Table.DataCell>
        </Table.Row>
      ) : (
        <>
          {harBruttoOver6G && (
            // TODO: Legg inn et skille over denne slik at man skjønner at det er en sum
            <Table.Row shadeOnHover={false}>
              <Table.DataCell textSize="small">
                <FormattedMessage id="Dagsats.Avkortet" />
              </Table.DataCell>
              <Table.DataCell textSize="small" align="right">
                <BeløpLabel beløp={tabellData.avkortetPrÅr} kr />
              </Table.DataCell>
            </Table.Row>
          )}
          {harDekningsgradUlik100 && (
            // TODO: Legg inn et skille over denne slik at man skjønner at det er en sum
            <Table.Row shadeOnHover={false}>
              <Table.DataCell textSize="small">
                <FormattedMessage id="Dagsats.Redusert" />
              </Table.DataCell>
              <Table.DataCell textSize="small" align="right">
                <BeløpLabel beløp={tabellData.redusertPrÅr} kr />
              </Table.DataCell>
            </Table.Row>
          )}
          <Table.Row shadeOnHover={false}>
            <Table.HeaderCell scope="row" textSize="small">
              <FormattedMessage
                id="Dagsats.BeregnetDagsats"
                values={{
                  inntekt: (
                    <BeløpLabel
                      beløp={finnTotalInntektEllerAvkortetInntekt(tabellData, harBruttoOver6G, harDekningsgradUlik100)}
                      kr
                    />
                  ),
                }}
              />
            </Table.HeaderCell>
            <Table.HeaderCell scope="row" textSize="small" align="right">
              <BeløpLabel beløp={finnDagsats(tabellData, beregningsgrunnlag.ytelsesspesifiktGrunnlag)} kr />
            </Table.HeaderCell>
          </Table.Row>
        </>
      )}
    </tfoot>
  );
};
