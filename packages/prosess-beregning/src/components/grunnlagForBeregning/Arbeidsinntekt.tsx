import { FormattedMessage, useIntl } from 'react-intl';

import { BriefcaseFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, Heading, HStack, Table, Tooltip } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel, DateLabel, LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { createVisningsnavnForAndel } from '../../utils/createVisningsnavnForAktivitet';
import { mapBeregningsgrunnlagTilArbeidsinntektVisning } from './arbeidsinntektUtils';

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

  return (
    <div>
      <HStack gap="space-8" align="center">
        <BriefcaseFillIcon aria-hidden fontSize="1.25rem" />
        <Heading size="small" level="4">
          <FormattedMessage id="Arbeidsinntekt.Tittel" />
        </Heading>
      </HStack>
      <Table size="small" className={styles.table}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell scope="colgroup" textSize="small" align="right" colSpan={2}>
              <FormattedMessage id="Arbeidsinntekt.Table.Inntektsmelding" />
              <Detail>
                <FormattedMessage id="Arbeidsinntekt.Table.Inntektsmelding.HelpText" />
              </Detail>
            </Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell scope="colgroup" textSize="small" align="right" colSpan={2}>
              <FormattedMessage id="Arbeidsinntekt.Table.Innrapportert" />
              <Detail>
                <FormattedMessage id="Arbeidsinntekt.Table.Innrapportert.HelpText" />
              </Detail>
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell scope="col" textSize="small" align="right">
              <FormattedMessage id="Tabell.Måned" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" textSize="small" align="right">
              <FormattedMessage id="Tabell.År" />
            </Table.HeaderCell>
            <Table.HeaderCell />
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
                </div>
              }
            >
              <Table.DataCell textSize="small">{visning.andelsLabel}</Table.DataCell>
              <Table.DataCell textSize="small" align="right">
                <BeløpLabel beløp={visning.inntektsmeldingMånedinntekt} kr />
              </Table.DataCell>
              <Table.DataCell textSize="small" align="right">
                <BeløpLabel beløp={visning.inntektsmeldingÅrsinntekt} kr />
              </Table.DataCell>
              <Table.DataCell />
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
                <BeløpLabel
                  beløp={arbeidsinntektVisninger.reduce(
                    (acc, { inntektsmeldingMånedinntekt }) => acc + (inntektsmeldingMånedinntekt ?? 0),
                    0,
                  )}
                  kr
                />
              </Table.HeaderCell>
              <Table.HeaderCell textSize="small" align="right">
                <BeløpLabel
                  beløp={arbeidsinntektVisninger.reduce(
                    (acc, { inntektsmeldingÅrsinntekt }) => acc + (inntektsmeldingÅrsinntekt ?? 0),
                    0,
                  )}
                  kr
                />
              </Table.HeaderCell>
              <Table.DataCell />
              <Table.HeaderCell textSize="small" align="right">
                <BeløpLabel
                  beløp={arbeidsinntektVisninger.reduce(
                    (acc, { beregningsgrunnlagMånedinntekt }) => acc + (beregningsgrunnlagMånedinntekt ?? 0),
                    0,
                  )}
                  kr
                />
              </Table.HeaderCell>
              <Table.HeaderCell textSize="small" align="right">
                <BeløpLabel
                  beløp={arbeidsinntektVisninger.reduce(
                    (acc, { beregningsgrunnlagÅrsinntekt }) => acc + (beregningsgrunnlagÅrsinntekt ?? 0),
                    0,
                  )}
                  kr
                />
              </Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </tfoot>
        )}
      </Table>
    </div>
  );
};
