import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';
import moment from 'moment';

import { SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import { FeilutbetalingÅrsak } from '../types/FeilutbetalingÅrsak';
import { FeilutbetalingFakta } from '../types/FeilutbetalingFakta';
import { KodeverkFpTilbakeForPanel } from '../types/KodeverkFpTilbakeForPanelFtf';

import styles from './feilutbetalingPerioderFieldArray.module.css';

const FIELD_ARRAY_NAME = 'perioder';

const getHendelseUndertyper = (
  årsaker: FeilutbetalingÅrsak['hendelseTyper'],
  årsakNavn?: string,
): string[] | undefined => {
  const årsak = årsaker.find(a => a.hendelseType === årsakNavn);
  return årsak?.hendelseUndertyper && årsak.hendelseUndertyper.length > 0 ? årsak.hendelseUndertyper : undefined;
};

export type FormValues = {
  perioder: {
    fom: string;
    tom: string;
    årsak?: string;
  }[];
};

type Props = {
  perioder: FeilutbetalingFakta['behandlingFakta']['perioder'];
  årsaker: FeilutbetalingÅrsak['hendelseTyper'];
  readOnly: boolean;
  behandlePerioderSamlet: boolean;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
};

export const FeilutbetalingPerioderFieldArray = ({
  perioder,
  årsaker,
  readOnly,
  behandlePerioderSamlet,
  kodeverkSamlingFpTilbake,
}: Props) => {
  const { control, watch, setValue, getValues } = useFormContext<FormValues>();
  const { fields } = useFieldArray({
    control,
    name: FIELD_ARRAY_NAME,
  });

  const settAndreFelter = (verdi: string, index: number, årsak?: string) => {
    if (behandlePerioderSamlet) {
      fields.forEach((_f, fieldIndex) => {
        if (index !== fieldIndex) {
          if (årsak) {
            const feltÅrsak = getValues(`${FIELD_ARRAY_NAME}.${fieldIndex}.årsak`);
            if (feltÅrsak === årsak) {
              // @ts-expect-error Fiks. Må legge til årsak.underÅrsak i FormValues
              setValue(`${FIELD_ARRAY_NAME}.${fieldIndex}.${årsak}.underÅrsak`, verdi);
            }
          } else {
            setValue(`${FIELD_ARRAY_NAME}.${fieldIndex}.årsak`, verdi);
          }
        }
      });
    }
  };

  return (
    <div className={styles.feilutbetalingTable}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="FeilutbetalingInfoPanel.Period" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="FeilutbetalingInfoPanel.Hendelse" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="FeilutbetalingInfoPanel.Beløp" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fields.map((periode, index) => {
            const årsak = watch(`${FIELD_ARRAY_NAME}.${index}.årsak`);
            const hendelseUndertyper = getHendelseUndertyper(årsaker, årsak);
            return (
              <Table.Row key={periode.id}>
                <Table.DataCell>
                  {`${moment(periode.fom).format(DDMMYYYY_DATE_FORMAT)} - ${moment(periode.tom).format(
                    DDMMYYYY_DATE_FORMAT,
                  )}`}
                </Table.DataCell>
                <Table.DataCell>
                  <SelectField
                    name={`${FIELD_ARRAY_NAME}.${index}.årsak`}
                    selectValues={årsaker.map(a => (
                      <option key={a.hendelseType} value={a.hendelseType}>
                        {
                          kodeverkSamlingFpTilbake[KodeverkType.HENDELSE_TYPE].find(ht => ht.kode === a.hendelseType)
                            ?.navn
                        }
                      </option>
                    ))}
                    validate={[required]}
                    disabled={readOnly}
                    onChange={event => settAndreFelter(event.target.value, index)}
                    label=""
                  />
                  {hendelseUndertyper && (
                    <SelectField
                      name={`${FIELD_ARRAY_NAME}.${index}.${årsak}.underÅrsak`}
                      selectValues={hendelseUndertyper.map(a => (
                        <option key={a} value={a}>
                          {kodeverkSamlingFpTilbake[KodeverkType.HENDELSE_UNDERTYPE].find(hu => hu.kode === a)?.navn}
                        </option>
                      ))}
                      validate={[required]}
                      disabled={readOnly}
                      onChange={event => settAndreFelter(event.target.value, index, årsak)}
                      label=""
                    />
                  )}
                </Table.DataCell>
                <Table.DataCell className={styles.redText}>{perioder ? perioder[index].belop : null} </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
