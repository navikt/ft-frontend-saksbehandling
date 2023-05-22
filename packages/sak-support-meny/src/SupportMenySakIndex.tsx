import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import {
  ClockDashedIcon,
  PaperplaneFillIcon,
  FolderFillIcon,
  PersonCheckmarkFillIcon,
  ArrowUndoIcon,
} from '@navikt/aksel-icons';

import TabMeny, { SvgProps } from './components/TabMeny';
import SupportTabs from './supportTabs';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const getIconColor = (isActive: boolean, isDisabled: boolean): string => {
  if (isDisabled) {
    return '#c6c2bf';
  }
  return isActive ? '#0067c5' : '#3e3832';
};

const TABS = {
  [SupportTabs.TIL_BESLUTTER]: {
    getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => (
      <PersonCheckmarkFillIcon {...props} color={getIconColor(isActive, isDisabled)} height={35} width={35} />
    ),
    tooltipTextCode: 'SupportMenySakIndex.Godkjenning',
  },
  [SupportTabs.FRA_BESLUTTER]: {
    getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => (
      <ArrowUndoIcon {...props} color={getIconColor(isActive, isDisabled)} height={35} width={35} />
    ),
    tooltipTextCode: 'SupportMenySakIndex.FraBeslutter',
  },
  [SupportTabs.HISTORIKK]: {
    getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => (
      <ClockDashedIcon {...props} color={getIconColor(isActive, isDisabled)} height={35} width={35} />
    ),
    tooltipTextCode: 'SupportMenySakIndex.Historikk',
  },
  [SupportTabs.MELDINGER]: {
    getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => (
      <PaperplaneFillIcon {...props} color={getIconColor(isActive, isDisabled)} height={35} width={35} />
    ),
    tooltipTextCode: 'SupportMenySakIndex.Melding',
  },
  [SupportTabs.DOKUMENTER]: {
    getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => (
      <FolderFillIcon {...props} color={getIconColor(isActive, isDisabled)} height={35} width={35} />
    ),
    tooltipTextCode: 'SupportMenySakIndex.Dokumenter',
  },
} as Record<
  string,
  { getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => ReactElement; tooltipTextCode: string }
>;

const lagTabs = (tilgjengeligeTabs: string[], valgbareTabs: string[], valgtIndex?: number) =>
  Object.keys(TABS)
    .filter(key => tilgjengeligeTabs.includes(key))
    .map((key, index) => ({
      getSvg: TABS[key].getSvg,
      tooltip: intl.formatMessage({ id: TABS[key].tooltipTextCode }),
      isDisabled: !valgbareTabs.includes(key),
      isActive: index === valgtIndex,
    }));

interface OwnProps {
  tilgjengeligeTabs: string[];
  valgbareTabs: string[];
  valgtIndex?: number;
  onClick: (index: number) => void;
}

const SupportMenySakIndex: FunctionComponent<OwnProps> = ({ tilgjengeligeTabs, valgbareTabs, valgtIndex, onClick }) => {
  const tabs = useMemo(
    () => lagTabs(tilgjengeligeTabs, valgbareTabs, valgtIndex),
    [tilgjengeligeTabs, valgbareTabs, valgtIndex],
  );

  return (
    <RawIntlProvider value={intl}>
      <TabMeny tabs={tabs} onClick={onClick} />
    </RawIntlProvider>
  );
};

export default SupportMenySakIndex;
