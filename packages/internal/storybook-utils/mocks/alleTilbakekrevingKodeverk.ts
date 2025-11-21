export const alleTilbakekrevingKodeverk = {
  SkjermlenkeType: [
    {
      kode: 'FAKTA_OM_FEILUTBETALING',
      navn: 'Fakta om feilutbetaling',
    },
    {
      kode: 'FAKTA_OM_VERGE',
      navn: 'Fakta om verge/fullmektig',
    },
    {
      kode: 'FORELDELSE',
      navn: 'Foreldelse',
    },
    {
      kode: 'TILBAKEKREVING',
      navn: 'Tilbakekreving',
    },
    {
      kode: 'VEDTAK',
      navn: 'Vedtak',
    },
  ],
  VurderÅrsak: [
    {
      kode: 'ANNET',
      navn: 'Annet',
    },
    {
      kode: 'BEGRUNNELSE',
      navn: 'Begrunnelse',
    },
    {
      kode: 'FEIL_FAKTA',
      navn: 'Fakta',
    },
    {
      kode: 'FEIL_REGEL',
      navn: 'Feil regelforståelse',
    },
    {
      kode: 'FEIL_LOV',
      navn: 'Regel-/lovanvendelse',
    },
    {
      kode: 'SAKSFLYT',
      navn: 'Saksflyt',
    },
    {
      kode: 'SKJØNN',
      navn: 'Skjønn',
    },
    {
      kode: 'UTREDNING',
      navn: 'Utredning',
    },
  ],
  BehandlingResultatType: [
    {
      kode: 'DELVIS_TILBAKEBETALING',
      navn: 'Delvis tilbakebetaling',
    },
    {
      kode: 'HENLAGT_FEILOPPRETTET_MED_BREV',
      navn: 'Feilaktig opprettet - med henleggelsesbrev',
    },
    {
      kode: 'HENLAGT_FEILOPPRETTET_UTEN_BREV',
      navn: 'Feilaktig opprettet - uten henleggelsesbrev',
    },
    {
      kode: 'HENLAGT',
      navn: 'Henlagt',
    },
    {
      kode: 'HENLAGT_FEILOPPRETTET',
      navn: 'Henlagt, søknaden er feilopprettet',
    },
    {
      kode: 'IKKE_FASTSATT',
      navn: 'Ikke fastsatt',
    },
    {
      kode: 'INGEN_TILBAKEBETALING',
      navn: 'Ingen tilbakebetaling',
    },
    {
      kode: 'HENLAGT_KRAVGRUNNLAG_NULLSTILT',
      navn: 'Kravgrunnlaget er nullstilt',
    },
    {
      kode: 'FASTSATT',
      navn: 'Resultatet er fastsatt',
    },
    {
      kode: 'HENLAGT_TEKNISK_VEDLIKEHOLD',
      navn: 'Teknisk vedlikehold',
    },
    {
      kode: 'FULL_TILBAKEBETALING',
      navn: 'Tilbakebetaling',
    },
  ],
  AnnenVurdering: [
    {
      kode: 'FORELDET',
      navn: 'Foreldet',
    },
    {
      kode: 'GOD_TRO',
      navn: 'Handlet i god tro',
    },
  ],
  HistorikkAktør: [
    {
      kode: 'ARBEIDSGIVER',
      navn: 'Arbeidsgiver',
    },
    {
      kode: 'BESL',
      navn: 'Beslutter',
    },
    {
      kode: 'SBH',
      navn: 'Saksbehandler',
    },
    {
      kode: 'SOKER',
      navn: 'Søker',
    },
    {
      kode: 'VL',
      navn: 'Vedtaksløsningen',
    },
  ],
  VedtakResultatType: [
    {
      kode: 'DELVIS_TILBAKEBETALING',
      navn: 'Delvis tilbakebetaling',
    },
    {
      kode: 'INGEN_TILBAKEBETALING',
      navn: 'Ingen tilbakebetaling',
    },
    {
      kode: 'FULL_TILBAKEBETALING',
      navn: 'Tilbakebetaling',
    },
  ],
  VergeType: [
    {
      kode: 'ADVOKAT',
      navn: 'Advokat/advokatfullmektig',
    },
    {
      kode: 'ANNEN_F',
      navn: 'Annen fullmektig',
    },
    {
      kode: 'BARN',
      navn: 'Verge for barn under 18 år',
    },
    {
      kode: 'FBARN',
      navn: 'Verge for foreldreløst barn under 18 år',
    },
    {
      kode: 'VOKSEN',
      navn: 'Verge for voksen',
    },
  ],
  SærligGrunn: [
    {
      kode: 'ANNET',
      navn: 'Annet',
    },
    {
      kode: 'GRAD_UAKTSOMHET',
      navn: 'Graden av uaktsomhet hos den kravet retter seg mot',
    },
    {
      kode: 'TID_FRA_UTBETALING',
      navn: 'Hvor lang tid siden utbetalingen fant sted',
    },
    {
      kode: 'HELT_ELLER_DELVIS_NAVS_FEIL',
      navn: 'Om feilen helt eller delvis kan tilskrives Nav',
    },
    {
      kode: 'STOERRELSE_BELOEP',
      navn: 'Størrelsen på feilutbetalt beløp',
    },
  ],
  VilkårResultat: [
    {
      kode: 'FORSTO_BURDE_FORSTAATT',
      navn: 'Ja, mottaker forsto eller burde forstått at utbetalingen skyldtes en feil (første ledd, første punkt)',
    },
    {
      kode: 'FEIL_OPPLYSNINGER',
      navn: 'Ja, mottaker har forårsaket feilutbetalingen ved forsett eller uaktsomt gitt feilaktige opplysninger (første ledd, andre punkt)',
    },
    {
      kode: 'MANGELFULL_OPPLYSNING',
      navn: 'Ja, mottaker har forårsaket feilutbetalingen ved forsett eller uaktsomt gitt mangelfulle opplysninger (første ledd, andre punkt)',
    },
    {
      kode: 'GOD_TRO',
      navn: 'Nei, mottaker har mottatt beløpet i god tro (første ledd)',
    },
  ],
  VidereBehandling: [
    {
      kode: 'TILBAKEKR_OPPDATER',
      navn: 'Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp.',
    },
    {
      kode: 'TILBAKEKR_INNTREKK',
      navn: 'Feilutbetaling hvor inntrekk dekker hele beløpet',
    },
    {
      kode: 'TILBAKEKR_OPPRETT',
      navn: 'Feilutbetaling med tilbakekreving',
    },
    {
      kode: 'TILBAKEKR_IGNORER',
      navn: 'Feilutbetaling, avvent samordning',
    },
  ],
  ForeldelseVurderingType: [
    {
      kode: 'FORELDET',
      navn: 'Perioden er foreldet',
    },
    {
      kode: 'IKKE_FORELDET',
      navn: 'Perioden er ikke foreldet',
    },
    {
      kode: 'TILLEGGSFRIST',
      navn: 'Perioden er ikke foreldet, regel om tilleggsfrist (10 år) benyttes',
    },
    {
      kode: 'IKKE_VURDERT',
      navn: 'Perioden er ikke vurdert',
    },
  ],
  HendelseType: [
    {
      kode: 'FP_ANNET_HENDELSE_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'ES_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'SVP_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'FRISINN_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'PSB_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'PPN_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'OMP_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'OLP_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'ES_FEIL_UTBETALING_TYPE',
      navn: 'Feil i utbetaling',
    },
    {
      kode: 'OKONOMI_FEIL',
      navn: 'Feil i økonomi',
    },
    {
      kode: 'OPPHØR',
      navn: 'Opphør',
    },
    {
      kode: 'ES_RETT_PAA_FORELDREPENGER_TYPE',
      navn: 'Rett på foreldrepenger etter klage',
    },
    {
      kode: 'UTTAK_GENERELT_TYPE',
      navn: '§ 14-10 Generelt om uttak',
    },
    {
      kode: 'UTTAK_UTSETTELSE_TYPE',
      navn: '§ 14-11 Utsettelse av uttak',
    },
    {
      kode: 'UTTAK_KVOTENE_TYPE',
      navn: '§ 14-12 Uttak av kvotene',
    },
    {
      kode: 'VILKAAR_GENERELLE_TYPE',
      navn: '§ 14-13 Generelle vilkår for fars uttak',
    },
    {
      kode: 'KUN_RETT_TYPE',
      navn: '§ 14-14 Kun far/medmor rett',
    },
    {
      kode: 'UTTAK_ALENEOMSORG_TYPE',
      navn: '§ 14-15 Uttak ved aleneomsorg/samlivsbrudd',
    },
    {
      kode: 'UTTAK_GRADERT_TYPE',
      navn: '§ 14-16 Gradert uttak',
    },
    {
      kode: 'ES_FORELDREANSVAR_TYPE',
      navn: '§ 14-17 andre ledd Foreldreansvar ',
    },
    {
      kode: 'ES_FORELDREANSVAR_FAR_TYPE',
      navn: '§ 14-17 fjerde ledd Foreldreansvar far',
    },
    {
      kode: 'ES_ADOPSJONSVILKAARET_TYPE',
      navn: '§ 14-17 første ledd Adopsjonsvilkåret',
    },
    {
      kode: 'ES_FODSELSVILKAARET_TYPE',
      navn: '§ 14-17 første ledd Fødselsvilkåret',
    },
    {
      kode: 'ES_OMSORGSVILKAAR_TYPE',
      navn: '§ 14-17 tredje ledd Omsorgsvilkår ved mors død',
    },
    {
      kode: 'MEDLEMSKAP',
      navn: '§ 14-2 Medlemskap',
    },
    {
      kode: 'ES_MEDLEMSKAP',
      navn: '§ 14-2 Medlemskap',
    },
    {
      kode: 'SVP_OPPTJENING_TYPE',
      navn: '§ 14-4 3. ledd Opptjening/ inntekt',
    },
    {
      kode: 'SVP_BEREGNING_TYPE',
      navn: '§ 14-4 5. ledd Beregning ',
    },
    {
      kode: 'SVP_FAKTA_TYPE',
      navn: '§ 14-4 Fakta om svangerskap',
    },
    {
      kode: 'SVP_UTTAK_TYPE',
      navn: '§ 14-4 Uttak',
    },
    {
      kode: 'SVP_ARBEIDSGIVERS_FORHOLD_TYPE',
      navn: '§ 14-4 første ledd Arbeidsgivers forhold',
    },
    {
      kode: 'OPPTJENING_TYPE',
      navn: '§ 14-6 Opptjening',
    },
    {
      kode: 'BEREGNING_TYPE',
      navn: '§ 14-7 Beregning',
    },
    {
      kode: 'STONADSPERIODEN_TYPE',
      navn: '§ 14-9 Stønadsperioden',
    },
  ],
  HendelseUnderType: [
    {
      kode: 'ES_IKKE_OPPFYLT',
      navn: 'Adopsjonsvilkår er ikke oppfylt',
    },
    {
      kode: 'ANNET_FRITEKST',
      navn: 'Annet - fritekst',
    },
    {
      kode: 'ARBEID_HELTID',
      navn: 'Arbeid heltid',
    },
    {
      kode: 'ES_BARN_IKKE_REGISTRERT',
      navn: 'Barn er ikke registrert',
    },
    {
      kode: 'BARN_INNLAGT',
      navn: 'Barn er innlagt i helseinstitusjon',
    },
    {
      kode: 'ES_BARN_OVER_15',
      navn: 'Barn er over 15 år',
    },
    {
      kode: 'ES_FORELDREANSVAR_BARN_OVER_15',
      navn: 'Barn er over 15 år',
    },
    {
      kode: 'ES_BRUKER_RETT_FORELDREPENGER',
      navn: 'Bruker har likevel rett på foreldrepenger',
    },
    {
      kode: 'SVP_TILRETTELEGGING_DELVIS_MULIG',
      navn: 'Delvis tilrettelegging mulig',
    },
    {
      kode: 'OKONOMI_DOBBELUTBETALING',
      navn: 'Dobbeltutbetaling',
    },
    {
      kode: 'ENDRET_DEKNINGSGRAD',
      navn: 'Endret dekningsgrad',
    },
    {
      kode: 'SVP_ENDRING_PERIODE',
      navn: 'Endring av periode',
    },
    {
      kode: 'ENDRING_GRUNNLAG',
      navn: 'Endring i selve grunnlaget',
    },
    {
      kode: 'SVP_ENDRING_GRUNNLAG',
      navn: 'Endring i selve grunnlaget',
    },
    {
      kode: 'SVP_ENDRING_TERMINDATO',
      navn: 'Endring i termindato',
    },
    {
      kode: 'SVP_ENDRING_PROSENT',
      navn: 'Endring i uttaksprosent/gradering',
    },
    {
      kode: 'ES_FAR_IKKE_OMSORG',
      navn: 'Far har ikke omsorg for barnet',
    },
    {
      kode: 'ES_FAR_IKKE_ALENE',
      navn: 'Far overtar ikke foreldreansvar alene',
    },
    {
      kode: 'ES_FAR_IKKE_INNEN_STONADSPERIODE',
      navn: 'Far overtar ikke innen stønadsperioden',
    },
    {
      kode: 'OKONOMI_FEIL_FERIEPENGER',
      navn: 'Feil feriepengeutbetaling',
    },
    {
      kode: 'FEIL_I_ANTALL_DAGER',
      navn: 'Feil i antall dager',
    },
    {
      kode: 'FEIL_FERIEPENGER_4G',
      navn: 'Feil i feriepenger - under 4 G',
    },
    {
      kode: 'FEIL_FLERBARNSDAGER',
      navn: 'Feil i flerbarnsdager',
    },
    {
      kode: 'ØKONOMI_UTBETALT_FOR_MYE',
      navn: 'Feil i økonomi - utbetalt for mye',
    },
    {
      kode: 'OKONOMI_FEIL_TREKK',
      navn: 'Feil trekk',
    },
    {
      kode: 'SVP_TILRETTELEGGING_FULLT_MULIG',
      navn: 'Full tilrettelegging mulig',
    },
    {
      kode: 'GRADERT_UTTAK',
      navn: 'Gradert uttak',
    },
    {
      kode: 'ES_ANDRE_FORELDRE_DODD',
      navn: 'Har ikke foreldreansvar ved andre forelders død',
    },
    {
      kode: 'IKKE_ALENEOMSORG',
      navn: 'Ikke aleneomsorg',
    },
    {
      kode: 'IKKE_BOSATT',
      navn: 'Ikke bosatt',
    },
    {
      kode: 'ES_IKKE_MINDRE_SAMVAER',
      navn: 'Ikke hatt mindre samvær enn barneloven §43',
    },
    {
      kode: 'SVP_IKKE_HELSEFARLIG',
      navn: 'Ikke helsefarlig for ventet barn',
    },
    {
      kode: 'SVP_IKKE_ARBEID',
      navn: 'Ikke i arbeid siste 4 uker',
    },
    {
      kode: 'IKKE_INNTEKT',
      navn: 'Ikke inntekt 6 av siste 10 måneder',
    },
    {
      kode: 'IKKE_LOVLIG_OPPHOLD',
      navn: 'Ikke lovlig opphold',
    },
    {
      kode: 'IKKE_OMSORG',
      navn: 'Ikke omsorg for barnet',
    },
    {
      kode: 'IKKE_OPPHOLDSRETT_EØS',
      navn: 'Ikke oppholdsrett EØS',
    },
    {
      kode: 'FORELDRES_UTTAK',
      navn: 'Ikke rett til samtidig uttak',
    },
    {
      kode: 'SVP_INNTEKT_IKKE_TAP',
      navn: 'Ikke tap av pensjonsgivende inntekt',
    },
    {
      kode: 'ES_IKKE_TILDELT',
      navn: 'Ikke tildelt foreldreansvar etter barneloven',
    },
    {
      kode: 'IKKE_YRKESAKTIV',
      navn: 'Ikke yrkesaktiv med pensjonsgivende inntekt',
    },
    {
      kode: 'INNTEKT_UNDER',
      navn: 'Inntekt under 1/2 G',
    },
    {
      kode: 'SVP_INNTEKT_UNDER',
      navn: 'Inntekt under 1/2 G',
    },
    {
      kode: 'LOVBESTEMT_FERIE',
      navn: 'Lovbestemt ferie',
    },
    {
      kode: 'STONADSPERIODE_MANGEL',
      navn: 'Manglende stønadsperiode',
    },
    {
      kode: 'ES_MANN_IKKE_ALENE',
      navn: 'Mann adopterer ikke alene',
    },
    {
      kode: 'MOR_IKKE_HELT_AVHENGIG',
      navn: 'Mor er ikke helt avhengig av hjelp til å ta seg av barnet',
    },
    {
      kode: 'MOR_IKKE_ARBEID',
      navn: 'Mor er ikke i arbeid heltid',
    },
    {
      kode: 'MOR_IKKE_ARBEID_OG_STUDER',
      navn: 'Mor er ikke i arbeid og student - heltid',
    },
    {
      kode: 'MOR_IKKE_I_IP',
      navn: 'Mor er ikke i introduksjonsprogram',
    },
    {
      kode: 'MOR_IKKE_I_KP',
      navn: 'Mor er ikke i kvalifiseringsprogram',
    },
    {
      kode: 'MOR_IKKE_INNLAGT',
      navn: 'Mor er ikke innlagt på helseinstitusjon',
    },
    {
      kode: 'MOR_IKKE_STUDERT',
      navn: 'Mor er ikke student på heltid',
    },
    {
      kode: 'MOTTAKER_DØD',
      navn: 'Mottaker er død',
    },
    {
      kode: 'ES_MOTTAKER_FAR_MEDMOR',
      navn: 'Mottaker er far eller medmor',
    },
    {
      kode: 'MOTTAKER_HELT_AVHENGIG',
      navn: 'Mottaker er helt avhengig av hjelp til å ta seg av barnet',
    },
    {
      kode: 'KVO_MOTTAKER_HELT_AVHENGIG',
      navn: 'Mottaker er helt avhengig av hjelp til å ta seg av barnet',
    },
    {
      kode: 'MOTTAKER_I_ARBEID',
      navn: 'Mottaker er i arbeid heltid',
    },
    {
      kode: 'MOTTAKER_IKKE_GRAVID',
      navn: 'Mottaker er ikke lenger gravid',
    },
    {
      kode: 'MOTTAKER_INNLAGT',
      navn: 'Mottaker er innlagt i helseinstitusjon',
    },
    {
      kode: 'KVO_MOTTAKER_INNLAGT',
      navn: 'Mottaker er innlagt i helseinstitusjon',
    },
    {
      kode: 'NY_STONADSPERIODE',
      navn: 'Ny stønadsperiode for nytt barn',
    },
    {
      kode: 'OPPHOR_BARN_DOD',
      navn: 'Opphør barn død',
    },
    {
      kode: 'OPPHOR_MOTTAKER_DOD',
      navn: 'Opphør mottaker død',
    },
    {
      kode: 'REFUSJON_ARBGIVER',
      navn: 'Refusjon til arbeidsgiver',
    },
    {
      kode: 'KVO_SAMTIDIG_UTTAK',
      navn: 'Samtidig uttak',
    },
    {
      kode: 'ES_STEBARN',
      navn: 'Stebarnsadopsjon',
    },
    {
      kode: 'ES_STONAD_FLERE_GANGER',
      navn: 'Stønad er gitt for samme barn flere ganger',
    },
    {
      kode: 'ES_STONADEN_ALLEREDE_UTBETALT',
      navn: 'Stønaden allerede utbetalt til mor',
    },
    {
      kode: 'STONADSPERIODE_OVER_3',
      navn: 'Stønadsperioden er over 3 år',
    },
    {
      kode: 'SVP_TIDLIG_FODSEL',
      navn: 'Tidlig fødsel',
    },
    {
      kode: 'MEDLEM_I_ANNET_LAND',
      navn: 'Unntak medlemskap/medlem annet land',
    },
    {
      kode: 'OKONOMI_UTBETALT',
      navn: 'Utbetalt for mye',
    },
    {
      kode: 'UTVANDRET',
      navn: 'Utvandret',
    },
  ],
  BehandlingType: [
    {
      kode: 'BT-007',
      navn: 'Tilbakekreving',
    },
    {
      kode: 'BT-009',
      navn: 'Tilbakekreving revurdering',
    },
  ],
  Venteårsak: [
    {
      kode: 'AVV_DOK',
      navn: 'Avventer dokumentasjon',
    },
    {
      kode: 'ENDRE_TILKJENT_YTELSE',
      navn: 'Mulig endring i tilkjent ytelse',
    },
    {
      kode: 'VENT_PÅ_MULIG_MOTREGNING',
      navn: 'Mulig motregning med annen ytelse',
    },
    {
      kode: 'UTV_TIL_FRIST',
      navn: 'Utvidet tilsvarsfrist',
    },
    {
      kode: 'VENT_PÅ_TILBAKEKREVINGSGRUNNLAG',
      navn: 'Venter på tilbakekrevingsgrunnlag fra økonomi',
    },
    {
      kode: 'VENT_PÅ_BRUKERTILBAKEMELDING',
      navn: 'Venter på tilbakemelding fra bruker',
    },
  ],
  Aktsomhet: [
    {
      kode: 'FORSETT',
      navn: 'Forsett',
    },
    {
      kode: 'GROVT_UAKTSOM',
      navn: 'Grov uaktsomhet',
    },
    {
      kode: 'SIMPEL_UAKTSOM',
      navn: 'Simpel uaktsomhet',
    },
  ],
  BehandlingÅrsakType: [
    {
      kode: 'RE_FEILUTBETALT_BELØP_REDUSERT',
      navn: 'Feilutbetalt beløp helt eller delvis bortfalt',
    },
    {
      kode: 'RE_FORELDELSE',
      navn: 'Nye opplysninger om foreldelse',
    },
    {
      kode: 'RE_VILKÅR',
      navn: 'Nye opplysninger om vilkårsvurdering',
    },
    {
      kode: 'RE_KLAGE_NFP',
      navn: 'Revurdering NFP omgjør vedtak basert på klage',
    },
    {
      kode: 'RE_KLAGE_KA',
      navn: 'Revurdering etter KA-behandlet klage',
    },
    {
      kode: 'FATTET_AV_ANNEN_INSTANS',
      navn: 'Vedtak fattet av annen instans',
    },
  ],
};
