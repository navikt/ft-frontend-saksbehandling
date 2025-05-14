import React, { ReactElement, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, Heading, List, ReadMore, VStack } from '@navikt/ds-react';

import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  KortvarigAndel,
  RefusjonskravSomKommerForSentListe,
} from '@navikt/ft-types';

import { getFaktaOmBeregningTilfellerKoder } from './components/fellesFaktaForATFLogSN/BgFaktaUtils';
import { createVisningsnavnFakta } from './utils/ArbeidsforholdHelper';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const AksjonspunktTekster = ({ beregningsgrunnlag, arbeidsgiverOpplysningerPerId }: Props): ReactElement => {
  const tilfeller: string[] = getFaktaOmBeregningTilfellerKoder(beregningsgrunnlag);
  const erFrilans: boolean = !!beregningsgrunnlag?.faktaOmBeregning?.vurderMottarYtelse?.erFrilans;
  const alerts: ReactElement[] = [];

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)) {
    const harInntektsmelding =
      beregningsgrunnlag?.faktaOmBeregning?.arbeidstakerOgFrilanserISammeOrganisasjonListe?.some(
        aftlSammeOrg => !!aftlSammeOrg.inntektPrMnd,
      );
    alerts.push(
      <Alert size="small" variant="warning" key={FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON}>
        <FormattedMessage
          id={
            harInntektsmelding
              ? 'BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg'
              : 'BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM'
          }
          values={{ h3: H3 }}
        />
      </Alert>,
    );
  }
  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING)) {
    alerts.push(
      <Alert size="small" variant="warning" key={FaktaOmBeregningTilfelle.VURDER_LONNSENDRING}>
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText"
          values={{ h3: H3 }}
        />
      </Alert>,
    );
  }
  if (erFrilans && tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE)) {
    alerts.push(
      <Alert size="small" variant="warning" key={`${FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE}_frilans`}>
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans"
          values={{ h3: H3 }}
        />
      </Alert>,
    );
  }

  if (!erFrilans && tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE)) {
    alerts.push(
      <Alert size="small" variant="warning" key={`${FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE}_arbeidstaker`}>
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker"
          values={{ h3: H3 }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE)) {
    alerts.push(
      <Alert size="small" variant="warning" key={FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE}>
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText"
          values={{ h3: H3 }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)) {
    const kortvarigeArbeidsforhold = beregningsgrunnlag?.faktaOmBeregning?.kortvarigeArbeidsforhold ?? [];

    let arbeidsgivereNavn = '';
    kortvarigeArbeidsforhold.forEach((kortvarigArbeidsforhold: KortvarigAndel, index: number) => {
      const agi = kortvarigArbeidsforhold.arbeidsforhold?.arbeidsgiverIdent;
      if (!agi) {
        throw new Error('Må ha arbeidsgiverIdent på kortvarige andeler');
      }
      const opplysninger = arbeidsgiverOpplysningerPerId[agi];
      const arbeidsgiverVisningsnavn = opplysninger ? createVisningsnavnFakta(opplysninger) : agi;
      if (index === 0) {
        arbeidsgivereNavn = arbeidsgiverVisningsnavn;
      } else {
        arbeidsgivereNavn = `${arbeidsgivereNavn}, ${arbeidsgiverVisningsnavn}`;
      }
    });

    alerts.push(
      <Alert size="small" variant="warning" key={FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD}>
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText"
          values={{
            arbeidsgiverVisningsnavn: arbeidsgivereNavn,
            h3: H3,
          }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE)) {
    alerts.push(
      <Alert size="small" variant="warning" key={FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE}>
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText"
          values={{ h3: H3 }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE)) {
    alerts.push(
      <Alert size="small" variant="warning" key={FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE}>
        <VStack gap="1">
          <FormattedMessage
            id="BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText"
            values={{
              h3: H3,
            }}
          />
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
        </VStack>
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)) {
    alerts.push(
      <Alert size="small" variant="warning" key={FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL}>
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText"
          values={{ h3: H3 }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET)) {
    alerts.push(
      <Alert size="small" variant="warning" key={FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET}>
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText"
          values={{ h3: H3 }}
        />
      </Alert>,
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)) {
    const senRefusjonkravListe = beregningsgrunnlag?.faktaOmBeregning?.refusjonskravSomKommerForSentListe ?? [];
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

    alerts.push(
      <Alert size="small" variant="warning" key={FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT}>
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText"
          values={{
            arbeidsgiverVisningsnavn: arbeidsgivereNavn,
            h3: H3,
          }}
        />
      </Alert>,
    );
  }

  if (alerts.length > 0) {
    return <VStack gap="4">{alerts}</VStack>;
  }

  return (
    <Alert size="small" variant="warning">
      <FormattedMessage key="VurderFaktaForBeregningen" id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning" />
    </Alert>
  );
};

const H3 = (chunks: ReactNode[]) => (
  <Heading size="xsmall" spacing level="3" key="h3">
    {chunks}
  </Heading>
);
