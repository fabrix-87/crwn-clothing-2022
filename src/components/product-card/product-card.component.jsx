import {useContext} from 'react'
import { CartContex } from '../../contexts/cart.context'

import {
    CollectionImageContainer,
    CollectionItemContainer,
    CollectionItemPrice,
    CollectionItemName,
    CollectionFooterContainer,
    AddButton
} from './product-card.styles'

const ProductCard = ({item}) => {

    const { imageUrl, name, price} = item;
    const {addItem} = useContext(CartContex);

    return (
        <CollectionItemContainer>
            <CollectionImageContainer imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <CollectionItemName>{name}</CollectionItemName>
                <CollectionItemPrice>{price}</CollectionItemPrice>
            </CollectionFooterContainer>    
            <AddButton onClick={() => {addItem(item)}} customClass="inverted">Add to cart</AddButton>
        </CollectionItemContainer>
    );
}

export default ProductCard;