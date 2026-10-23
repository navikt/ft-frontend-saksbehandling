import { FormattedMessage, IntlProvider } from 'react-intl';

import { render } from '@testing-library/react';

import { NoWrap } from './NoWrap';

describe('NoWrap', () => {
  it('skal håndtere å brukes som komponent', () => {
    const result = render(<NoWrap>Test</NoWrap>);
    const span = result.container.querySelector('span');
    expect(span).toHaveTextContent('Test');
  });

  it('skal håndtere å brukes som funksjon', () => {
    const result = render(NoWrap(['T', 'e', 's', 't']));
    const span = result.container.querySelector('span');
    expect(span).toHaveTextContent('Test');
  });

  it('skal håndtere å brukes som funksjon i FormattedMessage', () => {
    const result = render(
      <IntlProvider locale="nb-NO" messages={{ 'OkAvbrytModal.Ok': '<nw>Test</nw>' } as Record<string, string>}>
        <FormattedMessage id="OkAvbrytModal.Ok" values={{ nw: NoWrap }} />
      </IntlProvider>,
    );
    const span = result.container.querySelector('span');
    expect(span).toHaveTextContent('Test');
  });
});
