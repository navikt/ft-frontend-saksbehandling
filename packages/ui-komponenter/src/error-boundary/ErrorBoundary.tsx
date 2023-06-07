import { Alert } from '@navikt/ds-react';
import React, { Component, ErrorInfo } from 'react';

type Props = {
  children: React.ReactNode;
  errorMessage?: string;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children, errorMessage } = this.props;
    if (hasError) {
      return <Alert variant="error">{errorMessage || 'Noe gikk galt'}</Alert>;
    }

    return children;
  }
}

export default ErrorBoundary;
