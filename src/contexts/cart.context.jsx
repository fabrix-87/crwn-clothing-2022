import {useState, useEffect, createContext} from "react";

import {
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart,
    getCartTotal,
    getItemsCount
} from '../utils/cart/cart.utils';

export const CartContex = createContext({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItem: () => {},
    itemsCount: 0,
    cartTotal: 0,
    isCartOpen: false,
    toggleCartHidden: () => {}
});

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [itemsCount, setItemsCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item));
    const clearItem = (item) => setCartItems(clearItemFromCart(cartItems, item));

    const toggleCartHidden = () => setIsCartOpen(!isCartOpen);

    useEffect(() => {
        setItemsCount(getItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
    },[cartItems])

    return(
        <CartContex.Provider value={{
            cartItems,
            isCartOpen,
            cartTotal,
            itemsCount,
            addItem,
            removeItem,
            clearItem,
            toggleCartHidden
        }}>
            {children}
        </CartContex.Provider>
    )
}

export default CartProvider;