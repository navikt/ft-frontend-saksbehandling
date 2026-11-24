import { Theme } from '@navikt/ds-react';
import type { ReactRenderer } from '@storybook/react-vite';
import type { DecoratorFunction } from 'storybook/internal/types';

export const withThemeDecorator: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const theme = context.globals['theme'] === 'dark' ? 'dark' : 'light';

  return (
    <Theme theme={theme}>
      <style>{`body.sb-show-main { background: ${theme === 'dark' ? '#0e151f' : '#fff'} !important; }`}</style>
      <Story />
    </Theme>
  );
};
