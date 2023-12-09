import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductsContext = createContext();
  


const ProductProvider = ({children}) => {
    const [products, setProducts] = useState();

    const value = {products, setProducts};


    useEffect(() => {
      let productData = async () => {
        const res = await fetch("https://raw.githubusercontent.com/ZhangMYihua/crwn-clothing-v2/lesson-16/src/shop-data.json");
        const data = await res.json()
        setProducts(data)
      }

      return productData;
    }, [])

  return(
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}

export default ProductProvider;