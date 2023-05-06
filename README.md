# wm-product-card

This is a test package for NPM deployments

## Example

```javascript
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'wm-product-card';
```

```javascript
<ProductCard initialValues={{ count: 4, maxCount: 10 }} product={product}>
  {({ reset, increaseBy, count, isMaxCountReached }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
