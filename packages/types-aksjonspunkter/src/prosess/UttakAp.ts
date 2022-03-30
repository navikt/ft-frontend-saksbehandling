import { AksjonspunktCode } from '@navikt/ft-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type UttakAp = {
  perioder: {
    fom: string;
    tom: string;
    aktiviteter: {
      stønadskontoType?: string;
      trekkdagerDesimaler?: number;
      arbeidsgiver?: {
        identifikator?: string;
        aktørId?: string;
      };
      arbeidsgiverReferanse?: string;
      arbeidsforholdId?: string;
      utbetalingsgrad?: string | number;
      uttakArbeidType?: string;
    }[];
    begrunnelse?: string;
    periodeResultatType: string;
    periodeResultatÅrsak: string;
    oppholdÅrsak: string;
    flerbarnsdager?: boolean;
    samtidigUttak?: boolean;
    samtidigUttaksprosent?: number;
    graderingInnvilget?: boolean;
    graderingAvslagÅrsak: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.FASTSETT_UTTAKPERIODER
 | AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER
 | AksjonspunktCode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE
 | AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN
 | AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_DØD
 | AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST
 | AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET
 | AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT>;

export default UttakAp;
