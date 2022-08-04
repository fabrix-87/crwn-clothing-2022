import React, {useContext} from 'react';
import { CartContex } from '../../contexts/cart.context';

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const { addItem, removeItem, clearItem } = useContext(CartContex);

    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div className='arrow' onClick={ () => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={ () => addItem(cartItem)}>&#10095;</div>
            </div>
            <div className='price'>{price}</div>
            <div className='remove-button' onClick={ () => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;