import React, { FunctionComponent, ReactElement } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';

import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { VilkarUtfallType } from '@navikt/ft-kodeverk';
import { Image, VerticalSpacer } from '@navikt/ft-ui-komponenter';
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

const lagSpesialRaderRad = (
  visningsObjekt: BruttoRadType | AvkortetRadType | RedusertRadType,
  radNøkkel: string,
): ReactElement | null => {
  if (!visningsObjekt || !visningsObjekt.verdi || visningsObjekt.display === false) {
    return null;
  }
  return (
    <Row key={`SpesialRad_${radNøkkel}_${visningsObjekt.verdi}`}>
      <Column xs="10">
        <Normaltekst>{visningsObjekt.ledetekst}</Normaltekst>
      </Column>
      <Column xs="2" className={beregningStyles.rightAlignElementNoWrap}>
        <Normaltekst>{formatCurrencyNoKr(visningsObjekt.verdi)}</Normaltekst>
      </Column>
    </Row>
  );
};

const lagDagsatsRad = (dagsatsRad: DagsatsRadType, ikkeVurdert: boolean): ReactElement | null => {
  if (!dagsatsRad.grunnlag) {
    return null;
  }
  return (
    <React.Fragment key="beregningOppsummeringWrapper">
      <Row key="DagsatsSeparator">
        <Column xs="12">
          <div className={beregningStyles.colDevider} />
        </Column>
      </Row>
      <Row key="beregningOppsummering">
        <Column xs="9" key="beregningOppsummeringLedetekst">
          <Normaltekst>
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
              {ikkeVurdert && <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Dagsats.ikkeFastsatt" />}
            </span>
          </Normaltekst>
        </Column>
        <Column xs="3" className={beregningStyles.rightAlignElement}>
          <Normaltekst className={beregningStyles.semiBoldText}>
            {dagsatsRad.verdi || dagsatsRad.verdi === '0' ? dagsatsRad.verdi : '-'}
          </Normaltekst>
        </Column>
      </Row>
    </React.Fragment>
  );
};

const lineRad = (key: string): ReactElement => (
  <Row key={key || 'separator'}>
    <Column xs="12">
      <div className={beregningStyles.colDevider} />
    </Column>
  </Row>
);

const lagForklaringer = (forklaringsListe: ReactElement[]): ReactElement[] =>
  forklaringsListe.map((forklaring, index) => (
    <React.Fragment key={`Forklaring${index + 1}`}>
      <Row>
        <Column xs="12">
          <Normaltekst>{forklaring}</Normaltekst>
        </Column>
      </Row>
      <VerticalSpacer twentyPx />
    </React.Fragment>
  ));

const lagAndelerRader = (listofAndeler: BeregningsresultatAndelElementType[], ikkeVurdert: boolean): ReactElement[] =>
  listofAndeler.map((entry, index) => (
    <Row key={`indeAx${index + 1}`}>
      <Column xs={ikkeVurdert ? '9' : '10'} key={`indexAl2${index + 1}`}>
        <Normaltekst>{entry.ledetekst ? entry.ledetekst : '-'}</Normaltekst>
      </Column>
      {!ikkeVurdert && (
        <Column xs="2" key={`indexAt2${index + 2}`} className={beregningStyles.rightAlignElementNoWrap}>
          <Normaltekst>{formatCurrencyNoKr(entry.verdi)}</Normaltekst>
        </Column>
      )}
      {ikkeVurdert && entry.skalFastsetteGrunnlag && (
        <Column xs="3" key={`indexAf2${index + 2}`} className={styles.maaFastsettes}>
          <Normaltekst className={beregningStyles.redError}>
            <FormattedMessage id="Beregningsgrunnlag.BeregningTable.MåFastsettes" />
          </Normaltekst>
        </Column>
      )}
      {ikkeVurdert && !entry.skalFastsetteGrunnlag && (
        <Column xs="3" key={`indexAf2${index + 2}`} className={beregningStyles.rightAlignElementNoWrap}>
          <Normaltekst>{formatCurrencyNoKr(entry.verdi)}</Normaltekst>
        </Column>
      )}
    </Row>
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
      rows.push(lineRad('andelLinje'));
      const bruttoRadKomponent = lagSpesialRaderRad(bruttoRad, 'brutto');
      if (bruttoRadKomponent) {
        rows.push(bruttoRadKomponent);
      }
    }
    const avkortetRadKomponent = lagSpesialRaderRad(avkortetRad, 'avkortet');
    if (avkortetRadKomponent) {
      rows.push(avkortetRadKomponent);
    }
    const redusertRadKomponent = lagSpesialRaderRad(redusertRad, 'redusert');
    if (redusertRadKomponent) {
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
    <Normaltekst className={beregningStyles.redError}>
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
          b: chunks => <b>{chunks}</b>,
        }}
      />
    </Normaltekst>
  </React.Fragment>
);

const lagPeriodeOverskrift = (header: ReactElement[], periodeIndex: number): ReactElement => (
  <>
    {periodeIndex > 0 && <VerticalSpacer twentyPx />}
    <Normaltekst className={beregningStyles.semiBoldText}>{header}</Normaltekst>
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
    <Panel className={beregningStyles.panelRight}>
      <Element className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Tittel" />
      </Element>
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
    </Panel>
  );
};
export default BeregningsresutatPanel;
