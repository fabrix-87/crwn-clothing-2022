import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss'

const CategoryPreview = ({title, items, path}) => {
    const routeName = encodeURI(title);    
    return(
    <div className="collection-preview">
        <h1 className="title"><Link to={`${path}/${routeName.toLowerCase()}`}>{title}</Link></h1>
        <div className="preview">
        {
            items
                .filter((items,index) => index < 4)
                .map((item) => (
                    <ProductCard key={item.id} item={item}/>
                )
            )
        }
        </div>
    </div>
)}

export default CategoryPreview