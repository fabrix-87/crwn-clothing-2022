import { useContext } from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContex } from '../../contexts/cart.context';

const CartIcon = () => {
    const { itemsCount, toggleCartHidden } = useContext(CartContex);

    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemsCount}</span>
        </div>
    );
}

export default CartIcon;