import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  RefusjonTilVurderingAndel,
} from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { VurderRefusjonFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import { FaktaBegrunnelseTextField } from '../felles/FaktaBegrunnelseTextField';
import { SubmitButton } from '../felles/SubmitButton';
import { TidligereUtbetalinger } from './TidligereUtbetalinger';
import { VurderEndringRefusjonRad } from './VurderEndringRefusjonRad';

const FORM_NAME = 'VURDER_REFUSJON_BERGRUNN_FORM';

const { VURDER_REFUSJON_BERGRUNN } = FaktaFordelBeregningAvklaringsbehovCode;

const finnAvklaringsbehov = (avklaringsbehov: BeregningAvklaringsbehov[]): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov ? avklaringsbehov.find(ap => ap.definisjon === VURDER_REFUSJON_BERGRUNN) : undefined;

const lagRadNøkkel = (andel: RefusjonTilVurderingAndel): string => {
  if (!andel.arbeidsgiver) {
    return `${andel.aktivitetStatus}${andel.internArbeidsforholdRef})`;
  }
  if (andel.arbeidsgiver.arbeidsgiverAktørId) {
    return `${andel.arbeidsgiver.arbeidsgiverAktørId}${andel.internArbeidsforholdRef})`;
  }
  return `${andel.arbeidsgiver.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef})`;
};

type Props = {
  readOnly: boolean;
  formSubmittes: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vilkårperiodeFieldIndex: number;
};

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
  const avklaringsbehovRefusjon = finnAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  const erAksjonspunktÅpent = avklaringsbehovRefusjon ? isAksjonspunktOpen(avklaringsbehovRefusjon.status) : false;
  const formMethods = useFormContext<VurderRefusjonFormValues>();
  const begrunnelse = formMethods.watch(`VURDER_REFUSJON_BERGRUNN_FORM.${vilkårperiodeFieldIndex}.begrunnelse`);
  return (
    <VStack gap="4">
      {erAksjonspunktÅpent && (
        <AksjonspunktHelpTextHTML>
          {[<FormattedMessage id="BeregningInfoPanel.RefusjonBG.Aksjonspunkt" key="aksjonspunktText" />]}
        </AksjonspunktHelpTextHTML>
      )}
      <Heading size="small">
        <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Tittel" />
      </Heading>
      <TidligereUtbetalinger
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      {andeler.map(andel => (
        <VurderEndringRefusjonRad
          refusjonAndel={andel}
          readOnly={manglerAksjonspunkt || readOnly}
          erAksjonspunktÅpent={erAksjonspunktÅpent}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          key={lagRadNøkkel(andel)}
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
