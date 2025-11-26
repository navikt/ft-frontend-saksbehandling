import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Tag, VStack } from '@navikt/ds-react';

import type { AktivitetStatus, ArbeidsgiverOpplysningerPerId, Saksopplysninger } from '@navikt/ft-types';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { Lønnsendring } from './Lønnsendring';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

enum TagType {
  BLÅ = 'alt3',
  LILLA = 'alt1',
  GRØNN = 'alt2',
  GRÅ = 'neutral',
}

const finnTagType = (status: AktivitetStatus): TagType => {
  switch (status) {
    case 'SN':
      return TagType.GRØNN;
    case 'FL':
      return TagType.LILLA;
    case 'AT':
      return TagType.BLÅ;
    default:
      return TagType.GRÅ;
  }
};

type StatusObjekt = {
  visningsNavn: string;
  kode: string;
  tagType: TagType;
};

const createStatusEtiketter = (
  listeMedStatuser: AktivitetStatus[],
  kodeverkSamling: KodeverkForPanel,
): ReactElement => {
  const statusList: StatusObjekt[] = [];
  const unikeStatuser = new Set(listeMedStatuser);
  for (const status of unikeStatuser) {
    const statusName = kodeverkSamling['AktivitetStatus'].find(s => s.kode === status)?.navn || '';
    statusList.push({ visningsNavn: statusName, kode: status, tagType: finnTagType(status) });
  }

  statusList.sort((a, b) => (a.visningsNavn > b.visningsNavn ? 1 : -1));
  return (
    <HStack gap="space-8">
      {statusList.map(status => (
        <Tag
          key={status.kode}
          variant={status.tagType}
          title={status.visningsNavn}
          className={beregningStyles.tagMargin}
        >
          {status.visningsNavn}
        </Tag>
      ))}
    </HStack>
  );
};

type Props = {
  skjeringstidspunktDato: string;
  aktivitetStatusList: AktivitetStatus[];
  kodeverkSamling: KodeverkForPanel;
  saksopplysninger?: Saksopplysninger;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

/**
 * SkjeringspunktOgStatusPanel
 *
 * Viser skjæringstidspunkt for beregningen og en liste med aktivitetsstatuser.
 */

export const SkjeringspunktOgStatusPanel = ({
  skjeringstidspunktDato,
  aktivitetStatusList,
  kodeverkSamling,
  saksopplysninger,
  arbeidsgiverOpplysningerPerId,
}: Props) => (
  <VStack gap="space-16">
    {createStatusEtiketter(aktivitetStatusList, kodeverkSamling)}
    <HStack gap="space-8">
      <BodyShort size="small">
        <FormattedMessage id="SkjeringspunktOgStatusPanel.SkjeringForBeregning" />
      </BodyShort>
      <BodyShort size="small" className={beregningStyles.semiBoldText}>
        <DateLabel dateString={skjeringstidspunktDato} />
      </BodyShort>
    </HStack>
    {!!saksopplysninger &&
      !!saksopplysninger.lønnsendringSaksopplysning &&
      saksopplysninger.lønnsendringSaksopplysning.length > 0 && (
        <Lønnsendring
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          skjeringstidspunktDato={skjeringstidspunktDato}
          lønnsendringSaksopplysning={saksopplysninger.lønnsendringSaksopplysning}
        />
      )}
  </VStack>
);
