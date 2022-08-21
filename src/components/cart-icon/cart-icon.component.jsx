import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { getItemsCount } from '../../store/cart/cart.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartIcon } from '../../store/cart/cart.slice';

const CartIcon = () => {
    const itemsCount = useSelector(getItemsCount);

    const dispatch = useDispatch();

    const toggleIcon = () => {
        dispatch(toggleCartIcon());
    }

    return(
        <div className="cart-icon" onClick={toggleIcon}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemsCount}</span>
        </div>
    );
}

export default CartIcon;