import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import classNames from 'classnames';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Form } from '@navikt/ft-form-hooks';
import { omit } from '@navikt/ft-utils';
import { VedtaksbrevAvsnitt } from '@navikt/ft-types';
import { SubmitButton } from '@ft-frontend-saksbehandling/internal-components';

import underavsnittType from '../kodeverk/avsnittType';
import TilbakekrevingEditerVedtaksbrevPanel, { FormValues } from './brev/TilbakekrevingEditerVedtaksbrevPanel';

import styles from './tilbakekrevingVedtakForm.module.css';
import ForeslaVedtakTilbakekrevingAp from '../types/ForeslaVedtakTilbakekrevingAp';
import VedtakAksjonspunktCode from '../VedtakAksjonspunktCode';

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
  const perioder = omit(values, underavsnittType.OPPSUMMERING);
  return {
    oppsummeringstekst: values[underavsnittType.OPPSUMMERING] as string,
    perioderMedTekst: Object.keys(perioder).map(key => ({
      fom: key.split('_')[0],
      tom: key.split('_')[1],
      faktaAvsnitt: perioder[key][underavsnittType.FAKTA],
      foreldelseAvsnitt: perioder[key][underavsnittType.FORELDELSE],
      vilkaarAvsnitt: perioder[key][underavsnittType.VILKAR],
      saerligeGrunnerAvsnitt: perioder[key][underavsnittType.SARLIGEGRUNNER],
      saerligeGrunnerAnnetAvsnitt: perioder[key][underavsnittType.SARLIGEGRUNNER_ANNET],
    })),
  };
};

const harFritekstOppsummeringPakrevdMenIkkeUtfylt = (
  vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[],
  formVerdier: FormValues,
): boolean =>
  vedtaksbrevAvsnitt.some(
    avsnitt =>
      avsnitt.avsnittstype === underavsnittType.OPPSUMMERING &&
      avsnitt.underavsnittsliste.some(ua => ua.fritekstPåkrevet) &&
      !formVerdier[underavsnittType.OPPSUMMERING],
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
      ua => ua.fritekstPåkrevet && ua.underavsnittstype === underavsnittType.FAKTA,
    );
    if (harObligatoriskFaktaTekst && (!friteksterForPeriode || !friteksterForPeriode[underavsnittType.FAKTA])) {
      return acc.concat(periode);
    }

    const harObligatoriskSarligeGrunnerAnnetTekst = va.underavsnittsliste.some(
      ua => ua.fritekstPåkrevet && ua.underavsnittstype === underavsnittType.SARLIGEGRUNNER_ANNET,
    );
    if (
      harObligatoriskSarligeGrunnerAnnetTekst &&
      (!friteksterForPeriode || !friteksterForPeriode[underavsnittType.SARLIGEGRUNNER_ANNET])
    ) {
      return acc.concat(periode);
    }
    return acc;
  }, []);

export type ForhandsvisData = {
  uuid: string;
} & VedtakData;

const fetchPreview =
  (fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<any>, uuid: string, formVerdier: FormValues) =>
  (e: React.KeyboardEvent | React.MouseEvent): void => {
    fetchPreviewVedtaksbrev({
      uuid,
      ...formatVedtakData(formVerdier),
    });
    e.preventDefault();
  };

export interface OwnProps {
  submitCallback: (aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>;
  avsnittsliste: VedtaksbrevAvsnitt[];
  readOnly: boolean;
  fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<any>;
  behandlingUuid: string;
  erRevurderingTilbakekrevingKlage?: boolean;
  erRevurderingTilbakekrevingFeilBeløpBortfalt?: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

const TilbakekrevingVedtakForm: FunctionComponent<OwnProps> = ({
  submitCallback,
  readOnly,
  fetchPreviewVedtaksbrev,
  avsnittsliste,
  behandlingUuid,
  erRevurderingTilbakekrevingKlage,
  erRevurderingTilbakekrevingFeilBeløpBortfalt,
  formData,
  setFormData,
}) => {
  const vedtaksbrevAvsnitt = avsnittsliste;

  const defaultValues = useMemo(
    () => formData || TilbakekrevingEditerVedtaksbrevPanel.buildInitialValues(vedtaksbrevAvsnitt),
    [formData, vedtaksbrevAvsnitt],
  );

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
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <VerticalSpacer twentyPx />
      <TilbakekrevingEditerVedtaksbrevPanel
        intl={intl}
        vedtaksbrevAvsnitt={vedtaksbrevAvsnitt}
        readOnly={readOnly}
        perioderSomIkkeHarUtfyltObligatoriskVerdi={useMemo(() => perioderSomIkkeHarUtfyltObligatoriskVerdi, [])}
        fritekstOppsummeringPakrevdMenIkkeUtfylt={fritekstOppsummeringPakrevdMenIkkeUtfylt}
        erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
      />
      <VerticalSpacer twentyPx />
      <HStack gap="10">
        <SubmitButton
          text={intl.formatMessage({ id: 'TilbakekrevingVedtakForm.TilGodkjenning' })}
          isReadOnly={readOnly}
          isSubmittable={
            perioderSomIkkeHarUtfyltObligatoriskVerdi.length === 0 && !fritekstOppsummeringPakrevdMenIkkeUtfylt
          }
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
          hasErrors={harObligatoriskeFelterSomIkkeErUtfylt}
        />
        {perioderSomIkkeHarUtfyltObligatoriskVerdi.length === 0 && (
          <div className={styles.padding}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href=""
              onClick={fetchPreview(fetchPreviewVedtaksbrev, behandlingUuid, formVerdier)}
              onKeyDown={e =>
                e.key === 'Enter' ? fetchPreview(fetchPreviewVedtaksbrev, behandlingUuid, formVerdier)(e) : null
              }
              className={classNames(styles.buttonLink, 'lenke lenke--frittstaende')}
            >
              <FormattedMessage id="TilbakekrevingVedtakForm.ForhandvisBrev" />
            </a>
          </div>
        )}
      </HStack>
      <VerticalSpacer sixteenPx />
      {erRevurderingTilbakekrevingKlage && (
        <HStack>
          <ExclamationmarkTriangleFillIcon className={styles.infoTextIcon} />
          <FormattedMessage id="TilbakekrevingVedtakForm.Infotekst.Klage" />
        </HStack>
      )}
    </Form>
  );
};

export default TilbakekrevingVedtakForm;
