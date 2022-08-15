import React from 'react';

import styles from './ScoreRating.module.scss';

type IProps = {
  rate: Number | null;
  setRate: React.Dispatch<React.SetStateAction<Number | null>>;
};

const arr = Array(5)
  .fill(5)
  .map((el, i) => 5 - i);

const ScoreRating: React.FC<IProps> = ({ rate, setRate }) => {
  const onRate = (index: Number) => () => {
    setRate(index);
  };
  return (
    <div className={styles.wrapper}>
      {arr.map((item, index) => (
        <button
          onClick={onRate(item)}
          key={index}
          disabled={rate === item}
          className={styles.score}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default ScoreRating;
