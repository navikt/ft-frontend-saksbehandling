import React, { FunctionComponent, ReactElement } from 'react';
import { BodyShort, Label, Heading } from '@navikt/ds-react';

import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { VilkarUtfallType } from '@navikt/ft-kodeverk';
import { FlexColumn, FlexRow, Image, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Vilkarperiode } from '@navikt/ft-types';

import avslaatIkonUrl from '../../images/avslaatt_mini.svg';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import BeregningsresultatPeriodeTabellType, {
  AvkortetRadType,
  BeregningsresultatAndelElementType,
  BruttoRadType,
  DagsatsRadType,
  RedusertRadType,
} from '../../types/BeregningsresultatPeriodeTabellType';

import styles from './beregningsresultatTable.less';
import Ledelinje from '../fellesPaneler/Ledelinje';

const lagSpesialRaderRad = (
  visningsObjekt: BruttoRadType | AvkortetRadType | RedusertRadType,
  radNøkkel: string,
): ReactElement | null => {
  if (!visningsObjekt || !visningsObjekt.verdi || visningsObjekt.display === false) {
    return null;
  }
  return (
    <React.Fragment key={`SpesialRad_${radNøkkel}_${visningsObjekt.verdi}`}>
      <VerticalSpacer fourPx />
      <FlexRow>
        <FlexColumn className={styles.beskrivelse}>
          <BodyShort size="small">{visningsObjekt.ledetekst}</BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.beløp}>
          <BodyShort size="small">{formatCurrencyNoKr(visningsObjekt.verdi)}</BodyShort>
        </FlexColumn>
      </FlexRow>
    </React.Fragment>
  );
};

const lagDagsatsRad = (dagsatsRad: DagsatsRadType, ikkeVurdert: boolean): ReactElement | null => {
  if (!dagsatsRad.grunnlag) {
    return null;
  }
  return (
    <React.Fragment key="beregningOppsummeringWrapper">
      <Ledelinje prosentBredde={65} />
      <FlexRow key="beregningOppsummering">
        <FlexColumn className={styles.beskrivelse} key="beregningOppsummeringLedetekst">
          <Label size="small">
            <span>
              {!ikkeVurdert && (
                <FormattedMessage
                  id="Beregningsgrunnlag.BeregningTable.DagsatsNy"
                  values={{
                    dagSats: dagsatsRad.grunnlag,
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
              )}
              {ikkeVurdert && (
                <Label size="small">
                  <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Dagsats.ikkeFastsatt" />{' '}
                </Label>
              )}
            </span>
          </Label>
        </FlexColumn>
        <FlexColumn className={styles.beløp}>
          <BodyShort size="small" className={beregningStyles.semiBoldText}>
            {dagsatsRad.verdi || dagsatsRad.verdi === '0' ? dagsatsRad.verdi : '-'}
          </BodyShort>
        </FlexColumn>
      </FlexRow>
    </React.Fragment>
  );
};

const lagForklaringer = (forklaringsListe: ReactElement[]): ReactElement[] =>
  forklaringsListe.map((forklaring, index) => (
    <React.Fragment key={`Forklaring${index + 1}`}>
      <FlexRow>
        <FlexColumn>
          <BodyShort size="small">{forklaring}</BodyShort>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer twentyPx />
    </React.Fragment>
  ));

const lagAndelerRader = (listofAndeler: BeregningsresultatAndelElementType[], ikkeVurdert: boolean): ReactElement[] =>
  listofAndeler.map((entry, index) => (
    <React.Fragment key={`indeAx${index + 1}`}>
      <Ledelinje prosentBredde={65} />
      <VerticalSpacer fourPx />
      <FlexRow>
        <FlexColumn className={styles.beskrivelse} key={`indexAl2${index + 1}`}>
          <BodyShort size="small">{entry.ledetekst ? entry.ledetekst : '-'}</BodyShort>
        </FlexColumn>
        {!ikkeVurdert && (
          <FlexColumn key={`indexAt2${index + 2}`} className={styles.beløp}>
            <BodyShort size="small">{formatCurrencyNoKr(entry.verdi)}</BodyShort>
          </FlexColumn>
        )}
        {ikkeVurdert && entry.skalFastsetteGrunnlag && (
          <FlexColumn key={`indexAf2${index + 2}`} className={styles.beløp}>
            <BodyShort size="small" className={beregningStyles.redError}>
              <FormattedMessage id="Beregningsgrunnlag.BeregningTable.MåFastsettes" />
            </BodyShort>
          </FlexColumn>
        )}
        {ikkeVurdert && !entry.skalFastsetteGrunnlag && (
          <FlexColumn key={`indexAf2${index + 2}`} className={styles.beløp}>
            <BodyShort size="small">{formatCurrencyNoKr(entry.verdi)}</BodyShort>
          </FlexColumn>
        )}
      </FlexRow>
    </React.Fragment>
  ));

const lagTabellRader = (periodeData: BeregningsresultatPeriodeTabellType, ikkeVurdert: boolean): ReactElement[] => {
  const { rowsAndeler, avkortetRad, redusertRad, bruttoRad, dagsatser, rowsForklaringer } = periodeData;
  let rows = [] as ReactElement[];
  if (rowsForklaringer && rowsForklaringer.length > 0) {
    rows = rows.concat(lagForklaringer(rowsForklaringer));
  }
  if (rowsAndeler && rowsAndeler.length > 0) {
    rows = rows.concat(lagAndelerRader(rowsAndeler, ikkeVurdert));
  }
  if (!ikkeVurdert) {
    if (rowsAndeler.length > 1) {
      rows.push(<Ledelinje prosentBredde={65} key="ledeBrutto" />);
      const bruttoRadKomponent = lagSpesialRaderRad(bruttoRad, 'brutto');
      if (bruttoRadKomponent) {
        rows.push(bruttoRadKomponent);
      }
    }
    const avkortetRadKomponent = lagSpesialRaderRad(avkortetRad, 'avkortet');
    if (avkortetRadKomponent) {
      rows.push(<Ledelinje prosentBredde={65} key="ledeAvkortet" />);
      rows.push(avkortetRadKomponent);
    }
    const redusertRadKomponent = lagSpesialRaderRad(redusertRad, 'redusert');
    if (redusertRadKomponent) {
      rows.push(<Ledelinje prosentBredde={65} key="ledeRedusert" />);
      rows.push(redusertRadKomponent);
    }
  }
  const dagsatsRadKomponent = lagDagsatsRad(dagsatser, ikkeVurdert);
  if (dagsatsRadKomponent) {
    rows.push(dagsatsRadKomponent);
  }
  return rows as ReactElement[];
};

const lagTabellRaderIkkeOppfylt = (
  listofAndeler: BeregningsresultatAndelElementType[],
  intl: IntlShape,
  grunnbeløp: number,
  key: string,
  ikkeVurdert: boolean,
  erMidlertidigInaktiv: boolean,
): ReactElement => (
  <React.Fragment key={`IVR2${key}`}>
    {lagAndelerRader(listofAndeler, ikkeVurdert)}
    <VerticalSpacer twentyPx />
    <BodyShort size="small" className={beregningStyles.redError}>
      <Image
        className={styles.avslaat_icon}
        alt={intl.formatMessage(
          {
            id: erMidlertidigInaktiv
              ? 'Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv'
              : 'Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2',
          },
          { grunnbeløp: formatCurrencyNoKr(grunnbeløp) },
        )}
        src={avslaatIkonUrl}
      />
      <FormattedMessage
        id={
          erMidlertidigInaktiv
            ? 'Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv'
            : 'Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2'
        }
        values={{
          grunnbeløp: formatCurrencyNoKr(grunnbeløp),
          b: (chunks: any) => <b>{chunks}</b>,
        }}
      />
    </BodyShort>
  </React.Fragment>
);

const lagPeriodeOverskrift = (header: ReactElement[], periodeIndex: number): ReactElement => (
  <>
    {periodeIndex > 0 && <VerticalSpacer twentyPx />}
    <BodyShort size="small" className={beregningStyles.semiBoldText}>
      {header}
    </BodyShort>
  </>
);

const lagKeyForPeriode = (header: ReactElement): string => {
  if (header && header.key) {
    return header.key as string;
  }
  return 'key';
};

const createPeriodeResultat = (
  vilkarPeriode: Vilkarperiode,
  periodeData: BeregningsresultatPeriodeTabellType,
  lagPeriodeHeaders: boolean,
  intl: IntlShape,
  grunnbeløp: number,
  periodeIndex: number,
  erMidlertidigInaktiv: boolean,
): ReactElement => {
  const key = lagKeyForPeriode(periodeData.headers[0]);
  const ikkeOppfylt = vilkarPeriode && vilkarPeriode.vilkarStatus === VilkarUtfallType.IKKE_OPPFYLT;
  const ikkeVurdert = vilkarPeriode && vilkarPeriode.vilkarStatus === VilkarUtfallType.IKKE_VURDERT;
  return (
    <React.Fragment key={`Wr${key}`}>
      {periodeData && lagPeriodeHeaders && lagPeriodeOverskrift(periodeData.headers, periodeIndex)}
      {!ikkeOppfylt && lagTabellRader(periodeData, ikkeVurdert)}
      {ikkeOppfylt &&
        lagTabellRaderIkkeOppfylt(periodeData.rowsAndeler, intl, grunnbeløp, key, ikkeVurdert, erMidlertidigInaktiv)}
    </React.Fragment>
  );
};

type OwnProps = {
  grunnbeløp: number;
  vilkarPeriode: Vilkarperiode;
  periodeResultatTabeller: BeregningsresultatPeriodeTabellType[];
  erMidlertidigInaktiv: boolean;
};
const BeregningsresutatPanel: FunctionComponent<OwnProps> = ({
  vilkarPeriode,
  periodeResultatTabeller,
  grunnbeløp,
  erMidlertidigInaktiv,
}) => {
  const intl = useIntl();
  const skalLagePeriodeHeaders = periodeResultatTabeller.length > 1;
  return (
    <div className={beregningStyles.panelRight}>
      <Heading size="small" className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Tittel" />
      </Heading>
      <VerticalSpacer eightPx />
      {periodeResultatTabeller.map((periodeData, index) =>
        createPeriodeResultat(
          vilkarPeriode,
          periodeData,
          skalLagePeriodeHeaders,
          intl,
          grunnbeløp,
          index,
          erMidlertidigInaktiv,
        ),
      )}
    </div>
  );
};
export default BeregningsresutatPanel;
