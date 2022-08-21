import { useDispatch } from 'react-redux';
import { addCartItem, clearCartItem, removeCartItem } from '../../store/cart/cart.slice';
import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const dispatch = useDispatch();

    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div className='arrow' onClick={ () => dispatch(removeCartItem(cartItem))}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={ () => dispatch(addCartItem(cartItem))}>&#10095;</div>
            </div>
            <div className='price'>{price}</div>
            <div className='remove-button' onClick={ () => dispatch(clearCartItem(cartItem))}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;