import { useMemo, useState } from 'react';
import styles from './AbacusDeskItem.module.scss';
import { makeArr } from '~/utils/makeArr';

interface AbacusDeskItemProps {
  boneSkin: string;
  count: number;
}

export function AbacusDeskItem({ boneSkin, count }: AbacusDeskItemProps) {
  const [value, setValue] = useState(-1);

  const bonesArr = useMemo(() => makeArr(count), [count]);

  return (
    <div className={styles.AbacusDeskItem}>
      {bonesArr.map((id, i) => (
        <button
          key={id}
          className={styles.btn}
          tabIndex={-1}
          onClick={() => setValue((prev) => (i > prev ? i : i - 1))}
          style={{ transform: `translateY(${i > value ? 50 : 0}px)` }}
        >
          <img src={boneSkin} alt="bone" />
        </button>
      ))}
    </div>
  );
}
