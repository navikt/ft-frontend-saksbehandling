import type { StorybookConfig } from '@storybook/react-vite';
import { findPackageJSON } from 'node:module';
import { dirname, resolve } from 'node:path';

const getSourceDirectory = (packageJsonPath: string | undefined) => {
  if (!packageJsonPath) {
    throw new Error('Fant ikke package.json for Storybook-pakken');
  }
  return resolve(dirname(packageJsonPath), 'src');
};

const config: StorybookConfig = {
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  stories: [
    './*.mdx',
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-fakta-beregning', import.meta.url)),
      titlePrefix: '@navikt/ft-fakta-beregning',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-fakta-fordel-beregningsgrunnlag', import.meta.url)),
      titlePrefix: '@navikt/ft-fakta-fordel-beregningsgrunnlag',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-fakta-refusjon', import.meta.url)),
      titlePrefix: '@navikt/ft-fakta-refusjon',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-fakta-tilbakekreving-feilutbetaling', import.meta.url)),
      titlePrefix: '@navikt/ft-fakta-tilbakekreving-feilutbetaling',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-form-hooks', import.meta.url)),
      titlePrefix: '@navikt/ft-form-hooks',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-plattform-komponenter', import.meta.url)),
      titlePrefix: '@navikt/ft-plattform-komponenter',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-prosess-beregning', import.meta.url)),
      titlePrefix: '@navikt/ft-prosess-beregning',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-prosess-beregningsgrunnlag', import.meta.url)),
      titlePrefix: '@navikt/ft-prosess-beregningsgrunnlag',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-prosess-tilbakekreving', import.meta.url)),
      titlePrefix: '@navikt/ft-prosess-tilbakekreving',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-prosess-tilbakekreving-foreldelse', import.meta.url)),
      titlePrefix: '@navikt/ft-prosess-tilbakekreving-foreldelse',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-prosess-tilbakekreving-vedtak', import.meta.url)),
      titlePrefix: '@navikt/ft-prosess-tilbakekreving-vedtak',
      files: '**/*.stories.@(ts|tsx)',
    },
    {
      directory: getSourceDirectory(findPackageJSON('@navikt/ft-ui-komponenter', import.meta.url)),
      titlePrefix: '@navikt/ft-ui-komponenter',
      files: '**/*.stories.@(ts|tsx)',
    },
  ],
};

export default config;
