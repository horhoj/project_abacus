import { useMemo } from 'react';
import { AbacusLineSkin } from '../AbacusLineSkin';
import styles from './AbacusDesk.module.scss';
import { getUUID } from '~/utils/getUUID';
import { AbacusSkinType } from '~/types';

interface AbacusDeskProps {
  lines: number;
  bones: number;
  boneSkin: string;
  lineSkin: AbacusSkinType;
  topCount: number;
}

const makeArr = (count: number) =>
  Array(count)
    .fill(null)
    .map(() => getUUID());

export function AbacusDesk({ bones, lines, boneSkin, lineSkin, topCount }: AbacusDeskProps) {
  const bonesTopArr = useMemo(() => makeArr(topCount), [bones, topCount]);
  const bonesTopDown = useMemo(() => makeArr(bones - topCount), [bones, topCount]);
  const linesArr = useMemo(() => makeArr(lines), [lines]);

  return (
    <div className={styles.AbacusDesk}>
      {linesArr.map((el) => (
        <div key={el} className={styles.lineWrapper}>
          <AbacusLineSkin variant={lineSkin} topCount={topCount} />
          <div className={styles.line}>
            <div className={styles.lineUp}>
              {bonesTopArr.map((el) => (
                <img key={el} src={boneSkin} className={styles.lineBone} />
              ))}
            </div>
            <div className={styles.lineDown}>
              {bonesTopDown.map((el) => (
                <img key={el} src={boneSkin} className={styles.lineBone} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
