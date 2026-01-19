import { FormattedMessage } from 'react-intl';

import { Alert, BodyShort, Heading, HStack, Label, Spacer, Table, Tooltip, VStack } from '@navikt/ds-react';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { periodFormat } from '@navikt/ft-utils';

import { VilkårUtfallType } from '../../kodeverk/vilkårUtfallType';
import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { AndelInntektTabell } from './AndelInntektTabell';
import { erMidlertidigInaktiv, type TabellData } from './dagsatserUtils';

import styles from './dagsats.module.css';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  vilkarStatus: string;
  tabellPeriode: TabellData;
  skalVisePeriode: boolean;
  kodeverkSamling: KodeverkForPanel;
}

export const Dagsats = ({
  beregningsgrunnlag: { grunnbeløp, aktivitetStatus = [] },
  vilkarStatus,
  tabellPeriode,
  skalVisePeriode,
  kodeverkSamling,
}: Props) => {
  const { fom, tom, dagsats, avkortet, redusert } = tabellPeriode;
  const erOppfylt = vilkarStatus === VilkårUtfallType.OPPFYLT;
  const erIkkeOppfylt = vilkarStatus === VilkårUtfallType.IKKE_OPPFYLT;

  return (
    <VStack gap="space-12">
      {skalVisePeriode && (
        <Heading size="xsmall" level="4">
          <FormattedMessage id="Dagsats.Periode" values={{ periode: periodFormat(fom, tom) }} />
        </Heading>
      )}

      <AndelInntektTabell tabellData={tabellPeriode} kodeverkSamling={kodeverkSamling} />

      {erOppfylt && (
        <>
          {(avkortet || redusert) && (
            <Table size="small" className={styles.table}>
              <Table.Body>
                {avkortet && (
                  <Table.Row shadeOnHover={false}>
                    <Tooltip content={avkortet.utregning}>
                      <Table.DataCell textSize="small">
                        <FormattedMessage id="Dagsats.Avkortet" />
                      </Table.DataCell>
                    </Tooltip>
                    <Table.DataCell textSize="small" align="right">
                      <BeløpLabel beløp={avkortet.resultat} kr />
                    </Table.DataCell>
                  </Table.Row>
                )}
                {redusert && (
                  <Table.Row shadeOnHover={false}>
                    <Tooltip content={redusert.utregning}>
                      <Table.DataCell textSize="small">
                        <FormattedMessage id="Dagsats.Redusert" />
                      </Table.DataCell>
                    </Tooltip>
                    <Table.DataCell textSize="small" align="right">
                      <BeløpLabel beløp={redusert.resultat} kr />
                    </Table.DataCell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          )}

          {dagsats && (
            <HStack data-row-type="summary" paddingInline="space-8" gap="space-8">
              <Label size="medium">
                <FormattedMessage id="Dagsats.BeregnetDagsats" />
              </Label>
              <BodyShort size="small">({dagsats.utregning})</BodyShort>
              <Spacer />
              <Label size="small">
                <BeløpLabel beløp={dagsats.resultat} kr />
              </Label>
            </HStack>
          )}
        </>
      )}
      {erIkkeOppfylt && (
        <Alert variant="error" size="small" inline>
          <FormattedMessage
            id={
              erMidlertidigInaktiv(aktivitetStatus)
                ? 'Dagsats.VilkårIkkeOppfyltMidlertidigInaktiv'
                : 'Dagsats.VilkårIkkeOppfylt'
            }
            values={{
              grunnbeløp: <BeløpLabel beløp={grunnbeløp} kr />,
            }}
          />
        </Alert>
      )}
    </VStack>
  );
};
