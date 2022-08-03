import React from "react";
import ProductCard from "../product-card/product-card.component";

import './category.styles.scss'

const Category = ({categoryTitle, items}) => {    

    return (
        <div className="collection-page">
            <h2 className='title'>{categoryTitle}</h2>
            <div className='items'>
                {
                    items.map( item => <ProductCard key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default Category