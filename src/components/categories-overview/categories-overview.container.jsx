import { useSelector } from 'react-redux';
import { getCategoriesLoaded, getCategoriesMap } from '../../store/categories/categories.selectors';

import WithSpinner from '../with-spinner/with-spinner.component'
import CategoriesOverview from './categories-overview.component';

const CategoriesOverviewContainer = () =>{
    const categoriesMap = useSelector(getCategoriesMap);
    const categoriesLoaded = useSelector(getCategoriesLoaded);    

    if(!categoriesLoaded) return(<WithSpinner/>);
    return (<CategoriesOverview categoriesMap={categoriesMap}/>);
}

export default CategoriesOverviewContainer;