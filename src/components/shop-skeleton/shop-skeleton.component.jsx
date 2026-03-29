import {
  CategoryGrid,
  PreviewGrid,
  CategorySection,
  TitleSkeleton,
  ProductCardSkeletonBlock,
  SkeletonImage,
  SkeletonFooter,
  SkeletonBar,
  ShopPageWrap,
  CartControlsSkeleton,
} from './shop-skeleton.style';

const ProductCardSkeleton = () => (
  <ProductCardSkeletonBlock>
    <SkeletonImage />
    <SkeletonFooter>
      <SkeletonBar $w="70%" $h="14px" />
      <SkeletonBar $w="48px" $h="14px" />
    </SkeletonFooter>
    <CartControlsSkeleton>
      <SkeletonBar $w="100%" $h="48px" />
    </CartControlsSkeleton>
  </ProductCardSkeletonBlock>
);

/** Full shop index: several category bands with 4-card rows */
export const ShopPreviewSkeleton = () => (
  <ShopPageWrap>
    {[0, 1, 2].map((section) => (
      <CategorySection key={section}>
        <TitleSkeleton />
        <PreviewGrid>
          {[0, 1, 2, 3].map((i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </PreviewGrid>
      </CategorySection>
    ))}
  </ShopPageWrap>
);

/** Single category route: title + grid of placeholders */
export const CategoryPageSkeleton = () => (
  <ShopPageWrap>
    <SkeletonBar
      $w="200px"
      $h="42px"
      style={{ margin: '0 auto 28px', borderRadius: 6 }}
    />
    <CategoryGrid>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </CategoryGrid>
  </ShopPageWrap>
);
