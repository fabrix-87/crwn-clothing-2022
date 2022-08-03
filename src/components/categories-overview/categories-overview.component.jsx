import './categories-overview.styles.scss'

import { useLocation } from "react-router-dom";
import CategoryPreview from '../category-preview/category-preview.component';

const CategoriesOverview = ({categoriesMap}) => {
    const location = useLocation();

    return (
        <div className='collections-overview'>
            {
                Object.keys(categoriesMap).map((title) => (
                    <CategoryPreview key={title} title={title} items={categoriesMap[title]} path={location.pathname}></CategoryPreview>
                ))
            }  
        </div>
    )
}

export default CategoriesOverview;