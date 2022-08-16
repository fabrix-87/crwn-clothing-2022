import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'

import CategoriesOverviewContainer from '../../components/categories-overview/categories-overview.container';
import CategoryContainer from '../../components/category/category.container';
import { setCategoriesLoaded, setCategories } from '../../store/categories/categories.slice';
import { getCategoriesAndProducts } from '../../utils/firebase/firebase.utils';

const Shop = () =>{
    const dispatch = useDispatch();
    
    useEffect( () => {
        const getCategoriesMap = async () => {
        const categoryArray = await getCategoriesAndProducts();
        dispatch(setCategories(categoryArray));
        dispatch(setCategoriesLoaded(true));
        }
        getCategoriesMap();
    },[dispatch])


    return (
        <div className='shop-page'>            
            <Routes>
                <Route path='/'                       
                    index
                    element={<CategoriesOverviewContainer/>}
                />
               <Route 
                    path={`:categoryId`} 
                    element={<CategoryContainer/>}  
                />
            </Routes>
        </div>                  
    )
}

export default Shop;