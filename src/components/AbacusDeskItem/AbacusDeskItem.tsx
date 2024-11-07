import { useMemo, useState } from 'react';
import styles from './AbacusDeskItem.module.scss';
import { makeArr } from '~/utils/makeArr';

interface AbacusDeskItemProps {
  boneSkin: string;
  count: number;
}

export function AbacusDeskItem({ boneSkin, count }: AbacusDeskItemProps) {
  const [value, setValue] = useState(0);

  const bonesTopArr = useMemo(() => makeArr(value), [value, count]);

  const bonesBottomArr = useMemo(() => makeArr(count - value), [value, count]);

  return (
    <div className={styles.AbacusDeskItem}>
      <div className={styles.top}>
        {bonesTopArr.map((el, i) => (
          <button key={el} onClick={() => setValue(i)} className={styles.btn}>
            <img key={el} src={boneSkin} className={styles.lineBone} />
          </button>
        ))}
      </div>

      <div className={styles.bottom}>
        {bonesBottomArr.map((el, i) => (
          <button key={el} onClick={() => setValue(i + value + 1)} className={styles.btn}>
            <img key={el} src={boneSkin} className={styles.lineBone} />
          </button>
        ))}
      </div>
    </div>
  );
}
