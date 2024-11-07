import { useState } from 'react';
import styles from './App.module.scss';
import { AbacusDesk } from '~/components/AbacusDesk';
import boneSkin1 from '~/assets/abacus_bone__skin_1.png';
import boneSkin2 from '~/assets/abacus_bone__skin_2.png';

import { Button } from '~/ui/Button';
import { AbacusSkinType } from '~/types';
import { InputCounter } from '~/ui/InputCounter';

export function App() {
  const [lineSkin, setLineSkin] = useState<AbacusSkinType>('graySkin');
  const [boneSkin, setBoneSkin] = useState(boneSkin1);
  const [bones, setBones] = useState(5);
  const [lines, setLines] = useState(10);
  const [topCount, setTopCount] = useState(2);

  const handleChangeBones = (value: number) => {
    const actualValue = value;
    if (actualValue < 2 || actualValue > 51) {
      return;
    }
    if (actualValue < topCount) {
      setTopCount(actualValue);
    }
    setBones(actualValue);
  };

  const handleChangeLines = (value: number) => {
    const actualValue = value;
    if (actualValue < 2 || actualValue > 16) {
      return;
    }
    setLines(value);
  };

  const handleChangeTopCount = (value: number) => {
    const actualValue = value;
    if (actualValue < 0 || actualValue > bones) {
      return;
    }
    setTopCount(value);
  };

  return (
    <>
      <div className={styles.App}>
        <div className={styles.controlsWrapper}>
          <div className={styles.controlsRow}>
            <Button onClick={() => setLineSkin('redSkin')} isActive={lineSkin === 'redSkin'}>
              Скин Рамки 1
            </Button>
            <Button onClick={() => setLineSkin('graySkin')} isActive={lineSkin === 'graySkin'}>
              Скин Рамки 2
            </Button>
            <Button onClick={() => setBoneSkin(boneSkin1)} isActive={boneSkin === boneSkin1}>
              Скин Кости 1
            </Button>
            <Button onClick={() => setBoneSkin(boneSkin2)} isActive={boneSkin === boneSkin2}>
              Скин Кости 2
            </Button>
          </div>
          <div className={styles.controlsRow}>
            {' '}
            <InputCounter label={'Кол-во костей'} value={bones} onChange={handleChangeBones} />
            <InputCounter label={'Длинна абакуса'} value={lines} onChange={handleChangeLines} />
            <InputCounter label={'Кол-во костей вверху'} value={topCount} onChange={handleChangeTopCount} />
          </div>
        </div>
        <AbacusDesk bones={bones} lines={lines} topCount={topCount} boneSkin={boneSkin} lineSkin={lineSkin} />
      </div>
    </>
  );
}
