import { DateLabel, FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Tag } from '@navikt/ds-react';
import { AktivitetStatus, KodeverkType } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, Saksopplysninger } from '@navikt/ft-types';
import { KodeverkForPanel } from '../../types/KodeverkForPanelForBg';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import { SaksopplysningPanel } from './SaksopplysningPanel';

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
    <FlexRow>
      {statusList.map(status => (
        <FlexColumn key={status.visningsNavn} className={beregningStyles.tagRad}>
          <Tag variant={status.tagType} title={status.visningsNavn} className={beregningStyles.tagMargin}>
            {status.visningsNavn}
          </Tag>
        </FlexColumn>
      ))}
    </FlexRow>
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
  <div className={beregningStyles.panelLeft}>
    {createStatusEtiketter(aktivitetStatusList, kodeverkSamling)}
    <VerticalSpacer sixteenPx />
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning" />
          </BodyShort>
        </FlexColumn>
        <FlexColumn>
          <BodyShort size="small" className={beregningStyles.semiBoldText}>
            <DateLabel dateString={skjeringstidspunktDato} />
          </BodyShort>
        </FlexColumn>
      </FlexRow>
      {!!saksopplysninger &&
        !!saksopplysninger.lønnsendringSaksopplysning &&
        saksopplysninger.lønnsendringSaksopplysning.length > 0 && (
          <>
            <VerticalSpacer sixteenPx />
            <FlexRow>
              <FlexColumn>
                <SaksopplysningPanel
                  arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                  skjeringstidspunktDato={skjeringstidspunktDato}
                  saksopplysninger={saksopplysninger}
                />
              </FlexColumn>
            </FlexRow>
          </>
        )}
    </FlexContainer>
  </div>
);
