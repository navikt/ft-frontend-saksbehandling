import React from 'react';
import Alertstripe from 'nav-frontend-alertstriper';

interface PageErrorProps {
  message: string;
}

const PageError = ({ message }: PageErrorProps) => <Alertstripe type="feil">{message}</Alertstripe>;

export default PageError;
