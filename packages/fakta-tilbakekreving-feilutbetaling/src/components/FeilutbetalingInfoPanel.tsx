import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, Detail, HStack, Label, VStack } from '@navikt/ds-react';

import { Form, RhfCheckbox, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, BeløpLabel, DateLabel, FaktaGruppe, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity, sortPeriodsByFom } from '@navikt/ft-utils';

import { FeilutbetalingAksjonspunktCode } from '../FeilutbetalingAksjonspunktCode';
import { AvklartFaktaFeilutbetalingAp } from '../types/AvklartFaktaFeilutbetalingAp';
import { FeilutbetalingÅrsak } from '../types/FeilutbetalingÅrsak';
import { FeilutbetalingFakta } from '../types/FeilutbetalingFakta';
import { KodeverkForPanel } from '../types/KodeverkForPanel';
import { KodeverkTilbakeForPanel } from '../types/KodeverkTilbakeForPanel';
import { FeilutbetalingPerioderFieldArray, FormValues as PeriodeFormValues } from './FeilutbetalingPerioderFieldArray';

import styles from './feilutbetalingInfoPanel.module.css';

const minLength3 = minLength(3);
const MAX_LENGTH = 4000;
const maxLength4000 = maxLength(MAX_LENGTH);

export type FormValues = {
  begrunnelse?: string;
  behandlePerioderSamlet?: boolean;
} & PeriodeFormValues;

const sorterPerioder = (feilutbetalingFakta: FeilutbetalingFakta) =>
  feilutbetalingFakta.behandlingFakta.perioder
    ? [...feilutbetalingFakta.behandlingFakta.perioder].sort(sortPeriodsByFom)
    : [];

const buildInitialValues = (feilutbetalingFakta: FeilutbetalingFakta): FormValues => {
  const {
    behandlingFakta: { begrunnelse },
  } = feilutbetalingFakta;
  return {
    begrunnelse: decodeHtmlEntity(begrunnelse),
    perioder: sorterPerioder(feilutbetalingFakta).map(p => {
      const { fom, tom, feilutbetalingÅrsakDto } = p;

      const period = { fom, tom };

      if (!feilutbetalingÅrsakDto) {
        return period;
      }

      const { hendelseType, hendelseUndertype } = feilutbetalingÅrsakDto;

      return {
        ...period,
        årsak: hendelseType,
        [hendelseType]: {
          underÅrsak: hendelseUndertype || null,
        },
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
      ? feilutbetalingÅrsak.hendelseUndertyper
          // @ts-expect-error Fiks
          .find(el => el === periode[periode.årsak]?.underÅrsak)
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
    kode: FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING,
    begrunnelse: values.begrunnelse,
    feilutbetalingFakta,
  };
};

const getSortedFeilutbetalingArsaker = (
  feilutbetalingArsaker: FeilutbetalingÅrsak,
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel,
): FeilutbetalingÅrsak['hendelseTyper'] => {
  const { hendelseTyper } = feilutbetalingArsaker;
  return hendelseTyper.sort((ht1, ht2) => {
    const hendelseType1 = kodeverkSamlingFpTilbake['HendelseType'].find(h => h.kode === ht1.hendelseType)?.navn || '';
    const hendelseType2 = kodeverkSamlingFpTilbake['HendelseType'].find(h => h.kode === ht2.hendelseType)?.navn || '';
    const hendelseType1ErParagraf = hendelseType1.startsWith('§');
    const hendelseType2ErParagraf = hendelseType2.startsWith('§');
    const ht1v = hendelseType1ErParagraf ? hendelseType1.replace(/\D/g, '') : hendelseType1;
    const ht2v = hendelseType2ErParagraf ? hendelseType2.replace(/\D/g, '') : hendelseType2;
    // @ts-expect-error Kan ein ikkje alltid bruka localeCompare?
    return hendelseType1ErParagraf && hendelseType2ErParagraf ? ht1v - ht2v : ht1v.localeCompare(ht2v);
  });
};

export interface Props {
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
  const intl = useIntl();

  const feilutbetaling = feilutbetalingFakta.behandlingFakta;

  const initialValues = buildInitialValues(feilutbetalingFakta);

  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const behandlePerioderSamlet = formMethods.watch('behandlePerioderSamlet') || false;

  const årsaker = getSortedFeilutbetalingArsaker(feilutbetalingAarsak, kodeverkSamlingFpTilbake);

  return (
    <VStack gap="4">
      {hasOpenAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="FeilutbetalingInfoPanel.Aksjonspunkt" />
        </AksjonspunktHelpTextHTML>
      )}
      <Form
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values, årsaker))}
        setDataOnUnmount={setFormData}
      >
        <VStack gap="4">
          <HStack gap="10" wrap>
            <VStack gap="4">
              <Label size="small">
                <FormattedMessage id="FeilutbetalingInfoPanel.Feilutbetaling" />
              </Label>
              <HStack justify="space-between">
                <VStack gap="1">
                  <Detail>
                    <FormattedMessage id="FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling" />
                  </Detail>
                  <BodyShort size="small">
                    <PeriodLabel
                      dateStringFom={feilutbetaling.totalPeriodeFom}
                      dateStringTom={feilutbetaling.totalPeriodeTom}
                    />
                  </BodyShort>
                </VStack>
                <VStack gap="1">
                  <Detail>
                    <FormattedMessage id="FeilutbetalingInfoPanel.FeilutbetaltBeløp" />
                  </Detail>
                  <BodyShort size="small">
                    <BeløpLabel rød beløp={feilutbetaling.aktuellFeilUtbetaltBeløp} />
                  </BodyShort>
                </VStack>
                <VStack gap="1">
                  <Detail>
                    <FormattedMessage id="FeilutbetalingInfoPanel.TidligereVarseltBeløp" />
                  </Detail>
                  <BodyShort size="small">
                    {feilutbetaling.tidligereVarseltBeløp ? (
                      <BeløpLabel beløp={feilutbetaling.tidligereVarseltBeløp} />
                    ) : (
                      <FormattedMessage id="FeilutbetalingInfoPanel.IkkeVarslet" />
                    )}
                  </BodyShort>
                </VStack>
              </HStack>
              <RhfCheckbox
                name="behandlePerioderSamlet"
                control={formMethods.control}
                label={intl.formatMessage({ id: 'FeilutbetalingInfoPanel.BehandlePerioderSamlet' })}
                readOnly={readOnly}
              />
              <FaktaGruppe
                merknaderFraBeslutter={
                  alleMerknaderFraBeslutter[FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING]
                }
                withoutBorder
              >
                <FeilutbetalingPerioderFieldArray
                  perioder={sorterPerioder(feilutbetalingFakta)}
                  behandlePerioderSamlet={behandlePerioderSamlet}
                  årsaker={årsaker}
                  readOnly={readOnly}
                  kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
                />
              </FaktaGruppe>
            </VStack>
            <VStack gap="4">
              <Label size="small">
                <FormattedMessage id="FeilutbetalingInfoPanel.Revurdering" />
              </Label>
              <HStack gap="4">
                <VStack gap="1">
                  <Detail>
                    <FormattedMessage id="FeilutbetalingInfoPanel.Årsaker" />
                  </Detail>
                  {feilutbetaling.behandlingÅrsaker && (
                    <BodyShort size="small">
                      {feilutbetaling.behandlingÅrsaker
                        .map(
                          ba =>
                            kodeverkSamlingFpsak['BehandlingÅrsakType'].find(a => a.kode === ba.behandlingArsakType)
                              ?.navn,
                        )
                        .join(', ')}
                    </BodyShort>
                  )}
                </VStack>
                {feilutbetaling.datoForRevurderingsvedtak && (
                  <VStack gap="1">
                    <Detail>
                      <FormattedMessage id="FeilutbetalingInfoPanel.DatoForRevurdering" />
                    </Detail>
                    <BodyShort size="small">
                      <DateLabel dateString={feilutbetaling.datoForRevurderingsvedtak} />
                    </BodyShort>
                  </VStack>
                )}
              </HStack>
              <VStack gap="1">
                <Detail>
                  <FormattedMessage id="FeilutbetalingInfoPanel.Resultat" />
                </Detail>
                {feilutbetaling.behandlingsresultat && (
                  <BodyShort size="small">
                    {
                      kodeverkSamlingFpsak['BehandlingResultatType'].find(
                        a => a.kode === feilutbetaling.behandlingsresultat?.type,
                      )?.navn
                    }
                  </BodyShort>
                )}
              </VStack>
              <VStack gap="1">
                <Detail>
                  <FormattedMessage id="FeilutbetalingInfoPanel.Konsekvens" />
                </Detail>
                {feilutbetaling.behandlingsresultat && (
                  <BodyShort size="small">
                    {feilutbetaling.behandlingsresultat.konsekvenserForYtelsen
                      .map(ba => kodeverkSamlingFpsak['KonsekvensForYtelsen'].find(k => k.kode === ba)?.navn)
                      .join(', ')}
                  </BodyShort>
                )}
              </VStack>
              <VStack gap="1">
                <Detail>
                  <FormattedMessage id="FeilutbetalingInfoPanel.Tilbakekrevingsvalg" />
                </Detail>
                {feilutbetaling.tilbakekrevingValg && (
                  <BodyShort size="small">
                    {
                      kodeverkSamlingFpTilbake['VidereBehandling'].find(
                        tvb => tvb.kode === feilutbetaling.tilbakekrevingValg?.videreBehandling,
                      )?.navn
                    }
                  </BodyShort>
                )}
              </VStack>
            </VStack>
          </HStack>
          <div className={styles.textarea}>
            <RhfTextarea
              name="begrunnelse"
              control={formMethods.control}
              label={intl.formatMessage({ id: 'FeilutbetalingInfoPanel.Begrunnelse' })}
              validate={[required, minLength3, maxLength4000, hasValidText]}
              maxLength={MAX_LENGTH}
              readOnly={readOnly}
            />
          </div>
          <div>
            <Button
              variant="primary"
              size="small"
              disabled={readOnly || !formMethods.formState.isDirty || formMethods.formState.isSubmitting}
              loading={formMethods.formState.isSubmitting}
            >
              <FormattedMessage id="FeilutbetalingInfoPanel.Confirm" />
            </Button>
          </div>
        </VStack>
      </Form>
    </VStack>
  );
};
