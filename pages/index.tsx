import type { NextPage } from 'next';
import { useState } from 'react';
import Rating from '../components/Modals/Rating';

import styles from './main.module.scss';

const Home: NextPage = () => {
  const [active, setActive] = useState<Boolean>(false);

  const onOpen = () => {
    setActive(!active);
  };
  return (
    <div className={styles.wrapper}>
      <button onClick={onOpen} className={styles.open}>
        Rate
      </button>

      {active && <Rating active={active} setActive={setActive} />}
    </div>
  );
};

export default Home;
