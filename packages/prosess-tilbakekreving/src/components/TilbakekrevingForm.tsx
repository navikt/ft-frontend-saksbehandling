import { useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, Box, Heading, HStack, VStack } from '@navikt/ds-react';
import moment from 'moment';

import { SubmitButton } from '@navikt/ft-form-hooks';
import { ForeldelseVurderingType, KodeverkType, TilbakekrevingKodeverkType } from '@navikt/ft-kodeverk';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity, omitOne } from '@navikt/ft-utils';

import { VilkårResultat } from '../kodeverk/vilkarResultat';
import { TilbakekrevingAksjonspunktCodes } from '../TilbakekrevingAksjonspunktCodes';
import { DataForPeriode } from '../types/DataForPeriode';
import {
  DetaljerteFeilutbetalingsperioder,
  DetaljertFeilutbetalingPeriode,
} from '../types/DetaljerteFeilutbetalingsperioder';
import { FeilutbetalingPerioderWrapper } from '../types/FeilutbetalingPerioder';
import { KodeverkFpTilbakeForPanel } from '../types/KodeverkFpTilbakeForPanelTb';
import { TidslinjePeriode } from '../types/TidslinjePeriode';
import { VilkårsvurderingAp } from '../types/VilkårsvurderingAp';
import { VilkårsvurdertePerioderWrapper, VilkårsvurdertPeriode } from '../types/VilkårsvurdertePerioder';
import { PeriodeController, SplittetPeriode } from './splittePerioder/PeriodeController';
import { PeriodeInformasjon } from './splittePerioder/PeriodeInformasjon';
import {
  CustomPeriode,
  CustomPerioder,
  CustomVilkarsVurdertePeriode,
  InitialValuesDetailForm,
  TilbakekrevingPeriodeForm,
} from './TilbakekrevingPeriodeForm';
import { AktsomhetFormPanel } from './tilbakekrevingPeriodePaneler/aktsomhet/AktsomhetFormPanel';
import { BelopetMottattIGodTroFormPanel } from './tilbakekrevingPeriodePaneler/godTro/BelopetMottattIGodTroFormPanel';
import { TilbakekrevingTimeline } from './timeline/TilbakekrevingTimeline';

const sortPeriods = (periode1: CustomVilkarsVurdertePeriode, periode2: CustomVilkarsVurdertePeriode) =>
  moment(periode1.fom).diff(moment(periode2.fom));

const harApentAksjonspunkt = (periode: CustomVilkarsVurdertePeriode) =>
  !periode.erForeldet && (periode.begrunnelse === undefined || periode.erSplittet);

const emptyFeltverdiOmFinnes = (periode: CustomVilkarsVurdertePeriode) => {
  // @ts-expect-error Fiks
  const valgtVilkarResultatType = periode[periode.valgtVilkarResultatType];
  const handletUaktsomhetGrad = valgtVilkarResultatType[valgtVilkarResultatType.handletUaktsomhetGrad];

  if (valgtVilkarResultatType.tilbakekrevdBelop) {
    return {
      ...periode,
      [periode.valgtVilkarResultatType]: {
        ...omitOne(valgtVilkarResultatType, 'tilbakekrevdBelop'),
      },
    };
  }
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
      !moment(lagretPeriode.fom).isBefore(moment(periode.fom)) &&
      !moment(lagretPeriode.tom).isAfter(moment(periode.tom)),
  );

const erIkkeLagret = (periode: DetaljertFeilutbetalingPeriode, lagredePerioder: { tom: string; fom: string }[]) =>
  lagredePerioder.every(lagretPeriode => {
    const isOverlapping =
      moment(periode.fom).isSameOrBefore(moment(lagretPeriode.tom)) &&
      moment(lagretPeriode.fom).isSameOrBefore(moment(periode.tom));
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
    .map(
      (periode: DetaljertFeilutbetalingPeriode): CustomPeriode => ({
        ...periode,
        harMerEnnEnYtelse: periode.ytelser.length > 1,
        erTotalBelopUnder4Rettsgebyr,
      }),
    );

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
    vilkarResultatKode === VilkårResultat.GOD_TRO
      ? BelopetMottattIGodTroFormPanel.buildIntialValues(vilkarResultatInfo)
      : {};
  const annetData =
    vilkarResultatKode !== undefined && vilkarResultatKode !== VilkårResultat.GOD_TRO
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

const periodeFormTransformValues = (values: CustomVilkarsVurdertePeriode, sarligGrunnTyper: KodeverkMedNavn[]) => {
  const { valgtVilkarResultatType, begrunnelse, vurderingBegrunnelse } = values;
  // @ts-expect-error Fiks
  const info = values[valgtVilkarResultatType];

  const godTroData =
    valgtVilkarResultatType === VilkårResultat.GOD_TRO
      ? BelopetMottattIGodTroFormPanel.transformValues(info, vurderingBegrunnelse)
      : {};
  const annetData =
    valgtVilkarResultatType !== VilkårResultat.GOD_TRO
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
  sarligGrunnTyper: KodeverkMedNavn[],
): VilkårsvurderingAp => ({
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
    // @ts-expect-error Fiks
    const vilkarResultatInfo = periode[valgtVilkarResultatType];
    const { handletUaktsomhetGrad } = vilkarResultatInfo;
    const info = vilkarResultatInfo[handletUaktsomhetGrad];
    if (info) {
      return info.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr === false ? sum + 1 : sum;
    }
    return sum;
  }, 0);
  if (antallValgt > 0 && antallValgt !== vilkarsVurdertePerioder.length) {
    return 'TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr';
  }
  return undefined;
};

export interface Props {
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  submitCallback: (aksjonspunktData: VilkårsvurderingAp) => Promise<void>;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  perioder: DetaljertFeilutbetalingPeriode[];
  vilkarvurdering: VilkårsvurdertePerioderWrapper;
  rettsgebyr: DetaljerteFeilutbetalingsperioder['rettsgebyr'];
  relasjonsRolleType: string;
  relasjonsRolleTypeKodeverk: KodeverkMedNavn[];
  beregnBelop: (params?: any, keepData?: boolean) => Promise<any>;
  behandlingUuid: string;
  formData?: CustomVilkarsVurdertePeriode[];
  setFormData: (data: CustomVilkarsVurdertePeriode[]) => void;
}

/**
 * TilbakekrevingForm
 *
 * Behandlingspunkt Tilbakekreving. Setter opp en tidslinje som lar en velge periode. Ved valg blir et detaljevindu vist.
 */
export const TilbakekrevingForm = ({
  perioderForeldelse,
  kodeverkSamlingFpTilbake,
  submitCallback,
  readOnly,
  alleMerknaderFraBeslutter,
  perioder,
  vilkarvurdering,
  rettsgebyr,
  relasjonsRolleType,
  relasjonsRolleTypeKodeverk,
  beregnBelop,
  behandlingUuid,
  formData,
  setFormData,
}: Props) => {
  const sammenslåttePerioder = slaSammenOriginaleOgLagredePeriode(perioder, vilkarvurdering, rettsgebyr);
  const [vilkårsvurdertePerioder, setVilkårsvurdertePerioder] = useState<CustomVilkarsVurdertePeriode[]>(
    formData || buildInitialValues(sammenslåttePerioder, perioderForeldelse),
  );

  const [isDirty, setDirty] = useState(!!formData);
  const [valgtPeriode, setValgtPeriode] = useState<CustomVilkarsVurdertePeriode | undefined>(
    vilkårsvurdertePerioder?.find(harApentAksjonspunkt),
  );
  const [isSubmitting, setSubmitting] = useState(false);
  const [valideringsmeldingId, setValideringsmeldingId] = useState<string | undefined>();

  useEffect(() => {
    setValideringsmeldingId(validerOm6LeddBrukesPåAllePerioder(vilkårsvurdertePerioder));
  }, [vilkårsvurdertePerioder]);

  const dataForDetailForm = settOppPeriodeDataForDetailForm(sammenslåttePerioder, vilkårsvurdertePerioder);
  const isReadOnly = readOnly || valgtPeriode?.erForeldet === true;
  const antallPerioderMedAksjonspunkt = vilkårsvurdertePerioder.reduce(
    (sum: number, periode) => (!periode.erForeldet ? sum + 1 : sum),
    0,
  );
  const merknaderFraBeslutter = alleMerknaderFraBeslutter[TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING];

  const lagrePerioder = useCallback(() => {
    setSubmitting(true);
    submitCallback(
      transformValues(vilkårsvurdertePerioder, kodeverkSamlingFpTilbake[TilbakekrevingKodeverkType.SARLIG_GRUNN]),
    );
  }, [vilkårsvurdertePerioder]);

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
    setValgtPeriode(valgt);
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

  const oppdaterPeriode = (values: CustomVilkarsVurdertePeriode) => {
    const verdier = omitOne(values, 'erSplittet');

    const otherThanUpdated = vilkårsvurdertePerioder.filter(o => o.fom !== verdier.fom && o.tom !== verdier.tom);
    const sortedActivities = otherThanUpdated.concat(verdier).sort(sortPeriods);
    setVilkårsvurdertePerioder(sortedActivities);
    setFormData(sortedActivities);
    setDirty(true);
    lukkPeriode();

    const periodeMedApenAksjonspunkt = sortedActivities.find(harApentAksjonspunkt);
    if (periodeMedApenAksjonspunkt) {
      setPeriode(periodeMedApenAksjonspunkt);
    }
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

      lukkPeriode();
      setDirty(true);
      setVilkårsvurdertePerioder(sortedActivities);
      setFormData(sortedActivities);
      setPeriode(nyePerioder[0]);
    }
  };

  const valgtData = dataForDetailForm
    ? dataForDetailForm.find(p => p.fom === valgtPeriode?.fom && p.tom === valgtPeriode?.tom)
    : undefined;

  return (
    <FaktaGruppe merknaderFraBeslutter={merknaderFraBeslutter} withoutBorder>
      <VStack gap="4">
        <Heading size="small">
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
                <Box borderWidth="1" padding="4">
                  <VStack gap="4">
                    <PeriodeController
                      setNestePeriode={setNestePeriode}
                      setForrigePeriode={setForrigePeriode}
                      periode={valgtData}
                      readOnly={readOnly}
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
                        kodeverkSamlingFpTilbake[KodeverkType.HENDELSE_TYPE].find(
                          ht => ht.kode === valgtData.årsak?.hendelseType,
                        )?.navn
                      }
                    />
                    <TilbakekrevingPeriodeForm
                      key={valgtPeriodeFormatertForTidslinje?.id}
                      periode={valgtPeriode}
                      data={valgtData}
                      antallPerioderMedAksjonspunkt={antallPerioderMedAksjonspunkt}
                      readOnly={isReadOnly}
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
        <HStack>
          <SubmitButton
            isReadOnly={isReadOnly}
            isDirty={isDirty}
            isSubmittable={!isApOpen && !valgtPeriode && !valideringsmeldingId}
            onClick={lagrePerioder}
            isSubmitting={isSubmitting}
          />
        </HStack>
      </VStack>
    </FaktaGruppe>
  );
};
