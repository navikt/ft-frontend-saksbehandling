import { Alert, Heading } from '@navikt/ds-react';
import { FaktaOmBeregningTilfelle, isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  RefusjonskravSomKommerForSentListe,
  Vilkarperiode,
} from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent, ReactElement } from 'react';
import { UseFormGetValues, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import FaktaBeregningAvklaringsbehovCode from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import KodeverkForPanel from '../../typer/kodeverkForPanel';
import createVisningsnavnFakta from '../ArbeidsforholdHelper';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import { findBegrunnelse } from '../avklareAktiviteter/avklareAktiviteterHjelpefunksjoner';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import SubmitButton from '../felles/SubmitButton';
import { erOverstyringAvBeregningsgrunnlag } from './BgFaktaUtils';
import FaktaForATFLOgSNPanel, { getFaktaOmBeregningTilfellerKoder } from './FaktaForATFLOgSNPanel';
import VurderFaktaContext, { BeregningsgrunnlagIndexContext, GetErrorsContext } from './VurderFaktaContext';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG, VURDER_FAKTA_FOR_ATFL_SN } = FaktaBeregningAvklaringsbehovCode;

export const BEGRUNNELSE_FAKTA_TILFELLER_NAME = 'begrunnelseFaktaTilfeller';

export interface OwnProps {
  beregningsgrunnlag: Beregningsgrunnlag;
  erOverstyrer: boolean;
  readOnly: boolean;
  submittable: boolean;
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  vilkarsperiode: Vilkarperiode;
  verdiForAvklarAktivitetErEndret: boolean;
  submitDisabled: boolean;
}

const hasAksjonspunkt = (aksjonspunktKode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === aksjonspunktKode);

export const erSubmittable = (submittable: boolean, submitEnabled: boolean, hasErrors: boolean): boolean =>
  submittable && submitEnabled && !hasErrors;

export const harIkkeEndringerIAvklarMedFlereAksjonspunkter = (
  verdiForAvklarAktivitetErEndret: boolean,
  avklaringsbehov: BeregningAvklaringsbehov[],
): boolean => {
  if (
    hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) ||
    hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehov)
  ) {
    return !verdiForAvklarAktivitetErEndret;
  }
  return true;
};

const isAksjonspunktClosed = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean => {
  const relevantAp = avklaringsbehov.filter(
    ap =>
      ap.definisjon === FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN ||
      ap.definisjon === FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  );
  return relevantAp.length === 0 ? false : relevantAp.some(ap => !isAksjonspunktOpen(ap.status));
};

const getManglerInntektsmelding = (beregningsgrunnlag: Beregningsgrunnlag) => {
  const { faktaOmBeregning } = beregningsgrunnlag;
  if (
    faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe &&
    faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe.length > 0
  ) {
    return (
      faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe.find(forhold => !forhold.inntektPrMnd) !==
      undefined
    );
  }
  return false;
};

const lagHelpTextsForFakta = (
  beregningsgrunnlag: Beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement => {
  const tilfeller = getFaktaOmBeregningTilfellerKoder(beregningsgrunnlag);
  const erFrilans = beregningsgrunnlag?.faktaOmBeregning?.vurderMottarYtelse?.erFrilans;
  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)) {
    return (
      <Alert size="small" variant="warning">
        <FormattedMessage
          id={
            getManglerInntektsmelding(beregningsgrunnlag)
              ? 'BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM'
              : 'BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg'
          }
          values={{
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>
    );
  }
  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING)) {
    return (
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
      </Alert>
    );
  }
  if (erFrilans && tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE)) {
    return (
      <Alert size="small" variant="warning">
        <FormattedMessage
          id="BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpText"
          values={{
            h3: (...chunks) => (
              <Heading size="xsmall" level="3">
                {chunks}
              </Heading>
            ),
          }}
        />
      </Alert>
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE)) {
    return (
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
      </Alert>
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE)) {
    return (
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
      </Alert>
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE)) {
    return (
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
      </Alert>
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)) {
    return (
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
      </Alert>
    );
  }

  if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET)) {
    return (
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
      </Alert>
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

    return (
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
      </Alert>
    );
  }

  return (
    <Alert size="small" variant="warning">
      <FormattedMessage key="VurderFaktaForBeregningen" id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning" />
    </Alert>
  );
};

const erOverstyrt = (index: number, getValues: UseFormGetValues<any>) => {
  const formValue = getValues(`${formNameVurderFaktaBeregning}.${index}`);
  return erOverstyringAvBeregningsgrunnlag(formValue);
};

const finnesFeilForBegrunnelse = (beregningsgrunnlagIndeks, errors) =>
  !!errors.vurderFaktaBeregningForm?.[beregningsgrunnlagIndeks]?.begrunnelseFaktaTilfeller;

const VurderFaktaBeregningField: FunctionComponent<OwnProps> = ({
  beregningsgrunnlag,
  erOverstyrer,
  readOnly,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  submittable,
  updateOverstyring,
  vilkarsperiode,
  verdiForAvklarAktivitetErEndret,
  submitDisabled,
}) => {
  const {
    getValues,
    formState: { errors, isDirty },
  } = useFormContext<VurderFaktaBeregningFormValues>();
  const setErrors = React.useContext(GetErrorsContext);
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const skalVæreSynlig = beregningsgrunnlagIndeks === aktivtBeregningsgrunnlagIndeks;
  React.useEffect(() => {
    setErrors(errors);
  }, [JSON.stringify(errors)]);

  const { avklaringsbehov } = beregningsgrunnlag;
  const skalVurderes = vilkarsperiode.vurderesIBehandlingen;
  const renderTextFieldAndSubmitButton = () => (
    <>
      <VerticalSpacer thirtyTwoPx />
      {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) ||
        hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehov) ||
        erOverstyrt(beregningsgrunnlagIndeks, getValues)) && (
        <>
          {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) ||
            erOverstyrt(beregningsgrunnlagIndeks, getValues)) && (
            <FaktaBegrunnelseTextField
              name={`${formNameVurderFaktaBeregning}.${beregningsgrunnlagIndeks}.${BEGRUNNELSE_FAKTA_TILFELLER_NAME}`}
              isSubmittable={submittable}
              isReadOnly={readOnly || !skalVurderes}
              hasBegrunnelse={findBegrunnelse(avklaringsbehov) !== null}
            />
          )}
          <VerticalSpacer twentyPx />
          <SubmitButton
            isDisabled={!!verdiForAvklarAktivitetErEndret}
            isSubmittable={erSubmittable(
              submittable &&
                harIkkeEndringerIAvklarMedFlereAksjonspunkter(verdiForAvklarAktivitetErEndret, avklaringsbehov) &&
                !isAksjonspunktClosed(avklaringsbehov),
              true,
              finnesFeilForBegrunnelse(beregningsgrunnlagIndeks, errors),
            )}
            isReadOnly={readOnly || !skalVurderes}
            isDirty={isDirty}
            isSubmitting={submitDisabled}
            hasEmptyRequiredFields={finnesFeilForBegrunnelse(beregningsgrunnlagIndeks, errors)}
          />
        </>
      )}
    </>
  );

  return (
    <div key={beregningsgrunnlagIndeks} style={{ display: skalVæreSynlig ? 'block' : 'none' }}>
      {hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) && !isAksjonspunktClosed(avklaringsbehov)
        ? lagHelpTextsForFakta(beregningsgrunnlag, arbeidsgiverOpplysningerPerId)
        : null}
      <VerticalSpacer twentyPx />
      <FaktaForATFLOgSNPanel
        readOnly={readOnly || !skalVurderes}
        isAksjonspunktClosed={isAksjonspunktClosed(avklaringsbehov)}
        beregningsgrunnlag={beregningsgrunnlag}
        kodeverkSamling={kodeverkSamling}
        erOverstyrer={erOverstyrer}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        updateOverstyring={updateOverstyring}
        renderTextFieldAndSubmitButton={() => renderTextFieldAndSubmitButton()}
        vilkarsperiodeSkalVurderesIBehandlingen={skalVurderes}
      />
    </div>
  );
};

export default VurderFaktaBeregningField;
