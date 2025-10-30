import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import type {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  RefusjonTilVurderingAndel,
} from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { BTag, isAksjonspunktOpen } from '@navikt/ft-utils';

import type { VurderRefusjonFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import { FaktaBegrunnelseTextField } from '../felles/FaktaBegrunnelseTextField';
import { SubmitButton } from '../felles/SubmitButton';
import { TidligereUtbetalinger } from './TidligereUtbetalinger';
import { VurderEndringRefusjonRad } from './VurderEndringRefusjonRad';
import { VurderRefusjonKravForSentRad } from './VurderRefusjonKravForSentRad.tsx';

const FORM_NAME = 'VURDER_REFUSJON_BERGRUNN_FORM';

const { VURDER_REFUSJON_BERGRUNN } = FaktaFordelBeregningAvklaringsbehovCode;

const finnAvklaringsbehov = (avklaringsbehov: BeregningAvklaringsbehov[]): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov ? avklaringsbehov.find(ap => ap.definisjon === VURDER_REFUSJON_BERGRUNN) : undefined;

const lagRadNøkkelAndel = (andel: RefusjonTilVurderingAndel): string => {
  if (!andel.arbeidsgiver) {
    return `${andel.aktivitetStatus}${andel.internArbeidsforholdRef})`;
  }
  if (andel.arbeidsgiver.arbeidsgiverAktørId) {
    return `${andel.arbeidsgiver.arbeidsgiverAktørId}${andel.internArbeidsforholdRef})`;
  }
  return `${andel.arbeidsgiver.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef})`;
};

const lagValues = (harAndeler: boolean, harRefusjonskravForSent: boolean) => ({
  b: BTag,
  br: <br />,
  forSent: harRefusjonskravForSent && <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Aksjonspunkt.ForSent" />,
  br2: harRefusjonskravForSent && harAndeler && <br />,
  overlapper: harAndeler && <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Aksjonspunkt.Overlapper" />,
});

interface Props {
  readOnly: boolean;
  formSubmittes: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vilkårperiodeFieldIndex: number;
}

export const VurderEndringRefusjonField = ({
  submittable,
  readOnly,
  beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId,
  vilkårperiodeFieldIndex,
  formSubmittes,
}: Props) => {
  const manglerAksjonspunkt = !beregningsgrunnlag.avklaringsbehov.some(
    ab => ab.definisjon === FaktaFordelBeregningAvklaringsbehovCode.VURDER_REFUSJON_BERGRUNN,
  );
  const andeler = beregningsgrunnlag.refusjonTilVurdering?.andeler ?? [];
  const refusjonskravForSentListe = beregningsgrunnlag.refusjonTilVurdering?.refusjonskravForSentListe ?? [];
  const harAndeler = andeler.length > 0;
  const harRefusjonskravForSent = refusjonskravForSentListe.length > 0;
  const avklaringsbehovRefusjon = finnAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  const erAksjonspunktÅpent = isAksjonspunktOpen(avklaringsbehovRefusjon);
  const formMethods = useFormContext<VurderRefusjonFormValues>();
  const begrunnelse = formMethods.watch(`VURDER_REFUSJON_BERGRUNN_FORM.${vilkårperiodeFieldIndex}.begrunnelse`);
  return (
    <VStack gap="space-16">
      {erAksjonspunktÅpent && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage
            id="BeregningInfoPanel.RefusjonBG.Aksjonspunkt"
            values={lagValues(harAndeler, harRefusjonskravForSent)}
          />
        </AksjonspunktHelpTextHTML>
      )}
      {harRefusjonskravForSent && (
        <Heading size="small" level="4">
          <FormattedMessage id="BeregningInfoPanel.RefusjonskravForSent.Tittel" />
        </Heading>
      )}
      {refusjonskravForSentListe.map(krav => (
        <VurderRefusjonKravForSentRad
          key={`${krav.arbeidsgiverIdent}_${krav.erRefusjonskravGyldig}`}
          refusjonskrav={krav}
          readOnly={manglerAksjonspunkt || readOnly}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          beregningsgrunnlagIndeks={vilkårperiodeFieldIndex}
        />
      ))}
      {harAndeler && (
        <>
          <Heading size="small" level="4">
            <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Tittel" />
          </Heading>
          <TidligereUtbetalinger
            beregningsgrunnlag={beregningsgrunnlag}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        </>
      )}
      {andeler.map(andel => (
        <VurderEndringRefusjonRad
          refusjonAndel={andel}
          readOnly={manglerAksjonspunkt || readOnly}
          erAksjonspunktÅpent={erAksjonspunktÅpent}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          key={lagRadNøkkelAndel(andel)}
          skjæringstidspunkt={beregningsgrunnlag.skjaeringstidspunktBeregning}
          formName={FORM_NAME}
          vilkårperiodeFieldIndex={vilkårperiodeFieldIndex}
        />
      ))}
      <div>
        <FaktaBegrunnelseTextField
          name={`${FORM_NAME}.${vilkårperiodeFieldIndex}.begrunnelse`}
          control={formMethods.control}
          isSubmittable={submittable}
          isReadOnly={manglerAksjonspunkt || readOnly}
          hasBegrunnelse={!!begrunnelse}
        />
        <AssessedBy ident={avklaringsbehovRefusjon?.vurdertAv} date={avklaringsbehovRefusjon?.vurdertTidspunkt} />
      </div>
      <div>
        <SubmitButton
          isSubmittable={submittable}
          isReadOnly={manglerAksjonspunkt || readOnly}
          isSubmitting={formSubmittes}
          isDirty={formMethods.formState.isDirty}
        />
      </div>
    </VStack>
  );
};
