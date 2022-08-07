import { createContext, useReducer} from "react";

import {
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart,
    getCartTotal,
    getItemsCount
} from '../utils/cart/cart.utils';

import { createAction } from "../utils/reducer/reducer.utils";

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

const INITIAL_STATE = {
    cartItems: [],
    itemsCount: 0,
    cartTotal: 0,
    isCartOpen: false
}

export const CART_ACTION_TYPES = {
    SET_ITEMS_CART : 1,
    TOGGLE_CART_ICON : 2
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_ITEMS_CART:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.TOGGLE_CART_ICON:
            return {
                ...state,
                isCartOpen: !state.isCartOpen                
            }
        default:
            throw new Error(`Comando ${type} non presente in cartReducer`);
    }

}

const CartProvider = ({children}) => {
    const [{cartItems, isCartOpen, itemsCount, cartTotal}, dispatch] = useReducer(cartReducer,INITIAL_STATE);  

    const updateCartItemsReducer = (cartItems) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_ITEMS_CART,{
            cartItems: cartItems,
            itemsCount: getItemsCount(cartItems),
            cartTotal: getCartTotal(cartItems)
        }));
    }

    const addItem = (itemToAdd) => {
        const newCartItem = addItemToCart(cartItems, itemToAdd);
        updateCartItemsReducer(newCartItem);
    }

    const removeItem = (itemToRemove) => {
        const newCartItem = removeItemFromCart(cartItems, itemToRemove);
        updateCartItemsReducer(newCartItem);
    }

    const clearItem = (itemToClear) => {
        const newCartItem = clearItemFromCart(cartItems, itemToClear);
        updateCartItemsReducer(newCartItem);
    }

    const toggleCartHidden = () => dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_ICON));

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