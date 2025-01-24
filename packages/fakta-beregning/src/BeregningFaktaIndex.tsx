import React, { ReactElement, useEffect, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Alert, Heading, List, ReadMore, Tabs } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  KortvarigAndel,
  RefusjonskravSomKommerForSentListe,
  StandardFaktaPanelProps,
  Vilkår,
  Vilkårperiode,
} from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { createIntl, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import { createVisningsnavnFakta } from './components/ArbeidsforholdHelper';
import { BeregningInfoPanel } from './components/BeregningInfoPanel';
import {
  getFaktaOmBeregningTilfellerKoder,
  hasAksjonspunkt,
  isAksjonspunktClosed,
} from './components/fellesFaktaForATFLogSN/BgFaktaUtils';
import { AvklarAktiviteterFormValues } from './typer/AvklarAktiviteterFormValues';
import { FaktaBeregningAvklaringsbehovCode } from './typer/interface/FaktaBeregningAvklaringsbehovCode';
import { SubmitBeregningType } from './typer/interface/SubmitBeregningTsType';
import { KodeverkForPanel } from './typer/KodeverkForPanelForFb';

import styles from './beregningFaktaIndex.module.css';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag?: Beregningsgrunnlag[];
  erOverstyrer: boolean;
  skalKunneOverstyreAktiviteter?: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vilkar: Vilkår;
  kodeverkSamling: KodeverkForPanel;
  submittable: boolean;
  skalKunneAvbryteOverstyring?: boolean;
};

const { VURDER_FAKTA_FOR_ATFL_SN, AVKLAR_AKTIVITETER, OVERSTYRING_AV_BEREGNINGSGRUNNLAG } =
  FaktaBeregningAvklaringsbehovCode;

const erForlengelse = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkårperiode[]) => {
  const vilkårPeriode = vilkårsperioder.find(({ periode }) => periode.fom === bg.vilkårsperiodeFom);
  return vilkårPeriode?.erForlengelse === true;
};

const lagLabel = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkårperiode[]) => {
  const stpOpptjening = bg.vilkårsperiodeFom;
  const vilkårPeriode = vilkårsperioder.find(({ periode }) => periode.fom === stpOpptjening);
  if (vilkårPeriode) {
    const { fom, tom } = vilkårPeriode.periode;
    if (tom !== null) {
      return `${dayjs(fom).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(tom).format(DDMMYYYY_DATE_FORMAT)}`;
    }
    return `${dayjs(fom).format(DDMMYYYY_DATE_FORMAT)} - `;
  }
  return `${dayjs(stpOpptjening).format(DDMMYYYY_DATE_FORMAT)}`;
};

const harAvklaringsbehovIPanel = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean => {
  const harBehovForAvklaring = !!avklaringsbehov;
  if (harBehovForAvklaring) {
    const harVurderFaktaAksjonspunkt = avklaringsbehov.some(
      ap => ap.definisjon === VURDER_FAKTA_FOR_ATFL_SN && ap.kanLoses,
    );
    const harAvklarAktiviteterAP = avklaringsbehov.some(ap => ap.definisjon === AVKLAR_AKTIVITETER && ap.kanLoses);
    return harVurderFaktaAksjonspunkt || harAvklarAktiviteterAP;
  }
  return false;
};

const skalVurderes = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkårperiode[]) => {
  const aktuellPeriode = vilkårsperioder.find(({ periode }) => periode.fom === bg.skjaeringstidspunktBeregning);
  return (
    harAvklaringsbehovIPanel(bg.avklaringsbehov) &&
    aktuellPeriode?.vurderesIBehandlingen &&
    !aktuellPeriode.erForlengelse
  );
};

export const lagHelpTextsForFakta = (
  beregningsgrunnlag: Beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement => {
  const tilfeller = getFaktaOmBeregningTilfellerKoder(beregningsgrunnlag);
  const erFrilans = beregningsgrunnlag?.faktaOmBeregning?.vurderMottarYtelse?.erFrilans;
  const alerts = [];
  const keys = [];
  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)) {
    const harInntektsmelding =
      beregningsgrunnlag?.faktaOmBeregning?.arbeidstakerOgFrilanserISammeOrganisasjonListe?.some(
        aftlSammeOrg => !!aftlSammeOrg.inntektPrMnd,
      );
    keys.push(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON);
    alerts.push(
      <Alert size="small" variant="warning">
        <FormattedMessage
          id={
            harInntektsmelding
              ? 'BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg'
              : 'BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM'
          }
          values={{
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>,
    );
  }
  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING)) {
    keys.push(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING);
    alerts.push(
      <Alert size="small" variant="warning">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText"
          values={{
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>,
    );
  }
  if (erFrilans && tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE)) {
    keys.push(`${FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE}_frilans`);
    alerts.push(
      <Alert size="small" variant="warning">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans"
          values={{
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>,
    );
  }

  if (!erFrilans && tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE)) {
    keys.push(`${FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE}_arbeidstaker`);
    alerts.push(
      <Alert size="small" variant="warning">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker"
          values={{
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE)) {
    keys.push(FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE);
    alerts.push(
      <Alert size="small" variant="warning">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText"
          values={{
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)) {
    keys.push(FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD);

    const kortvarigeArbeidsforhold = beregningsgrunnlag?.faktaOmBeregning?.kortvarigeArbeidsforhold;

    let arbeidsgivereNavn = '';
    kortvarigeArbeidsforhold.forEach((kortvarigArbeidsforhold: KortvarigAndel, index: number) => {
      const { arbeidsgiverIdent } = kortvarigArbeidsforhold.arbeidsforhold;
      const opplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverIdent];
      const arbeidsgiverVisningsnavn = opplysninger ? createVisningsnavnFakta(opplysninger) : arbeidsgiverIdent;
      if (index === 0) {
        arbeidsgivereNavn = arbeidsgiverVisningsnavn;
      } else {
        arbeidsgivereNavn = `${arbeidsgivereNavn}, ${arbeidsgiverVisningsnavn}`;
      }
    });

    alerts.push(
      <Alert size="small" variant="warning">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText"
          values={{
            arbeidsgiverVisningsnavn: arbeidsgivereNavn,
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE)) {
    keys.push(FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE);
    alerts.push(
      <Alert size="small" variant="warning">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText"
          values={{
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE)) {
    keys.push(FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE);
    alerts.push(
      <Alert size="small" variant="warning">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText"
          values={{
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
        <VerticalSpacer fourPx />
        <ReadMore
          size="small"
          header={
            <FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt" />
          }
        >
          <List size="small">
            <List.Item>
              <FormattedMessage id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1" />
            </List.Item>
            <List.Item>
              <FormattedMessage id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2" />
            </List.Item>
            <List.Item>
              <FormattedMessage id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3" />
            </List.Item>
            <List.Item>
              <FormattedMessage id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4" />
            </List.Item>
            <List.Item>
              <FormattedMessage id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5" />
            </List.Item>
            <List.Item>
              <FormattedMessage id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6" />
            </List.Item>
            <List.Item>
              <FormattedMessage id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7" />
            </List.Item>
          </List>
        </ReadMore>
        <VerticalSpacer fourPx />
        <ReadMore
          size="small"
          header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori" />}
        >
          <List size="small">
            <List.Item>
              <FormattedMessage id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1" />
            </List.Item>
            <List.Item>
              <FormattedMessage id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2" />
            </List.Item>
            <List.Item>
              <FormattedMessage id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3" />
            </List.Item>
          </List>
        </ReadMore>
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)) {
    keys.push(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL);
    alerts.push(
      <Alert size="small" variant="warning">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText"
          values={{
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET)) {
    keys.push(FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET);
    alerts.push(
      <Alert size="small" variant="warning">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText"
          values={{
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)) {
    const senRefusjonkravListe = beregningsgrunnlag?.faktaOmBeregning?.refusjonskravSomKommerForSentListe;
    let arbeidsgivereNavn = '';
    senRefusjonkravListe.forEach((kravPerArbeidsgiver: RefusjonskravSomKommerForSentListe, index: number) => {
      const { arbeidsgiverIdent } = kravPerArbeidsgiver;
      const opplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverIdent];
      const arbeidsgiverVisningsnavn = opplysninger ? createVisningsnavnFakta(opplysninger) : arbeidsgiverIdent;
      if (index === 0) {
        arbeidsgivereNavn = arbeidsgiverVisningsnavn;
      } else {
        arbeidsgivereNavn = `${arbeidsgivereNavn}, ${arbeidsgiverVisningsnavn}`;
      }
    });

    keys.push(FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT);
    alerts.push(
      <Alert size="small" variant="warning">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText"
          values={{
            arbeidsgiverVisningsnavn: arbeidsgivereNavn,
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>,
    );
  }
  if (alerts.length > 0) {
    return (
      <>
        {alerts.map((alert, index) => (
          <React.Fragment key={keys[index]}>
            {index > 0 && <VerticalSpacer sixteenPx />}
            {alert}
          </React.Fragment>
        ))}
      </>
    );
  }

  return (
    <Alert size="small" variant="warning">
      <FormattedMessage key="VurderFaktaForBeregningen" id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning" />
    </Alert>
  );
};

type AksjonspunktDataDef = SubmitBeregningType[];

export const BeregningFaktaIndex = ({
  beregningsgrunnlag = [],
  kodeverkSamling,
  submitCallback,
  readOnly,
  submittable,
  erOverstyrer,
  skalKunneOverstyreAktiviteter = true,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
  vilkar,
  skalKunneAvbryteOverstyring = false,
}: OwnProps & StandardFaktaPanelProps<AksjonspunktDataDef, AvklarAktiviteterFormValues>) => {
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);
  const vilkårsperioder = vilkar?.perioder;
  useEffect(() => {
    if (vilkårsperioder) {
      const periodeMedAksjonspunktIndex = beregningsgrunnlag?.findIndex(bg => skalVurderes(bg, vilkårsperioder));
      if (periodeMedAksjonspunktIndex > -1) {
        setAktivtBeregningsgrunnlagIndeks(periodeMedAksjonspunktIndex);
      }
    }
  }, []);

  if (beregningsgrunnlag.length === 0 || !vilkar) {
    return <>Har ikke beregningsgrunnlag.</>;
  }

  const skalBrukeTabs = beregningsgrunnlag.length > 1;
  const aktivtBeregningsgrunnlag = beregningsgrunnlag[aktivtBeregningsgrunnlagIndeks];

  const aktiveAvklaringsBehov = aktivtBeregningsgrunnlag.avklaringsbehov;

  return (
    <RawIntlProvider value={intl}>
      <div className={styles.main}>
        <Heading size="small" level="2">
          <FormattedMessage id="BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning" />
        </Heading>
        {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aktiveAvklaringsBehov) ||
          hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, aktiveAvklaringsBehov)) &&
        !isAksjonspunktClosed(aktiveAvklaringsBehov) ? (
          <>
            <VerticalSpacer sixteenPx />
            {lagHelpTextsForFakta(aktivtBeregningsgrunnlag, arbeidsgiverOpplysningerPerId)}
            <VerticalSpacer twentyPx />
          </>
        ) : (
          <VerticalSpacer eightPx />
        )}
        {skalBrukeTabs && (
          <div className={styles.tabsContainer}>
            <Tabs
              value={aktivtBeregningsgrunnlagIndeks.toString()}
              onChange={(clickedIndex: string) => setAktivtBeregningsgrunnlagIndeks(Number(clickedIndex))}
            >
              <Tabs.List>
                {beregningsgrunnlag.map((currentBeregningsgrunnlag, currentBeregningsgrunnlagIndex) => (
                  <Tabs.Tab
                    key={currentBeregningsgrunnlag.skjaeringstidspunktBeregning}
                    value={currentBeregningsgrunnlagIndex.toString()}
                    label={lagLabel(currentBeregningsgrunnlag, vilkårsperioder)}
                    className={skalVurderes(currentBeregningsgrunnlag, vilkårsperioder) ? 'harAksjonspunkt' : ''}
                    icon={
                      skalVurderes(currentBeregningsgrunnlag, vilkårsperioder) && (
                        <ExclamationmarkTriangleFillIcon width={20} height={20} color="Orange" />
                      )
                    }
                  />
                ))}
              </Tabs.List>
            </Tabs>
          </div>
        )}
        <BeregningInfoPanel
          aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
          beregningsgrunnlag={beregningsgrunnlag}
          kodeverkSamling={kodeverkSamling}
          avklaringsbehov={aktiveAvklaringsBehov}
          submitCallback={submitCallback}
          readOnly={readOnly || erForlengelse(beregningsgrunnlag[aktivtBeregningsgrunnlagIndeks], vilkårsperioder)}
          submittable={submittable}
          erOverstyrer={erOverstyrer}
          skalKunneOverstyreAktiviteter={skalKunneOverstyreAktiviteter}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          setFormData={setFormData}
          formData={formData}
          vilkar={vilkar}
          skalKunneAvbryteOverstyring={skalKunneAvbryteOverstyring}
        />
      </div>
    </RawIntlProvider>
  );
};
