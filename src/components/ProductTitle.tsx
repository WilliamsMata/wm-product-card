import React, { CSSProperties, FC, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

export const ProductTitle: FC<Props> = ({ title, className, style }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
