import classnames from 'classnames/bind';

import styles from './verticalSpacer.module.css';

const classNames = classnames.bind(styles);

export interface Props {
  fourPx?: boolean;
  eightPx?: boolean;
  sixteenPx?: boolean;
  twentyPx?: boolean;
  thirtyTwoPx?: boolean;
  fourtyPx?: boolean;
}

/**
 * @deprecated Bruk heller VStack fra https://aksel.nav.no/komponenter
 */
export const VerticalSpacer = ({
  fourPx = false,
  eightPx = false,
  sixteenPx = false,
  twentyPx = false,
  thirtyTwoPx = false,
  fourtyPx = false,
}: Props) => (
  <div
    className={classNames({
      fourPx,
      eightPx,
      sixteenPx,
      twentyPx,
      thirtyTwoPx,
      fourtyPx,
    })}
  />
);
