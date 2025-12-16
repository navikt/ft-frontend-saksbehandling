import { FormattedMessage, useIntl } from 'react-intl';

import { BriefcaseFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Heading, HStack, Table, Tag, Tooltip } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel, DateLabel, LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { BTag } from '@navikt/ft-utils';

import { formaterArbeidsgiverNullable } from '../../utils/arbeidsgiverUtils';
import { mapBeregningsgrunnlagTilArbeidsinntektVisning } from './arbeidsinntektUtils';

import styles from './arbeidsinntekt.module.css';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const Arbeidsinntekt = ({ beregningsgrunnlag, arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const arbeidsinntektVisninger = mapBeregningsgrunnlagTilArbeidsinntektVisning(
    beregningsgrunnlag,
    formaterArbeidsgiverNullable(arbeidsgiverOpplysningerPerId, intl),
  );

  if (arbeidsinntektVisninger.length === 0) {
    return null;
  }

  return (
    <div>
      <HStack gap="space-8" align="center">
        <BriefcaseFillIcon aria-hidden fontSize="1.5rem" />
        <Heading size="medium" level="3">
          <FormattedMessage id="Arbeidsinntekt.Tittel" />
        </Heading>
      </HStack>
      <Table className={styles.table}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col" textSize="small">
              <FormattedMessage id="Arbeidsinntekt.Table.TypeInntekt" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" textSize="small" align="right">
              <BodyShort size="small">
                <FormattedMessage
                  id="Arbeidsinntekt.Table.Inntektsmelding"
                  values={{
                    br: <br key="break-line" />,
                    b: BTag,
                  }}
                />
              </BodyShort>
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" align="right">
              <BodyShort size="small">
                <FormattedMessage
                  id="Arbeidsinntekt.Table.Innrapportert"
                  values={{
                    br: <br key="break-line" />,
                    b: BTag,
                  }}
                />
              </BodyShort>
            </Table.HeaderCell>

            <Table.HeaderCell scope="col" textSize="small" align="right">
              <FormattedMessage id="Arbeidsinntekt.Table.Sammenligningsgrunnlag" />
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
              defaultOpen={true}
              content={
                <div>
                  {visning.ansattPeriode?.fom && (
                    <Tooltip content={intl.formatMessage({ id: 'Arbeidsinntekt.Ansettelsesperiode' })}>
                      <BodyShort size="medium" as="span">
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
                      size="medium"
                      label={<FormattedMessage id="Arbeidsinntekt.SistEndretLonn" />}
                      value={<DateLabel dateString={visning.sisteLønnsendringsdato} />}
                    />
                  )}

                  {visning.formatertStillingsprosenter && (
                    <LabeledValue
                      size="medium"
                      label={<FormattedMessage id="Arbeidsinntekt.Stillingsprosent" />}
                      value={visning.formatertStillingsprosenter}
                    />
                  )}
                </div>
              }
            >
              <Table.DataCell>{visning.arbeidsgiverLabel}</Table.DataCell>
              <Table.DataCell align="right">
                <BeløpLabel beløp={visning.inntektsmeldingÅrsinntekt} kr />
                <IMTag />
              </Table.DataCell>
              <Table.DataCell align="right">
                <BeløpLabel beløp={visning.beregningsgrunnlagÅrsinntekt} kr />
                <AOTag />
              </Table.DataCell>
              <Table.DataCell align="right">
                <BeløpLabel beløp={visning.sammenligningsgrunnlagÅrsinntekt} kr />
              </Table.DataCell>
            </Table.ExpandableRow>
          ))}
        </Table.Body>
        <tfoot>
          <Table.Row>
            <Table.HeaderCell>
              <FormattedMessage id="Arbeidsinntekt.Table.Total" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right">
              <BeløpLabel
                beløp={arbeidsinntektVisninger.reduce(
                  (acc, { inntektsmeldingÅrsinntekt }) => acc + inntektsmeldingÅrsinntekt,
                  0,
                )}
                kr
              />
            </Table.HeaderCell>
            <Table.HeaderCell align="right">
              <BeløpLabel
                beløp={arbeidsinntektVisninger.reduce(
                  (acc, { beregningsgrunnlagÅrsinntekt }) => acc + beregningsgrunnlagÅrsinntekt,
                  0,
                )}
                kr
              />
            </Table.HeaderCell>
            <Table.HeaderCell align="right">
              <BeløpLabel
                beløp={arbeidsinntektVisninger.reduce(
                  (acc, { sammenligningsgrunnlagÅrsinntekt }) => acc + sammenligningsgrunnlagÅrsinntekt,
                  0,
                )}
                kr
              />
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </tfoot>
      </Table>
    </div>
  );
};

const AOTag = () => (
  <Tag variant="alt2" size="xsmall" aria-label="A-Ordningen" className={styles.tag}>
    AO
  </Tag>
);

const IMTag = () => (
  <Tag variant="info" size="xsmall" aria-label="Inntektsmelding" className={styles.tag}>
    IM
  </Tag>
);
