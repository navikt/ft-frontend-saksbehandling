import React, { FunctionComponent } from 'react';
import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, BeregningAktivitet } from '@navikt/ft-types';
import { Normaltekst } from 'nav-frontend-typografi';
import { DateLabel, EditedIcon, PeriodLabel, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { getKodeverknavnFn, prettifyDateString } from '@navikt/ft-utils';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { Datepicker, RadioGroupPanel } from '@navikt/ft-form-hooks';
import dayjs from 'dayjs';
import styles from './vurderAktiviteterTabell.less';
import { lagAktivitetFieldId, skalVurdereAktivitet } from './VurderAktiviteterTabell';
import { createVisningsnavnFakta } from '../ArbeidsforholdHelper';

type OwnProps = {
  readOnly: boolean;
  isAvklaringsbehovClosed: boolean;
  aktivitet: BeregningAktivitet;
  alleKodeverk: AlleKodeverk;
  erOverstyrt: boolean;
  harAvklaringsbehov: boolean;
  tomDatoForAktivitetGruppe: string;
  valgtSkjæringstidspunkt: string;
  ingenAktiviterErBrukt: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldId: number;
};

const isSameOrBefore = (dato1: string, dato2: string): boolean =>
  dayjs(dato1).isSame(dayjs(dato2)) || dayjs(dato1).isBefore(dayjs(dato2));

const lagVisningsnavn = (
  aktivitet: BeregningAktivitet,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): string => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[aktivitet.arbeidsgiverIdent];
  if (!agOpplysning) {
    return aktivitet.arbeidsforholdType
      ? getKodeverknavnFn(alleKodeverk)(aktivitet.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE)
      : '';
  }
  return createVisningsnavnFakta(agOpplysning, aktivitet.eksternArbeidsforholdId);
};

const VurderAktiviteterTabellRad: FunctionComponent<OwnProps> = ({
  readOnly,
  isAvklaringsbehovClosed,
  aktivitet,
  alleKodeverk,
  erOverstyrt,
  harAvklaringsbehov,
  tomDatoForAktivitetGruppe,
  valgtSkjæringstidspunkt,
  ingenAktiviterErBrukt,
  arbeidsgiverOpplysningerPerId,
  fieldId,
}) => {
  const erValgtSkjæringstidspunktLikEllerFørTomDato = isSameOrBefore(
    valgtSkjæringstidspunkt,
    tomDatoForAktivitetGruppe,
  );

  const lagLabel = (skalBrukes: boolean) => {
    const arbeidsgiver = lagVisningsnavn(aktivitet, arbeidsgiverOpplysningerPerId, alleKodeverk);
    const dato = `${prettifyDateString(aktivitet.fom)} til ${prettifyDateString(aktivitet.tom)}`;
    return `${skalBrukes ? 'Benytt' : 'Ikke benytt'} ${arbeidsgiver} ${dato}`;
  };

  return (
    <TableRow key={lagAktivitetFieldId(aktivitet)}>
      <TableColumn className={styles.navnKol}>
        <Normaltekst>{lagVisningsnavn(aktivitet, arbeidsgiverOpplysningerPerId, alleKodeverk)}</Normaltekst>
      </TableColumn>
      <TableColumn className={styles.rowalign}>
        {!erOverstyrt && (
          <Normaltekst>
            <PeriodLabel dateStringFom={aktivitet.fom} dateStringTom={aktivitet.tom} />
          </Normaltekst>
        )}
        {erOverstyrt && (
          <>
            <DateLabel dateString={aktivitet.fom} /> -{' '}
            <Datepicker
              name={`avklarAktiviteterForm.${fieldId}.aktiviteterValues.${lagAktivitetFieldId(aktivitet)}.tom`}
              validate={[required]}
              isReadOnly={readOnly}
            />
          </>
        )}
      </TableColumn>
      <TableColumn className={styles.radios}>
        <RadioGroupPanel
          name={`avklarAktiviteterForm.${fieldId}.aktiviteterValues.${lagAktivitetFieldId(aktivitet)}.skalBrukes`}
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
            {
              value: 'false',
              label: lagLabel(false),
            },
          ]}
        />
      </TableColumn>
      {isAvklaringsbehovClosed && readOnly && (
        <TableColumn>
          {skalVurdereAktivitet(
            aktivitet,
            erOverstyrt,
            harAvklaringsbehov,
            erValgtSkjæringstidspunktLikEllerFørTomDato,
            ingenAktiviterErBrukt,
          ) && <EditedIcon />}
        </TableColumn>
      )}
    </TableRow>
  );
};
export default VurderAktiviteterTabellRad;
