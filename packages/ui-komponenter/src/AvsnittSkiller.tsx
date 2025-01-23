import classnames from 'classnames/bind';
import VerticalSpacer from './VerticalSpacer';
import styles from './avsnittSkiller.module.css';

const classNames = classnames.bind(styles);

type Props = {
  spaceUnder?: boolean;
  spaceAbove?: boolean;
  leftPanel?: boolean;
  rightPanel?: boolean;
  dividerParagraf?: boolean;
  className?: string;
};

export const AvsnittSkiller = ({
  spaceUnder = false,
  spaceAbove = false,
  leftPanel = false,
  rightPanel = false,
  dividerParagraf = false,
  className,
}: Props) => (
  <>
    {spaceAbove && <VerticalSpacer thirtyTwoPx />}
    <div
      className={classNames(className, {
        leftPanel,
        rightPanel,
      })}
    >
      <div className={dividerParagraf ? styles.dividerParagraf : styles.divider} />
    </div>
    {spaceUnder && <VerticalSpacer thirtyTwoPx />}
  </>
);
