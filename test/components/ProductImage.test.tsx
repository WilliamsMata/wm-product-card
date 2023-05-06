import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Debe de mostrar el componente correctamente la imagen personalizada', () => {
    const imageUrl = './some-image-test.jpg';

    const wrapper = renderer.create(
      <ProductImage img={imageUrl} className="custom-class" />
    );

    const { props } = wrapper.toJSON() as { props: { src?: string } };

    expect(props.src).toEqual(imageUrl);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
