import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../context/categories.context';
import { useContext, useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryPageSkeleton } from '../../components/shop-skeleton/shop-skeleton.component';
import { ShopPageWrap, LoadingMessage } from '../../components/shop-skeleton/shop-skeleton.style';

import { CategoryContainer, Title, CategoryHeaderRow, BackToShopLink } from './category.style';

const Category = () => {
  let { category } = useParams();
  const { categoriesMap, categoriesLoading, categoriesError } =
    useContext(CategoriesContext);
  const [products, setProducts] = useState(
    category ? categoriesMap[category] : undefined
  );

  useEffect(() => {
    if (!category) return;
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  if (categoriesLoading) {
    return <CategoryPageSkeleton />;
  }

  if (categoriesError) {
    return (
      <ShopPageWrap>
        <LoadingMessage role="alert">{categoriesError}</LoadingMessage>
      </ShopPageWrap>
    );
  }

  const displayTitle = category ? category.toUpperCase() : '';

  return (
    <ShopPageWrap>
      <CategoryHeaderRow>
        <BackToShopLink to="/shop">← Back to all categories</BackToShopLink>
      </CategoryHeaderRow>
      <Title>{displayTitle}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </ShopPageWrap>
  );
};

export default Category;
