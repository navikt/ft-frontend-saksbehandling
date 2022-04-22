import React, { FunctionComponent } from 'react';
import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, BeregningAktivitet } from '@navikt/ft-types';
import { Normaltekst } from 'nav-frontend-typografi';
import {
  DateLabel, EditedIcon, PeriodLabel, TableColumn, TableRow,
} from '@navikt/ft-ui-komponenter';
import { getKodeverknavnFn, required } from '@navikt/ft-utils';
import moment from 'moment';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { Datepicker, RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import styles from './vurderAktiviteterTabell.less';
import { lagAktivitetFieldId, skalVurdereAktivitet } from './VurderAktiviteterTabell';
import { createVisningsnavnFakta } from '../ArbeidsforholdHelper';

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  aktivitet: BeregningAktivitet;
  alleKodeverk: AlleKodeverk;
  erOverstyrt: boolean;
  harAksjonspunkt: boolean;
  tomDatoForAktivitetGruppe: string;
  valgtSkjæringstidspunkt: string;
  ingenAktiviterErBrukt: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldId: number;
};

const isSameOrBefore = (dato1: string, dato2: string): boolean => moment(dato1).isSameOrBefore(moment(dato2));

const lagVisningsnavn = (aktivitet: BeregningAktivitet,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk): string => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[aktivitet.arbeidsgiverIdent];
  if (!agOpplysning) {
    return aktivitet.arbeidsforholdType
      ? getKodeverknavnFn(alleKodeverk)(aktivitet.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE) : '';
  }
  return createVisningsnavnFakta(agOpplysning, aktivitet.eksternArbeidsforholdId);
};

const VurderAktiviteterTabellRad: FunctionComponent<OwnProps> = ({
  readOnly,
  isAksjonspunktClosed,
  aktivitet,
  alleKodeverk,
  erOverstyrt,
  harAksjonspunkt,
  tomDatoForAktivitetGruppe,
  valgtSkjæringstidspunkt,
  ingenAktiviterErBrukt,
  arbeidsgiverOpplysningerPerId,
  fieldId,
}) => {
  const erValgtSkjæringstidspunktLikEllerFørTomDato = isSameOrBefore(valgtSkjæringstidspunkt, tomDatoForAktivitetGruppe);
  return (
    <TableRow key={lagAktivitetFieldId(aktivitet)}>
      <TableColumn className={styles.navnKol}>
        <Normaltekst>
          {lagVisningsnavn(aktivitet, arbeidsgiverOpplysningerPerId, alleKodeverk)}
        </Normaltekst>
      </TableColumn>
      <TableColumn className={styles.rowalign}>
        {!erOverstyrt
        && (
          <Normaltekst>
            <PeriodLabel dateStringFom={aktivitet.fom} dateStringTom={aktivitet.tom} />
          </Normaltekst>
        )}
        {erOverstyrt
        && (
          <>
            <DateLabel dateString={aktivitet.fom} />
            {' '}
            -
            {' '}
            <Datepicker
              name={`avklarAktiviteterForm.${fieldId}.aktiviteterValues.${lagAktivitetFieldId(aktivitet)}.tom`}
              validate={[required]}
              isReadOnly={readOnly}
            />
          </>
        )}
      </TableColumn>
      <TableColumn className={styles.radioMiddle}>
        <RadioGroupField
          validate={[required]}
          name={`avklarAktiviteterForm.${fieldId}.aktiviteterValues.${lagAktivitetFieldId(aktivitet)}.skalBrukes`}
          readOnly={readOnly || !skalVurdereAktivitet(aktivitet, erOverstyrt, harAksjonspunkt,
            erValgtSkjæringstidspunktLikEllerFørTomDato, ingenAktiviterErBrukt)}
        >
          {[<RadioOption label="" key={`lagAktivitetFieldId.${lagAktivitetFieldId(aktivitet)}.bruk`} value="true" />,
            <RadioOption label="" key={`lagAktivitetFieldId.${lagAktivitetFieldId(aktivitet)}.ikkeBruk`} value="false" />]}
        </RadioGroupField>
      </TableColumn>
      {isAksjonspunktClosed && readOnly
      && (
        <TableColumn>
          {skalVurdereAktivitet(aktivitet, erOverstyrt, harAksjonspunkt,
            erValgtSkjæringstidspunktLikEllerFørTomDato, ingenAktiviterErBrukt)
          && <EditedIcon />}
        </TableColumn>
      )}
    </TableRow>
  );
};
export default VurderAktiviteterTabellRad;
