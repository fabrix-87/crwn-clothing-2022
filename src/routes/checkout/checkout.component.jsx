import { useSelector } from 'react-redux';
//import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { getCartItems, getCartTotal } from '../../store/cart/cart.selectors';

import './checkout.styles.scss'

const Checkout = () => {
    const cartItems = useSelector(getCartItems);
    const cartTotal = useSelector(getCartTotal);

    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.length 
                    ? cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item}/>)
                    : <span>Your cart is empty</span>
            }        
            <div className="total">
                <span>TOTAL: &euro; {cartTotal}</span>
            </div>
            <div>
                <span>4000003800000008</span>
            </div>
        </div>
    )
}

export default Checkout;


//<StripeCheckoutButton price={cartTotal}/>