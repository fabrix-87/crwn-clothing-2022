import { useDispatch } from 'react-redux';
import { addCartItem } from '../../store/cart/cart.slice';
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
    
    const dispatch = useDispatch();
    const addItem = (item) => dispatch(addCartItem(item));

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