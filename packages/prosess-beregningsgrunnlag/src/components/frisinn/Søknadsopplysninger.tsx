import React, { FunctionComponent } from 'react';
import { Label, BodyShort } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

import { Beregningsgrunnlag } from '@navikt/ft-types';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FrisinnGrunnlag, FrisinnPeriode } from './FrisinnUtils';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

const lagPerioderadMedTekst = (tekstId: string, fom: string, tom: string) => (
  <FlexRow>
    <FlexColumn>
      <BodyShort size="small">
        <FormattedMessage
          id={tekstId}
          values={{
            fom: dayjs(fom).format(DDMMYYYY_DATE_FORMAT),
            tom: dayjs(tom).format(DDMMYYYY_DATE_FORMAT),
          }}
        />
      </BodyShort>
    </FlexColumn>
  </FlexRow>
);

const lagSøktYtelseRadPeriode = (periode: FrisinnPeriode) => {
  const snAndel = periode.frisinnAndeler.find(
    andel => andel.statusSøktFor === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  const flAndel = periode.frisinnAndeler.find(andel => andel.statusSøktFor === AktivitetStatus.FRILANSER);
  return (
    <div key={periode.fom}>
      {flAndel && lagPerioderadMedTekst('Beregningsgrunnlag.Søknad.SøktYtelseFL', periode.fom, periode.tom)}
      {snAndel && lagPerioderadMedTekst('Beregningsgrunnlag.Søknad.SøktYtelseSN', periode.fom, periode.tom)}
    </div>
  );
};
//
type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
};
const Søknadsopplysninger: FunctionComponent<OwnProps> = ({ beregningsgrunnlag }) => {
  const ytelsegrunnlag = beregningsgrunnlag.ytelsesspesifiktGrunnlag as FrisinnGrunnlag;
  const { frisinnPerioder } = ytelsegrunnlag;
  return (
    <div>
      <FlexRow>
        <FlexColumn>
          <Label size="small" className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.Søknad.Tittel" />
          </Label>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      {Array.isArray(frisinnPerioder) && frisinnPerioder.map(periode => lagSøktYtelseRadPeriode(periode))}
      <VerticalSpacer sixteenPx />
    </div>
  );
};

export default Søknadsopplysninger;
