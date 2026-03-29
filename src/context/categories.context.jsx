import { useState, useEffect } from "react";
import { createContext } from "react";

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      setCategoriesLoading(true);
      setCategoriesError(null);
      try {
        const categoryMap = await getCategoriesAndDocument();
        setCategoriesMap(categoryMap);
      } catch (e) {
        setCategoriesError(
          e?.message || "Could not load products. Please try again later."
        );
      } finally {
        setCategoriesLoading(false);
      }
    };

    loadCategories();
  }, []);

  const value = { categoriesMap, categoriesLoading, categoriesError };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider; 