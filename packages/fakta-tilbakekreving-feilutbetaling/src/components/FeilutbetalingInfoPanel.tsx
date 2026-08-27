import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, Heading, HStack, VStack } from '@navikt/ds-react';

import { RhfCheckbox, RhfForm, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import {
  AksjonspunktHelpTextHTML,
  BeløpLabel,
  DateLabel,
  FaktaGruppe,
  LabeledValue,
  PeriodLabel,
} from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity, sortPeriodsByFom } from '@navikt/ft-utils';

import { FeilutbetalingAksjonspunktCode } from '../FeilutbetalingAksjonspunktCode';
import type { AvklartFaktaFeilutbetalingAp } from '../types/AvklartFaktaFeilutbetalingAp';
import type { FeilutbetalingÅrsak } from '../types/FeilutbetalingÅrsak';
import type { FeilutbetalingFakta } from '../types/FeilutbetalingFakta';
import type { KodeverkForPanel } from '../types/KodeverkForPanel';
import type { KodeverkTilbakeForPanel } from '../types/KodeverkTilbakeForPanel';
import {
  FeilutbetalingPerioderFieldArray,
  type FormValues as PeriodeFormValues,
} from './FeilutbetalingPerioderFieldArray';

import styles from './feilutbetalingInfoPanel.module.css';

const minLength3 = minLength(3);
const MAX_LENGTH = 4000;
const maxLength4000 = maxLength(MAX_LENGTH);

export type FormValues = {
  begrunnelse?: string;
  behandlePerioderSamlet: boolean;
} & PeriodeFormValues;

const sorterPerioder = (feilutbetalingFakta: FeilutbetalingFakta) =>
  (feilutbetalingFakta.behandlingFakta.perioder ?? []).toSorted(sortPeriodsByFom);

const buildInitialValues = (feilutbetalingFakta: FeilutbetalingFakta): FormValues => {
  const {
    behandlingFakta: { begrunnelse },
  } = feilutbetalingFakta;
  return {
    behandlePerioderSamlet: false,
    begrunnelse: decodeHtmlEntity(begrunnelse),
    perioder: sorterPerioder(feilutbetalingFakta).map(({ fom, tom, feilutbetalingÅrsakDto }) => {
      if (!feilutbetalingÅrsakDto) {
        return { fom, tom };
      }

      return {
        fom,
        tom,
        årsak: feilutbetalingÅrsakDto.hendelseType,
        underårsak: feilutbetalingÅrsakDto.hendelseUndertype ?? undefined,
      };
    }),
  };
};

const transformValues = (
  values: FormValues,
  årsaker: FeilutbetalingÅrsak['hendelseTyper'],
): AvklartFaktaFeilutbetalingAp => {
  const feilutbetalingFakta = values.perioder.map(periode => {
    const feilutbetalingÅrsak = årsaker.find(el => el.hendelseType === periode.årsak);
    const feilutbetalingUnderÅrsak = feilutbetalingÅrsak?.hendelseUndertyper
      ? feilutbetalingÅrsak.hendelseUndertyper.find(el => el === periode?.underårsak)
      : undefined;

    return {
      fom: periode.fom,
      tom: periode.tom,
      årsak: {
        hendelseType: feilutbetalingÅrsak?.hendelseType,
        hendelseUndertype: feilutbetalingUnderÅrsak,
      },
    };
  });

  return {
    '@type': FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING,
    kode: FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING,
    begrunnelse: values.begrunnelse,
    feilutbetalingFakta,
  };
};

const getSortedFeilutbetalingArsaker = (
  feilutbetalingArsaker: FeilutbetalingÅrsak,
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel,
): FeilutbetalingÅrsak['hendelseTyper'] => {
  const collator = new Intl.Collator('nb-NO', { numeric: true });
  return feilutbetalingArsaker.hendelseTyper.toSorted((ht1, ht2) => {
    const hendelseType1 = kodeverkSamlingFpTilbake['HendelseType'].find(h => h.kode === ht1.hendelseType)?.navn || '';
    const hendelseType2 = kodeverkSamlingFpTilbake['HendelseType'].find(h => h.kode === ht2.hendelseType)?.navn || '';
    return collator.compare(hendelseType1, hendelseType2);
  });
};

interface Props {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingÅrsak;
  submitCallback: (aksjonspunktData: AvklartFaktaFeilutbetalingAp) => Promise<void>;
  hasOpenAksjonspunkter: boolean;
  readOnly: boolean;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
  kodeverkSamlingFpsak: KodeverkForPanel;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

export const FeilutbetalingInfoPanel = ({
  hasOpenAksjonspunkter,
  feilutbetalingAarsak,
  feilutbetalingFakta,
  readOnly,
  alleMerknaderFraBeslutter,
  kodeverkSamlingFpTilbake,
  kodeverkSamlingFpsak,
  formData,
  setFormData,
  submitCallback,
}: Props) => {
  const feilutbetaling = feilutbetalingFakta.behandlingFakta;

  const initialValues = buildInitialValues(feilutbetalingFakta);

  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const behandlePerioderSamlet = formMethods.watch('behandlePerioderSamlet');

  const årsaker = getSortedFeilutbetalingArsaker(feilutbetalingAarsak, kodeverkSamlingFpTilbake);
  const perioder = sorterPerioder(feilutbetalingFakta);

  return (
    <VStack gap="space-16">
      {hasOpenAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="FeilutbetalingInfoPanel.Aksjonspunkt" />
        </AksjonspunktHelpTextHTML>
      )}
      <RhfForm
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values, årsaker))}
        setDataOnUnmount={setFormData}
      >
        <VStack gap="space-16">
          <HStack gap="space-48">
            <VStack gap="space-16">
              <Heading level="3" size="xsmall">
                <FormattedMessage id="FeilutbetalingInfoPanel.Feilutbetaling" />
              </Heading>
              <HStack gap="space-32">
                <LabeledValue
                  size="small"
                  label={<FormattedMessage id="FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling" />}
                  value={
                    <PeriodLabel
                      dateStringFom={feilutbetaling.totalPeriodeFom}
                      dateStringTom={feilutbetaling.totalPeriodeTom}
                    />
                  }
                />
                <LabeledValue
                  size="small"
                  label={<FormattedMessage id="FeilutbetalingInfoPanel.FeilutbetaltBeløp" />}
                  value={<BeløpLabel rød beløp={feilutbetaling.aktuellFeilUtbetaltBeløp} kr />}
                />
                <LabeledValue
                  size="small"
                  label={<FormattedMessage id="FeilutbetalingInfoPanel.TidligereVarseltBeløp" />}
                  value={
                    feilutbetaling.tidligereVarseltBeløp ? (
                      <BeløpLabel beløp={feilutbetaling.tidligereVarseltBeløp} kr />
                    ) : (
                      <FormattedMessage id="FeilutbetalingInfoPanel.IkkeVarslet" />
                    )
                  }
                />
              </HStack>
              {perioder.length > 1 && !readOnly && (
                <RhfCheckbox
                  name="behandlePerioderSamlet"
                  control={formMethods.control}
                  label={<FormattedMessage id="FeilutbetalingInfoPanel.BehandlePerioderSamlet" />}
                  readOnly={readOnly}
                />
              )}
              <FaktaGruppe
                merknaderFraBeslutter={
                  alleMerknaderFraBeslutter[FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING]
                }
                withoutBorder
              >
                <FeilutbetalingPerioderFieldArray
                  perioder={perioder}
                  behandlePerioderSamlet={behandlePerioderSamlet}
                  årsaker={årsaker}
                  readOnly={readOnly}
                  kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
                />
              </FaktaGruppe>
            </VStack>
            <VStack gap="space-16">
              <Heading level="3" size="xsmall">
                <FormattedMessage id="FeilutbetalingInfoPanel.Revurdering" />
              </Heading>
              <HStack gap="space-16">
                {feilutbetaling.behandlingÅrsaker && (
                  <LabeledValue
                    size="small"
                    label={<FormattedMessage id="FeilutbetalingInfoPanel.Årsaker" />}
                    value={feilutbetaling.behandlingÅrsaker
                      .map(
                        ba =>
                          kodeverkSamlingFpsak['BehandlingÅrsakType'].find(a => a.kode === ba.behandlingArsakType)
                            ?.navn,
                      )
                      .join(', ')}
                  />
                )}
                {feilutbetaling.datoForRevurderingsvedtak && (
                  <LabeledValue
                    size="small"
                    label={<FormattedMessage id="FeilutbetalingInfoPanel.DatoForRevurdering" />}
                    value={<DateLabel dateString={feilutbetaling.datoForRevurderingsvedtak} />}
                  />
                )}
              </HStack>
              {feilutbetaling.behandlingsresultat && (
                <LabeledValue
                  size="small"
                  label={<FormattedMessage id="FeilutbetalingInfoPanel.Resultat" />}
                  value={
                    kodeverkSamlingFpsak['BehandlingResultatType'].find(
                      a => a.kode === feilutbetaling.behandlingsresultat?.type,
                    )?.navn ?? ''
                  }
                />
              )}
              {feilutbetaling.behandlingsresultat && (
                <LabeledValue
                  size="small"
                  label={<FormattedMessage id="FeilutbetalingInfoPanel.Konsekvens" />}
                  value={feilutbetaling.behandlingsresultat.konsekvenserForYtelsen
                    .map(ba => kodeverkSamlingFpsak['KonsekvensForYtelsen'].find(k => k.kode === ba)?.navn)
                    .join(', ')}
                />
              )}
              {feilutbetaling.tilbakekrevingValg && (
                <LabeledValue
                  size="small"
                  label={<FormattedMessage id="FeilutbetalingInfoPanel.Tilbakekrevingsvalg" />}
                  value={
                    kodeverkSamlingFpTilbake['VidereBehandling'].find(
                      tvb => tvb.kode === feilutbetaling.tilbakekrevingValg?.videreBehandling,
                    )?.navn ?? ''
                  }
                />
              )}
            </VStack>
          </HStack>
          <div className={styles.textarea}>
            <RhfTextarea
              name="begrunnelse"
              control={formMethods.control}
              label={<FormattedMessage id="FeilutbetalingInfoPanel.Begrunnelse" />}
              validate={[required, minLength3, maxLength4000, hasValidText]}
              maxLength={MAX_LENGTH}
              readOnly={readOnly}
            />
          </div>
          {!readOnly && (
            <div>
              <Button
                variant="primary"
                size="small"
                disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                loading={formMethods.formState.isSubmitting}
              >
                <FormattedMessage id="FeilutbetalingInfoPanel.Confirm" />
              </Button>
            </div>
          )}
        </VStack>
      </RhfForm>
    </VStack>
  );
};
