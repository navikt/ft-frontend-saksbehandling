import React from 'react';

export default {
  title: 'info',
};

// Denne er laga fordi storybook composition ikkje funkar utan å sette opp 'stories' i main.js

export const info = () => (
  <div>Dette er en sammenstilling av alle storybooks i monorepoet</div>
);
