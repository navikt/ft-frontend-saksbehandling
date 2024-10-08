import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Alert, Heading, Panel } from '@navikt/ds-react';

import { FaktaGruppe, AksjonspunktHelpTextTemp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { omitOne } from '@navikt/ft-utils';
import { TilbakekrevingKodeverkType, ForeldelseVurderingType, KodeverkType } from '@navikt/ft-kodeverk';
import {
  KodeverkMedNavn,
  FeilutbetalingPerioderWrapper,
  VilkarsVurdertePerioderWrapper,
  VilkarsVurdertPeriode,
  DetaljerteFeilutbetalingsperioder,
  DetaljertFeilutbetalingPeriode,
} from '@navikt/ft-types';
import { SubmitButton } from '@ft-frontend-saksbehandling/internal-components';

import TilbakekrevingPeriodeForm, {
  CustomPeriode,
  CustomPerioder,
  periodeFormTransformValues,
  periodeFormBuildInitialValues,
  CustomVilkarsVurdertePeriode,
} from './TilbakekrevingPeriodeForm';
import TidslinjePeriode from '../types/tidslinjePeriodeTsType';
import DataForPeriode from '../types/dataForPeriodeTsType';
import VilkarsVurderingAp from '../types/VilkarsVurderingAp';
import TilbakekrevingAksjonspunktCodes from '../TilbakekrevingAksjonspunktCodes';

import styles from './tilbakekrevingForm.module.css';
import KodeverkFpTilbakeForPanel from '../types/kodeverkFpTilbakeForPanel';
import TilbakekrevingTimeline from './timeline/TilbakekrevingTimeline';
import PeriodeController, { SplittetPeriode } from './splittePerioder/PeriodeController';
import PeriodeInformasjon from './splittePerioder/PeriodeInformasjon';

const sortPeriods = (periode1: CustomVilkarsVurdertePeriode, periode2: CustomVilkarsVurdertePeriode) =>
  moment(periode1.fom).diff(moment(periode2.fom));

const harApentAksjonspunkt = (periode: CustomVilkarsVurdertePeriode) =>
  !periode.erForeldet && (periode.begrunnelse === undefined || periode.erSplittet);

const emptyFeltverdiOmFinnes = (periode: CustomVilkarsVurdertePeriode) => {
  // @ts-ignore Fiks
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
      // @ts-ignore Fiks
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
  lagretPeriode: CustomVilkarsVurdertePeriode | VilkarsVurdertPeriode,
  perioder: DetaljertFeilutbetalingPeriode[] | CustomPeriode[],
) =>
  perioder.find(
    // @ts-ignore Fiks
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

export const slaSammenOriginaleOgLagredePeriode = (
  perioder: DetaljertFeilutbetalingPeriode[],
  vilkarsvurdering: VilkarsVurdertePerioderWrapper,
  rettsgebyr: DetaljerteFeilutbetalingsperioder['rettsgebyr'],
): CustomPerioder => {
  const totalbelop = perioder.reduce(
    (acc: number, periode: DetaljertFeilutbetalingPeriode) => acc + periode.feilutbetaling,
    0,
  );
  const erTotalBelopUnder4Rettsgebyr = totalbelop < rettsgebyr * 4;
  const lagredeVilkarsvurdertePerioder = vilkarsvurdering.vilkarsVurdertePerioder;

  const lagredePerioder = lagredeVilkarsvurdertePerioder.map((lagretPeriode: VilkarsVurdertPeriode): CustomPeriode => {
    const originalPeriode = finnOriginalPeriode(lagretPeriode, perioder);
    return {
      ...originalPeriode,
      harMerEnnEnYtelse: originalPeriode && originalPeriode.ytelser.length > 1,
      ...omitOne(lagretPeriode, 'feilutbetalingBelop'),
      // @ts-ignore Fiks
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

export const buildInitialValues = (
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

export const transformValues = (
  vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[],
  sarligGrunnTyper: KodeverkMedNavn[],
): VilkarsVurderingAp => ({
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
    // @ts-ignore Fiks
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

export interface OwnProps {
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  submitCallback: (aksjonspunktData: VilkarsVurderingAp) => Promise<void>;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  perioder: DetaljertFeilutbetalingPeriode[];
  vilkarvurdering: VilkarsVurdertePerioderWrapper;
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
const TilbakekrevingForm: FunctionComponent<OwnProps> = ({
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
}) => {
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
      <Heading size="small">
        <FormattedMessage id="Behandlingspunkt.Tilbakekreving" />
      </Heading>
      <VerticalSpacer twentyPx />
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
        {[<FormattedMessage key="AksjonspunktHjelpetekst" id="TilbakekrevingForm.AksjonspunktHjelpetekst" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer twentyPx />
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
              <div className={styles.space} />
              <Panel border>
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
                <VerticalSpacer sixteenPx />
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
                <VerticalSpacer twentyPx />
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
              </Panel>
            </div>
          )}
        </>
      )}
      <VerticalSpacer twentyPx />
      {valideringsmeldingId && (
        <>
          <Alert variant="error">
            <FormattedMessage id={valideringsmeldingId} />
          </Alert>
          <VerticalSpacer twentyPx />
        </>
      )}
      <SubmitButton
        isReadOnly={isReadOnly}
        isDirty={isDirty}
        isSubmittable={!isApOpen && !valgtPeriode && !valideringsmeldingId}
        onClick={lagrePerioder}
        isSubmitting={isSubmitting}
      />
    </FaktaGruppe>
  );
};

export default TilbakekrevingForm;
