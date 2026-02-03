import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Spacer } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { BTag, dateFormat } from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../types/KodeverkForPanel';
import type { Vilkår } from '../types/Vilkår';
import { AksjonspunktKode, medAPKode } from '../utils/aksjonspunkt';
import { createVisningsnavnForAndel } from '../utils/createVisningsnavnForAktivitet';
import { ReadonlyAPGraderingUtenBG } from './aksjonspunkt/utgåttAP/ReadonlyAPGraderingUtenBG';
import { AktivitetStatusTags } from './AktivitetStatusTags';
import { Arbeidsinntekt } from './arbeidsinntekt/Arbeidsinntekt';
import { Avviksberegninger } from './avviksberegning/Avviksberegninger';
import { Dagsatser } from './dagsats/Dagsatser';
import { RegisterInntekter } from './registerinntekter/RegisterInntekter';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkår: Vilkår;
  kodeverkSamling: KodeverkForPanel;
}

export const TabInnhold = ({
  beregningsgrunnlag,
  beregningsgrunnlagsvilkår,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const { inntektsgrunnlag, avklaringsbehov } = beregningsgrunnlag;
  return (
    <>
      <HStack align="center" gap="space-12">
        <AktivitetStatusTags
          kodeverkSamling={kodeverkSamling}
          beregningsgrunnlagPeriode={beregningsgrunnlag.beregningsgrunnlagPeriode}
        />
        <Spacer />
        <BodyShort size="small">
          <FormattedMessage
            id="TabInnhold.Skjæringstidspunkt"
            values={{ dato: dateFormat(beregningsgrunnlag.skjaeringstidspunktBeregning), b: BTag }}
          />
        </BodyShort>
      </HStack>

      <Arbeidsinntekt
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        kodeverkSamling={kodeverkSamling}
      />

      {inntektsgrunnlag && (
        <RegisterInntekter
          inntektsgrunnlag={inntektsgrunnlag}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      )}

      <HStack gap="space-12">
        <Avviksberegninger
          beregningsgrunnlag={beregningsgrunnlag}
          formaterVisningsnavnForAndel={createVisningsnavnForAndel(arbeidsgiverOpplysningerPerId, kodeverkSamling)}
        />
        <Dagsatser
          beregningsgrunnlag={beregningsgrunnlag}
          beregningsgrunnlagsvilkår={beregningsgrunnlagsvilkår}
          kodeverkSamling={kodeverkSamling}
        />
      </HStack>

      <ReadonlyAPGraderingUtenBG
        avklaringsbehov={avklaringsbehov.find(medAPKode(AksjonspunktKode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG))}
      />
    </>
  );
};
