import styles from './horizontalLine.module.css';

export const HorizontalLine = ({
  hasBorderDark,
  hasDoubleLine,
}: {
  hasBorderDark?: boolean;
  hasDoubleLine?: boolean;
}) => {
  if (hasDoubleLine) {
    return <div className={styles.doubleLine} />;
  }
  return <div className={hasBorderDark ? styles.borderDark : styles.border} />;
};
