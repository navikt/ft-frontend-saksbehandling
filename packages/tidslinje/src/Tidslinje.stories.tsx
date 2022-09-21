import React from 'react';
import { IntlProvider } from 'react-intl';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { FloatRight, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import '@navikt/ft-ui-komponenter/dist/style.css';

import { NavBrukerKjonn } from '@navikt/ft-kodeverk';
import TimelineComp from './TimelineComp';
import kvinne from './images/kvinne.svg';
import mann from './images/mann.svg';
import LegendBox from './components/LegendBox';
import TimeLineButton from './components/TimeLineButton';
import TimeLineControl from './components/TimeLineControl';
import messages from '../i18n/nb_NO.json';
import TimeLineDataContainer from './components/TimeLineDataContainer';
import TimeLineNavigation from './components/TimeLineNavigation';
import TimeLineSokerEnsamSoker from './components/TimeLineSokerEnsamSoker';
import TimeLineSoker from './components/TimeLineSoker';

export default {
  title: 'tidslinje',
  component: TimelineComp,
};

const Template: Story = () => (
  <IntlProvider locale="nb-NO" messages={messages}>
    <TimelineComp
      options={{
        start: new Date(2022, 8, 1),
        end: new Date(2022, 12, 1),
      }}
      initialItems={[
        {
          id: 1,
          content: 'Oktober',
          group: 1,
          start: new Date(2022, 10, 1),
          end: new Date(2022, 10, 31),
          title: 'Tidslinje',
        },
      ]}
      initialGroups={[
        {
          id: 1,
          content: 'Gruppe 1',
        },
      ]}
      selectHandler={() => undefined}
      selection={[null]}
    />
    <VerticalSpacer sixteenPx />
    <LegendBox
      legends={[
        {
          src: kvinne,
          text: 'Kvinne',
        },
        {
          src: mann,
          text: 'Mann',
        },
      ]}
    />
    <VerticalSpacer sixteenPx />
    <TimeLineNavigation openPeriodInfo={() => undefined} />
    <VerticalSpacer sixteenPx />
    <TimeLineControl
      goBackwardCallback={() => undefined}
      goForwardCallback={() => undefined}
      zoomInCallback={() => undefined}
      zoomOutCallback={() => undefined}
      openPeriodInfo={() => undefined}
    />
    <VerticalSpacer sixteenPx />
    <TimeLineDataContainer>
      <FloatRight>
        <TimeLineButton text="Forrige periode" type="prev" callback={() => undefined} />
        <TimeLineButton text="Neste periode" type="next" callback={() => undefined} />
      </FloatRight>
      <VerticalSpacer sixteenPx />
      Testing
    </TimeLineDataContainer>
    <VerticalSpacer sixteenPx />
    <TimeLineSoker soker1KjonnKode={NavBrukerKjonn.MANN} soker2KjonnKode={NavBrukerKjonn.KVINNE} />
    <VerticalSpacer sixteenPx />
    <TimeLineSokerEnsamSoker hovedsokerKjonnKode={NavBrukerKjonn.KVINNE} />
  </IntlProvider>
);

export const Test = Template.bind({});
