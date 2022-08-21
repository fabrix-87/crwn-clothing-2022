import { createSelector } from "@reduxjs/toolkit";

export const getCartItems = createSelector(
    [ state => state.cart.cartItems ],
    (cartItems) => cartItems
);

export const isCartIconOpen = createSelector(
    [state => state.cart.isCartOpen],
    (isCartOpen) => isCartOpen
);

export const getItemsCount = createSelector(
    [state => state.cart.itemsCount],
    (itemsCount) => itemsCount
);

export const getCartTotal = createSelector(
    [state => state.cart.cartTotal],
    (cartTotal) => cartTotal
);

