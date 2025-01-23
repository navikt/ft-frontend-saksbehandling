import { BodyShort, Button, Heading, HStack } from '@navikt/ds-react';
import dayjs from 'dayjs';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Form, RadioGroupPanel, SelectField, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { TilbakekrevingKodeverkType } from '@navikt/ft-kodeverk';
import { FeilutbetalingPerioderWrapper, KodeverkMedNavn } from '@navikt/ft-types';
import { usePrevious, VerticalSpacer, WarningModal } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, decodeHtmlEntity, formatCurrencyNoKr } from '@navikt/ft-utils';

import { Aktsomhet, AKTSOMHET_REKKEFØLGE } from '../kodeverk/aktsomhet';
import { SærligGrunn } from '../kodeverk/særligGrunn';
import { VilkårResultat } from '../kodeverk/vilkarResultat';
import { DataForPeriode } from '../types/DataForPeriode';
import {
  AktsomhetFormPanel,
  InitialValuesAktsomhetForm,
} from './tilbakekrevingPeriodePaneler/aktsomhet/AktsomhetFormPanel';
import { ForeldetFormPanel } from './tilbakekrevingPeriodePaneler/ForeldetFormPanel';
import {
  BelopetMottattIGodTroFormPanel,
  InitialValuesGodTroForm,
} from './tilbakekrevingPeriodePaneler/godTro/BelopetMottattIGodTroFormPanel';
import { TilbakekrevingAktivitetTabell } from './tilbakekrevingPeriodePaneler/TilbakekrevingAktivitetTabell';

import { KodeverkFpTilbakeForPanel } from '../types/KodeverkFpTilbakeForPanel';
import styles from './tilbakekrevingPeriodeForm.module.css';
import { DetaljertFeilutbetalingPeriode } from '../types/DetaljerteFeilutbetalingsperioder';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

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
  [VilkårResultat.FEIL_OPPLYSNINGER]?: InitialValuesAktsomhetForm;
  [VilkårResultat.FORSTO_BURDE_FORSTAATT]?: InitialValuesAktsomhetForm;
  [VilkårResultat.MANGELFULL_OPPLYSNING]?: InitialValuesAktsomhetForm;
  [VilkårResultat.GOD_TRO]?: InitialValuesGodTroForm;
}

export type CustomVilkarsVurdertePeriode = {
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm;

export interface Props {
  data: DataForPeriode;
  periode?: CustomVilkarsVurdertePeriode;
  skjulPeriode: (...args: any[]) => any;
  readOnly: boolean;
  oppdaterPeriode: (...args: any[]) => any;
  vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[];
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  antallPerioderMedAksjonspunkt: number;
}

export const TilbakekrevingPeriodeForm = ({
  data,
  periode,
  skjulPeriode,
  readOnly,
  oppdaterPeriode,
  vilkarsVurdertePerioder,
  kodeverkSamlingFpTilbake,
  antallPerioderMedAksjonspunkt,
}: Props) => {
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
    `${valgtVilkarResultatType}.${handletUaktsomhetsgrad}.${SærligGrunn.ANNET}`,
  );
  const erBelopetIBehold = formMethods.watch(`${valgtVilkarResultatType}.erBelopetIBehold`);

  const forrigeVilkarResultatType = usePrevious(valgtVilkarResultatType);
  const forrigeHandletUaktsomhetsgrad = usePrevious(handletUaktsomhetsgrad);

  const reduserteBelop = data.redusertBeloper;
  const sarligGrunnTyper = kodeverkSamlingFpTilbake[TilbakekrevingKodeverkType.SARLIG_GRUNN];
  const vilkarResultatTyper = kodeverkSamlingFpTilbake[TilbakekrevingKodeverkType.VILKAR_RESULTAT];
  const aktsomhetTyper = AKTSOMHET_REKKEFØLGE.map(a =>
    kodeverkSamlingFpTilbake[TilbakekrevingKodeverkType.AKTSOMHET].find((el: KodeverkMedNavn) => el.kode === a),
  );

  const onEndrePeriodeForKopi = (event: any, vurdertePerioder: CustomVilkarsVurdertePeriode[]) => {
    const fomTom = event.target.value.split('_');
    const kopierDenne = vurdertePerioder.find(per => per.fom === fomTom[0] && per.tom === fomTom[1]);
    const vilkårResultatType = kopierDenne?.valgtVilkarResultatType;
    // @ts-expect-error Fiks
    const resultatType = kopierDenne && vilkårResultatType ? kopierDenne[vilkårResultatType] : undefined;

    const resultatTypeKopi = JSON.parse(JSON.stringify(resultatType));
    if (vilkårResultatType !== VilkårResultat.GOD_TRO) {
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
          <SelectField
            name="perioderForKopi"
            selectValues={vurdertePerioder.map(per => {
              const perId = `${per.fom}_${per.tom}`;
              const perValue = `${dayjs(per.fom).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(per.tom).format(
                DDMMYYYY_DATE_FORMAT,
              )}`;
              return (
                <option key={perId} value={perId}>
                  {perValue}
                </option>
              );
            })}
            onChange={event => onEndrePeriodeForKopi(event, vurdertePerioder)}
            className={styles.selectWidth}
            label={<FormattedMessage id="TilbakekrevingPeriodeForm.KopierVilkårsvurdering" />}
          />
          <VerticalSpacer twentyPx />
        </>
      )}
      <HStack gap="4" wrap>
        <div className={styles.leftColumn}>
          {data.erForeldet && <ForeldetFormPanel />}
          {!data.erForeldet && (
            <>
              <Heading size="small">
                <FormattedMessage id="TilbakekrevingPeriodeForm.VilkarForTilbakekreving" />
              </Heading>
              <VerticalSpacer sixteenPx />
              <TextAreaField
                name="begrunnelse"
                label={intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.Vurdering' })}
                validate={[required, minLength3, maxLength1500, hasValidText]}
                maxLength={1500}
                readOnly={readOnly}
                className={styles.explanationTextarea}
                description={intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst' })}
              />
              <VerticalSpacer sixteenPx />
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
            </>
          )}
        </div>
        <div className={styles.rightColumn}>
          {valgtVilkarResultatType && (
            <>
              <Heading size="small">
                <FormattedMessage
                  id={
                    valgtVilkarResultatType === VilkårResultat.GOD_TRO
                      ? 'TilbakekrevingPeriodeForm.BelopetMottattIGodTro'
                      : 'TilbakekrevingPeriodeForm.Aktsomhet'
                  }
                />
              </Heading>
              <VerticalSpacer sixteenPx />
              <TextAreaField
                name="vurderingBegrunnelse"
                label={intl.formatMessage({
                  id:
                    valgtVilkarResultatType === VilkårResultat.GOD_TRO
                      ? 'TilbakekrevingPeriodeForm.VurderingMottattIGodTro'
                      : 'TilbakekrevingPeriodeForm.VurderingAktsomhet',
                })}
                validate={[required, minLength3, maxLength1500, hasValidText]}
                maxLength={1500}
                readOnly={readOnly}
              />
              <VerticalSpacer eightPx />
              {valgtVilkarResultatType === VilkårResultat.GOD_TRO && (
                <BelopetMottattIGodTroFormPanel
                  name={valgtVilkarResultatType}
                  readOnly={readOnly}
                  erBelopetIBehold={erBelopetIBehold}
                  feilutbetalingBelop={data.feilutbetaling}
                />
              )}
              {valgtVilkarResultatType !== VilkårResultat.GOD_TRO && (
                <AktsomhetFormPanel
                  key={valgtVilkarResultatType}
                  name={valgtVilkarResultatType}
                  harGrunnerTilReduksjon={harGrunnerTilReduksjon}
                  readOnly={readOnly}
                  handletUaktsomhetGrad={handletUaktsomhetsgrad}
                  resetFields={resetUtaktsomhetsgrad}
                  erSerligGrunnAnnetValgt={erSerligGrunnAnnetValgt}
                  erValgtResultatTypeForstoBurdeForstaatt={
                    valgtVilkarResultatType === VilkårResultat.FORSTO_BURDE_FORSTAATT
                  }
                  // @ts-expect-error Fiks
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
        </div>
      </HStack>
      <VerticalSpacer twentyPx />
      <HStack gap="4">
        <Button size="small" variant="primary" disabled={!formMethods.formState.isDirty || readOnly}>
          <FormattedMessage id="TilbakekrevingPeriodeForm.Oppdater" />
        </Button>
        <Button size="small" variant="secondary" onClick={skjulPeriode} type="button">
          <FormattedMessage id="TilbakekrevingPeriodeForm.Avbryt" />
        </Button>
      </HStack>
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
    vilkarResultatKode === VilkårResultat.GOD_TRO
      ? BelopetMottattIGodTroFormPanel.buildIntialValues(vilkarResultatInfo)
      : {};
  const annetData =
    vilkarResultatKode !== undefined && vilkarResultatKode !== VilkårResultat.GOD_TRO
      ? AktsomhetFormPanel.buildInitalValues(vilkarResultatInfo)
      : {};
  return {
    ...initialValues,
    // @ts-expect-error Fiks
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
  // @ts-expect-error Fiks
  const info = values[valgtVilkarResultatType];

  const godTroData =
    valgtVilkarResultatType === VilkårResultat.GOD_TRO
      ? BelopetMottattIGodTroFormPanel.transformValues(info, vurderingBegrunnelse)
      : {};
  const annetData =
    valgtVilkarResultatType !== VilkårResultat.GOD_TRO
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
