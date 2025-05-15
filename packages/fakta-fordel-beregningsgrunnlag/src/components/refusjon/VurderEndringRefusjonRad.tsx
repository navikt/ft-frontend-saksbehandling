import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, VStack } from '@navikt/ds-react';

import { Datepicker, InputField } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, hasValidDate, maxValueFormatted, required } from '@navikt/ft-form-validators';
import { ArbeidsgiverOpplysningerPerId, RefusjonTilVurderingAndel } from '@navikt/ft-types';
import { BTag, dateFormat, formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import { VurderRefusjonFormValues, VurderRefusjonValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { VurderRefusjonAndelTransformedValues } from '../../types/interface/VurderRefusjonBeregningsgrunnlagAP';
import { createVisningsnavnForAktivitetRefusjon } from '../util/visningsnavnHelper';

import styles from './vurderEndringRefusjonRad.module.css';

const FIELD_KEY_REFUSJONSTART = 'REFUSJON_ENDRING_DATO';
const FIELD_KEY_DELVIS_REF = 'DELVIS_REFUSJON_FØR_START_BELØP';

const lagNøkkel = (prefix: string, andel: RefusjonTilVurderingAndel): string => {
  if (!andel.arbeidsgiver) {
    return `${prefix}${andel.aktivitetStatus}${andel.internArbeidsforholdRef})`;
  }
  if (andel.arbeidsgiver.arbeidsgiverOrgnr) {
    return `${prefix}${andel.arbeidsgiver.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef}`;
  }
  return `${prefix}${andel.arbeidsgiver.arbeidsgiverAktørId}${andel.internArbeidsforholdRef}`;
};

const lagNøkkelRefusjonsstart = (andel: RefusjonTilVurderingAndel): string => lagNøkkel(FIELD_KEY_REFUSJONSTART, andel);
const lagNøkkelDelvisRefusjon = (andel: RefusjonTilVurderingAndel): string => lagNøkkel(FIELD_KEY_DELVIS_REF, andel);

const erValgtDatoLikSTP = (stp: string, verdiFraForm?: string): boolean => {
  if (!verdiFraForm) {
    return false;
  }
  return new Date(verdiFraForm).getTime() === new Date(stp).getTime();
};

type Props = {
  refusjonAndel: RefusjonTilVurderingAndel;
  readOnly: boolean;
  erAksjonspunktÅpent: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  skjæringstidspunkt: string;
  formName: string;
  vilkårperiodeFieldIndex: number;
};

export const VurderEndringRefusjonRad = ({
  refusjonAndel,
  readOnly,
  erAksjonspunktÅpent,
  arbeidsgiverOpplysningerPerId,
  skjæringstidspunkt,
  vilkårperiodeFieldIndex,
}: Props) => {
  const navn = createVisningsnavnForAktivitetRefusjon(refusjonAndel, arbeidsgiverOpplysningerPerId);
  const andelTekst = refusjonAndel.skalKunneFastsetteDelvisRefusjon
    ? 'BeregningInfoPanel.RefusjonBG.TidligereRefusjon'
    : 'BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon';
  const formMethods = useFormContext<VurderRefusjonFormValues>();
  const valgtStartdato = formMethods.watch(
    `VURDER_REFUSJON_BERGRUNN_FORM.${vilkårperiodeFieldIndex}.${lagNøkkelRefusjonsstart(refusjonAndel)}`,
  );
  const aksjonspunktErLøstUtenDelvisRef =
    !erAksjonspunktÅpent &&
    !refusjonAndel.fastsattDelvisRefusjonPrMnd &&
    refusjonAndel.fastsattDelvisRefusjonPrMnd !== 0;
  const harValgtRefusjonFraStart = erValgtDatoLikSTP(skjæringstidspunkt, valgtStartdato);
  const skalKunneFastsetteDelvisRef =
    refusjonAndel.skalKunneFastsetteDelvisRefusjon && refusjonAndel.maksTillattDelvisRefusjonPrMnd;
  return (
    <VStack>
      <BodyShort>
        <FormattedMessage
          id={andelTekst}
          values={{
            ag: navn,
            dato: dateFormat(refusjonAndel.nyttRefusjonskravFom),
            b: BTag,
          }}
        />
      </BodyShort>
      <HStack gap="6">
        <div className={styles.tekstMidtstilt}>
          <BodyShort>
            <FormattedMessage id="BeregningInfoPanel.RefusjonBG.RefusjonFra" />
          </BodyShort>
        </div>
        <Datepicker
          name={`VURDER_REFUSJON_BERGRUNN_FORM.${vilkårperiodeFieldIndex}.${lagNøkkelRefusjonsstart(refusjonAndel)}`}
          isReadOnly={readOnly}
          validate={
            readOnly ? [] : [required, hasValidDate, dateAfterOrEqual(refusjonAndel.tidligsteMuligeRefusjonsdato)]
          }
          isEdited={!!refusjonAndel.fastsattNyttRefusjonskravFom && !erAksjonspunktÅpent}
        />
      </HStack>
      {skalKunneFastsetteDelvisRef && !harValgtRefusjonFraStart && !aksjonspunktErLøstUtenDelvisRef && (
        <HStack gap="6">
          <div className={styles.tekstMidtstilt}>
            <BodyShort>
              <FormattedMessage id="BeregningInfoPanel.RefusjonBG.DelvisPrMnd" />
            </BodyShort>
          </div>
          <InputField
            name={`VURDER_REFUSJON_BERGRUNN_FORM.${vilkårperiodeFieldIndex}.${lagNøkkelDelvisRefusjon(refusjonAndel)}`}
            className={styles.bredde}
            validate={readOnly ? [] : [required, maxValueFormatted(refusjonAndel.maksTillattDelvisRefusjonPrMnd)]}
            parse={parseCurrencyInput}
            readOnly={readOnly}
            isEdited={!!refusjonAndel.fastsattDelvisRefusjonPrMnd && !erAksjonspunktÅpent}
          />
        </HStack>
      )}
    </VStack>
  );
};

VurderEndringRefusjonRad.buildInitialValues = (refusjonAndel: RefusjonTilVurderingAndel): VurderRefusjonValues => {
  const initialValues: VurderRefusjonValues = {};
  initialValues[lagNøkkelRefusjonsstart(refusjonAndel)] = refusjonAndel.fastsattNyttRefusjonskravFom ?? '';
  initialValues[lagNøkkelDelvisRefusjon(refusjonAndel)] =
    formatCurrencyNoKr(refusjonAndel.fastsattDelvisRefusjonPrMnd) ?? '';
  return initialValues;
};

VurderEndringRefusjonRad.transformValues = (
  values: VurderRefusjonValues,
  andel: RefusjonTilVurderingAndel,
  skjæringstidspunkt: string,
): VurderRefusjonAndelTransformedValues => {
  const datoNøkkel = lagNøkkelRefusjonsstart(andel);
  const fastsattDato = values[datoNøkkel];
  let delvisRefusjonPrMnd;
  if (andel.skalKunneFastsetteDelvisRefusjon && fastsattDato !== skjæringstidspunkt) {
    const delvisNøkkel = lagNøkkelDelvisRefusjon(andel);
    delvisRefusjonPrMnd = removeSpacesFromNumber(values[delvisNøkkel]);
  }
  return {
    arbeidsgiverOrgnr: andel.arbeidsgiver?.arbeidsgiverOrgnr,
    arbeidsgiverAktoerId: andel.arbeidsgiver?.arbeidsgiverAktørId,
    internArbeidsforholdRef: andel.internArbeidsforholdRef,
    fastsattRefusjonFom: fastsattDato,
    delvisRefusjonPrMndFørStart: delvisRefusjonPrMnd,
  };
};
