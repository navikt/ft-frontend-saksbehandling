import type { StorybookConfig } from '@storybook/react-vite';
import { findPackageJSON } from 'node:module';
import { dirname, resolve } from 'node:path';

const getSourceDirectory = (packageJsonPath: string | undefined) => {
  if (!packageJsonPath) {
    throw new Error('Fant ikke package.json for Storybook-pakken');
  }
  return resolve(dirname(packageJsonPath), 'src');
};

const storyPackages = {
  '@navikt/ft-fakta-beregning': findPackageJSON('@navikt/ft-fakta-beregning', import.meta.url),
  '@navikt/ft-fakta-fordel-beregningsgrunnlag': findPackageJSON(
    '@navikt/ft-fakta-fordel-beregningsgrunnlag',
    import.meta.url,
  ),
  '@navikt/ft-fakta-refusjon': findPackageJSON('@navikt/ft-fakta-refusjon', import.meta.url),
  '@navikt/ft-fakta-tilbakekreving-feilutbetaling': findPackageJSON(
    '@navikt/ft-fakta-tilbakekreving-feilutbetaling',
    import.meta.url,
  ),
  '@navikt/ft-form-hooks': findPackageJSON('@navikt/ft-form-hooks', import.meta.url),
  '@navikt/ft-plattform-komponenter': findPackageJSON('@navikt/ft-plattform-komponenter', import.meta.url),
  '@navikt/ft-prosess-beregning': findPackageJSON('@navikt/ft-prosess-beregning', import.meta.url),
  '@navikt/ft-prosess-beregningsgrunnlag': findPackageJSON('@navikt/ft-prosess-beregningsgrunnlag', import.meta.url),
  '@navikt/ft-prosess-tilbakekreving': findPackageJSON('@navikt/ft-prosess-tilbakekreving', import.meta.url),
  '@navikt/ft-prosess-tilbakekreving-foreldelse': findPackageJSON(
    '@navikt/ft-prosess-tilbakekreving-foreldelse',
    import.meta.url,
  ),
  '@navikt/ft-prosess-tilbakekreving-vedtak': findPackageJSON(
    '@navikt/ft-prosess-tilbakekreving-vedtak',
    import.meta.url,
  ),
  '@navikt/ft-ui-komponenter': findPackageJSON('@navikt/ft-ui-komponenter', import.meta.url),
};

const config: StorybookConfig = {
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  stories: [
    './*.mdx',
    ...Object.entries(storyPackages).map(([titlePrefix, packageJsonPath]) => ({
      directory: getSourceDirectory(packageJsonPath),
      titlePrefix,
      files: '**/*.stories.@(ts|tsx)',
    })),
  ],
};

export default config;
