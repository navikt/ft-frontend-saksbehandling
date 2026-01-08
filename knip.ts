import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
    'packages/prosess-beregningsgrunnlag/src/kodeverk/vilkarType.ts',
    'packages/fakta-beregning/src/kodeverk/organisasjonstype.ts',
  ],
};

export default config;
