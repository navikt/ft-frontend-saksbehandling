import { type ReactElement, type ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, Heading, List, ReadMore, VStack } from '@navikt/ds-react';

import type {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  KortvarigAndel,
  RefusjonskravSomKommerForSentListe,
} from '@navikt/ft-types';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import { getFaktaOmBeregningTilfellerKoder } from './components/fellesFaktaForATFLogSN/BgFaktaUtils';
import { FaktaOmBeregningTilfelle } from './kodeverk/faktaOmBeregningTilfelle';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const AksjonspunktTekster = ({ beregningsgrunnlag, arbeidsgiverOpplysningerPerId }: Props): ReactElement => {
  const tilfeller = getFaktaOmBeregningTilfellerKoder(beregningsgrunnlag);
  const erFrilans = !!beregningsgrunnlag?.faktaOmBeregning?.vurderMottarYtelse?.erFrilans;
  const alerts = [
    getATFLSammeOrgAlert(tilfeller, beregningsgrunnlag),
    getStandardAlert(
      tilfeller,
      FaktaOmBeregningTilfelle.VURDER_LØNNSENDRING,
      <FormattedMessage
        id="BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText"
        values={{ h3: H3 }}
      />,
    ),
    getMottarYtelseAlert(tilfeller, erFrilans),
    getStandardAlert(
      tilfeller,
      FaktaOmBeregningTilfelle.VURDER_ETTERLØNN_SLUTTPAKKE,
      <FormattedMessage
        id="BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText"
        values={{ h3: H3 }}
      />,
    ),
    getTidsbegrensetArbeidsforholdAlert(tilfeller, beregningsgrunnlag, arbeidsgiverOpplysningerPerId),
    getStandardAlert(
      tilfeller,
      FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE,
      <FormattedMessage
        id="BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText"
        values={{ h3: H3 }}
      />,
    ),
    getKunYtelseAlert(tilfeller),
    getStandardAlert(
      tilfeller,
      FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL,
      <FormattedMessage
        id="BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText"
        values={{ h3: H3 }}
      />,
    ),
    getStandardAlert(
      tilfeller,
      FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET,
      <FormattedMessage
        id="BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText"
        values={{ h3: H3 }}
      />,
    ),
    getRefusjonskravAlert(tilfeller, beregningsgrunnlag, arbeidsgiverOpplysningerPerId),
  ].filter((alert): alert is ReactElement => alert !== null);

  if (alerts.length > 0) {
    return <VStack gap="space-16">{alerts}</VStack>;
  }

  return (
    <Alert size="small" variant="warning">
      <FormattedMessage key="VurderFaktaForBeregningen" id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning" />
    </Alert>
  );
};

const getStandardAlert = (
  tilfeller: string[],
  tilfelle: FaktaOmBeregningTilfelle,
  message: ReactElement,
): ReactElement | null => {
  if (!tilfeller.includes(tilfelle)) {
    return null;
  }

  return (
    <Alert size="small" variant="warning" key={tilfelle}>
      {message}
    </Alert>
  );
};

const getATFLSammeOrgAlert = (tilfeller: string[], beregningsgrunnlag: Beregningsgrunnlag): ReactElement | null => {
  const tilfelle = FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON;
  if (!tilfeller.includes(tilfelle)) {
    return null;
  }

  const harInntektsmelding = beregningsgrunnlag?.faktaOmBeregning?.arbeidstakerOgFrilanserISammeOrganisasjonListe?.some(
    aftlSammeOrg => !!aftlSammeOrg.inntektPrMnd,
  );

  return (
    <Alert size="small" variant="warning" key={tilfelle}>
      <FormattedMessage
        id={
          harInntektsmelding
            ? 'BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg'
            : 'BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM'
        }
        values={{ h3: H3 }}
      />
    </Alert>
  );
};

const getMottarYtelseAlert = (tilfeller: string[], erFrilans: boolean): ReactElement | null => {
  const tilfelle = FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE;
  if (!tilfeller.includes(tilfelle)) {
    return null;
  }

  return (
    <Alert size="small" variant="warning" key={`${tilfelle}_${erFrilans ? 'frilans' : 'arbeidstaker'}`}>
      <FormattedMessage
        id={
          erFrilans
            ? 'BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans'
            : 'BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker'
        }
        values={{ h3: H3 }}
      />
    </Alert>
  );
};

const getTidsbegrensetArbeidsforholdAlert = (
  tilfeller: string[],
  beregningsgrunnlag: Beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement | null => {
  const tilfelle = FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD;
  if (!tilfeller.includes(tilfelle)) {
    return null;
  }

  const kortvarigeArbeidsforhold = beregningsgrunnlag?.faktaOmBeregning?.kortvarigeArbeidsforhold ?? [];
  const arbeidsgivereNavn = kortvarigeArbeidsforhold
    .map((kortvarigArbeidsforhold: KortvarigAndel) => {
      const agi = kortvarigArbeidsforhold.arbeidsforhold?.arbeidsgiverIdent;
      if (!agi) {
        throw new Error('Må ha arbeidsgiverIdent på kortvarige andeler');
      }

      const opplysninger = arbeidsgiverOpplysningerPerId[agi];
      return opplysninger ? formaterArbeidsgiver(opplysninger) : agi;
    })
    .join(', ');

  return (
    <Alert size="small" variant="warning" key={tilfelle}>
      <FormattedMessage
        id="BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText"
        values={{
          arbeidsgiverVisningsnavn: arbeidsgivereNavn,
          h3: H3,
        }}
      />
    </Alert>
  );
};

const getKunYtelseAlert = (tilfeller: string[]): ReactElement | null => {
  const tilfelle = FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE;
  if (!tilfeller.includes(tilfelle)) {
    return null;
  }

  return (
    <Alert size="small" variant="warning" key={tilfelle}>
      <VStack gap="space-4">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText"
          values={{ h3: H3 }}
        />
        <ReadMore
          size="small"
          header={
            <FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt" />
          }
        >
          <List size="small">
            <FormattedMessage
              tagName={List.Item}
              id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1"
            />
            <FormattedMessage
              tagName={List.Item}
              id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2"
            />
            <FormattedMessage
              tagName={List.Item}
              id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3"
            />
            <FormattedMessage
              tagName={List.Item}
              id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4"
            />
            <FormattedMessage
              tagName={List.Item}
              id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5"
            />
            <FormattedMessage
              tagName={List.Item}
              id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6"
            />
            <FormattedMessage
              tagName={List.Item}
              id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7"
            />
          </List>
        </ReadMore>
        <ReadMore
          size="small"
          header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori" />}
        >
          <List size="small">
            <FormattedMessage
              tagName={List.Item}
              id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1"
            />
            <FormattedMessage
              tagName={List.Item}
              id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2"
            />
            <FormattedMessage
              tagName={List.Item}
              id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3"
            />
          </List>
        </ReadMore>
      </VStack>
    </Alert>
  );
};

const getRefusjonskravAlert = (
  tilfeller: string[],
  beregningsgrunnlag: Beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement | null => {
  const tilfelle = FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT;
  if (!tilfeller.includes(tilfelle)) {
    return null;
  }

  const senRefusjonkravListe = beregningsgrunnlag?.faktaOmBeregning?.refusjonskravSomKommerForSentListe ?? [];
  const arbeidsgivereNavn = senRefusjonkravListe
    .map((kravPerArbeidsgiver: RefusjonskravSomKommerForSentListe) => {
      const { arbeidsgiverIdent } = kravPerArbeidsgiver;
      const opplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverIdent];
      return opplysninger ? formaterArbeidsgiver(opplysninger) : arbeidsgiverIdent;
    })
    .join(', ');

  return (
    <Alert size="small" variant="warning" key={tilfelle}>
      <FormattedMessage
        id="BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText"
        values={{
          arbeidsgiverVisningsnavn: arbeidsgivereNavn,
          h3: H3,
        }}
      />
    </Alert>
  );
};

const H3 = (chunks: ReactNode[]) => (
  <Heading size="xsmall" level="3" key="h3">
    {chunks}
  </Heading>
);
