import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, Heading, HStack, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { RhfForm, RhfRadioGroup, RhfSelect, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { usePrevious } from '@navikt/ft-ui-komponenter';
import { BTag, DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr } from '@navikt/ft-utils';

import { Aktsomhet, AKTSOMHET_REKKEFØLGE } from '../kodeverk/aktsomhet';
import { SærligGrunn } from '../kodeverk/særligGrunn';
import { VilkårResultat } from '../kodeverk/vilkarResultat';
import type { DataForPeriode } from '../types/DataForPeriode';
import type { DetaljertFeilutbetalingPeriode } from '../types/DetaljerteFeilutbetalingsperioder';
import type { KodeverkTilbakeForPanel } from '../types/KodeverkTilbakeForPanel';
import {
  AktsomhetFormPanel,
  type InitialValuesAktsomhetForm,
} from './tilbakekrevingPeriodePaneler/aktsomhet/AktsomhetFormPanel';
import { ForeldetFormPanel } from './tilbakekrevingPeriodePaneler/ForeldetFormPanel';
import {
  BelopetMottattIGodTroFormPanel,
  type InitialValuesGodTroForm,
} from './tilbakekrevingPeriodePaneler/godTro/BelopetMottattIGodTroFormPanel';
import { TilbakekrevingAktivitetTabell } from './tilbakekrevingPeriodePaneler/TilbakekrevingAktivitetTabell';
import { TotalbelopetUnder4RettsgebyrModal } from './TotalbelopetUnder4RettsgebyrModal';

import styles from './tilbakekrevingPeriodeForm.module.css';

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
  skjulPeriode: () => void;
  readOnly: boolean;
  oppdaterPeriode: (values: CustomVilkarsVurdertePeriode) => void;
  vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[];
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
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

  // TODO (TOR) Fiks type for form
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
  const sarligGrunnTyper = kodeverkSamlingFpTilbake['SærligGrunn'];
  const vilkarResultatTyper = kodeverkSamlingFpTilbake['VilkårResultat'];
  const aktsomhetTyper = AKTSOMHET_REKKEFØLGE.map(a => kodeverkSamlingFpTilbake['Aktsomhet'].find(el => el.kode === a));

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

  const vurdertePerioder = vilkarsVurdertePerioder.filter(
    per => !per.erForeldet && per.valgtVilkarResultatType != null,
  );
  return (
    <RhfForm formMethods={formMethods} onSubmit={saveOrToggleModal}>
      <VStack gap="4">
        <VStack gap="2">
          {reduserteBelop &&
            reduserteBelop.map(belop => (
              <BodyShort size="small" key={belop.belop}>
                <FormattedMessage
                  id={
                    belop.erTrekk
                      ? 'TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk'
                      : 'TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling'
                  }
                  values={{ belop: formatCurrencyNoKr(belop.belop), b: BTag }}
                />
              </BodyShort>
            ))}
        </VStack>
        <TilbakekrevingAktivitetTabell ytelser={data.ytelser} />
        {!readOnly && !data.erForeldet && vurdertePerioder.length > 0 && (
          <RhfSelect
            name="perioderForKopi"
            control={formMethods.control}
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
        )}
        <HStack gap="4" wrap>
          <div className={styles.leftColumn}>
            {data.erForeldet && <ForeldetFormPanel />}
            {!data.erForeldet && (
              <VStack gap="2">
                <Heading size="small">
                  <FormattedMessage id="TilbakekrevingPeriodeForm.VilkarForTilbakekreving" />
                </Heading>
                <RhfTextarea
                  name="begrunnelse"
                  control={formMethods.control}
                  label={intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.Vurdering' })}
                  validate={[required, minLength3, maxLength1500, hasValidText]}
                  maxLength={1500}
                  readOnly={readOnly}
                  className={styles.explanationTextarea}
                  description={intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst' })}
                />
                <RhfRadioGroup
                  name="valgtVilkarResultatType"
                  control={formMethods.control}
                  label={<FormattedMessage id="TilbakekrevingPeriodeForm.oppfylt" />}
                  validate={[required]}
                  radios={vilkarResultatTyper.map(vrt => ({
                    label: vrt.navn,
                    value: vrt.kode as unknown as string,
                  }))}
                  isReadOnly={readOnly}
                  onChange={resetVilkarresultatType}
                />
              </VStack>
            )}
          </div>
          <div className={styles.rightColumn}>
            {valgtVilkarResultatType && (
              <VStack gap="2">
                <Heading size="small">
                  <FormattedMessage
                    id={
                      valgtVilkarResultatType === VilkårResultat.GOD_TRO
                        ? 'TilbakekrevingPeriodeForm.BelopetMottattIGodTro'
                        : 'TilbakekrevingPeriodeForm.Aktsomhet'
                    }
                  />
                </Heading>
                <RhfTextarea
                  name="vurderingBegrunnelse"
                  control={formMethods.control}
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
              </VStack>
            )}
          </div>
        </HStack>
        <HStack gap="4">
          <Button size="small" variant="primary" disabled={!formMethods.formState.isDirty || readOnly}>
            <FormattedMessage id="TilbakekrevingPeriodeForm.Oppdater" />
          </Button>
          <Button size="small" variant="secondary" onClick={skjulPeriode} type="button">
            <FormattedMessage id="TilbakekrevingPeriodeForm.Avbryt" />
          </Button>
        </HStack>
        {showModal && <TotalbelopetUnder4RettsgebyrModal showModal submit={saveForm} />}
      </VStack>
    </RhfForm>
  );
};
