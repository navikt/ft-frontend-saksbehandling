import React, { JSX } from 'react';

import { Loader } from '@navikt/ds-react';

import { PageError } from '../PageError/PageError';

import styles from './pageContainer.module.css';

interface PageContainerProps {
  isLoading?: boolean;
  hasError?: boolean;
  preventUnmount?: boolean;
  children?: React.ReactNode;
}

/**
 * @deprecated Definer heller sidelayout direkte i applikasjon. Denne kjem aldri til å blir brukt i fp-frontend
 */
export const PageContainer = ({ isLoading, hasError, preventUnmount, children }: PageContainerProps): JSX.Element => {
  const shouldHideChildren = isLoading || hasError;

  const renderChildrenContent = () => {
    if (preventUnmount) {
      return <div className={shouldHideChildren ? styles.visuallyHidden : ''}>{children}</div>;
    }
    if (shouldHideChildren) {
      return null;
    }
    return children;
  };

  return (
    <>
      {isLoading && <Loader size="large" />}
      {hasError && <PageError message="Noe gikk galt, vennligst prøv igjen senere" />}
      {renderChildrenContent()}
    </>
  );
};
