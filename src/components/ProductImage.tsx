import React, { CSSProperties, FC, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage: FC<Props> = ({ img, className, style }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      src={imgToShow}
      alt="Product"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};

ProductImage.defaultProps = {
  img: '',
};
