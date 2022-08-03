import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import WithSpinner from '../with-spinner/with-spinner.component'
import CategoriesOverview from './categories-overview.component';

const CategoriesOverviewContainer = () =>{
    const {categoriesMap, categoriesLoaded} = useContext(CategoriesContext);

    if(!categoriesLoaded) return(<WithSpinner/>);
    return (<CategoriesOverview categoriesMap={categoriesMap}/>);
}

export default CategoriesOverviewContainer;