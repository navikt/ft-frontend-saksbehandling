import { FormattedMessage } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagTilBekreftelse,
  RefusjonTilVurderingAndel,
  Vilkårperiode,
} from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { useFormContext } from 'react-hook-form';
import { VurderRefusjonFieldValues, VurderRefusjonFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import { VurderRefusjonTransformedValues } from '../../types/interface/VurderRefusjonBeregningsgrunnlagAP';
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

export const buildFieldInitialValues = (
  bg: Beregningsgrunnlag,
  vilkårsperiode: Vilkårperiode,
): VurderRefusjonFieldValues => {
  const andeler = bg.refusjonTilVurdering?.andeler || [];
  const refusjonAP = finnAvklaringsbehov(bg.avklaringsbehov);
  let initialValues = {
    beregningsgrunnlagStp: bg.skjaeringstidspunktBeregning,
    periode: vilkårsperiode.periode,
    begrunnelse: refusjonAP && refusjonAP.begrunnelse ? refusjonAP.begrunnelse : undefined,
  } as unknown as VurderRefusjonFieldValues;
  andeler.forEach(andel => {
    initialValues = {
      ...initialValues,
      ...VurderEndringRefusjonRad.buildInitialValues(andel),
    };
  });
  return initialValues;
};

export const transformFieldValues = (
  values: VurderRefusjonFieldValues,
  bg: Beregningsgrunnlag,
): BeregningsgrunnlagTilBekreftelse<VurderRefusjonTransformedValues> => {
  const andeler = bg.refusjonTilVurdering?.andeler || [];
  const transformedAndeler = andeler.map(andel =>
    VurderEndringRefusjonRad.transformValues(values, andel, bg.skjaeringstidspunktBeregning),
  );
  return {
    periode: values.periode,
    begrunnelse: values.begrunnelse,
    fastsatteAndeler: transformedAndeler,
  };
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
  const andeler = beregningsgrunnlag.refusjonTilVurdering?.andeler || [];
  const avklaringsbehovRefusjon = finnAvklaringsbehov(beregningsgrunnlag.avklaringsbehov);
  const erAksjonspunktÅpent = avklaringsbehovRefusjon ? isAksjonspunktOpen(avklaringsbehovRefusjon.status) : false;
  const formMethods = useFormContext<VurderRefusjonFormValues>();
  const begrunnelse = formMethods.watch(`VURDER_REFUSJON_BERGRUNN_FORM.${vilkårperiodeFieldIndex}.begrunnelse`);
  return (
    <>
      {erAksjonspunktÅpent && (
        <AksjonspunktHelpTextHTML>
          {[<FormattedMessage id="BeregningInfoPanel.RefusjonBG.Aksjonspunkt" key="aksjonspunktText" />]}
        </AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer sixteenPx />
      <Heading size="small">
        <FormattedMessage id="BeregningInfoPanel.RefusjonBG.Tittel" />
      </Heading>
      <VerticalSpacer sixteenPx />
      <TidligereUtbetalinger
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      <VerticalSpacer sixteenPx />
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
      <VerticalSpacer twentyPx />
      <FaktaBegrunnelseTextField
        name={`${FORM_NAME}.${vilkårperiodeFieldIndex}.begrunnelse`}
        isSubmittable={submittable}
        isReadOnly={manglerAksjonspunkt || readOnly}
        hasBegrunnelse={!!begrunnelse}
      />
      <AssessedBy ident={avklaringsbehovRefusjon?.vurdertAv} date={avklaringsbehovRefusjon?.vurdertTidspunkt} />
      <VerticalSpacer twentyPx />
      <SubmitButton
        isSubmittable={submittable}
        isReadOnly={manglerAksjonspunkt || readOnly}
        isSubmitting={formSubmittes}
        isDirty={formMethods.formState.isDirty}
      />
      <VerticalSpacer sixteenPx />
    </>
  );
};
