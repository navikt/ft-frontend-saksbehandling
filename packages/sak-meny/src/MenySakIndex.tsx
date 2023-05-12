import React, { useState, useCallback, FunctionComponent } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { Button } from '@navikt/ds-react';
import { Dropdown } from '@navikt/ds-react-internal';
import { createIntl } from '@navikt/ft-utils';
import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';

import MenyData from './MenyData';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  data: MenyData[];
}

const MenySakIndex: FunctionComponent<OwnProps> = ({ data }) => {
  const filtrertData = data.filter(d => d.erSynlig);

  const [visMenySomApen, setVisMenyTilApen] = useState(false);
  const toggleMenyVisning = useCallback(() => setVisMenyTilApen(!visMenySomApen), [visMenySomApen]);

  const [valgtModal, setValgtModal] = useState(-1);

  return (
    <RawIntlProvider value={intl}>
      <>
        <Dropdown>
          <Button
            size="small"
            as={Dropdown.Toggle}
            icon={visMenySomApen ? <ChevronUpIcon aria-hidden /> : <ChevronDownIcon aria-hidden />}
            iconPosition="right"
          >
            <FormattedMessage id="MenySakIndex.Behandlingsmeny" />
          </Button>
          <Dropdown.Menu>
            <Dropdown.Menu.List>
              {filtrertData.map((d, index) => (
                <Dropdown.Menu.List.Item
                  onClick={() => {
                    setValgtModal(index);
                    toggleMenyVisning();
                  }}
                >
                  {d.tekst}
                </Dropdown.Menu.List.Item>
              ))}
            </Dropdown.Menu.List>
          </Dropdown.Menu>
        </Dropdown>
        {valgtModal !== -1 && filtrertData[valgtModal].modal(() => setValgtModal(-1))}
      </>
    </RawIntlProvider>
  );
};

export default MenySakIndex;
