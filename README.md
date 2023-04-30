# wm-product-card

Este es un paquete de pruebas de despliegues en NPM

### Fernando Herrera

## Ejemplo

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
