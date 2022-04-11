import React, { FunctionComponent } from 'react';
import { IntlShape } from 'react-intl';

import { useFieldArray, useForm } from 'react-hook-form';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  Vilkar,
  Vilkarperiode,
} from '@navikt/ft-types';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktCode, hasAksjonspunkt } from '@navikt/ft-kodeverk';
import { formNameAvklarAktiviteter } from '../BeregningFormUtils';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';
import AvklarAktiviteterValues from '../../typer/AvklarAktivitetTypes';
import AvklareAktiviteterField, { buildInitialValues, transformFieldValue } from './AvklareAktiviteterField';
import AvklarAktiviteterFormValues from '../../typer/AvklarAktiviteterFormValues';
import SubmitBeregningType from '../../typer/SubmitBeregningTsType';

const {
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  AVKLAR_AKTIVITETER,
} = AksjonspunktCode;

export const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

const finnVilkårperiode = (vilkår: Vilkar,
  vilkårperiodeFom: string) : Vilkarperiode => vilkår.perioder.find(({ periode }) => periode.fom === vilkårperiodeFom);

const skalSkjuleKomponent = (aksjonspunkter: Aksjonspunkt[],
  kanOverstyre: boolean,
  erOverstyrt: boolean): boolean => !hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) && !kanOverstyre && !erOverstyrt;

const skalViseAktiviteterTabell = (aksjonspunkter: Aksjonspunkt[],
  kanOverstyre: boolean,
  erOverstyrt: boolean): boolean => hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) || kanOverstyre || erOverstyrt;

type OwnProps = {
    intl: IntlShape
    readOnly: boolean;
    submittable: boolean;
    harAndreAksjonspunkterIPanel: boolean;
    alleKodeverk: AlleKodeverk;
    beregningsgrunnlag: Beregningsgrunnlag[];
    aksjonspunkter: Aksjonspunkt[];
    erOverstyrer: boolean;
    submitCallback: (aksjonspunktData: SubmitBeregningType[]) => Promise<void>;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
    vilkår: Vilkar;
    setFormData: (data: AvklarAktiviteterFormValues) => void;
    formData?: AvklarAktiviteterFormValues;
};

const transformValues = (values: AvklarAktiviteterFormValues) : SubmitBeregningType[] => {
  const fieldArrayList = values[formNameAvklarAktiviteter];
  const løsteGrunnlag = fieldArrayList
    .map(transformFieldValue)
    .filter((v) => v);

  const overstyrteGrunnlag = løsteGrunnlag.filter(({ kode }) => kode === OVERSTYRING_AV_BEREGNINGSAKTIVITETER);
  const avklarGrunnlag = løsteGrunnlag.filter(({ kode }) => kode === AVKLAR_AKTIVITETER);

  const apDataTilSubmit = [];

  if (overstyrteGrunnlag.length > 0) {
    const beg = overstyrteGrunnlag.map(({ begrunnelse }) => begrunnelse)
      .reduce((samletBegrunnelse, begrunnelse) => `${samletBegrunnelse} ${begrunnelse}`, '');
    const data = {
      kode: OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
      begrunnelse: beg,
      grunnlag: overstyrteGrunnlag,
    };
    apDataTilSubmit.push(data);
  }

  if (avklarGrunnlag.length > 0) {
    const beg = avklarGrunnlag.map(({ begrunnelse }) => begrunnelse)
      .reduce((samletBegrunnelse, begrunnelse) => `${samletBegrunnelse} ${begrunnelse}`, '');
    const data = {
      kode: AVKLAR_AKTIVITETER,
      begrunnelse: beg,
      grunnlag: avklarGrunnlag,
    };
    apDataTilSubmit.push(data);
  }

  return apDataTilSubmit;
};

/**
 * AvklareAktiviteterPanel
 *
 * Container komponent.. Inneholder panel for å avklare om aktivitet fra opptjening skal tas med i beregning
 */

const AvklareAktiviteterPanelImpl: FunctionComponent<OwnProps> = ({
  aksjonspunkter,
  harAndreAksjonspunkterIPanel,
  erOverstyrer,
  readOnly,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  submittable,
  submitCallback,
  beregningsgrunnlag,
  vilkår,
  setFormData,
  formData,
}) => {
  const formMethods = useForm<AvklarAktiviteterFormValues>({
    defaultValues: formData || {
      [formNameAvklarAktiviteter]: beregningsgrunnlag.map((bg) => buildInitialValues(
        bg.avklaringsbehov,
        bg.faktaOmBeregning.avklarAktiviteter,
        alleKodeverk,
        arbeidsgiverOpplysningerPerId,
        finnVilkårperiode(vilkår, bg.vilkårperiodeFom),
      )),
    },

  });

  // TODO fix overstyrt.
  const erOverstyrt = false;
  const kanOverstyre: boolean = erOverstyrer && !hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter);

  const { fields } = useFieldArray({
    name: formNameAvklarAktiviteter,
    control: formMethods.control,
  });

  const losAvklaringsbehov = () => {
    // TO DO
  };

  if (skalSkjuleKomponent(aksjonspunkter, kanOverstyre, erOverstyrt)) {
    return null;
  }

  if (!skalViseAktiviteterTabell(aksjonspunkter, kanOverstyre, erOverstyrt)) {
    return (
      <>
        <form onSubmit={losAvklaringsbehov}>
          {/* TODO, HVA SKA VI HA HER DERSOM VI IKKE HAR FIELD? overskriftOgKnapp */}
          <VerticalSpacer sixteenPx />
        </form>
        {harAndreAksjonspunkterIPanel && <VerticalSpacer twentyPx />}
      </>
    );
  }

  return (
    <>
      <Form
        formMethods={formMethods}
        onSubmit={(values) => submitCallback(transformValues(values as AvklarAktiviteterFormValues))}
        setDataOnUnmount={setFormData}
      >
        {fields.map((field, index) => (
          <AvklareAktiviteterField
            fieldId={field.id}
            avklarAktiviteter={beregningsgrunnlag[index].faktaOmBeregning.avklarAktiviteter}
            avklaringsbehov={beregningsgrunnlag[index].avklaringsbehov}
            erOverstyrer={kanOverstyre}
            readOnly={readOnly}
            submittable={submittable}
            alleKodeverk={alleKodeverk}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        ))}
      </Form>
      {harAndreAksjonspunkterIPanel && <VerticalSpacer twentyPx />}
    </>
  );
};

const validate = (values: AvklarAktiviteterValues): any => {
  const { avklarAktiviteter } = values;
  if (avklarAktiviteter) {
    const erOverstyrt = values[MANUELL_OVERSTYRING_FIELD];
    return VurderAktiviteterPanel.validate(values, avklarAktiviteter.aktiviteterTomDatoMapping, erOverstyrt);
  }
  return {};
};

export default AvklareAktiviteterPanelImpl;
