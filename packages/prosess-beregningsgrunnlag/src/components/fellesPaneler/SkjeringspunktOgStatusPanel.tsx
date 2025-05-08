import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Tag, VStack } from '@navikt/ds-react';

import { AktivitetStatus, KodeverkType } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, Saksopplysninger } from '@navikt/ft-types';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { KodeverkForPanel } from '../../types/KodeverkForPanelForBg';
import { Lønnsendring } from './Lønnsendring';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

enum TagType {
  BLÅ = 'alt3',
  LILLA = 'alt1',
  GRØNN = 'alt2',
  GRÅ = 'neutral',
}

const finnTagType = (status: string): TagType => {
  switch (status) {
    case AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE:
      return TagType.GRØNN;
    case AktivitetStatus.FRILANSER:
      return TagType.LILLA;
    case AktivitetStatus.ARBEIDSTAKER:
      return TagType.BLÅ;
    default:
      return TagType.GRÅ;
  }
};

type statusObjekt = {
  visningsNavn: string;
  kode: string;
  tagType: TagType;
};

const createStatusEtiketter = (listeMedStatuser: string[], kodeverkSamling: KodeverkForPanel): ReactElement => {
  const statusList = [] as statusObjekt[];
  const unikeStatuser = listeMedStatuser.filter((status, index, self) => index === self.findIndex(t => t === status));
  unikeStatuser.forEach(status => {
    const statusName = kodeverkSamling[KodeverkType.AKTIVITET_STATUS].find(s => s.kode === status)?.navn || '';
    statusList.push({ visningsNavn: statusName, kode: status, tagType: finnTagType(status) });
  });

  statusList.sort((a, b) => (a.visningsNavn > b.visningsNavn ? 1 : -1));
  return (
    <HStack gap="2">
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
  aktivitetStatusList: string[];
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
  <VStack gap="4">
    {createStatusEtiketter(aktivitetStatusList, kodeverkSamling)}
    <HStack gap="2">
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
