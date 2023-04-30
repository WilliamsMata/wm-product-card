import React, { CSSProperties, FC, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons: FC<Props> = ({ className, style }) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback<() => boolean>(() => maxCount === counter, [
    counter,
    maxCount,
  ]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disable : ''
        }`}
        disabled={isMaxReached()}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
