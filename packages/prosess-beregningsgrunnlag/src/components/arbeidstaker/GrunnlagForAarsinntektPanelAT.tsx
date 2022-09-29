import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import { getKodeverknavnFn, dateFormat, formatCurrencyNoKr } from '@navikt/ft-utils';
import { KodeverkType, AktivitetStatus } from '@navikt/ft-kodeverk';
import { VerticalSpacer, FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';

import { Label, Detail, BodyShort } from '@navikt/ds-react';
import { createVisningsnavnForAndel } from '../../util/createVisningsnavnForAktivitet';
import NaturalytelsePanel from './NaturalytelsePanel';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import { ArbeidstakerInntektValues } from '../../types/ATFLAksjonspunktTsType';

export const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean => {
  // Andelen er fastsatt før og må kunne fastsettes igjen
  if (andel.overstyrtPrAar !== null && andel.overstyrtPrAar !== undefined) {
    return true;
  }

  // Andeler som er lagt til av sbh eller tilkom før stp skal ikke kunne endres på
  return andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;
};

const finnAndelerSomSkalVises = (andeler: BeregningsgrunnlagAndel[]): BeregningsgrunnlagAndel[] => {
  if (!andeler) {
    return [];
  }
  return andeler
    .filter(andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER)
    .filter(andel => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
};

const createArbeidsPeriodeText = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold): string => {
  const periodeArr = [];

  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'startdato') && arbeidsforhold.startdato) {
    periodeArr.push(dateFormat(arbeidsforhold.startdato));
  }
  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'opphoersdato') && arbeidsforhold.opphoersdato) {
    periodeArr.push('-');
    periodeArr.push(dateFormat(arbeidsforhold.opphoersdato));
  }
  return periodeArr.join(' ');
};

const createArbeidsStillingsNavnOgProsent = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold): string => {
  // TODO: her må stillingsnavn og stillingsprosent hentes når vi får disse dataene fra backend
  const stillingArr = [''];
  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'stillingsNavn') && arbeidsforhold.stillingsNavn) {
    stillingArr.push(arbeidsforhold.stillingsNavn);
  }
  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'stillingsProsent') && arbeidsforhold.stillingsProsent) {
    stillingArr.push(`${arbeidsforhold.stillingsProsent}%`);
  }
  if (stillingArr.length !== 0) {
    return stillingArr.join(' ');
  }
  return ' ';
};

const finnBeregnetEller0 = (andel: BeregningsgrunnlagAndel): number => (andel.beregnetPrAar ? andel.beregnetPrAar : 0);

const createArbeidsIntektRows = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] => {
  const beregnetAarsinntekt = relevanteAndeler.reduce((acc, andel) => acc + finnBeregnetEller0(andel), 0);
  const beregnetMaanedsinntekt = beregnetAarsinntekt ? beregnetAarsinntekt / 12 : 0;
  const rows = relevanteAndeler.map((andel, index) => (
    <React.Fragment
      key={`ArbInntektWrapper${createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, getKodeverknavn)}${
        index + 1
      }`}
    >
      <Row key={`index${index + 1}`}>
        <Column xs="8" key={`ColLable${andel.arbeidsforhold?.arbeidsgiverIdent}`}>
          <Label size="small" key={`ColLableTxt${index + 1}`} className={beregningStyles.semiBoldText}>
            {createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, getKodeverknavn)}
          </Label>
        </Column>

        <Column
          key={`ColBrgMnd${andel.arbeidsforhold?.arbeidsgiverIdent}`}
          xs="2"
          className={beregningStyles.colMaanedText}
        >
          <BodyShort key={`ColBrgMndTxt${andel.arbeidsforhold?.arbeidsgiverIdent}`}>
            {formatCurrencyNoKr(finnBeregnetEller0(andel) / 12)}
          </BodyShort>
        </Column>
        <Column
          key={`ColBrgAar${andel.arbeidsforhold?.arbeidsgiverIdent}`}
          xs="2"
          className={beregningStyles.colAarText}
        >
          <Label size="small" key={`ColBrgAarTxt${andel.arbeidsforhold?.arbeidsgiverIdent}`}>
            {formatCurrencyNoKr(andel.beregnetPrAar)}
          </Label>
        </Column>
      </Row>
      <FlexRow key={`indexD${andel.arbeidsforhold?.arbeidsgiverIdent}`}>
        {andel.arbeidsforhold && andel.arbeidsforhold.stillingsNavn && (
          <FlexColumn>
            <BodyShort>{createArbeidsStillingsNavnOgProsent(andel.arbeidsforhold)}</BodyShort>
          </FlexColumn>
        )}
        {andel.arbeidsforhold && andel.arbeidsforhold.startdato && (
          <FlexColumn>
            <Detail size="small">{createArbeidsPeriodeText(andel.arbeidsforhold)}</Detail>
          </FlexColumn>
        )}
        {andel.erTidsbegrensetArbeidsforhold && (
          <FlexColumn>
            <Detail>
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset" />
            </Detail>
          </FlexColumn>
        )}
      </FlexRow>
      {index < relevanteAndeler.length && (
        <Row key={`indexSp${andel.arbeidsforhold?.arbeidsgiverIdent}`}>
          <VerticalSpacer eightPx />
        </Row>
      )}
    </React.Fragment>
  ));
  if (relevanteAndeler.length > 1) {
    const summaryRow = (
      <React.Fragment key="bruttoBeregningsgrunnlag">
        <Row>
          <Column xs="11" className={beregningStyles.noPaddingRight}>
            <div className={beregningStyles.colDevider} />
          </Column>
        </Row>
        <Row>
          <Column xs="7">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt" />
          </Column>
          <Column key="ColBBgMnd" xs="2" className={beregningStyles.colMaanedText}>
            <BodyShort>{formatCurrencyNoKr(beregnetMaanedsinntekt)}</BodyShort>
          </Column>
          <Column className={beregningStyles.colAarText} xs="2">
            <Label size="small">{formatCurrencyNoKr(beregnetAarsinntekt)}</Label>
          </Column>
          <Column className={beregningStyles.colLink} />
        </Row>
      </React.Fragment>
    );
    rows.push(summaryRow);
  }
  return rows;
};

interface StaticFunctions {
  buildInitialValues: (alleAndeler: BeregningsgrunnlagAndel[]) => ArbeidstakerInntektValues;
}

type OwnProps = {
  alleAndelerIFørstePeriode: BeregningsgrunnlagAndel[];
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: AlleKodeverk;
};

/**
 * GrunnlagForAarsinntektPanelAT
 *
 * Presentasjonskomponent. Viser beregningsgrunnlagstabellen for arbeidstakere.
 * Vises også hvis status er en kombinasjonsstatus som inkluderer arbeidstaker.
 */
const GrunnlagForAarsinntektPanelAT: FunctionComponent<OwnProps> & StaticFunctions = ({
  alleAndelerIFørstePeriode,
  allePerioder,
  arbeidsgiverOpplysningerPerId,
  alleKodeverk,
}) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndelerIFørstePeriode);
  if (!relevanteAndeler || relevanteAndeler.length === 0) return null;
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Label size="medium">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt" />
          </Label>
        </FlexColumn>
      </FlexRow>
      <Row key="Header">
        <Column xs="8" key="ATempthy1" />
        <Column key="ATMndHead" className={beregningStyles.colMaanedText} xs="2">
          <Detail size="small">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
          </Detail>
        </Column>
        <Column key="ATAarHead" className={beregningStyles.colAarText} xs="2">
          <Detail size="small">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
          </Detail>
        </Column>
        <Column className={beregningStyles.colLink} xs="1" />
      </Row>
      {createArbeidsIntektRows(relevanteAndeler, getKodeverknavn, arbeidsgiverOpplysningerPerId)}
      <NaturalytelsePanel allePerioder={allePerioder} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} />
    </>
  );
};

GrunnlagForAarsinntektPanelAT.defaultProps = {
  allePerioder: undefined,
};

GrunnlagForAarsinntektPanelAT.buildInitialValues = (
  alleAndeler: BeregningsgrunnlagAndel[],
): ArbeidstakerInntektValues => {
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndeler);
  const initialValues = {} as ArbeidstakerInntektValues;
  relevanteAndeler.forEach((inntekt, index) => {
    initialValues[`inntekt${index}`] = formatCurrencyNoKr(inntekt.overstyrtPrAar) || '';
  });
  return initialValues;
};
export default GrunnlagForAarsinntektPanelAT;
