import { useMemo } from 'react';
import { AbacusLineSkin } from '../AbacusLineSkin';
import { AbacusDeskItem } from '../AbacusDeskItem/AbacusDeskItem';
import styles from './AbacusDesk.module.scss';
import { AbacusSkinType } from '~/types';
import { makeArr } from '~/utils/makeArr';

interface AbacusDeskProps {
  lines: number;
  bones: number;
  boneSkin: string;
  lineSkin: AbacusSkinType;
  topCount: number;
}

export function AbacusDesk({ bones, lines, boneSkin, lineSkin, topCount }: AbacusDeskProps) {
  const linesArr = useMemo(() => makeArr(lines), [lines, topCount, bones]);

  return (
    <div className={styles.AbacusDesk}>
      {linesArr.map((el) => (
        <div key={el} className={styles.lineWrapper}>
          <AbacusLineSkin variant={lineSkin} topCount={topCount} />
          <div className={styles.line}>
            <div className={styles.lineUp}>
              <AbacusDeskItem boneSkin={boneSkin} count={topCount} />
            </div>
            <div className={styles.lineDown}>
              <AbacusDeskItem boneSkin={boneSkin} count={bones - topCount} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
