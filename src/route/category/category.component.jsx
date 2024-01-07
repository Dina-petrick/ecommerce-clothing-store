import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories.context";
import { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoryContainer, Title } from "./category.style";

const Category = () => {
    
    let {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext);
    const [products , setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])


    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
            { products &&
            products.map(product => <ProductCard key={product.id} product={product} />)
            }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category

