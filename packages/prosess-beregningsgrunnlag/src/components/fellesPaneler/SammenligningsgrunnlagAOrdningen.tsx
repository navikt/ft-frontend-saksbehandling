import React, { FunctionComponent, ReactElement, useMemo, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort, ReadMore, Label, Heading } from '@navikt/ds-react';

import { formatCurrencyNoKr, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { VerticalSpacer, FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';

import {
  Inntektsgrunnlag,
  InntektsgrunnlagInntekt,
  InntektsgrunnlagMåned,
  SammenligningsgrunlagProp,
} from '@navikt/ft-types';
import { InntektAktivitetType } from '@navikt/ft-kodeverk';

import dayjs from 'dayjs';
import norskFormat from 'dayjs/locale/nb';

import { CallbackDataParams } from 'echarts/types/dist/shared';
import { OptionDataValue } from 'echarts/types/src/util/types';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import ReactECharts from '../echart/ReactECharts';

import styles from './sammenligningsgrunnlagAOrdningen.less';
import Ledelinje from './Ledelinje';

const GRAF_FARGE_AT = '#99bdcd';
const GRAF_FARGE_FL = '#c1b5d0';
const GRAF_FARGE_YTELSE = '#C6C2BF';

const lagSumRad = (månederMedInntekter: InntektsgrunnlagMåned[], relevanteStatuser: Inntektstyper): ReactElement => {
  const sumATAndeler = månederMedInntekter
    .flatMap(måned => måned.inntekter)
    .filter(innt => innt.inntektAktivitetType === InntektAktivitetType.ARBEID)
    .map(({ beløp }) => beløp)
    .reduce((i1, i2) => i1 + i2, 0);
  const sumFLAndeler = månederMedInntekter
    .flatMap(måned => måned.inntekter)
    .filter(innt => innt.inntektAktivitetType === InntektAktivitetType.FRILANS)
    .map(({ beløp }) => beløp)
    .reduce((i1, i2) => i1 + i2, 0);
  const sumYtelseAndeler = månederMedInntekter
    .flatMap(måned => måned.inntekter)
    .filter(innt => innt.inntektAktivitetType === InntektAktivitetType.YTELSE)
    .map(({ beløp }) => beløp)
    .reduce((i1, i2) => i1 + i2, 0);
  return (
    <>
      <div className={beregningStyles.storSpace} />
      <FlexRow>
        <FlexColumn>
          <Label size="small">
            <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel" />
          </Label>
        </FlexColumn>
      </FlexRow>
      {relevanteStatuser.harArbeidsinntekt && (
        <>
          <FlexRow>
            <FlexColumn className={styles.sammenligningGrafOppsummeringType}>
              <BodyShort size="small">
                <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid" />
              </BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.sammenligningGrafOppsummeringInntekt}>
              <BodyShort size="small">{formatCurrencyNoKr(sumATAndeler)}</BodyShort>
            </FlexColumn>
          </FlexRow>
          <Ledelinje prosentBredde={20} />
        </>
      )}
      {relevanteStatuser.harFrilansinntekt && (
        <>
          <FlexRow>
            <FlexColumn className={styles.sammenligningGrafOppsummeringType}>
              <BodyShort size="small">
                <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans" />
              </BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.sammenligningGrafOppsummeringInntekt}>
              <BodyShort size="small">{formatCurrencyNoKr(sumFLAndeler)}</BodyShort>
            </FlexColumn>
          </FlexRow>
          <Ledelinje prosentBredde={20} />
        </>
      )}
      {relevanteStatuser.harYtelseinntekt && (
        <>
          <FlexRow>
            <FlexColumn className={styles.sammenligningGrafOppsummeringType}>
              <BodyShort size="small">
                <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse" />
              </BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.sammenligningGrafOppsummeringInntekt}>
              <BodyShort size="small">{formatCurrencyNoKr(sumYtelseAndeler)}</BodyShort>
            </FlexColumn>
          </FlexRow>
          <Ledelinje prosentBredde={20} />
        </>
      )}
    </>
  );
};

const finnInntektForStatus = (andeler: InntektsgrunnlagInntekt[], status?: string): number => {
  if (!andeler || andeler.length === 0) {
    return 0;
  }
  if (status) {
    return andeler
      .filter(andel => andel.inntektAktivitetType === status)
      .reduce((acc, atAndel) => acc + atAndel.beløp, 0);
  }
  return andeler.reduce((acc, atAndel) => acc + atAndel.beløp, 0);
};

const finnDataForIAT = (andeler: InntektsgrunnlagMåned[], sammenligningsgrunnlagFom: string, inntektAType?: string) => {
  const data = [];
  for (let step = 0; step < 12; step += 1) {
    const dato = dayjs(sammenligningsgrunnlagFom, ISO_DATE_FORMAT).add(step, 'M');
    const aarMaaned = dato.format('YYYYMM');
    const månedMedInntekter = andeler.find(andel => dayjs(andel.fom, ISO_DATE_FORMAT).format('YYYYMM') === aarMaaned);
    const beløp = finnInntektForStatus(månedMedInntekter?.inntekter || [], inntektAType);
    data.push([beløp, aarMaaned]);
  }
  return data;
};

const lagOverskrift = (): ReactElement => (
  <>
    <FlexRow key="SamenenligningsGrunnlagOverskrift">
      <FlexColumn>
        <Heading size="small" className={beregningStyles.avsnittOverskrift}>
          <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel" />
        </Heading>
      </FlexColumn>
    </FlexRow>
    <VerticalSpacer eightPx />
    <FlexRow>
      <FlexColumn>
        <FormattedMessage id="Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress" />
      </FlexColumn>
    </FlexRow>
  </>
);

const finnesInntektAvType = (måneder: InntektsgrunnlagMåned[], status: string): boolean =>
  måneder.flatMap(p => p.inntekter).some(innt => innt.inntektAktivitetType === status);

type OwnProps = {
  sammenligningsGrunnlagInntekter: Inntektsgrunnlag;
  sammenligningsgrunnlag: SammenligningsgrunlagProp[];
};

type Inntektstyper = {
  harFrilansinntekt: boolean;
  harArbeidsinntekt: boolean;
  harYtelseinntekt: boolean;
};

const SammenligningsgrunnlagAOrdningen: FunctionComponent<OwnProps> = ({
  sammenligningsGrunnlagInntekter,
  sammenligningsgrunnlag,
}) => {
  const intl = useIntl();
  const måneder = sammenligningsGrunnlagInntekter?.måneder;
  if (!måneder || måneder.length === 0 || !sammenligningsgrunnlag || sammenligningsgrunnlag.length < 1) {
    return null;
  }
  const relevanteStatuser = {
    harFrilansinntekt: finnesInntektAvType(måneder, InntektAktivitetType.FRILANS),
    harArbeidsinntekt: finnesInntektAvType(måneder, InntektAktivitetType.ARBEID),
    harYtelseinntekt: finnesInntektAvType(måneder, InntektAktivitetType.YTELSE),
  } as Inntektstyper;

  const arbeidTekst = intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid' });
  const frilansTekst = intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans' });
  const ytelseTekst = intl.formatMessage({ id: 'Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse' });
  const { sammenligningsgrunnlagFom } = sammenligningsgrunnlag[0];
  const dataForArbeid = useMemo(
    () =>
      relevanteStatuser.harArbeidsinntekt
        ? finnDataForIAT(måneder, sammenligningsgrunnlagFom, InntektAktivitetType.ARBEID)
        : [],
    [relevanteStatuser.harArbeidsinntekt, måneder, sammenligningsgrunnlagFom],
  );
  const dataForFrilans = useMemo(
    () =>
      relevanteStatuser.harFrilansinntekt
        ? finnDataForIAT(måneder, sammenligningsgrunnlagFom, InntektAktivitetType.FRILANS)
        : [],
    [relevanteStatuser.harArbeidsinntekt, måneder, sammenligningsgrunnlagFom],
  );
  const dataForYtelse = useMemo(
    () =>
      relevanteStatuser.harYtelseinntekt
        ? finnDataForIAT(måneder, sammenligningsgrunnlagFom, InntektAktivitetType.YTELSE)
        : [],
    [relevanteStatuser.harArbeidsinntekt, måneder, sammenligningsgrunnlagFom],
  );

  const barFormatter = useCallback((params: any) => {
    if (params.value[0] > 5000) {
      return formatCurrencyNoKr(params.value[0]) || '';
    }
    return params.value[0] === 0 ? '' : '..';
  }, []);

  return (
    <>
      <ReadMore size="medium" header={lagOverskrift()} defaultOpen>
        <ReactECharts
          option={{
            tooltip: {
              trigger: 'axis',
              formatter: series => {
                const castedSeries = series as CallbackDataParams[];
                const data = castedSeries[0].data as OptionDataValue[];
                const date = dayjs(data[1]);
                const maanedNavn = date.locale(norskFormat).format('MMM');
                const aar = date.format('YYYY');
                const formattedMaaned = maanedNavn.charAt(0).toUpperCase() + maanedNavn.slice(1);
                const overskrift = `${formattedMaaned} ${aar}`;

                const seriesData = castedSeries
                  .reduce<string[]>((acc, sData) => {
                    const dataCasted = sData.data as OptionDataValue[];
                    return acc.concat(
                      `${(sData.marker || '') + (sData.seriesName || '')}: ${formatCurrencyNoKr(
                        dataCasted[0] as string,
                      )}`,
                    );
                  }, [])
                  .join('<br/>');
                return `${overskrift}<br />${seriesData}`;
              },
              axisPointer: {
                type: 'shadow',
              },
            },
            legend: {
              data: [arbeidTekst, frilansTekst, ytelseTekst],
            },
            grid: {
              left: '1%',
              right: '5%',
              bottom: '0%',
              containLabel: true,
            },
            xAxis: {
              type: 'value',
              axisLabel: {
                formatter: (value: any) => formatCurrencyNoKr(value) || '',
                margin: 12,
              },
            },
            yAxis: {
              type: 'category',
              boundaryGap: false,
              axisLabel: {
                formatter: (value: any) => {
                  const date = dayjs(value);
                  const erIJanuar = date.format('MM') === '01' || date.format('MM') === '12';
                  const maanedNavn = date.locale(norskFormat).format('MMM');
                  const aar = date.format('YYYY');
                  const formattedMaaned = maanedNavn.charAt(0).toUpperCase() + maanedNavn.slice(1, 3);
                  return erIJanuar ? `${formattedMaaned}\n${aar}` : formattedMaaned;
                },
              },
            },
            series: [
              {
                name: arbeidTekst,
                type: 'bar',
                stack: 'total',
                label: {
                  show: true,
                  fontSize: '11',
                  formatter: barFormatter,
                },
                emphasis: {
                  focus: 'series',
                },
                data: dataForArbeid,
              },
              {
                name: frilansTekst,
                type: 'bar',
                stack: 'total',
                label: {
                  show: true,
                  fontSize: '11',
                  formatter: barFormatter,
                },
                emphasis: {
                  focus: 'series',
                },
                data: dataForFrilans,
              },
              {
                name: ytelseTekst,
                type: 'bar',
                stack: 'total',
                label: {
                  show: true,
                  fontSize: '11',
                  formatter: barFormatter,
                },
                emphasis: {
                  focus: 'series',
                },
                data: dataForYtelse,
              },
            ],
            color: [GRAF_FARGE_AT, GRAF_FARGE_FL, GRAF_FARGE_YTELSE],
          }}
          height={350}
        />
      </ReadMore>
      {lagSumRad(måneder, relevanteStatuser)}
    </>
  );
};

export default SammenligningsgrunnlagAOrdningen;
