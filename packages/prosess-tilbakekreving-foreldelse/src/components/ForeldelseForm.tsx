import { type ReactElement, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, Heading, HStack, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { SubmitButton } from '@navikt/ft-form-hooks';
import { ForeldelseVurderingType } from '@navikt/ft-kodeverk';
import type { Aksjonspunkt } from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import {
  DDMMYYYY_DATE_FORMAT,
  decodeHtmlEntity,
  isAksjonspunktOpen,
  omitOne,
  sortPeriodsByFom,
} from '@navikt/ft-utils';

import { ForeldelseAksjonspunktCodes } from '../ForeldelseAksjonspunktCodes';
import type { FeilutbetalingPeriode, FeilutbetalingPerioderWrapper } from '../types/FeilutbetalingPerioder';
import type { ForeldelsesresultatActivity } from '../types/ForeldelsesresultatActivity';
import type { KodeverkMedNavn } from '../types/kodeverkMedNavn';
import type { KodeverkTilbakeForPanel } from '../types/KodeverkTilbakeForPanel';
import type { RelasjonsRolleType } from '../types/RelasjonsRolleType';
import type { TidslinjePeriode } from '../types/TidslinjePeriode';
import type { VurderForeldelseAp } from '../types/VurderForeldelseAp';
import {
  ForeldelsePeriodeForm,
  type FormValues as PeriodeFormValues,
  type PeriodeKladd,
} from './ForeldelsePeriodeForm';
import { periodeNøkkel } from './periodeNøkkel';
import {
  type BeregnBeløpParams,
  type BeregnBeløpResultat,
  PeriodeController,
  type PeriodeMedFeilutbetaling,
} from './splittePerioder/PeriodeController';
import { PeriodeInformasjon } from './splittePerioder/PeriodeInformasjon';
import { TilbakekrevingTimeline } from './timeline/TilbakekrevingTimeline';

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

const transformValues = (values: PeriodeFormValues[]): VurderForeldelseAp => {
  const foreldelsePerioder = values.map(period => ({
    fraDato: period.fom,
    tilDato: period.tom,
    begrunnelse: period.begrunnelse,
    foreldelseVurderingType: period.foreldet,
    foreldelsesfrist: period.foreldelsesfrist,
    oppdagelsesDato: period.oppdagelsesDato,
  }));
  return {
    '@type': ForeldelseAksjonspunktCodes.VURDER_FORELDELSE,
    kode: ForeldelseAksjonspunktCodes.VURDER_FORELDELSE,
    foreldelsePerioder,
  };
};

const lagForeldelsesresultatAktiviteter = (
  foreldelsePerioder: FeilutbetalingPeriode[],
): ForeldelsesresultatActivity[] =>
  foreldelsePerioder.toSorted(sortPeriodsByFom).map(p => ({
    ...p,
    feilutbetaling: p.belop,
    foreldet: p.foreldelseVurderingType === ForeldelseVurderingType.UDEFINERT ? undefined : p.foreldelseVurderingType,
    begrunnelse: decodeHtmlEntity(p.begrunnelse),
  }));

interface Props {
  behandlingUuid: string;
  aksjonspunkt: Aksjonspunkt;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: VurderForeldelseAp) => Promise<void>;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
  relasjonsRolleType: RelasjonsRolleType;
  relasjonsRolleTypeKodeverk: KodeverkMedNavn<RelasjonsRolleType>[];
  readOnly: boolean;
  beregnBelop: (data: BeregnBeløpParams) => Promise<BeregnBeløpResultat>;
  formData?: ForeldelseFormData;
  setFormData: (data: ForeldelseFormData) => void;
}

// Mellomlagret data for panelet. Skrives kun når panelet unmountes (dvs. ved bytte av fane/panel).
// `valgtPeriodeKey` gjør at riktig detaljpanel åpnes igjen, og `kladd` holder ubekreftede skjemaverdier
// for nettopp den perioden - se PeriodeKladd i ForeldelsePeriodeForm.
export type ForeldelseFormData = {
  perioder: ForeldelsesresultatActivity[];
  erEndret: boolean;
  valgtPeriodeKey?: string;
  kladd?: PeriodeKladd;
};

export const ForeldelseForm = ({
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
}: Props) => {
  const alleForeldelseresultatAktiviteter = lagForeldelsesresultatAktiviteter(perioderForeldelse.perioder);

  const [foreldelseresultatAktiviteter, setForeldelseresultatAktiviteter] = useState(
    formData?.perioder || alleForeldelseresultatAktiviteter,
  );
  // Kladden er kun relevant ved gjenåpning av panelet. Den forkastes så snart brukeren bytter periode,
  // fordi ubekreftede endringer kun skal overleve panelbytte - ikke periodebytte.
  const [periodeKladd, setPeriodeKladd] = useState<PeriodeKladd | undefined>(formData?.kladd);

  const [valgtPeriode, setValgtPeriode] = useState<ForeldelsesresultatActivity | undefined>(() => {
    if (formData) {
      return formData.valgtPeriodeKey
        ? formData.perioder.find(p => periodeNøkkel(p) === formData.valgtPeriodeKey)
        : undefined;
    }
    return alleForeldelseresultatAktiviteter.find(harApentAksjonspunkt);
  });
  const [isSubmitting, setSubmitting] = useState(false);
  const [isDirty, setDirty] = useState(formData?.erEndret ?? false);

  // Detaljpanelet mellomlagrer kladden i sin egen unmount. Dette flagget forteller om den unmounten
  // skyldes at brukeren byttet/lukket periode - da skal kladden forkastes i stedet for å lagres.
  const erPeriodebytteRef = useRef(false);

  const mellomlagre = (endring: Partial<ForeldelseFormData>): void => {
    setFormData({
      perioder: foreldelseresultatAktiviteter,
      erEndret: isDirty,
      valgtPeriodeKey: valgtPeriode ? periodeNøkkel(valgtPeriode) : undefined,
      kladd: periodeKladd,
      ...endring,
    });
  };

  const lagreKladd = (kladd: PeriodeKladd | undefined): void => {
    if (erPeriodebytteRef.current) {
      erPeriodebytteRef.current = false;
      return;
    }
    setPeriodeKladd(kladd);
    mellomlagre({ kladd });
  };

  const setPeriode = (periode?: TidslinjePeriode | ForeldelsesresultatActivity): void => {
    const valgt = periode
      ? foreldelseresultatAktiviteter.find(p => p.fom === periode.fom && p.tom === periode.tom)
      : undefined;
    if (valgt !== valgtPeriode) {
      erPeriodebytteRef.current = true;
    }
    setPeriodeKladd(undefined);
    setValgtPeriode(valgt);
    mellomlagre({ valgtPeriodeKey: valgt ? periodeNøkkel(valgt) : undefined, kladd: undefined });
  };

  const setNestePeriode = (): void => {
    const index = foreldelseresultatAktiviteter.findIndex(
      p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom,
    );
    const nesteIndex = index === foreldelseresultatAktiviteter.length - 1 ? index : index + 1;
    setPeriode(foreldelseresultatAktiviteter[nesteIndex]);
  };

  const setForrigePeriode = (): void => {
    const index = foreldelseresultatAktiviteter.findIndex(
      p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom,
    );
    const forrigeIndex = index === 0 ? index : index - 1;
    setPeriode(foreldelseresultatAktiviteter[forrigeIndex]);
  };

  const lukkPeriode = (): void => {
    setPeriode(undefined);
  };

  // Kladden i detaljpanelet er kun gyldig for perioden den ble laget for. Alt som endrer toppnivå-perioder
  // lukker perioden, og da skal kladden forkastes - den er erstattet av bekreftede verdier.
  const oppdaterPeriode = (values: PeriodeFormValues): void => {
    const verdier = omitOne(values, 'erSplittet');

    const otherThanUpdated = foreldelseresultatAktiviteter.filter(o => o.fom !== verdier.fom && o.tom !== verdier.tom);
    const sortedActivities = otherThanUpdated.concat(verdier).sort(sortPeriods);
    const nesteValgtePeriode = sortedActivities.find(harApentAksjonspunkt);

    erPeriodebytteRef.current = true;
    setForeldelseresultatAktiviteter(sortedActivities);
    setDirty(true);
    setPeriodeKladd(undefined);
    setValgtPeriode(nesteValgtePeriode);
    mellomlagre({
      perioder: sortedActivities,
      erEndret: true,
      valgtPeriodeKey: nesteValgtePeriode ? periodeNøkkel(nesteValgtePeriode) : undefined,
      kladd: undefined,
    });
  };

  const oppdaterSplittedePerioder = (perioder: PeriodeMedFeilutbetaling[]): void => {
    const periode = foreldelseresultatAktiviteter.find(p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom);

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

    // Beholder opprinnelig oppslag mot forrige periodeliste, slik at valget håndteres som før.
    const nyValgtPeriode = foreldelseresultatAktiviteter.find(
      p => p.fom === nyePerioder[0].fom && p.tom === nyePerioder[0].tom,
    );

    erPeriodebytteRef.current = true;
    setForeldelseresultatAktiviteter(sortedActivities);
    setDirty(true);
    setPeriodeKladd(undefined);
    setValgtPeriode(nyValgtPeriode);
    mellomlagre({
      perioder: sortedActivities,
      erEndret: true,
      valgtPeriodeKey: nyValgtPeriode ? periodeNøkkel(nyValgtPeriode) : undefined,
      kladd: undefined,
    });
  };

  const lagrePerioder = () => {
    setSubmitting(true);
    submitCallback(transformValues(foreldelseresultatAktiviteter));
  };

  const merknaderFraBeslutter = alleMerknaderFraBeslutter[ForeldelseAksjonspunktCodes.VURDER_FORELDELSE];

  const perioderFormatertForTidslinje = formaterPerioderForTidslinje(foreldelseresultatAktiviteter);
  const isApOpen = isAksjonspunktOpen(aksjonspunkt);
  const erAlleAksjonspunktLøst = perioderFormatertForTidslinje.every(p => !p.isAksjonspunktOpen);
  const valgtPeriodeFormatertForTidslinje = valgtPeriode
    ? perioderFormatertForTidslinje.find(p => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom)
    : undefined;

  return (
    <FaktaGruppe merknaderFraBeslutter={merknaderFraBeslutter} withoutBorder>
      <VStack gap="space-16">
        <Heading size="small" level="2">
          <FormattedMessage id="ForeldelseForm.Foreldelse" />
        </Heading>
        {!aksjonspunkt && (
          <>
            <BodyShort>
              <FormattedMessage id="ForeldelseForm.Foreldelsesloven" />
            </BodyShort>
            <BodyShort>
              <FormattedMessage id="ForeldelseForm.AutomatiskVurdert" />
            </BodyShort>
          </>
        )}
        {foreldelseresultatAktiviteter && aksjonspunkt && (
          <VStack gap="space-16">
            {isApOpen && <AksjonspunktHelpTextHTML>{getApTekst(aksjonspunkt)}</AksjonspunktHelpTextHTML>}
            <TilbakekrevingTimeline
              perioder={perioderFormatertForTidslinje}
              valgtPeriode={valgtPeriodeFormatertForTidslinje}
              setPeriode={setPeriode}
              relasjonsRolleType={relasjonsRolleType}
              relasjonsRolleTypeKodeverk={relasjonsRolleTypeKodeverk}
            />
            {valgtPeriode && (
              <div
                id="panel-tilbakekreving-foreldelse"
                aria-controls={valgtPeriodeFormatertForTidslinje?.id.toString()}
              >
                <Box borderWidth="1" padding="space-16">
                  <VStack gap="space-16">
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
                    <PeriodeInformasjon
                      feilutbetaling={valgtPeriode.feilutbetaling}
                      fom={valgtPeriode.fom}
                      tom={valgtPeriode.tom}
                    />
                    <ForeldelsePeriodeForm
                      key={valgtPeriode.fom}
                      periode={valgtPeriode}
                      periodeKladd={periodeKladd}
                      lagreKladd={lagreKladd}
                      oppdaterPeriode={oppdaterPeriode}
                      skjulPeriode={lukkPeriode}
                      readOnly={readOnly}
                      kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
                    />
                  </VStack>
                </Box>
              </div>
            )}
            <HStack>
              <SubmitButton
                isReadOnly={readOnly}
                isDirty={isDirty}
                isSubmittable={!valgtPeriode && erAlleAksjonspunktLøst}
                onClick={lagrePerioder}
                isSubmitting={isSubmitting}
              />
            </HStack>
          </VStack>
        )}
      </VStack>
    </FaktaGruppe>
  );
};
