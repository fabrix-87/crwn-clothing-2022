import WithSpinner from '../with-spinner/with-spinner.component'
import Category from './category.component'

import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { useParams } from 'react-router-dom';


const CategoryContainer = () => {
    const {categoryId} = useParams();
    const {categoriesMap, categoriesLoaded} = useContext(CategoriesContext);

    if(!categoriesLoaded) return (<WithSpinner/>);
    return (<Category categoryTitle={categoryId} items={categoriesMap[categoryId]}/>);
}

export default CategoryContainer;