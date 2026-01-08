import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, BodyShort, ErrorMessage, HStack, Label, Spacer, Table, VStack } from '@navikt/ds-react';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { BTag, periodFormat } from '@navikt/ft-utils';

import { VilkårUtfallType } from '../../kodeverk/vilkårUtfallType';
import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import type { Vilkårperiode } from '../../types/Vilkår';
import {
  erBruttoOver6G,
  erMidlertidigInaktiv,
  finnDagsats,
  finnTotalEllerAvkortetInntekt,
  finnTotalInntekt,
} from './dagsatserUtils';
import type { TabellData, TabellRadData } from './dagsatsTabell';

import styles from './dagsats.module.css';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  vilkårsperiode: Vilkårperiode;
  tabellPeriode: TabellData;
  skalVisePeriode: boolean;
  kodeverkSamling: KodeverkForPanel;
}

export const Dagsats = ({
  beregningsgrunnlag,
  vilkårsperiode,
  tabellPeriode,
  skalVisePeriode,
  kodeverkSamling,
}: Props) => {
  const erAlleAndelerFastsatt = tabellPeriode.andeler.every(andel => andel.erFerdigBeregnet);
  const harBruttoOver6G = erBruttoOver6G(tabellPeriode.andeler, beregningsgrunnlag.grunnbeløp);
  const harDekningsgradUlik100 = beregningsgrunnlag.dekningsgrad !== 100;
  const erOppfylt = vilkårsperiode.vilkarStatus === VilkårUtfallType.OPPFYLT;
  const erIkkeOppfylt = vilkårsperiode.vilkarStatus === VilkårUtfallType.IKKE_OPPFYLT;

  const totalEllerAvkortetInntekt = finnTotalEllerAvkortetInntekt(
    tabellPeriode,
    harBruttoOver6G,
    harDekningsgradUlik100,
  );

  const tabellRader = tabellPeriode.andeler.map(rad => (
    <Fragment key={`andel_${rad.aktivitetStatus}`}>
      <Table.Row>
        <Table.DataCell textSize="small">{formaterAktivitetStatus(rad, kodeverkSamling)}</Table.DataCell>
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

  if (erOppfylt && harBruttoOver6G) {
    tabellRader.push(
      <Table.Row>
        <Table.DataCell textSize="small">
          <FormattedMessage
            id="Dagsats.AvkortetOver6G"
            values={{ grunnbeløp: <BeløpLabel beløp={beregningsgrunnlag.grunnbeløp * 6} kr /> }}
          />
        </Table.DataCell>
        <Table.DataCell textSize="small" align="right">
          <BeløpLabel beløp={-finnTotalInntekt(tabellPeriode.andeler) + beregningsgrunnlag.grunnbeløp * 6} kr />
        </Table.DataCell>
      </Table.Row>,
    );
  }

  if (erOppfylt && harDekningsgradUlik100) {
    tabellRader.push(
      <Table.Row>
        <Table.DataCell textSize="small">
          <FormattedMessage id="Dagsats.Redusert" />
        </Table.DataCell>
        <Table.DataCell textSize="small" align="right">
          <BeløpLabel beløp={-finnTotalInntekt(tabellPeriode.andeler) * 0.2} kr />
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
        {erAlleAndelerFastsatt && tabellRader.length > 1 && (
          <tfoot>
            <Table.Row>
              <Table.HeaderCell textSize="small">
                <FormattedMessage
                  id="Dagsats.TotalÅrsinntekt"
                  values={{ erRedusert: harBruttoOver6G || harDekningsgradUlik100 }}
                />
              </Table.HeaderCell>
              <Table.HeaderCell textSize="small" align="right">
                <BeløpLabel beløp={totalEllerAvkortetInntekt} kr />
              </Table.HeaderCell>
            </Table.Row>
          </tfoot>
        )}
      </Table>

      {erOppfylt && erAlleAndelerFastsatt && (
        <HStack data-row-type="summary" paddingInline="space-8">
          <BodyShort size="small">
            <FormattedMessage
              id="Dagsats.BeregnetDagsats"
              values={{
                b: BTag,
                inntekt: <BeløpLabel beløp={totalEllerAvkortetInntekt} kr />,
              }}
            />
          </BodyShort>
          <Spacer />
          <Label size="small">
            <BeløpLabel beløp={finnDagsats(tabellPeriode, beregningsgrunnlag.ytelsesspesifiktGrunnlag)} kr />
          </Label>
        </HStack>
      )}
      {erIkkeOppfylt && erAlleAndelerFastsatt && (
        <Alert variant="error" size="small" inline>
          <FormattedMessage
            id={
              erMidlertidigInaktiv(beregningsgrunnlag)
                ? 'Dagsats.VilkårIkkeOppfyltMidlertidigInaktiv'
                : 'Dagsats.VilkårIkkeOppfylt'
            }
            values={{
              grunnbeløp: <BeløpLabel beløp={beregningsgrunnlag.grunnbeløp} kr />,
            }}
          />
        </Alert>
      )}
    </VStack>
  );
};

const formaterAktivitetStatus = (andel: TabellRadData, kodeverkSamling: KodeverkForPanel) => {
  const aktivitetStatus =
    kodeverkSamling['AktivitetStatus'].find(as => as.kode === andel.aktivitetStatus)?.navn ?? andel.aktivitetStatus;
  return <FormattedMessage id="Dagsats.FastsattÅrsinntekt" values={{ aktivitetStatus }} />;
};
