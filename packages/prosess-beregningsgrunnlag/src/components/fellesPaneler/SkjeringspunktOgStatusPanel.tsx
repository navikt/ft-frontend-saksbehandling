import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { DDMMYYYY_DATE_FORMAT, YYYY_MM_FORMAT } from '@navikt/ft-utils';

import {
  BlaBoksMedCheckmarkListe,
  DateLabel,
  FlexColumn,
  FlexContainer,
  FlexRow,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { AktivitetStatus, KodeverkType, LønnsendringScenario } from '@navikt/ft-kodeverk';

import { AlleKodeverk, LønnsendringSaksopplysning, Saksopplysninger } from '@navikt/ft-types';
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
  saksopplysninger?: Saksopplysninger;
};

function uledMåned(skjeringstidspunktDato: string) {
  const månedsnummer = dayjs(skjeringstidspunktDato).month();
  switch (månedsnummer) {
    case 0:
      return 'januar';
    case 1:
      return 'februar';
    case 2:
      return 'mars';
    case 3:
      return 'april';
    case 4:
      return 'mai';
    case 5:
      return 'juni';
    case 6:
      return 'juli';
    case 7:
      return 'august';
    case 8:
      return 'september';
    case 9:
      return 'oktober';
    case 10:
      return 'november';
    case 11:
      return 'desember';
    default:
      throw Error(`Ugyldig måned ${månedsnummer} for dato ${skjeringstidspunktDato}`);
  }
}

function lagLesMer(opplysning: LønnsendringSaksopplysning, skjeringstidspunktDato: string) {
  switch (opplysning.lønnsendringscenario) {
    case LønnsendringScenario.MANUELT_BEHANDLET:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet"
          values={{
            sisteLønnsendring: dayjs(opplysning.sisteLønnsendringsdato).format(DDMMYYYY_DATE_FORMAT),
          }}
        />
      );
    case LønnsendringScenario.DELVIS_MÅNEDSINNTEKT_SISTE_MND:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned"
          values={{
            sisteLønnsendring: dayjs(opplysning.sisteLønnsendringsdato).format(DDMMYYYY_DATE_FORMAT),
            måned: uledMåned(opplysning.sisteLønnsendringsdato),
            forrigeMåned: uledMåned(
              dayjs(opplysning.sisteLønnsendringsdato).subtract(1, 'month').format(YYYY_MM_FORMAT),
            ),
          }}
        />
      );
    case LønnsendringScenario.FULL_MÅNEDSINNTEKT_EN_MND:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned"
          values={{
            sisteLønnsendring: dayjs(opplysning.sisteLønnsendringsdato).format(DDMMYYYY_DATE_FORMAT),
            nesteMåned: uledMåned(dayjs(skjeringstidspunktDato).subtract(1, 'month').format(YYYY_MM_FORMAT)),
          }}
        />
      );
    case LønnsendringScenario.FULL_MÅNEDSINNTEKT_TO_MND:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned"
          values={{
            sisteLønnsendring: dayjs(opplysning.sisteLønnsendringsdato).format(DDMMYYYY_DATE_FORMAT),
            sisteMåned: uledMåned(dayjs(skjeringstidspunktDato).subtract(1, 'month').format(YYYY_MM_FORMAT)),
            nesteMåned: uledMåned(dayjs(skjeringstidspunktDato).subtract(2, 'month').format(YYYY_MM_FORMAT)),
          }}
        />
      );
    default:
      return null;
  }
}

/**
 * SkjeringspunktOgStatusPanel
 *
 * Viser skjæringstidspunkt for beregningen og en liste med aktivitetsstatuser.
 */

const SkjeringspunktOgStatusPanel: FunctionComponent<OwnProps> = ({
  skjeringstidspunktDato,
  aktivitetStatusList,
  kodeverkSamling,
  saksopplysninger,
}) => {
  const saksopplysningerTilBlaBoksMedCheckmarkListe = [];
  if (saksopplysninger && saksopplysninger.lønnsendringSaksopplysning) {
    saksopplysningerTilBlaBoksMedCheckmarkListe.push({
      textId: 'Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan',
      readMoreContent: lagLesMer(saksopplysninger.lønnsendringSaksopplysning, skjeringstidspunktDato),
    });
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
        {saksopplysningerTilBlaBoksMedCheckmarkListe.length > 0 && (
          <>
            <VerticalSpacer sixteenPx />
            <FlexRow>
              <FlexColumn>
                <BlaBoksMedCheckmarkListe saksopplysninger={saksopplysningerTilBlaBoksMedCheckmarkListe} />
              </FlexColumn>
            </FlexRow>
          </>
        )}
      </FlexContainer>
    </div>
  );
};

export default SkjeringspunktOgStatusPanel;
