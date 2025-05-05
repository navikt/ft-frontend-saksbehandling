import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, HStack, Label, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr, TIDENES_ENDE } from '@navikt/ft-utils';

import { finnOppgittInntektForAndelIPeriode, FrisinnAndel, FrisinnGrunnlag } from './FrisinnUtils';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

const lagPeriodeHeader = (fom: string, originalTom: string) => {
  let tom = null;
  if (originalTom !== TIDENES_ENDE) {
    tom = originalTom;
  }
  return (
    <FormattedMessage
      id="Beregningsgrunnlag.BeregningTable.Periode"
      key={`fom-tom${fom}${tom}`}
      values={{
        fom: dayjs(fom).format(DDMMYYYY_DATE_FORMAT),
        tom: tom ? dayjs(tom).format(DDMMYYYY_DATE_FORMAT) : '',
      }}
    />
  );
};

const statuserDetErSøktOmIPerioden = (
  bgPeriode: BeregningsgrunnlagPeriodeProp,
  ytelsegrunnlag: FrisinnGrunnlag,
): FrisinnAndel[] => {
  const fom = bgPeriode.beregningsgrunnlagPeriodeFom;
  const tom = bgPeriode.beregningsgrunnlagPeriodeTom;
  const perioder = ytelsegrunnlag.frisinnPerioder;
  const gjeldendePeriode =
    Array.isArray(perioder) &&
    perioder.find(periode => !dayjs(fom).isBefore(periode.fom) && !dayjs(tom).isAfter(periode.tom));
  return gjeldendePeriode ? gjeldendePeriode.frisinnAndeler : [];
};

const BeskrivelseMedBeløpRad = ({ tekstId, beløp }: { tekstId: string; beløp: number }) => (
  <HStack gap="2">
    <BodyShort className={beregningStyles.tabellAktivitet}>
      <FormattedMessage id={tekstId} />
    </BodyShort>
    <BodyShort size="small" className={beregningStyles.tabellInntekt}>
      <BeløpLabel beløp={beløp} />
    </BodyShort>
  </HStack>
);

const lagRedusertBGRad = (
  tekstIdRedusert: string,
  beløpÅRedusere: number,
  tekstIdLøpende: string,
  løpendeBeløp: number,
  gjeldendeDekningsgrad: number,
) => {
  const multiplikator = gjeldendeDekningsgrad / 100;
  const redusert = beløpÅRedusere * multiplikator;
  return (
    <>
      <HStack gap="2">
        <BodyShort className={beregningStyles.tabellAktivitet}>
          <FormattedMessage id={tekstIdRedusert} values={{ grad: gjeldendeDekningsgrad }} />
        </BodyShort>
        <BodyShort size="small" className={beregningStyles.tabellInntekt}>
          {formatCurrencyNoKr(redusert)}
        </BodyShort>
      </HStack>
      {!!løpendeBeløp ||
        (løpendeBeløp === 0 && (
          <HStack gap="2">
            <BodyShort className={beregningStyles.tabellAktivitet}>
              <FormattedMessage id={tekstIdLøpende} />
            </BodyShort>
            <BodyShort size="small" className={beregningStyles.tabellInntekt}>
              {formatCurrencyNoKr(løpendeBeløp)}
            </BodyShort>
          </HStack>
        ))}
    </>
  );
};

const erBeløpSatt = (beløp: number | null) => beløp || beløp === 0;

const finnDekningsgrad = (bgPeriodeFom: string) => {
  const fomDato = dayjs(bgPeriodeFom);
  if (fomDato.isBefore(dayjs('2020-11-01', 'YYYY-MM-DD'))) {
    return 80;
  }
  return fomDato.isBefore(dayjs('2022-01-01', 'YYYY-MM-DD')) ? 60 : 70;
};

const lagPeriodeblokk = (
  bgperiode: BeregningsgrunnlagPeriodeProp,
  ytelsegrunnlag: FrisinnGrunnlag,
  frilansGrunnlag: number,
  næringGrunnlag: number,
) => {
  const andelerDetErSøktOm = statuserDetErSøktOmIPerioden(bgperiode, ytelsegrunnlag);
  if (!andelerDetErSøktOm || andelerDetErSøktOm.length < 1) {
    return null;
  }
  const beregningsgrunnlagFL = andelerDetErSøktOm.some(p => p.statusSøktFor === AktivitetStatus.FRILANSER)
    ? frilansGrunnlag
    : null;
  const beregningsgrunnlagSN = andelerDetErSøktOm.some(
    p => p.statusSøktFor === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  )
    ? næringGrunnlag
    : null;

  const løpendeInntektFL = finnOppgittInntektForAndelIPeriode(AktivitetStatus.FRILANSER, bgperiode, ytelsegrunnlag);
  const løpendeInntektSN = finnOppgittInntektForAndelIPeriode(
    AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    bgperiode,
    ytelsegrunnlag,
  );
  const gjeldendeDekningsgrad = finnDekningsgrad(bgperiode.beregningsgrunnlagPeriodeFom);
  return (
    <>
      {erBeløpSatt(beregningsgrunnlagFL) && (
        <BeskrivelseMedBeløpRad
          tekstId="Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL"
          beløp={beregningsgrunnlagFL || 0}
        />
      )}
      {erBeløpSatt(beregningsgrunnlagFL) &&
        lagRedusertBGRad(
          'Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL',
          beregningsgrunnlagFL || 0,
          'Beregningsgrunnlag.Søknad.LøpendeFL',
          løpendeInntektFL,
          gjeldendeDekningsgrad,
        )}
      {erBeløpSatt(beregningsgrunnlagSN) && (
        <BeskrivelseMedBeløpRad
          tekstId="Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN"
          beløp={beregningsgrunnlagSN || 0}
        />
      )}
      {erBeløpSatt(beregningsgrunnlagSN) &&
        lagRedusertBGRad(
          'Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN',
          beregningsgrunnlagSN || 0,
          'Beregningsgrunnlag.Søknad.LøpendeSN',
          løpendeInntektSN,
          gjeldendeDekningsgrad,
        )}
      <div className={beregningStyles.colDevider} />
      <HStack gap="2">
        <Detail className={beregningStyles.tabellAktivitet}>
          <FormattedMessage id="Beregningsgrunnlag.Resultat.Dagsats" />
        </Detail>
        <BodyShort size="small" className={beregningStyles.tabellInntekt}>
          {formatCurrencyNoKr(bgperiode.dagsats)}
        </BodyShort>
      </HStack>
    </>
  );
};

type Props = {
  bgperiode: BeregningsgrunnlagPeriodeProp;
  ytelsegrunnlag: FrisinnGrunnlag;
  frilansGrunnlag: number;
  næringGrunnlag: number;
};

export const BeregningsresultatPeriode = ({ bgperiode, ytelsegrunnlag, frilansGrunnlag, næringGrunnlag }: Props) => {
  const statuserDetErSøktOm = statuserDetErSøktOmIPerioden(bgperiode, ytelsegrunnlag);
  if (!statuserDetErSøktOm || statuserDetErSøktOm.length < 1) {
    return null;
  }
  const visningFrilans = frilansGrunnlag >= 0 ? frilansGrunnlag : 0;
  const visningNæring = næringGrunnlag >= 0 ? næringGrunnlag : 0;
  return (
    <VStack gap="2">
      <Label size="small">
        {lagPeriodeHeader(bgperiode.beregningsgrunnlagPeriodeFom, bgperiode.beregningsgrunnlagPeriodeTom)}
      </Label>
      {lagPeriodeblokk(bgperiode, ytelsegrunnlag, visningFrilans, visningNæring)}
    </VStack>
  );
};
