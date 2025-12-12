import { HStack, Tag } from '@navikt/ds-react';

import type { AktivitetStatus, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';

interface Props {
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  kodeverkSamling: KodeverkForPanel;
}

export const AktivitetStatusTags = ({ beregningsgrunnlagPeriode, kodeverkSamling }: Props) => {
  const tagsList = getStatusList(beregningsgrunnlagPeriode, kodeverkSamling);

  if (tagsList.length === 0) {
    return null;
  }
  return (
    <HStack gap="space-8">
      {tagsList.map(({ visningsNavn, kode, tagType }) => (
        <Tag key={kode} variant={tagType} title={visningsNavn}>
          {visningsNavn}
        </Tag>
      ))}
    </HStack>
  );
};

const finnTagType = (status: AktivitetStatus): React.ComponentProps<typeof Tag>['variant'] => {
  switch (status) {
    case 'FL_SN':
    case 'SN':
      return 'alt2';
    case 'FL':
      return 'alt1';
    case 'AT_SN':
    case 'AT_FL':
    case 'AT_FL_SN':
    case 'AT':
      return 'info';
    case 'KUN_YTELSE':
    case 'DP':
    case 'TY':
    case 'SP_AV_DP':
    case 'AAP':
    case 'PSB_AV_DP':
    case 'VENTELØNN_VARTPENGER':
      return 'success';
    case 'MIDL_INAKTIV':
    case 'MS':
    case 'BA':
    case 'IKKE_YRKESAKTIV':
    default:
      return 'neutral';
  }
};

const getStatusList = (
  beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[],
  kodeverkSamling: KodeverkForPanel,
) => {
  const statusAndeler = beregningsgrunnlagPerioder[0]?.beregningsgrunnlagPrStatusOgAndel || [];

  const aktivitetStatuser = statusAndeler
    .filter(statusAndel => statusAndel.erTilkommetAndel !== true)
    .map(statusAndel => statusAndel.aktivitetStatus);
  const unikeStatuser = [...new Set(aktivitetStatuser)];

  return unikeStatuser
    .map(aktivitetStatus => {
      const visningsNavn = kodeverkSamling['AktivitetStatus'].find(({ kode }) => kode === aktivitetStatus)?.navn || '';
      return { visningsNavn, kode: aktivitetStatus, tagType: finnTagType(aktivitetStatus) };
    })
    .sort((a, b) => a.visningsNavn.localeCompare(b.visningsNavn));
};
