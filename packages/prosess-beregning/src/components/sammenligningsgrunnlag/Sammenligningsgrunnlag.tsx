import { FormattedMessage, useIntl } from 'react-intl';

import { ExpansionCard } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Inntektsgrunnlag } from '@navikt/ft-types';

import { SammenligningsgrunnlagGraf } from './SammenligningsgrunnlagGraf';
import { SammenligningsgrunnlagTabell } from './SammenligningsgrunnlagTabell';

interface Props {
  sammenligningsgrunnlagFom: string;
  inntektsgrunnlag: Inntektsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const Sammenligningsgrunnlag = ({
  inntektsgrunnlag,
  sammenligningsgrunnlagFom,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const intl = useIntl();
  return (
    <ExpansionCard
      defaultOpen
      size="small"
      aria-label={intl.formatMessage({ id: 'Sammenligningsgrunnlag.ExpansionCard.Header' })}
    >
      <ExpansionCard.Header>
        <ExpansionCard.Title size="small">
          <FormattedMessage id="Sammenligningsgrunnlag.ExpansionCard.Header" />
        </ExpansionCard.Title>
        <ExpansionCard.Description>
          <FormattedMessage id="Sammenligningsgrunnlag.ExpansionCard.Description" />
        </ExpansionCard.Description>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <SammenligningsgrunnlagGraf
          sammenligningsgrunnlagInntekter={inntektsgrunnlag.sammenligningsgrunnlagInntekter}
          sammenligningsgrunnlagFom={sammenligningsgrunnlagFom}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
        <SammenligningsgrunnlagTabell
          sammenligningsgrunnlagInntekter={inntektsgrunnlag.sammenligningsgrunnlagInntekter}
          sammenligningsgrunnlagFom={sammenligningsgrunnlagFom}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};
