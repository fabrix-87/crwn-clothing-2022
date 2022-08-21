import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartItems } from '../../store/cart/cart.selectors'
import { toggleCartIcon } from '../../store/cart/cart.slice';
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const cartItems = useSelector(getCartItems);
    
    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length === 0 
                        ? <span className='empty-message'>Your cart is empty</span> 
                        : cartItems.map(
                            (item) => <CartItem key={item.id} item={item}></CartItem>
                        )
                }
            </div>
            <CustomButton 
            onClick={() =>{ 
                navigate(`/checkout`)
                dispatch(toggleCartIcon())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;