import { useIntl } from 'react-intl';

import { HStack, Tag } from '@navikt/ds-react';

import type { AktivitetStatus, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';

import type { KodeverkForPanel } from '../types/KodeverkForPanel';

import styles from './aktivitetStatusTags.module.css';

interface Props {
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  kodeverkSamling: KodeverkForPanel;
}

export const AktivitetStatusTags = ({ beregningsgrunnlagPeriode, kodeverkSamling }: Props) => {
  const intl = useIntl();
  const tagsList = getStatusList(beregningsgrunnlagPeriode, kodeverkSamling);

  if (tagsList.length === 0) {
    return null;
  }
  return (
    <HStack
      as="ul"
      className={styles.tagList}
      gap="space-8"
      aria-label={intl.formatMessage({ id: 'AktivitetStatusTags.AriaLabel' })}
    >
      {tagsList.map(({ visningsNavn, kode, tagType }) => (
        <li key={kode}>
          <Tag size="small" variant={tagType}>
            {visningsNavn}
          </Tag>
        </li>
      ))}
    </HStack>
  );
};

const finnTagType = (status: AktivitetStatus): React.ComponentProps<typeof Tag>['variant'] => {
  switch (status) {
    case 'SN':
      return 'alt2';
    case 'FL':
      return 'alt1';
    case 'AT':
      return 'info';
    case 'KUN_YTELSE':
    case 'DP':
    case 'SP_AV_DP':
    case 'AAP':
    case 'PSB_AV_DP':
      return 'success';
    default:
      return 'neutral';
  }
};

const getStatusList = (
  beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[],
  kodeverkSamling: KodeverkForPanel,
) => {
  const aktivitetStatuser = beregningsgrunnlagPerioder
    .flatMap(periode => periode.beregningsgrunnlagPrStatusOgAndel || [])
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
