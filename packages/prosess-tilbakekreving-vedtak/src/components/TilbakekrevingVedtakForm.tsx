import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, HStack, Link, VStack } from '@navikt/ds-react';

import { RhfForm, SubmitButton } from '@navikt/ft-form-hooks';
import { omitOne } from '@navikt/ft-utils';

import type {
  ForeslaVedtakTilbakekrevingAp,
  HentForhåndvisningVedtaksbrevPdf,
} from '../types/ForeslaVedtakTilbakekrevingAp';
import type { ForhandsvisData } from '../types/ForhandsvisData';
import type { VedtaksbrevAvsnitt } from '../types/Vedtaksbrev';
import { VedtakAksjonspunktCode } from '../VedtakAksjonspunktCode';
import { type FormValues, TilbakekrevingEditerVedtaksbrevPanel } from './brev/TilbakekrevingEditerVedtaksbrevPanel';

const formatVedtakData = (values: FormValues): HentForhåndvisningVedtaksbrevPdf => ({
  oppsummeringstekst: values.OPPSUMMERING,
  perioderMedTekst: Object.entries(omitOne(values, 'OPPSUMMERING')).map(([key, periode]) => ({
    fom: key.split('_')[0],
    tom: key.split('_')[1],
    faktaAvsnitt: periode.FAKTA,
    foreldelseAvsnitt: periode.FORELDELSE,
    vilkaarAvsnitt: periode.VILKÅR,
    saerligeGrunnerAvsnitt: periode.SÆRLIGEGRUNNER,
    saerligeGrunnerAnnetAvsnitt: periode.SÆRLIGEGRUNNER_ANNET,
  })),
});

const harFritekstOppsummeringPakrevdMenIkkeUtfylt = (
  vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[],
  values: FormValues,
): boolean =>
  vedtaksbrevAvsnitt.some(
    avsnitt =>
      avsnitt.avsnittstype === 'OPPSUMMERING' &&
      avsnitt.underavsnittsliste.some(ua => ua.fritekstPåkrevet) &&
      !values.OPPSUMMERING,
  );

const transformValues = (values: FormValues): ForeslaVedtakTilbakekrevingAp => ({
  kode: VedtakAksjonspunktCode.FORESLA_VEDTAK,
  ...formatVedtakData(values),
});

const finnPerioderSomIkkeHarVerdiForObligatoriskFelt = (
  vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[],
  values: FormValues,
): string[] =>
  vedtaksbrevAvsnitt.reduce((acc: string[], va) => {
    const periode = `${va.fom}_${va.tom}`;
    const friteksterForPeriode = values[periode];

    const harObligatoriskFaktaTekst = va.underavsnittsliste.some(
      ua => ua.fritekstPåkrevet && ua.underavsnittstype === 'FAKTA',
    );
    if (harObligatoriskFaktaTekst && !friteksterForPeriode?.FAKTA) {
      return acc.concat(periode);
    }

    const harObligatoriskSarligeGrunnerAnnetTekst = va.underavsnittsliste.some(
      ua => ua.fritekstPåkrevet && ua.underavsnittstype === 'SÆRLIGEGRUNNER_ANNET',
    );
    if (harObligatoriskSarligeGrunnerAnnetTekst && !friteksterForPeriode?.SÆRLIGEGRUNNER_ANNET) {
      return acc.concat(periode);
    }
    return acc;
  }, []);

const fetchPreview =
  (fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<Blob>, uuid: string, formVerdier: FormValues) =>
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
  fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<Blob>;
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
