import { FC } from "react";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
  maxCount?: number;
}

export interface ProductCardHOCProps extends FC<ProductCardProps> {
  Title: FC<ProductTitleProps>;
  Image: FC<ProductImageProps>;
  Buttons: FC<ProductButtonsProps>;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
  maxCount?: number;
}
