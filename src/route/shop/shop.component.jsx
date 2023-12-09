import React, { useContext } from 'react'

import './shop.style.scss'

import { ProductsContext } from '../../context/productProvider.context';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {

  const {products} = useContext(ProductsContext);
  
  return (
    <div className='shop'>
      {products?.map(product => {
        return(
          <ProductCard product = {product} key={product.id} />
        )
      })}
    </div>
  )
}

export default Shop;