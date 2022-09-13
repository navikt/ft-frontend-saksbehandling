import React, { useRef, useEffect, useState, useCallback, FunctionComponent } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { Button } from '@navikt/ds-react';
import { Image } from '@navikt/ft-ui-komponenter';
import { Popover, BoxedListWithSelection } from '@navikt/ft-plattform-komponenter';
import { createIntl } from '@navikt/ft-utils';

import openImage from './images/pil_opp.svg';
import closedImage from './images/pil_ned.svg';
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

  const menyRef = useRef<any>(null);
  const handleClickOutside = (event: Event) => {
    if (menyRef.current && !menyRef.current.contains(event.target)) {
      toggleMenyVisning();
    }
  };
  useEffect(() => {
    if (visMenySomApen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visMenySomApen]);

  const boxedList = () => (
    <BoxedListWithSelection
      items={filtrertData.map(d => ({
        name: d.tekst,
      }))}
      onClick={index => {
        setValgtModal(index);
        toggleMenyVisning();
      }}
    />
  );

  return (
    <RawIntlProvider value={intl}>
      <>
        <div ref={menyRef}>
          <Popover
            popperIsVisible={visMenySomApen}
            renderArrowElement={false}
            customPopperStyles={{ top: '2px', zIndex: 1 }}
            popperProps={{
              children: boxedList,
              placement: 'bottom-start',
              strategy: 'absolute',
            }}
            referenceProps={{
              // eslint-disable-next-line react/no-unstable-nested-components
              children: ({ ref }) => (
                <div ref={ref}>
                  <Button size="small" variant="primary" onClick={toggleMenyVisning}>
                    <FormattedMessage id="MenySakIndex.Behandlingsmeny" />
                    <span style={{ marginLeft: '5px' }}>
                      <Image src={visMenySomApen ? openImage : closedImage} />
                    </span>
                  </Button>
                </div>
              ),
            }}
          />
        </div>
        {valgtModal !== -1 && filtrertData[valgtModal].modal(() => setValgtModal(-1))}
      </>
    </RawIntlProvider>
  );
};

export default MenySakIndex;
