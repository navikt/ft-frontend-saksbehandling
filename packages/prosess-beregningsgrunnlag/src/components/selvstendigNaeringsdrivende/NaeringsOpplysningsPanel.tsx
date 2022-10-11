import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail, ReadMore, Heading } from '@navikt/ds-react';

import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { dateFormat, formatCurrencyNoKr } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel, Næring } from '@navikt/ft-types';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import styles from './naeringsOpplysningsPanel.less';

const finnvirksomhetsTypeKode = (næring: Næring): string => {
  const kode = næring?.virksomhetType;
  return kode || 'UDEFINERT';
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

const lagBeskrivelsePanel = (næringsAndel: Næring): React.ReactNode => (
  <ReadMore size="medium" header={lagIntroTilEndringspanel(næringsAndel)} defaultOpen>
    {næringsAndel.begrunnelse && næringsAndel.begrunnelse !== '' && (
      <BodyShort size="small" className={styles.merTekstBorder}>
        {næringsAndel.begrunnelse}
      </BodyShort>
    )}
  </ReadMore>
);

const søkerHarOppgittInntekt = (næring: Næring): boolean => !!næring.oppgittInntekt || næring.oppgittInntekt === 0;

type OwnProps = {
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const NaeringsopplysningsPanel: FunctionComponent<OwnProps> = ({
  alleAndelerIForstePeriode,
  arbeidsgiverOpplysningerPerId,
}) => {
  const snAndel = alleAndelerIForstePeriode.find(
    andel => andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  if (!snAndel?.næringer) {
    return null;
  }

  const skilleLinje = (
    <FlexRow className={beregningStyles.noPaddingRight}>
      <FlexColumn className={beregningStyles.heldekkendeKol}>
        <div className={beregningStyles.colDevider} />
      </FlexColumn>
    </FlexRow>
  );

  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Heading size="medium">
            <FormattedMessage id="Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift" />
          </Heading>
        </FlexColumn>
        <FlexColumn className={beregningStyles.hoyreOverskrift}>
          <Detail>
            <FormattedMessage id="Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar" />
          </Detail>
        </FlexColumn>
      </FlexRow>
      {skilleLinje}
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
            <FlexColumn className={beregningStyles.næringOpplysningOrgnrDato}>
              <BodyShort size="small">{naring && naring.orgnr ? naring.orgnr : ''}</BodyShort>
            </FlexColumn>
            <FlexColumn className={beregningStyles.næringOpplysningOrgnrDato}>
              {virksomhetsDatoer(naring) && <BodyShort size="small">{virksomhetsDatoer(naring)}</BodyShort>}
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <BodyShort size="small">
                <FormattedMessage
                  id={`Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.${finnvirksomhetsTypeKode(naring)}`}
                />
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
              {skilleLinje}
              <>{lagBeskrivelsePanel(naring)}</>
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default NaeringsopplysningsPanel;
