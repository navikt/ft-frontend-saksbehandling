import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';
import { AktivitetStatus, Inntektskategori, OpptjeningAktivitetType, PeriodeAarsak } from '@navikt/ft-kodeverk';
import {
  ArbeidsforholdTilFordeling,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
  FaktaOmFordeling,
  FordelBeregningsgrunnlagAndel,
  FordelBeregningsgrunnlagPeriode,
} from '@navikt/ft-types';

import { FaktaFordelBeregningAvklaringsbehovCode } from '..';
import { beregningsgrunnlag as bgArbeidOgGradertNæring } from '../testdata/ArbeidOgGradertNaring';
import { beregningsgrunnlag as bgFlerePerioderMedForlengelse } from '../testdata/FlerePerioderMedForlengelse';
import { beregningsgrunnlag as bgFlerePerioderMedHelg } from '../testdata/FlerePerioderMedHelg';
import { beregningsgrunnlag as bgMedNaturalytelse } from '../testdata/NyttArbeidOgNaturalytelse';
import { bgRettKodeverk as prodFeilBG } from '../testdata/RefusjonOgTilkommetInntekt';
import { beregningsgrunnlag as bgTilkommetInntektsforholdMedForlengelse } from '../testdata/TilkommetAktivitetMedForlengelse';
import { beregningsgrunnlag as bgTilkommetInntektsforholdMedForlengelseLukketAP } from '../testdata/TilkommetAktivitetMedForlengelseLukketAP';
import { beregningsgrunnlag as bgTilkommetInntektsforholdMedRevurdering } from '../testdata/TilkommetAktivitetRevurderingLøstTidligere';
import { beregningsgrunnlag as bgTilkommetInntektsforholdMedRevurdering1MaiSplitt } from '../testdata/TilkommetAktivitetRevurderingLøstTidligere1MaiKryss';
import { beregningsgrunnlag as bgTilkommetAktivitetTrePerioderHelgMellom } from '../testdata/TilkommetAktivitetTrePerioderHelgMellom';
import {
  bgMedDelvisRefusjon as vurderDelvisRefBG,
  bgUtenDelvisRefusjon as vurderRefusjonBG,
} from '../testdata/VurderRefusjon';
import { FordelBeregningsgrunnlagFaktaIndex } from './FordelBeregningsgrunnlagFaktaIndex';
import { FordelBeregningsgrunnlagAP } from './types/interface/FordelBeregningsgrunnlagAP';
import { VurderNyttInntektsforholdAP } from './types/interface/VurderNyttInntektsforholdAP';
import { VurderRefusjonBeregningsgrunnlagAP } from './types/interface/VurderRefusjonBeregningsgrunnlagAP';
import { KodeverkFpSakForPanel } from './types/kodeverkForPanel';
import { Vilkår } from './types/Vilkår';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const agOpplysninger: ArbeidsgiverOpplysningerPerId = {
  874652202: {
    navn: 'Nav Innlandet',
    identifikator: '874652202',
    erPrivatPerson: false,
  },
  123456789: {
    navn: 'Arbeidsgiveren',
    identifikator: '123456789',
    erPrivatPerson: false,
  },
  123456700: {
    navn: 'Arbeidsgiveren',
    identifikator: '123456700',
    erPrivatPerson: false,
  },
  999999997: {
    navn: 'Arbeidsgiveren',
    identifikator: '999999997',
    erPrivatPerson: false,
  },
  974652293: {
    navn: 'Nav Troms og Finnmark',
    identifikator: '974652293',
    erPrivatPerson: false,
  },
  974239965: {
    navn: 'Nav Trøndelag',
    identifikator: '974239965',
    erPrivatPerson: false,
  },
  999999999: {
    navn: 'Nav Gokk',
    identifikator: '999999999',
    erPrivatPerson: false,
  },
  999999998: {
    navn: 'TESTY TEST',
    identifikator: '999999998',
    erPrivatPerson: true,
    fødselsdato: '2000-01-01',
  },
  910909088: {
    navn: 'BEDRIFT A/S',
    identifikator: '910909088',
    erPrivatPerson: false,
  },
};

const fordelAP = [
  {
    definisjon: FaktaFordelBeregningAvklaringsbehovCode.FORDEL_BEREGNINGSGRUNNLAG,
    status: 'OPPR',
    kanLoses: true,
  },
];

const lagVilkår = (perioder: any[]): Vilkår => ({
  vilkarType: 'VK_41',
  overstyrbar: false,
  perioder: perioder.map(p => ({
    periode: { fom: p.fom, tom: p.tom },
    vurderesIBehandlingen: p.vurderesIBehandlingen,
    merknadParametere: {},
    vilkarStatus: 'OPPFYLT',
  })),
});

const meta = {
  component: FordelBeregningsgrunnlagFaktaIndex,
  args: {
    submitCallback: action('button-click', { depth: 20 }) as (
      data: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP | VurderNyttInntektsforholdAP,
    ) => Promise<void>,
    kodeverkSamling: alleKodeverk as KodeverkFpSakForPanel,
    arbeidsgiverOpplysningerPerId: agOpplysninger,
    setFormData: () => undefined,
    submittable: true,
  },
} satisfies Meta<typeof FordelBeregningsgrunnlagFaktaIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

const lagBGAndel = (
  andelsnr: number,
  aktivitetstatuskode: AktivitetStatus,
  beregnet?: number,
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold,
): BeregningsgrunnlagAndel => ({
  aktivitetStatus: aktivitetstatuskode,
  beregningsperiodeFom: '2019-06-01',
  beregningsperiodeTom: '2019-08-31',
  beregnetPrAar: beregnet,
  bruttoPrAar: beregnet,
  andelsnr,
  erTilkommetAndel: false,
  arbeidsforhold,
});

const lagBGPeriode = (
  andelsliste: BeregningsgrunnlagAndel[],
  periodeAarsaker: string[],
  fom: string,
  tom?: string,
): BeregningsgrunnlagPeriodeProp => {
  const sum = andelsliste.reduce((acc, andel) => acc + (andel.beregnetPrAar ? andel.beregnetPrAar : 0), 0);
  return {
    beregningsgrunnlagPeriodeFom: fom,
    beregningsgrunnlagPeriodeTom: tom || '9999-12-31',
    beregnetPrAar: sum,
    bruttoPrAar: sum,
    bruttoInkludertBortfaltNaturalytelsePrAar: sum,
    periodeAarsaker,
    beregningsgrunnlagPrStatusOgAndel: andelsliste,
  };
};

const lagBG = (
  perioder: BeregningsgrunnlagPeriodeProp[],
  faktaOmFordeling: FaktaOmFordeling,
  avklaringsbehov: BeregningAvklaringsbehov[],
  skjæringstidspunkt = '2019-09-16',
): Beregningsgrunnlag =>
  // @ts-expect-error Fiks
  ({
    avklaringsbehov,
    skjaeringstidspunktBeregning: skjæringstidspunkt,
    vilkårsperiodeFom: skjæringstidspunkt,
    aktivitetStatus: [],
    dekningsgrad: null,
    grunnbeløp: null,
    erOverstyrtInntekt: null,
    beregningsgrunnlagPeriode: perioder,
    ledetekstBrutto: 'Brutto beregningsgrunnlag',
    ledetekstAvkortet: 'Avkortet beregningsgrunnlag (6G=599148)',
    ledetekstRedusert: 'Redusert beregningsgrunnlag (100%)',
    halvG: 49929,
    hjemmel: 'F_14_7_8_30',
    faktaOmFordeling,
    årsinntektVisningstall: 360000,
  }) as Beregningsgrunnlag;

const lagFaktaOmFordeling = (
  arbfor: ArbeidsforholdTilFordeling[],
  perioder: FordelBeregningsgrunnlagPeriode[],
): FaktaOmFordeling => ({
  fordelBeregningsgrunnlag: {
    arbeidsforholdTilFordeling: arbfor,
    fordelBeregningsgrunnlagPerioder: perioder,
  },
});

const lagArbforTilFordeling = (
  arbGiverId: string,
  arbId: string,
  refKrav: number,
  refKravFom: string,
): ArbeidsforholdTilFordeling => ({
  arbeidsforholdId: arbId,
  arbeidsforholdType: 'ARBEID',
  arbeidsgiverIdent: arbGiverId,
  eksternArbeidsforholdId: 'ARB001-001',
  opphoersdato: '2020-10-27',
  organisasjonstype: 'VIRKSOMHET',
  perioderMedGraderingEllerRefusjon: [
    {
      erRefusjon: true,
      erGradering: false,
      fom: refKravFom,
    },
  ],
  refusjonPrAar: refKrav,
  startdato: '2019-11-27',
});

const mapIKKode = (bgStatus: string): string => {
  switch (bgStatus) {
    case 'AT':
      return Inntektskategori.ARBEIDSTAKER;
    case 'AAP':
      return Inntektskategori.ARBEIDSAVKLARINGSPENGER;
    case 'FL':
      return Inntektskategori.FRILANSER;
    case 'SN':
      return Inntektskategori.SELVSTENDIG_NÆRINGSDRIVENDE;
    default:
      return Inntektskategori.UDEFINERT;
  }
};

const lagFordelingsandel = (
  andelsnr: number,
  status: string,
  ref: number,
  fordelt?: number,
  arbeidsforhold?: BeregningsgrunnlagArbeidsforhold,
): FordelBeregningsgrunnlagAndel => ({
  aktivitetStatus: status,
  andelsnr,
  arbeidsforholdType: '-',
  arbeidsforhold,
  andelIArbeid: [0],
  fordeltPrAar: fordelt,
  inntektskategori: mapIKKode(status),
  lagtTilAvSaksbehandler: false,
  nyttArbeidsforhold: false,
  refusjonskravFraInntektsmeldingPrAar: ref,
  refusjonskravPrAar: ref,
});

const lagFordelPeriode = (
  fordelAndeler: FordelBeregningsgrunnlagAndel[],
  graderingEllerRef: boolean,
  skalKunneEndreRef: boolean,
  fom: string,
  tom?: string,
): FordelBeregningsgrunnlagPeriode => ({
  fom,
  fordelBeregningsgrunnlagAndeler: fordelAndeler,
  skalRedigereInntekt: graderingEllerRef,
  skalPreutfyllesMedBeregningsgrunnlag: false,
  skalKunneEndreRefusjon: skalKunneEndreRef,
  tom,
});

const lagArbeidsforhold = (
  arbeidsgiverId: string,
  arbeidsforholdId: string,
  refKrav: number,
): BeregningsgrunnlagArbeidsforhold => ({
  arbeidsgiverIdent: arbeidsgiverId,
  startdato: '2018-10-09',
  arbeidsforholdId,
  arbeidsforholdType: OpptjeningAktivitetType.ARBEID,
  refusjonPrAar: refKrav,
  organisasjonstype: 'VIRKSOMHET',
});
export const FlerePerioderMedHelg: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: bgFlerePerioderMedHelg,
    beregningsgrunnlagVilkår: lagVilkår(
      bgFlerePerioderMedHelg.map(bg => ({
        fom: bg.vilkårsperiodeFom,
        tom: '9999-12-31',
        vurderesIBehandlingen: true,
      })),
    ),
  },
};

export const FlerePerioderMedForlengelse: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: bgFlerePerioderMedForlengelse,
    beregningsgrunnlagVilkår: lagVilkår(
      bgFlerePerioderMedForlengelse.map(bg => ({
        fom: bg.vilkårsperiodeFom,
        tom: '9999-12-31',
        vurderesIBehandlingen: true,
      })),
    ),
  },
};

export const ArbeidOgGradertNæringUtenBeregningsgrunnlagAp5046: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: [bgArbeidOgGradertNæring],
    beregningsgrunnlagVilkår: lagVilkår(
      [bgArbeidOgGradertNæring].map(bg => ({
        fom: bg.vilkårsperiodeFom,
        tom: '9999-12-31',
        vurderesIBehandlingen: true,
      })),
    ),
  },
};

export const TilkommetArbeidMedFlyttingAvNaturalytelseAp5046: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: [bgMedNaturalytelse],
    beregningsgrunnlagVilkår: lagVilkår(
      [bgMedNaturalytelse].map(bg => ({
        fom: bg.vilkårsperiodeFom,
        tom: '9999-12-31',
        vurderesIBehandlingen: true,
      })),
    ),
  },
};

export const ViseVurderTilkommetRefusjonskravAp5059: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: [vurderRefusjonBG],
    beregningsgrunnlagVilkår: lagVilkår(
      [vurderRefusjonBG].map(bg => ({
        fom: bg.vilkårsperiodeFom,
        tom: '9999-12-31',
        vurderesIBehandlingen: true,
      })),
    ),
  },
};

export const SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjonAp5059: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: [vurderDelvisRefBG],
    beregningsgrunnlagVilkår: lagVilkår(
      [vurderDelvisRefBG].map(bg => ({
        fom: bg.vilkårsperiodeFom,
        tom: '9999-12-31',
        vurderesIBehandlingen: true,
      })),
    ),
  },
};

const beregningsgrunnlagListeAapOgRefusjonAp5046 = [
  lagBG(
    [
      lagBGPeriode([lagBGAndel(1, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 100000)], [], '2019-08-05', '2019-11-26'),
      lagBGPeriode(
        [
          lagBGAndel(2, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 100000),
          lagBGAndel(
            1,
            AktivitetStatus.ARBEIDSTAKER,
            300000,
            lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
          ),
        ],
        [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
        '2019-11-27',
      ),
    ],
    lagFaktaOmFordeling(
      [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27')],
      [
        lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0, 0)], false, false, '2019-08-05', '2019-11-26'),
        lagFordelPeriode(
          [
            lagFordelingsandel(2, 'AAP', 0, 0),
            lagFordelingsandel(
              1,
              'AT',
              0,
              0,
              lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
            ),
          ],
          true,
          false,
          '2019-11-27',
        ),
      ],
    ),
    fordelAP,
  ),
];

export const AapOgRefusjonAp5046: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: beregningsgrunnlagListeAapOgRefusjonAp5046,
    beregningsgrunnlagVilkår: lagVilkår(
      beregningsgrunnlagListeAapOgRefusjonAp5046.map(bg => ({
        fom: bg.vilkårsperiodeFom,
        tom: '9999-12-31',
        vurderesIBehandlingen: true,
      })),
    ),
  },
};

const beregningsgrunnlagListeFordelingKanEndreRefusjonskravAp5046 = [
  lagBG(
    [
      lagBGPeriode([lagBGAndel(1, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 100000)], [], '2019-08-05', '2019-11-26'),
      lagBGPeriode(
        [
          lagBGAndel(2, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 100000),
          lagBGAndel(
            1,
            AktivitetStatus.ARBEIDSTAKER,
            300000,
            lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
          ),
        ],
        [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
        '2019-11-27',
      ),
    ],
    lagFaktaOmFordeling(
      [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27')],
      [
        lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0, 0)], false, false, '2019-08-05', '2019-11-26'),
        lagFordelPeriode(
          [
            lagFordelingsandel(2, 'AAP', 0, 0),
            lagFordelingsandel(
              1,
              'AT',
              300000,
              0,
              lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
            ),
          ],
          true,
          true,
          '2019-11-27',
        ),
      ],
    ),
    fordelAP,
  ),
];

export const FordelingKanEndreRefusjonskravAp5046: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: beregningsgrunnlagListeFordelingKanEndreRefusjonskravAp5046,
    beregningsgrunnlagVilkår: lagVilkår(
      beregningsgrunnlagListeFordelingKanEndreRefusjonskravAp5046.map(bg => ({
        fom: bg.vilkårsperiodeFom,
        tom: '9999-12-31',
        vurderesIBehandlingen: true,
      })),
    ),
  },
};

const beregningsgrunnlagListeSkalSlåSammenNaturalytelseperioderAp5046 = [
  lagBG(
    [
      lagBGPeriode(
        [
          lagBGAndel(
            1,
            AktivitetStatus.ARBEIDSTAKER,
            100000,
            lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000),
          ),
        ],
        [],
        '2019-08-05',
        '2019-11-26',
      ),
      lagBGPeriode(
        [
          lagBGAndel(
            1,
            AktivitetStatus.ARBEIDSTAKER,
            100000,
            lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000),
          ),
        ],
        [PeriodeAarsak.NATURALYTELSE_BORTFALT],
        '2019-11-27',
        '2019-12-05',
      ),
      lagBGPeriode(
        [
          lagBGAndel(
            1,
            AktivitetStatus.ARBEIDSTAKER,
            100000,
            lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000),
          ),
          lagBGAndel(
            2,
            AktivitetStatus.ARBEIDSTAKER,
            300000,
            lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
          ),
        ],
        [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
        '2019-12-06',
      ),
    ],
    lagFaktaOmFordeling(
      [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-12-06')],
      [
        lagFordelPeriode(
          [
            lagFordelingsandel(
              1,
              'AT',
              0,
              0,
              lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000),
            ),
          ],
          false,
          false,
          '2019-08-05',
          '2019-11-26',
        ),
        lagFordelPeriode(
          [
            lagFordelingsandel(
              1,
              'AT',
              0,
              0,
              lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000),
            ),
          ],
          false,
          false,
          '2019-11-27',
          '2019-12-05',
        ),
        lagFordelPeriode(
          [
            lagFordelingsandel(
              1,
              'AT',
              0,
              0,
              lagArbeidsforhold('874652202', 'AD-ASD-ADF-SADGF-ASGASDF-ÅTYIUOH', 500000),
            ),
            lagFordelingsandel(
              2,
              'AT',
              300000,
              0,
              lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
            ),
          ],
          true,
          true,
          '2019-12-06',
        ),
      ],
    ),
    fordelAP,
  ),
];

export const SkalSlåSammenNaturalytelseperioderAp5046: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: beregningsgrunnlagListeSkalSlåSammenNaturalytelseperioderAp5046,
    beregningsgrunnlagVilkår: lagVilkår(
      beregningsgrunnlagListeSkalSlåSammenNaturalytelseperioderAp5046.map(bg => ({
        fom: bg.vilkårsperiodeFom,
        tom: '9999-12-31',
        vurderesIBehandlingen: true,
      })),
    ),
  },
};

const beregningsgrunnlagListeFordelingFlereBeregningsgrunnlagKanEndreRefusjonskravAp5046 = [
  lagBG(
    [
      lagBGPeriode([lagBGAndel(1, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 100000)], [], '2019-08-05', '2019-11-26'),
      lagBGPeriode(
        [
          lagBGAndel(2, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 100000),
          lagBGAndel(
            1,
            AktivitetStatus.ARBEIDSTAKER,
            300000,
            lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
          ),
        ],
        [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
        '2019-11-27',
      ),
    ],
    lagFaktaOmFordeling(
      [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27')],
      [
        lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0, 0)], false, false, '2019-08-05', '2019-11-26'),
        lagFordelPeriode(
          [
            lagFordelingsandel(2, 'AAP', 0, 0),
            lagFordelingsandel(
              1,
              'AT',
              300000,
              0,
              lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
            ),
          ],
          true,
          true,
          '2019-11-27',
        ),
      ],
    ),
    fordelAP,
    '2019-08-05',
  ),
  lagBG(
    [
      lagBGPeriode(
        [
          lagBGAndel(2, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 100000),
          lagBGAndel(
            1,
            AktivitetStatus.ARBEIDSTAKER,
            300000,
            lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
          ),
        ],
        [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
        '2020-01-01',
        '9999-12-31',
      ),
    ],
    lagFaktaOmFordeling(
      [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2020-01-27')],
      [
        lagFordelPeriode(
          [
            lagFordelingsandel(2, 'AAP', 0, 0),
            lagFordelingsandel(
              1,
              'AT',
              300000,
              0,
              lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
            ),
          ],
          true,
          true,
          '2020-01-01',
          '9999-12-31',
        ),
      ],
    ),
    fordelAP,
    '2020-01-01',
  ),
];

export const FordelingFlereBeregningsgrunnlagKanEndreRefusjonskravAp5046: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: beregningsgrunnlagListeFordelingFlereBeregningsgrunnlagKanEndreRefusjonskravAp5046,
    beregningsgrunnlagVilkår: lagVilkår(
      beregningsgrunnlagListeFordelingFlereBeregningsgrunnlagKanEndreRefusjonskravAp5046.map(bg => ({
        fom: bg.vilkårsperiodeFom,
        tom: '9999-12-31',
        vurderesIBehandlingen: true,
      })),
    ),
  },
};

export const AapOgRefusjonFlereBeregningsgrunnlagMedKunEnTilVurderingAp5046: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: [
      lagBG(
        [
          lagBGPeriode(
            [lagBGAndel(1, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 300000)],
            [],
            '2019-08-05',
            '2019-11-26',
          ),
          lagBGPeriode(
            [
              lagBGAndel(2, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 300000),
              lagBGAndel(
                1,
                AktivitetStatus.ARBEIDSTAKER,
                undefined,
                lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
              ),
            ],
            [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
            '2019-11-27',
          ),
        ],
        lagFaktaOmFordeling(
          [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2019-11-27')],
          [
            lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0)], false, false, '2019-08-05', '2019-11-26'),
            lagFordelPeriode(
              [
                lagFordelingsandel(2, 'AAP', 0, 100000),
                lagFordelingsandel(
                  1,
                  'AT',
                  300000,
                  200000,
                  lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
                ),
              ],
              true,
              false,
              '2019-11-27',
            ),
          ],
        ),
        [
          {
            definisjon: FaktaFordelBeregningAvklaringsbehovCode.FORDEL_BEREGNINGSGRUNNLAG,
            status: 'UTFO',
            kanLoses: true,
            begrunnelse: 'En god begrunnelse.',
          },
        ],
        '2019-08-05',
      ),
      lagBG(
        [
          lagBGPeriode(
            [lagBGAndel(1, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 300000)],
            [],
            '2020-01-01',
            '2020-01-26',
          ),
          lagBGPeriode(
            [
              lagBGAndel(2, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, 300000),
              lagBGAndel(
                1,
                AktivitetStatus.ARBEIDSTAKER,
                undefined,
                lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
              ),
            ],
            [PeriodeAarsak.ENDRING_I_REFUSJONSKRAV],
            '2020-01-27',
          ),
        ],
        lagFaktaOmFordeling(
          [lagArbforTilFordeling('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000, '2020-01-27')],
          [
            lagFordelPeriode([lagFordelingsandel(1, 'AAP', 0, 0)], false, false, '2020-01-01', '2020-01-26'),
            lagFordelPeriode(
              [
                lagFordelingsandel(2, 'AAP', 0, 0),
                lagFordelingsandel(
                  1,
                  'AT',
                  300000,
                  0,
                  lagArbeidsforhold('999999999', 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF', 300000),
                ),
              ],
              true,
              false,
              '2020-01-27',
            ),
          ],
        ),
        fordelAP,
        '2020-01-01',
      ),
    ],
    beregningsgrunnlagVilkår: lagVilkår([
      {
        fom: '2019-08-05',
        tom: '2019-10-05',
        vurderesIBehandlingen: false,
      },
      {
        fom: '2020-01-01',
        tom: '2020-02-05',
        vurderesIBehandlingen: true,
      },
    ]),
  },
};

export const TilkommetAktivitet: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: [
      {
        avklaringsbehov: [
          {
            definisjon: 'VURDER_NYTT_INNTKTSFRHLD',
            status: 'OPPR',
            kanLoses: true,
          },
        ],
        skjaeringstidspunktBeregning: '2022-11-08',
        aktivitetStatus: ['MIDL_INAKTIV'],
        beregningsgrunnlagPeriode: [
          {
            beregningsgrunnlagPeriodeFom: '2022-11-08',
            beregningsgrunnlagPeriodeTom: '2022-11-08',
            beregnetPrAar: 0,
            bruttoPrAar: 480000,
            bruttoInkludertBortfaltNaturalytelsePrAar: 480000,
            periodeAarsaker: [],
            beregningsgrunnlagPrStatusOgAndel: [
              {
                aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
                andelsnr: 2,
                inntektskategori: '-',
                arbeidsforhold: {
                  arbeidsgiverIdent: '999999997',
                  startdato: '2022-10-27',
                  arbeidsforholdType: OpptjeningAktivitetType.ARBEID,
                  belopFraInntektsmeldingPrMnd: 40000,
                },
                lagtTilAvSaksbehandler: false,
                erTilkommetAndel: true,
                skalFastsetteGrunnlag: false,
              },
              {
                aktivitetStatus: AktivitetStatus.BRUKERS_ANDEL,
                beregningsperiodeFom: '2018-01-01',
                beregningsperiodeTom: '2020-12-31',
                beregnetPrAar: 0,
                overstyrtPrAar: 480000,
                bruttoPrAar: 480000,
                andelsnr: 1,
                inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
                lagtTilAvSaksbehandler: false,
                erTilkommetAndel: false,
                skalFastsetteGrunnlag: true,
                pgiSnitt: 0,
                pgiVerdier: [
                  {
                    beløp: 0,
                    årstall: 2020,
                  },
                  {
                    beløp: 0,
                    årstall: 2019,
                  },
                  {
                    beløp: 0,
                    årstall: 2018,
                  },
                ],
                næringer: [],
              },
            ],
          },
          {
            beregningsgrunnlagPeriodeFom: '2022-11-09',
            beregningsgrunnlagPeriodeTom: '9999-12-31',
            beregnetPrAar: 0,
            bruttoPrAar: 480000,
            bruttoInkludertBortfaltNaturalytelsePrAar: 480000,
            periodeAarsaker: ['ENDRING_I_AKTIVITETER_SØKT_FOR'],
            beregningsgrunnlagPrStatusOgAndel: [
              {
                aktivitetStatus: AktivitetStatus.BRUKERS_ANDEL,
                beregningsperiodeFom: '2018-01-01',
                beregningsperiodeTom: '2020-12-31',
                beregnetPrAar: 0,
                overstyrtPrAar: 480000,
                bruttoPrAar: 480000,
                andelsnr: 1,
                inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
                lagtTilAvSaksbehandler: false,
                erTilkommetAndel: false,
                skalFastsetteGrunnlag: true,
                pgiSnitt: 0,
                pgiVerdier: [
                  {
                    beløp: 0,
                    årstall: 2020,
                  },
                  {
                    beløp: 0,
                    årstall: 2019,
                  },
                  {
                    beløp: 0,
                    årstall: 2018,
                  },
                ],
                næringer: [],
              },
            ],
          },
        ],
        sammenligningsgrunnlagPrStatus: [
          {
            sammenligningsgrunnlagFom: '2022-11-08',
            sammenligningsgrunnlagTom: '2022-12-07',
            rapportertPrAar: 480000,
            avvikPromille: 1000,
            avvikProsent: 100,
            sammenligningsgrunnlagType: 'SAMMENLIGNING_MIDL_INAKTIV',
            differanseBeregnet: -480000,
          },
        ],
        grunnbeløp: 111477,
        faktaOmBeregning: {
          saksopplysninger: {
            lønnsendringSaksopplysning: [],
            kortvarigeArbeidsforhold: [],
          },
          avklarAktiviteter: {
            aktiviteterTomDatoMapping: [
              {
                tom: '2022-11-08',
                aktiviteter: [
                  {
                    arbeidsgiverIdent: '999999997',
                    fom: '2022-10-27',
                    tom: '9999-12-31',
                    arbeidsforholdType: 'ARBEID',
                  },
                ],
              },
            ],
            skjæringstidspunkt: '2022-11-08',
          },
          andelerForFaktaOmBeregning: [
            {
              fastsattBelop: 0,
              inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
              aktivitetStatus: 'BA',
              andelsnr: 1,
              skalKunneEndreAktivitet: false,
              lagtTilAvSaksbehandler: false,
            },
          ],
        },
        faktaOmFordeling: {
          vurderNyttInntektsforholdDto: {
            harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: true,
            vurderInntektsforholdPerioder: [
              {
                fom: '2022-11-09',
                tom: '9999-12-31',
                inntektsforholdListe: [
                  {
                    aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
                    arbeidsgiverId: '999999997',
                    bruttoInntektPrÅr: 480000,
                    inntektFraInntektsmeldingPrÅr: 480000,
                    arbeidsforholdId: '123',
                    skalRedusereUtbetaling: false,
                  },
                ],
              },
            ],
          },
          fordelBeregningsgrunnlag: {
            fordelBeregningsgrunnlagPerioder: [
              {
                fom: '2022-11-08',
                tom: '2022-11-08',
                fordelBeregningsgrunnlagAndeler: [
                  {
                    andelsnr: 1,
                    inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
                    aktivitetStatus: 'BA',
                    kilde: 'PROSESS_START',
                    lagtTilAvSaksbehandler: false,
                    andelIArbeid: [100],
                    refusjonskravPrAar: 0,
                    nyttArbeidsforhold: false,
                    arbeidsforholdType: '-',
                  },
                  {
                    andelsnr: 2,
                    arbeidsforhold: {
                      arbeidsgiverIdent: '999999997',
                      startdato: '2022-10-27',
                      arbeidsforholdType: OpptjeningAktivitetType.ARBEID,
                    },
                    inntektskategori: '-',
                    aktivitetStatus: 'AT',
                    kilde: 'PROSESS_PERIODISERING',
                    lagtTilAvSaksbehandler: false,
                    andelIArbeid: [0],
                    refusjonskravPrAar: 0,
                    belopFraInntektsmeldingPrAar: 480000,
                    nyttArbeidsforhold: true,
                    arbeidsforholdType: 'ARBEID',
                  },
                ],
                skalRedigereInntekt: true,
                skalPreutfyllesMedBeregningsgrunnlag: false,
                skalKunneEndreRefusjon: false,
              },
              {
                fom: '2022-11-09',
                tom: '9999-12-31',
                fordelBeregningsgrunnlagAndeler: [
                  {
                    andelsnr: 1,
                    inntektskategori: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
                    aktivitetStatus: 'BA',
                    kilde: 'PROSESS_START',
                    lagtTilAvSaksbehandler: false,
                    andelIArbeid: [100],
                    refusjonskravPrAar: 0,
                    nyttArbeidsforhold: false,
                    arbeidsforholdType: '-',
                  },
                ],
                skalRedigereInntekt: false,
                skalPreutfyllesMedBeregningsgrunnlag: false,
                skalKunneEndreRefusjon: false,
              },
            ],
            arbeidsforholdTilFordeling: [
              {
                arbeidsgiverIdent: '999999997',
                startdato: '2022-10-27',
                arbeidsforholdType: 'ARBEID',
                perioderMedGraderingEllerRefusjon: [
                  {
                    erRefusjon: false,
                    erGradering: false,
                    erSøktYtelse: true,
                    fom: '2022-11-08',
                    tom: '2022-11-08',
                  },
                ],
              },
            ],
          },
        },
        dekningsgrad: 100,
        ytelsesspesifiktGrunnlag: {
          ytelsetype: 'OMP',
        },
        erOverstyrtInntekt: false,
        vilkårsperiodeFom: '2022-11-08',
      },
    ],
    beregningsgrunnlagVilkår: lagVilkår([
      {
        fom: '2022-11-08',
        tom: '2022-11-08',
        vurderesIBehandlingen: true,
      },
    ]),
  },
};

export const TilkommetAktivitetMedForlengelse: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: bgTilkommetInntektsforholdMedForlengelse,
    beregningsgrunnlagVilkår: lagVilkår([
      {
        fom: '2022-11-08',
        tom: '2022-11-20',
        vurderesIBehandlingen: true,
        erForlengelse: true,
      },
    ]),
  },
};

export const TilkommetAktivitetMedForlengelseLukketAP: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: bgTilkommetInntektsforholdMedForlengelseLukketAP,
    beregningsgrunnlagVilkår: lagVilkår([
      {
        fom: '2022-11-08',
        tom: '2022-11-20',
        vurderesIBehandlingen: true,
        erForlengelse: true,
      },
    ]),
  },
};

export const TilkommetAktivitetMedRevurdering: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: bgTilkommetInntektsforholdMedRevurdering,
    submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
    beregningsgrunnlagVilkår: lagVilkår([
      {
        fom: '2022-11-08',
        tom: '2022-11-20',
        vurderesIBehandlingen: true,
        erForlengelse: false,
      },
    ]),
  },
};

export const TilkommetAktivitetMedRevurdering1MaiKryss: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: bgTilkommetInntektsforholdMedRevurdering1MaiSplitt,
    submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
    beregningsgrunnlagVilkår: lagVilkår([
      {
        fom: '2023-04-25',
        tom: '2023-05-20',
        vurderesIBehandlingen: true,
        erForlengelse: false,
      },
    ]),
  },
};

export const TilkommetAktiviteTreLikePerioderHelgMellomAlle: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: bgTilkommetAktivitetTrePerioderHelgMellom,
    submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
    beregningsgrunnlagVilkår: lagVilkår([
      {
        fom: '2023-04-10',
        tom: '2023-04-28',
        vurderesIBehandlingen: true,
        erForlengelse: false,
      },
    ]),
  },
};

export const VurderRefusjonOgTilkommetInntekt: Story = {
  args: {
    readOnly: false,
    beregningsgrunnlagListe: prodFeilBG,
    submitCallback: action('button-click', { depth: 20 }) as (data: any) => Promise<any>,
    beregningsgrunnlagVilkår: lagVilkår([
      {
        fom: '2022-03-07',
        tom: '2022-05-01',
        vurderesIBehandlingen: true,
        erForlengelse: false,
      },
      {
        fom: '2023-06-22',
        tom: '2023-12-31',
        vurderesIBehandlingen: true,
        erForlengelse: false,
      },
    ]),
  },
};
