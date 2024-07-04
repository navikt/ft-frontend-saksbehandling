import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { Kommunikasjonsretning } from '@navikt/ft-kodeverk';
import { Dokument } from '@navikt/ft-types';

import DokumenterSakIndex from './DokumenterSakIndex';

import '@navikt/ft-ui-komponenter/dist/style.css';

const behandlingUuid = '1';

export default {
  title: 'sak/sak-dokumenter',
  component: DokumenterSakIndex,
};

const Template: StoryFn<{
  dokumenter: Dokument[];
}> = ({ dokumenter }) => (
  <div
    style={{
      width: '700px',
      height: "250px",
      margin: '50px',
      padding: '20px',
      overflow: "scroll",
      backgroundColor: 'white',
    }}
  >
    <DokumenterSakIndex
      documents={dokumenter}
      selectDocumentCallback={action('button-click')}
      behandlingUuid={behandlingUuid}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  dokumenter: [
    {
      journalpostId: '1',
      dokumentId: '1',
      behandlingUuidList: [behandlingUuid],
      tittel: 'Dette er et dokument',
      tidspunkt: '2017-08-01T02:04:25.455',
      kommunikasjonsretning: Kommunikasjonsretning.INN,
      gjelderFor: 'test1',
    },
    {
      journalpostId: '2',
      dokumentId: '2',
      behandlingUuidList: [],
      tittel: 'Dette er et nytt dokument',
      tidspunkt: '2017-02-04T02:54:25.455',
      kommunikasjonsretning: Kommunikasjonsretning.UT,
      gjelderFor: 'test2',
    },
    {
      journalpostId: '3',
      dokumentId: '3',
      behandlingUuidList: [],
      tittel: 'Dette er et tredje dokument',
      tidspunkt: '2017-01-03T10:54:25.455',
      kommunikasjonsretning: Kommunikasjonsretning.NOTAT,
      gjelderFor: 'Dette er en lang tekst som skal kuttes',
    },
    {
      journalpostId: '4',
      dokumentId: '4',
      behandlingUuidList: [],
      tittel: 'Dette er et fjerde dokument',
      tidspunkt: '2017-03-02T02:54:25.455',
      kommunikasjonsretning: Kommunikasjonsretning.UT,
      gjelderFor: 'test4',
    },
    {
      journalpostId: '5',
      dokumentId: '5',
      behandlingUuidList: [],
      tittel: 'Dette er et femte dokument',
      tidspunkt: '2017-04-01T02:54:25.455',
      kommunikasjonsretning: Kommunikasjonsretning.INN,
      gjelderFor: 'test5',
    },
  ] as Dokument[],
};

export const IngenDokumenter = Template.bind({});
IngenDokumenter.args = {
  dokumenter: [],
};
