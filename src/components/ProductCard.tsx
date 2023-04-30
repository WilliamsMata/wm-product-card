import React, { CSSProperties, FC, createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import {
  InitialValues,
  Product,
  ProductCardHandlers,
  ProductContextProps,
  onChangeArgs,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children: (args: ProductCardHandlers) => React.ReactNode;
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard: FC<Props> = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
