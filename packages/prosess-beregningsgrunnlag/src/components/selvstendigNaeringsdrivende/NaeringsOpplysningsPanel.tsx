import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Label, BodyShort, Detail } from '@navikt/ds-react';

import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { Column, Row } from 'nav-frontend-grid';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { dateFormat, formatCurrencyNoKr } from '@navikt/ft-utils';
import { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel, Næring } from '@navikt/ft-types';

import Lesmerpanel from 'nav-frontend-lesmerpanel';
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

const lagBeskrivelsePanel = (næringsAndel: Næring, intl: IntlShape): React.ReactNode => (
  <Lesmerpanel
    intro={lagIntroTilEndringspanel(næringsAndel)}
    lukkTekst={intl.formatMessage({ id: 'Beregningsgrunnlag.NaeringsOpplysningsPanel.SkjulBegrunnelse' })}
    apneTekst={intl.formatMessage({ id: 'Beregningsgrunnlag.NaeringsOpplysningsPanel.VisBegrunnelse' })}
    defaultApen
  >
    {næringsAndel.begrunnelse && næringsAndel.begrunnelse !== '' && (
      <BodyShort size="small" className={styles.merTekstBorder}>
        {næringsAndel.begrunnelse}
      </BodyShort>
    )}
  </Lesmerpanel>
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
  const intl = useIntl();
  const snAndel = alleAndelerIForstePeriode.find(
    andel => andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  if (!snAndel?.næringer) {
    return null;
  }

  const skilleLinje = (
    <FlexRow>
      <FlexColumn className={beregningStyles.heldekkendeKol}>
        <div className={beregningStyles.colDevider} />
      </FlexColumn>
    </FlexRow>
  );

  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Label size="medium" className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift" />
          </Label>
        </FlexColumn>
      </FlexRow>
      {skilleLinje}
      {snAndel.næringer.map(naring => (
        <React.Fragment key={`NaringsWrapper${naring.orgnr}`}>
          <Row key="SNInntektIngress">
            <Column xs="3" className={beregningStyles.colAarText}>
              <Detail size="small" className={styles.naringsType}>
                <FormattedMessage
                  id={`Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.${finnvirksomhetsTypeKode(naring)}`}
                />
              </Detail>
            </Column>
            <Column xs="7" />
            <Column xs="2" className={beregningStyles.colAarText}>
              {søkerHarOppgittInntekt(naring) && (
                <Detail size="small">
                  <FormattedMessage id="Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar" />
                </Detail>
              )}
            </Column>
          </Row>
          <Row key={`NaringsNavn${naring.orgnr}`}>
            <Column xs="10">
              <Label size="small" className={beregningStyles.semiBoldText}>
                {finnBedriftsnavn(naring, arbeidsgiverOpplysningerPerId)}
              </Label>
            </Column>
            <Column xs="2" className={beregningStyles.colAarText}>
              {søkerHarOppgittInntekt(naring) && (
                <BodyShort size="small" className={beregningStyles.semiBoldText}>
                  {formatCurrencyNoKr(naring.oppgittInntekt)}
                </BodyShort>
              )}
            </Column>
          </Row>
          <Row key={`NaringsDetaljer${naring.orgnr}`}>
            <Column xs="2">
              <BodyShort>{naring && naring.orgnr ? naring.orgnr : ''}</BodyShort>
            </Column>
            <Column xs="4">
              {virksomhetsDatoer(naring) && <Detail size="small">{virksomhetsDatoer(naring)}</Detail>}
            </Column>
          </Row>
          <Row key={`RevisorRad${naring.orgnr}`}>
            <Column xs="10">
              {naring.regnskapsførerNavn && <BodyShort size="small">{revisorDetaljer(naring)}</BodyShort>}
            </Column>
          </Row>
          {erNæringNyoppstartetEllerVarigEndret(naring) && (
            <>
              {skilleLinje}
              <Row>{lagBeskrivelsePanel(naring, intl)}</Row>
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default NaeringsopplysningsPanel;
