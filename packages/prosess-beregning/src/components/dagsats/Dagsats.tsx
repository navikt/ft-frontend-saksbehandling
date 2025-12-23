import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { ErrorMessage, Label, Table, VStack } from '@navikt/ds-react';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { periodFormat } from '@navikt/ft-utils';

import { VilkårUtfallType } from '../../kodeverk/vilkårUtfallType';
import type { Vilkårperiode } from '../../types/Vilkår';
import { finnTotalInntekt } from './dagsatserUtils';
import { DagsatsResultat } from './DagsatsResultat';
import type { TabellData, TabellRadData } from './dagsatsTabell';
import { statusKonfigMap } from './statusKonfig.ts';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  vilkårsperiode: Vilkårperiode;
  tabellPeriode: TabellData;
  skalVisePeriode: boolean;
}

export const Dagsats = ({ beregningsgrunnlag, vilkårsperiode, tabellPeriode, skalVisePeriode }: Props) => {
  const erAlleAndelerFastsatt = tabellPeriode.andeler.every(andel => andel.erFerdigBeregnet);
  const skalViseOppsummeringsrad = tabellPeriode.andeler.length > 1 && erAlleAndelerFastsatt;
  const erIkkeVurdert = vilkårsperiode.vilkarStatus === VilkårUtfallType.IKKE_VURDERT;

  return (
    <VStack gap="space-8">
      {skalVisePeriode && (
        <Label size="small">
          <FormattedMessage
            id="Dagsats.Periode"
            values={{
              periode: periodFormat(tabellPeriode.fom, tabellPeriode.tom),
            }}
          />
        </Label>
      )}
      <Table size="small">
        <Table.Body>
          {tabellPeriode.andeler.map(rad => (
            <Fragment key={`andel_${rad.aktivitetStatus}`}>
              <Table.Row shadeOnHover={false}>
                <Table.DataCell textSize="small">
                  <StatusBeskrivelse andel={rad} />
                </Table.DataCell>
                <Table.DataCell textSize="small" align="right">
                  {rad.erFerdigBeregnet ? (
                    <BeløpLabel beløp={rad.inntekt} kr />
                  ) : (
                    <ErrorMessage size="small">
                      <FormattedMessage id="Dagsats.IkkeBeregnet" />
                    </ErrorMessage>
                  )}
                </Table.DataCell>
              </Table.Row>
              {!!rad.bortfaltNaturalytelse && (
                <Table.Row shadeOnHover={false}>
                  <Table.DataCell textSize="small">
                    <FormattedMessage id="Dagsats.Naturalytelser" />
                  </Table.DataCell>
                  <Table.DataCell textSize="small" align="right">
                    <BeløpLabel beløp={rad.bortfaltNaturalytelse} kr />
                  </Table.DataCell>
                </Table.Row>
              )}
              {skalViseOppsummeringsrad && (
                // TODO: Legg inn et skille over denne slik at man skjønner at det er en sum
                <Table.Row shadeOnHover={false}>
                  <Table.DataCell textSize="small">
                    <FormattedMessage id="Dagsats.TotalÅrsinntekt" />
                  </Table.DataCell>
                  <Table.DataCell textSize="small" align="right">
                    <BeløpLabel beløp={finnTotalInntekt(tabellPeriode.andeler)} kr />
                  </Table.DataCell>
                </Table.Row>
              )}
            </Fragment>
          ))}
        </Table.Body>
        {erAlleAndelerFastsatt && !erIkkeVurdert && (
          <DagsatsResultat
            tabellPeriode={tabellPeriode}
            vilkårsperiode={vilkårsperiode}
            beregningsgrunnlag={beregningsgrunnlag}
          />
        )}
      </Table>
    </VStack>
  );
};

export const StatusBeskrivelse = ({ andel }: { andel: TabellRadData }) => {
  const beskrivelseId = statusKonfigMap[andel.aktivitetStatus]?.beskrivelseId;
  return beskrivelseId ? <FormattedMessage id={beskrivelseId} /> : 'Ukjent andel';
};
