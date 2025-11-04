import React from 'react';
import ProductCard from './ProductCard';

//component that receives the list of products from app
function ProductList({ products, onRemoveProduct }) {
  //check the product availability
  const hasInStock = products.some((product) => product.inStock);

  return (
    //using the fragments to group elements
    <>
    {!hasInStock && <p>No products are avaiable in stock!</p>}
    {products.map((product) => ( 
      <ProductCard
       key={product.id}
        product={product} 
        onRemove={onRemoveProduct}
        />
    )) }
    </>
  );
}

export default ProductList;
