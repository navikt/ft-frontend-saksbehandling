import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';
import { AktivitetStatus, Inntektskategori, OpptjeningAktivitetType, PeriodeÅrsak } from '@navikt/ft-kodeverk';
import type {
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
import { TIDENES_ENDE } from '@navikt/ft-utils';

import { FaktaFordelBeregningAvklaringsbehovCode } from '..';
import { beregningsgrunnlag as bgArbeidOgGradertNæring } from '../testdata/ArbeidOgGradertNaring';
import { beregningsgrunnlag as bgFlerePerioderMedForlengelse } from '../testdata/FlerePerioderMedForlengelse';
import { beregningsgrunnlag as bgFlerePerioderMedHelg } from '../testdata/FlerePerioderMedHelg';
import { beregningsgrunnlag as bgMedNaturalytelse } from '../testdata/NyttArbeidOgNaturalytelse';
import {
  bgMedDelvisRefusjon as vurderDelvisRefBG,
  bgUtenDelvisRefusjon as vurderRefusjonBG,
} from '../testdata/VurderRefusjon';
import { FordelBeregningsgrunnlagFaktaIndex } from './FordelBeregningsgrunnlagFaktaIndex';
import type { AksjonspunktSubmitType } from './types/AksjonspunktSubmitType';
import type { KodeverkForPanel } from './types/kodeverkForPanel';
import type { Vilkår } from './types/Vilkår';

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
    submitCallback: action('submit') as (data: AksjonspunktSubmitType) => Promise<void>,
    kodeverkSamling: alleKodeverk as KodeverkForPanel,
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
    beregningsgrunnlagPeriodeTom: tom || TIDENES_ENDE,
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
        tom: TIDENES_ENDE,
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
        tom: TIDENES_ENDE,
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
        tom: TIDENES_ENDE,
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
        tom: TIDENES_ENDE,
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
        tom: TIDENES_ENDE,
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
        tom: TIDENES_ENDE,
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
        [PeriodeÅrsak.ENDRING_I_REFUSJONSKRAV],
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
        tom: TIDENES_ENDE,
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
        [PeriodeÅrsak.ENDRING_I_REFUSJONSKRAV],
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
        tom: TIDENES_ENDE,
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
        [PeriodeÅrsak.NATURALYTELSE_BORTFALT],
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
        [PeriodeÅrsak.ENDRING_I_REFUSJONSKRAV],
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
        tom: TIDENES_ENDE,
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
        [PeriodeÅrsak.ENDRING_I_REFUSJONSKRAV],
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
        [PeriodeÅrsak.ENDRING_I_REFUSJONSKRAV],
        '2020-01-01',
        TIDENES_ENDE,
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
          TIDENES_ENDE,
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
        tom: TIDENES_ENDE,
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
            [PeriodeÅrsak.ENDRING_I_REFUSJONSKRAV],
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
            [PeriodeÅrsak.ENDRING_I_REFUSJONSKRAV],
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
