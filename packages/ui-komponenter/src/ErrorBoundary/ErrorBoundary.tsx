import React, { Component, type ErrorInfo } from 'react';

import { Alert } from '@navikt/ds-react';

type Props = {
  children: React.ReactNode;
  errorMessage?: string;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  override render() {
    const { hasError } = this.state;
    const { children, errorMessage } = this.props;
    if (hasError) {
      return <Alert variant="error">{errorMessage || 'Noe gikk galt'}</Alert>;
    }

    return children;
  }
}
