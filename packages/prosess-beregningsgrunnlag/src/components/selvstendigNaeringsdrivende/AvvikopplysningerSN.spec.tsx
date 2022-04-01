import React from 'react';
import { FormattedMessage } from 'react-intl';

import { shallowWithIntl } from '@navikt/ft-utils-test';
import { aktivitetStatus } from '@navikt/ft-kodeverk';
import { FlexRow } from '@navikt/ft-ui-komponenter';
import { BeregningsgrunnlagAndel, SammenligningsgrunlagProp } from '@navikt/ft-types';

import AvviksopplysningerSN from './AvvikopplysningerSN';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import messages from '../../../i18n/nb_NO.json';

const sammenligningsgrunnlag = (kode: string): SammenligningsgrunlagProp => ({
  sammenligningsgrunnlagFom: '2018-09-01',
  sammenligningsgrunnlagTom: '2019-10-31',
  rapportertPrAar: 330000,
  avvikPromille: 275,
  avvikProsent: 27.5,
  sammenligningsgrunnlagType: kode,
  differanseBeregnet: 12100,
});
const andel = {
  pgiSnitt: 100,
  aktivitetStatus: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  næringer: [
    {
      erVarigEndret: false,
      erNyoppstartet: false,
    },
  ],
  erNyIArbeidslivet: false,
};

describe('<AvvikopplysningerSN>', () => {
  it('Skal teste komponenten ved erNyArbLivet', () => {
    andel.erNyIArbeidslivet = true;
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag('SAMMENLIGNING_SN') as SammenligningsgrunlagProp;
    const wrapper = shallowWithIntl(<AvviksopplysningerSN
      sammenligningsgrunnlagPrStatus={[sammenligningsgrunnlagPrStatus]}
      alleAndelerIForstePeriode={[andel as BeregningsgrunnlagAndel]}
      relevanteStatuser={{ isKombinasjonsstatus: false } as RelevanteStatuserProp}
    />, messages);
    const rows = wrapper.find(FlexRow);
    expect(rows).toHaveLength(1);
    const omregnetAarsinntektText = rows.first().find(FormattedMessage);
    expect(omregnetAarsinntektText.first().prop('id')).toEqual('Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet');
  });
  it('Skal teste komponenten ved !erVarigEndring && !erNyoppstartet', () => {
    andel.erNyIArbeidslivet = false;
    andel.næringer[0].erVarigEndret = false;
    andel.næringer[0].erNyoppstartet = false;
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag('SAMMENLIGNING_SN') as SammenligningsgrunlagProp;
    const wrapper = shallowWithIntl(<AvviksopplysningerSN
      sammenligningsgrunnlagPrStatus={[sammenligningsgrunnlagPrStatus]}
      alleAndelerIForstePeriode={[andel as BeregningsgrunnlagAndel]}
      relevanteStatuser={{ isKombinasjonsstatus: false } as RelevanteStatuserProp}
    />, messages);
    const rows = wrapper.find(FlexRow);
    expect(rows).toHaveLength(1);
    const omregnetAarsinntektText = rows.first().find(FormattedMessage);
    expect(omregnetAarsinntektText.first().prop('id')).toEqual('Beregningsgrunnlag.Avviksopplysninger.SN.IkkeVarigEndring');
  });
  it('Skal teste at komponenten render avvikstabell', () => {
    andel.erNyIArbeidslivet = false;
    andel.næringer[0].erVarigEndret = true;
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag('SAMMENLIGNING_SN') as SammenligningsgrunlagProp;
    const wrapper = shallowWithIntl(<AvviksopplysningerSN
      sammenligningsgrunnlagPrStatus={[sammenligningsgrunnlagPrStatus]}
      alleAndelerIForstePeriode={[andel as BeregningsgrunnlagAndel]}
      relevanteStatuser={{ isKombinasjonsstatus: false } as RelevanteStatuserProp}
    />, messages);
    const avviksTabell = wrapper.find('AvvikopplysningerATFLSN');
    expect(avviksTabell).toHaveLength(1);
  });
});
