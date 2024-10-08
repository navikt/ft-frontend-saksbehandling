import React, { ReactElement, FunctionComponent, useState, useMemo, useCallback } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Heading, Panel } from '@navikt/ds-react';

import { DDMMYYYY_DATE_FORMAT, decodeHtmlEntity, omitOne } from '@navikt/ft-utils';
import { AksjonspunktHelpTextTemp, VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { SubmitButton } from '@ft-frontend-saksbehandling/internal-components';
import { Aksjonspunkt, FeilutbetalingPeriode, FeilutbetalingPerioderWrapper, KodeverkMedNavn } from '@navikt/ft-types';

import { AksjonspunktStatus, ForeldelseVurderingType } from '@navikt/ft-kodeverk';
import ForeldelsePeriodeForm, { FormValues as PeriodeFormValues } from './ForeldelsePeriodeForm';
import TilbakekrevingTimeline from './timeline/TilbakekrevingTimeline';
import ForeldelsesresultatActivity from '../types/foreldelsesresultatActivitytsType';
import TidslinjePeriode from '../types/tidslinjePeriodeTsType';
import PeriodeController, { PeriodeMedBelop, PeriodeMedFeilutbetaling } from './splittePerioder/PeriodeController';

import styles from './foreldelseForm.module.css';
import ForeldelseAksjonspunktCodes from '../ForeldelseAksjonspunktCodes';
import VurderForeldelseAp from '../types/VurderForeldelseAp';
import KodeverkFpTilbakeForPanel from '../types/kodeverkFpTilbakeForPanel';
import PeriodeInformasjon from './splittePerioder/PeriodeInformasjon';

const sortPeriods = (periode1: ForeldelsesresultatActivity, periode2: ForeldelsesresultatActivity): number =>
  dayjs(periode1.fom).diff(dayjs(periode2.fom));

const getDate = (): string => dayjs().subtract(30, 'months').format(DDMMYYYY_DATE_FORMAT);
const getApTekst = (aksjonspunkt: Aksjonspunkt): ReactElement[] =>
  aksjonspunkt
    ? [
        <FormattedMessage
          id={`ForeldelseForm.AksjonspunktHelpText.${aksjonspunkt.definisjon}`}
          key="vurderForeldelse"
          values={{ dato: getDate() }}
        />,
      ]
    : [];

const harApentAksjonspunkt = (periode: ForeldelsesresultatActivity): boolean =>
  (!periode.foreldelseVurderingType || periode.foreldelseVurderingType === ForeldelseVurderingType.UDEFINERT) &&
  (!periode.begrunnelse || !!periode.erSplittet);

const formaterPerioderForTidslinje = (perioder: ForeldelsesresultatActivity[] = []): TidslinjePeriode[] =>
  perioder.map((periode: ForeldelsesresultatActivity, index: number) => ({
    fom: periode.fom,
    tom: periode.tom,
    isAksjonspunktOpen: harApentAksjonspunkt(periode),
    isGodkjent:
      ForeldelseVurderingType.FORELDET !== periode.foreldet && ForeldelseVurderingType.UDEFINERT !== periode.foreldet,
    id: index,
  }));

export const transformValues = (values: PeriodeFormValues[]): VurderForeldelseAp => {
  const foreldelsePerioder = values.map(period => ({
    fraDato: period.fom,
    tilDato: period.tom,
    begrunnelse: period.begrunnelse,
    foreldelseVurderingType: period.foreldet,
    foreldelsesfrist: period.foreldelsesfrist,
    oppdagelsesDato: period.oppdagelsesDato,
  }));
  return {
    foreldelsePerioder,
    kode: ForeldelseAksjonspunktCodes.VURDER_FORELDELSE,
  };
};

const sorterPerioder = (periode1: FeilutbetalingPeriode, periode2: FeilutbetalingPeriode) => {
  if (periode1.fom < periode2.fom) {
    return -1;
  }
  if (periode1.fom > periode2.fom) {
    return 1;
  }
  return 0;
};

export const lagForeldelsesresultatAktiviteter = (
  foreldelsePerioder: FeilutbetalingPeriode[],
): ForeldelsesresultatActivity[] =>
  [...foreldelsePerioder].sort(sorterPerioder).map(p => ({
    ...p,
    feilutbetaling: p.belop,
    foreldet: p.foreldelseVurderingType === ForeldelseVurderingType.UDEFINERT ? undefined : p.foreldelseVurderingType,
    begrunnelse: decodeHtmlEntity(p.begrunnelse),
  }));

export interface OwnProps {
  behandlingUuid: string;
  aksjonspunkt: Aksjonspunkt;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: VurderForeldelseAp) => Promise<void>;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  relasjonsRolleType: string;
  relasjonsRolleTypeKodeverk: KodeverkMedNavn[];
  readOnly: boolean;
  beregnBelop: (data: { behandlingUuid: string; perioder: PeriodeMedBelop[] }) => Promise<any>;
  formData?: ForeldelsesresultatActivity[];
  setFormData: (data: ForeldelsesresultatActivity[]) => void;
}

const ForeldelseForm: FunctionComponent<OwnProps> = ({
  submitCallback,
  relasjonsRolleType,
  relasjonsRolleTypeKodeverk,
  aksjonspunkt,
  alleMerknaderFraBeslutter,
  perioderForeldelse,
  readOnly,
  kodeverkSamlingFpTilbake,
  beregnBelop,
  behandlingUuid,
  formData,
  setFormData,
}) => {
  const alleForeldelseresultatAktiviteter = useMemo(
    () => lagForeldelsesresultatAktiviteter(perioderForeldelse.perioder),
    [perioderForeldelse.perioder],
  );

  const [foreldelseresultatAktiviteter, setForeldelseresultatAktiviteter] = useState(
    formData || alleForeldelseresultatAktiviteter,
  );

  const [valgtPeriode, setValgtPeriode] = useState<ForeldelsesresultatActivity | undefined>(
    foreldelseresultatAktiviteter?.find(harApentAksjonspunkt),
  );
  const [isSubmitting, setSubmitting] = useState(false);
  const [isDirty, setDirty] = useState(!!formData);

  const setPeriode = (periode?: TidslinjePeriode | ForeldelsesresultatActivity): void => {
    const valgt = periode
      ? foreldelseresultatAktiviteter.find(p => p.fom === periode.fom && p.tom === periode.tom)
      : undefined;
    setValgtPeriode(valgt);
  };

  const setNestePeriode = useCallback((): void => {
    const index = foreldelseresultatAktiviteter.findIndex(
      p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom,
    );
    const nesteIndex = index === foreldelseresultatAktiviteter.length - 1 ? index : index + 1;
    setPeriode(foreldelseresultatAktiviteter[nesteIndex]);
  }, [foreldelseresultatAktiviteter, valgtPeriode]);

  const setForrigePeriode = useCallback((): void => {
    const index = foreldelseresultatAktiviteter.findIndex(
      p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom,
    );
    const forrigeIndex = index === 0 ? index : index - 1;
    setPeriode(foreldelseresultatAktiviteter[forrigeIndex]);
  }, [foreldelseresultatAktiviteter, valgtPeriode]);

  const lukkPeriode = useCallback((): void => {
    setPeriode(undefined);
  }, [valgtPeriode, foreldelseresultatAktiviteter]);

  const oppdaterPeriode = useCallback(
    (values: PeriodeFormValues): void => {
      const verdier = omitOne(values, 'erSplittet');

      const otherThanUpdated = foreldelseresultatAktiviteter.filter(
        o => o.fom !== verdier.fom && o.tom !== verdier.tom,
      );
      const sortedActivities = otherThanUpdated.concat(verdier).sort(sortPeriods);
      setForeldelseresultatAktiviteter(sortedActivities);
      setFormData(sortedActivities);
      setDirty(true);
      lukkPeriode();

      const periodeMedApenAksjonspunkt = sortedActivities.find(harApentAksjonspunkt);
      if (periodeMedApenAksjonspunkt) {
        setPeriode(periodeMedApenAksjonspunkt);
      }
    },
    [foreldelseresultatAktiviteter, lukkPeriode, harApentAksjonspunkt],
  );

  const oppdaterSplittedePerioder = useCallback(
    (perioder: PeriodeMedFeilutbetaling[]): void => {
      const periode = foreldelseresultatAktiviteter.find(
        p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom,
      );

      if (periode === undefined) {
        throw new TypeError(`Periode skal alltid finnes. Fom: ${valgtPeriode?.fom} Tom: ${valgtPeriode?.tom}`);
      }

      const nyePerioder = perioder.map<ForeldelsesresultatActivity>(p => ({
        ...periode,
        ...p,
        erSplittet: true,
      }));

      const otherThanUpdated = foreldelseresultatAktiviteter.filter(
        o => o.fom !== valgtPeriode?.fom && o.tom !== valgtPeriode?.tom,
      );
      const sortedActivities = otherThanUpdated.concat(nyePerioder).sort(sortPeriods);

      setForeldelseresultatAktiviteter(sortedActivities);
      setFormData(sortedActivities);
      setDirty(true);
      lukkPeriode();
      setPeriode(nyePerioder[0]);
    },
    [foreldelseresultatAktiviteter, valgtPeriode, lukkPeriode, harApentAksjonspunkt],
  );

  const lagrePerioder = useCallback(() => {
    setSubmitting(true);
    submitCallback(transformValues(foreldelseresultatAktiviteter));
  }, [foreldelseresultatAktiviteter]);

  const merknaderFraBeslutter = alleMerknaderFraBeslutter[ForeldelseAksjonspunktCodes.VURDER_FORELDELSE];

  const perioderFormatertForTidslinje = formaterPerioderForTidslinje(foreldelseresultatAktiviteter);
  const isApOpen = aksjonspunkt && aksjonspunkt.status === AksjonspunktStatus.OPPRETTET;
  const erAlleAksjonspunktLøst = perioderFormatertForTidslinje.every(p => !p.isAksjonspunktOpen);
  const valgtPeriodeFormatertForTidslinje = valgtPeriode
    ? perioderFormatertForTidslinje.find(p => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom)
    : undefined;

  return (
    <FaktaGruppe merknaderFraBeslutter={merknaderFraBeslutter} withoutBorder>
      <Heading size="small">
        <FormattedMessage id="ForeldelseForm.Foreldelse" />
      </Heading>
      <VerticalSpacer twentyPx />
      {!aksjonspunkt && (
        <>
          <BodyShort>
            <FormattedMessage id="ForeldelseForm.Foreldelsesloven" />
          </BodyShort>
          <VerticalSpacer eightPx />
          <BodyShort>
            <FormattedMessage id="ForeldelseForm.AutomatiskVurdert" />
          </BodyShort>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {foreldelseresultatAktiviteter && aksjonspunkt && (
        <>
          <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>{getApTekst(aksjonspunkt)}</AksjonspunktHelpTextTemp>
          <VerticalSpacer twentyPx />
          <TilbakekrevingTimeline
            perioder={perioderFormatertForTidslinje}
            valgtPeriode={valgtPeriodeFormatertForTidslinje}
            setPeriode={setPeriode}
            relasjonsRolleType={relasjonsRolleType}
            relasjonsRolleTypeKodeverk={relasjonsRolleTypeKodeverk}
          />
          {valgtPeriode && (
            <div id="panel-tilbakekreving-foreldelse" aria-controls={valgtPeriodeFormatertForTidslinje?.id.toString()}>
              <div className={styles.space} />
              <Panel border>
                <PeriodeController
                  setNestePeriode={setNestePeriode}
                  setForrigePeriode={setForrigePeriode}
                  valgtPeriode={valgtPeriode}
                  readOnly={readOnly}
                  oppdaterSplittedePerioder={oppdaterSplittedePerioder}
                  behandlingUuid={behandlingUuid}
                  beregnBelop={beregnBelop}
                  lukkPeriode={lukkPeriode}
                />
                <VerticalSpacer sixteenPx />
                <PeriodeInformasjon
                  feilutbetaling={valgtPeriode.feilutbetaling}
                  fom={valgtPeriode.fom}
                  tom={valgtPeriode.tom}
                />
                <ForeldelsePeriodeForm
                  key={valgtPeriode.fom}
                  periode={valgtPeriode}
                  oppdaterPeriode={oppdaterPeriode}
                  skjulPeriode={lukkPeriode}
                  readOnly={readOnly}
                  kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
                />
              </Panel>
            </div>
          )}
          <VerticalSpacer twentyPx />
          <SubmitButton
            isReadOnly={readOnly}
            isDirty={isDirty}
            isSubmittable={!valgtPeriode && erAlleAksjonspunktLøst}
            onClick={lagrePerioder}
            isSubmitting={isSubmitting}
          />
        </>
      )}
    </FaktaGruppe>
  );
};

export default ForeldelseForm;
