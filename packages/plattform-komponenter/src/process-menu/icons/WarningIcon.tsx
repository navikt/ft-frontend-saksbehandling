import React from 'react';

interface WarningIconProps {
  className?: string;
}

const WarningIcon = ({ className }: WarningIconProps) => (
  <svg
    width="1.25rem"
    height="1.25em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    role="img"
    style={{ color: 'var(--ac-alert-icon-warning-color,var(--a-icon-warning))' }}
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      // eslint-disable-next-line max-len
      d="M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25ZM12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill="currentColor"
    />
  </svg>
);

export default WarningIcon;
