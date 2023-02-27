import React, { FunctionComponent } from 'react';
import moment from 'moment';

import { Table, TableRow, TableColumn } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { required } from '@navikt/ft-form-validators';
import { SelectField, formHooks } from '@navikt/ft-form-hooks';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { FeilutbetalingAarsak, FeilutbetalingFakta } from '@navikt/ft-types';

import styles from './feilutbetalingPerioderFieldArray.module.css';

const FIELD_ARRAY_NAME = 'perioder';

const headerTextCodes = [
  'FeilutbetalingInfoPanel.Period',
  'FeilutbetalingInfoPanel.Hendelse',
  'FeilutbetalingInfoPanel.Beløp',
];

const getHendelseUndertyper = (
  årsaker: FeilutbetalingAarsak['hendelseTyper'],
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

type OwnProps = {
  perioder: FeilutbetalingFakta['behandlingFakta']['perioder'];
  årsaker: FeilutbetalingAarsak['hendelseTyper'];
  readOnly: boolean;
  behandlePerioderSamlet: boolean;
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string;
};

const FeilutbetalingPerioderFieldArray: FunctionComponent<OwnProps> = ({
  perioder,
  årsaker,
  readOnly,
  behandlePerioderSamlet,
  getKodeverknavn,
}) => {
  const { control, watch, setValue, getValues } = formHooks.useFormContext<FormValues>();
  const { fields } = formHooks.useFieldArray({
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
              // @ts-ignore Fiks. Må legge til årsak.underÅrsak i FormValues
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
      <Table headerTextCodes={headerTextCodes} noHover>
        {fields.map((periode, index) => {
          const årsak = watch(`${FIELD_ARRAY_NAME}.${index}.årsak`);
          const hendelseUndertyper = getHendelseUndertyper(årsaker, årsak);
          return (
            <TableRow key={periode.id}>
              <TableColumn>
                {`${moment(periode.fom).format(DDMMYYYY_DATE_FORMAT)} - ${moment(periode.tom).format(
                  DDMMYYYY_DATE_FORMAT,
                )}`}
              </TableColumn>
              <TableColumn>
                <SelectField
                  name={`${FIELD_ARRAY_NAME}.${index}.årsak`}
                  selectValues={årsaker.map(a => (
                    <option key={a.hendelseType} value={a.hendelseType}>
                      {getKodeverknavn(a.hendelseType, KodeverkType.HENDELSE_TYPE)}
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
                        {getKodeverknavn(a, KodeverkType.HENDELSE_UNDERTYPE)}
                      </option>
                    ))}
                    validate={[required]}
                    disabled={readOnly}
                    onChange={event => settAndreFelter(event.target.value, index, årsak)}
                    label=""
                  />
                )}
              </TableColumn>
              <TableColumn className={styles.redText}>{perioder ? perioder[index].belop : null}</TableColumn>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
};

export default FeilutbetalingPerioderFieldArray;
