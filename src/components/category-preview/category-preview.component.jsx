import ProductCard from '../product-card/product-card.component';

import { CategoryPreviewContainer, Title, Preview,TitleLink, Arrow } from './category-preview.style';


import React from 'react'

const CategoryPreview = ({title, products}) => {

  return (
    <CategoryPreviewContainer>
      <Title>
        <TitleLink to={title}>
          {title.toUpperCase()} 
          <Arrow> &gt; </Arrow>
        </TitleLink>
      </Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview