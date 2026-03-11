import styles from './avsnittSkiller.module.css';

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
    {spaceAbove && <div style={{ marginBottom: '32px' }} />}
    <div
      className={[className, leftPanel && styles.leftPanel, rightPanel && styles.rightPanel].filter(Boolean).join(' ')}
    >
      <div className={dividerParagraf ? styles.dividerParagraf : styles.divider} />
    </div>
    {spaceUnder && <div style={{ marginBottom: '32px' }} />}
  </>
);
