import React, { useState } from 'react';
import StarIcon from '../../../assets/icon-star.svg';
import CloseIcon from '../../../assets/close.svg';
import ThankImg from '../../../assets/illustration-thank-you.svg';
import ScoreRating from '../../ScoreRating';

import styles from './Rating.module.scss';

type IProps = {
  active: Boolean;
  setActive: React.Dispatch<React.SetStateAction<Boolean>>;
};

type IComplete = {
  onClose: () => void;
  rate: Number | null;
};

const Complete: React.FC<IComplete> = ({ onClose, rate }) => {
  return (
    <>
      <button onClick={onClose} className={styles.close}>
        <CloseIcon />
      </button>

      <div className={styles.center}>
        <ThankImg />
        <div className={styles.count}>
          <>You selected {rate} out of 5</>
        </div>
        <h1 className={styles.title}>Thank you!</h1>
        <h4 className={styles.description}>
          We appreciate you taking the time to give a rating. If you ever need more support,
          don&apos;t hesitate to get in touch!
        </h4>
      </div>
    </>
  );
};

const Rating: React.FC<IProps> = ({ active, setActive }) => {
  const [rate, setRate] = useState<Number | null>(null);
  const [complete, setComplete] = useState<Boolean>(false);

  const onNext = () => {
    if (rate) {
      setComplete(!complete);
    }
  };

  const onClose = () => {
    setActive(!active);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {!complete ? (
          <>
            <div className={styles.top}>
              <div className={styles.star}>
                <StarIcon />
              </div>
              <button onClick={onClose} className={styles.close}>
                <CloseIcon />
              </button>
            </div>
            <div className={styles.info}>
              <h1 className={styles.title}>How did we do?</h1>
              <h4 className={styles.description}>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
              </h4>
            </div>

            <ScoreRating rate={rate} setRate={setRate} />

            <button onClick={onNext} className={styles.submit}>
              Submit
            </button>
          </>
        ) : (
          <Complete onClose={onClose} rate={rate} />
        )}
      </div>
    </div>
  );
};

export default Rating;
