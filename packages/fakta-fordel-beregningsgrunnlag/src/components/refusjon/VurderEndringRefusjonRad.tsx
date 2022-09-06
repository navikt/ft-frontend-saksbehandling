import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';
import {
  hasValidDate,
  required,
  dateAfterOrEqual,
  minValueFormatted,
  maxValueFormatted,
} from '@navikt/ft-form-validators';
import { dateFormat, parseCurrencyInput, removeSpacesFromNumber, formatCurrencyNoKr } from '@navikt/ft-utils';
import { Datepicker, InputField, formHooks } from '@navikt/ft-form-hooks';
import { ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingAndel } from '@navikt/ft-types';

import { VurderRefusjonAndelTransformedValues } from '../../types/interface/VurderRefusjonBeregningsgrunnlagAP';
import { createVisningsnavnForAktivitetRefusjon } from '../util/visningsnavnHelper';
import { VurderRefusjonFormValues, VurderRefusjonValues } from '../../types/FordelBeregningsgrunnlagPanelValues';

import styles from './vurderEndringRefusjonRad.less';

const FIELD_KEY_REFUSJONSTART = 'REFUSJON_ENDRING_DATO';
const FIELD_KEY_DELVIS_REF = 'DELVIS_REFUSJON_FØR_START_BELØP';

const lagNøkkel = (prefix: string, andel: RefusjonTilVurderingAndel): string => {
  if (andel.arbeidsgiver.arbeidsgiverOrgnr) {
    return `${prefix}${andel.arbeidsgiver.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef}`;
  }
  return `${prefix}${andel.arbeidsgiver.arbeidsgiverAktørId}${andel.internArbeidsforholdRef}`;
};

export const lagNøkkelRefusjonsstart = (andel: RefusjonTilVurderingAndel): string =>
  lagNøkkel(FIELD_KEY_REFUSJONSTART, andel);
export const lagNøkkelDelvisRefusjon = (andel: RefusjonTilVurderingAndel): string =>
  lagNøkkel(FIELD_KEY_DELVIS_REF, andel);

const erValgtDatoLikSTP = (stp: string, verdiFraForm?: string): boolean => {
  if (!verdiFraForm) {
    return false;
  }
  return new Date(verdiFraForm).getTime() === new Date(stp).getTime();
};

type OwnProps = {
  refusjonAndel?: RefusjonTilVurderingAndel;
  readOnly: boolean;
  erAksjonspunktÅpent: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  skjæringstidspunkt: string;
  formName: string;
  vilkårperiodeFieldIndex: number;
};

interface StaticFunctions {
  buildInitialValues: (andel: RefusjonTilVurderingAndel) => VurderRefusjonValues;
  transformValues: (
    values: VurderRefusjonValues,
    andel: RefusjonTilVurderingAndel,
    skjæringstidspunkt: string,
  ) => VurderRefusjonAndelTransformedValues;
}

export const VurderEndringRefusjonRad: FunctionComponent<OwnProps> & StaticFunctions = ({
  refusjonAndel,
  readOnly,
  erAksjonspunktÅpent,
  arbeidsgiverOpplysningerPerId,
  skjæringstidspunkt,
  vilkårperiodeFieldIndex,
}) => {
  if (!refusjonAndel) {
    return null;
  }
  const navn = createVisningsnavnForAktivitetRefusjon(refusjonAndel, arbeidsgiverOpplysningerPerId);
  const andelTekst = refusjonAndel.skalKunneFastsetteDelvisRefusjon
    ? 'BeregningInfoPanel.RefusjonBG.TidligereRefusjon'
    : 'BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon';
  const formMethods = formHooks.useFormContext<VurderRefusjonFormValues>();
  const valgtStartdato = formMethods.watch(
    `VURDER_REFUSJON_BERGRUNN_FORM.${vilkårperiodeFieldIndex}.${lagNøkkelRefusjonsstart(refusjonAndel)}`,
  );
  const erRefusjonFraStart = erValgtDatoLikSTP(skjæringstidspunkt, valgtStartdato);
  const boldTransformator = useCallback(chunks => <b>{chunks}</b>, []);
  return (
    <>
      <Row>
        <Column xs="8">
          <FormattedMessage
            id={andelTekst}
            values={{
              ag: navn,
              dato: dateFormat(refusjonAndel.nyttRefusjonskravFom),
              b: boldTransformator,
            }}
          />
        </Column>
      </Row>
      <Row>
        <Column xs="4">
          <Normaltekst className={styles.marginTopp}>
            <FormattedMessage id="BeregningInfoPanel.RefusjonBG.RefusjonFra" />
          </Normaltekst>
        </Column>
        <Column xs="4">
          <Datepicker
            name={`VURDER_REFUSJON_BERGRUNN_FORM.${vilkårperiodeFieldIndex}.${lagNøkkelRefusjonsstart(refusjonAndel)}`}
            isReadOnly={readOnly}
            validate={[required, hasValidDate, dateAfterOrEqual(refusjonAndel.tidligsteMuligeRefusjonsdato)]}
            isEdited={!!refusjonAndel.fastsattNyttRefusjonskravFom && !erAksjonspunktÅpent}
          />
        </Column>
      </Row>
      {refusjonAndel.skalKunneFastsetteDelvisRefusjon && !erRefusjonFraStart && (
        <Row>
          <Column xs="4">
            <Normaltekst className={styles.marginTopp}>
              <FormattedMessage id="BeregningInfoPanel.RefusjonBG.DelvisPrMnd" />
            </Normaltekst>
          </Column>
          <Column xs="4">
            <InputField
              name={`VURDER_REFUSJON_BERGRUNN_FORM.${vilkårperiodeFieldIndex}.${lagNøkkelDelvisRefusjon(
                refusjonAndel,
              )}`}
              className={styles.bredde}
              validate={[
                required,
                minValueFormatted(1),
                maxValueFormatted(refusjonAndel.maksTillattDelvisRefusjonPrMnd),
              ]}
              parse={parseCurrencyInput}
              readOnly={readOnly}
              isEdited={!!refusjonAndel.fastsattDelvisRefusjonPrMnd && !erAksjonspunktÅpent}
            />
          </Column>
        </Row>
      )}
    </>
  );
};

VurderEndringRefusjonRad.buildInitialValues = (refusjonAndel: RefusjonTilVurderingAndel): VurderRefusjonValues => {
  const initialValues = {};
  initialValues[lagNøkkelRefusjonsstart(refusjonAndel)] = refusjonAndel.fastsattNyttRefusjonskravFom;
  initialValues[lagNøkkelDelvisRefusjon(refusjonAndel)] = formatCurrencyNoKr(refusjonAndel.fastsattDelvisRefusjonPrMnd);
  return initialValues;
};

VurderEndringRefusjonRad.transformValues = (
  values: VurderRefusjonValues,
  andel: RefusjonTilVurderingAndel,
  skjæringstidspunkt: string,
): VurderRefusjonAndelTransformedValues => {
  const datoNøkkel = lagNøkkelRefusjonsstart(andel);
  const fastsattDato = values[datoNøkkel];
  let delvisRefusjonPrMnd = null;
  if (andel.skalKunneFastsetteDelvisRefusjon && fastsattDato !== skjæringstidspunkt) {
    const delvisNøkkel = lagNøkkelDelvisRefusjon(andel);
    delvisRefusjonPrMnd = removeSpacesFromNumber(values[delvisNøkkel]);
  }
  return {
    arbeidsgiverOrgnr: andel.arbeidsgiver.arbeidsgiverOrgnr,
    arbeidsgiverAktoerId: andel.arbeidsgiver.arbeidsgiverAktørId,
    internArbeidsforholdRef: andel.internArbeidsforholdRef,
    fastsattRefusjonFom: fastsattDato,
    delvisRefusjonPrMndFørStart: delvisRefusjonPrMnd,
  };
};

export default VurderEndringRefusjonRad;
