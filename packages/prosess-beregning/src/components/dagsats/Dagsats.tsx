import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, Table, VStack } from '@navikt/ds-react';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { periodFormat } from '@navikt/ft-utils';

import { VilkårUtfallType } from '../../kodeverk/vilkårUtfallType';
import type { Vilkårperiode } from '../../types/Vilkår';
import { finnStatusBeskrivelse, finnTotalInntekt, sorterAndelerEtterPrioritet } from './dagsatserUtils';
import { DagsatsResultat } from './DagsatsResultat';
import type { TabellData } from './dagsatsTabell';

import styles from './dagsats.module.css';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  vilkårsperiode: Vilkårperiode;
  tabellData: TabellData;
  skalVisePeriode: boolean;
}

export const Dagsats = ({ beregningsgrunnlag, vilkårsperiode, tabellData, skalVisePeriode }: Props) => {
  sorterAndelerEtterPrioritet(tabellData.andeler);

  const erAlleAndelerFastsatt = tabellData.andeler.every(andel => andel.erFerdigBeregnet);
  const skalViseOppsummeringsrad = tabellData.andeler.length > 1 && erAlleAndelerFastsatt;
  const erIkkeVurdert = vilkårsperiode.vilkarStatus === VilkårUtfallType.IKKE_VURDERT;

  // TODO: Usikker på om tabellen er ok UU-messig. Sjekke ut om man må gjøre noe annet mtp tekststørrelser og strukturen
  // TODO: Fjerne alle BodyShort, og legg props i Table.DataCell direkte
  return (
    <VStack gap="space-8">
      {skalVisePeriode && (
        <Label size="medium">
          <FormattedMessage
            id="Dagsats.Periode"
            values={{
              periode: periodFormat(tabellData.fom, tabellData.tom),
            }}
          />
        </Label>
      )}
      <Table>
        <Table.Body>
          {tabellData.andeler.map(rad => (
            <Fragment key={`andel_${rad.aktivitetStatus}`}>
              <Table.Row>
                <Table.DataCell>
                  <FormattedMessage id={finnStatusBeskrivelse(rad)} />
                </Table.DataCell>
                <Table.DataCell align="right">
                  <BodyShort size="small" className={rad.erFerdigBeregnet ? '' : styles.kolVerdiRød}>
                    {rad.erFerdigBeregnet ? (
                      <BeløpLabel beløp={rad.inntekt} kr />
                    ) : (
                      <FormattedMessage id="Dagsats.IkkeBeregnet" />
                    )}
                  </BodyShort>
                </Table.DataCell>
              </Table.Row>
              {!!rad.bortfaltNaturalytelse && (
                <Table.Row>
                  <Table.DataCell>
                    <FormattedMessage id="Dagsats.Naturalytelser" />
                  </Table.DataCell>
                  <Table.DataCell align="right">
                    <BodyShort size="small">
                      <BeløpLabel beløp={rad.bortfaltNaturalytelse} kr />
                    </BodyShort>
                  </Table.DataCell>
                </Table.Row>
              )}
              {skalViseOppsummeringsrad && (
                // TODO: Legg inn et skille over denne slik at man skjønner at det er en sum
                <Table.Row>
                  <Table.DataCell>
                    <FormattedMessage id="Dagsats.TotalÅrsinntekt" />
                  </Table.DataCell>
                  <Table.DataCell align="right">
                    <BodyShort size="small">
                      <BeløpLabel beløp={finnTotalInntekt(tabellData.andeler)} />
                    </BodyShort>
                  </Table.DataCell>
                </Table.Row>
              )}
            </Fragment>
          ))}
        </Table.Body>
        {erAlleAndelerFastsatt && !erIkkeVurdert && (
          <DagsatsResultat
            tabellData={tabellData}
            vilkårsperiode={vilkårsperiode}
            beregningsgrunnlag={beregningsgrunnlag}
          />
        )}
      </Table>
    </VStack>
  );
};
