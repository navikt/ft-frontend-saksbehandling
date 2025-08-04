import { type ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, ExpansionCard, Label, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';
import norskFormat from 'dayjs/locale/nb';
import { type CallbackDataParams } from 'echarts/types/dist/shared';
import type { OptionDataValue } from 'echarts/types/src/util/types.js';

import { InntektAktivitetType } from '@navikt/ft-kodeverk';
import type {
  Inntektsgrunnlag,
  InntektsgrunnlagInntekt,
  InntektsgrunnlagMåned,
  SammenligningsgrunlagProp,
} from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { HorizontalBox } from '../../util/HorizontalBox';
import { ReactECharts } from '../echart/ReactECharts';

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
    <VStack gap="space-8">
      <Label size="small">
        <FormattedMessage id="SammenligningsGrunnlaAOrdningen.SumTittel" />
      </Label>
      <div>
        {relevanteStatuser.harArbeidsinntekt && (
          <HorizontalBox borderBottom borderTop>
            <BodyShort size="small">
              <FormattedMessage id="SammenligningsGrunnlaAOrdningen.Arbeid" />
            </BodyShort>
            <BodyShort size="small">
              <BeløpLabel beløp={sumATAndeler} />
            </BodyShort>
          </HorizontalBox>
        )}
        {relevanteStatuser.harFrilansinntekt && (
          <HorizontalBox borderBottom>
            <BodyShort size="small">
              <FormattedMessage id="SammenligningsGrunnlaAOrdningen.Frilans" />
            </BodyShort>
            <BodyShort size="small">
              <BeløpLabel beløp={sumFLAndeler} />
            </BodyShort>
          </HorizontalBox>
        )}
        {relevanteStatuser.harYtelseinntekt && (
          <HorizontalBox borderBottom>
            <BodyShort size="small">
              <FormattedMessage id="SammenligningsGrunnlaAOrdningen.Ytelse" />
            </BodyShort>
            <BodyShort size="small">
              <BeløpLabel beløp={sumYtelseAndeler} />
            </BodyShort>
          </HorizontalBox>
        )}
      </div>
    </VStack>
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

const ReadMoreOverskrift = (): ReactElement => (
  <ExpansionCard.Header>
    <ExpansionCard.Title size="small">
      <FormattedMessage id="SammenligningsGrunnlaAOrdningen.Tittel" />
    </ExpansionCard.Title>
    <ExpansionCard.Description>
      <FormattedMessage id="SammenligningsGrunnlaAOrdningen.Ingress" />
    </ExpansionCard.Description>
  </ExpansionCard.Header>
);

type Inntektstyper = {
  harFrilansinntekt: boolean;
  harArbeidsinntekt: boolean;
  harYtelseinntekt: boolean;
};

const finnesInntektAvType = (måneder: InntektsgrunnlagMåned[], status: string): boolean =>
  måneder.flatMap(p => p.inntekter).some(innt => innt.inntektAktivitetType === status);

const utledRelevanteStatuser = (måneder: InntektsgrunnlagMåned[]): Inntektstyper => ({
  harFrilansinntekt: finnesInntektAvType(måneder, InntektAktivitetType.FRILANS),
  harArbeidsinntekt: finnesInntektAvType(måneder, InntektAktivitetType.ARBEID),
  harYtelseinntekt: finnesInntektAvType(måneder, InntektAktivitetType.YTELSE),
});

type Props = {
  sammenligningsGrunnlagInntekter: Inntektsgrunnlag;
  sammenligningsgrunnlag: SammenligningsgrunlagProp[];
};

export const SammenligningsgrunnlagAOrdningen = ({
  sammenligningsGrunnlagInntekter,
  sammenligningsgrunnlag,
}: Props) => {
  const intl = useIntl();
  const måneder = sammenligningsGrunnlagInntekter?.sammenligningsgrunnlagInntekter || [];
  const relevanteStatuser = utledRelevanteStatuser(måneder);
  const sgFom =
    sammenligningsgrunnlag && sammenligningsgrunnlag.length > 0
      ? sammenligningsgrunnlag[0].sammenligningsgrunnlagFom
      : undefined;
  const dataForArbeid =
    relevanteStatuser.harArbeidsinntekt && sgFom ? finnDataForIAT(måneder, sgFom, InntektAktivitetType.ARBEID) : [];
  const dataForFrilans =
    relevanteStatuser.harFrilansinntekt && sgFom ? finnDataForIAT(måneder, sgFom, InntektAktivitetType.FRILANS) : [];
  const dataForYtelse =
    relevanteStatuser.harYtelseinntekt && sgFom ? finnDataForIAT(måneder, sgFom, InntektAktivitetType.YTELSE) : [];
  const barFormatter = (params: any) => {
    if (params.value[0] > 5000) {
      return formatCurrencyNoKr(params.value[0]) || '';
    }
    return params.value[0] === 0 ? '' : '..';
  };
  if (!måneder || måneder.length === 0 || !sammenligningsgrunnlag || sammenligningsgrunnlag.length < 1) {
    return null;
  }
  const arbeidTekst = intl.formatMessage({ id: 'SammenligningsGrunnlaAOrdningen.Arbeid' });
  const frilansTekst = intl.formatMessage({ id: 'SammenligningsGrunnlaAOrdningen.Frilans' });
  const ytelseTekst = intl.formatMessage({ id: 'SammenligningsGrunnlaAOrdningen.Ytelse' });

  return (
    <VStack gap="space-40">
      <ExpansionCard
        defaultOpen
        size="small"
        aria-label={intl.formatMessage({ id: 'SammenligningsGrunnlaAOrdningen.Tittel' })}
      >
        <ReadMoreOverskrift />
        <ExpansionCard.Content>
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
        </ExpansionCard.Content>
      </ExpansionCard>
      {lagSumRad(måneder, relevanteStatuser)}
    </VStack>
  );
};
