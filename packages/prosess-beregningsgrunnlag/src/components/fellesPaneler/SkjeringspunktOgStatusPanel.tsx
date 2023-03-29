import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import norskFormat from 'dayjs/locale/nb';
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
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  LønnsendringSaksopplysning,
  Saksopplysninger,
} from '@navikt/ft-types';
import { BodyShort, Tag } from '@navikt/ds-react';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import KodeverkForPanel from '../../types/kodeverkForPanel';
import createVisningsnavnForAktivitet from '../../util/createVisningsnavnForAktivitet';

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
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const uledMåned = (dato: string) => dayjs(dato).locale(norskFormat).format('MMMM');

function finnLønnsendringsdatoer(
  opplysninger: LønnsendringSaksopplysning[],
  scenario: LønnsendringScenario,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) {
  const datoListe = opplysninger
    .filter(it => it.lønnsendringscenario === scenario)
    .map(
      it => `i ${createVisningsnavnForAktivitet(
        arbeidsgiverOpplysningerPerId[it.arbeidsforhold.arbeidsgiverIdent],
        undefined,
      )}
      ${dayjs(it.sisteLønnsendringsdato).format(DDMMYYYY_DATE_FORMAT)}`,
    );
  return datoListe.reduce((concatString, current, index) => {
    if (index === 0) {
      return current;
    }
    if (index < datoListe.length - 2) {
      return `${concatString}, ${current}`;
    }
    return `${concatString} og ${current}`;
  }, '');
}

const finnScenarioTekst = (
  scenario: string,
  stp: string,
  opplysninger: LønnsendringSaksopplysning[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => {
  switch (scenario) {
    case LønnsendringScenario.MANUELT_BEHANDLET:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet"
          values={{
            datoer: finnLønnsendringsdatoer(
              opplysninger,
              LønnsendringScenario.MANUELT_BEHANDLET,
              arbeidsgiverOpplysningerPerId,
            ),
          }}
        />
      );
    case LønnsendringScenario.DELVIS_MÅNEDSINNTEKT_SISTE_MND:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned"
          values={{
            datoer: finnLønnsendringsdatoer(
              opplysninger,
              LønnsendringScenario.DELVIS_MÅNEDSINNTEKT_SISTE_MND,
              arbeidsgiverOpplysningerPerId,
            ),
            måned: uledMåned(dayjs(stp).subtract(1, 'month').format(YYYY_MM_FORMAT)),
            forrigeMåned: uledMåned(dayjs(stp).subtract(2, 'month').format(YYYY_MM_FORMAT)),
          }}
        />
      );
    case LønnsendringScenario.FULL_MÅNEDSINNTEKT_EN_MND:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned"
          values={{
            datoer: finnLønnsendringsdatoer(
              opplysninger,
              LønnsendringScenario.FULL_MÅNEDSINNTEKT_EN_MND,
              arbeidsgiverOpplysningerPerId,
            ),
            nesteMåned: uledMåned(dayjs(stp).subtract(1, 'month').format(YYYY_MM_FORMAT)),
          }}
        />
      );
    case LønnsendringScenario.FULL_MÅNEDSINNTEKT_TO_MND:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned"
          values={{
            datoer: finnLønnsendringsdatoer(
              opplysninger,
              LønnsendringScenario.FULL_MÅNEDSINNTEKT_TO_MND,
              arbeidsgiverOpplysningerPerId,
            ),
            sisteMåned: uledMåned(dayjs(stp).subtract(1, 'month').format(YYYY_MM_FORMAT)),
            nesteMåned: uledMåned(dayjs(stp).subtract(2, 'month').format(YYYY_MM_FORMAT)),
          }}
        />
      );
    default:
      return null;
  }
};

function lagLesMer(
  opplysninger: LønnsendringSaksopplysning[],
  skjeringstidspunktDato: string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) {
  const unikeScenario = unique(opplysninger.map(o => o.lønnsendringscenario));
  return unikeScenario.map(scenario => (
    <>
      {finnScenarioTekst(scenario, skjeringstidspunktDato, opplysninger, arbeidsgiverOpplysningerPerId)}
      <br />
      <VerticalSpacer sixteenPx />
    </>
  ));
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
  arbeidsgiverOpplysningerPerId,
}) => {
  const saksopplysningerTilBlaBoksMedCheckmarkListe = [];
  if (
    saksopplysninger &&
    saksopplysninger.lønnsendringSaksopplysning &&
    saksopplysninger.lønnsendringSaksopplysning.length > 0
  ) {
    saksopplysningerTilBlaBoksMedCheckmarkListe.push({
      textId: 'Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan',
      readMoreContent: lagLesMer(
        saksopplysninger.lønnsendringSaksopplysning,
        skjeringstidspunktDato,
        arbeidsgiverOpplysningerPerId,
      ),
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
