import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  DateLabel,
  VerticalSpacer,
  FlexColumn,
  FlexContainer,
  FlexRow,
  BlaBoksMedCheckmarkListe,
} from '@navikt/ft-ui-komponenter';
import { KodeverkType, AktivitetStatus } from '@navikt/ft-kodeverk';

import { BodyShort, Tag } from '@navikt/ds-react';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import KodeverkForPanel from '../../types/kodeverkForPanel';

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

type OwnProps = {
  skjeringstidspunktDato: string;
  aktivitetStatusList: string[];
  kodeverkSamling: KodeverkForPanel;
  lonnsendringSisteTreMan: boolean;
};

/**
 * SkjeringspunktOgStatusPanel
 *
 * Viser skjæringstidspunkt for beregningen og en liste med aktivitetsstatuser.
 */

const SkjeringspunktOgStatusPanel: FunctionComponent<OwnProps> = ({
  skjeringstidspunktDato,
  aktivitetStatusList,
  kodeverkSamling,
  lonnsendringSisteTreMan,
}) => {
  const textIdsTilBlaBoksMedCheckmarkListe = [];
  if (lonnsendringSisteTreMan) {
    textIdsTilBlaBoksMedCheckmarkListe.push('Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan');
  }
  return (
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
        {textIdsTilBlaBoksMedCheckmarkListe.length > 0 && (
          <>
            <VerticalSpacer sixteenPx />
            <FlexRow>
              <FlexColumn>
                <BlaBoksMedCheckmarkListe textIds={textIdsTilBlaBoksMedCheckmarkListe} />
              </FlexColumn>
            </FlexRow>
          </>
        )}
      </FlexContainer>
    </div>
  );
};

export default SkjeringspunktOgStatusPanel;
