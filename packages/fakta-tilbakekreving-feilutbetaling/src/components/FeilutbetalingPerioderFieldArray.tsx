import { useFieldArray, useFormContext } from 'react-hook-form';

import moment from 'moment';

import { SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import { FeilutbetalingÅrsak } from '../types/FeilutbetalingÅrsak';
import { FeilutbetalingFakta } from '../types/FeilutbetalingFakta';
import { KodeverkFpTilbakeForPanel } from '../types/KodeverkFpTilbakeForPanelFtf';

import styles from './feilutbetalingPerioderFieldArray.module.css';

const FIELD_ARRAY_NAME = 'perioder';

const headerTextCodes = [
  'FeilutbetalingInfoPanel.Period',
  'FeilutbetalingInfoPanel.Hendelse',
  'FeilutbetalingInfoPanel.Beløp',
];

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
              </TableColumn>
              <TableColumn className={styles.redText}>{perioder ? perioder[index].belop : null}</TableColumn>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
};
