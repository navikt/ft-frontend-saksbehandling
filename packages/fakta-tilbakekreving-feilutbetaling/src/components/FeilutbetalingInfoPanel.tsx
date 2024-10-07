import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import { Button, Label, BodyShort, Detail, HStack } from '@navikt/ds-react';

import { VerticalSpacer, AksjonspunktHelpTextTemp, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { TextAreaField, CheckboxField, Form } from '@navikt/ft-form-hooks';
import { DDMMYYYY_DATE_FORMAT, decodeHtmlEntity } from '@navikt/ft-utils';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { FeilutbetalingFakta, FeilutbetalingAarsak } from '@navikt/ft-types';

import FeilutbetalingPerioderFieldArray, { FormValues as PeriodeFormValues } from './FeilutbetalingPerioderFieldArray';

import styles from './feilutbetalingInfoPanel.module.css';
import AvklartFaktaFeilutbetalingAp from '../types/AvklartFaktaFeilutbetalingAp';
import FeilutbetalingAksjonspunktCode from '../FeilutbetalingAksjonspunktCode';
import KodeverkFpSakForPanel from '../types/kodeverkFpSakForPanel';
import KodeverkFpTilbakeForPanel from '../types/kodeverkFpTilbakeForPanel';

const minLength3 = minLength(3);
const MAX_LENGTH = 4000;
const maxLength4000 = maxLength(MAX_LENGTH);

export type FormValues = {
  begrunnelse?: string;
  behandlePerioderSamlet?: boolean;
} & PeriodeFormValues;

const sorterPerioder = (feilutbetalingFakta: FeilutbetalingFakta) =>
  feilutbetalingFakta.behandlingFakta.perioder
    ? [...feilutbetalingFakta.behandlingFakta.perioder].sort((a, b) => moment(a.fom).diff(moment(b.fom)))
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
  årsaker: FeilutbetalingAarsak['hendelseTyper'],
): AvklartFaktaFeilutbetalingAp => {
  const feilutbetalingFakta = values.perioder.map(periode => {
    const feilutbetalingÅrsak = årsaker.find(el => el.hendelseType === periode.årsak);
    const feilutbetalingUnderÅrsak = feilutbetalingÅrsak?.hendelseUndertyper
      ? feilutbetalingÅrsak.hendelseUndertyper
          // @ts-ignore Fiks
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
  feilutbetalingArsaker: FeilutbetalingAarsak,
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel,
): FeilutbetalingAarsak['hendelseTyper'] => {
  const { hendelseTyper } = feilutbetalingArsaker;
  return hendelseTyper.sort((ht1, ht2) => {
    const hendelseType1 =
      kodeverkSamlingFpTilbake[KodeverkType.HENDELSE_TYPE].find(h => h.kode === ht1.hendelseType)?.navn || '';
    const hendelseType2 =
      kodeverkSamlingFpTilbake[KodeverkType.HENDELSE_TYPE].find(h => h.kode === ht2.hendelseType)?.navn || '';
    const hendelseType1ErParagraf = hendelseType1.startsWith('§');
    const hendelseType2ErParagraf = hendelseType2.startsWith('§');
    const ht1v = hendelseType1ErParagraf ? hendelseType1.replace(/\D/g, '') : hendelseType1;
    const ht2v = hendelseType2ErParagraf ? hendelseType2.replace(/\D/g, '') : hendelseType2;
    // @ts-ignore Kan ein ikkje alltid bruka localeCompare?
    return hendelseType1ErParagraf && hendelseType2ErParagraf ? ht1v - ht2v : ht1v.localeCompare(ht2v);
  });
};

export interface OwnProps {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingAarsak;
  submitCallback: (aksjonspunktData: AvklartFaktaFeilutbetalingAp) => Promise<void>;
  hasOpenAksjonspunkter: boolean;
  readOnly: boolean;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  kodeverkSamlingFpsak: KodeverkFpSakForPanel;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

const FeilutbetalingInfoPanel: FunctionComponent<OwnProps> = ({
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
}) => {
  const intl = useIntl();

  const feilutbetaling = feilutbetalingFakta.behandlingFakta;

  const initialValues = buildInitialValues(feilutbetalingFakta);

  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const behandlePerioderSamlet = formMethods.watch('behandlePerioderSamlet') || false;

  const årsaker = getSortedFeilutbetalingArsaker(feilutbetalingAarsak, kodeverkSamlingFpTilbake);

  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
        {[<FormattedMessage key="1" id="FeilutbetalingInfoPanel.Aksjonspunkt" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values, årsaker))}
        setDataOnUnmount={setFormData}
      >
        <HStack gap="10" wrap>
          <div>
            <Label size="small">
              <FormattedMessage id="FeilutbetalingInfoPanel.Feilutbetaling" />
            </Label>
            <VerticalSpacer sixteenPx />
            <HStack justify="space-between">
              <div>
                <Detail>
                  <FormattedMessage id="FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling" />
                </Detail>
                <BodyShort size="small">
                  {`${moment(feilutbetaling.totalPeriodeFom).format(DDMMYYYY_DATE_FORMAT)} - ${moment(
                    feilutbetaling.totalPeriodeTom,
                  ).format(DDMMYYYY_DATE_FORMAT)}`}
                </BodyShort>
              </div>
              <div>
                <Detail>
                  <FormattedMessage id="FeilutbetalingInfoPanel.FeilutbetaltBeløp" />
                </Detail>
                <BodyShort size="small" className={styles.redText}>
                  {feilutbetaling.aktuellFeilUtbetaltBeløp}
                </BodyShort>
              </div>
              <div>
                <Detail>
                  <FormattedMessage id="FeilutbetalingInfoPanel.TidligereVarseltBeløp" />
                </Detail>
                <BodyShort size="small">
                  {feilutbetaling.tidligereVarseltBeløp ? (
                    feilutbetaling.tidligereVarseltBeløp
                  ) : (
                    <FormattedMessage id="FeilutbetalingInfoPanel.IkkeVarslet" />
                  )}
                </BodyShort>
              </div>
            </HStack>
            <VerticalSpacer sixteenPx />
            <CheckboxField
              name="behandlePerioderSamlet"
              label={intl.formatMessage({ id: 'FeilutbetalingInfoPanel.BehandlePerioderSamlet' })}
              readOnly={readOnly}
            />
            <VerticalSpacer sixteenPx />
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
          </div>
          <div>
            <Label size="small">
              <FormattedMessage id="FeilutbetalingInfoPanel.Revurdering" />
            </Label>
            <VerticalSpacer sixteenPx />
            <HStack gap="4">
              <div>
                <Detail>
                  <FormattedMessage id="FeilutbetalingInfoPanel.Årsaker" />
                </Detail>
                {feilutbetaling.behandlingÅrsaker && (
                  <BodyShort size="small">
                    {feilutbetaling.behandlingÅrsaker
                      .map(
                        ba =>
                          kodeverkSamlingFpsak[KodeverkType.BEHANDLING_AARSAK].find(
                            a => a.kode === ba.behandlingArsakType,
                          )?.navn,
                      )
                      .join(', ')}
                  </BodyShort>
                )}
              </div>
              {feilutbetaling.datoForRevurderingsvedtak && (
                <div>
                  <Detail>
                    <FormattedMessage id="FeilutbetalingInfoPanel.DatoForRevurdering" />
                  </Detail>
                  <BodyShort size="small">
                    {moment(feilutbetaling.datoForRevurderingsvedtak).format(DDMMYYYY_DATE_FORMAT)}
                  </BodyShort>
                </div>
              )}
            </HStack>
            <VerticalSpacer sixteenPx />
            <Detail>
              <FormattedMessage id="FeilutbetalingInfoPanel.Resultat" />
            </Detail>
            {feilutbetaling.behandlingsresultat && (
              <BodyShort size="small">
                {
                  kodeverkSamlingFpsak[KodeverkType.BEHANDLING_AARSAK].find(
                    a => a.kode === feilutbetaling.behandlingsresultat?.type,
                  )?.navn
                }
              </BodyShort>
            )}
            <VerticalSpacer sixteenPx />
            <Detail>
              <FormattedMessage id="FeilutbetalingInfoPanel.Konsekvens" />
            </Detail>
            {feilutbetaling.behandlingsresultat && (
              <BodyShort size="small">
                {feilutbetaling.behandlingsresultat.konsekvenserForYtelsen
                  .map(ba => kodeverkSamlingFpsak[KodeverkType.KONSEKVENS_FOR_YTELSEN].find(k => k.kode === ba)?.navn)
                  .join(', ')}
              </BodyShort>
            )}
            <VerticalSpacer sixteenPx />
            <Detail>
              <FormattedMessage id="FeilutbetalingInfoPanel.Tilbakekrevingsvalg" />
            </Detail>
            {feilutbetaling.tilbakekrevingValg && (
              <BodyShort size="small">
                {
                  kodeverkSamlingFpTilbake[KodeverkType.TILBAKEKR_VIDERE_BEH].find(
                    tvb => tvb.kode === feilutbetaling.tilbakekrevingValg?.videreBehandling,
                  )?.navn
                }
              </BodyShort>
            )}
          </div>
        </HStack>
        <VerticalSpacer sixteenPx />
        <div className={styles.textarea}>
          <TextAreaField
            name="begrunnelse"
            label={intl.formatMessage({ id: 'FeilutbetalingInfoPanel.Begrunnelse' })}
            validate={[required, minLength3, maxLength4000, hasValidText]}
            maxLength={MAX_LENGTH}
            readOnly={readOnly}
          />
        </div>
        <VerticalSpacer sixteenPx />
        <Button
          variant="primary"
          size="small"
          disabled={readOnly || !formMethods.formState.isDirty || formMethods.formState.isSubmitting}
          loading={formMethods.formState.isSubmitting}
        >
          <FormattedMessage id="FeilutbetalingInfoPanel.Confirm" />
        </Button>
      </Form>
    </>
  );
};

export default FeilutbetalingInfoPanel;
