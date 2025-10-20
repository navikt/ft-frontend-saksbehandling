import { useState } from 'react';
import { RawIntlProvider } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Tabs, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, StandardFaktaPanelProps } from '@navikt/ft-types';
import { DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { finnVilkårsperiode, vurderesIBehandlingen } from './components/felles/vilkårsperiodeUtils';
import { FordelBeregningsgrunnlagPanel } from './components/FordelBeregningsgrunnlagPanel';
import type { AksjonspunktSubmitType } from './types/AksjonspunktSubmitType';
import type {
  FordelBeregningsgrunnlagFormValues,
  VurderRefusjonFormValues,
} from './types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from './types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import type { KodeverkForPanel } from './types/kodeverkForPanel';
import type { Vilkår, Vilkårperiode } from './types/Vilkår';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const { FORDEL_BEREGNINGSGRUNNLAG, VURDER_REFUSJON_BERGRUNN } = FaktaFordelBeregningAvklaringsbehovCode;

const lagLabel = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkårperiode[]) => {
  const vilkårPeriode = finnVilkårsperiode(vilkårsperioder, bg.vilkårsperiodeFom);
  if (vilkårPeriode) {
    const { fom, tom } = vilkårPeriode.periode;
    return <PeriodLabel dateStringFom={fom} dateStringTom={tom} />;
  }
  return <DateLabel dateString={bg.vilkårsperiodeFom} />;
};

const kreverManuellBehandlingFn = (bg: Beregningsgrunnlag) =>
  bg.avklaringsbehov.some(a => a.definisjon === VURDER_REFUSJON_BERGRUNN || a.definisjon === FORDEL_BEREGNINGSGRUNNLAG);

const skalVurderes = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkårperiode[]) =>
  kreverManuellBehandlingFn(bg) && vurderesIBehandlingen(vilkårsperioder, bg.vilkårsperiodeFom);

type OwnProps = {
  beregningsgrunnlagVilkår: Vilkår | null;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  kodeverkSamling: KodeverkForPanel;
  submittable: boolean;
};

type Props = OwnProps &
  StandardFaktaPanelProps<AksjonspunktSubmitType, FordelBeregningsgrunnlagFormValues | VurderRefusjonFormValues>;

export const FordelBeregningsgrunnlagFaktaIndex = ({
  beregningsgrunnlagVilkår,
  beregningsgrunnlagListe,
  kodeverkSamling,
  submitCallback,
  readOnly,
  submittable,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}: Props) => {
  const bgMedAvklaringsbehov = beregningsgrunnlagListe.filter(bg => kreverManuellBehandlingFn(bg));
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);

  if (bgMedAvklaringsbehov.length === 0 || !beregningsgrunnlagVilkår) {
    return null;
  }

  const skalBrukeTabs = bgMedAvklaringsbehov.length > 1;

  return (
    <RawIntlProvider value={intl}>
      <VStack gap="space-8" maxWidth="800px">
        {skalBrukeTabs && (
          <Tabs
            value={aktivtBeregningsgrunnlagIndeks.toString()}
            onChange={(clickedIndex: string) => setAktivtBeregningsgrunnlagIndeks(Number(clickedIndex))}
          >
            <Tabs.List>
              {bgMedAvklaringsbehov.map((currentBeregningsgrunnlag, currentBeregningsgrunnlagIndex) => (
                <Tabs.Tab
                  icon={
                    skalVurderes(currentBeregningsgrunnlag, beregningsgrunnlagVilkår.perioder) ? (
                      <ExclamationmarkTriangleFillIcon color="var(--ax-text-warning-decoration)" />
                    ) : undefined
                  }
                  key={currentBeregningsgrunnlag.skjaeringstidspunktBeregning}
                  value={currentBeregningsgrunnlagIndex.toString()}
                  label={lagLabel(currentBeregningsgrunnlag, beregningsgrunnlagVilkår.perioder)}
                />
              ))}
            </Tabs.List>
          </Tabs>
        )}
        <FordelBeregningsgrunnlagPanel
          aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
          kodeverkSamling={kodeverkSamling}
          submitCallback={submitCallback}
          readOnly={readOnly}
          beregningsgrunnlagListe={bgMedAvklaringsbehov}
          vilkarperioder={beregningsgrunnlagVilkår.perioder}
          submittable={submittable}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          formData={formData}
          setFormData={setFormData}
        />
      </VStack>
    </RawIntlProvider>
  );
};
