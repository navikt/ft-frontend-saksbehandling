import { BodyShort, Detail, Heading, Label } from '@navikt/ds-react';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel, Næring } from '@navikt/ft-types';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { dateFormat, formatCurrencyNoKr } from '@navikt/ft-utils';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import { Ledelinje } from '../fellesPaneler/Ledelinje';
import styles from './naeringsOpplysningsPanel.module.css';

const finnVirksomhetTypeTekst = (næring: Næring): string => {
  const kode = næring?.virksomhetType;
  if (!kode) {
    return 'Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT';
  }
  switch (kode) {
    case 'JORDBRUK_SKOGBRUK':
      return 'Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK';
    case 'DAGMAMMA':
      return 'Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA';
    case 'FISKE':
      return 'Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE';
    case 'FRILANSER':
      return 'Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER';
    case 'ANNEN':
      return 'Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN';
    default:
      return 'Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT';
  }
};

const virksomhetsDatoer = (næring: Næring): string | undefined => {
  const { oppstartsdato, opphørsdato } = næring;
  if (!oppstartsdato) {
    return undefined;
  }
  return opphørsdato ? `${dateFormat(oppstartsdato)}-${dateFormat(opphørsdato)} ` : `${dateFormat(oppstartsdato)}-`;
};

const revisorDetaljer = (næring: Næring): string | undefined => {
  const { regnskapsførerNavn, regnskapsførerTlf } = næring;
  if (!regnskapsførerNavn) {
    return undefined;
  }
  return regnskapsførerTlf ? `${regnskapsførerNavn}-${regnskapsførerTlf} ` : `${regnskapsførerNavn}-`;
};

const finnBedriftsnavn = (næring: Næring, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[næring.orgnr];
  return agOpplysning ? agOpplysning.navn : 'Ukjent bedriftsnavn';
};

const lagIntroTilEndringspanel = (næring: Næring): React.ReactNode => {
  const { oppstartsdato, erVarigEndret, endringsdato } = næring;
  const hendelseTekst = erVarigEndret
    ? 'Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret'
    : 'Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret';
  const hendelseDato = erVarigEndret ? endringsdato : oppstartsdato;
  if (!hendelseDato) {
    return null;
  }
  return (
    <Label size="small" className={beregningStyles.semiBoldText}>
      <FormattedMessage
        id={hendelseTekst}
        values={{ dato: dateFormat(hendelseDato), b: (chunks: any) => <b>{chunks}</b> }}
      />
    </Label>
  );
};

const erNæringNyoppstartetEllerVarigEndret = (næring: Næring): boolean => {
  const { erNyoppstartet, erVarigEndret } = næring;
  return !!erVarigEndret || !!erNyoppstartet;
};

const lagBeskrivelsePanel = (næringsAndel: Næring): React.ReactNode => {
  if (næringsAndel.begrunnelse && næringsAndel.begrunnelse !== '') {
    return (
      <BodyShort size="small" className={styles.merTekstBorder}>
        {næringsAndel.begrunnelse}
      </BodyShort>
    );
  }
  return null;
};

const søkerHarOppgittInntekt = (næring: Næring): boolean => !!næring.oppgittInntekt || næring.oppgittInntekt === 0;

type Props = {
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const NaeringsopplysningsPanel = ({ alleAndelerIForstePeriode, arbeidsgiverOpplysningerPerId }: Props) => {
  const snAndel = alleAndelerIForstePeriode.find(
    andel => andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  if (!snAndel?.næringer) {
    return null;
  }

  return (
    <>
      <FlexRow>
        <FlexColumn className={beregningStyles.tabellAktivitet}>
          <Heading size="medium">
            <FormattedMessage id="Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift" />
          </Heading>
        </FlexColumn>
        <FlexColumn className={beregningStyles.tabellAktivitet} />
        <FlexColumn className={beregningStyles.tabellInntekt}>
          <Detail>
            <FormattedMessage id="Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar" />
          </Detail>
        </FlexColumn>
      </FlexRow>
      <Ledelinje prosentBredde={100} />
      {snAndel.næringer.map(naring => (
        <React.Fragment key={`NaringsWrapper${naring.orgnr}`}>
          <FlexRow>
            <FlexColumn className={beregningStyles.næringOpplysningNavn}>
              <Label size="small" className={beregningStyles.semiBoldText}>
                {finnBedriftsnavn(naring, arbeidsgiverOpplysningerPerId)}
              </Label>
            </FlexColumn>
            <FlexColumn className={beregningStyles.næringOpplysningInntekt}>
              {søkerHarOppgittInntekt(naring) && (
                <Label size="small">{formatCurrencyNoKr(naring.oppgittInntekt)}</Label>
              )}
            </FlexColumn>
          </FlexRow>
          <FlexRow key={`NaringsDetaljer${naring.orgnr}`}>
            <FlexColumn className={beregningStyles.næringOpplysningOrgnr}>
              <BodyShort size="small">{naring && naring.orgnr ? naring.orgnr : ''}</BodyShort>
            </FlexColumn>
            <FlexColumn className={beregningStyles.næringOpplysningDato}>
              {virksomhetsDatoer(naring) && <BodyShort size="small">{virksomhetsDatoer(naring)}</BodyShort>}
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <BodyShort size="small">
                <FormattedMessage id={finnVirksomhetTypeTekst(naring)} />
              </BodyShort>
            </FlexColumn>
          </FlexRow>
          <FlexRow key={`RevisorRad${naring.orgnr}`}>
            <FlexColumn>
              {naring.regnskapsførerNavn && <BodyShort size="small">{revisorDetaljer(naring)}</BodyShort>}
            </FlexColumn>
          </FlexRow>
          {erNæringNyoppstartetEllerVarigEndret(naring) && (
            <>
              <Ledelinje prosentBredde={100} />
              <VerticalSpacer twentyPx />
              {lagIntroTilEndringspanel(naring)}
              <VerticalSpacer eightPx />
              <FlexRow className={beregningStyles.næringEndringBeskrivelse}>
                <FlexColumn>{lagBeskrivelsePanel(naring)}</FlexColumn>
              </FlexRow>
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
