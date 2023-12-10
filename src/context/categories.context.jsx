import { useState, useEffect } from "react";
import { createContext } from "react";

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext();
  

const CategoriesProvider = ({children}) => {

  const [ categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument();
      console.log(categoryMap)
      setCategoriesMap(categoryMap)
    }
    
    getCategoriesMap();
  }, [])


  const value = { categoriesMap };

  return(
    <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
  )
}

export default CategoriesProvider; 