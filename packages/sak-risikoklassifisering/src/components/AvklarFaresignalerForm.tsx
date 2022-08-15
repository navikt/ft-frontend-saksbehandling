import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Normaltekst } from 'nav-frontend-typografi';
import { Hovedknapp } from 'nav-frontend-knapper';

import { ArrowBox, VerticalSpacer, FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { ariaCheck, hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { RadioGroupField, RadioOption, TextAreaField, Form } from '@navikt/ft-form-hooks';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn } from '@navikt/ft-types';

import faresignalVurdering from '../kodeverk/faresignalVurdering';
import AvklartRisikoklassifiseringAp from '../types/AvklartRisikoklassifiseringAp';
import RisikoklassifiseringAksjonspunktCode from '../RisikoklassifiseringAksjonspunktCode';

import styles from './avklarFaresignalerForm.less';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

export const begrunnelseFieldName = 'begrunnelse';
export const VURDERING_HOVEDKATEGORI = 'vurderingerHovedkategori';
export const IKKE_REELLE_VURDERINGER_UNDERKATEGORI = 'ikkeReelleVurderingerUnderkategori';

type Values = {
  [begrunnelseFieldName]?: string;
  [VURDERING_HOVEDKATEGORI]: string;
  [IKKE_REELLE_VURDERINGER_UNDERKATEGORI]?: string;
};

export const buildInitialValues = (
  aksjonspunkt: Aksjonspunkt,
  risikoklassifisering?: Risikoklassifisering,
): Values | undefined => {
  if (aksjonspunkt && aksjonspunkt.begrunnelse && risikoklassifisering && risikoklassifisering.faresignalVurdering) {
    const kode = risikoklassifisering.faresignalVurdering;
    return {
      [begrunnelseFieldName]: aksjonspunkt.begrunnelse,
      [VURDERING_HOVEDKATEGORI]:
        kode === faresignalVurdering.INGEN_INNVIRKNING
          ? faresignalVurdering.INGEN_INNVIRKNING
          : faresignalVurdering.INNVIRKNING,
      [IKKE_REELLE_VURDERINGER_UNDERKATEGORI]: kode === faresignalVurdering.INGEN_INNVIRKNING ? undefined : kode,
    };
  }
  return undefined;
};

const utledFaresignalVurderingVerdi = (
  vurderingHovedkategori: string,
  vurderingUnderkategori?: string,
): string | undefined =>
  vurderingHovedkategori === faresignalVurdering.INGEN_INNVIRKNING
    ? faresignalVurdering.INGEN_INNVIRKNING
    : vurderingUnderkategori;

const transformValues = (values: Values): AvklartRisikoklassifiseringAp => ({
  kode: RisikoklassifiseringAksjonspunktCode.VURDER_FARESIGNALER,
  faresignalVurdering: utledFaresignalVurderingVerdi(
    values[VURDERING_HOVEDKATEGORI],
    values[IKKE_REELLE_VURDERINGER_UNDERKATEGORI],
  ),
  begrunnelse: values[begrunnelseFieldName],
});

interface OwnProps {
  aksjonspunkt: Aksjonspunkt;
  readOnly: boolean;
  risikoklassifisering?: Risikoklassifisering;
  submitCallback: (data: AvklartRisikoklassifiseringAp) => Promise<void>;
  faresignalVurderinger: KodeverkMedNavn[];
}

/**
 * IngenRisikoPanel
 *
 * Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
export const AvklarFaresignalerForm: FunctionComponent<OwnProps> = ({
  readOnly,
  aksjonspunkt,
  faresignalVurderinger,
  risikoklassifisering,
  submitCallback,
}) => {
  const underkategoriFaresignalVurderinger = useMemo(
    () =>
      faresignalVurderinger.filter(
        vurdering =>
          vurdering.kode !== faresignalVurdering.INNVIRKNING &&
          vurdering.kode !== faresignalVurdering.INGEN_INNVIRKNING,
      ),
    [],
  );

  const defaultValues = useMemo(
    () => buildInitialValues(aksjonspunkt, risikoklassifisering),
    [aksjonspunkt, risikoklassifisering],
  );

  const formMethods = useForm<Values>({
    defaultValues,
  });

  const harValgtReelle = formMethods.watch(VURDERING_HOVEDKATEGORI) === faresignalVurdering.INNVIRKNING;

  return (
    <FlexContainer>
      <Form formMethods={formMethods} onSubmit={(values: Values) => submitCallback(transformValues(values))}>
        <FlexRow>
          <FlexColumn className={styles.fullWidth}>
            <TextAreaField
              name={begrunnelseFieldName}
              label={<FormattedMessage id="Risikopanel.Forms.Vurdering" />}
              validate={[required, maxLength1500, minLength3, hasValidText]}
              maxLength={1500}
              readOnly={readOnly}
            />
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <Normaltekst>
              <FormattedMessage id="Risikopanel.Form.Resultat" />
            </Normaltekst>
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer eightPx />
        <FlexRow>
          <FlexColumn>
            <RadioGroupField
              name={VURDERING_HOVEDKATEGORI}
              validate={[required]}
              direction="vertical"
              readOnly={readOnly}
              isEdited={!isAksjonspunktOpen(aksjonspunkt.status)}
            >
              <RadioOption
                label={
                  faresignalVurderinger.find(vurdering => vurdering.kode === faresignalVurdering.INNVIRKNING)?.navn ||
                  ''
                }
                value={faresignalVurdering.INNVIRKNING}
              >
                <div>
                  {harValgtReelle && (
                    <ArrowBox alignOffset={20}>
                      <RadioGroupField
                        name={IKKE_REELLE_VURDERINGER_UNDERKATEGORI}
                        validate={[required]}
                        direction="vertical"
                        readOnly={readOnly}
                      >
                        {underkategoriFaresignalVurderinger.map(vurdering => (
                          <RadioOption key={vurdering.kode} label={vurdering.navn} value={vurdering.kode} />
                        ))}
                      </RadioGroupField>
                    </ArrowBox>
                  )}
                </div>
              </RadioOption>
              <RadioOption
                label={
                  faresignalVurderinger.find(vurdering => vurdering.kode === faresignalVurdering.INGEN_INNVIRKNING)
                    ?.navn || ''
                }
                value={faresignalVurdering.INGEN_INNVIRKNING}
              />
            </RadioGroupField>
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <Hovedknapp
              mini
              spinner={formMethods.formState.isSubmitting}
              disabled={!formMethods.formState.isDirty || readOnly || formMethods.formState.isSubmitting}
              onClick={ariaCheck}
            >
              <FormattedMessage id="Risikopanel.Form.Bekreft" />
            </Hovedknapp>
          </FlexColumn>
        </FlexRow>
      </Form>
    </FlexContainer>
  );
};

export default AvklarFaresignalerForm;
