import React, { useContext } from 'react';

import { CategoriesContext } from '../../context/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import {
  ShopPreviewSkeleton,
} from '../../components/shop-skeleton/shop-skeleton.component';
import { ShopPageWrap, LoadingMessage } from '../../components/shop-skeleton/shop-skeleton.style';

const CategoriesPreview = () => {
  const { categoriesMap, categoriesLoading, categoriesError } =
    useContext(CategoriesContext);

  if (categoriesLoading) {
    return <ShopPreviewSkeleton />;
  }

  if (categoriesError) {
    return (
      <ShopPageWrap>
        <LoadingMessage role="alert">{categoriesError}</LoadingMessage>
      </ShopPageWrap>
    );
  }

  return (
    <ShopPageWrap className="categories-preview-container">
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </ShopPageWrap>
  );
};

export default CategoriesPreview;
