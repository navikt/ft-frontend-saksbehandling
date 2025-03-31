import React from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel, Næring } from '@navikt/ft-types';
import { BTag, dateFormat, formatCurrencyNoKr } from '@navikt/ft-utils';

import { HorizontalLine } from '../../util/HorizontalLine';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
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
      <FormattedMessage id={hendelseTekst} values={{ dato: dateFormat(hendelseDato), b: BTag }} />
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
    <VStack gap="1">
      <HStack justify="space-between">
        <Heading size="medium">
          <FormattedMessage id="Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift" />
        </Heading>
        <Detail>
          <FormattedMessage id="Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar" />
        </Detail>
      </HStack>
      <HorizontalLine />
      {snAndel.næringer.map(naring => (
        <React.Fragment key={`NaringsWrapper${naring.orgnr}`}>
          <HStack justify="space-between" wrap={false}>
            <Label size="small" className={beregningStyles.semiBoldText}>
              {finnBedriftsnavn(naring, arbeidsgiverOpplysningerPerId)}
            </Label>
            {søkerHarOppgittInntekt(naring) && <Label size="small">{formatCurrencyNoKr(naring.oppgittInntekt)}</Label>}
          </HStack>
          <HStack gap="14" wrap={false}>
            <BodyShort size="small">{naring && naring.orgnr ? naring.orgnr : ''}</BodyShort>
            {virksomhetsDatoer(naring) && <BodyShort size="small">{virksomhetsDatoer(naring)}</BodyShort>}
          </HStack>
          <BodyShort size="small">
            <FormattedMessage id={finnVirksomhetTypeTekst(naring)} />
          </BodyShort>
          {naring.regnskapsførerNavn && <BodyShort size="small">{revisorDetaljer(naring)}</BodyShort>}
          {erNæringNyoppstartetEllerVarigEndret(naring) && (
            <VStack gap="6">
              <HorizontalLine />
              <VStack gap="2">
                {lagIntroTilEndringspanel(naring)}
                <div className={beregningStyles.næringEndringBeskrivelse}>{lagBeskrivelsePanel(naring)}</div>
              </VStack>
            </VStack>
          )}
        </React.Fragment>
      ))}
    </VStack>
  );
};
