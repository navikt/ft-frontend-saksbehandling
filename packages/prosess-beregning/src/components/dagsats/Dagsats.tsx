import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, BodyShort, ErrorMessage, HStack, Label, Spacer, Table, VStack } from '@navikt/ds-react';

import type { AktivitetStatus, Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel, NoWrap } from '@navikt/ft-ui-komponenter';
import { BTag, periodFormat } from '@navikt/ft-utils';

import { VilkårUtfallType } from '../../kodeverk/vilkårUtfallType';
import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
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
  beregningsgrunnlag: { grunnbeløp, dekningsgrad, aktivitetStatus = [] },
  vilkarStatus,
  tabellPeriode,
  skalVisePeriode,
  kodeverkSamling,
}: Props) => {
  const harDekningsgradUlik100 = dekningsgrad !== 100;
  const erOppfylt = vilkarStatus === VilkårUtfallType.OPPFYLT;
  const erIkkeOppfylt = vilkarStatus === VilkårUtfallType.IKKE_OPPFYLT;

  const totalÅrsinntektType = harDekningsgradUlik100
    ? 'redusert'
    : tabellPeriode.harBruttoOver6G
      ? 'avkortet'
      : undefined;

  const tabellRader = tabellPeriode.andeler.map(rad => (
    <Fragment key={`andel_${rad.aktivitetStatus}`}>
      <Table.Row>
        <Table.DataCell textSize="small">
          {formaterAktivitetStatus(rad.aktivitetStatus, kodeverkSamling)}
        </Table.DataCell>
        <Table.DataCell textSize="small" align="right">
          {rad.erFerdigBeregnet ? (
            <BeløpLabel beløp={rad.inntekt} kr />
          ) : (
            <ErrorMessage size="small">
              <NoWrap>
                <FormattedMessage id="Dagsats.IkkeBeregnet" />
              </NoWrap>
            </ErrorMessage>
          )}
        </Table.DataCell>
      </Table.Row>
      {!!rad.bortfaltNaturalytelse && (
        <Table.Row>
          <Table.DataCell textSize="small">
            <FormattedMessage id="Dagsats.Naturalytelser" />
          </Table.DataCell>
          <Table.DataCell textSize="small" align="right">
            <BeløpLabel beløp={rad.bortfaltNaturalytelse} kr />
          </Table.DataCell>
        </Table.Row>
      )}
    </Fragment>
  ));

  if (erOppfylt && tabellPeriode.avkortetMed) {
    tabellRader.push(
      <Table.Row>
        <Table.DataCell textSize="small">
          <FormattedMessage
            id="Dagsats.AvkortetOver6G"
            values={{ grunnbeløp: <BeløpLabel beløp={grunnbeløp * 6} kr /> }}
          />
        </Table.DataCell>
        <Table.DataCell textSize="small" align="right">
          <BeløpLabel beløp={tabellPeriode.avkortetMed} kr />
        </Table.DataCell>
      </Table.Row>,
    );
  }

  if (erOppfylt && tabellPeriode.redusertMed) {
    tabellRader.push(
      <Table.Row>
        <Table.DataCell textSize="small">
          <FormattedMessage id="Dagsats.Redusert" />
        </Table.DataCell>
        <Table.DataCell textSize="small" align="right">
          <BeløpLabel beløp={tabellPeriode.redusertMed} kr />
        </Table.DataCell>
      </Table.Row>,
    );
  }
  return (
    <VStack gap="space-8">
      {skalVisePeriode && (
        <Label size="small" className={styles.periodeLabel}>
          <FormattedMessage
            id="Dagsats.Periode"
            values={{
              periode: periodFormat(tabellPeriode.fom, tabellPeriode.tom),
            }}
          />
        </Label>
      )}
      <Table size="small" className={styles.table}>
        <Table.Body>{tabellRader}</Table.Body>
        {!!tabellPeriode.totalInntektEtterAvkortningOgReduksjon && tabellRader.length > 1 && (
          <tfoot>
            <Table.Row>
              <Table.HeaderCell textSize="small">
                <FormattedMessage
                  id="Dagsats.TotalÅrsinntekt"
                  values={{
                    type: totalÅrsinntektType,
                  }}
                />
              </Table.HeaderCell>
              <Table.HeaderCell textSize="small" align="right">
                <BeløpLabel beløp={tabellPeriode.totalInntektEtterAvkortningOgReduksjon} kr />
              </Table.HeaderCell>
            </Table.Row>
          </tfoot>
        )}
      </Table>

      {erOppfylt && tabellPeriode.dagsats && (
        <HStack data-row-type="summary" paddingInline="space-8">
          <BodyShort size="small">
            <FormattedMessage
              id="Dagsats.BeregnetDagsats"
              values={{
                b: BTag,
                inntekt: <BeløpLabel beløp={tabellPeriode.totalInntektEtterAvkortningOgReduksjon} kr />,
              }}
            />
          </BodyShort>
          <Spacer />
          <Label size="small">
            <BeløpLabel beløp={tabellPeriode.dagsats} kr />
          </Label>
        </HStack>
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

const formaterAktivitetStatus = (status: AktivitetStatus, kodeverkSamling: KodeverkForPanel) => {
  const aktivitetStatus = kodeverkSamling['AktivitetStatus'].find(as => as.kode === status)?.navn ?? status;
  return <FormattedMessage id="Dagsats.FastsattÅrsinntekt" values={{ aktivitetStatus }} />;
};
