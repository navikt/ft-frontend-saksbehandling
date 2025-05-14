import { useIntl } from 'react-intl';

import { HStack, Table } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { Datepicker, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, hasValidDate, required } from '@navikt/ft-form-validators';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, BeregningAktivitet } from '@navikt/ft-types';
import { DateLabel, EditedIcon, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { periodFormat } from '@navikt/ft-utils';

import { KodeverkForPanel } from '../../typer/KodeverkForPanelForFb';
import { createVisningsnavnFakta } from '../../utils/ArbeidsforholdHelper';
import { lagAktivitetFieldId, skalVurdereAktivitet } from './vurderAktiviteterTabellUtils';

interface Props {
  readOnly: boolean;
  isAvklaringsbehovClosed: boolean;
  aktivitet: BeregningAktivitet;
  kodeverkSamling: KodeverkForPanel;
  erOverstyrt: boolean;
  harAvklaringsbehov: boolean;
  tomDatoForAktivitetGruppe: string;
  valgtSkjæringstidspunkt?: string;
  ingenAktiviterErBrukt: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldId: number;
}

const isSameOrBefore = (dato1: string | undefined, dato2: string): boolean =>
  dayjs(dato1).isSame(dayjs(dato2)) || dayjs(dato1).isBefore(dayjs(dato2));

const lagVisningsnavn = (
  aktivitet: BeregningAktivitet,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  kodeverkSamling: KodeverkForPanel,
): string => {
  const agOpplysning = aktivitet.arbeidsgiverIdent
    ? arbeidsgiverOpplysningerPerId[aktivitet.arbeidsgiverIdent]
    : undefined;
  if (!agOpplysning) {
    return aktivitet.arbeidsforholdType
      ? kodeverkSamling[KodeverkType.OPPTJENING_AKTIVITET_TYPE].find(oat => oat.kode === aktivitet.arbeidsforholdType)
          ?.navn || ''
      : '';
  }
  return createVisningsnavnFakta(agOpplysning, aktivitet.eksternArbeidsforholdId);
};

export const VurderAktiviteterTabellRad = ({
  readOnly,
  isAvklaringsbehovClosed,
  aktivitet,
  kodeverkSamling,
  erOverstyrt,
  harAvklaringsbehov,
  tomDatoForAktivitetGruppe,
  valgtSkjæringstidspunkt,
  ingenAktiviterErBrukt,
  arbeidsgiverOpplysningerPerId,
  fieldId,
}: Props) => {
  const intl = useIntl();
  const erValgtSkjæringstidspunktLikEllerFørTomDato = isSameOrBefore(
    valgtSkjæringstidspunkt,
    tomDatoForAktivitetGruppe,
  );

  const visningsnavn = lagVisningsnavn(aktivitet, arbeidsgiverOpplysningerPerId, kodeverkSamling);

  const lagLabel = (skalBrukes: boolean) => {
    const dato = periodFormat(aktivitet.fom, aktivitet.tom, { separator: 'til' });
    return `${skalBrukes ? 'Benytt' : 'Ikke benytt'} ${visningsnavn} ${dato}`;
  };

  return (
    <Table.Row key={lagAktivitetFieldId(aktivitet)}>
      <Table.DataCell textSize="small">{visningsnavn}</Table.DataCell>
      <Table.DataCell textSize="small">
        {!erOverstyrt && <PeriodLabel dateStringFom={aktivitet.fom} dateStringTom={aktivitet.tom} />}
        {erOverstyrt && (
          <HStack gap="2" align="center">
            <DateLabel dateString={aktivitet.fom} />
            <span>-</span>
            <Datepicker
              name={`avklarAktiviteterForm.${fieldId}.aktiviteterValues.${lagAktivitetFieldId(aktivitet)}.tom`}
              validate={[required, hasValidDate, dateAfterOrEqual(aktivitet.fom)]}
              isReadOnly={readOnly}
              size="small"
              hideLabel
            />
          </HStack>
        )}
      </Table.DataCell>
      <Table.DataCell>
        <RadioGroupPanel
          name={`avklarAktiviteterForm.${fieldId}.aktiviteterValues.${lagAktivitetFieldId(aktivitet)}.skalBrukes`}
          label={intl.formatMessage({ id: 'VurderAktiviteterTabell.Header.Benytt' })}
          validate={[required]}
          isHorizontal
          isReadOnly={
            readOnly ||
            !skalVurdereAktivitet(
              aktivitet,
              erOverstyrt,
              harAvklaringsbehov,
              erValgtSkjæringstidspunktLikEllerFørTomDato,
              ingenAktiviterErBrukt,
            )
          }
          radios={[
            {
              value: 'true',
              label: lagLabel(true),
            },
          ]}
          hideLegend
          hideRadioLabels
        />
      </Table.DataCell>
      <Table.DataCell>
        <RadioGroupPanel
          name={`avklarAktiviteterForm.${fieldId}.aktiviteterValues.${lagAktivitetFieldId(aktivitet)}.skalBrukes`}
          label={intl.formatMessage({ id: 'VurderAktiviteterTabell.Header.IkkeBenytt' })}
          validate={[required]}
          isHorizontal
          isReadOnly={
            readOnly ||
            !skalVurdereAktivitet(
              aktivitet,
              erOverstyrt,
              harAvklaringsbehov,
              erValgtSkjæringstidspunktLikEllerFørTomDato,
              ingenAktiviterErBrukt,
            )
          }
          radios={[
            {
              value: 'false',
              label: lagLabel(false),
            },
          ]}
          hideLegend
          hideRadioLabels
        />
      </Table.DataCell>
      <Table.DataCell>
        {isAvklaringsbehovClosed &&
          readOnly &&
          skalVurdereAktivitet(
            aktivitet,
            erOverstyrt,
            harAvklaringsbehov,
            erValgtSkjæringstidspunktLikEllerFørTomDato,
            ingenAktiviterErBrukt,
          ) && <EditedIcon />}
      </Table.DataCell>
    </Table.Row>
  );
};
