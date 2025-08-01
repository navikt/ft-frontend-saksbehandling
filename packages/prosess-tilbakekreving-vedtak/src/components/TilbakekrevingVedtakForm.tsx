import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, HStack, Link, VStack } from '@navikt/ds-react';

import { RhfForm, SubmitButton } from '@navikt/ft-form-hooks';
import { omit } from '@navikt/ft-utils';

import { UnderavsnittType } from '../kodeverk/avsnittType';
import type { ForeslaVedtakTilbakekrevingAp } from '../types/ForeslaVedtakTilbakekrevingAp';
import type { VedtaksbrevAvsnitt } from '../types/VedtaksbrevAvsnitt';
import { VedtakAksjonspunktCode } from '../VedtakAksjonspunktCode';
import { type FormValues, TilbakekrevingEditerVedtaksbrevPanel } from './brev/TilbakekrevingEditerVedtaksbrevPanel';

type VedtakData = {
  oppsummeringstekst: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    foreldelseAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
};

const formatVedtakData = (values: FormValues): VedtakData => {
  const perioder = omit(values, UnderavsnittType.OPPSUMMERING);
  return {
    oppsummeringstekst: values[UnderavsnittType.OPPSUMMERING] as string,
    perioderMedTekst: Object.keys(perioder).map(key => ({
      fom: key.split('_')[0],
      tom: key.split('_')[1],
      faktaAvsnitt: perioder[key][UnderavsnittType.FAKTA],
      foreldelseAvsnitt: perioder[key][UnderavsnittType.FORELDELSE],
      vilkaarAvsnitt: perioder[key][UnderavsnittType.VILKAR],
      saerligeGrunnerAvsnitt: perioder[key][UnderavsnittType.SARLIGEGRUNNER],
      saerligeGrunnerAnnetAvsnitt: perioder[key][UnderavsnittType.SARLIGEGRUNNER_ANNET],
    })),
  };
};

const harFritekstOppsummeringPakrevdMenIkkeUtfylt = (
  vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[],
  formVerdier: FormValues,
): boolean =>
  vedtaksbrevAvsnitt.some(
    avsnitt =>
      avsnitt.avsnittstype === UnderavsnittType.OPPSUMMERING &&
      avsnitt.underavsnittsliste.some(ua => ua.fritekstPåkrevet) &&
      !formVerdier[UnderavsnittType.OPPSUMMERING],
  );

const transformValues = (values: FormValues): ForeslaVedtakTilbakekrevingAp => ({
  kode: VedtakAksjonspunktCode.FORESLA_VEDTAK,
  ...formatVedtakData(values),
});

const finnPerioderSomIkkeHarVerdiForObligatoriskFelt = (
  vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[],
  formVerdier: FormValues,
): string[] =>
  vedtaksbrevAvsnitt.reduce((acc: string[], va) => {
    const periode = `${va.fom}_${va.tom}`;
    const friteksterForPeriode = formVerdier[periode] as Record<string, string>;

    const harObligatoriskFaktaTekst = va.underavsnittsliste.some(
      ua => ua.fritekstPåkrevet && ua.underavsnittstype === UnderavsnittType.FAKTA,
    );
    if (harObligatoriskFaktaTekst && (!friteksterForPeriode || !friteksterForPeriode[UnderavsnittType.FAKTA])) {
      return acc.concat(periode);
    }

    const harObligatoriskSarligeGrunnerAnnetTekst = va.underavsnittsliste.some(
      ua => ua.fritekstPåkrevet && ua.underavsnittstype === UnderavsnittType.SARLIGEGRUNNER_ANNET,
    );
    if (
      harObligatoriskSarligeGrunnerAnnetTekst &&
      (!friteksterForPeriode || !friteksterForPeriode[UnderavsnittType.SARLIGEGRUNNER_ANNET])
    ) {
      return acc.concat(periode);
    }
    return acc;
  }, []);

export type ForhandsvisData = {
  uuid: string;
} & VedtakData;

const fetchPreview =
  (fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<void>, uuid: string, formVerdier: FormValues) =>
  (e: React.KeyboardEvent | React.MouseEvent): void => {
    fetchPreviewVedtaksbrev({
      uuid,
      ...formatVedtakData(formVerdier),
    });
    e.preventDefault();
  };

interface Props {
  submitCallback: (aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>;
  avsnittsliste: VedtaksbrevAvsnitt[];
  readOnly: boolean;
  fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<void>;
  behandlingUuid: string;
  erRevurderingTilbakekrevingKlage?: boolean;
  erRevurderingTilbakekrevingFeilBeløpBortfalt?: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

export const TilbakekrevingVedtakForm = ({
  submitCallback,
  readOnly,
  fetchPreviewVedtaksbrev,
  avsnittsliste,
  behandlingUuid,
  erRevurderingTilbakekrevingKlage,
  erRevurderingTilbakekrevingFeilBeløpBortfalt,
  formData,
  setFormData,
}: Props) => {
  const vedtaksbrevAvsnitt = avsnittsliste;

  const defaultValues = formData || TilbakekrevingEditerVedtaksbrevPanel.buildInitialValues(vedtaksbrevAvsnitt);

  const intl = useIntl();
  const formMethods = useForm<FormValues>({
    defaultValues,
  });
  const formVerdier = formMethods.watch();

  const fritekstOppsummeringPakrevdMenIkkeUtfylt = harFritekstOppsummeringPakrevdMenIkkeUtfylt(
    vedtaksbrevAvsnitt,
    formVerdier,
  );
  const perioderSomIkkeHarUtfyltObligatoriskVerdi = finnPerioderSomIkkeHarVerdiForObligatoriskFelt(
    vedtaksbrevAvsnitt,
    formVerdier,
  );

  const harObligatoriskeFelterSomIkkeErUtfylt =
    fritekstOppsummeringPakrevdMenIkkeUtfylt || perioderSomIkkeHarUtfyltObligatoriskVerdi.length > 0;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <VStack gap="space-16">
        <TilbakekrevingEditerVedtaksbrevPanel
          intl={intl}
          vedtaksbrevAvsnitt={vedtaksbrevAvsnitt}
          readOnly={readOnly}
          perioderSomIkkeHarUtfyltObligatoriskVerdi={perioderSomIkkeHarUtfyltObligatoriskVerdi}
          fritekstOppsummeringPakrevdMenIkkeUtfylt={fritekstOppsummeringPakrevdMenIkkeUtfylt}
          erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
        />
        <HStack gap="space-16" align="center">
          <SubmitButton
            text={intl.formatMessage({ id: 'TilbakekrevingVedtakForm.TilGodkjenning' })}
            isReadOnly={readOnly}
            isSubmittable={
              perioderSomIkkeHarUtfyltObligatoriskVerdi.length === 0 && !fritekstOppsummeringPakrevdMenIkkeUtfylt
            }
            isSubmitting={formMethods.formState.isSubmitting}
            hasErrors={harObligatoriskeFelterSomIkkeErUtfylt}
          />
          {perioderSomIkkeHarUtfyltObligatoriskVerdi.length === 0 && (
            <Link
              href=""
              onClick={fetchPreview(fetchPreviewVedtaksbrev, behandlingUuid, formVerdier)}
              onKeyDown={e =>
                e.key === 'Enter' ? fetchPreview(fetchPreviewVedtaksbrev, behandlingUuid, formVerdier)(e) : null
              }
            >
              <FormattedMessage id="TilbakekrevingVedtakForm.ForhandvisBrev" />
            </Link>
          )}
        </HStack>
        {erRevurderingTilbakekrevingKlage && (
          <Alert inline variant="warning" contentMaxWidth={false}>
            <FormattedMessage id="TilbakekrevingVedtakForm.Infotekst.Klage" />
          </Alert>
        )}
      </VStack>
    </RhfForm>
  );
};
