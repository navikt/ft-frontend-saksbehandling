import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Table, Tag, Tooltip } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel, DateLabel, FaktaBoks, LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { createVisningsnavnForAndel } from '../../utils/createVisningsnavnForAktivitet';
import { type ArbeidsinntektVisningBeløp, mapBeregningsgrunnlagTilArbeidsinntektVisning } from './arbeidsinntektUtils';
import { Naturalytelser } from './Naturalytelser';

import styles from './arbeidsinntekt.module.css';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  kodeverkSamling: KodeverkForPanel;
}

export const Arbeidsinntekt = ({ beregningsgrunnlag, arbeidsgiverOpplysningerPerId, kodeverkSamling }: Props) => {
  const intl = useIntl();

  const arbeidsinntektVisninger = mapBeregningsgrunnlagTilArbeidsinntektVisning(
    beregningsgrunnlag,
    createVisningsnavnForAndel(arbeidsgiverOpplysningerPerId, kodeverkSamling),
  );

  if (arbeidsinntektVisninger.length === 0) {
    return null;
  }

  const summerInntektForKey = (key: keyof ArbeidsinntektVisningBeløp) => {
    const inntekterSomSkalSummeres = arbeidsinntektVisninger.flatMap(av => (av[key] ? [av[key]] : []));
    return inntekterSomSkalSummeres.length > 0
      ? inntekterSomSkalSummeres.reduce((acc, inntekt) => acc + inntekt, 0)
      : undefined;
  };

  return (
    <FaktaBoks tittel={intl.formatMessage({ id: 'Arbeidsinntekt.Tittel' })}>
      <Table size="small" className={styles.table}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell scope="colgroup" textSize="small" align="center" colSpan={2}>
              <FormattedMessage id="Arbeidsinntekt.Table.Inntektsmelding" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="colgroup" textSize="small" align="center" colSpan={2}>
              <FormattedMessage id="Arbeidsinntekt.Table.Beregningsgrunnlag" />
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope="col" textSize="small">
              <FormattedMessage id="Arbeidsinntekt.Table.Arbeidsgiver" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" textSize="small" align="right">
              <FormattedMessage id="Tabell.Måned" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" textSize="small" align="right">
              <FormattedMessage id="Tabell.År" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" textSize="small" align="right">
              <FormattedMessage id="Tabell.Måned" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" textSize="small" align="right">
              <FormattedMessage id="Tabell.År" />
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {arbeidsinntektVisninger.map(visning => (
            <Table.ExpandableRow
              key={visning.andelsnr}
              expandOnRowClick
              togglePlacement="right"
              content={
                <div>
                  {visning.ansattPeriode?.fom && (
                    <Tooltip content={intl.formatMessage({ id: 'Arbeidsinntekt.Ansettelsesperiode' })}>
                      <BodyShort size="small" as="span">
                        <PeriodLabel
                          dateStringFom={visning.ansattPeriode.fom}
                          dateStringTom={visning.ansattPeriode.tom}
                        />
                      </BodyShort>
                    </Tooltip>
                  )}

                  {visning.sisteLønnsendringsdato && (
                    <LabeledValue
                      horizontal
                      size="small"
                      label={<FormattedMessage id="Arbeidsinntekt.SistEndretLonn" />}
                      value={<DateLabel dateString={visning.sisteLønnsendringsdato} />}
                    />
                  )}

                  {visning.formatertStillingsprosenter && (
                    <LabeledValue
                      horizontal
                      size="small"
                      label={<FormattedMessage id="Arbeidsinntekt.Stillingsprosent" />}
                      value={visning.formatertStillingsprosenter}
                    />
                  )}

                  {visning.naturalytelser && visning.naturalytelser.length > 0 && (
                    <Naturalytelser naturalytelseEndringer={visning.naturalytelser} />
                  )}
                </div>
              }
            >
              <Table.DataCell textSize="small">
                <span>{visning.andelsLabel}</span>
                {visning.erTidsbegrensetArbeidsforhold && (
                  <Tag variant="info" size="xsmall" className={styles.tidsbegrensetTag}>
                    <FormattedMessage id="Arbeidsinntekt.Tidsbegrenset" />
                  </Tag>
                )}
              </Table.DataCell>
              <Table.DataCell textSize="small" align="right">
                <BeløpLabel beløp={visning.inntektsmeldingMånedinntekt} kr />
              </Table.DataCell>
              <Table.DataCell textSize="small" align="right">
                <BeløpLabel beløp={visning.inntektsmeldingÅrsinntekt} kr />
              </Table.DataCell>
              <Table.DataCell textSize="small" align="right">
                <BeløpLabel beløp={visning.beregningsgrunnlagMånedinntekt} kr />
              </Table.DataCell>
              <Table.DataCell textSize="small" align="right">
                <BeløpLabel beløp={visning.beregningsgrunnlagÅrsinntekt} kr />
              </Table.DataCell>
            </Table.ExpandableRow>
          ))}
        </Table.Body>
        {arbeidsinntektVisninger.length > 1 && (
          <tfoot>
            <Table.Row>
              <Table.HeaderCell textSize="small">
                <FormattedMessage id="Tabell.Total" />
              </Table.HeaderCell>
              <Table.HeaderCell textSize="small" align="right">
                <BeløpLabel beløp={summerInntektForKey('inntektsmeldingMånedinntekt')} kr />
              </Table.HeaderCell>
              <Table.HeaderCell textSize="small" align="right">
                <BeløpLabel beløp={summerInntektForKey('inntektsmeldingÅrsinntekt')} kr />
              </Table.HeaderCell>
              <Table.HeaderCell textSize="small" align="right">
                <BeløpLabel beløp={summerInntektForKey('beregningsgrunnlagMånedinntekt')} kr />
              </Table.HeaderCell>
              <Table.HeaderCell textSize="small" align="right">
                <BeløpLabel beløp={summerInntektForKey('beregningsgrunnlagÅrsinntekt')} kr />
              </Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </tfoot>
        )}
      </Table>
    </FaktaBoks>
  );
};
