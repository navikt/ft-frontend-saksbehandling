import React, { useState } from 'react';

import innvilgetImageUrl from './images/innvilget_valgt.svg';
import questionNormalUrl from './images/question_normal.svg';
import questionHoverUrl from './images/question_hover.svg';
import WarningModal from './WarningModal';
import Image from './Image';

export default {
  title: 'Image',
};

export const Default = () => <Image alt="Alt-tekst" src={innvilgetImageUrl} />;

export const KlikkbartIkon = () => {
  const [visModal, setVisModal] = useState(false);

  return (
    <>
      <Image alt="Alt-tekst" src={innvilgetImageUrl} onClick={() => setVisModal(true)} />
      {visModal && <WarningModal bodyText="Dette er en advarsel" showModal submit={() => setVisModal(false)} />}
    </>
  );
};

export const IkonMedTooltip = () => (
  <Image
    alt="Alt-tekst"
    src={innvilgetImageUrl}
    tooltip={
      <div>
        <b>Dette er en tooltip-tekst</b>
      </div>
    }
  />
);

export const AnnetIkonVedHoover = () => <Image alt="Alt-tekst" src={questionNormalUrl} srcHover={questionHoverUrl} />;
