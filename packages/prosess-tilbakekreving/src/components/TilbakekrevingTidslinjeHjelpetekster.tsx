import React from 'react';
import { useIntl } from 'react-intl';

import { LegendBox } from '@navikt/ft-tidslinje';

import ikkeOppfyltUrl from '../images/ikke_oppfylt.svg';
import oppfyltUrl from '../images/oppfylt.svg';
import uavklartUrl from '../images/uavklart.svg';

const TilbakekrevingTidslinjeHjelpetekster = () => {
  const intl = useIntl();
  const legends = [
    {
      src: oppfyltUrl,
      text: intl.formatMessage({ id: 'Timeline.BelopTilbakereves' }),
    },
    {
      src: ikkeOppfyltUrl,
      text: intl.formatMessage({ id: 'Timeline.IngenTilbakekreving' }),
    },
    {
      src: uavklartUrl,
      text: intl.formatMessage({ id: 'Timeline.IkkeAvklartPeriode' }),
    },
  ];
  return <LegendBox legends={legends} />;
};

export default TilbakekrevingTidslinjeHjelpetekster;
