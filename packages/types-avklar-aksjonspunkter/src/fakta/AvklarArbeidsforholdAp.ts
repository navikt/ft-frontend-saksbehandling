import AksjonspunktKode from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type ArbeidsforholdPermisjon = Readonly<{
  permisjonFom?: string;
  permisjonTom?: string;
  permisjonsprosent?: number;
  type?: string;
}>

type AvklarArbeidsforholdAp = {
  arbeidsforhold: {
    id?: string;
    arbeidsgiverReferanse: string;
    arbeidsforholdId?: string;
    fomDato?: string;
    tomDato?: string;
    mottattDatoInntektsmelding?: string;
    stillingsprosent?: number;
    brukArbeidsforholdet?: boolean;
    fortsettBehandlingUtenInntektsmelding?: boolean;
    erNyttArbeidsforhold?: boolean;
    erstatterArbeidsforholdId?: string;
    overstyrtTom?: string;
    lagtTilAvSaksbehandler?: boolean;
    basertPaInntektsmelding?: boolean;
    inntektMedTilBeregningsgrunnlag?: boolean;
    begrunnelse?: string;
    permisjoner?: ArbeidsforholdPermisjon[];
    brukPermisjon?: boolean;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_ARBEIDSFORHOLD>

export default AvklarArbeidsforholdAp;
