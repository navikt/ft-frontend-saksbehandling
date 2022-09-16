import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { Button, Label, BodyShort } from '@navikt/ds-react';
import { Column, Row } from 'nav-frontend-grid';

import { TextAreaField, SelectField, Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { formatCurrencyNoKr, DDMMYYYY_DATE_FORMAT, decodeHtmlEntity } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { FlexColumn, FlexRow, WarningModal, VerticalSpacer, usePrevious } from '@navikt/ft-ui-komponenter';
import { TilbakekrevingKodeverkType } from '@navikt/ft-kodeverk';
import {
  KodeverkMedNavn,
  AlleKodeverkTilbakekreving,
  FeilutbetalingPerioderWrapper,
  DetaljertFeilutbetalingPeriode,
} from '@navikt/ft-types';

import sarligGrunn from '../kodeverk/sarligGrunn';
import Aktsomhet, { AKTSOMHET_REKKEFØLGE } from '../kodeverk/aktsomhet';
import VilkarResultat from '../kodeverk/vilkarResultat';
import TilbakekrevingAktivitetTabell from './tilbakekrevingPeriodePaneler/TilbakekrevingAktivitetTabell';
import ForeldetFormPanel from './tilbakekrevingPeriodePaneler/ForeldetFormPanel';
import BelopetMottattIGodTroFormPanel, {
  InitialValuesGodTroForm,
} from './tilbakekrevingPeriodePaneler/godTro/BelopetMottattIGodTroFormPanel';
import AktsomhetFormPanel, {
  InitialValuesAktsomhetForm,
} from './tilbakekrevingPeriodePaneler/aktsomhet/AktsomhetFormPanel';
import DataForPeriode from '../types/dataForPeriodeTsType';

import styles from './tilbakekrevingPeriodeForm.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export const TILBAKEKREVING_PERIODE_FORM_NAME = 'TilbakekrevingPeriodeForm';

export type CustomPeriode = {
  fom: string;
  tom: string;
  erTotalBelopUnder4Rettsgebyr: boolean;
  foreldelseVurderingType?: string;
  begrunnelse?: string;
  harMerEnnEnYtelse?: boolean;
} & DetaljertFeilutbetalingPeriode;

export type CustomPerioder = {
  perioder: CustomPeriode[];
};

export interface InitialValuesDetailForm {
  valgtVilkarResultatType: string;
  begrunnelse: string;
  erForeldet?: boolean;
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
  vurderingBegrunnelse: string;
  harMerEnnEnYtelse: boolean;
  [VilkarResultat.FEIL_OPPLYSNINGER]?: InitialValuesAktsomhetForm;
  [VilkarResultat.FORSTO_BURDE_FORSTAATT]?: InitialValuesAktsomhetForm;
  [VilkarResultat.MANGELFULL_OPPLYSNING]?: InitialValuesAktsomhetForm;
  [VilkarResultat.GOD_TRO]?: InitialValuesGodTroForm;
}

export type CustomVilkarsVurdertePeriode = {
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm;

interface OwnProps {
  data: DataForPeriode;
  periode?: CustomVilkarsVurdertePeriode;
  skjulPeriode: (...args: any[]) => any;
  readOnly: boolean;
  oppdaterPeriode: (...args: any[]) => any;
  vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[];
  alleKodeverk: AlleKodeverkTilbakekreving;
  antallPerioderMedAksjonspunkt: number;
}

const TilbakekrevingPeriodeForm: FunctionComponent<OwnProps> = ({
  data,
  periode,
  skjulPeriode,
  readOnly,
  oppdaterPeriode,
  vilkarsVurdertePerioder,
  alleKodeverk,
  antallPerioderMedAksjonspunkt,
}) => {
  const intl = useIntl();
  const [showModal, setShowModal] = useState(false);

  const formMethods = useForm<any>({
    defaultValues: periode,
  });

  const valgtVilkarResultatType = formMethods.watch('valgtVilkarResultatType');
  const handletUaktsomhetsgrad = formMethods.watch(`${valgtVilkarResultatType}.handletUaktsomhetGrad`);
  const harGrunnerTilReduksjon = formMethods.watch(
    `${valgtVilkarResultatType}.${handletUaktsomhetsgrad}.harGrunnerTilReduksjon`,
  );
  const andelSomTilbakekreves = formMethods.watch(
    `${valgtVilkarResultatType}.${handletUaktsomhetsgrad}.andelSomTilbakekreves`,
  );
  const tilbakekrevSelvOmBeloepErUnder4Rettsgebyr = formMethods.watch(
    `${valgtVilkarResultatType}.${handletUaktsomhetsgrad}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,
  );
  const erSerligGrunnAnnetValgt = formMethods.watch(
    `${valgtVilkarResultatType}.${handletUaktsomhetsgrad}.${sarligGrunn.ANNET}`,
  );
  const erBelopetIBehold = formMethods.watch(`${valgtVilkarResultatType}.erBelopetIBehold`);

  const forrigeVilkarResultatType = usePrevious(valgtVilkarResultatType);
  const forrigeHandletUaktsomhetsgrad = usePrevious(handletUaktsomhetsgrad);

  const reduserteBelop = data.redusertBeloper;
  const sarligGrunnTyper = alleKodeverk[TilbakekrevingKodeverkType.SARLIG_GRUNN];
  const vilkarResultatTyper = alleKodeverk[TilbakekrevingKodeverkType.VILKAR_RESULTAT];
  const aktsomhetTyper = AKTSOMHET_REKKEFØLGE.map(a =>
    alleKodeverk[TilbakekrevingKodeverkType.AKTSOMHET].find((el: KodeverkMedNavn) => el.kode === a),
  );

  const onEndrePeriodeForKopi = (event: any, vurdertePerioder: CustomVilkarsVurdertePeriode[]) => {
    const fomTom = event.target.value.split('_');
    const kopierDenne = vurdertePerioder.find(per => per.fom === fomTom[0] && per.tom === fomTom[1]);
    const vilkårResultatType = kopierDenne?.valgtVilkarResultatType;
    // @ts-ignore Fiks
    const resultatType = kopierDenne && vilkårResultatType ? kopierDenne[vilkårResultatType] : undefined;

    const resultatTypeKopi = JSON.parse(JSON.stringify(resultatType));
    if (vilkårResultatType !== VilkarResultat.GOD_TRO) {
      const { handletUaktsomhetGrad } = resultatTypeKopi;
      if (
        handletUaktsomhetGrad !== Aktsomhet.FORSETT &&
        periode?.harMerEnnEnYtelse !== kopierDenne?.harMerEnnEnYtelse
      ) {
        resultatTypeKopi[handletUaktsomhetGrad].andelSomTilbakekreves = null;
        resultatTypeKopi[handletUaktsomhetGrad].andelSomTilbakekrevesManuell = null;
        resultatTypeKopi[handletUaktsomhetGrad].belopSomSkalTilbakekreves = null;
      }
    }

    formMethods.setValue('valgtVilkarResultatType', vilkårResultatType, { shouldDirty: true });
    formMethods.setValue('begrunnelse', kopierDenne?.begrunnelse, { shouldDirty: true });
    formMethods.setValue('vurderingBegrunnelse', kopierDenne?.vurderingBegrunnelse, { shouldDirty: true });
    if (vilkårResultatType) {
      formMethods.setValue(vilkårResultatType, resultatTypeKopi, { shouldDirty: true });
    }

    event.preventDefault();
  };

  const saveForm = () => {
    setShowModal(!showModal);
    oppdaterPeriode(formMethods.getValues());
  };

  const saveOrToggleModal = (values: any) => {
    if (
      antallPerioderMedAksjonspunkt > 1 &&
      data.erTotalBelopUnder4Rettsgebyr &&
      tilbakekrevSelvOmBeloepErUnder4Rettsgebyr === false
    ) {
      setShowModal(!showModal);
    } else {
      oppdaterPeriode(values);
    }
  };

  const resetVilkarresultatType = () => {
    if (forrigeVilkarResultatType) {
      formMethods.resetField(forrigeVilkarResultatType);
    }
  };

  const resetUtaktsomhetsgrad = () => {
    if (forrigeHandletUaktsomhetsgrad) {
      formMethods.resetField(`${valgtVilkarResultatType}.${forrigeHandletUaktsomhetsgrad}`);
    }
  };

  const transformToBold = useCallback((chunks: any) => <b>{chunks}</b>, []);

  const vurdertePerioder = vilkarsVurdertePerioder.filter(
    per => !per.erForeldet && per.valgtVilkarResultatType != null,
  );
  return (
    <Form formMethods={formMethods} onSubmit={saveOrToggleModal}>
      {reduserteBelop &&
        reduserteBelop.map(belop => (
          <React.Fragment key={belop.belop}>
            <BodyShort size="small">
              <FormattedMessage
                id={
                  belop.erTrekk
                    ? 'TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk'
                    : 'TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling'
                }
                values={{ belop: formatCurrencyNoKr(belop.belop), b: transformToBold }}
              />
            </BodyShort>
            <VerticalSpacer eightPx />
          </React.Fragment>
        ))}
      <TilbakekrevingAktivitetTabell ytelser={data.ytelser} />
      <VerticalSpacer twentyPx />
      {!readOnly && !data.erForeldet && vurdertePerioder.length > 0 && (
        <>
          <Row>
            <Column md="10">
              <Label size="small">
                <FormattedMessage id="TilbakekrevingPeriodeForm.KopierVilkårsvurdering" />
              </Label>
              <SelectField
                name="perioderForKopi"
                selectValues={vurdertePerioder.map(per => {
                  const perId = `${per.fom}_${per.tom}`;
                  const perValue = `${moment(per.fom).format(DDMMYYYY_DATE_FORMAT)} - ${moment(per.tom).format(
                    DDMMYYYY_DATE_FORMAT,
                  )}`;
                  return (
                    <option key={perId} value={perId}>
                      {perValue}
                    </option>
                  );
                })}
                onChange={event => onEndrePeriodeForKopi(event, vurdertePerioder)}
                label=""
              />
            </Column>
          </Row>
          <VerticalSpacer twentyPx />
        </>
      )}
      <Row>
        <Column md={data.erForeldet ? '12' : '6'}>
          <Row>
            {data.erForeldet && (
              <Column md="12">
                <ForeldetFormPanel />
              </Column>
            )}
            {!data.erForeldet && (
              <Column md="10">
                <Label size="small">
                  <FormattedMessage id="TilbakekrevingPeriodeForm.VilkarForTilbakekreving" />
                </Label>
                <VerticalSpacer eightPx />
                <TextAreaField
                  name="begrunnelse"
                  label={intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.Vurdering' })}
                  validate={[required, minLength3, maxLength1500, hasValidText]}
                  maxLength={1500}
                  readOnly={readOnly}
                  className={styles.explanationTextarea}
                  description={intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst' })}
                />
                <VerticalSpacer twentyPx />
                <RadioGroupPanel
                  name="valgtVilkarResultatType"
                  label={<FormattedMessage id="TilbakekrevingPeriodeForm.oppfylt" />}
                  validate={[required]}
                  radios={vilkarResultatTyper.map(vrt => ({
                    label: vrt.navn,
                    value: vrt.kode,
                  }))}
                  isReadOnly={readOnly}
                  onChange={resetVilkarresultatType}
                />
              </Column>
            )}
          </Row>
        </Column>
        <Column md="6">
          <Row>
            <Column md="10">
              {valgtVilkarResultatType && (
                <>
                  <Label size="small">
                    <FormattedMessage
                      id={
                        valgtVilkarResultatType === VilkarResultat.GOD_TRO
                          ? 'TilbakekrevingPeriodeForm.BelopetMottattIGodTro'
                          : 'TilbakekrevingPeriodeForm.Aktsomhet'
                      }
                    />
                  </Label>
                  <VerticalSpacer eightPx />
                  <TextAreaField
                    name="vurderingBegrunnelse"
                    label={intl.formatMessage({
                      id:
                        valgtVilkarResultatType === VilkarResultat.GOD_TRO
                          ? 'TilbakekrevingPeriodeForm.VurderingMottattIGodTro'
                          : 'TilbakekrevingPeriodeForm.VurderingAktsomhet',
                    })}
                    validate={[required, minLength3, maxLength1500, hasValidText]}
                    maxLength={1500}
                    readOnly={readOnly}
                  />
                  <VerticalSpacer eightPx />
                  {valgtVilkarResultatType === VilkarResultat.GOD_TRO && (
                    <BelopetMottattIGodTroFormPanel
                      name={valgtVilkarResultatType}
                      readOnly={readOnly}
                      erBelopetIBehold={erBelopetIBehold}
                      feilutbetalingBelop={data.feilutbetaling}
                    />
                  )}
                  {valgtVilkarResultatType !== VilkarResultat.GOD_TRO && (
                    <AktsomhetFormPanel
                      key={valgtVilkarResultatType}
                      name={valgtVilkarResultatType}
                      harGrunnerTilReduksjon={harGrunnerTilReduksjon}
                      readOnly={readOnly}
                      handletUaktsomhetGrad={handletUaktsomhetsgrad}
                      resetFields={resetUtaktsomhetsgrad}
                      erSerligGrunnAnnetValgt={erSerligGrunnAnnetValgt}
                      erValgtResultatTypeForstoBurdeForstaatt={
                        valgtVilkarResultatType === VilkarResultat.FORSTO_BURDE_FORSTAATT
                      }
                      // @ts-ignore Fiks
                      aktsomhetTyper={aktsomhetTyper}
                      sarligGrunnTyper={sarligGrunnTyper}
                      antallYtelser={data.ytelser.length}
                      feilutbetalingBelop={data.feilutbetaling}
                      erTotalBelopUnder4Rettsgebyr={data.erTotalBelopUnder4Rettsgebyr}
                      andelSomTilbakekreves={andelSomTilbakekreves}
                    />
                  )}
                </>
              )}
            </Column>
          </Row>
        </Column>
      </Row>
      <VerticalSpacer twentyPx />
      <FlexRow>
        <FlexColumn>
          <Button size="small" variant="primary" disabled={!formMethods.formState.isDirty || readOnly}>
            <FormattedMessage id="TilbakekrevingPeriodeForm.Oppdater" />
          </Button>
        </FlexColumn>
        <FlexColumn>
          <Button size="small" variant="secondary" onClick={skjulPeriode} type="button">
            <FormattedMessage id="TilbakekrevingPeriodeForm.Avbryt" />
          </Button>
        </FlexColumn>
      </FlexRow>
      {showModal && (
        <WarningModal
          bodyText={intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr' })}
          showModal
          submit={saveForm}
        />
      )}
    </Form>
  );
};

export const periodeFormBuildInitialValues = (
  periode: any,
  foreldelsePerioder: FeilutbetalingPerioderWrapper,
): InitialValuesDetailForm => {
  const { vilkarResultat, begrunnelse, vilkarResultatInfo } = periode;

  const vilkarResultatKode = vilkarResultat && vilkarResultat.kode ? vilkarResultat.kode : vilkarResultat;
  let foreldetData;
  const erForeldet = periode.erForeldet ? periode.erForeldet : periode.foreldet;
  if (erForeldet) {
    const foreldelsePeriode = foreldelsePerioder.perioder.find(p => p.fom === periode.fom && p.tom === periode.tom);
    foreldetData = {
      erForeldet,
      periodenErForeldet: true,
      foreldetBegrunnelse: foreldelsePeriode ? decodeHtmlEntity(foreldelsePeriode.begrunnelse) : undefined,
    };
  } else {
    foreldetData = { erForeldet: false, periodenErForeldet: undefined, foreldetBegrunnelse: undefined };
  }

  const initialValues = {
    valgtVilkarResultatType: vilkarResultatKode,
    begrunnelse: decodeHtmlEntity(begrunnelse),
    harMerEnnEnYtelse: periode.ytelser.length > 1,
    ...foreldetData,
  };

  const godTroData =
    vilkarResultatKode === VilkarResultat.GOD_TRO
      ? BelopetMottattIGodTroFormPanel.buildIntialValues(vilkarResultatInfo)
      : {};
  const annetData =
    vilkarResultatKode !== undefined && vilkarResultatKode !== VilkarResultat.GOD_TRO
      ? AktsomhetFormPanel.buildInitalValues(vilkarResultatInfo)
      : {};
  return {
    ...initialValues,
    // @ts-ignore Fiks
    vurderingBegrunnelse: vilkarResultatInfo ? decodeHtmlEntity(vilkarResultatInfo.begrunnelse) : undefined,
    [initialValues.valgtVilkarResultatType]: {
      ...godTroData,
      ...annetData,
    },
  };
};

export const periodeFormTransformValues = (
  values: CustomVilkarsVurdertePeriode,
  sarligGrunnTyper: KodeverkMedNavn[],
) => {
  const { valgtVilkarResultatType, begrunnelse, vurderingBegrunnelse } = values;
  // @ts-ignore Fiks
  const info = values[valgtVilkarResultatType];

  const godTroData =
    valgtVilkarResultatType === VilkarResultat.GOD_TRO
      ? BelopetMottattIGodTroFormPanel.transformValues(info, vurderingBegrunnelse)
      : {};
  const annetData =
    valgtVilkarResultatType !== VilkarResultat.GOD_TRO
      ? AktsomhetFormPanel.transformValues(info, sarligGrunnTyper, vurderingBegrunnelse)
      : {};

  return {
    begrunnelse,
    fom: values.fom,
    tom: values.tom,
    vilkarResultat: valgtVilkarResultatType,
    vilkarResultatInfo: {
      ...godTroData,
      ...annetData,
    },
  };
};

export default TilbakekrevingPeriodeForm;
