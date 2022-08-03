import { createContext, useEffect, useState } from "react";
import { getCategoriesAndProducts } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
    categoriesLoaded: false,
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const [categoriesLoaded, setCategoriesLoaded] = useState(false);
    const value = {categoriesMap, categoriesLoaded};
    
    useEffect(() => {        
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndProducts();
            setCategoriesMap(categoryMap);
            setCategoriesLoaded(true);
        }
        getCategoriesMap();
    },[])

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
}