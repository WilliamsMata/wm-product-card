import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../src/components';

const product = {
  id: '1',
  title: 'Coffee Mug - Card!',
  // img: './coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard initialValues={{ count: 4, maxCount: 10 }} product={product}>
        {({ reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
