import React, { useState } from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import DekoratorMedFeilviserSakIndex from './DekoratorMedFeilviserSakIndex';
import Feilmelding from './typer/feilmeldingTsType';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';

export default {
  title: 'sak/sak-dekoratør',
  component: DekoratorMedFeilviserSakIndex,
};

const Template: Story<{
  feilmeldinger?: Feilmelding[];
}> = ({ feilmeldinger = [] }) => {
  const [errorMessages, removeErrorMessages] = useState(feilmeldinger);
  return (
    <div style={{ marginLeft: '-56px' }}>
      <DekoratorMedFeilviserSakIndex
        tittel="Svangerskap, fødsel og adopsjon"
        tittelLenke="/fpsak"
        navAnsattNavn="Espen Utvikler"
        fjernFeilmeldinger={() => removeErrorMessages([])}
        setSiteHeight={() => undefined}
        feilmeldinger={errorMessages}
        systemrutineUrl="url"
      />
    </div>
  );
};

export const UtenFeilmeldinger = Template.bind({});

export const MedFeilmeldinger = Template.bind({});
MedFeilmeldinger.args = {
  feilmeldinger: [
    {
      melding: 'Feilmelding 1',
    },
    {
      melding: 'Spesialtegn-test: Høna &amp; egget og &#34;test1&#34; og &#39;test2&#39;',
    },
  ],
};

export const MedFeilmeldingDetaljer = Template.bind({});
MedFeilmeldingDetaljer.args = {
  feilmeldinger: [
    {
      melding:
        'Noe feilet. Feilen kan være forbigående. Prøv og behandle saken litt senere. Om feilen oppstår igjen meld den inn via porten.',
      tilleggsInfo: {
        melding: 'test',
        ekstra: 'test2',
      },
    },
  ],
};
