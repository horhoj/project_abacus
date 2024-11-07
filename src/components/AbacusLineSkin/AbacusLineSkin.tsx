import classNames from 'classnames';
import styles from './AbacusLineSkin.module.scss';
import { AbacusSkinType } from '~/types';

interface AbacusLineSkinProps {
  variant: AbacusSkinType;
  topCount: number;
}
export function AbacusLineSkin({ variant, topCount }: AbacusLineSkinProps) {
  return (
    <div className={styles.AbacusLineSkinWrapper}>
      <div className={styles.AbacusLineSkin}>
        <div className={classNames(styles.topLine, styles[variant])} />
        <div className={classNames(styles.bottomLine, styles[variant])} />
        <div className={classNames(styles.centerLine, styles[variant])} />
        <div className={classNames(styles.divider, styles[variant])} style={{ top: `${topCount * 36 + 60}px` }} />
      </div>
    </div>
  );
}
