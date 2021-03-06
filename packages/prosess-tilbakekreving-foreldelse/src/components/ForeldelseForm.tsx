import React, { ReactElement, FunctionComponent, useState, useMemo, useCallback } from 'react';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';

import { DDMMYYYY_DATE_FORMAT, decodeHtmlEntity, omitOne } from '@navikt/ft-utils';
import { FlexColumn, FlexRow, AksjonspunktHelpTextTemp, VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import {
  AlleKodeverkTilbakekreving,
  Aksjonspunkt,
  FeilutbetalingPeriode,
  FeilutbetalingPerioderWrapper,
} from '@navikt/ft-types';

import { AksjonspunktStatus, ForeldelseVurderingType } from '@navikt/ft-kodeverk';
import ForeldelsePeriodeForm, { FormValues as PeriodeFormValues } from './ForeldelsePeriodeForm';
import TilbakekrevingTimelinePanel from './timeline/TilbakekrevingTimelinePanel';
import ForeldelseTidslinjeHjelpetekster from './ForeldelseTidslinjeHjelpetekster';
import ForeldelsesresultatActivity from '../types/foreldelsesresultatActivitytsType';
import TidslinjePeriode from '../types/tidslinjePeriodeTsType';
import TilbakekrevingTimelineData from './splittePerioder/TilbakekrevingTimelineData';
import { PeriodeMedBelop } from './splittePerioder/PeriodeController';
import ProsessStegSubmitButton from './ProsessStegSubmitButton';

import styles from './foreldelseForm.less';
import ForeldelseAksjonspunktCodes from '../ForeldelseAksjonspunktCodes';
import VurderForeldelseAp from '../types/VurderForeldelseAp';

const sortPeriods = (periode1: ForeldelsesresultatActivity, periode2: ForeldelsesresultatActivity): number =>
  moment(periode1.fom).diff(moment(periode2.fom));

const getDate = (): string => moment().subtract(30, 'months').format(DDMMYYYY_DATE_FORMAT);
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

export const lagForeldelsesresultatAktiviteter = (
  foreldelsePerioder: FeilutbetalingPeriode[],
): ForeldelsesresultatActivity[] =>
  foreldelsePerioder.map(p => ({
    ...p,
    feilutbetaling: p.belop,
    foreldet: p.foreldelseVurderingType === ForeldelseVurderingType.UDEFINERT ? undefined : p.foreldelseVurderingType,
    begrunnelse: decodeHtmlEntity(p.begrunnelse),
  }));

interface OwnProps {
  behandlingUuid: string;
  aksjonspunkt: Aksjonspunkt;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: VurderForeldelseAp) => Promise<void>;
  alleKodeverk: AlleKodeverkTilbakekreving;
  navBrukerKjonn: string;
  readOnly: boolean;
  beregnBelop: (data: { behandlingUuid: string; perioder: PeriodeMedBelop[] }) => Promise<any>;
  formData?: ForeldelsesresultatActivity[];
  setFormData: (data: ForeldelsesresultatActivity[]) => void;
}

const ForeldelseForm: FunctionComponent<OwnProps> = ({
  submitCallback,
  navBrukerKjonn,
  aksjonspunkt,
  alleMerknaderFraBeslutter,
  perioderForeldelse,
  readOnly,
  alleKodeverk,
  beregnBelop,
  behandlingUuid,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

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
    setPeriode(foreldelseresultatAktiviteter[index + 1]);
  }, [foreldelseresultatAktiviteter, valgtPeriode]);

  const setForrigePeriode = useCallback((): void => {
    const index = foreldelseresultatAktiviteter.findIndex(
      p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom,
    );
    setPeriode(foreldelseresultatAktiviteter[index - 1]);
  }, [foreldelseresultatAktiviteter, valgtPeriode]);

  const togglePeriode = useCallback((): void => {
    const periode = valgtPeriode ? undefined : foreldelseresultatAktiviteter[0];
    setPeriode(periode);
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
      togglePeriode();

      const periodeMedApenAksjonspunkt = sortedActivities.find(harApentAksjonspunkt);
      if (periodeMedApenAksjonspunkt) {
        setPeriode(periodeMedApenAksjonspunkt);
      }
    },
    [foreldelseresultatAktiviteter, togglePeriode, harApentAksjonspunkt],
  );

  const oppdaterSplittedePerioder = useCallback(
    (perioder: ForeldelsesresultatActivity[]): void => {
      const periode = foreldelseresultatAktiviteter.find(
        p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom,
      );
      const nyePerioder = perioder.map(p => ({
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
      togglePeriode();
      setPeriode(nyePerioder[0]);
    },
    [foreldelseresultatAktiviteter, valgtPeriode, togglePeriode, harApentAksjonspunkt],
  );

  const lagrePerioder = useCallback(() => {
    setSubmitting(true);
    submitCallback(transformValues(foreldelseresultatAktiviteter));
  }, [foreldelseresultatAktiviteter]);

  const merknaderFraBeslutter = alleMerknaderFraBeslutter[ForeldelseAksjonspunktCodes.VURDER_FORELDELSE];

  const perioderFormatertForTidslinje = formaterPerioderForTidslinje(foreldelseresultatAktiviteter);
  const isApOpen = aksjonspunkt && aksjonspunkt.status === AksjonspunktStatus.OPPRETTET;
  const erAlleAksjonspunktL??st = perioderFormatertForTidslinje.every(p => !p.isAksjonspunktOpen);
  const valgtPeriodeFormatertForTidslinje = valgtPeriode
    ? perioderFormatertForTidslinje.find(p => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom)
    : undefined;

  return (
    <FaktaGruppe merknaderFraBeslutter={merknaderFraBeslutter} withoutBorder>
      <Undertittel>
        <FormattedMessage id="ForeldelseForm.Foreldelse" />
      </Undertittel>
      <VerticalSpacer twentyPx />
      {!aksjonspunkt && (
        <>
          <FlexRow>
            <FlexColumn>
              <FormattedMessage id="ForeldelseForm.Foreldelsesloven" />
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
          <FlexRow>
            <FlexColumn>
              <FormattedMessage id="ForeldelseForm.AutomatiskVurdert" />
            </FlexColumn>
          </FlexRow>
        </>
      )}
      {foreldelseresultatAktiviteter && aksjonspunkt && (
        <>
          <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>{getApTekst(aksjonspunkt)}</AksjonspunktHelpTextTemp>
          <VerticalSpacer twentyPx />
          <TilbakekrevingTimelinePanel
            perioder={perioderFormatertForTidslinje}
            valgtPeriode={valgtPeriodeFormatertForTidslinje}
            setPeriode={setPeriode}
            toggleDetaljevindu={togglePeriode}
            hjelpetekstKomponent={<ForeldelseTidslinjeHjelpetekster />}
            kjonn={navBrukerKjonn}
            intl={intl}
          />
          {valgtPeriode && (
            <div className={styles.container}>
              <TilbakekrevingTimelineData
                periode={valgtPeriode}
                callbackForward={setNestePeriode}
                callbackBackward={setForrigePeriode}
                // @ts-ignore Her er den ein typekonflikt som m?? fiksast!!
                oppdaterSplittedePerioder={oppdaterSplittedePerioder}
                readOnly={readOnly}
                behandlingUuid={behandlingUuid}
                beregnBelop={beregnBelop}
              />
              <ForeldelsePeriodeForm
                key={valgtPeriode.fom}
                periode={valgtPeriode}
                oppdaterPeriode={oppdaterPeriode}
                skjulPeriode={togglePeriode}
                readOnly={readOnly}
                alleKodeverk={alleKodeverk}
              />
            </div>
          )}
          <VerticalSpacer twentyPx />
          <ProsessStegSubmitButton
            isReadOnly={readOnly}
            isDirty={isDirty}
            isSubmittable={!valgtPeriode && erAlleAksjonspunktL??st}
            onClick={lagrePerioder}
            isSubmitting={isSubmitting}
          />
        </>
      )}
    </FaktaGruppe>
  );
};

export default ForeldelseForm;
