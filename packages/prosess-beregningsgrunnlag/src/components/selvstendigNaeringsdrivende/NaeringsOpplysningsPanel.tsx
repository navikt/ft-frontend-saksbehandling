import React from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Label, Table, VStack } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel, Næring } from '@navikt/ft-types';
import { BeløpLabel, NoWrap, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { BTag, dateFormat, formaterArbeidsgiver } from '@navikt/ft-utils';

import tableStyles from '../tableStyle.module.css';
import styles from './naeringsOpplysningsPanel.module.css';

const finnVirksomhetTypeTekst = (næring: Næring): string => {
  const kode = næring?.virksomhetType;
  if (!kode) {
    return 'NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT';
  }
  switch (kode) {
    case 'JORDBRUK_SKOGBRUK':
      return 'NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK';
    case 'DAGMAMMA':
      return 'NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA';
    case 'FISKE':
      return 'NaeringsOpplysningsPanel.VirksomhetsType.FISKE';
    case 'FRILANSER':
      return 'NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER';
    case 'ANNEN':
      return 'NaeringsOpplysningsPanel.VirksomhetsType.ANNEN';
    default:
      return 'NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT';
  }
};

const regnskapsførerDetaljer = ({ regnskapsførerNavn, regnskapsførerTlf }: Næring): string | undefined => {
  if (!regnskapsførerNavn) {
    return undefined;
  }
  return `${regnskapsførerNavn} - Tlf: ${regnskapsførerTlf}`;
};

const lagVisningsnavn = ({ orgnr }: Næring, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[orgnr];
  return agOpplysning ? formaterArbeidsgiver(agOpplysning, undefined) : 'Ukjent bedriftsnavn';
};

const lagIntroTilEndringspanel = ({ oppstartsdato, erVarigEndret, endringsdato }: Næring): React.ReactNode => {
  const hendelseTekst = erVarigEndret ? 'NaeringsOpplysningsPanel.VarigEndret' : 'NaeringsOpplysningsPanel.Nyoppstaret';
  const hendelseDato = erVarigEndret ? endringsdato : oppstartsdato;
  if (!hendelseDato) {
    return null;
  }
  return (
    <Label size="small">
      <FormattedMessage id={hendelseTekst} values={{ dato: dateFormat(hendelseDato), b: BTag }} />
    </Label>
  );
};

const erNæringNyoppstartetEllerVarigEndret = ({ erNyoppstartet, erVarigEndret }: Næring): boolean => {
  return !!erVarigEndret || !!erNyoppstartet;
};

const lagBeskrivelsePanel = ({ begrunnelse }: Næring): React.ReactNode => {
  if (begrunnelse && begrunnelse !== '') {
    return (
      <BodyShort size="small" className={styles.merTekstBorder}>
        {begrunnelse}
      </BodyShort>
    );
  }
  return null;
};

type Props = {
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const NaeringsopplysningsPanel = ({ alleAndelerIForstePeriode, arbeidsgiverOpplysningerPerId }: Props) => {
  const selvstendigNæringer = alleAndelerIForstePeriode.find(
    andel => andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  )?.næringer;

  if (!selvstendigNæringer) {
    return null;
  }

  return (
    <VStack gap="1">
      <Heading size="medium">
        <FormattedMessage id="NaeringsOpplysningsPanel.Overskrift" />
      </Heading>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell align="right" textSize="small">
              <NoWrap>
                <FormattedMessage id="NaeringsOpplysningsPanel.OppgittAar" />
              </NoWrap>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {selvstendigNæringer.map(naring => (
          <Table.Body key={`NaringsWrapper${naring.orgnr}`} className={tableStyles.tableGroup}>
            <Table.Row>
              <Table.HeaderCell textSize="small">
                {lagVisningsnavn(naring, arbeidsgiverOpplysningerPerId)}
              </Table.HeaderCell>
              <Table.DataCell align="right" textSize="small">
                <BeløpLabel beløp={naring.oppgittInntekt} />
              </Table.DataCell>
            </Table.Row>
            <Table.Row shadeOnHover={false}>
              <Table.DataCell textSize="small">
                <VStack gap="2">
                  {naring.oppstartsdato && (
                    <BodyShort size="small">
                      <PeriodLabel dateStringFom={naring.oppstartsdato} dateStringTom={naring.opphørsdato} />
                    </BodyShort>
                  )}
                  <BodyShort size="small">
                    <FormattedMessage id={finnVirksomhetTypeTekst(naring)} />
                  </BodyShort>
                  {naring.regnskapsførerNavn && <BodyShort size="small">{regnskapsførerDetaljer(naring)}</BodyShort>}

                  {erNæringNyoppstartetEllerVarigEndret(naring) && (
                    <>
                      {lagIntroTilEndringspanel(naring)}
                      {lagBeskrivelsePanel(naring)}
                    </>
                  )}
                </VStack>
              </Table.DataCell>
              <Table.DataCell />
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </VStack>
  );
};
