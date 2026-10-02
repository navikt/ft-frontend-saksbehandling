import { FormattedMessage } from 'react-intl';

import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen } from '@navikt/ft-utils';

import type { AksjonspunktRefusjon } from '../../types/aksjonspunkt';
import type { RefusjonsAndel } from '../../types/dataTypes';

interface AksjonspunktTekstProps {
  aksjonspunkt: AksjonspunktRefusjon[];
  refusjonsandeler: RefusjonsAndel[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const AksjonspunktTekst = ({
  aksjonspunkt,
  refusjonsandeler,
  arbeidsgiverOpplysningerPerId,
}: AksjonspunktTekstProps) => {
  if (!aksjonspunkt.some(ap => isAksjonspunktOpen(ap) && ap.kode === 'AVKLAR_REFUSJONSKRAV')) {
    return null;
  }

  const arbeidsgivereMedRefusjonsperioderTilAvklaring = refusjonsandeler
    .filter(andel => andel.refusjonsperioder.some(periode => !periode.utfall))
    .map(andel => arbeidsgiverOpplysningerPerId[andel.arbeidsgiverIdent]?.navn || andel.arbeidsgiverIdent);

  if (arbeidsgivereMedRefusjonsperioderTilAvklaring.length === 0) {
    return null;
  }

  return (
    <AksjonspunktHelpTextHTML heading={<FormattedMessage id="FaktaRefusjonIndex.Aksjonspunkt.Tittel" />}>
      <FormattedMessage
        id="FaktaRefusjonIndex.Aksjonspunkt.Body"
        values={{
          arbeidsgivere: new Intl.ListFormat('nb', { style: 'long', type: 'conjunction' }).format(
            arbeidsgivereMedRefusjonsperioderTilAvklaring,
          ),
        }}
      />
    </AksjonspunktHelpTextHTML>
  );
};
