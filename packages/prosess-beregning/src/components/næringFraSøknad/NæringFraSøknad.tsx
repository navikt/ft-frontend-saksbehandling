import { FormattedMessage } from 'react-intl';

import { Box } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Næring } from '@navikt/ft-types';
import { BeløpLabel, DateLabel, FaktaBoks, LabeledValue } from '@navikt/ft-ui-komponenter';
import { formaterArbeidsgiver, TIDENES_ENDE } from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { finnAlleAndelerIFørstePeriode } from '../../utils/beregningsgrunnlagUtils';
import { OpplysningsRad } from './OpplysningsRad';

import styles from './næringFraSøknad.module.css';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  kodeverkSamling: KodeverkForPanel;
}

export const NæringFraSøknad = ({ kodeverkSamling, beregningsgrunnlag, arbeidsgiverOpplysningerPerId }: Props) => {
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(beregningsgrunnlag.beregningsgrunnlagPeriode);
  const selvstendigNæringer = alleAndelerIForstePeriode.find(andel => andel.aktivitetStatus === 'SN')?.næringer;

  if (!selvstendigNæringer || selvstendigNæringer.length === 0) {
    return null;
  }

  // det finnes bare en næring selv om det kommer som en liste
  const næring = selvstendigNæringer[0];

  return (
    <FaktaBoks
      tittel={<FormattedMessage id="NæringFraSøknad.Tittel" />}
      beskrivelse={<FormattedMessage id="NæringFraSøknad.Beskrivelse" />}
    >
      <dl className={styles.opplysninger}>
        <OpplysningsRad
          label={<FormattedMessage id="NæringFraSøknad.Virksomhet" />}
          value={lagVisningsnavn(næring, arbeidsgiverOpplysningerPerId)}
        />

        <OpplysningsRad
          label={<FormattedMessage id="NæringFraSøknad.Næringstype" />}
          value={kodeverkSamling.VirksomhetType.find(k => k.kode === næring.virksomhetType)?.navn ?? '-'}
        />

        <OpplysningsRad
          label={<FormattedMessage id="NæringFraSøknad.Regnskapsfører" />}
          value={næring.regnskapsførerNavn ? `${næring.regnskapsførerNavn} - Tlf: ${næring.regnskapsførerTlf}` : '-'}
        />

        <OpplysningsRad
          label={<FormattedMessage id="NæringFraSøknad.Oppstartsdato" />}
          value={næring.oppstartsdato ? <DateLabel dateString={næring.oppstartsdato} /> : '-'}
        />

        <OpplysningsRad
          label={<FormattedMessage id="NæringFraSøknad.Opphørsdato" />}
          value={
            næring.opphørsdato && næring.opphørsdato !== TIDENES_ENDE ? (
              <DateLabel dateString={næring.opphørsdato} />
            ) : (
              '-'
            )
          }
        />

        <OpplysningsRad
          label={<FormattedMessage id="NæringFraSøknad.VarigEndringFra" />}
          value={
            næring.erVarigEndret && næring.endringsdato ? (
              <DateLabel dateString={næring.endringsdato} />
            ) : (
              <FormattedMessage id="NæringFraSøknad.Nei" />
            )
          }
        />

        <OpplysningsRad
          label={<FormattedMessage id="NæringFraSøknad.Nyoppstartet" />}
          value={
            næring.erNyoppstartet && næring.oppstartsdato ? (
              <DateLabel dateString={næring.oppstartsdato} />
            ) : (
              <FormattedMessage id="NæringFraSøknad.Nei" />
            )
          }
        />

        <OpplysningsRad
          label={<FormattedMessage id="NæringFraSøknad.OppgittAar" />}
          value={<BeløpLabel beløp={næring.oppgittInntekt} kr />}
        />
      </dl>
      <Box paddingBlock="space-4" paddingInline="space-8">
        {næring.begrunnelse && næring.begrunnelse !== '' && (
          <LabeledValue label={<FormattedMessage id="NæringFraSøknad.Begrunnelse" />} value={næring.begrunnelse} />
        )}
      </Box>
    </FaktaBoks>
  );
};

const lagVisningsnavn = ({ orgnr }: Næring, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[orgnr];
  return agOpplysning ? formaterArbeidsgiver(agOpplysning, undefined) : 'Ukjent bedriftsnavn';
};
