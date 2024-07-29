import React, { useState, useCallback, ReactNode, KeyboardEvent, MouseEvent } from 'react';

import Tooltip from './Tooltip';

export interface OwnProps {
  className?: string;
  src?: string;
  srcHover?: string;
  onMouseDown?: (event: MouseEvent) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onClick?: (event: MouseEvent) => void;
  alt?: string;
  tabIndex?: number;
  tooltip?: string | ReactNode;
  alignTooltipLeft?: boolean;
}

/**
 * Image
 *
 * Komponent som har ansvar for visning av bilder.
 *
 * @deprecated Bruk heller ikon fra https://aksel.nav.no/ikoner
 */
const Image = React.forwardRef<HTMLImageElement, OwnProps>(
  (
    {
      onClick = () => undefined,
      onMouseDown,
      tabIndex = -1,
      className = '',
      src,
      srcHover,
      alt,
      onKeyDown,
      tooltip,
      alignTooltipLeft = false,
    },
    ref,
  ) => {
    const [isHovering, setHoovering] = useState(false);

    const onFocus = useCallback((): void => {
      setHoovering(true);
    }, []);
    const onBlur = useCallback((): void => {
      setHoovering(false);
    }, []);

    const onKeyDownFn = useCallback((e: React.KeyboardEvent): void => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (onKeyDown) {
          onKeyDown(e);
        }
        e.preventDefault();
      }
    }, []);

    const imgSource = srcHover && isHovering ? srcHover : src;

    const image = (
      <img
        ref={ref}
        className={className}
        src={imgSource}
        alt={alt}
        tabIndex={tabIndex}
        onMouseOver={onFocus}
        onMouseOut={onBlur}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDownFn}
        onMouseDown={onMouseDown}
        onClick={onClick}
      />
    );

    if (!tooltip) {
      return image;
    }

    return (
      <Tooltip content={tooltip} alignLeft={alignTooltipLeft}>
        {image}
      </Tooltip>
    );
  },
);
Image.displayName = 'Image';

export default Image;
