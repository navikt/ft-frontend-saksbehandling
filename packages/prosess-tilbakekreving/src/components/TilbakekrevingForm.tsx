import { useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, Box, Heading, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { SubmitButton } from '@navikt/ft-form-hooks';
import { ForeldelseVurderingType } from '@navikt/ft-kodeverk';
import { AksjonspunktHelpTextHTML, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity, omitOne } from '@navikt/ft-utils';

import type { VilkårResultat } from '../kodeverk/vilkarResultat';
import { TilbakekrevingAksjonspunktCodes } from '../TilbakekrevingAksjonspunktCodes';
import type { DataForPeriode } from '../types/DataForPeriode';
import type {
  DetaljerteFeilutbetalingsperioder,
  DetaljertFeilutbetalingPeriode,
} from '../types/DetaljerteFeilutbetalingsperioder';
import type { FeilutbetalingPerioderWrapper } from '../types/FeilutbetalingPerioder';
import type { KodeverkMedNavn } from '../types/kodeverkMedNavn';
import type { KodeverkMedNavnTilbakekreving, KodeverkTilbakeForPanel } from '../types/KodeverkTilbakeForPanel';
import type { RelasjonsRolleType } from '../types/RelasjonsRolleType';
import type { TidslinjePeriode } from '../types/TidslinjePeriode';
import type { VilkårsvurderingAp } from '../types/VilkårsvurderingAp';
import type { VilkårsvurdertePerioderWrapper, VilkårsvurdertPeriode } from '../types/VilkårsvurdertePerioder';
import { periodeNøkkel } from './periodeNøkkel';
import { type BeregnBeløpParams, PeriodeController, type SplittetPeriode } from './splittePerioder/PeriodeController';
import { PeriodeInformasjon } from './splittePerioder/PeriodeInformasjon';
import {
  type CustomPeriode,
  type CustomPerioder,
  type CustomVilkarsVurdertePeriode,
  type InitialValuesDetailForm,
  type PeriodeKladd,
  TilbakekrevingPeriodeForm,
} from './TilbakekrevingPeriodeForm';
import { AktsomhetFormPanel } from './tilbakekrevingPeriodePaneler/aktsomhet/AktsomhetFormPanel';
import { BelopetMottattIGodTroFormPanel } from './tilbakekrevingPeriodePaneler/godTro/BelopetMottattIGodTroFormPanel';
import { TilbakekrevingTimeline } from './timeline/TilbakekrevingTimeline';

dayjs.extend(isSameOrBefore);

const sortPeriods = (periode1: CustomVilkarsVurdertePeriode, periode2: CustomVilkarsVurdertePeriode) =>
  dayjs(periode1.fom).diff(dayjs(periode2.fom));

const harApentAksjonspunkt = (periode: CustomVilkarsVurdertePeriode) =>
  !periode.erForeldet && (periode.begrunnelse === undefined || periode.erSplittet);

const emptyFeltverdiOmFinnes = (periode: CustomVilkarsVurdertePeriode) => {
  const valgtVilkarResultatType = periode[periode.valgtVilkarResultatType];

  if ('tilbakekrevdBelop' in valgtVilkarResultatType) {
    return {
      ...periode,
      [periode.valgtVilkarResultatType]: {
        ...omitOne(valgtVilkarResultatType, 'tilbakekrevdBelop'),
      },
    };
  }

  if ('handletUaktsomhetGrad' in valgtVilkarResultatType) {
    const handletUaktsomhetGrad = valgtVilkarResultatType[valgtVilkarResultatType.handletUaktsomhetGrad];
    if (handletUaktsomhetGrad && handletUaktsomhetGrad.belopSomSkalTilbakekreves) {
      return {
        ...periode,
        [periode.valgtVilkarResultatType]: {
          ...valgtVilkarResultatType,
          [valgtVilkarResultatType.handletUaktsomhetGrad]: {
            ...omitOne(handletUaktsomhetGrad, 'belopSomSkalTilbakekreves'),
          },
        },
      };
    }
  }
  return periode;
};

const formaterPerioderForTidslinje = (
  vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[],
  perioder: DataForPeriode[] = [],
) =>
  perioder.map((periode: DataForPeriode, index: number): TidslinjePeriode => {
    const per = vilkarsVurdertePerioder.find(
      (p: CustomVilkarsVurdertePeriode) => p.fom === periode.fom && p.tom === periode.tom,
    );
    const erBelopetIBehold =
      // @ts-expect-error Fiks
      per && per[per.valgtVilkarResultatType] ? per[per.valgtVilkarResultatType].erBelopetIBehold : undefined;
    const erSplittet = per ? !!per.erSplittet : false;
    return {
      fom: periode.fom,
      tom: periode.tom,
      isAksjonspunktOpen: !periode.erForeldet && (per?.begrunnelse === undefined || erSplittet),
      isGodkjent: !(periode.erForeldet || erBelopetIBehold === false),
      id: index,
    };
  });

const finnOriginalPeriode = (
  lagretPeriode: CustomVilkarsVurdertePeriode | VilkårsvurdertPeriode,
  perioder: DetaljertFeilutbetalingPeriode[] | CustomPeriode[],
) =>
  perioder.find(
    // @ts-expect-error Fiks
    (periode: CustomPeriode) =>
      !dayjs(lagretPeriode.fom).isBefore(dayjs(periode.fom)) && !dayjs(lagretPeriode.tom).isAfter(dayjs(periode.tom)),
  );

const erIkkeLagret = (periode: DetaljertFeilutbetalingPeriode, lagredePerioder: { tom: string; fom: string }[]) =>
  lagredePerioder.every(lagretPeriode => {
    const isOverlapping =
      dayjs(periode.fom).isSameOrBefore(dayjs(lagretPeriode.tom)) &&
      dayjs(lagretPeriode.fom).isSameOrBefore(dayjs(periode.tom));
    return !isOverlapping;
  });

const slaSammenOriginaleOgLagredePeriode = (
  perioder: DetaljertFeilutbetalingPeriode[],
  vilkarsvurdering: VilkårsvurdertePerioderWrapper,
  rettsgebyr: DetaljerteFeilutbetalingsperioder['rettsgebyr'],
): CustomPerioder => {
  const totalbelop = perioder.reduce(
    (acc: number, periode: DetaljertFeilutbetalingPeriode) => acc + periode.feilutbetaling,
    0,
  );
  const erTotalBelopUnder4Rettsgebyr = totalbelop < rettsgebyr * 4;
  const lagredeVilkarsvurdertePerioder = vilkarsvurdering.vilkarsVurdertePerioder;

  const lagredePerioder = lagredeVilkarsvurdertePerioder.map((lagretPeriode: VilkårsvurdertPeriode): CustomPeriode => {
    const originalPeriode = finnOriginalPeriode(lagretPeriode, perioder);
    return {
      ...originalPeriode,
      harMerEnnEnYtelse: originalPeriode && originalPeriode.ytelser.length > 1,
      ...omitOne(lagretPeriode, 'feilutbetalingBelop'),
      // @ts-expect-error Fiks
      feilutbetaling: lagretPeriode.feilutbetalingBelop,
      erTotalBelopUnder4Rettsgebyr,
    };
  });

  const originaleUrortePerioder = perioder
    .filter((periode: DetaljertFeilutbetalingPeriode) => erIkkeLagret(periode, lagredePerioder))
    .map((periode: DetaljertFeilutbetalingPeriode): CustomPeriode => ({
      ...periode,
      harMerEnnEnYtelse: periode.ytelser.length > 1,
      erTotalBelopUnder4Rettsgebyr,
    }));

  return {
    perioder: originaleUrortePerioder.concat(lagredePerioder),
  };
};

const settOppPeriodeDataForDetailForm = (
  perioder: CustomPerioder,
  perioderFormState: CustomVilkarsVurdertePeriode[],
): DataForPeriode[] | undefined => {
  if (!perioder || !perioderFormState) {
    return undefined;
  }

  return perioderFormState.map((periodeFormState: CustomVilkarsVurdertePeriode) => {
    const periode = finnOriginalPeriode(periodeFormState, perioder.perioder) as CustomPeriode; // NOSONAR
    const erForeldet = periode.foreldelseVurderingType
      ? periode.foreldelseVurderingType === ForeldelseVurderingType.FORELDET
      : periode.foreldet;
    return {
      redusertBeloper: periode.redusertBeloper,
      ytelser: periode.ytelser,
      feilutbetaling: periodeFormState.feilutbetaling ? periodeFormState.feilutbetaling : periode.feilutbetaling,
      erTotalBelopUnder4Rettsgebyr: periode.erTotalBelopUnder4Rettsgebyr,
      fom: periodeFormState.fom,
      tom: periodeFormState.tom,
      årsak: periode.årsak,
      begrunnelse: periode.begrunnelse,
      erForeldet: erForeldet || false,
    };
  });
};

const periodeFormBuildInitialValues = (
  periode: any,
  foreldelsePerioder: FeilutbetalingPerioderWrapper,
): InitialValuesDetailForm => {
  const { vilkarResultat, begrunnelse, vilkarResultatInfo } = periode;

  const vilkarResultatKode = vilkarResultat?.kode ?? vilkarResultat;
  let foreldetData;
  const erForeldet = periode.erForeldet ?? periode.foreldet;
  if (erForeldet) {
    const foreldelsePeriode = foreldelsePerioder.perioder.find(p => p.fom === periode.fom && p.tom === periode.tom);
    foreldetData = {
      erForeldet,
      periodenErForeldet: true,
      foreldetBegrunnelse: foreldelsePeriode ? decodeHtmlEntity(foreldelsePeriode.begrunnelse) : undefined,
    };
  } else {
    foreldetData = { erForeldet: false, periodenErForeldet: undefined, foreldetBegrunnelse: undefined };
  }

  const initialValues = {
    valgtVilkarResultatType: vilkarResultatKode,
    begrunnelse: decodeHtmlEntity(begrunnelse),
    harMerEnnEnYtelse: periode.ytelser.length > 1,
    ...foreldetData,
  };

  const godTroData =
    vilkarResultatKode === ('GOD_TRO' satisfies VilkårResultat)
      ? BelopetMottattIGodTroFormPanel.buildIntialValues(vilkarResultatInfo)
      : {};
  const annetData =
    vilkarResultatKode !== undefined && vilkarResultatKode !== ('GOD_TRO' satisfies VilkårResultat)
      ? AktsomhetFormPanel.buildInitalValues(vilkarResultatInfo)
      : {};
  return {
    ...initialValues,
    // @ts-expect-error Fiks
    vurderingBegrunnelse: vilkarResultatInfo ? decodeHtmlEntity(vilkarResultatInfo.begrunnelse) : undefined,
    [initialValues.valgtVilkarResultatType]: {
      ...godTroData,
      ...annetData,
    },
  };
};

const periodeFormTransformValues = (
  values: CustomVilkarsVurdertePeriode,
  sarligGrunnTyper: KodeverkMedNavnTilbakekreving<'SærligGrunn'>[],
) => {
  const { valgtVilkarResultatType, begrunnelse, vurderingBegrunnelse } = values;
  const info = values[valgtVilkarResultatType];

  const godTroData =
    valgtVilkarResultatType === ('GOD_TRO' satisfies VilkårResultat) && 'erBelopetIBehold' in info
      ? BelopetMottattIGodTroFormPanel.transformValues(info, vurderingBegrunnelse)
      : {};
  const annetData =
    valgtVilkarResultatType !== ('GOD_TRO' satisfies VilkårResultat) && 'handletUaktsomhetGrad' in info
      ? AktsomhetFormPanel.transformValues(info, sarligGrunnTyper, vurderingBegrunnelse)
      : {};

  return {
    begrunnelse,
    fom: values.fom,
    tom: values.tom,
    vilkarResultat: valgtVilkarResultatType,
    vilkarResultatInfo: {
      ...godTroData,
      ...annetData,
    },
  };
};

const buildInitialValues = (
  perioder: CustomPerioder,
  foreldelsePerioder: FeilutbetalingPerioderWrapper,
): CustomVilkarsVurdertePeriode[] =>
  perioder.perioder
    .map((p: CustomPeriode) => ({
      ...periodeFormBuildInitialValues(p, foreldelsePerioder),
      fom: p.fom,
      tom: p.tom,
    }))
    .sort(sortPeriods);

const transformValues = (
  vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[],
  sarligGrunnTyper: KodeverkMedNavnTilbakekreving<'SærligGrunn'>[],
): VilkårsvurderingAp => ({
  '@type': TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING,
  kode: TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING,
  vilkarsVurdertePerioder: vilkarsVurdertePerioder
    .filter((p: CustomVilkarsVurdertePeriode) => !p.erForeldet)
    .map((p: CustomVilkarsVurdertePeriode) => periodeFormTransformValues(p, sarligGrunnTyper)),
});

const validerOm6LeddBrukesPåAllePerioder = (vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[]) => {
  if (!vilkarsVurdertePerioder) {
    return undefined;
  }
  const antallPerioderMedAksjonspunkt = vilkarsVurdertePerioder.reduce(
    (sum: number, periode) => (!periode.erForeldet ? sum + 1 : sum),
    0,
  );
  if (antallPerioderMedAksjonspunkt < 2) {
    return undefined;
  }

  const antallValgt = vilkarsVurdertePerioder.reduce((sum: number, periode: CustomVilkarsVurdertePeriode) => {
    const { valgtVilkarResultatType } = periode;
    const vilkarResultatInfo = periode[valgtVilkarResultatType];
    if ('handletUaktsomhetGrad' in vilkarResultatInfo) {
      const { handletUaktsomhetGrad } = vilkarResultatInfo;
      const info = vilkarResultatInfo[handletUaktsomhetGrad];
      if (info) {
        return info.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr === false ? sum + 1 : sum;
      }
    }
    return sum;
  }, 0);
  if (antallValgt > 0 && antallValgt !== vilkarsVurdertePerioder.length) {
    return 'TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr';
  }
  return undefined;
};

// Mellomlagret data for panelet. Skrives kun når panelet unmountes (dvs. ved bytte av fane/panel).
// `valgtPeriodeKey` gjør at riktig detaljpanel åpnes igjen, og `kladd` holder ubekreftede skjemaverdier
// for nettopp den perioden - se PeriodeKladd i TilbakekrevingPeriodeForm.
export type TilbakekrevingFormData = {
  perioder: CustomVilkarsVurdertePeriode[];
  erEndret: boolean;
  valgtPeriodeKey?: string;
  kladd?: PeriodeKladd;
};

interface Props {
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
  submitCallback: (aksjonspunktData: VilkårsvurderingAp) => Promise<void>;
  isReadOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  vilkarvurdering: VilkårsvurdertePerioderWrapper;
  relasjonsRolleType: RelasjonsRolleType;
  relasjonsRolleTypeKodeverk: KodeverkMedNavn<RelasjonsRolleType>[];
  beregnBelop: (params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>;
  behandlingUuid: string;
  formData?: TilbakekrevingFormData;
  setFormData: (data: TilbakekrevingFormData) => void;
}

/**
 * TilbakekrevingForm
 *
 * Behandlingspunkt Tilbakekreving. Setter opp en tidslinje som lar en velge periode. Ved valg blir et detaljevindu vist.
 */
export const TilbakekrevingForm = ({
  perioderForeldelse,
  kodeverkSamlingFpTilbake,
  vilkarvurderingsperioder,
  submitCallback,
  isReadOnly,
  alleMerknaderFraBeslutter,
  vilkarvurdering,
  relasjonsRolleType,
  relasjonsRolleTypeKodeverk,
  beregnBelop,
  behandlingUuid,
  formData,
  setFormData,
}: Props) => {
  const perioder = vilkarvurderingsperioder.perioder;
  const rettsgebyr = vilkarvurderingsperioder.rettsgebyr;

  const sammenslåttePerioder = slaSammenOriginaleOgLagredePeriode(perioder, vilkarvurdering, rettsgebyr);
  const [vilkårsvurdertePerioder, setVilkårsvurdertePerioder] = useState<CustomVilkarsVurdertePeriode[]>(
    formData?.perioder || buildInitialValues(sammenslåttePerioder, perioderForeldelse),
  );
  // Kladden er kun relevant ved gjenåpning av panelet. Den forkastes så snart brukeren bytter periode,
  // fordi ubekreftede endringer kun skal overleve panelbytte - ikke periodebytte.
  const [periodeKladd, setPeriodeKladd] = useState<PeriodeKladd | undefined>(formData?.kladd);

  const [isDirty, setDirty] = useState(formData?.erEndret ?? false);
  const [valgtPeriode, setValgtPeriode] = useState<CustomVilkarsVurdertePeriode | undefined>(() => {
    if (formData) {
      return formData.valgtPeriodeKey
        ? formData.perioder.find(p => periodeNøkkel(p) === formData.valgtPeriodeKey)
        : undefined;
    }
    return vilkårsvurdertePerioder.find(harApentAksjonspunkt);
  });
  const [isSubmitting, setSubmitting] = useState(false);

  // Detaljpanelet mellomlagrer kladden i sin egen unmount, og da er denne komponentens render-closure
  // allerede utdatert. Refen holder derfor siste skrevne data, slik at kladden legges oppå den og ikke
  // overskriver f.eks. en nyvalgt periode med gammel verdi.
  const sisteFormDataRef = useRef<TilbakekrevingFormData>({
    perioder: vilkårsvurdertePerioder,
    erEndret: isDirty,
    valgtPeriodeKey: valgtPeriode ? periodeNøkkel(valgtPeriode) : undefined,
    kladd: periodeKladd,
  });

  const mellomlagre = (endring: Partial<TilbakekrevingFormData>) => {
    const data = {
      perioder: vilkårsvurdertePerioder,
      erEndret: isDirty,
      valgtPeriodeKey: valgtPeriode ? periodeNøkkel(valgtPeriode) : undefined,
      kladd: periodeKladd,
      ...endring,
    };
    sisteFormDataRef.current = data;
    setFormData(data);
  };

  const lagreKladd = (kladd: PeriodeKladd | undefined) => {
    const forrige = sisteFormDataRef.current;
    // Hører kladden til en annen periode enn den som nå er valgt, skyldes unmounten et periodebytte.
    const skalBeholdes = kladd !== undefined && kladd.periodeKey === forrige.valgtPeriodeKey;
    const data = { ...forrige, kladd: skalBeholdes ? kladd : undefined };
    sisteFormDataRef.current = data;
    setPeriodeKladd(data.kladd);
    setFormData(data);
  };

  const valideringsmeldingId = validerOm6LeddBrukesPåAllePerioder(vilkårsvurdertePerioder);

  const dataForDetailForm = settOppPeriodeDataForDetailForm(sammenslåttePerioder, vilkårsvurdertePerioder);
  const antallPerioderMedAksjonspunkt = vilkårsvurdertePerioder.reduce(
    (sum: number, periode) => (!periode.erForeldet ? sum + 1 : sum),
    0,
  );
  const merknaderFraBeslutter = alleMerknaderFraBeslutter[TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING];

  const lagrePerioder = () => {
    setSubmitting(true);
    submitCallback(transformValues(vilkårsvurdertePerioder, kodeverkSamlingFpTilbake['SærligGrunn']));
  };

  const perioderFormatertForTidslinje = formaterPerioderForTidslinje(vilkårsvurdertePerioder, dataForDetailForm);
  const isApOpen = perioderFormatertForTidslinje.some(p => p.isAksjonspunktOpen);
  const valgtPeriodeFormatertForTidslinje = valgtPeriode
    ? perioderFormatertForTidslinje.find(
        (p: TidslinjePeriode) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom,
      )
    : undefined;

  const setPeriode = (periode?: CustomVilkarsVurdertePeriode | TidslinjePeriode) => {
    const valgt = periode
      ? vilkårsvurdertePerioder.find(p => p.fom === periode.fom && p.tom === periode.tom)
      : undefined;
    setPeriodeKladd(undefined);
    setValgtPeriode(valgt);
    mellomlagre({ valgtPeriodeKey: valgt ? periodeNøkkel(valgt) : undefined, kladd: undefined });
  };

  const setNestePeriode = () => {
    const index = vilkårsvurdertePerioder.findIndex(p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom);
    setPeriode(vilkårsvurdertePerioder[index + 1]);
  };

  const setForrigePeriode = () => {
    const index = vilkårsvurdertePerioder.findIndex(p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom);
    setPeriode(vilkårsvurdertePerioder[index - 1]);
  };

  const lukkPeriode = () => {
    setPeriode(undefined);
  };

  // Kladden i detaljpanelet er kun gyldig for perioden den ble laget for. Alt som endrer toppnivå-perioder
  // lukker perioden, og da skal kladden forkastes - den er erstattet av bekreftede verdier.
  const oppdaterPeriode = (values: CustomVilkarsVurdertePeriode) => {
    const verdier = omitOne(values, 'erSplittet');

    const otherThanUpdated = vilkårsvurdertePerioder.filter(o => o.fom !== verdier.fom && o.tom !== verdier.tom);
    const sortedActivities = otherThanUpdated.concat(verdier).sort(sortPeriods);
    const nesteValgtePeriode = sortedActivities.find(harApentAksjonspunkt);

    setVilkårsvurdertePerioder(sortedActivities);
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

  const oppdaterSplittedePerioder = (oppdatertePerioder: SplittetPeriode[]) => {
    const periode = vilkårsvurdertePerioder.find(p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom);
    if (periode) {
      const nyePerioder = oppdatertePerioder.map(p => ({
        ...emptyFeltverdiOmFinnes(periode),
        ...p,
        erSplittet: true,
      }));

      const otherThanUpdated = vilkårsvurdertePerioder.filter(
        o => o.fom !== valgtPeriode?.fom && o.tom !== valgtPeriode?.tom,
      );
      const sortedActivities = otherThanUpdated.concat(nyePerioder).sort(sortPeriods);

      // Beholder opprinnelig oppslag mot forrige periodeliste, slik at valget håndteres som før.
      const nyValgtPeriode = vilkårsvurdertePerioder.find(
        p => p.fom === nyePerioder[0].fom && p.tom === nyePerioder[0].tom,
      );

      setDirty(true);
      setVilkårsvurdertePerioder(sortedActivities);
      setPeriodeKladd(undefined);
      setValgtPeriode(nyValgtPeriode);
      mellomlagre({
        perioder: sortedActivities,
        erEndret: true,
        valgtPeriodeKey: nyValgtPeriode ? periodeNøkkel(nyValgtPeriode) : undefined,
        kladd: undefined,
      });
    }
  };

  const valgtData = dataForDetailForm
    ? dataForDetailForm.find(p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom)
    : undefined;

  return (
    <FaktaGruppe merknaderFraBeslutter={merknaderFraBeslutter} withoutBorder>
      <VStack gap="space-16">
        <Heading size="small" level="2">
          <FormattedMessage id="Behandlingspunkt.Tilbakekreving" />
        </Heading>
        {isApOpen && (
          <AksjonspunktHelpTextHTML>
            <FormattedMessage id="TilbakekrevingForm.AksjonspunktHjelpetekst" />
          </AksjonspunktHelpTextHTML>
        )}
        {vilkårsvurdertePerioder && (
          <>
            <TilbakekrevingTimeline
              perioder={perioderFormatertForTidslinje}
              valgtPeriode={valgtPeriodeFormatertForTidslinje}
              setPeriode={setPeriode}
              relasjonsRolleType={relasjonsRolleType}
              relasjonsRolleTypeKodeverk={relasjonsRolleTypeKodeverk}
            />
            {valgtPeriode && valgtData && (
              <div id="panel-tilbakekreving" aria-controls={valgtPeriodeFormatertForTidslinje?.id.toString()}>
                <Box borderWidth="1" padding="space-16">
                  <VStack gap="space-16">
                    <PeriodeController
                      setNestePeriode={setNestePeriode}
                      setForrigePeriode={setForrigePeriode}
                      periode={valgtData}
                      readOnly={isReadOnly}
                      oppdaterSplittedePerioder={oppdaterSplittedePerioder}
                      behandlingUuid={behandlingUuid}
                      beregnBelop={beregnBelop}
                      lukkPeriode={lukkPeriode}
                    />
                    <PeriodeInformasjon
                      feilutbetaling={valgtData.feilutbetaling}
                      fom={valgtData.fom}
                      tom={valgtData.tom}
                      arsakHendelseNavn={
                        kodeverkSamlingFpTilbake['HendelseType'].find(ht => ht.kode === valgtData.årsak?.hendelseType)
                          ?.navn
                      }
                    />
                    <TilbakekrevingPeriodeForm
                      key={valgtPeriodeFormatertForTidslinje?.id}
                      periode={valgtPeriode}
                      periodeKladd={periodeKladd}
                      lagreKladd={lagreKladd}
                      data={valgtData}
                      antallPerioderMedAksjonspunkt={antallPerioderMedAksjonspunkt}
                      readOnly={isReadOnly || valgtPeriode?.erForeldet === true}
                      skjulPeriode={lukkPeriode}
                      oppdaterPeriode={oppdaterPeriode}
                      kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
                      vilkarsVurdertePerioder={vilkårsvurdertePerioder}
                    />
                  </VStack>
                </Box>
              </div>
            )}
          </>
        )}
        {valideringsmeldingId && (
          <Alert variant="error">
            <FormattedMessage id={valideringsmeldingId} />
          </Alert>
        )}
        <div>
          <SubmitButton
            isReadOnly={isReadOnly || valgtPeriode?.erForeldet === true}
            isDirty={isDirty}
            isSubmittable={!isApOpen && !valgtPeriode && !valideringsmeldingId}
            onClick={lagrePerioder}
            isSubmitting={isSubmitting}
          />
        </div>
      </VStack>
    </FaktaGruppe>
  );
};
