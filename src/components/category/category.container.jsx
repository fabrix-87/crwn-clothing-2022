import WithSpinner from '../with-spinner/with-spinner.component'
import Category from './category.component'

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCategoriesLoaded, getCategoriesMap } from '../../store/categories/categories.selectors';

const CategoryContainer = () => {
    const {categoryId} = useParams();
    const categoriesMap = useSelector(getCategoriesMap);
    const categoriesLoaded = useSelector(getCategoriesLoaded);    

    if(!categoriesLoaded) return (<WithSpinner/>);
    return (<Category categoryTitle={categoryId} items={categoriesMap[categoryId]}/>);
}

export default CategoryContainer;