import { createSlice } from "@reduxjs/toolkit"

import {
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart,
    getCartTotal,
    getItemsCount
} from '../../utils/cart/cart.utils';

const INITIAL_STATE = {
    cartItems: [],
    itemsCount: 0,
    cartTotal: 0,
    isCartOpen: false
}

const updateCart = (newCart) => ({
    cartItems: newCart,
    itemsCount: getItemsCount(newCart),
    cartTotal: getCartTotal(newCart)
});

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        toggleCartIcon: (state) => {
            state.isCartOpen = !state.isCartOpen
        },
        addCartItem: (state, action) => {
            const newCartItems = addItemToCart(state.cartItems, action.payload);
            const {cartItems, itemsCount, cartTotal} = updateCart(newCartItems);
            state.cartItems = cartItems;
            state.itemsCount = itemsCount;
            state.cartTotal = cartTotal;
        },
        removeCartItem: (state, action) => {
            const newCartItems = removeItemFromCart(state.cartItems, action.payload);
            const {cartItems, itemsCount, cartTotal} = updateCart(newCartItems);
            state.cartItems = cartItems;
            state.itemsCount = itemsCount;
            state.cartTotal = cartTotal;
        },
        clearCartItem: (state, action) => {
            const newCartItems = clearItemFromCart(state.cartItems, action.payload);
            const {cartItems, itemsCount, cartTotal} = updateCart(newCartItems);
            state.cartItems = cartItems;
            state.itemsCount = itemsCount;
            state.cartTotal = cartTotal;
        }
    }
})

export const {toggleCartIcon, addCartItem, removeCartItem, clearCartItem} = cartSlice.actions;
export default cartSlice.reducer;