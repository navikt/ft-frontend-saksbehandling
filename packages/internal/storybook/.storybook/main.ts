import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath } from 'node:url';

const config: StorybookConfig = {
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  stories: [
    './*.mdx',
    {
      directory: fileURLToPath(new URL('../src', import.meta.resolve('@navikt/ft-fakta-beregning'))),
      titlePrefix: '@navikt/ft-fakta-beregning',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: fileURLToPath(new URL('../src', import.meta.resolve('@navikt/ft-fakta-fordel-beregningsgrunnlag'))),
      titlePrefix: '@navikt/ft-fakta-fordel-beregningsgrunnlag',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: fileURLToPath(new URL('../src', import.meta.resolve('@navikt/ft-fakta-refusjon'))),
      titlePrefix: '@navikt/ft-fakta-refusjon',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: fileURLToPath(
        new URL('../src', import.meta.resolve('@navikt/ft-fakta-tilbakekreving-feilutbetaling')),
      ),
      titlePrefix: '@navikt/ft-fakta-tilbakekreving-feilutbetaling',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: fileURLToPath(new URL('../src', import.meta.resolve('@navikt/ft-form-hooks'))),
      titlePrefix: '@navikt/ft-form-hooks',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: fileURLToPath(new URL('../src', import.meta.resolve('@navikt/ft-plattform-komponenter'))),
      titlePrefix: '@navikt/ft-plattform-komponenter',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: fileURLToPath(new URL('../src', import.meta.resolve('@navikt/ft-prosess-beregning'))),
      titlePrefix: '@navikt/ft-prosess-beregning',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: fileURLToPath(new URL('../src', import.meta.resolve('@navikt/ft-prosess-beregningsgrunnlag'))),
      titlePrefix: '@navikt/ft-prosess-beregningsgrunnlag',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: fileURLToPath(new URL('../src', import.meta.resolve('@navikt/ft-prosess-tilbakekreving'))),
      titlePrefix: '@navikt/ft-prosess-tilbakekreving',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: fileURLToPath(new URL('../src', import.meta.resolve('@navikt/ft-prosess-tilbakekreving-foreldelse'))),
      titlePrefix: '@navikt/ft-prosess-tilbakekreving-foreldelse',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: fileURLToPath(new URL('../src', import.meta.resolve('@navikt/ft-prosess-tilbakekreving-vedtak'))),
      titlePrefix: '@navikt/ft-prosess-tilbakekreving-vedtak',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: fileURLToPath(new URL('../src', import.meta.resolve('@navikt/ft-ui-komponenter'))),
      titlePrefix: '@navikt/ft-ui-komponenter',
      files: '**/*.stories.@(ts|tsx)',
    },
  ],
};

export default config;
