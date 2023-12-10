import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories.context";
import { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import "./category.style.scss"

const Category = () => {
    
    let {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext);
    const [products , setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])


    return (
        <Fragment>
            <h2 className="title">{category.toUpperCase()}</h2>
            <div className="category-container">
            { products &&
            products.map(product => <ProductCard key={product.id} product={product} />)
            }
            </div>
        </Fragment>
    )
}

export default Category

