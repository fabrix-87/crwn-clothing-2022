import { Route, Routes } from 'react-router-dom'

import CategoriesOverviewContainer from '../../components/categories-overview/categories-overview.container';
import CategoryContainer from '../../components/category/category.container';

const Shop = () =>{
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